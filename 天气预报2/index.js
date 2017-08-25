
var provinces=[];
var citys=[];
$.ajax({
    url: "http://api.jisuapi.com/weather/city?appkey=46106673093cfd19",
    dataType: "jsonp",
    success: function (r) {
        console.log(r);
        provinces = $.grep(r.result, function (val, index) {
            if (val.parentid == "0") {
                return true;
            }
        })
        console.log(provinces);
        $.each(provinces, function (index, value) {
            $("<option>").html(value.city).val(value.cityid).appendTo("#province");
        })
        $("#province").on("change blur",function () {
            $("#city").empty();
            var id = $(this).val();
            citys = $.grep(r.result, function (val, index) {
                if (val.parentid == id) {
                    return true;
                }
            })
            console.log(citys);
            $.each(citys, function (index, value) {
                $("<option>").html(value.city).val(value.city).appendTo("#city");
            })
        })
    }
})
$("#city").on("change blur",function () {
    var city=$(this).val();
    $.ajax({
        url:"http://api.jisuapi.com/weather/query",
        data:{appkey:"46106673093cfd19",city:city},
        dataType:"jsonp",
        success:function (r) {
            console.log(r);
            var data=r.result;
            $(".local").css({display:"block"});
            $(".weathers .city").html(data.city);
            $(".weathers .week").html(data.date+"&nbsp"+data.week);
            $(".weathers .pm2_5").html(data.aqi.pm2_5+"&nbsp"+data.aqi.quality+"&nbsp").css({background:data.aqi.aqiinfo.color});
            $(".local div").html("<img src='images/weather_icon/"+data.img+".png'>");
            $(".weathers .temp").text(data.temp+"℃"+data.weather);
            $(".weathers .temps").html(data.templow+"~"+data.temphigh+"℃");
            $(".weathers .wind").html(data.winddirect+"&nbsp"+data.windpower);
            var str="";
            $(".life").empty();
            $.each(data.index,function (index,val) {
                str+=`<Li class="daysindex">
                    <div class="xinxi">${val.iname}</div>
                    <div class="xiangqing">${val.ivalue}</div>
                </Li>`
            })
            $(".life").html(str);

            var str1="";
            $(".days ul").empty();
            $.each(data.hourly,function (index,val) {
                str1+=`<li>
                    <p class="time">${val.time}</p>
                    <img src="img/${val.img}.png" alt="">
                    <p class="weather">${val.weather}</p>
                    <span class="temp">${val.temp+"℃"}</span>
                </li>`
            })
            $(".days ul").html(str1);

            var str2="";
            $(".weathers ul").empty();
            $.each(data.daily,function (index,val) {
                str2+=`<li>
                    <p class="week">${val.date}&nbsp;${val.week}</p>
                    <p><em class="pm2_5"></em></p>
                    <img src="img/${val.day.img}.png" alt="">
                    <p class="temp">${val.day.weather}</p>
                    <p class="temps">${val.night.templow}~${val.day.temphigh}℃</p>
                    <p class="wind">${val.day.winddirect}&nbsp;${val.day.windpower}</p>
                </li>`
            })
            $(".weathers ul").html(str2);
        }
    })
})
