import { setConfig } from 'next/config';
import config from '../app/next.config';

setConfig(config.publicRuntimeConfig);

const { configure } = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

configure({ adapter: new Adapter() });
