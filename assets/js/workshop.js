applyworkshop(mapsiteen);

// ==========================================
// BANNER SLIDER
// ==========================================

function applyworkshop(mapsite){

var workshopstr= 
  '<div class="container">'+
      '<div class="dt-section-heading sr-animated">'+
        '<div class="dt-section-title-style-2">'+
          '<h2 class="text-uppercase">'+(mapsite.footer.lang==='EN'?'Workshop':'工作坊')+'</h2>'+
          '<a href="#view-all" class="dt-sub-link">'+(mapsite.footer.lang==='EN'?'See all videos >':'前往其他影片')+'</a>'+
        '</div>'+
        //<!-- /.section-title-style-2 -->
      '</div>'+
      //<!-- /.section-heading -->

      '<div class="row">';

  for(let i=mapsite.workshop.length-1;i>mapsite.workshop.length-1-5;i-=1){
    if (i===mapsite.workshop.length-1){

      workshopstr+= 
        '<div class="col-md-8">'+
          '<div class="dt-video-item sr-animated">'+
            '<div class="dt-video-thumb">'+
              '<img src="'+mapsite.workshop[i].pic+'" alt="Video 0'+i+'">'+
              '<a href="#" class="dt-play-btn"><span>'+(mapsite.footer.lang==='EN'?'Play':'播放')+'</span></a>'+
            '</div>'+
            //<!-- /.dt-vide-thumb -->

            '<h3 class="dt-video-title"><a href="#">'+mapsite.workshop[i].titlestr+'</a></h3>'+

            '<div class="dt-video-desciption">'+
              mapsite.workshop[i].contentstr+
            '</div>'+
            //<!-- /.dt-vide-desciption -->
          '</div>'+
          //<!-- /.dt-video-item -->
        '</div>'+
        //<!-- /.col-md-8 -->


        // widget
        '<div class="col-md-4">'+
          '<div class="dt-videos-widget">';

    }else{
      workshopstr+=  
            '<div class="dt-video-item sr-animated">'+
              '<div class="dt-video-thumb">'+
                '<img src="'+mapsite.workshop[i].pic+'" alt="Video 0'+i+'">'+
                '<a href="#" class="dt-play-btn"><span>'+(mapsite.footer.lang==='EN'?'Play':'播放')+'</span></a>'+
              '</div>'+
              //<!-- /.dt-video-thumb -->
            '</div>';
            //<!-- /.dt-video-item -->

    } 
    
  }
//console.log('a');
    workshopstr+=        
          '</div>'+
          //<!-- /.dt-videos-widget -->
        '</div>'+
        //<!-- /.col-md-4 -->
      '</div>'+
      //<!-- /.row -->
    '</div>';
    //<!-- /.container -->


$('#dt-most-watched-videos-section').html(workshopstr);
}