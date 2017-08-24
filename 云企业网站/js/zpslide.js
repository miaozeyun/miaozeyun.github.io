;(function($){
	$.fn.extend({
		zpSlide:function(obj){
			if(!obj.original)obj.original=1;
			if(!obj.xs)obj.xs=2;
			if(!obj.sm)obj.sm=3;
			if(!obj.md)obj.md=4;
			if(!obj.lg)obj.lg=5;
			var ts=this,
			l=ts.find('li').length;
			doing();
			window.onresize=doing;
			function doing(){
				var ow=window.innerWidth,n=obj.original,w=ow/n;
				if(ow>1279){
					n=obj.lg;
					w=ow/n
				}else if(ow>1023){
					n=obj.md;
					w=ow/n
				}else if(ow>767){
					n=obj.sm;
					w=ow/n
				}else if(ow>639){
					n=obj.xs;
					w=ow/n
				}
				lt=ts.find('.zp-slide-left'),
				rt=ts.find('.zp-slide-right'),
				move=0;
				ts.find('li').css('width',w+'px');
				lt.unbind('click').bind('click',function(){
					move+=w;
					if(move>1)move=-w*(l-n);
					ts.find('ul').css('transform','translate3d('+move+'px, 0px, 0px)');
				})
				rt.unbind('click').bind('click',function(){
					move-=w;
					if(-move>w*(l-n))move=0;
					ts.find('ul').css('transform','translate3d('+move+'px, 0px, 0px)');
				})
			}
		}
	})
})(jQuery);