
applyteam(mapsiteen);



// ==========================================
// BANNER SLIDER
// ==========================================

function applyteam(mapsite){

// ==========================================
// STRING TEAM
// ==========================================


var teamstr = 
      '<div class="dt-section-heading text-center sr-animated">'+
        '<h2 class="dt-section-title text-uppercase">'+(mapsite.footer.lang==='EN'?'TEAM':'團隊')+'</h2>'+
      '</div>';
    //<!-- /.dt-section-heading -->
teamstr += 
    '<div class="container">'+
      '<div class="dt-author-carousel-single swiper-container sr-animated" data-swiper="container" data-initial="3" data-loop="true" data-looped="7" data-effect="fade" data-crossfade="true">'+
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
          }

teamstr += 
        '</div>'+
        //<!-- /.swiper-wrapper -->
      '</div>'+
      //<!-- /.dt-author-carousel-single -->
    '</div>';
    //<!-- /.container -->

// ==========================================
// HTML
// ==========================================

$('#top-rated-author-section').html(teamstr);

// ==========================================
// PERFORMANCE CAROUSEL
// ==========================================
}
