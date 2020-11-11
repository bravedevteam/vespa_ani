$(document).ready(function(){
    var b_h = $(window).height();
    console.log(b_h)
    $('body').css('height', b_h)

    function wrapWindowByMask(){
        var maskHeight = $(document).height();  
        var maskWidth = $(window).width();  
		
        $('#mask').css({'width':maskWidth,'height':maskHeight});  
		
        $('#mask').fadeTo("fast");    
        
    }
    function chap1(){
        $('#mask_chap1').css('z-index','9999').css('width','1920px').css('height','1080px');
        $('#mask_chap1').fadeTo("fast",.8);    
    }
    function chap7(){
        $('#mask_chap7').css('z-index','9999').css('width','1920px').css('height','1080px');
        $('#mask_chap7').fadeTo("fast",.8);    
    }
    function u_wrapWindowByMask(){
        var maskHeight = $(document).height();  
        var maskWidth = $(window).width();  
        $('#mask').css({'width': '0','height': '0'});  
        $('#mask').fadeTo("fast",0.7);    
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
    $('.btn_close,.lnb_menu a').click(function(){
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
            $('.lnb_sub .type_w .num_03').css('display','none');
            $('.lnb_sub .type_w .num_04').css('display','none');
            $('.lnb_sub .type_w .num_05').css('display','none');
            $('.lnb_sub .type_w .num_06').css('display','none');
            $('.lnb_sub .type_w .num_07').css('display','none');
            $('.lnb_sub .txt_box .txt_01').css('display','block');
            $('.lnb_sub .txt_box .txt_02').css('display','none');
            $('.lnb_sub .txt_box .txt_03').css('display','none');
            $('.lnb_sub .txt_box .txt_04').css('display','none');
            $('.lnb_sub .txt_box .txt_05').css('display','none');
            $('.lnb_sub .txt_box .txt_06').css('display','none');
            $('.lnb_sub .txt_box .txt_07').css('display','none');
            $('.lnb_sub .num_box.num_total .num_total_sum').css("background","url('images/common/bg_num_total01.png') no-repeat");
            $('.lnb_sub .menu_sub .bg_bar').css('top','0px');
            $('.menu-trigger span').css('background','white');
            $('.lnb_sub .menu_sub .bar_sub_on').removeClass('bar_sub_on').addClass('bar_sub');
            $('.lnb_sub .menu_sub .bg_bar').css('background','#1fd9de')
        }
        if(scrollValue >= 638){
            $('.lnb_sub .type_w .num_01').css('display','none');
            $('.lnb_sub .type_w .num_02').css('display','block');
            $('.lnb_sub .type_w .num_03').css('display','none');
            $('.lnb_sub .type_w .num_04').css('display','none');
            $('.lnb_sub .type_w .num_05').css('display','none');
            $('.lnb_sub .type_w .num_06').css('display','none');
            $('.lnb_sub .type_w .num_07').css('display','none');
            $('.lnb_sub .txt_box .txt_01').css('display','none');
            $('.lnb_sub .txt_box .txt_02').css('display','block');
            $('.lnb_sub .txt_box .txt_03').css('display','none');
            $('.lnb_sub .txt_box .txt_04').css('display','none');
            $('.lnb_sub .txt_box .txt_05').css('display','none');
            $('.lnb_sub .txt_box .txt_06').css('display','none');
            $('.lnb_sub .txt_box .txt_07').css('display','none');
            $('.lnb_sub .num_box.num_total .num_total_sum').css("background","url('images/common/bg_num_total02.png') no-repeat");
            $('.lnb_sub .menu_sub .bg_bar').css('top','32px');
            $('.menu-trigger span').css('background','black');
            $('.lnb_sub .menu_sub .bar_sub_on').removeClass('bar_sub_on').addClass('bar_sub');
            $('.lnb_sub .menu_sub .bg_bar').css('background','#1fd9de')
        }
        /*if(scrollValue < 1500){
            $('.chap2_story1 p:first-child').hide();
            $('.chap2_story1 p:nth-child(2)').hide();
            $('.chap2_story1 p:last-child').hide();
        }
        if(scrollValue >= 2100){
            $('.chap2_story1 p:first-child').slideDown(500);
            $('.chap2_story1 p:nth-child(2)').slideDown(600);
            $('.chap2_story1 p:nth-child(3)').slideDown(700);
            $('.chap2_story2 p').slideDown(1250);
        }*/
        if(scrollValue < 2630){
            $('.chap3_tit h2').removeClass('on')
        }
        if(scrollValue >= 3550){
            $('.chap3_tit h2').addClass('on')
        }
        if(scrollValue >= 3718){
            $('.lnb_sub .type_w .num_01').css('display','none');
            $('.lnb_sub .type_w .num_02').css('display','none');
            $('.lnb_sub .type_w .num_03').css('display','block');
            $('.lnb_sub .type_w .num_04').css('display','none');
            $('.lnb_sub .type_w .num_05').css('display','none');
            $('.lnb_sub .type_w .num_06').css('display','none');
            $('.lnb_sub .type_w .num_07').css('display','none');
            $('.lnb_sub .txt_box .txt_01').css('display','none');
            $('.lnb_sub .txt_box .txt_02').css('display','none');
            $('.lnb_sub .txt_box .txt_03').css('display','block');
            $('.lnb_sub .txt_box .txt_04').css('display','none');
            $('.lnb_sub .txt_box .txt_05').css('display','none');
            $('.lnb_sub .txt_box .txt_06').css('display','none');
            $('.lnb_sub .txt_box .txt_07').css('display','none');
            $('.lnb_sub .num_box.num_total .num_total_sum').css("background","url('images/common/bg_num_total02.png') no-repeat");
            $('.lnb_sub .menu_sub .bg_bar').css('top','64px');
            $('.menu-trigger span').css('background','black');
            $('.lnb_sub .menu_sub .bar_sub_on').removeClass('bar_sub_on').addClass('bar_sub');
            $('.lnb_sub .menu_sub .bg_bar').css('background','#1fd9de')
        }
        if(scrollValue >= 4835){
            $('.lnb_sub .type_w .num_01').css('display','none');
            $('.lnb_sub .type_w .num_02').css('display','none');
            $('.lnb_sub .type_w .num_03').css('display','none');
            $('.lnb_sub .type_w .num_04').css('display','block').css('height','20px');
            $('.lnb_sub .type_w .num_05').css('display','none');
            $('.lnb_sub .type_w .num_06').css('display','none');
            $('.lnb_sub .type_w .num_07').css('display','none')
            $('.lnb_sub .txt_box .txt_01').css('display','none');
            $('.lnb_sub .txt_box .txt_02').css('display','none');
            $('.lnb_sub .txt_box .txt_03').css('display','none');
            $('.lnb_sub .txt_box .txt_04').css('display','block').css('height','102px');
            $('.lnb_sub .txt_box .txt_05').css('display','none');
            $('.lnb_sub .txt_box .txt_06').css('display','none');
            $('.lnb_sub .txt_box .txt_07').css('display','none');
            $('.lnb_sub .num_box.num_total .num_total_sum').css("background","url('images/common/bg_num_total01.png') no-repeat");
            $('.lnb_sub .menu_sub .bg_bar').css('top','91px');
            $('.menu-trigger span').css('background','white');
            $('.lnb_sub .menu_sub .bar_sub').removeClass('bar_sub').addClass('bar_sub_on');
            $('.lnb_sub .menu_sub .bg_bar').css('background','white')
        }
        if(scrollValue >= 6730){
            $('.lnb_sub .type_w .num_01').css('display','none');
            $('.lnb_sub .type_w .num_02').css('display','none');
            $('.lnb_sub .type_w .num_03').css('display','none');
            $('.lnb_sub .type_w .num_04').css('display','none').css('height','20px');
            $('.lnb_sub .type_w .num_05').css('display','block').css('height','20px');
            $('.lnb_sub .type_w .num_06').css('display','none');
            $('.lnb_sub .type_w .num_07').css('display','none');
            $('.lnb_sub .txt_box .txt_01').css('display','none');
            $('.lnb_sub .txt_box .txt_02').css('display','none');
            $('.lnb_sub .txt_box .txt_03').css('display','none');
            $('.lnb_sub .txt_box .txt_04').css('display','none').css('height','102px');
            $('.lnb_sub .txt_box .txt_05').css('display','block').css('height','49px');
            $('.lnb_sub .txt_box .txt_06').css('display','none');
            $('.lnb_sub .txt_box .txt_07').css('display','none');
            $('.lnb_sub .num_box.num_total .num_total_sum').css("background","url('images/common/bg_num_total02.png') no-repeat");
            $('.lnb_sub .menu_sub .bg_bar').css('top','128px');
            $('.menu-trigger span').css('background','black');
            $('.lnb_sub .menu_sub .bar_sub_on').removeClass('bar_sub_on').addClass('bar_sub');
            $('.lnb_sub .menu_sub .bg_bar').css('background','#1fd9de')
        }
        if(scrollValue >= 8125){
            $('.lnb_sub .type_w .num_01').css('display','none');
            $('.lnb_sub .type_w .num_02').css('display','none');
            $('.lnb_sub .type_w .num_03').css('display','none');
            $('.lnb_sub .type_w .num_04').css('display','none').css('height','20px');
            $('.lnb_sub .type_w .num_05').css('display','none').css('height','20px');
            $('.lnb_sub .type_w .num_06').css('display','block').css('height','20px');
            $('.lnb_sub .type_w .num_07').css('display','none');
            $('.lnb_sub .txt_box .txt_01').css('display','none');
            $('.lnb_sub .txt_box .txt_02').css('display','none');
            $('.lnb_sub .txt_box .txt_03').css('display','none');
            $('.lnb_sub .txt_box .txt_04').css('display','none').css('height','102px');
            $('.lnb_sub .txt_box .txt_05').css('display','none').css('height','49px');
            $('.lnb_sub .txt_box .txt_06').css('display','block').css('height','53px');
            $('.lnb_sub .txt_box .txt_07').css('display','none');
            $('.lnb_sub .num_box.num_total .num_total_sum').css("background","url('images/common/bg_num_total02.png') no-repeat");
            $('.lnb_sub .menu_sub .bg_bar').css('top','150px');
            $('.menu-trigger span').css('background','black');
            $('.lnb_sub .menu_sub .bar_sub_on').removeClass('bar_sub_on').addClass('bar_sub');
            $('.lnb_sub .menu_sub .bg_bar').css('background','#1fd9de')
        }
        if(scrollValue >= 9214){
            $('.lnb_sub .type_w .num_01').css('display','none');
            $('.lnb_sub .type_w .num_02').css('display','none');
            $('.lnb_sub .type_w .num_03').css('display','none');
            $('.lnb_sub .type_w .num_04').css('display','none').css('height','20px');
            $('.lnb_sub .type_w .num_05').css('display','none').css('height','20px');
            $('.lnb_sub .type_w .num_06').css('display','none').css('height','20px');
            $('.lnb_sub .type_w .num_07').css('display','block').css('height','20px');
            $('.lnb_sub .txt_box .txt_01').css('display','none');
            $('.lnb_sub .txt_box .txt_02').css('display','none');
            $('.lnb_sub .txt_box .txt_03').css('display','none');
            $('.lnb_sub .txt_box .txt_04').css('display','none').css('height','102px');
            $('.lnb_sub .txt_box .txt_05').css('display','none').css('height','49px');
            $('.lnb_sub .txt_box .txt_06').css('display','none').css('height','53px');
            $('.lnb_sub .txt_box .txt_07').css('display','block').css('height','97px');
            $('.lnb_sub .num_box.num_total .num_total_sum').css("background","url('images/common/bg_num_total01.png') no-repeat");
            $('.lnb_sub .menu_sub .bg_bar').css('top','182px');
            $('.menu-trigger span').css('background','white');
            $('.lnb_sub .menu_sub .bar_sub_on').removeClass('bar_sub_on').addClass('bar_sub');
            $('.lnb_sub .menu_sub .bg_bar').css('background','#1fd9de')
        }
        if(scrollValue == 0){
            $('.btn_tit').removeClass('on');
            $('.btn_main').addClass('on');
            $('.underline').removeClass('on');
            $('.underline a').css('color','#666');
        }
        if(scrollValue >= 1100){
            $('.btn_tit').removeClass('on');
            $('.btn_game_info').addClass('on');
            $('.underline').removeClass('on');
            $('.underline:first-child').addClass('on');
            $('.underline a').css('color','#666');
            $('.underline:first-child a').css('color','#222');
        }
        if(scrollValue >= 3774){
            $('.underline').removeClass('on');
            $('.underline:nth-child(2)').addClass('on');
            $('.underline a').css('color','#666');
            $('.underline:nth-child(2) a').css('color','#222');
        }
        if(scrollValue >= 5019){
            $('.underline').removeClass('on');
            $('.underline:nth-child(3)').addClass('on');
            $('.underline a').css('color','#666');
            $('.underline:nth-child(3) a').css('color','#222');
        }
        if(scrollValue >= 6945){
            $('.underline').removeClass('on');
            $('.underline:nth-child(4)').addClass('on');
            $('.underline a').css('color','#666');
            $('.underline:nth-child(4) a').css('color','#222');
        }
        if(scrollValue >= 8184){
            $('.underline').removeClass('on');
            $('.underline:nth-child(5)').addClass('on');
            $('.underline a').css('color','#666');
            $('.underline:nth-child(5) a').css('color','#222');
        }
        if(scrollValue >= 9359){
            $('.underline').removeClass('on');
            $('.btn_tit').removeClass('on');
            $('.btn_down_move').addClass('on');
            $('.underline a').css('color','#666');
        }
    });
    
    
    $('.lnb_sub .menu_sub .list_bar li:first-child,.btn_main').click(function(){
        var offset = $(".chap1").offset();
        $('.btn_tit').removeClass('on');
        $('.btn_main').addClass('on');
        $('html, body').animate({scrollTop : offset.top}, 500);
        $('.lnb_sub .menu_sub .bg_bar').css('top','0px');
        $('.underline a').css('color','#666');
    });
    $('.lnb_sub .menu_sub .list_bar li:nth-child(2),.synop,.btn_game_info').click(function(){
        var offset = $(".chap2").offset();
        $('html, body').animate({scrollTop : offset.top}, 500);
        $('.lnb_sub .menu_sub .bg_bar').css('top','32px');
    });
    $('.lnb_sub .menu_sub .list_bar li:nth-child(3),.chap1_detail,.btn_onair').click(function(){
        var offset = $(".chap3").offset();
        $('html, body').animate({scrollTop : offset.top}, 500);
        $('.lnb_sub .menu_sub .bg_bar').css('top','64px');
    });
    $('.lnb_sub .menu_sub .list_bar li:nth-child(4),.btn_char').click(function(){
        var offset = $(".chap4").offset();
        $('html, body').animate({scrollTop : offset.top}, 500);
        $('.lnb_sub .menu_sub .bg_bar').css('top','91px');
    });
    $('.lnb_sub .menu_sub .list_bar li:nth-child(5),.btn_staff').click(function(){
        var offset = $(".chap5").offset();
        $('html, body').animate({scrollTop : offset.top}, 500);
        $('.lnb_sub .menu_sub .bg_bar').css('top','128px');
    });
    $('.lnb_sub .menu_sub .list_bar li:nth-child(6),.btn_music').click(function(){
        var offset = $(".chap6").offset();
        $('html, body').animate({scrollTop : offset.top}, 500);
        $('.lnb_sub .menu_sub .bg_bar').css('top','150px');
    });
    $('.lnb_sub .menu_sub .list_bar li:last-child,.btn_down_move').click(function(){
        var offset = $(".chap7").offset();
        $('.btn_tit').removeClass('on');
        $('.btn_down_move').addClass('on');
        $('html, body').animate({scrollTop : offset.top}, 500);
        $('.lnb_sub .menu_sub .bg_bar').css('top','182px');
        $('.underline a').css('color','#666');
    });
    $('.btn_main').click(function(){
        $('.btn_tit').removeClass('on');
        $('.btn_main').addClass('on');
        $('.underline').removeClass('on');
        $('.underline a').css('color','#666');
    })
    $('.btn_game_info,.synop').click(function(){
        $('.btn_tit').removeClass('on');
        $('.btn_game_info').addClass('on');
        $('.underline').removeClass('on');
        $('.underline:first-child').addClass('on');
        $('.underline a').css('color','#666');
        $('.underline:first-child a').css('color','#222');
    })
    $('.btn_onair').click(function(){
        $('.underline').removeClass('on');
        $('.underline:nth-child(2)').addClass('on');
        $('.underline a').css('color','#666');
        $('.underline:nth-child(2) a').css('color','#222');
    })
    $('.btn_char').click(function(){
        $('.underline').removeClass('on');
        $('.underline:nth-child(3)').addClass('on');
        $('.underline a').css('color','#666');
        $('.underline:nth-child(3) a').css('color','#222');
    })
    $('.btn_staff').click(function(){
        $('.underline').removeClass('on');
        $('.underline:nth-child(4)').addClass('on');
        $('.underline a').css('color','#666');
        $('.underline:nth-child(4) a').css('color','#222');
    })
    $('.btn_music').click(function(){
        $('.underline').removeClass('on');
        $('.underline:nth-child(5)').addClass('on');
        $('.underline a').css('color','#666');
        $('.underline:nth-child(5) a').css('color','#222');
    })
    $('.btn_down_move').click(function(){
        $('.underline').removeClass('on');
        $('.underline a').css('color','#666');
    })

    $('.lnb_sub').mouseenter(function(){
        $('.bar_sub').addClass('on');
    })
    $('.lnb_sub').mouseleave(function(){
        $('.bar_sub').removeClass('on');
    })
    /* chap1 */
    $('.chap1_video_sub').click(function(){
        $('.chap1_video_sub_show').show();
        $('#mask_chap1').show(function(){
            chap1();
            $('#mask_chap1,.chap1_video_sub_show div').click(function(){
                $('#mask_chap1').hide();
                $('.chap1_video_sub_show').hide();
            })
        });
    })
    
    /* chap3 */
    $('.chap3_tit_on').click(function(){
        $('.chap3_pop').show()
        $('body').css('overflow','hidden')
        $('#mask').show(function(){
            $('#mask').fadeTo("fast",.8);    
            wrapWindowByMask();
            $('#mask,.chap3_pop_close_btn').click(function(){
                $('#mask').hide();
                $('.chap3_pop').hide();
                $('body').css('overflow','auto')
            })
        });
    })
    
    /* chap4 */
    $('.tab1 .slide01 .button-prev').click(function(){
        $('.tab1 .slide01').hide();
        $('.tab1 .slide04').fadeIn('linear');
    })
    $('.tab1 .slide01 .button-next').click(function(){
        $('.tab1 .slide01').hide();
        $('.tab1 .slide02').fadeIn('linear');
    })
    $('.tab1 .slide02 .button-next').click(function(){
        $('.tab1 .slide02').hide();
        $('.tab1 .slide03').fadeIn('linear');
    })
    $('.tab1 .slide02 .button-prev').click(function(){
        $('.tab1 .slide02').hide();
        $('.tab1 .slide01').fadeIn('linear');
    })
    $('.tab1 .slide03 .button-next').click(function(){
        $('.tab1 .slide03').hide();
        $('.tab1 .slide04').fadeIn('linear');
    })
    $('.tab1 .slide03 .button-prev').click(function(){
        $('.tab1 .slide03').hide();
        $('.tab1 .slide02').fadeIn('linear');
    })
    $('.tab1 .slide04 .button-next').click(function(){
        $('.tab1 .slide04').hide();
        $('.tab1 .slide01').fadeIn('linear');
    })
    $('.tab1 .slide04 .button-prev').click(function(){
        $('.tab1 .slide04').hide();
        $('.tab1 .slide03').fadeIn('linear');
    })
    $('.tab2 .slide01 .button-prev').click(function(){
        $('.tab2 .slide01').hide();
        $('.tab2 .slide03').fadeIn('linear');
    })
    $('.tab2 .slide01 .button-next').click(function(){
        $('.tab2 .slide01').hide();
        $('.tab2 .slide02').fadeIn('linear');
    })
    $('.tab2 .slide02 .button-next').click(function(){
        $('.tab2 .slide02').hide();
        $('.tab2 .slide03').fadeIn('linear');
    })
    $('.tab2 .slide02 .button-prev').click(function(){
        $('.tab2 .slide02').hide();
        $('.tab2 .slide01').fadeIn('linear');
    })
    $('.tab2 .slide03 .button-next').click(function(){
        $('.tab2 .slide03').hide();
        $('.tab2 .slide01').fadeIn('linear');
    })
    $('.tab2 .slide03 .button-prev').click(function(){
        $('.tab2 .slide03').hide();
        $('.tab2 .slide02').fadeIn('linear');
    })
    $('.tab3 .slide01 .button-prev').click(function(){
        $('.tab3 .slide01').hide();
        $('.tab3 .slide03').fadeIn('linear');
    })
    $('.tab3 .slide01 .button-next').click(function(){
        $('.tab3 .slide01').hide();
        $('.tab3 .slide02').fadeIn('linear');
    })
    $('.tab3 .slide02 .button-next').click(function(){
        $('.tab3 .slide02').hide();
        $('.tab3 .slide03').fadeIn('linear');
    })
    $('.tab3 .slide02 .button-prev').click(function(){
        $('.tab3 .slide02').hide();
        $('.tab3 .slide01').fadeIn('linear');
    })
    $('.tab3 .slide03 .button-next').click(function(){
        $('.tab3 .slide03').hide();
        $('.tab3 .slide01').fadeIn('linear');
    })
    $('.tab3 .slide03 .button-prev').click(function(){
        $('.tab3 .slide03').hide();
        $('.tab3 .slide02').fadeIn('linear');
    })
    $('.tab4 .slide01 .button-next').click(function(){
        $('.tab4 .slide01').hide();
        $('.tab4 .slide02').fadeIn('linear');
    })
    $('.tab4 .slide02 .button-next').click(function(){
        $('.tab4 .slide02').hide();
        $('.tab4 .slide03').fadeIn('linear');
    })
    $('.tab4 .slide03 .button-next').click(function(){
        $('.tab4 .slide03').hide();
        $('.tab4 .slide04').fadeIn('linear');
    })
    $('.tab4 .slide04 .button-next').click(function(){
        $('.tab4 .slide04').hide();
        $('.tab4 .slide05').fadeIn('linear');
    })
    $('.tab4 .slide05 .button-next').click(function(){
        $('.tab4 .slide05').hide();
        $('.tab4 .slide06').fadeIn('linear');
    })
    $('.tab4 .slide06 .button-next').click(function(){
        $('.tab4 .slide06').hide();
        $('.tab4 .slide07').fadeIn('linear');
    })
    $('.tab4 .slide07 .button-next').click(function(){
        $('.tab4 .slide07').hide();
        $('.tab4 .slide08').fadeIn('linear');
    })
    $('.tab4 .slide08 .button-next').click(function(){
        $('.tab4 .slide08').hide();
        $('.tab4 .slide09').fadeIn('linear');
    })
    $('.tab4 .slide09 .button-next').click(function(){
        $('.tab4 .slide09').hide();
        $('.tab4 .slide10').fadeIn('linear');
    })
    $('.tab4 .slide10 .button-next').click(function(){
        $('.tab4 .slide10').hide();
        $('.tab4 .slide11').fadeIn('linear');
    })
    $('.tab4 .slide11 .button-next').click(function(){
        $('.tab4 .slide11').hide();
        $('.tab4 .slide12').fadeIn('linear');
    })
    $('.tab4 .slide12 .button-next').click(function(){
        $('.tab4 .slide12').hide();
        $('.tab4 .slide01').fadeIn('linear');
    })

    $('.tab4 .slide01 .button-prev').click(function(){
        $('.tab4 .slide01').hide();
        $('.tab4 .slide12').fadeIn('linear');
    })
    $('.tab4 .slide02 .button-prev').click(function(){
        $('.tab4 .slide02').hide();
        $('.tab4 .slide01').fadeIn('linear');
    })
    $('.tab4 .slide03 .button-prev').click(function(){
        $('.tab4 .slide03').hide();
        $('.tab4 .slide02').fadeIn('linear');
    })
    $('.tab4 .slide04 .button-prev').click(function(){
        $('.tab4 .slide04').hide();
        $('.tab4 .slide03').fadeIn('linear');
    })
    $('.tab4 .slide05 .button-prev').click(function(){
        $('.tab4 .slide05').hide();
        $('.tab4 .slide04').fadeIn('linear');
    })
    $('.tab4 .slide06 .button-prev').click(function(){
        $('.tab4 .slide06').hide();
        $('.tab4 .slide05').fadeIn('linear');
    })    
    $('.tab4 .slide07 .button-prev').click(function(){
        $('.tab4 .slide07').hide();
        $('.tab4 .slide06').fadeIn('linear');
    }) 
    $('.tab4 .slide08 .button-prev').click(function(){
        $('.tab4 .slide08').hide();
        $('.tab4 .slide07').fadeIn('linear');
    }) 
    $('.tab4 .slide09 .button-prev').click(function(){
        $('.tab4 .slide09').hide();
        $('.tab4 .slide08').fadeIn('linear');
    }) 
    $('.tab4 .slide10 .button-prev').click(function(){
        $('.tab4 .slide10').hide();
        $('.tab4 .slide09').fadeIn('linear');
    }) 
    $('.tab4 .slide11 .button-prev').click(function(){
        $('.tab4 .slide11').hide();
        $('.tab4 .slide10').fadeIn('linear');
    }) 
    $('.tab4 .slide12 .button-prev').click(function(){
        $('.tab4 .slide12').hide();
        $('.tab4 .slide11').fadeIn('linear');
    })

    $(".tab_content").hide();
    $(".tab_content:first").show();

    $("ul.tabs li").click(function () {
        $("ul.tabs li").removeClass("on")
        //$(this).addClass("active").css({"color": "darkred","font-weight": "bolder"});
        $(this).addClass("on")
        $(".tab_content").hide()
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn()
        $('.chap4_wrap').css("background","url('images/images/bg_chap4_left.png') no-repeat")
    });
    
    $(".black").click(function () {
        $('.chap4_wrap').css("background","url('images/images/bg_chap4_left_black.png') no-repeat")
    });

    /* chap5 */
    $(".tab_content_chap5").hide();
    $(".tab_content_chap5:first").show();

    $("ul.tabs_chap5 li").click(function () {
        $("ul.tabs_chap5 li").removeClass("on")
        $(this).addClass("on")
        $(".tab_content_chap5").hide()
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn()
    });
    /* chap5 */
    /* chap6 */
    $(".tab_content_chap6").hide();
    $(".tab_content_chap6:first").show();

    $("ul.tabs_chap6 li").click(function () {
        $("ul.tabs_chap6 li").removeClass("on")
        $(this).addClass("on")
        $(".tab_content_chap6").hide()
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn()
    });
    /* chap6 */
    /* chap7 */
    $('.chap7 .chap7_video_sub').click(function(){
        $('.chap7 .chap7_video_sub_show').show();
        $('#mask_chap7').show(function(){
            chap7();
            $('#mask_chap7,.chap7 .chap7_video_sub_show div').click(function(){
                $('#mask_chap7').hide();
                $('.chap7 .chap7_video_sub_show').hide();
            })
        });
    })
})