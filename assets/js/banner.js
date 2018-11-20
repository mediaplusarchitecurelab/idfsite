applybanner(mapsiteen);

// ==========================================
// BANNER SLIDER
// ==========================================

function applybanner(mapsite){

// ==========================================
// STRING BANNER
// ==========================================

var bannerstr = 
  '<div class="swiper-container" data-swiper="container" data-loop="true" data-autoplay="3000">'+
    '<div class="swiper-wrapper">';

for(let i=0;i<2;i+=1){
  bannerstr+=
    '<div class="swiper-slide">'+
      '<img class="img-responsive" src="static/slider/slide-0'+i+'/background.png" alt="Slide 0'+i+'">'+
    '</div>';
}
  //<!-- /.swiper-slide -->
  bannerstr +=  
    '</div>'+
    //<!-- /.swiper-wrapper -->
    '</div>'+
    //<!-- /.swiper-container -->
    '<div id="dt-unique-pagination-jhrnq8u4o" data-swiper="pagination"></div>'+

    '<a href="#dt-who-we-are-section" class="dt-section-switch" data-type="section-switch">'+
      '<span class="dt-angle-shape"></span>'+
    '</a>';
    // <!-- /about.sub-menu -->

var teamstr = 
      '<div class="dt-section-heading text-center sr-animated">'+
        '<h2 class="dt-section-title text-uppercase">'+(mapsite.footer.lang==='EN'?'TEAM':'團隊')+'</h2>'+
      '</div>';
    //<!-- /.dt-section-heading -->
var teamcarstr='';
// ==========================================
// STRING TEAM
// ==========================================

teamstr += 
    '<div class="container">'+
      '<div class="dt-author-carousel-single swiper-container sr-animated" data-swiper="container" data-initial="0" data-loop="true" data-looped="7" data-effect="fade" data-crossfade="true">'+
        '<div class="swiper-wrapper">';

// Team
        for(let i =0; i<mapsite.team.length-1;i+=1){
    teamstr += 
            '<div class="swiper-slide">'+
              '<div class="dt-author-profile" data-margin-bottom="130px">'+
                '<div class="dt-profile-img">'+
                  '<img src="static/team/'+mapsite.team[i].id+'/'+mapsite.team[i].pic+'" alt="Profile Photo">'+
                '</div>'+
                //<!-- /.dt-profile-img -->

                '<div class="dt-profile-info">'+
                  '<h3 class="dt-author-name text-uppercase">'+mapsite.team[i].name+'</h3>'+
                  '<div class="dt-author-job-and-link">'+
                    '<div class="dt-name">'+
                      mapsite.team[i].position+
                    '</div>'+
                    //<!-- /.dt-name -->

                    '<div class="dt-link">'+
                      '<a href="#">'+(mapsite.footer.lang==='EN'?'Project':'作品')+'</a>'+
                    '</div>'+
                    //<!-- /.dt-link -->
                  '</div>'+
                  //<!-- /.dt-author-job-and-link -->

                  '<ul class="dt-social-icons list-inline">'+
                    '<li><a href="#" title="Facebook"><i class="fa fa-facebook"></i></a></li>'+
                    '<li><a href="#" title="Twitter"><i class="fa fa-twitter"></i></a></li>'+
                    '<li><a href="#" title="Soundcloud"><i class="fa fa-soundcloud"></i></a></li>'+
                    '<li><a href="#" title="Instagram"><i class="fa fa-instagram"></i></a></li>'+
                  '</ul>'+
                  //<!-- /.dt-social-icons -->

                  '<div class="dt-author-bio">'+
                    mapsite.team[i].contentstr+
                  '</div>'+
                  //<!-- /.dt-author-bio -->
                '</div>'+
                //<!-- /.dt-profile-info -->
              '</div>'+
              //<!-- /.dt-author-profile -->
            '</div>';
            //<!-- /.swiper-slide -->

      teamcarstr+=
            '<div class="swiper-slide">'+
              '<div class="dt-item">'+
                '<img src="static/author/04.jpg" alt="Image 01">'+
              '</div>'+
            //<!-- /.dt-item -->
            '</div>';
          //<!-- /.swiper-slide -->
          }

teamstr += 
        '</div>'+
        //<!-- /.swiper-wrapper -->
      '</div>'+
      //<!-- /.dt-author-carousel-single -->
    '</div>';
    //<!-- /.container -->

teamstr +=
  '<div class="dt-item-carousel dt-style-03 sr-animated">'+
      '<div id="dt-item-carousel-9d3rrq" class="swiper-container" data-swiper="ascontrol" data-initial="3" data-items="6" data-center="true" data-space="38" data-click-to-slide="true" data-loop="true" data-looped="7" data-breakpoints=\'{"5000": {"slidesPerView": 6}, "1024": {"slidesPerView": 4}, "768": {"slidesPerView": 2}}\'>'+
        '<div class="swiper-wrapper">'+
          teamcarstr+
        '</div>'+
        //<!-- /.swiper-wrapper -->
      '</div>'+
      //<!-- /#dt-item-carousel-9d3rrq -->

      '<div id="dt-item-carousel-nav-9d3rrq-left" data-swiper="prev">'+
        '<i class="fa fa-angle-left"></i>'+
      '</div>'
      '<div id="dt-item-carousel-nav-9d3rrq-right" data-swiper="next">'+
        '<i class="fa fa-angle-right"></i>'+
      '</div>'+

      '<a href="#" class="pull-right dt-become-author">Want to become an author?</a>'+
    '</div>';
    //<!-- /.dt-item-carousel -->

// ==========================================
// HTML
// ==========================================


$('#dt-main-slider-section').html(bannerstr);
$('#top-rated-author-section').html(teamstr);

// ==========================================
// PERFORMANCE
// ==========================================

$('[data-carousel="swiper"]').each( function() {

        var $this        = $(this),
            $container   = $this.find('[data-swiper="container"]'),
            $asControl   = $this.find('[data-swiper="ascontrol"]');

        // Configuration
        var conf = function(element) {
          var obj = {
            slidesPerView: element.data('items'),
            centeredSlides: element.data('center'),
            loop: element.data('loop'),
            initialSlide: element.data('initial'),
            effect: element.data('effect'),
            spaceBetween: element.data('space'),
            autoplay: element.data('autoplay'),
            direction: element.data('direction'),
            paginationClickable: true,
            breakpoints: element.data('breakpoints'),
            slideToClickedSlide: element.data('click-to-slide'),
            loopedSlides: element.data('looped'),
            fade: {
              crossFade: element.data('crossfade')
            }
          };
          return obj;
        }

        // Primary Configuration
        var $primaryConf = conf($container);
        // Pagination and Nav Settings
        $primaryConf.prevButton = $this.find('[data-swiper="prev"]');
        $primaryConf.nextButton = $this.find('[data-swiper="next"]');
        $primaryConf.pagination = $this.find('[data-swiper="pagination"]');

        // As Control Configuration\
        var $ctrlConf = conf($asControl);

        // Animate Function
        function animateSwiper(selector, slider) {
          var makeAnimated = function animated() {
            selector.find('.swiper-slide-active [data-animate]').each(function(){
              var anim      = $(this).data('animate'),
                  delay     = $(this).data('delay'),
                  duration  = $(this).data('duration');

              $(this).addClass(anim + ' animated')
              .css({
                webkitAnimationDelay: delay,
                animationDelay: delay,
                webkitAnimationDuration: duration,
                animationDuration: duration
              })
              .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                $(this).removeClass(anim + ' animated');
              });
            });
          };
          makeAnimated();
          // Make animated when slide change
          slider.on('SlideChangeStart', function() {
            selector.find('[data-animate]').each(function(){
              var anim = $(this).data('animate');
              $(this).removeClass(anim + ' animated');
            });
          });
          slider.on('SlideChangeEnd', makeAnimated);
        };

        if ($container.length) {
          // Run Swiper
          var $swiper = new Swiper( $container, $primaryConf);
          // Make Animated Layer
          animateSwiper($this, $swiper);

          if ($asControl.length) {
            var $control = new Swiper( $asControl, $ctrlConf);
            $swiper.params.control = $control;
            $control.params.control = $swiper;
          }

        } else {
          console.log('Swiper container is not defined!');
        };

      });
}
