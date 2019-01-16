const webpack = require('webpack');
const dotenv = require('dotenv');
const StringReplacePlugin = require('string-replace-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const minify = require('harp-minify');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Buildify = require('buildify');
const path = require('path');
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');
const withPlugins = require('next-compose-plugins');
const withTM = require('next-plugin-transpile-modules');
const {
  ENV_DEVELOPMENT,
  STATIC_FOLDER_PREFIX,
  ENV_PRODUCTION,
} = require('../isomorphic/constants');

const { parsed: envVars } = dotenv.config({
  path: path.resolve(
    __dirname,
    `..${path.sep}env${path.sep}${process.env.NODE_ENV || ENV_DEVELOPMENT}.env`
  ),
});

const getRegExp = () => {
  const regex = `${STATIC_FOLDER_PREFIX}`;
  return new RegExp(regex, 'ig');
};
const metricsKey = process.env.ENV_API_KEY === process.env.PROD_KEY ? 'prod' : 'dev';

module.exports = withPlugins([withBundleAnalyzer, withTM], {
  transpileModules: ['atomic-react-pattern-lib'],
  webpack: (config, { dev, buildId, isServer }) => {
    config.plugins.push(new webpack.EnvironmentPlugin(envVars));

    config.module.rules.push({
      test: /\.css$/,
      use: ['babel-loader', 'raw-loader'],
    });

    const originalEntry = config.entry;
    config.entry = async () => {
      const entries = await originalEntry();
      if (entries['main.js']) {
        entries['main.js'].unshift(
          path.resolve(__dirname, `.${path.sep}static${path.sep}libs${path.sep}polyfills.js`)
        );
      }
      return entries;
    };

    if (process.env.NODE_ENV === ENV_PRODUCTION) {
      if (isServer) {
        const foundation = {
          destPath: '/app/.next/dist/static/styles/vendor/',
          files: [
            path.resolve(__dirname, '/node_modules/normalize.css/normalize.css'),
            path.resolve(__dirname, '/node_modules/flexboxgrid/css/flexboxgrid.css'),
            path.resolve(__dirname, '/app/static/styles/icons/icomoon.css'),
          ],
          fileName: 'foundation',
        };

        Buildify()
          .concat(foundation.files)
          .cssmin()
          .save(path.resolve(__dirname, `${foundation.destPath}${foundation.fileName}.css`));
      }
      config.plugins.push(new StringReplacePlugin());
      config.plugins.push(
        new CopyWebpackPlugin(
          [
            {
              from: path.join(__dirname, '/static/**/*'),
              to: path.join(__dirname, '/.next/dist'),
              transform(content, filePath) {
                if (filePath.endsWith('.css')) {
                  return minify.css(content.toString());
                }
                if (filePath.endsWith('.js') && filePath.indexOf('polyfills') === -1) {
                  /* exclude any file that has es6 code as the plugin cannot uglifiy it
               ref:https://github.com/webpack-contrib/uglifyjs-webpack-plugin/issues/7 */
                  return minify.js(content.toString());
                }
                return content;
              },
            },
          ],
          {}
        )
      );

      // add build id before static resources for cache busting
      config.module.rules.push({
        test: [/\.css$/, /\.js$/],
        loader: StringReplacePlugin.replace({
          replacements: [
            {
              pattern: getRegExp(),
              replacement(match) {
                return `${match}${buildId}/`;
              },
            },
          ],
        }),
      });
    }

    // Following check is for prod builds and client only
    if (!dev && !isServer) {
      // TODO: revisit service worker approach
      // config.plugins.push(new SWPrecacheWebpackPlugin({
      //   verbose: true,
      //   staticFileGlobsIgnorePatterns: [/\.next\//],
      //   runtimeCaching: [
      //     {
      //       handler: 'networkFirst',
      //       urlPattern: /^https?.*/,
      //     },
      //   ],
      // }));

      /* eslint no-param-reassign:0 */
      // const oldEntry = config.entry;
      //
      // config.entry = () =>
      //   oldEntry().then((entry) => {
      //     entry['main.js'].push(path.resolve(__dirname,
      //          `.${path.sep}lib${path.sep}pwa${path.sep}offline.js`));
      //     return entry;
      //   });

      config.resolve = {
        alias: {
          winston: path.resolve(__dirname, 'lib/fake/winston.js'),
          'winston-logrotate': path.resolve(__dirname, 'lib/fake/winston.js'),
          'memory-cache': path.resolve(__dirname, 'lib/fake/memory-cache.js'),
        },
      };

      config.plugins.push(
        new UglifyJsPlugin({
          parallel: true,
          uglifyOptions: {
            compress: true,
            mangle: true,
          },
          sourceMap: false,
        })
      );
    }

    config.resolve.alias.fs = path.resolve(__dirname, 'lib/fake/fs.js');

    return config;
  },
  analyzeServer: process.env.NODE_ENV === 'production',
  analyzeBrowser: process.env.NODE_ENV === 'production',
  bundleAnalyzerConfig: {
    server: {
      analyzerMode: 'static',
      reportFilename: path.join(__dirname, '../../reports/bundleAnalyzer/report-server.html'),
    },
    browser: {
      analyzerMode: 'static',
      reportFilename: path.join(__dirname, '../../reports/bundleAnalyzer/report-client.html'),
    },
  },
  publicRuntimeConfig: {
    metricsKey,
    isCachingEnabled: process.env.CACHE_ENABLED !== 'false',
    isProd: process.env.PROD_ENV === 'true',
  },
});
