
resize();

$( window ).resize(function() {
  resize();
});

function resize(){
  var windowHeight = $(window).height();

  // FULL HEIGHT SECTIONS
  $('.fullHeight').css('min-height',windowHeight);
  // vertically center
  $('.vertCenter').each(function() {
    var elementHeight = $(this).height();
    $(this).velocity({
      top: '50%',
      'margin-top': -elementHeight / 2
    });
  });
}



// var waypoints = $('#module-3').waypoint(function(direction) {
//   if(direction == 'down'){
//     console.log(this.element.id + ' hit 50% from top of window');
//   } else {
//     console.log(this.element.id + ' hit 50% from bottom of window');
//   }

// }, {
//   offset: '50%'
// })


$(window).on('scroll', function() {


  // SCROLL PARALAX

  var scroll = $(window).scrollTop();
  var windowHeight = $(window).height();

  var start =  (windowHeight * 4.5) ;
  var offset = start - scroll;
  var speed = 2.3;

  if( scroll <= start ) {
    $('.video').css('left', '0');
  }
  if( scroll >= start ) {

    $('.video').css('left', offset * speed);
  }

});



$('.slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true
});