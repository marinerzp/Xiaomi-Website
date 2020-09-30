//当页面加载完成之后执行
$(function(){
    //购物车动画
    ~~function (){
        let $xuangou=$('header .right-nav>a:nth-last-of-type(1)')
        let $shopchar=$('header .right-nav>a:nth-last-of-type(1)>#shop-car')
        $xuangou.hover(function(){
            $shopchar.stop().slideDown(500)
        },function(){
            $shopchar.stop().slideUp(500)
        })
    }();
    //轮播图动画
    ~~function (){
        let  $banner=$('.banner'),
            $imgList=$banner.find('.img-box ul li'),
            $tabList=$banner.find('.img-box>.btn>div'),
            $btn=$banner.find('.img-box span')
        //初始样式显示    
        $imgList.eq(0).show()
        $tabList.eq(0).addClass('show')
        
        let index=0,len=$imgList.length,timer=null
        //$tabList点击
        $tabList.click(function(){
            index=$(this).index()
            change()
        })
        //$btn点击
        $btn.click(function(){
            //先判断是左按钮还是右按钮
            if ( $(this).index() ){
            //右
            index = (index+1)%len;
            }else{
            //左
            index = (index-1+len)%len;
            }
    
            change()
        })
        function change(){
        //对应的按钮改变样式，其他按钮去掉样式
        $tabList.eq(index).addClass("show").siblings().removeClass("show");
        //对应的pic显示，其他的pic隐藏
        $imgList.eq(index).stop().fadeIn(500).siblings().stop().fadeOut(500);
        }

        //添加与清除定时器
        auto();
        $banner.hover(function(){
        clearInterval(timer);
        },function(){
        auto();
        });

        //定时器
        function auto(){
        timer = setInterval(()=>{
            index = (index+1)%len;
            change();
        },3000)
        }
    }();
    //回到顶部
    ~~function (){
        let $toTop=$('.go-top')
        let timer=null
        //节流防抖
        //检测滚动高度
        $(window).scroll(function(){
            clearTimeout(timer)
            timer=setTimeout(()=>{
                let scrollTop=$(window).scrollTop()
                if(scrollTop>=500){
                    $toTop.fadeIn()
                }
                else{
                    $toTop.fadeOut()
                }
            },500)
        })
        $toTop.click(function(){
            $('html,body').stop().animate({
                scrollTop:0
            },200);
        })
    }();
})
