// function LoadImage(){
//   let main_visual = "./images/MainVisual_NoBackGround@4x.png";
//   let main_smart_visual = "./images/forSmartPhone_NoBackGround@4x.png";
//   if(window.innerWidth > window.innerHeight){
//     $("#main_visual").attr("src", main_visual);
//   }else{
//     $("#main_smart_visual").attr("src", main_smart_visual);
//   }
// }

$(function() {
  var $win = $(window),
      $cloneNav = $('nav').clone().addClass('clone_nav').appendTo('body'),
      showClass = 'is-show';

  $win.on('load scroll', function() {
    var value = $(this).scrollTop();
    if ( value > 500 ) {
      $cloneNav.addClass(showClass);
    } else {
      $cloneNav.removeClass(showClass);
    }
  });
});


$(function() {
    $('[id^=image]').hover(function() {
        var imageid = $(this).attr('id');

        $('#'+imageid).css('-webkit-filter', 'grayscale(70%)');
        $('#'+imageid).css('filter', 'grayscale(70%)');
        $('#'+imageid).css('-webkit-transition', '.3s ease-in-out');
        $('#'+imageid).css('transition', '.3s ease-in-out');
    },
    function() {
        var imageid = $(this).attr('id');

        $('#'+imageid).css('-webkit-filter', 'grayscale(0)');
        $('#'+imageid).css('filter', 'grayscale(0)');
    })
  });

var value;
$(document).on('click', '[id^=image]', function() {
  value = $(this).attr('value');
  $('#modal-contents-' + value).css('display', 'block');
  $('.modal-overlay').hide().fadeIn(100);
});

$(document).on('click', '.modal-overlay', function() {
  $('#modal-contents-' + value).css('display', 'none');
  $('.modal-overlay').fadeOut(100);
});

$(document).ready(function(){
  $('a[href^="#"]').click(function() {
    //ページ内リンク先を取得
    var href= $(this).attr("href");
    //リンク先が#か空だったらhtmlに
    var hash = href == "#" || href == "" ? 'html' : href;
    //スクロール実行
    scrollToAnker(hash);
    return false;
  });

  // 指定したアンカー(#ID)へアニメーションでスクロール
  function scrollToAnker(hash) {
    var target = $(hash);
    var position = target.offset().top-100;
    console.log('position');
    $('body,html').stop().animate({scrollTop:position}, 1000);
  }
})

$(function(){
    $(window).on("load orientationchange resize", function() {

// TODO:あとでやる
        if(Math.abs(window.orientation) === 90) {
        } else {
        }
    });
});
