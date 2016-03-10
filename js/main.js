/*
 * @Author: Administrator
 * @Date:   2015-12-12 16:13:53
 * @Last Modified by:   changlijie
 * @Last Modified time: 2016-03-11 01:15:58
 */

'use strict';
$(function() {

  function resize() {
    var windowWidth = $(window).width();
    // 判断屏幕属于大还是小
    var isSmallScreen = windowWidth < 768;
    // 根据大小为界面上的每一张轮播图设置背景
    // $('#main_ad > .carousel-inner > .item') // 获取到的是一个DOM数组（多个元素）
    $('#main_ad > .carousel-inner > .item').each(function(i, item) {
      var $item = $(item); // 因为拿到是DOM对象 需要转换
      // var imgSrc = $item.data(isSmallScreen ? 'image-xs' : 'image-lg');
      var imgSrc =
        isSmallScreen ? $item.data('image-xs') : $item.data('image-lg');

      // 设置背景图片
      $item.css('backgroundImage', 'url("' + imgSrc + '")');
      if (isSmallScreen) {
        $(item).html('<img src="' + imgSrc + '" alt="" />')
      } else {
        $(item).empty();
      }
    });
  }
  // $(window).on('resize', resize);
  // // 让window对象立即触发一下resize
  // $(window).trigger('resize');
  $(window).on('resize', resize).trigger('resize');

  /*设置产品推荐ul里的手机版横向滚动*/
  var $ulcontainer = $(".nav-tabs");
  var width = 30;
  $ulcontainer.children().each(function(index,element){
    /*console.log(element.clientWidth)*/
    width += element.clientWidth;
  });
  $ulcontainer.css("width",width);
  console.log($ulcontainer.width());
});
