myJQuery(function () {
    var content = "";
    var coust_current = 0;
    var curr_service = "";
    var curr_settings = "";
    var cost_served =0;
    var flag_serv=false;
    var flag_service=false;
    var htmls="";
    function none_result(){
        if(!myJQuery("#settings").prop("checked") && (!myJQuery("#settings_service").prop("checked") || flag_serv==false) || (!myJQuery(".y").prop("checked") && !myJQuery(".g").prop("checked"))){
             htmls=myJQuery(".result").html();
            myJQuery(".result").css('display','none');
            myJQuery(".form_direct").css('display','none');
            myJQuery(".result_but").css('display','none');
           
        }else{
             myJQuery(".result").css('display','block');
            myJQuery(".form_direct").css('display','block');
            myJQuery(".result_but").css('display','block');
           
        }
    }
    
    function set_description(that) {
        if (that != undefined) {
            var btn_id = that.attr("id");
        }
        if (myJQuery("#toggle-two").prop("checked") && myJQuery(".classic .btn").hasClass("select_btn")) { //классический
            var label = myJQuery(".classic .select_btn").data("label");
            var words = myJQuery(".classic .select_btn").data("words");
            var cost = myJQuery(".classic .select_btn").data("cost");
            var img=myJQuery(".classic .select_btn").data("src");
            var discount = myJQuery(".classic .select_btn").data("discount");
            var description = myJQuery(".classic .select_btn").data("description");
            if (that != undefined) {
                myJQuery(".classic .servises .servises_elem").each(function () {
                    if (myJQuery(this).hasClass(btn_id)) {
                        myJQuery('.result_button').removeClass('none');
                        if (myJQuery(this).html().length > 0) {
                            curr_settings = "<div class='wrap_for_info wrap_for_info_seerv'><h5 class='h5_title'>В настройки рекламной комании включено:</h5>" + myJQuery(this).html() + "</div>";
                        }
//                        myJQuery(".wrap_for_info_seerv").html(myJQuery("<h5 class='h5_title'>").text("В настройки рекламной комании включено:"));
                        if(myJQuery("#settings_service").prop("checked")){
                             myJQuery(".panel-body.content").html(curr_settings + curr_service);
                        }else{
                            myJQuery(".panel-body.content").html(curr_settings);
                        }
                       
                        content = myJQuery(".panel-body.content").html();
                    }
                });
            }
        }else if (!myJQuery("#toggle-two").prop("checked") && myJQuery(".express .btn").hasClass("select_btn")) { //экспресс
            var label = myJQuery(".express .select_btn").data("label");
            var words = myJQuery(".express .select_btn").data("words");
            var cost = myJQuery(".express .select_btn").data("cost");
            var discount = myJQuery(".express .select_btn").data("discount");
            var description = myJQuery(".express .select_btn").data("description");
            if (that != undefined) {
                myJQuery(".express .servises .servises_elem").each(function () {
                    if (myJQuery(this).hasClass(btn_id)) {
                        myJQuery('.result_button').removeClass('none');
                        if (myJQuery(this).html().length > 0) {
                            curr_settings = "<div class='wrap_for_info'><h5 class='h5_title'>В настройки рекламной комании включено:</h5>" + myJQuery(this).html() + "</div>";
                        }
//                        myJQuery(".wrap_for_info_seerv").html(myJQuery("<h5 class='h5_title'>").text("В настройки рекламной комании включено:"));
                        if (myJQuery("#settings_service").prop("checked")) {
                            myJQuery(".panel-body.content").html(curr_settings + curr_service);
                        } else {
                            myJQuery(".panel-body.content").html(curr_settings);
                        }
                       
                        content = myJQuery(".panel-body.content").html();
                    }
                });
            }
        }
        if (!myJQuery(".result>div.yandex").hasClass("none")) {
            coust_current = Number(cost);
            myJQuery(".result>div.yandex .tariff").text(label);
            myJQuery(".result>div.yandex .count_phraze").text(words);
            if (cost_served > 0 && myJQuery("#settings_service").prop("checked")) {
                myJQuery(".result>div.yandex .total .first").text(cost + cost_served);
            } else {
                myJQuery(".result>div.yandex .total .first").text(cost);
            }
            myJQuery(".result>div.yandex .description").text(description);
            myJQuery(".servise_prices").text(cost);
        }
        if (!myJQuery(".result>div.google").hasClass("none")) {
            coust_current = Number(cost);
            myJQuery(".result>div.google .tariff").text(label);
            myJQuery(".result>div.google .count_phraze").text(words);
            if (cost_served > 0 && myJQuery("#settings_service").prop("checked")) {
                myJQuery(".result>div.google .total .first").text(cost + cost_served);
            } else {
                myJQuery(".result>div.google .total .first").text(cost);
            }
            myJQuery(".result>div.google .description").text(description);
            myJQuery(".servise_prices").text(cost);
        }
        var tot = 0;
        myJQuery(".result>div").each(function () {
            tot += Number(myJQuery(this).find('.first').text());
        });
        myJQuery(".result_but .total").text(tot);
        if (myJQuery(".y").prop("checked") && myJQuery(".g").prop("checked")) {
            myJQuery('.p_disc').removeClass('none');
            myJQuery(".result_but .discount").text(discount);
        } else {
            myJQuery('.p_disc').addClass('none');
        }
        myJQuery(".servise_main_span").css('display','block')
        myJQuery(".form-group").css('display','block');
    }
    function move_block() {
        if (myJQuery(".y").prop("checked")) {
            if (!myJQuery(".yandex").hasClass('added')) {
                myJQuery(myJQuery(".yandex")).clone().appendTo(".result");
                myJQuery(".yandex").addClass("added");
            }
        } else {
            myJQuery(".yandex").removeClass("added");
            myJQuery(".result").find(".yandex").remove();
        }
        if (myJQuery(".g").prop("checked")) {
            if (!myJQuery(".google").hasClass('added')) {
                myJQuery(myJQuery(".google")).clone().appendTo(".result");
                myJQuery(".google").addClass("added");
            }
        } else {
            myJQuery(".google").removeClass("added");
            myJQuery(".result").find(".google").remove();
        }
    }
    function set_description_service(that) {
        var btn_id = that.parents(".dropdown").find('.btn').data("id");
        cost_served = that.data("cost");
        var tariff=that.parents(".dropdown").find('.btn').text();
        var price=that.text();
        if (that != undefined) {
            myJQuery(".service .servises_elem").each(function () {
                if (myJQuery(this).hasClass(btn_id)) {
                    myJQuery('.result_but p').removeClass('none');
                    myJQuery('.result_button').removeClass('none');
                    curr_service = "<div class='wrap_for_info wrap_for_info_servise'><h5 class='h5_title'>В обслуживание рекламной компании включено:</h5>" + myJQuery(this).html() + "</div>";
//                    myJQuery(".wrap_for_info_seerv").html(myJQuery("<h5 class='h5_title'>").text("В настройки рекламной комании включено:"));
                    myJQuery(".panel-body.content").html(curr_settings + curr_service);
                }
            });
        }
        if(!myJQuery("#settings").prop("checked")){
             myJQuery(".result>div.google .total .first").text(cost_served);
        myJQuery(".result>div.yandex .total .ffirst").text(cost_served);
        }else{
            myJQuery(".result>div.google .total .first").text(cost_served + coust_current);
        myJQuery(".result>div.yandex .total .first").text(cost_served + coust_current);
        }
        myJQuery(".serv_main_span .tariffs").text(tariff+".")
        myJQuery(".serv_main_span .count_phrazes").text(price)
        
        myJQuery(".serv_main_span span").css('display','inline');
        var tot = 0;
        myJQuery(".result>div").each(function () {
            tot += Number(myJQuery(this).find('.first').text());
        });
        myJQuery(".result_but .total").text(tot);
       removeServed(true);
        if(!myJQuery(".y").prop("checked") || !myJQuery(".g").prop("checked")){           
            myJQuery('.p_disc').addClass('none');
       }
       if (flag_service!=true || !myJQuery("#settings").prop("checked")){
       myJQuery(".servise_main_span").css('display','none')
   }
        if ((!myJQuery("#settings").prop("checked") || flag_service==false) && (myJQuery(".y").prop("checked") || myJQuery(".g").prop("checked"))) {
          myJQuery('.p_disc').addClass('none');
//             myJQuery(".servise_main_span").css('display','none')

        } 
//        if(flag_service==false){
//            myJQuery(".p_disc").addClass('none');
//        }else{
//             myJQuery(".p_disc").removeClass('none');
//        }
myJQuery(".form-group").css('display','block');

    }
    function removeServed(flag) {
           
        var tot=0;
        if (flag == true) {
            myJQuery(".service .btn").each(function () {
                if (myJQuery(this).hasClass('select_btn')) {
                       myJQuery(".serv_main_span span").css('display','inline');
                    myJQuery(".serveds_y").css('display', 'block')
                    myJQuery(".serveds_g").css('display', 'block')
                    if(myJQuery("#settings").prop("checked")){
                        myJQuery(".result>div.google .total .first").text(cost_served + coust_current);
                    myJQuery(".result>div.yandex .total .first").text(cost_served + coust_current);
                    }else{ myJQuery(".result>div.google .total .first").text(cost_served);
                    myJQuery(".result>div.yandex .total .first").text(cost_served);}
                    
                    
                    myJQuery(".result>div").each(function () {
                        tot += Number(myJQuery(this).find('.first').text());
                    });
                    myJQuery(".result_but .total").text(tot);
                
                     myJQuery(".wrap_for_info_servise").css('display','block');
                    if (myJQuery("#settings").prop("checked")) {
                        myJQuery(".panel-body.content").html(curr_settings + curr_service);
                    } else {
                        myJQuery(".panel-body.content").html(curr_service);
                    }
                    
                }
            })
        } else {
             myJQuery(".serv_main_span span").css('display','none');
            myJQuery(".serveds_y").css('display', 'none');
            myJQuery(".serveds_g").css('display', 'none');
            if(myJQuery(".y").prop("checked")){
               Number(myJQuery(".result>div.yandex .total .first").text(coust_current));
               tot+=Number(myJQuery(".result>div.yandex .total .first").text());
                 console.log(coust_current)
            }
            if(myJQuery(".g").prop("checked")){
               Number(myJQuery(".result>div.google .total .first").text(coust_current));
                tot+=Number(myJQuery(".result>div.yandex .total .first").text());
                console.log(coust_current)
            }
 
            myJQuery(".result_but .total").text(tot);
            myJQuery(".wrap_for_info_servise").css('display','none');
            if(flag_service==false){
                $(".result").css('display','none')
            }
              none_result();
        }
    }
    
    
    //заказать Настройка рекламной компании
    myJQuery("#settings").change(function () {
       none_result();
        var tot=0;
        if (myJQuery(this).prop("checked")) {
            myJQuery(".settings_adv").removeClass("none");
//            myJQuery('#toggle-two').bootstrapToggle({
//                on: 'Классический',
//                off: 'Экспресс'
//            });
            if (myJQuery(".classic .btn").hasClass("select_btn") || myJQuery(".express .btn").hasClass("select_btn")) {
                myJQuery(".panel-body.content").html(curr_settings + curr_service);
                myJQuery(".result>div.google .total .first").text(cost_served + coust_current);
                myJQuery(".result>div.yandex .total .first").text(cost_served + coust_current);
                var l1 = Number(myJQuery(".result>div.google .total .first").text())
                var l2 = Number (myJQuery(".result>div.yandex .total .first").text())
                myJQuery(".servise_main_span").css('display', 'inline')
                myJQuery(".result_but .total").text(l1 + l2);
            }
            if(myJQuery(".y").prop("checked") && myJQuery(".g").prop("checked") && (myJQuery(".classic .btn").hasClass("select_btn") || myJQuery(".express .btn").hasClass("select_btn"))){
           myJQuery('.p_disc').removeClass('none');
       }
        } else {
            myJQuery(".settings_adv").addClass("none");
            myJQuery('.p_disc').addClass('none');
            myJQuery(".panel-body.content").html(curr_service);
            myJQuery(".servise_main_span").css('display', 'none')
            if (myJQuery(".y").prop("checked")) {
                myJQuery(".result>div.yandex .total .first").text(cost_served);
                tot += Number(myJQuery(".result>div.yandex .total .first").text());
            }
            if (myJQuery(".g").prop("checked")) {
                myJQuery(".result>div.google .total .first").text(cost_served);
                tot += Number(myJQuery(".result>div.google .total .first").text());
            }
            myJQuery(".result_but .total").text(tot);
        }
      check_set_email()
    });
    
    
    myJQuery(".result>div.google .total .first").text(cost_served + coust_current);
        myJQuery(".result>div.yandex .total .first").text(cost_served + coust_current);
    
    
    //заказать Обслуживание рекламной компании
    myJQuery("#settings_service").change(function () {
         none_result();
        if (myJQuery(this).prop("checked")) {
            removeServed(true);
            myJQuery(".service").removeClass("none");
           
        } else {
            if(myJQuery(".service .btn").hasClass('select_btn')){
            removeServed(false);
         
              }
            myJQuery(".service").addClass("none");
      
        }
        check_set_email()
    });
  
 
    
    
    function check_set_email() {
        
           if (myJQuery(".y").prop("checked") && (myJQuery("#settings").prop("checked")|| myJQuery("#settings_service").prop("checked"))) {
            myJQuery(".yandeksdirekt").val(set_mail(myJQuery(".result .collapse_desc.collapse_desc_yandex"), myJQuery(".yandeksdirekt"), myJQuery(".content_yandex")))

        } else if (myJQuery(".g").prop("checked") && (myJQuery("#settings").prop("checked")|| myJQuery("#settings_service").prop("checked"))) {
            myJQuery(".yandeksdirekt").val(set_mail(myJQuery(".result .collapse_desc.collapse_desc_google"), myJQuery(".yandeksdirekt"), myJQuery(".content_google")))
        } else {
            
             myJQuery(".yandeksdirekt").val('');
        }
      
//        if (myJQuery(".y").prop("checked") && (myJQuery("#settings").prop("checked")|| myJQuery("#settings_service").prop("checked"))) {
//            myJQuery(".yandeksdirekt").val(set_mail(myJQuery(".result .collapse_desc.collapse_desc_yandex"), myJQuery(".yandeksdirekt"), myJQuery(".content_yandex")))
//
//        } else {
//            myJQuery(".yandeksdirekt").val('')
//        }
//        if (myJQuery(".g").prop("checked") && (myJQuery("#settings").prop("checked")|| myJQuery("#settings_service").prop("checked"))) {
//            myJQuery(".google_adwords").val(set_mail(myJQuery(".result .collapse_desc.collapse_desc_google"), myJQuery(".google_adwords"), myJQuery(".content_google")))
//        } else {
//            myJQuery(".google_adwords").val('')
//        }
        
     
        
        
        function set_mail(obj, field_umi, content) {
            var system = field_umi.data('title')
            var discount = obj.find('.skidka').text();
            var tariff = obj.find('.tariff').text();
            var count_phraze = obj.find('.count_phraze').text();
            var total = obj.find('.total .first').text();
            var description = obj.find('.description').text();
            var price_service=obj.find('.servise_prices').text();
            var htmls = "";
            
            htmls += "<div><b style='color:#000'>" + system + "</b>";
            if(myJQuery(".y").prop('checked') && myJQuery(".g").prop('checked') &&(flag_service==true || flag_serv==true)){
            htmls = "";
            htmls += "<div><b style='color: #000;display: block;padding: 5px 0;'>Яндекс.Директ</b><b style='color:#000'>Google Adwords</b>"; 
            }
            if (flag_service == true) {
                htmls += "<p style='color:#000'>Настройки рекламной комании</p>";
                htmls += "<p style='color:#000'>Тариф: " + tariff + "</p>";
                htmls += "<p class='desc_direct' style='color:#000'>" + description + " : " + count_phraze + "</p>";
                htmls += "<p class='' style='color:#000'>Цена - " +  price_service + " руб.</p>";
            }
            if ((myJQuery(".g").prop("checked") && myJQuery("#settings_service").prop("checked") && flag_serv == true) ||
                    (myJQuery(".y").prop("checked") && myJQuery("#settings_service").prop("checked") && flag_serv == true)) {
                var to_tariff = obj.find('.tariffs').text();
                var count_phraze_two = obj.find('.count_phrazes').text();
                htmls += "<p style='color:#000'>Обслуживание рекламной компании </p>";
                htmls += "<p>Тариф: " + to_tariff + "</p>";
                htmls += "<p>" + count_phraze_two + "</p>";
            }
            htmls += "<p style='color:#000'><b>Сумма: " + total + " руб.</b></p><hr/></div>";
            if(discount && (myJQuery(".y").prop('checked') && myJQuery(".g").prop('checked') &&(flag_service==true || flag_serv==true))){
                htmls += "<p style='color:#000'>Скидка: " + discount + " руб.</p></div>";
            }
            htmls += "<p style='color:#000'>В услуги включено: "+content.html()+"</p>";
            htmls +="<p><b>Итого - " + myJQuery(".result_but .total").text() + " руб.</b></p>"
            if (myJQuery(".y").prop('checked') && myJQuery(".g").prop('checked') && (flag_service == true && myJQuery('#settings').prop("checked"))) {
                htmls +="<p>Скидка - " + myJQuery(".p_disc .discount").text() + " руб.</p>";
            } 
            return htmls;
        }
    }
      //кнопки под классиком
    myJQuery(".classic .btn").click(function () {
         flag_service=true;
        myJQuery(".classic .btn").removeClass("select_btn");
        myJQuery(".classic .servises .servises_elem").addClass("none");
        myJQuery(".classic .servises .servises_elem").removeClass("select");
        move_block();
        myJQuery(this).addClass("select_btn");
        var btn_id = myJQuery(this).attr("id");
//        myJQuery("#sign").html(myJQuery(this).data("label"));
        myJQuery("#sign").html(myJQuery("<img src='"+myJQuery(this).data("src")+"' title='"+myJQuery(this).data("label")+"'>"));
        set_description(myJQuery(this));
        if (myJQuery(".y").prop("checked") || myJQuery(".g").prop("checked")) {
            myJQuery('.p_t').removeClass('none');
        }
        myJQuery(".classic .servises .servises_elem").each(function () {
            if (myJQuery(this).hasClass(btn_id)) {
                myJQuery(this).addClass("select");
                myJQuery(this).removeClass("none");
            }
        });
   
//        yandeksdirekt
        //alert(myJQuery(".result .collapse_desc.collapse_desc_yandex").text())
        check_set_email()

        
    });
    
    //кнопки под экспрессом
    myJQuery(".express .btn").click(function () {
        flag_service=true;
        myJQuery(".express .btn").removeClass("select_btn");
        myJQuery(".express .servises .servises_elem").addClass("none");
        myJQuery(".express .servises .servises_elem").removeClass("select");
        move_block();
        myJQuery(this).addClass("select_btn");
        var btn_id = myJQuery(this).attr("id");
      
        
//        myJQuery("#sign").text(myJQuery(this).data("label"));
        myJQuery("#sign").html(myJQuery("<img src='"+myJQuery(this).data("src")+"' title='"+myJQuery(this).data("label")+"'>"));
        set_description(myJQuery(this));
          if (myJQuery(".y").prop("checked") || myJQuery(".g").prop("checked")) {
            myJQuery('.p_t').removeClass('none');
        }
        myJQuery(".express .servises .servises_elem").each(function () {
            if (myJQuery(this).hasClass(btn_id)) {
                myJQuery(this).addClass("select");
                myJQuery(this).removeClass("none");
            }
        });
       check_set_email()
    });
    //кнопки под обслуживанием
    myJQuery(".service li a").click(function () {
        flag_serv=true;
        myJQuery(".service .btn").removeClass("select_btn");
        myJQuery(".service li a").removeClass("selected_price");
        if (!myJQuery(this).parents(".dropdown").find(".btn").hasClass("disabled")) {
            myJQuery(".service .servises_elem").addClass("none");
            myJQuery(".service .servises_elem").removeClass("select");
            move_block();
            myJQuery(this).parents(".dropdown").find(".btn").addClass("select_btn");
            myJQuery(this).addClass("selected_price");
            var btn_id = myJQuery(this).parents(".dropdown").find(".btn").data('id');
            set_description_service(myJQuery(this));
            myJQuery("#sign").text(myJQuery(this).data("label"));
            myJQuery(".service .servises_elem").each(function () {
                if (myJQuery(this).hasClass(btn_id)) {
                    myJQuery(this).addClass("select");
                    myJQuery(this).removeClass("none");
                }
            });
        }
        check_set_email()
        
    });
//тогал экспресс/классик
//    myJQuery("#toggle-two").change(function () {
// 
//        if (myJQuery(this).prop("checked")) {
//            myJQuery(".classic").removeClass("none");
//            myJQuery(".express").addClass("none");
//            myJQuery("#sign").text("");
//            myJQuery(".classic .btn").each(function () {
//                if (myJQuery(this).hasClass("select_btn")) {
////                    myJQuery("#sign").text(myJQuery(this).data("label"));
//                        myJQuery("#sign").html(myJQuery("<img src='"+myJQuery(this).data("src")+"' title='"+myJQuery(this).data("label")+"'>"));
//                    set_description(myJQuery(this));
//                }
//            });
//        } else {
//            myJQuery("#sign").text("");
//            myJQuery(".express .btn").each(function () {
//                if (myJQuery(this).hasClass("select_btn")) {
////                    myJQuery("#sign").text(myJQuery(this).data("label"));
//                        myJQuery("#sign").html(myJQuery("<img src='"+myJQuery(this).data("src")+"' title='"+myJQuery(this).data("label")+"'>"));
//                    set_description(myJQuery(this));
//                }
//            });
//            myJQuery(".express").removeClass("none");
//            myJQuery(".classic").addClass("none");
//        }
//        
//       check_set_email();
//        
//    });
    myJQuery(".radio_wrap input[type='radio']").change(function () {
 
        if (myJQuery("#toggle-two").prop("checked")) {
            myJQuery(".classic").removeClass("none");
            myJQuery(".express").addClass("none");
            myJQuery("#sign").text("");
            myJQuery(".classic .btn").each(function () {
                if (myJQuery(this).hasClass("select_btn")) {
//                    myJQuery("#sign").text(myJQuery(this).data("label"));
                        myJQuery("#sign").html(myJQuery("<img src='"+myJQuery(this).data("src")+"' title='"+myJQuery(this).data("label")+"'>"));
                    set_description(myJQuery(this));
                }
            });
        } else if(myJQuery("#toggle-three").prop("checked")) {
            myJQuery("#sign").text("");
            myJQuery(".express .btn").each(function () {
                if (myJQuery(this).hasClass("select_btn")) {
//                    myJQuery("#sign").text(myJQuery(this).data("label"));
                        myJQuery("#sign").html(myJQuery("<img src='"+myJQuery(this).data("src")+"' title='"+myJQuery(this).data("label")+"'>"));
                    set_description(myJQuery(this));
                }
            });
            myJQuery(".express").removeClass("none");
            myJQuery(".classic").addClass("none");
        }
        
       check_set_email();
        
    });

    myJQuery(".y-g input").change(function () {
       
        if (myJQuery(".y").prop("checked") || myJQuery(".g").prop("checked")) {
            myJQuery(".main_choose").css('display', 'block');
        } else {
            
            myJQuery(".main_choose").css('display', 'none');
        }
        myJQuery(".p_disc").addClass("none")
        var but_id = "";
        if (myJQuery(".classic .btn").hasClass("select_btn")) {
            but_id = myJQuery(".classic .btn.select_btn");
        } else {
            but_id = myJQuery(".express .btn.select_btn");
        }
        if (myJQuery(".y").prop("checked") && myJQuery(".g").prop("checked")) {
            myJQuery(".service .btn-info").addClass("disabled");
            myJQuery(".result_but .discount").text(but_id.data('discount'));
            if(myJQuery(".dropdown .select_btn").hasClass('disabled')){
                myJQuery(".result").html(" ");
            }
        } else {
            myJQuery(".service .btn-info").addClass("disabled");
            myJQuery(".service .btn-info").removeClass("disabled");
        }
        if (myJQuery(".y").prop("checked") && (myJQuery(".classic .btn").hasClass("select_btn") || myJQuery(".express .btn").hasClass("select_btn"))) {
//            check_set_email();
            myJQuery('.p_t').removeClass('none');
            myJQuery('.result_button').removeClass('none');
            move_block();
            set_description(but_id);
            
        } else {
            console.log('qwe')
            myJQuery(".yandeksdirekt").val('')
            myJQuery(".result").find(".yandex").remove();
            myJQuery(".yandex").removeClass("added");
          
        }
        if (myJQuery(".g").prop("checked") && (myJQuery(".classic .btn").hasClass("select_btn") || myJQuery(".express .btn").hasClass("select_btn"))) {
//             check_set_email();
            myJQuery('.p_t').removeClass('none');
            myJQuery('.result_button').removeClass('none');
            move_block();
            set_description(but_id);
        } else {
            console.log('qwe')
            myJQuery(".google_adwords").val('')
            myJQuery(".result").find(".google").remove();
            myJQuery(".google").removeClass("added");
        }
        if (!myJQuery(".y").prop("checked") && !myJQuery(".g").prop("checked")) {
            myJQuery('.p_t').addClass('none');
            myJQuery('.result_button').addClass('none');
        }
        if (myJQuery("#settings_service").prop("checked") && flag_serv==true) {
            move_block();
            but_id = myJQuery(".service").find('.selected_price');
            set_description_service(but_id);
      
        }
        check_set_email()
       none_result();
    });
    myJQuery(".radio_wrap input[type='radio']").change(function () {
        if (myJQuery(".y").prop("checked")) {
            myJQuery(".result>div.yandex").removeClass("none");
        }
        if (myJQuery(".g").prop("checked")) {
            myJQuery(".result>div.google").removeClass("none");
        }
        if(!myJQuery("#settings_service").prop("checked")){
            removeServed(false)
        }else{removeServed(true)}
        
    });
    
    myJQuery(".dropdown").click(function(e){
         e.stopPropagation();
        if(!myJQuery(this).find('.btn').hasClass('disabled')){
        myJQuery(".dropdown").removeClass('open')
        myJQuery(this).addClass('open')
    }
    })
  myJQuery(".dropdown-menu>li").click(function(e){
     e.stopPropagation();
      myJQuery(this).parents(".dropdown").removeClass('open');
  })
  myJQuery(window).click(function(){
      myJQuery(".dropdown").removeClass('open')
  })
    myJQuery(".form_calculate .dropdown-menu li a").click(function(e){
    e.preventDefault();
    })
    
});
