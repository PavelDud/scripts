
var div = document.createElement('div');
div.style.overflowY = 'scroll';
div.style.width = '50px';
div.style.height = '50px';
div.style.visibility = 'hidden';
document.body.appendChild(div);
var scrollWidth = div.offsetWidth - div.clientWidth;
document.body.removeChild(div);




// var menu_vertical_h = $('.form_calculate_col_fixed').offset().top;
    var menu_vertical_h = $('#form_col_first').offset().top;
    var stop_margin_top = 0;
    var reigth_col = $(".form_calculate_col_first").outerWidth() + $(".form_calculate_full").offset().left
    var width_fix = $(".form_calculate_col_first").outerWidth();
    var height_fix = $(".form_calculate_col_fixed").outerHeight();
    var top_col = $(".form_calculate_col_fixed").offset().top + $(".form_calculate_col_fixed").height();
    var height_menu = $(".header_inner.navi_scrolled").height();
  
    lll();
    
   
    function lll(){
        
        if ($("body").outerWidth() + scrollWidth > 991 && !(height_fix>1281)) {
           
            height_menu=$(".header_inner.navi_scrolled").height();
            $(".form_calculate_col_fixed").css({'height': 'auto'});
            
            height_fix=$(".form_calculate_col_fixed").outerHeight();
            $(".form_calculate_col_fixed").css({'height': height_fix});
         
               
          
            
            top_col = $(".form_calculate_col_fixed").offset().top + $(".form_calculate_col_fixed").height();
            //если скрол окна больше верха сайдбара (захватываем сайдбар)
         
            if ($(window).scrollTop() +height_menu> menu_vertical_h) {
               
                 width_fix = $(".form_calculate_col_first").outerWidth();
                 
                $(".form_calculate_col_fixed").css({'left': reigth_col, 'width': width_fix, 'height': height_fix});
               
                $(".form_calculate_col_fixed").css({'left': reigth_col});
                if (!$(".form_calculate_col_fixed").hasClass("fix_for_side_bar")) {
                    $(".form_calculate_col_fixed").addClass("fix_for_side_bar")
                    $(".form_calculate_col_fixed").css({'top': height_menu+'px'})
                }
                console.log(top_col)
                console.log($(".container.form_calculate").offset().top + $(".container.form_calculate").outerHeight())
                if (top_col > $(".container.form_calculate").offset().top + $(".container.form_calculate").outerHeight()) {
                   
                    if (!$(".form_calculate_col_fixed").hasClass('fix_for_side_bar_abs') && !$(".form_calculate_col_fixed").hasClass('fix_for_side_check')) {
                        $(".form_calculate_col_fixed").css({'bottom': '0px', 'left': 'auto'})
                        $(".form_calculate_col_fixed").addClass('fix_for_side_bar_abs');
                       
                        $(".form_calculate_col_fixed").addClass("fix_for_side_check");
                    }
                } else if ($(".form_calculate_col_fixed").hasClass('fix_for_side_bar_abs') && $(window).scrollTop()+ height_menu< $(".form_calculate_col_fixed").offset().top) {
                    $(".form_calculate_col_fixed").css({'top': height_menu+'px'});
                    $(".form_calculate_col_fixed").removeClass('fix_for_side_bar_abs');
                    $(".form_calculate_col_fixed").removeClass("fix_for_side_check");
                    $(".form_calculate_col_fixed").css({'left': reigth_col})
                    $(".form_calculate_col_fixed").css({'bottom': ''})
                }

            } else {
                $(".form_calculate_col_fixed").removeClass("fix_for_side_bar");
                $(".form_calculate_col_fixed").css({'left': '', 'width': '', 'height': height_fix,'top': ''});
               
            }
        
          }else {
            $(".form_calculate_col_fixed").removeClass('fix_for_side_bar_abs');
            $(".form_calculate_col_fixed").removeClass("fix_for_side_check");
            $(".form_calculate_col_fixed").removeClass("fix_for_side_bar");
            $(".form_calculate_col_fixed").css({'bottom': '', 'top': '', 'left': '', 'width': '', 'height': ''})
            height_fix=$(".form_calculate_col_fixed").outerHeight();
        }
        
        
        
    }
    
    
    $(window).resize(function () {
    reigth_col = $(".form_calculate_col_first").outerWidth() + $(".form_calculate_full").offset().left
    top_col = $(".form_calculate_col_fixed").offset().top + $(".form_calculate_col_fixed").height();
     width_fix = $(".form_calculate_col_first").outerWidth();
    height_fix = $(".form_calculate_col_fixed").outerHeight();
    height_menu=$(".header_inner.navi_scrolled").height();
     $(".form_calculate_col_fixed").css({'top': height_menu+'px'});
      menu_vertical_h = $('#form_col_first').offset().top;
        lll();
        if($("body").outerWidth() + scrollWidth == 992){
            lll();
        }
    })

    $(window).scroll(function () {
        lll();
    });
