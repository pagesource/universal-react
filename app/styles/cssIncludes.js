const cssIncludes = [];

// TODO: Check why these css files were added only in production build
if (process.env.NODE_ENV === 'development' || true) {
  cssIncludes.push('_next/static/styles/font-awesome.min.css', '_next/static/styles/main.css');
}

export default cssIncludes.map((src, index) => ({
  id: `css-include-${index}`,
  src,
}));
