applyabout(mapsiteen);

// ==========================================
// BANNER SLIDER
// ==========================================

function applyabout(mapsite){

// ==========================================
// STRING ABOUT
// ==========================================


var aboutstr = 
    '<div class="dt-section-heading text-center">'+
      '<div class="container">'+

        '<h2 class="dt-section-title text-uppercase sr-animated">'+mapsite.about.intro.titlestr+'</h2>'+

        '<div class="col-md-8 col-md-offset-2">'+
          '<div class="dt-section-description sr-animated text-left">';

  for(let i=0;i<mapsite.about.intro.contentstr.length;i+=1){
     
     
    let val = mapsite.about.intro.contentstr[i];
    //console.log(val);
    aboutstr+='</br>'+val;
    
  }          
  

  aboutstr+= '</div>'+
          //<!-- /.section-description -->
        '</div>'+
        //<!-- /.col-md-10 -->

      '</div>'+
      //<!-- /.container -->
    '</div>';
    //<!-- /.dt-section-heading -->

    // <!-- /about.sub-menu -->

$('#dt-who-we-are-section').html(aboutstr);

}
