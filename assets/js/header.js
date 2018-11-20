applyheader(mapsiteen);

// ==========================================
// HEADER MENU
// ==========================================

function applyheader(mapsite){

var navstr = '<div class="menu-container">'+
        '<ul class="nav-menu">'+
          '<li class="current-menu-item"><a href="index.html">'+mapsite.header[0].main+'</a></li>'+
          '<li class="menu-item-has-children">'+
            '<a href="#">'+mapsite.header[1].main+'</a>'+ // about
            '<ul class="sub-menu">';
    
    // <!-- /about.sub-menu -->

    for (let i=0;i<mapsite.header[1].sub.length;i+=1){
        navstr+='<li><a href="'+mapsite.header[1].sub[i]+'.html">'+mapsite.header[1].sub[i]+'</a></li>';
    }
          
    navstr+='</ul>'+
            //<!-- /about.sub-menu -->

          '</li>'+
          '<li class="menu-item-has-children">'+
            '<a href="#">'+mapsite.header[2].main+'</a>'+ // tutorial
            '<ul class="sub-menu">';

    // <!-- /tutorial.sub-menu -->

    for (let i=0;i<mapsite.header[2].sub.length;i+=1){
        navstr+='<li><a href="'+mapsite.header[2].sub[i]+'.html">'+mapsite.header[2].sub[i]+'</a></li>';
    }   

    navstr+='</ul>'+
            //<!-- /tutorial.sub-menu -->
          '</li>'+
          '<li class="menu-item-has-children">'+
            '<a href="#">'+mapsite.header[3].main+'</a>'+ // workshop
            '<ul class="sub-menu">';

    // <!-- /workshop.sub-menu -->

    for (let i=0;i<mapsite.header[3].sub.length;i+=1){
        navstr+='<li><a href="'+mapsite.header[3].sub[i]+'.html">'+mapsite.header[3].sub[i]+'</a></li>';
    }          

    navstr+='</ul>'+
            //<!-- /workshop.sub-menu -->
          '</li>'+
          '<li class="menu-item-has-children">'+
            '<a href="#">'+mapsite.header[4].main+'</a>'+ // profolio
            '<ul class="sub-menu">';

    // <!-- /profolio.sub-menu -->

    for (let i=0;i<mapsite.header[4].sub.length;i+=1){
        navstr+='<li><a href="'+mapsite.header[4].sub[i]+'.html">'+mapsite.header[4].sub[i]+'</a></li>';
    }

    navstr+='</ul>'+
            //<!-- /profolio.sub-menu -->
          '</li>'+
          '<li class="menu-item-has-children">'+
            '<a href="#">'+mapsite.header[5].main+'</a>'+ // service
            '<ul class="sub-menu">';

    // <!-- /service.sub-menu -->

    for (let i=0;i<mapsite.header[5].sub.length;i+=1){
        navstr+='<li><a href="'+mapsite.header[5].sub[i]+'.html">'+mapsite.header[5].sub[i]+'</a></li>';
    }          
    navstr+='</ul>'+
            //<!-- /service.sub-menu -->

          '</li>'+
          '<li><a href="contacts.html">'+mapsite.header[6].main+'</a></li>'+
        '</ul>'+
        //<!-- /.nav-menus -->
      '</div>'+
      //<!-- /.menu-container -->

      '<div id="dt-search-and-links">'+
        '<form class="dt-search-form" action="index.html" method="get">'+
          '<input type="text" name="s" id="search" value="" />'+
          '<button type="submit" id="search-submit" title="Submit"><i class="fa fa-search"></i></button>'+
        '</form>'+
        //<!-- /.dt-search-form -->

        '<ul class="dt-quick-links">'+
          '<li><a href="#login">'+mapsite.header[7].main+'</a></li>'+
          '<li><a href="#register">'+mapsite.header[8].main+'</a></li>'+
        '</ul>'+
        //<!-- /.dt-quick-links -->
      '</div>';

// logo and social
$('#dt-logo-and-social').html(
      '<div id="dt-menu-trigger">'+
        '<span></span>'+
        '<span></span>'+
        '<span></span>'+
        '<span></span>'+
      '</div>'+
      //<!-- /#dt-menu-trigger -->
      '<div id="dt-logo">'+
        '<a href="index.html">'+
          '<img src="'+mapsite.footer.logostright+'" alt="logo">'+
        '</a>'+        
      '</div>'+ 
      //<!-- #dt-logo -->
      '<ul id="dt-soical" class="dt-social-icons vertical text-center">'+
        '<li><a href="#" title="Facebook"><i class="fa fa-facebook"></i></a></li>'+
        '<li><a href="#" title="Twitter"><i class="fa fa-twitter"></i></a></li>'+
        '<li><a href="#" title="Soundcloud"><i class="fa fa-soundcloud"></i></a></li>'+
        '<li><a href="#" title="Instagram"><i class="fa fa-instagram"></i></a></li></br>'+
        '<li><a href="#" title="dt-lang" id="dt-lang">'+mapsite.footer.lang+'</></li>'+
      '</ul>'
      //<!-- /#dt-social -->

  );
// site and menu
$('#dt-site-menu').html(navstr);

      //linster      
      var $submenu = '.menu-item-has-children';
      var $lang = '#dt-lang';

      // Menu Trigger
      var $trigger = '#dt-menu-trigger';
      $($trigger).on('click', function() {
        //console.log('a');
        $(this).toggleClass('open');
        $('body').toggleClass('dt-menu-open');
      });
      
      // Sub Menu Trigger
      $($submenu).each( function() {
        //console.log('a');
        var $this = $(this);
        $this.find('a').on('click', function() {
          $($submenu).toggleClass('submenu-active', false);
          $this.toggleClass('submenu-active');
        });
      });

      // lang Trigger
      $($lang).on('click',function() {
        
        var $this = $(this);

        if ($this.text()==='EN'){ // 中
          $this.addClass('active');
          $this.text('中');
          applyheader(mapsitetw);
          applyabout(mapsitetw);
          applytutorial(mapsitetw);
          applyworkshop(mapsitetw);
          applyfooter(mapsitetw);
        }else{ // EN
          $this.removeClass('active');
          $this.text('EN');
          applyheader(mapsiteen);
          applyabout(mapsiteen);
          applytutorial(mapsiteen);
          applyworkshop(mapsiteen);
          applyfooter(mapsiteen);
        }    
      });

}
