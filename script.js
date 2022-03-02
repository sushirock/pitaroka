$(function(){
    var count = $("li").length;
    
    var current = 1;
    
    var next = 2;
    
    var interval = 4000;
    
    var duration = 1000;
    
    var timer;
    
    $("li:not(:first-child)").hide();
    
    timer = setInterval(slideTimer, interval);
    
    function slideTimer(){
      $("li:nth-child(+" + current + ")").fadeOut(duration);
      
      $("li:nth-child(+" + next + ")").fadeIn(duration)
      
      current = next;
      
      next = ++next;
      
      if(next > count){
        next = 1;
      }
    }
  });