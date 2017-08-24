
	// 选项卡   btn选项卡按钮  con选项卡内容
	function xuanxiangka(btn,con){
		for(let i=0;i<btn.length;i++){
			btn[i].onmouseover=function(){
				con[i].style.display="block";
			}
			btn[i].onmouseout=function(){
				con[i].style.display="none";
			}
		}
	}
	// 选项卡   btn选项卡按钮  con选项卡内容
	function xuanxiangka1(btn,con){
		for(let i=0;i<btn.length;i++){
			btn[i].onmouseover=function(){
				for(let j=0;j<btn.length;j++){
					console.log(con[j])
					con[j].style.display="none";
                    con[j].style.zIndex=1;
				}
				con[i].style.display="block";
				con[i].style.zIndex=2;
			}

				

			
		}
	}
	// 遮罩  btn是底下的块，con是遮罩的块
	function zhezhao(btn,con){
		for(let i=0;i<btn.length;i++){
			btn[i].onmouseover=function(){
				con[i].style.display="block";
			}
			btn[i].onmouseout=function(){
				con[i].style.display="none";
			}
		}
	}
	//函数简化
	function $(select,obj=document){
		if(typeof select=="function"){
			window.addEventListener("load",select,false);
		}else if(typeof select=="string"){
			return obj.querySelectorAll(select);
		}
	}
	//层级轮波
	//pic轮波图，填字符串的选择器；
	// bigbannerBox，通屏的banner盒子，填字符串的选择器；
	// lis，轮波点，填字符串的选择器；
	// colorArr，通屏banner盒子的所有颜色，传的是数组；["red","blue","green"]；
	// tuactiveZ,图片选中层级；
	// liactivebgColor,轮波点选中颜色；
	// lunboTime,时间间隔；
	// tuZ,图片普通层级；
	// lisColor,轮波点普通颜色；
	// bannertushuliang,banner图的数量-1；
	// type不传值时默认层级轮波，type==1时透明轮波
	function Zlunbo(pic,bigbannerBox,lis,colorArr,tuactiveZ,liactivebgColor,lunboTime,tuZ,lisColor,bannertushuliang,type=0){
		
		const tupian=$(pic);
		const banner=$(bigbannerBox)[0];
		const li=$(lis);
		const color=colorArr;
		tupian[0].style.zIndex=tuactiveZ;
		li[0].style.background=liactivebgColor;
		banner.style.background=color[0];
		var num=0;
		var t=setInterval(move,lunboTime);
		banner.onmouseover=function(){
			clearInterval(t);
		}
		banner.onmouseout=function(){
			t=setInterval(move,lunboTime);
		}
		for(let j=0;j<li.length;j++){
			li[j].onmouseover=function(){
				for(let i=0;i<tupian.length;i++){
					tupian[i].style.zIndex=tuZ;
					li[i].style.background=lisColor;
				}
			tupian[j].style.zIndex=tuactiveZ;
			li[j].style.background=liactivebgColor;
			banner.style.background=color[j];
			num=j;
			}
			}
			function move(){
			num++;
			if(num>bannertushuliang){
				num=0;
			}
			for(let i=0;i<tupian.length;i++){
				tupian[i].style.zIndex=tuZ;
				li[i].style.background=lisColor;
			}
			tupian[num].style.zIndex=tuactiveZ;
			li[num].style.background=liactivebgColor;
			banner.style.background=color[num];
		}


		//透明
		if(type==1){
			const tupian=$(pic);
			const banner=$(bigbannerBox)[0];
			const li=$(lis);
			const color=colorArr;
			tupian[0].style.opacity=tuactiveZ;
			li[0].style.background=liactivebgColor;
			banner.style.background=color[0];
			var num=0;
			var t=setInterval(move,lunboTime);
			banner.onmouseover=function(){
				clearInterval(t);
			}
			banner.onmouseout=function(){
				t=setInterval(move,lunboTime);
			}
			for(let j=0;j<li.length;j++){
				li[j].onmouseover=function(){
					for(let i=0;i<tupian.length;i++){
						tupian[i].style.opacity=tuZ;
						li[i].style.background=lisColor;
					}
				tupian[j].style.opacity=tuactiveZ;
				animate(tupian[j],{opacity:0},500);
				li[j].style.background=liactivebgColor;
				banner.style.background=color[j];
				num=j;
				}
				}
				function move(){
				num++;
				if(num>bannertushuliang){
					num=0;
				}
				for(let i=0;i<tupian.length;i++){
					tupian[i].style.opacity=tuZ;
					li[i].style.background=lisColor;
				}
				tupian[num].style.opacity=tuactiveZ;
				animate(tupian[num],{opacity:0},500);
				li[num].style.background=liactivebgColor;
				banner.style.background=color[num];
			}
		}
	}

