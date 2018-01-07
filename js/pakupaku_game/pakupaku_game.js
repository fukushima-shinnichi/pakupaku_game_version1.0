$(function(){
  
  ////   page start animation   //////////////
  $(".title button").click(function(){
    $(".title").fadeOut(0);
  });
  
  ////   start countdown animation   //////////////
  $(".description button").click(function(){
    
    $(".description").fadeOut(0,function(){
      
       var timeID_3 = setTimeout(function(){
      $(".third").fadeOut(0);
    },1000);
    
    var timeID_2 = setTimeout(function(){
      $(".second").fadeOut(0);
    },2000);
    
    var timeID_3 = setTimeout(function(){
      $(".first").fadeOut(0);
    },3000);
    
    var timeID_starat = setTimeout(function(){
      $(".start").fadeOut(0);
    },4000);
    
      /////   pakupaku kun fadeIN,game view move  ////////////////
        ////    (PC only)    ///////////////////////////
        if($(window).width()>=768){
      var timeID_paku = setTimeout(function(){
        $("div.yen_posi").fadeIn(0);
        $("div.game_view").animate({
            marginLeft:"0px"
          },33000,
          //   pakupaku kun fadeOut, game finish result open  //
          function(){
          var gameViewFinish = parseInt($("div.game_view").css("marginLeft"));
          if(gameViewFinish===0){
            //////   pakupaku kun,game view fadeOut   ////////////
            $("div.yen_posi").fadeOut(0);
            $("div.game_view").fadeOut(0);
          };
        });
        },4001);
          ////    (smart phone only)    ///////////////////////////
    }else if($(window).width()<=767){
            var timeID_paku = setTimeout(function(){
        $("div.yen_posi").fadeIn(0);
        $("div.game_view").animate({
            marginLeft:"0px"
          },43000,
          //   pakupaku kun fadeOut, game finish result open  //
          function(){
          var gameViewFinish = parseInt($("div.game_view").css("marginLeft"));
          if(gameViewFinish===0){
            //////   pakupaku kun,game view fadeOut   ////////////
            $("div.yen_posi").fadeOut(0);
            $("div.game_view").fadeOut(0);
          };
        });
        },4001);
    };
    });
  });
  
  
  //////   pakupaku kun mouse move   //////////////////////
  ///////    (PC only)    ///////////////////////////
  if($(window).width()>=768){
  $(document).mousemove(function(e){
        $("div.yen_posi").css({
          top:e.pageY-30+"px",
          left:e.pageX+5+"px"
        });
      });
    ////    (smart phone only)    ///////////////////////////
  }else if($(window).width()<=767){
    $(document).on("touchstart",function(){
      $(this).data("startX",event.touches[0].pageX);
      $(this).data("startY",event.touches[0].pageY);
      $("div.yen_posi").css({
          top:$(this).data("startY")-30+"px",
          left:$(this).data("startX")+10+"px"
        });
    });
    $(document).on("touchmove",function(){
      $(this).data("startX",event.touches[0].pageX);
      $(this).data("startY",event.touches[0].pageY);
      $("div.yen_posi").css({
          top:$(this).data("startY")-30+"px",
          left:$(this).data("startX")+10+"px"
        });
    });
  };
  
  //////   pakupaku kun mouth open/close    //////////////////
  //////    (PC only)    //////////////////////
  if($(window).width()>=768){
  $(document).mousedown(function(){
    $("div.yen").fadeOut(0);
    $("div.circle_close").fadeIn(0);
  });
  $(document).mouseup(function(){
    $("div.circle_close").fadeOut(0);
    $("div.yen").fadeIn(0);
  });
  };
  
  //////   pakupaku kun mouth open/close    //////////////////
  //////    (smart phone only)    //////////////////////
  if($(window).width()<=767){
  $(document).on("touchstart",function(){
    $("div.yen").fadeOut(0);
    $("div.circle_close").fadeIn(0);
  });
  $(document).on("touchend",function(){
    $("div.circle_close").fadeOut(0);
    $("div.yen").fadeIn(0);
  });
  };

  ////// game points caculate /////////////////////
  $("label").click(function(){
    var sum = $(".game_view input:checked").map(function(){
              return $(this).val();
            }).get();
    parseInt(sum);
    console.log(sum.length);
    $("div.score h3").text(sum.length*5+" points");
    if(sum.length===20){
      $("div.perfect").fadeIn(0);
      $("div.success").fadeOut(0);
      $("div.failure").fadeOut(0);
    }else if(sum.length>=16 && sum.length<=19){
      $("div.perfect").fadeOut(0);
      $("div.success").fadeIn(0);
      $("div.failure").fadeOut(0);
    }else if(sum.length<16){
      $("div.perfect").fadeOut(0);
      $("div.success").fadeOut(0);
      $("div.failure").fadeIn(0);
    }
  });
  
  ///////   try again, page reload   //////////////////
  $("div.score button").one("click",function(){
    location.reload();
  });
  
});