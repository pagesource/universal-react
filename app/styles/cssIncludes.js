const cssIncludes = [];

if (process.env.NODE_ENV === 'development' || true) {
  cssIncludes.push('/static/styles/font-awesome.min.css', '/static/styles/main.css');
}

export default cssIncludes.map((src, index) => ({
  id: `css-include-${index}`,
  src,
}));
