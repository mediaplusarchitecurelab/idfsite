applyfooter(mapsiteen);

// ==========================================
// HEADER MENU
// ==========================================

function applyfooter(mapsite){

var footerstr = 
'<div class="container">'+
      '<div class="row dt-widget-area">'+
        '<div class="col-md-6">'+
          '<section id="widget_about-us" class="widget sr-animated widget_dt_about_us">'+

            '<div class="dt-widget-container">'+
              '<div class="dt-company-logo">'+
                '<img src="'+mapsite.footer.logostright+'" alt="Ambio">'+
              '</div>'+
              //<!-- /.dt-company-logo -->

              '<div class="dt-about-us-content">'+
                mapsite.about.intro.contentstr+
              '</div>'+
              //<!-- /.dt-about-us-content -->
            '</div>'+
            //<!-- /.dt-entry-featured -->
            '<div class="clearfix"></div>'+

          '</section>'+

          //<!-- /#widget_{ID} -->
        '</div>'+
        //<!-- /.col-md-6 -->

        '<div class="col-md-4 col-md-offset-1">'+
          '<section id="widget_links-1" class="widget sr-animated widget_dt_links">'+

            '<div class="dt-widget-container">'+
              '<ul class="dt-links">';


              for (let i=0;i<mapsite.header.length-3;i+=1){
                footerstr+='<li><a href="'+mapsite.header[i].main+'.html">'+mapsite.header[i].main+'</a></li>';
              }

footerstr += 
              '</ul>'+
              //<!-- /.dt-links -->
            '</div>'+
            //<!-- /.dt-entry-featured -->

          '</section>'+
          //<!-- /#widget_{ID} -->
        '</div>'+
        //<!-- /.col-md-2 --> 

      '</div>'+
      //<!-- /.row -->

      '<div class="dt-copyrigts-info sr-animated">'+
        '<div class="dt-copyrights text-center">'+
          '&copy; CHANGE SITE all rights reserved.'
        '</div>'+
        //<!-- /.dt-copyrights -->

        '<ul class="dt-social-icons list-inline pull-right">'+
          '<li><a href="#" title="Facebook"><i class="fa fa-facebook"></i></a></li>'+
          '<li><a href="#" title="Twitter"><i class="fa fa-twitter"></i></a></li>'+
          '<li><a href="#" title="Soundcloud"><i class="fa fa-soundcloud"></i></a></li>'+
          '<li><a href="#" title="Instagram"><i class="fa fa-instagram"></i></a></li>'+
        '</ul>'+
        //<!-- /.dt-social-icons -->
      '</div>'+
      //<!-- /.dt-copyrigts-info -->
    '</div>'+
    //<!-- /.container -->

    '<a href="#back-to-top-position" class="dt-back-to-top text-center" data-type="section-switch">'+
      'Back To Top'+
    '</a>';

// site and menu
$('#dt-site-footer').html(footerstr);
}
