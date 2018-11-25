/* eslint-disable import/prefer-default-export */
const getStickyScrollPosition = () => {
  const header = document.getElementsByTagName('header')[0]
    ? document.getElementsByTagName('header')[0].clientHeight
    : 0;
  const bannerHeight = document.getElementById('pphBanner')
    ? document.getElementById('pphBanner').clientHeight
    : 0;
  return header + bannerHeight;
};

export { getStickyScrollPosition };
