export const aboutUs = () => {
  console.log('about us');

  //cms sync

  // CMS LIST SYNC POWER-UP

  // attribute value checker
  function attr(defaultVal, attrVal) {
    const defaultValType = typeof defaultVal;
    if (typeof attrVal !== 'string' || attrVal.trim() === '') return defaultVal;
    if (attrVal === 'true' && defaultValType === 'boolean') return true;
    if (attrVal === 'false' && defaultValType === 'boolean') return false;
    if (isNaN(attrVal) && defaultValType === 'string') return attrVal;
    if (!isNaN(attrVal) && defaultValType === 'number') return +attrVal;
    return defaultVal;
  }
  // cms list sync component
  $("[tr-listsync-element='component']").each(function (index) {
    let componentEl = $(this),
      cmsListEl = componentEl.find("[tr-listsync-element='list']"),
      cmsItemEl = cmsListEl.children(),
      prevButtonEl = componentEl.find("[tr-listsync-element='button-prev']"),
      nextButtonEl = componentEl.find("[tr-listsync-element='button-next']");
    let onLoadSetting = attr(false, componentEl.attr('tr-listsync-onload')),
      activeIndexSetting = attr(0, componentEl.attr('tr-listsync-activeindex')),
      activeClassSetting = attr('is-active', componentEl.attr('tr-listsync-activeclass'));
    function addActive(trigger) {
      cmsItemEl.removeClass(activeClassSetting);
      let itemIndex = trigger.index();
      cmsListEl.each(function () {
        $(this).children().eq(itemIndex).addClass(activeClassSetting);
      });
    }
    if (onLoadSetting) addActive(cmsItemEl.eq(activeIndexSetting));
    cmsListEl.each(function () {
      let childrenItemEl = $(this).children(),
        clickSetting = attr(true, $(this).attr('tr-listsync-click')),
        hoverInSetting = attr(false, $(this).attr('tr-listsync-hoverin')),
        hoverOutSetting = attr(false, $(this).attr('tr-listsync-hoverout'));
      if (clickSetting) {
        childrenItemEl.on('click', function () {
          addActive($(this));
        });
      }
      if (hoverInSetting) {
        childrenItemEl.on('mouseenter', function () {
          addActive($(this));
        });
      }
      if (hoverOutSetting) {
        childrenItemEl.on('mouseleave', function () {
          cmsItemEl.removeClass(activeClassSetting);
        });
      }
    });
    prevButtonEl.on('click', function () {
      cmsListEl.each(function (index) {
        let childrenItemEl = $(this).children();
        let currentItemEl = childrenItemEl
          .filter('.' + activeClassSetting)
          .removeClass(activeClassSetting);
        let prevItemEl = currentItemEl.prev();
        if (prevItemEl.length === 0) prevItemEl = childrenItemEl.last();
        prevItemEl.addClass(activeClassSetting);
      });
    });
    nextButtonEl.on('click', function () {
      cmsListEl.each(function (index) {
        let childrenItemEl = $(this).children();
        let currentItemEl = childrenItemEl
          .filter('.' + activeClassSetting)
          .removeClass(activeClassSetting);
        let nextItemEl = currentItemEl.next();
        if (nextItemEl.length === 0) nextItemEl = childrenItemEl.first();
        nextItemEl.addClass(activeClassSetting);
      });
    });
  });

  $('.button-close , .button-close-bg, .f-wrapper-bg').on('click', function () {
    $('.wrapper-card-people').removeClass('is-active');
    $('.wrapper-people-active').removeClass('is-active');
  });

  //cms sync
};
