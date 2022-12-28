export const tabCustom = () => {
  let tabText = $('.tab-link.w--current').text();

  $('.tab-link').on('click', function () {
    const tabClick = $(this).text();
    $('.text-block-dropdown').text(tabClick);
  });

  $('.text-block-dropdown').text(tabText);

  //   $('.text-block-dropdown').text(textTab);
};
