const cssIncludes = [];

cssIncludes.push('_next/static/styles/font-awesome.min.css', '_next/static/styles/main.css');

export default cssIncludes.map((src, index) => ({
  id: `css-include-${index}`,
  src,
}));
