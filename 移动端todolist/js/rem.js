   (function(){
       var designWidth=750;
       var fontSize=100;
       function resize(){
         var width=document.documentElement.clientWidth;
         var size=width/750*100;
         document.querySelector("html").style.fontSize=size+"px";
       }
        resize();
        window.onresize=resize;
     })();