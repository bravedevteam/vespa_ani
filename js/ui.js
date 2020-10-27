$(document).ready(function(){
    function wrapWindowByMask(){
        var maskHeight = $(document).height();  
        var maskWidth = $(window).width();  
		
        $('#mask').css({'width':maskWidth,'height':maskHeight});  
		
        $('#mask').fadeTo("slow",0.7);    
        
    }
    function u_wrapWindowByMask(){
        var maskHeight = $(document).height();  
        var maskWidth = $(window).width();  
        $('#mask').css({'width': '0','height': '0'});  
        $('#mask').fadeTo("slow",0.7);    
        
        
    }
    var burger = $('.menu-trigger');
    burger.each(function(index){
        var $this = $(this);
        $this.mouseenter(function(e){
            $(this).addClass('active-8');
            $('.lnb').animate({left:'0'},400);
            e.preventDefault();
            $('#mask').show(function(){
                wrapWindowByMask()
            });
        })
        $this.mouseout(function(v){
            $(this).removeClass('active-8');
            v.preventDefault();
        })
    });
    $('.lnb').mouseleave(function(lnb){
        $('.lnb').animate({left:'-350'},400,)
        $('#mask').hide(function(){
            u_wrapWindowByMask()      
        });
        lnb.preventDefault();
    })
    $('.btn_close').click(function(){
        $('.lnb').animate({left:'-350'},400,)
        $('#mask').hide(function(){
            u_wrapWindowByMask()      
        });
    })


    $(window).scroll(function () {
        var scrollValue = $(document).scrollTop();
        console.log(scrollValue)
        if(scrollValue > 0 && scrollValue < 416){
            $('.lnb_sub .type_w .num_01').css('display','block');
            $('.lnb_sub .type_w .num_02').css('display','none');
            $('.lnb_sub .txt_box .txt_01').css('display','block');
            $('.lnb_sub .txt_box .txt_02').css('display','none');
            $('.lnb_sub .num_box.num_total .num_total_sum').css("background","url('images/common/bg_num_total01.png') no-repeat");
            $('.lnb_sub .menu_sub .bg_bar').css('top','0px');
            $('.menu-trigger span').css('background','white');
        }
        if(scrollValue >= 638){
            $('.lnb_sub .type_w .num_01').css('display','none');
            $('.lnb_sub .type_w .num_02').css('display','block');
            $('.lnb_sub .txt_box .txt_01').css('display','none');
            $('.lnb_sub .txt_box .txt_02').css('display','block');
            $('.lnb_sub .num_box.num_total .num_total_sum').css("background","url('images/common/bg_num_total02.png') no-repeat");
            $('.lnb_sub .menu_sub .bg_bar').css('top','32px');
            $('.menu-trigger span').css('background','black');
        }
    });


    $('.lnb_sub .menu_sub .list_bar li:first-child').click(function(){
        var offset = $(".chap1").offset();
        $('html, body').animate({scrollTop : offset.top}, 500);
        $('.lnb_sub .menu_sub .bg_bar').css('top','0px');
    });
    $('.lnb_sub .menu_sub .list_bar li:nth-child(2)').click(function(){
        var offset = $(".chap2").offset();
        $('html, body').animate({scrollTop : offset.top}, 500);
        $('.lnb_sub .menu_sub .bg_bar').css('top','32px');
    })

    $('.lnb_sub').mouseenter(function(){
        $('.bar_sub').addClass('on');
        /*('.lnb_sub .menu_sub .list_bar li').stop().mouseenter(function(e){
            $(this).addClass('on');
            e.preventDefault();
            $(this).mouseleave(function(){
                $(this).removeClass('on');
            })
        })*/
    })
    $('.lnb_sub').mouseleave(function(){
        $('.bar_sub').removeClass('on');
    })
    /*
    $('.bar_sub').mouseenter(function(){
        $('.list_bar').css('background','white').css('opacity','1').css('margin-left','-2px')
        $('.lnb_sub .menu_sub .bar_sub').addClass('off');
        $('.lnb_sub .menu_sub .list_bar li').mouseenter(function(){
            $(this).addClass('on')
        })
        
    })
    $('.bar_sub').mouseleave(function(){
        $('.list_bar').css('background','transparent').css('opacity','0.1')
        $('.lnb_sub .menu_sub .bar_sub').removeClass('off');
    })
    */
})