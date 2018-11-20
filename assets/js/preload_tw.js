var ssurl1 = "https://spreadsheets.google.com/feeds/list/1la375ihNI7iCXxOPSTj3nk_3QF_mzUN3OqxC6tGqj1s/1/public/values?alt=json";
var ssurl2 = "https://spreadsheets.google.com/feeds/list/1la375ihNI7iCXxOPSTj3nk_3QF_mzUN3OqxC6tGqj1s/2/public/values?alt=json";
var mapsite =[];
// header

var ajaxheader = $.ajax(
  { dataType: "json",
    url: ssurl1,
    async: true,
    success: function(urlmap) {
      let headermap = [];
      for (let i = 0; i < urlmap.feed.entry.length; i+=1) {
        let subdata=[ urlmap.feed.entry[i].gsx$次頁面一.$t,
                      urlmap.feed.entry[i].gsx$次頁面二.$t,
                      urlmap.feed.entry[i].gsx$次頁面三.$t,
                      urlmap.feed.entry[i].gsx$次頁面四.$t,
                      urlmap.feed.entry[i].gsx$次頁面五.$t,
                      urlmap.feed.entry[i].gsx$次頁面六.$t,
                      urlmap.feed.entry[i].gsx$次頁面七.$t,
                      urlmap.feed.entry[i].gsx$次頁面八.$t,
                      urlmap.feed.entry[i].gsx$次頁面九.$t,
                      urlmap.feed.entry[i].gsx$次頁面十.$t ];
        //移除無內容資料
        var subdatafiltered = subdata.filter(function (el) {
          return el != "";
        });
        //console.log(subdatafiltered);
        let headerinfo = {  "main": urlmap.feed.entry[i].gsx$主頁面.$t,
                            "sub": subdatafiltered
                          };

        headermap.push(headerinfo);
      }
      mapsite.header=headermap;
  }                     
});
// footer
var ajaxfooter = $.ajax(
  { dataType: "json",
    url: ssurl2,
    async: true,
    success: function(urlmap) {
        mapsite.footer={  "lang": urlmap.feed.entry[0].gsx$語言.$t,
                          "fb": urlmap.feed.entry[0].gsx$fb.$t,
                          "vimo": urlmap.feed.entry[0].gsx$vimo.$t,
                          "app": urlmap.feed.entry[0].gsx$app.$t,
                          "addrass": urlmap.feed.entry[0].gsx$地址.$t,
                          "tel": urlmap.feed.entry[0].gsx$電話.$t,
                          };
  }                     
});
// loadall
$.when( ajaxheader , ajaxfooter  ).done(function() {

  $.getScript( "assets/js/header.js" ),
  $.Deferred(function( deferred ){

        $( deferred.resolve );
    });
}).done(function(){

    $.getScript( "assets/js/app.js" ),
    $.Deferred(function( deferred ){
        //applyheader(mapsite);
        $( deferred.resolve );
    }); 
});