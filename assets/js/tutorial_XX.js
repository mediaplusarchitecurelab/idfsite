applytutorial(mapsiteen);

// ==========================================
// BANNER SLIDER
// ==========================================

function applytutorial(mapsite){

// ==========================================
// STRING
// ==========================================

var catval=[];

var tutorialstr = 
    '<div class="container">'+
      '<div class="dt-section-heading text-center sr-animated">'+
        '<h2 class="dt-section-title text-uppercase">'+(mapsite.footer.lang==='EN'?'Tutorial':'最新教程')+'</h2>'+
        '<div class="dt-section-description">'+
          '<ul class="dt-category-filter list-inline" data-filters>'+
            '<li><a class="dt-btn active" href="#" data-filter="*">'+(mapsite.footer.lang==='EN'?'ALL':'全部')+'</a></li>';



for(let i=0;i<mapsite.header[2].sub.length;i+=1){
     
    let val = mapsite.header[2].sub[i];
    //console.log(val);
      tutorialstr+='<li><a class="dt-btn" href="#" data-filter=".cat-'+i+'">'+val+'</a></li>';

      catval.push(val);
  }

  tutorialstr+=            
          '</ul>'+
          //<!-- /.dt-category-filter -->
        '</div>'+
        //<!-- /.section-description -->
      '</div>'+
      //<!-- /.dt-section-heading -->
      '<div class="row">'+
        '<div id="dt-blog-entries-masonry" class="dt-blog-entries dt-masonry" data-column="2" data-area="isotope-container">';

// ==========================================
// ARTICLE
// ==========================================
for(let i=0;i<mapsite.tutorial.length;i+=1){



tutorialstr+=
          //<!-- Article Item -->
          '<article class="dt-post dt-grid-item cat-'+catval.indexOf(mapsite.tutorial[i].typestr)+' sr-animated">'+
            '<header class="dt-entry-header">'+
              '<div class="dt-entry-featured dt-format-gallery" data-carousel="swiper">'+
                '<div id="dt-post-carousel-unque-wgxinuy8k" class="swiper-container dt-image-carousel" data-swiper="container">'+
                  '<div class="swiper-wrapper">';
                  //<!-- /.swiper-wrapper -->

                  //<!-- /.swiper-slide -->
                  let pic = mapsite.tutorial[i].pic.split(",");
                  

                  for(let j=0;j<pic.length;j+=1){
                    // slider part
                    tutorialstr+=
                      '<div class="swiper-slide">'+
                        '<img src="static/tutorial/gallery/'+mapsite.tutorial[i].id+'/'+pic[j]+'" alt="Image 0'+j+'">'+
                      '</div>';
                    // content part
                  }
                    //<!-- /.swiper-slide -->

tutorialstr+=     '</div>'+
                  //<!-- /.swiper-wrapper -->

                  '<div id="dt-unique-pagination-wgxinuy8k" data-swiper="pagination"></div>'+

                  '<div id="dt-item-carousel-nav-wgxinuy8k-left" data-swiper="prev">'+
                    '<i class="fa fa-angle-left"></i>'+
                  '</div>'+

                  '<div id="dt-item-carousel-nav-wgxinuy8k-right" data-swiper="next">'+
                    '<i class="fa fa-angle-right"></i>'+
                  '</div>'+
                '</div>'+
                //<!-- /#dt-post-carousel-unque-wgxinuy8k -->
              '</div>';
              //<!-- /.dt-entry-featured -->

              //<!-- /.tutorial content -->
tutorialstr+=
              '<h3 class="dt-title"><a href="#">'+mapsite.tutorial[i].titlestr+'</a></h3>'+

              '<div class="dt-entry-meta">'+
                '<ul class="dt-meta">'+
                  '<li><a href="#">'+mapsite.tutorial[i].editor+'</a></li>'+
                  '<li>'+mapsite.tutorial[i].posttime+'</li>'+
                '</ul>'+
                //<!-- /.dt-meta -->
              '</div>'+
              //<!-- /.dt-post-meta -->
            '</header>'+
            //<!-- /.dt-entry-header -->

            '<div class="dt-entry-content">'+
              mapsite.tutorial[i].contentstr+
            '</div>'+
            //<!-- /.dt-entry-content -->

            '<footer class="dt-entry-footer">'+
              '<div class="dt-entry-more">'+
                '<a href="#" class="dt-read-more">'+(mapsite.footer.lang==='EN'?'Read More':'閱讀更多')+'</a>'+
              '</div>'+
              //<!-- /.dt-entry-more -->

              '<div class="dt-entry-category">'+
                (mapsite.footer.lang==='EN'?'Category':'類型')+'：<a href="#">'+mapsite.tutorial[i].typestr+'</a>'+
              '</div>'+
              //<!-- /.dt-entry-category -->
            '</footer>'+
            //<!-- /.dt-entry-footer -->
          '</article>';
          //<!-- /.dt-post -->
          
}

// ==========================================
// ARTICLE END
// ==========================================

   tutorialstr+=         
        '</div>'+
        //<!-- /#dt-blog-entries-masonry -->
      '</div>'+
      //<!-- /.row -->

      '<hr data-padding-bottom="85px">'+

      '<div class="dt-more-posts-link text-center sr-animated">'+
        '<a href="#more-posts" class="dt-btn dt-btn-medium">'+(mapsite.footer.lang==='EN'?'Go To Tutorial':'前往教程')+'</a>'+
      '</div>'+
    '</div>';
    //<!-- /.container -->;

$('#dt-popular-articles-now-section').html(tutorialstr);

      // filterable button
      $('[data-filters]').each( function( i, buttonGroup ) {
        var buttonGroup = $( buttonGroup );
        buttonGroup.on( 'click', '.dt-btn', function(e) {
          buttonGroup.find('.active').removeClass('active');
          $( this ).addClass('active');
          e.preventDefault();
        });
      });

      // section switch
      $('[data-type="section-switch"]').on('click', function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });

      // section customize
           // Section Background Color
      $('[data-bg-color]').each(function() {

        var value = $(this).data('bg-color');

        $(this).css({
          backgroundColor: value,
        });
      });

      // Section Background Image
      $('[data-bg-image]').each(function() {

        var img = $(this).data('bg-image');

        $(this).css({
          backgroundImage: 'url(' + img + ')',
        });
      });


      // Elements Padding
      function elementPadding(attr) {

        $(attr).each(function() {

          if ( attr === '[data-padding]' ) {
            var data = {
              padding: $(this).data('padding')
            }
          } else if ( attr === '[data-padding-top]' ) {
            var data = {
              paddingTop: $(this).data('padding-top')
            }
          } else if ( attr === '[data-padding-right]' ) {
            var data = {
              paddingRight: $(this).data('padding-right')
            }
          } else if ( attr === '[data-padding-bottom]' ) {
            var data = {
              paddingBottom: $(this).data('padding-bottom')
            }
          } else if ( attr === '[data-padding-left]' ) {
            var data = {
              paddingLeft: $(this).data('padding-left')
            }
          }

          $(this).css(data);
        });
      }
      elementPadding('[data-padding]');
      elementPadding('[data-padding-top]');
      elementPadding('[data-padding-right]');
      elementPadding('[data-padding-bottom]');
      elementPadding('[data-padding-left]');

      // Elements margin
      function elementMargin(attr) {

        $(attr).each(function() {

          if ( attr === '[data-margin]' ) {
            var data = {
              margin: $(this).data('margin')
            }
          } else if ( attr === '[data-margin-top]' ) {
            var data = {
              marginTop: $(this).data('margin-top')
            }
          } else if ( attr === '[data-margin-right]' ) {
            var data = {
              marginRight: $(this).data('margin-right')
            }
          } else if ( attr === '[data-margin-bottom]' ) {
            var data = {
              marginBottom: $(this).data('margin-bottom')
            }
          } else if ( attr === '[data-margin-left]' ) {
            var data = {
              marginLeft: $(this).data('margin-left')
            }
          }

          $(this).css(data);
        });
      }
      elementMargin('[data-margin]');
      elementMargin('[data-margin-top]');
      elementMargin('[data-margin-right]');
      elementMargin('[data-margin-bottom]');
      elementMargin('[data-margin-left]');

      // iso
      $('[data-area="isotope"]').each( function() {

        var container = $(this).find('[data-area="isotope-container"]');
        var filters   = $(this).find('[data-filters]');

        // Isotope Container
        var portfolio =  container.isotope({
          itemSelector: '.dt-grid-item',
          masonry: {
            columnWidth: 2
          }
        });
        // Re-Init after ready
        setTimeout( function(){ container.isotope('layout'); }, 500 );

        // Filtering items
        filters.on( 'click', '.dt-btn', function() {
          var filterValue = $( this ).attr('data-filter');
          portfolio.isotope({ filter: filterValue });
        });

      });

// ==========================================
// PERFORMANCE CAROUSEL
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
