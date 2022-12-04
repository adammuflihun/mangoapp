import { swiperslide } from '$utils/swiperHome';

window.Webflow ||= [];
window.Webflow.push(() => {
  swiperslide();
});

$('body').append('<link rel="stylesheet" type="text/css" href="{url}">');