//导航的出现于消失、楼层跳转、按需加载
	    //lis:每个楼层对应的窗口定位
	    //box:总的楼层跳转窗口定位
	    //section:每个楼层
	    //daohang:出现消失的窗口定位导航
	    //louctime:楼层 跳转时所需时间
	    //louccolor:所有楼层窗口定位的颜色
	    //colorArr:数组 每个楼层窗口定位选中时的颜色
	    //imgUrl:放图片地址的属性
	    //loucHeight:楼层出现的高度
	    //daohTop:导航消失时的定位Top（是负值）
	    //daohtime:导航多长时间消失
	    // tiaozhuan(".box li",".box","section","nav",500,"#eee",["red","red","red","red"],"imgUrl",600,-50,1000);
	    // function tiaozhuan(lis,boxx,section,daohang,louctime,louccolor,colorArr,imgUrl,loucHeight,daohTop,daohtime){
	    // 	const box=$(lis);
	    // 	// console.log(box);
	    // 	const btnbox=$(boxx)[0];
	    // 	const floor=$(section);
	    // 	const nav=$(daohang)[0];
	    // 	const CH=document.documentElement.clientHeight;//屏幕高度
	    // 	const loucyanse=colorArr;
	    // 	let flagx=true;
	    // 	let flags=false;
	    // 	let sobj=scrollobj();
	    // 	//楼层点击跳转
	    // 	for(let i=0;i<box.length;i++){
	    // 		box[i].onclick=function(){	
		   //  		animate(sobj,{scrollTop:floor[i].offsetTop},louctime);
		   //  	}
	    // 	}
	    // 	window.onscroll=function(){
	    // 		for(let i=0;i<floor.length;i++){
	    // 			//楼层换色
	    // 			if(sobj.scrollTop+0.5*CH>=floor[i].offsetTop){
	    // 				for(let j=0;j<floor.length;j++){
	    // 					box[j].style.background=louccolor;
	    // 				}
	    // 				box[i].style.background=loucyanse[i];
	    // 			}
	    // 			//按序加载
	    // 			if(floor[i].offsetTop>=CH+sobj.scrollTop){
	    // 				let img=$("img",floor[i]);
	    // 				for(let j=0;j<img.length;j++){
	    // 					img[j].src=img[j].getAttribute(imgUrl);	
	    // 				}   		
	    // 			}
	    			
	    // 		}
	    // 		//楼层一定高度出现，一定高度消失
	    // 		if(sobj.scrollTop>=loucHeight){
	    // 			if(flagx){
	    // 				flagx=false;
	    // 				flags=true;
	    // 				animate(nav,{top:0},function(){
	    // 					flagx=true;
	    // 				});
	    // 			}
	    // 			btnbox.style.display="block";
	    			
	    // 		}else{
	    // 			if(flags){
	    // 				flags=false;
	    // 				flagx=true;
	    // 				animate(nav,{top:daohTop},function(){
	    // 					flags=true;
	    // 				});
	    // 			}
	    // 			btnbox.style.display="none";
	    // 		}
	    // 	}
	    // 	//导航1s后关闭
	    // 	setTimeout(function(){
	    // 		animate(nav,{top:daohTop},function(){
	    // 			flags=true;
	    // 		});
	    // 	},daohtime)
	    // }



