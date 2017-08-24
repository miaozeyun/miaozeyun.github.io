
//获取信息
function getData(){
    if(localStorage.tobo){
        return JSON.parse(localStorage.tobo);
    }else{
        return [];
    }
};
//保存信息
function saveData(data){
    localStorage.tobo=JSON.stringify(data);
};
function Zgeshi(shi){
    return shi<10?"0"+shi:shi;
}
//处理时间
function time(ms){
    var date=new Date();
    date.setTime(ms);
    var year=date.getFullYear();
    var mont=Zgeshi(date.getMonth()+1);
    var day=Zgeshi(date.getDay());
    var hour=Zgeshi(date.getHours());
    var min=Zgeshi(date.getMinutes());
    var sec=Zgeshi(date.getSeconds());
    console.log(day)
    return year+"/"+mont+"/"+day+"/"+hour+"/"+min+"/"+sec
}
//输入事项
$(".add textarea").on("keydown keyup",function(){
       var l=$(this).val().length;
    if(l<10){
        l="0"+l;
    }
    if(l>120){
        l=120
        $(".tishi").slideDown();
        $(".tishi span").click(function(){
            $(".tishi").slideUp();
        })
        $(this).val(function(idnex,ele){
            return ele.slice(0,120);
        })
    }
    $(".zishu span").text(l);
});
//提交事项
$(".add input").click(function(){
    var val=$(".add textarea").val();
    if(val===""){
        $(".tishi1").slideDown();
        $(".tishi1 span").click(function(){
            $(".tishi1").slideUp();
        });

        return;
    }else{
        location.reload();
    };
    var data=getData();
    var date=new Date();
    var time=date.getTime();
    data.push({text:val,time:time,isDnoe:false,isStr:false,isDelete:false});
    saveData(data);
    $(".add textarea").val("");
    $(".zishu span").text("00");
    if($(".tishi1").css("display")==="none"){
        $(".add").slideUp();
        $(".wait").slideDown();
    }

});
//重绘页面
function reMate(){
    $(".xuan ul").empty();
    var data=getData();
    var str1="",str2="";
    $.each(data,function(index,ele){
        if(ele.isDnoe===false){
            str1+=`<li id="${index}">
                        <input type="checkbox">
                        <p>${ele.text}</p>
                        <time>${time(ele.time)}</time>
                        `
            if(ele.isStr){
                str1+=`<i class="active iconfont">&#xe6b8;</i>
                </li>`
            }else{
                str1+=`<i class="iconfont">&#xe6b8;</i>
                </li>`
            }
        }else{
            str2+=`<li id="${index}">
                        <input type="checkbox">
                        <p>${ele.text}</p>
                        <time>${time(ele.time)}</time>
                        `;
            if(ele.isStr){
                str2+=`<i class="active iconfont">&#xe6b8;</i>
                </li>`
            }else{
                str2+=`<i class="iconfont">&#xe6b8;</i>
                </li>`
            }
        }
    });
    $(".wait ul").html(str1);
    $(".done ul").html(str2);

};
reMate();
//重要事项
$(".wait ul").on("click","i",function(){
    var data=getData();
    var index=$(this).parent().attr("id");
    data[index].isStr=!data[index].isStr;
    saveData(data);
    reMate();
});
//选项卡
$("footer div").click(function(){
    var index=$(this).index();
    $(".xuan").slideUp().eq(index).slideDown();
});
$(".cai").click(function(){
    $(".zhuti").slideToggle();
})
$("header div").on("click",".zhuti li",function(){
    var index=$(this).index();
    $(".xuan").slideUp().eq(index).slideDown();
    $(".zhuti").slideUp();
})
//完成事项
$("#wan").click(function(){
    var data=getData();
    $(".wait ul li").each(function(index,ele){
        if($(ele).find("input").prop("checked")){
            var index=$(this).attr("id");
            data[index].isDnoe=true;
        }
    });
    saveData(data);
    reMate();
});
//删除完成事项
$("#del").click(function(){
    var data=getData();
    $(".done ul li").each(function(index,ele){
        if($(ele).find("input").prop("checked")){
            var index=$(this).attr("id");
            data[index].isDelete=true;
        }
    });
    data=data.filter(function(ele){
        return !ele.isDelete
    })
    saveData(data);
    reMate();
});
//其他地方添加
$(".tian").click(function(){
    $(".add").slideDown();
    $(".wait").slideUp();
    $(".done").slideUp();
});
$(".tian").click(function(){
    $(".add").slideDown();
    $(".wait").slideUp();
    $(".done").slideUp();
});
//查看
$(".xuan ul li").on("click","p",function(){
    var text=$(this).text();
    var shijian=$(this).siblings("time").text();
    $(".chakan p").text(text);
    $(".chakan time").text(shijian);
    $(".chakan").slideDown();
});
$(".chakan span").click(function(){
    $(this).parent().slideUp();
})
$(".chakan input").click(function(){
    $(this).parent().parent().slideUp();
})
$(".jian").click(function(){
    $(".add").slideDown().siblings().slideUp();
})