// 优惠券的遮罩
	const zhe =$(".secondyou1_xiao");
	const box =$(".secondyou1_xiao>.zhe");
	zhezhao(zhe,box);

// 美丽的遮罩
	const meili=$(".fourthzuoshang");
	const meilizhe =$(".fourthzuoshang .meilizhe");
	zhezhao(meili,meilizhe);
	
//banner轮播图
	// $(function(){
		Zlunbo(".bannertu",".tongping",".bannertukuang ul li",["#8CC4F3","#E8E8E8","blue","#E8E8E8","#0EA9EF"],2,"#ececec",1000,1,"#A4AFD0",4)
	// })

// banner图的左边
	const kuang=$(".bannerNav ul");
	const xuan =$(".bannerNav ul .bannerNavLis");
	xuanxiangka(kuang,xuan);

// banner图的下边小视频

    const shi=$(".wyj");
	const pin=$(".wyjb");
	xuanxiangka1(shi,pin);


// banner 图下的轮播视频
    const tu=$(".live-slide-list");
    const img=$(".live-slide-listbk ")[0];
    const imgW=parseInt(window.getComputedStyle(img,null).width);
    const leftbtn=$(".live-slide-listbk .zuo")[0];
    const spd=$(".live-slide-item");
    const rightbtn=$(".live-slide-listbk .you")[0];
    const li=$(".wyjb");
    const zhez=$(".above-cover");
    //初始化
    zhez[0].style.display="block";
    zhez[3].style.display="block";
    // rightbtn.style.color="#f93";
    var flag=true;
    // console.log(imgW)
    for(let i=0;i<tu.length;i++){
      tu[i].style.left=imgW+"px";
    }
    tu[0].style.left=0;
    // var t=setInterval(move,lunboTime);
    var now=0;
    var next=0;

    function move(type="l"){
      flag=false;
      if(type=="l"){
      next++;
      if(next>tu.length-1){
        next=0;
        }
      tu[next].style.left=imgW+"px";
      animate(tu[now],{left:-imgW},500);
      animate(tu[next],{left:0},500,function(){
        
        flag=true;
        now=next;
        leftbtn.style.pointerEvents="none";
        rightbtn.style.pointerEvents="auto";

      });
      
      }else if(type=="r"){
        next--;
        if(next<0){
          next=tu.length-1;
        }
        tu[next].style.left=-imgW+"px";
        animate(tu[now],{left:imgW},500);
        animate(tu[next],{left:0},500,function(){

        flag=true;
        now=next;
        leftbtn.style.pointerEvents="auto";
        rightbtn.style.pointerEvents="none";

      });

      }     
    }

    leftbtn.onclick=function(){
      if(flag){
      move("l");  
      }   
    }
    
    rightbtn.onclick=function(){
      if(flag){
      move("r");  
      }
      
    }

    for(let j=0;j<spd.length;j++){

      spd[j].onmouseover=function(){
        for(let i=0;i<spd.length;i++){
          li[i].style.zIndex=1;
          zhez[i].style.display="none";
        }
        li[j].style.zIndex=2;
          zhez[j].style.display="block";

        }
  }










// banner图片下的字
    sxlunbo(".fc-item",".fc-item-list",3000,50);
// 美丽
    sxlunbo(".mlx",".mlb",3000,50);
// 潮电
    sxlunbo(".cdx",".cdb",3000,50);
// 居家
    sxlunbo(".jjx",".jjb",3000,50);
// 爱巢
    sxlunbo(".acx",".acb",3000,50);
// 户外
    sxlunbo(".hwx",".hwb",3000,50);
// 亲子
    sxlunbo(".qzx",".qzb",3000,50);



//回到顶部
		const sm1=$(".mui-mbar-tab-tip");
				const sm=$(".f1");
        var  flag=true;
		for(let i=0;i<sm.length;i++){

			sm[i].onmouseover=function(){
                 if(flag){
                     // sm1[i].style.display="block";
                     animate(sm1[i],{opacity:1},300,function(){
                         animate(sm1[i],{right:35},300)

                  })
                     flag=false;
                 }
				}
			sm[i].onmouseout=function(){

				animate(sm1[i],{right:70},50,function(){
					animate(sm1[i],{opacity:0},300)
				});			
				// sm1[i].style.display="none";
				
			}
		}
		const stop=$(".stop")[0];
				let scroll= scrollobj();
				stop.onclick=function(){
				animate(scroll,{scrollTop:0},300)

				} 
// 楼层跳转
	 $(function(){
	const btnBox=$(".btnBox")[0];
	const btn=$(".btnBox li");
	const section=$(".fourth");
	const nav=$(".tmdaohang")[0];
	const winH=document.documentElement.clientHeight;
	const loucyanse=["#EA5F8D","#0AA6E8","#64C333","#F15453","#19C8A9","#F7A945","red"];
	const dingb=$(".dingb")[0];
	let sobj=scrollobj();
	dingb.onclick=function(){
		animate(sobj,{scrollTop:0},500)
		}
	for(let i=0;i<btn.length;i++){
	  btn[i].onclick=function(){
		// sobj.scrollTop=section[i].offsetTop;
		animate(sobj,{scrollTop:section[i].offsetTop},500)
		}
	}
	let flagx=true;
	let flags=false;
    window.onscroll=function(){
       for(let i=0;i<section.length;i++){
       	  if(winH*0.5+sobj.scrollTop>=section[i].offsetTop){
             for(let j=0;j<btn.length;j++){
             	btn[j].style.background="rgba(0,0,0,.6)";

             }
             btn[i].style.background=loucyanse[i];
       	  }
       }



    	if(sobj.scrollTop>=1750){
    		if(flagx){
    			flagx=false;
    			flags=true
    		
            animate(nav,{top:0},500,function(){
            	flagx=true;
            });
            
           }
           btnBox.style.display="block";
    	}else{
    		if(flags){
    			flags=false;
    			flagx=true;
    		
            animate(nav,{top:-50},500,function(){
            	flags=true
            })
    	  }
    	  btnBox.style.display="none";
    	 }
    }

	setTimeout(function(){
		animate(nav,{top:-50},500,function(){
			flags=true;
		});
	})
})
   
function scrollobj(){
    document.body.scrollTop=1;
    document.documentElement.scrollTop=1;
    let scrollobj=document.body.scrollTop?document.body:document.documentElement;
    return scrollobj;
}    
    

 


