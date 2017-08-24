/**
 * Created by Admin on 2017/8/11.
 */
//利用on()增加两个事件 让按下抬起都能触发新的事件
$(document).ready(function () {

// 判断限制字数
    $("#text").on("keydown keyup", function () {
        var l = $(this).val().length;
        if (l > 40) {
            l = 40;
            alert("字数超过限制")
            $(this).val(function (i, val) {
                return val.slice(0, 40);
            })
        }
        $(".notice span").text(function () {
            return l < 10 ? "0" + l : l;
        })
    })
// 点击提交的部分
    $("#submit").click(function () {
        var val = $("#text").val();
        if (val === "") {
            alert("请输入内容再提交");
            return;
        }
        var data = getData();
        var date = new Date();
        var time = date.getTime();
        data.push({text: val, time, isDone: false, isStar: false,isDelete:false})
        saveData(data);
        $("#text").val("");
        $(".notice span").text("00");
        alert("添加成功")
    });


//关闭添加界面
    $(".close").click(function () {
        $(".add").slideUp(500);
        $(".wait").delay(500).slideDown(1000);
    })

// 获取数据的函数
    function getData() {
        if (localStorage.todo) {
            return JSON.parse(localStorage.todo)
        } else {
            return [];
        }
    }


//保存函数
    function saveData(data) {
        localStorage.todo = JSON.stringify(data);
    }


// 重绘页面
    function reWrite() {//要重新绘制先清除
        $(".item ul").empty();
        var data = getData();
        var str1 = "", str2 = "";
        $.each(data, function (index, value) {
            if (value.isDone === false) {
                str1 += `
                 <li id="${index}">
                        <input type="checkbox">
                        <p>${value.text}</p>
                        <time>${time(value.time)}</time>
                        <i>&#xe608;</i>
                    </li>
`
            } else {
                str2 += ` <li id="${index}">
                        <input type="checkbox">
                        <p>${value.text}</p>
                        <time>${time(value.time)}</time>
                        <i>&#xe608;</i>
                    </li>`
            }

        });
        $(".wait ul").html(str1);
        $(".done ul").html(str2);

    }

    reWrite();
//处理时间格式函的数
    function time(ms) {
        var date = new Date();
        date.setTime(ms);
        var year = addZero(date.getFullYear());
        var month = addZero(date.getMonth());
        var day = addZero(date.getDate());
        var hour = addZero(date.getHours());
        var min = addZero(date.getMinutes());
        var sec = addZero(date.getSeconds());
        return year + "/" + month + "/" + day + "/" + hour + ":" + min + ":" + sec
    }

    function addZero(num) {
        return num < 10 ? "0" + num : num;
    }

// 选项卡
    $(".leftbar ul li").click(function () {
        $(".add").hide();
        var index = $(this).index();
        $(".item").hide().eq(index+1).show();
    });

// 移动到已完成 循环当前里面的所有;
    $(".movebtn").click(function(){
        var data=getData();
        $(".wait ul li").each(function(index,ele){
            if($(this).find("input").prop("checked")){
                var index=$(this).attr("id");
                data[index].isDone=true;
            }
        });
        saveData(data);
        reWrite();
    });


// 删除已完成
    $(".clearbtn").click(function () {
        var data = getData();
        $(".done ul li").each(function (index, ele) {
            if ($(this).find("input").prop("checked")) {
                var index=$(this).attr("id");
                data[index].isDelete=true;
            }
        })
        data=data.filter(function (ele) {
            return !ele.isDelete;
        })
        saveData(data);
        reWrite();
    })


    // 跳转到增加页面
    $(".addbtn").click(function(){
        $(".item").hide().siblings(".add").slideDown();
    });






})