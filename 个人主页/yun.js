/**
 * Created by mzy22 on 2017/8/13.
 */
let box1 = document.querySelector(".jineng .box1");
let box2 = document.querySelector(".jineng .box2")
let box3 = document.querySelector(".jineng .box3")
let box4 = document.querySelector(".jineng .box4")
let box5 = document.querySelector(".jineng .box5")
let box6 = document.querySelector(".jineng .box6")
let maxbox=document.querySelector(".jineng");
let color=["0","3","6","9","c","f"];
let colorarr="";
function getcolor() {
    let a="#";
    for (var i=0;i;i++){
        let rc = Math.floor(Math.round()*6);
        a+=color[rc];
    }
    return a;
}
maxbox.onmouseover=function () {
   setInterval(function () {
       let rx = Math.round(Math.random()*920);
       let ry = Math.round(Math.random()*320);

       box1.style.top=ry+"px";
       box1.style.left=rx+"px";
       box1.style.background=getcolor();

   },1000)
    setInterval(function () {
        let rx = Math.round(Math.random()*920);
        let ry = Math.round(Math.random()*320);
        box2.style.top=ry+"px";
        box2.style.left=rx+"px";
       box2.style.background=getcolor();
    },1000)
    setInterval(function () {
        let rx = Math.round(Math.random()*920);
        let ry = Math.round(Math.random()*320);
        box2.style.top=ry+"px";
        box3.style.left=rx+"px";
    },1000)
    setInterval(function () {
        let rx = Math.round(Math.random()*920);
        let ry = Math.round(Math.random()*320);
        box4.style.top=ry+"px";
        box4.style.left=rx+"px";
    },1000)
    setInterval(function () {
        let rx = Math.round(Math.random()*920);
        let ry = Math.round(Math.random()*320);
        box5.style.top=ry+"px";
        box5.style.left=rx+"px";
    },1000)
    setInterval(function () {
        let rx = Math.round(Math.random()*920);
        let ry = Math.round(Math.random()*320);
        box6.style.top=ry+"px";
        box6.style.left=rx+"px";
    },1000)
}
maxbox.onmouseout=function () {
    //clearInterval(st)
}


