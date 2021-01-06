$('a[href^="#"]').on('click', function () {
    var speed = 500;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var windowWidth = $(window).width();
    var windowSm = 980;
    if (windowWidth <= windowSm) {
      var position = target.offset().top - 89;
    } else {
      var position = target.offset().top - 96;
    }
    $("html, body").animate({scrollTop: position}, speed, "swing");
    return false;
  });

  $(function(){
    $('.btn-trigger').on('click', function() {
      $(this).toggleClass('active');
      $(".header-nav").fadeToggle(500);
      return false;
    });

    $('.header-link').on('click', function() {
      var windowWidth = $(window).width();
    var windowSm = 980;
    if (windowWidth <= windowSm) {
      $(".header-nav").fadeOut(500);
    } else {
    }
      $(".btn-trigger").toggleClass('active');
      return false;
    });
  });