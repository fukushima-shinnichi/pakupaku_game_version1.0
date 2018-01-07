$(function(){
  
  ////   page start animation   //////////////
  $(".title button").click(function(){
    $(".title").fadeOut(0);
  });
  
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
    
      /////   pakupaku kun fadeIN  ////////////////
      var timeID_paku = setTimeout(function(){
        $("div.yen_posi").fadeIn(0);
        $("div.game_view").animate({
            marginLeft:"0px"
          },30000,
          function(){
          //   pakupaku kun fadeOut, game finish result open  //
          var gameViewFinish = parseInt($("div.game_view").css("marginLeft"));
          if(gameViewFinish===0){
            //////   pakupaku kun,game view fadeOut   ////////////
            $("div.yen_posi").fadeOut(0);
            $("div.game_view").fadeOut(0);
            /////   result page open   /////
            $("div.score").fadeIn(0);
            /////   result calculate   ////////
            /*
            var target1 = parseInt($("[name='target1']:checked").val());
            var target2 = parseInt($("[name='target2']:checked").val());
            var target3 = parseInt($("[name='target3']:checked").val());
            var target4 = parseInt($("[name='target4']:checked").val());
            var target5 = parseInt($("[name='target5']:checked").val());
            var target6 = parseInt($("[name='target6']:checked").val());
            var target7 = parseInt($("[name='target7']:checked").val());
            var target8 = parseInt($("[name='target8']:checked").val());
            var targetALL = target1+target2+target3+target4+target5+target6+target7+target8;
            */
            
            /*
            var sum = $(".game_view input:checked").map(function(){
              return $(this).val();
            }).get();
            
            console.log(sum);
            */
            //////   result points fadeIN  ////////////
            /*
            $("div.score h2").text(targetALL);
            console.log(target1,target2,targetALL);
            */
            
          };
        });
        },4001);
        
    });
   });
  
  //////   pakupaku kun mouse move   //////////////////////
  
  $(document).mousemove(function(e){
        $("div.yen_posi").css({
          top:e.pageY-30+"px",
          left:e.pageX+5+"px"
        });
      });
  
  
  //////   pakupaku kun mouth open/close    //////////////////
  $(document).mousedown(function(){
    $("div.yen").fadeOut(0);
    $("div.circle_close").fadeIn(0);
  });
  $(document).mouseup(function(){
    $("div.circle_close").fadeOut(0);
    $("div.yen").fadeIn(0);
  });
  
  
  ////// game  /////////////////////
  $("label").click(function(){
    //$(this).find("span:last").fadeOut(0);
    //$(this).find("i.fa").fadeIn(0);
    var target1 = parseInt($(".game_view input[name='target1']:checked").val());
    var target2 = parseInt($(".game_view input[name='target2']:checked").val());
    console.log(target1,target2);
    //console.log(parseInt($(".game_view input[name='target']:checked").val()));
                var sum = $(".game_view input:checked").map(function(){
              return $(this).val();
            }).get();
            parseInt(sum);
            console.log(sum);
    //var sumsum = parseInt(sum[0]+sum[1]+sum[2]);
    //var sumsum = parseInt(sum[0])+parseInt(sum[1])+parseInt(sum[2]);
    //console.log(sumsum);
    console.log(sum.length);
    $("div.score h2").text(sum.length);
  });
  


  
});