// 获取轮播图       	  ".tu"       		tu1
//获取轮播图盒子		".img"				hezi
//获取左按钮			".leftBtn"			zuo
//获取右按钮			".rightBtn"			you
//获取轮播点			".box ul li"		li	
//动效时间					500      	    t2	
//自动播放时间				1000			t1
//普通轮播点颜色  		 "orange"			s1
//初始化第一个轮播点颜色   "#fff"			s2


			function sxlunbo(tu1,hezi,t1,t2){
			const tu =$(tu1);//获取轮播图
			const img=$(hezi)[0];//获取轮播图盒子
			// const leftBtn=$(zuo)[0];//获取左按钮
			// const rightBtn=$(you)[0];//获取右按钮
			// const li=$(lis);//获取轮播点 
			const imgw=parseInt(window.getComputedStyle(img,null).height);//获取轮播图宽度

			// 初始化
			var flag=true;//定义开关初始值
			for (let i=0; i<tu.length;i++){
				tu[i].style.top=imgw+"px";
			}//遍历轮播图，并把轮播图放在右边
			tu[0].style.top=0;//第一张轮播图放在中间，显示出来

			// li[0].style.background=s2;//初始化第一个轮播点颜色为白色

			var t=setInterval(move,t1);//自动播放时间//定义自动播放的效果

			var now=0;//当前轮播图初始值--下标
			var next=0;//其他轮播图初始值--下标

			// 轮播效果函数
			function move(type="l"){//默认左按钮入口
				flag=false;//默认开关为关闭状态
				if(type=="l"){//左按钮入口
				next++;//其他轮播图初始值不同于当前轮播图初始值，从右向左
				if(next>tu.length-1){ //移至最后一页
					next=0;//其他轮播图值返回0;
				}	
				tu[next].style.top=imgw+"px";//其他轮播图移出当前画面
				animate(tu[now],{top:-imgw},t2);//动效时间//当前画面用动画播放方式移动	
			}


			else if(type=="r"){  //右按钮入口
				next--;    //其他轮播图初始值不同于当前轮播图初始值，从左向右
				if (next<0){ //移至第一页
					next=tu.length-1;// 其他轮播图值返回最后一页
				}
				tu[next].style.top=-imgw+"px";//其他轮播图移出当前画面
				animate(tu[now],{top:imgw},t2);//当前画面动画播放
			}

				animate(tu[next],{top:0},500,function(){flag=true;//循环播放后开关打开
					// li[next].style.background=s2;//其他轮播点显示白色
					// li[now].style.background=s1;//当前轮播点显示橘色
					now=next;//因为最后一个now后面没有next，把最后一个赋值给now,重新进行下一轮循环 
				});				
}
			img.onmouseover=function(){
				clearInterval(t)
			}
			img.onmouseout=function(){
				t=setInterval(move,t1);
			}
		// 	leftBtn.onmouseover=function(){
		// 		clearInterval(t)
		// 	}
		// 	leftBtn.onclick=function(){
		// 		if(flag){
		// 		move("l");
		// 		}
		// 	}
		// 	rightBtn.onmouseover=function(){
		// 		clearInterval(t)
		// 	}

		// 	rightBtn.onclick=function(){
		// 		if(flag){
		// 			move("r");
		// 		}
		// 	}
		// 	for(let j=0;j<li.length;j++){
		// 	li[j].onmouseover=function(){
		// 		clearInterval(t);
		// 		if(flag){
		// 		for (let i = 0; i <li.length; i++) {					
		// 			tu[i].style.top=imgw+"px";					
		// 			li[i].style.background=s1;
		// 		}
		// 		tu[j].style.top=0;
		// 		// animate(tu[j],{left:0},500);				
		// 		li[j].style.background=s2;
		// 		now=j;
		// 		next=j;

		// 		}
		// 	}			
		// }
		window.onblur=function(){
			clearInterval(t);
		}
		window.onfocus=function(){
			t=setInterval(move,1000);
		}
	}