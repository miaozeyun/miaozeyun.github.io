/**
 * Created by mzy22 on 2017/8/20.
 */
$('.Yl-container').YlSlide({
    wrapper: '.Yl-wrapper',
    slideClass: '.Yl-slide',
    stylePrefix: '.Yl-',
    slideLength: 3,
    pages: true,
    pagination: '.Yl-pagination',
    pagingSelect: '.Yl-pagination-bullet-active',
    autoplay: 5000,
    imgTemplate: {
        0: ['<div class="Yl-img0"></div>'],
        1: ['<div class="Yl-img1"></div>'],
        2: ['<div class="Yl-img2"></div>']
    },
    fontTemplate: {
        0: ['<div class="Yl-font0">ALL ABOUT US</div>', '<div class="Yl-font1">“成就中国人的事业”是我们亘古不变的使命</div>', '<div class="Yl-font2">只为一建提分</div>'],
        1: ['<div class="Yl-font0">SINCE 2002</div>', '<div class="Yl-font1">十五年专注一建教学，行业的佼佼者</div>', '<div class="Yl-font2">只为一建提分</div>'],
        2: ['<div class="Yl-font0">CHANCE FOR YOU</div>', '<div class="Yl-font1">更高效的学习方式，让学员花费更少的时间</div>', '<div class="Yl-font2">只为一建提分</div>']
    },
    fontAnimationMode: {
        0: ['fadeInUp', 'fadeInUp', 'slideInLeft'],
        1: ['fadeInUp', 'fadeInUp', 'slideInLeft'],
        2: ['fadeInUp', 'fadeInUp', 'slideInLeft']
    },
    customTemplate: {
        0: ['<div class="Yl-Button"><a href="javascript:void(0);">开启专属你的备考之旅</a></div>'],
        1: ['<div class="Yl-Button"><a href="javascript:void(0);">开启专属你的备考之旅</a></div>'],
        2: ['<div class="Yl-Button"><a href="javascript:void(0);">开启专属你的备考之旅</a></div>']
    },
    resource:[//slide所需的图片资源
        'img/1.png',
        'img/2.jpg',
        'img/3.jpg',
    ],
    loading:function(e){//加载过程中回调函数
        $("#Percent").text(e+'%'); //设置百分数到DOM上
        if (e == 100) {
            $("#Percent").remove();
        }
    },
    callback: function(e) {
        //整个dom加载完成后的回调函数、切换动画前的回调
    },
    before: function(e) {
        //页面切换前的回调函数
    },
    after: function(e) {
        //页面切换完成后的回调函数

    }
});



