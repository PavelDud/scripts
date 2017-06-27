myJQuery(function () {
    var content = "";
    var coust_current = 0;
    var curr_service = "";
    var curr_settings = "";
    var cost_served =0;
    var flag_serv=false;
    var flag_service=false;
    var htmls="";
    
    //показать/скрыть блок справа
    function none_result(){
        if((!myJQuery("#settings").prop("checked") || flag_service==false) && (!myJQuery("#settings_service").prop("checked") || flag_serv==false) || (!myJQuery(".y").prop("checked") && !myJQuery(".g").prop("checked"))){
             htmls=myJQuery(".result").html();
            myJQuery(".result").css('display','none');
            myJQuery(".form_direct").css('display','none');
            myJQuery(".result_but").css('display','none');
           
        }else{
            myJQuery(".result").css('display', 'block');
            myJQuery(".form_direct").css('display', 'block');
            myJQuery(".result_but").css('display', 'block');
            if (flag_service == false && myJQuery(".select_btn").hasClass("disabled")) {
                myJQuery(".order_main").css('display', 'none');
            } else {
                myJQuery(".order_main").css('display', 'block');
            }
     
        }
    }
    
    //формирование правого блока для настройки
    function set_description(that) {
        if (that != undefined) {
            var btn_id = that.attr("id");
        }
        if (myJQuery("#toggle-two").prop("checked") && myJQuery(".classic .btn").hasClass("select_btn")) { //классический
            var label = myJQuery(".classic .select_btn").data("label");
            var words = myJQuery(".classic .select_btn").data("words");
            var cost = myJQuery(".classic .select_btn").data("cost");
            var img = myJQuery(".classic .select_btn").data("src");
            var discount = myJQuery(".classic .select_btn").data("discount");
            var description = myJQuery(".classic .select_btn").data("description");
            if (that != undefined) {
                myJQuery(".classic .servises .servises_elem").each(function () {
                    if (myJQuery(this).hasClass(btn_id)) {
                        myJQuery('.result_button').removeClass('none');
                        if (myJQuery(this).html().length > 0) {
                            curr_settings = "<div class='wrap_for_info wrap_for_info_seerv'>" + myJQuery(this).html() + "</div>";
                        }
                        myJQuery(".result>div.yandex.settings .panel-body.content").html(curr_settings);
                        myJQuery(".result>div.google.settings .panel-body.content").html(curr_settings);
                        content = myJQuery(".panel-body.content").html();
                    }
                });
            }
        } else 
            if (!myJQuery("#toggle-two").prop("checked") && myJQuery(".express .btn").hasClass("select_btn")) { //экспресс
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
                            curr_settings = "<div class='wrap_for_info'>" + myJQuery(this).html() + "</div>";
                        }
                        myJQuery(".result>div.google.settings .panel-body.content").html(curr_settings);
                        myJQuery(".result>div.yandex.settings .panel-body.content").html(curr_settings);
                        content = myJQuery(".panel-body.content").html();
                    }
                });
            }
        }
        if (!myJQuery(".result>div.yandex.settings").hasClass("none")) {
            coust_current = Number(cost);
            console.log(coust_current)
            myJQuery(".result>div.yandex.settings .tariff").text(label);
            myJQuery(".result>div.yandex.settings .count_phraze").text(words);
            myJQuery(".result>div.yandex.settings .total .first").text(cost);
            myJQuery(".result>div.yandex.settings .description").text(description);
//            myJQuery(".servise_prices").text(cost);
        }
        if (!myJQuery(".result>div.google.settings").hasClass("none")) {
            coust_current = Number(cost);
            myJQuery(".result>div.google.settings .tariff").text(label);
            myJQuery(".result>div.google.settings .count_phraze").text(words);
            myJQuery(".result>div.google.settings .total .first").text(cost);
            myJQuery(".result>div.google.settings .description").text(description);
//            myJQuery(".servise_prices").text(cost);
        }
        var tot = 0;
       
        myJQuery(".result>div").each(function () {
            if(!myJQuery(this).hasClass('none')){
            tot += Number(myJQuery(this).find('.first').text());
        }
        });
        myJQuery(".result_but .total").text(tot);
        if (myJQuery(".y").prop("checked") && myJQuery(".g").prop("checked") && myJQuery("#settings").prop("checked")) {
            myJQuery('.p_disc').removeClass('none');
            myJQuery(".result_but .discount").text(discount);
        } else {
            myJQuery('.p_disc').addClass('none');
        }
        myJQuery(".servise_main_span").css('display','block')
        myJQuery(".form-group").css('display','block');
        none_result()
    }
    
    //перемещение блоков из главного скрытого в правую часть
    function move_block() {
        if (myJQuery(".y").prop("checked")) {
//            if (!myJQuery(".yandex").hasClass('added')) {
//                myJQuery(myJQuery(".yandex")).clone().appendTo(".result");
//                myJQuery(".yandex").addClass("added");
//            }
            if((myJQuery("#settings_service").prop("checked") && flag_serv==true) && !myJQuery(".yandex.service").hasClass('added')){
                  myJQuery(".yandex.service").clone().appendTo(".result");
                myJQuery(".yandex.service").addClass("added");
            }
            if((myJQuery("#settings").prop("checked") && flag_service==true) && !myJQuery(".yandex.settings").hasClass('added')){
                  myJQuery(".yandex.settings").clone().appendTo(".result");
                myJQuery(".yandex.settings").addClass("added");
            }
            
            
        } else {
            myJQuery(".yandex").removeClass("added");
            myJQuery(".result").find(".yandex").remove();
        }
        if (myJQuery(".g").prop("checked")) {
     
//            if (!myJQuery(".google").hasClass('added')) {
//                myJQuery(myJQuery(".google")).clone().appendTo(".result");
//                myJQuery(".google").addClass("added");
//            }
              if((myJQuery("#settings_service").prop("checked") && flag_serv==true) && !myJQuery(".google.service").hasClass('added')){
//                  
                  myJQuery(".google.service").clone().appendTo(".result");
                myJQuery(".google.service").addClass("added");
            }
            if((myJQuery("#settings").prop("checked") && flag_service==true) && !myJQuery(".google.settings").hasClass('added')){
                  myJQuery(".google.settings").clone().appendTo(".result");
                myJQuery(".google.settings").addClass("added");
            }
            
            
            
        } else {
            myJQuery(".google").removeClass("added");
            myJQuery(".result").find(".google").remove();
        }
    }
    
    //формирование правого блока для обслуживания
    function set_description_service(that, currprice,but_month) {
     
        var btn_id = that.parent().data("id");
        if (currprice != undefined) {
            cost_served = currprice;
            
        } else {
            cost_served = Number(that.data(recive()));
        }
        
          
        var tariff = that.data('tariff');
       
        if (that != undefined) {
            myJQuery(".service .servises_elem").each(function () {
                if (myJQuery(this).hasClass(btn_id) && myJQuery("#settings_service").prop("checked")) {
                   
                    myJQuery('.result_but p').removeClass('none');
                    myJQuery('.result_button').removeClass('none');
                    curr_service = "<div class='wrap_for_info wrap_for_info_servise'>" + myJQuery(this).html() + "</div>";
//                    myJQuery(".wrap_for_info_seerv").html(myJQuery("<h5 class='h5_title'>").text("В настройки рекламной комании включено:"));
//                    myJQuery(".panel-body.content").html(curr_service);
                    myJQuery(".result>div.google.service .panel-body.content").html(curr_service);
                    myJQuery(".result>div.yandex.service .panel-body.content").html(curr_service);
                    myJQuery(".form-group").css('display', 'block');
                }
            });
        }
//        if (!myJQuery("#settings").prop("checked")) {
//            myJQuery(".result>div.google.service .total .first").text(cost_served);
//            myJQuery(".result>div.yandex.service .total .ffirst").text(cost_served);
//        } else {
//            myJQuery(".result>div.google.settings .total .first").text(cost_served + coust_current);
//            myJQuery(".result>div.yandex.settings .total .first").text(cost_served + coust_current);
//        }
        myJQuery(".serv_main_span .tariffs").text(tariff);
        
        if (but_month != undefined) {
            var price = but_month.find('input').data('pucket');
            myJQuery(".serv_main_span .count_phrazes").text(price);
        }
        

        myJQuery(".serv_main_span span").css('display', 'inline');
        myJQuery(".serveds_g").css('display', 'block');
        var tot = 0;
        myJQuery(".result>div").each(function () {
            if(!myJQuery(this).hasClass('none')){
            tot += Number(myJQuery(this).find('.first').text());
        }
        });
        myJQuery(".result_but .total").text(tot);
       
        removeServed(true);
       
        if (!myJQuery(".y").prop("checked") || !myJQuery(".g").prop("checked")) {
            myJQuery('.p_disc').addClass('none');
        }
        if (flag_service != true || !myJQuery("#settings").prop("checked")) {
            myJQuery(".servise_main_span").css('display', 'none')
        }
        if ((!myJQuery("#settings").prop("checked") || flag_service == false) && (myJQuery(".y").prop("checked") || myJQuery(".g").prop("checked"))) {
            myJQuery('.p_disc').addClass('none');
        }
        
        none_result();
        
    }
    
    //скрытие информации об обслуживании
    function removeServed(flag) {
           
        var tot=0;
        if (flag == true) {
            myJQuery(".result>div.service").removeClass('none')
            myJQuery(".service .btn").each(function () {
                if (myJQuery(this).hasClass('select_btn')) {
                    myJQuery(".serv_main_span span").css('display','inline');
                    myJQuery(".serveds_y").css('display', 'block')
                    myJQuery(".serveds_g").css('display', 'block')
                    myJQuery(".result>div.google.service .total .first").text(cost_served);
                    myJQuery(".result>div.yandex.service .total .first").text(cost_served);
                    myJQuery(".result>div").each(function () {
                         if(!myJQuery(this).hasClass('none')){
                        tot += Number(myJQuery(this).find('.first').text());
                    }
                    });
                    myJQuery(".result_but .total").text(tot);
                    myJQuery(".wrap_for_info_servise").css('display','block');
                    myJQuery(".result>div.yandex.service .panel-body.content").html(curr_service);
                    myJQuery(".result>div.google.service .panel-body.content").html(curr_service);
                }
            })
            
        } else {
            
             myJQuery(".result>div.service").addClass('none')
            myJQuery(".serv_main_span span").css('display','none');
            myJQuery(".serveds_y").css('display', 'none');
            myJQuery(".serveds_g").css('display', 'none');
            if(myJQuery(".y").prop("checked")){
               Number(myJQuery(".result>div.yandex.service .total .first").text(coust_current));
//               tot+=Number(myJQuery(".result>div.yandex .total .first").text());
            }
            if(myJQuery(".g").prop("checked")){
                Number(myJQuery(".result>div.google.service .total .first").text(coust_current));
//                tot+=Number(myJQuery(".result>div.yandex .total .first").text());
            }
            myJQuery(".result>div").each(function(){
                if(!myJQuery(this).hasClass('none')){
                  tot+=Number(myJQuery(this).find('.first').text())
              }
            })

            
            myJQuery(".result_but .total").text(tot);
            myJQuery(".wrap_for_info_servise").css('display','none');
           
            if(flag_service==false){
                $(".result").css('display','none')
            }
            none_result();
        }
    }
    
    function settings_check(){
        none_result();
        var tot=0;
        if (myJQuery("#settings").prop("checked")) {
//            myJQuery(".settings_adv").removeClass("none");
//            myJQuery('#toggle-two').bootstrapToggle({
//                on: 'Классический',
//                off: 'Экспресс'
//            });
            if (myJQuery(".classic .btn").hasClass("select_btn") || myJQuery(".express .btn").hasClass("select_btn")) {
                 myJQuery(".result>div.settings").removeClass('none')
                 if(myJQuery("#toggle-two").prop("checked")){
                     console.log('qwe4')
                     func_under_classic(myJQuery(".classic .btn.select_btn"))
                 }else if(myJQuery("#toggle-three").prop("checked")){
                     console.log('qwe3')
                     func_under_express(myJQuery(".express .btn.select_btn"))
                 }
                 
                
                myJQuery(".result>div.google.settings .panel-body.content").html(curr_settings);
                myJQuery(".result>div.yandex.settings .panel-body.content").html(curr_settings);
                myJQuery(".result>div.google.settings .total .first").text(coust_current);
                myJQuery(".result>div.yandex.settings .total .first").text(coust_current);
                   myJQuery(".result>div").each(function () {
                       if(!myJQuery(this).hasClass('none')){
                        tot += Number(myJQuery(this).find('.first').text());
                    }
                    });
                     myJQuery(".servise_main_span").css('display', 'inline')
                      myJQuery(".result_but .total").text(tot);
//                var l1 = Number(myJQuery(".result>div.google .total .first").text())
//                var l2 = Number (myJQuery(".result>div.yandex .total .first").text())
//                myJQuery(".servise_main_span").css('display', 'inline')
//                myJQuery(".result_but .total").text(l1 + l2);
            }
            if(myJQuery(".y").prop("checked") && myJQuery(".g").prop("checked") && (myJQuery(".classic .btn").hasClass("select_btn") || myJQuery(".express .btn").hasClass("select_btn"))){
           myJQuery('.p_disc').removeClass('none');
       }
       
        } else {
//            myJQuery(".settings_adv").addClass("none");
        if(flag_service!=false){
             myJQuery(".result>div.settings").addClass('none')
            myJQuery('.p_disc').addClass('none');
//            myJQuery(".panel-body.content").html(curr_service);
                myJQuery(".result>div.google.settings .panel-body.content").html(curr_settings);
                myJQuery(".result>div.yandex.settings .panel-body.content").html(curr_settings);
            myJQuery(".servise_main_span").css('display', 'none')
            if (myJQuery(".y").prop("checked")) {
                myJQuery(".result>div.yandex.settings .total .first").text(coust_current);
//                tot += Number(myJQuery(".result>div.yandex.settings .total .first").text());
            }
            if (myJQuery(".g").prop("checked")) {
                myJQuery(".result>div.google.settings .total .first").text(coust_current);
//                tot += Number(myJQuery(".result>div.google.settings .total .first").text());
            }
             myJQuery(".result>div").each(function(){
                  if(!myJQuery(this).hasClass('none')){
                  tot+=Number(myJQuery(this).find('.first').text())
              }
            })
            myJQuery(".result_but .total").text(tot);
               
        }
        }
      check_set_email()
    }
    
    //заказать Настройка рекламной компании
    myJQuery("#settings").change(settings_check);
    
    
//    myJQuery(".result>div.google .total .first").text(cost_served + coust_current);
//    myJQuery(".result>div.yandex .total .first").text(cost_served + coust_current);

    //заказать Обслуживание рекламной компании
    
    function settings_service_func(){
                none_result();
        if (myJQuery("#settings_service").prop("checked")) {
            if(myJQuery(".btn-group_but_tarifs .btn").hasClass('active')){
//            group_but_tarifs_func(myJQuery(".btn-group_but_tarifs .btn input"))
                group_but_tarifs_func(myJQuery(".btn-group-tarifs .btn.active"))
        }
            removeServed(true);
              
        } else {
            if (myJQuery(".service .btn").hasClass('select_btn')) {
                removeServed(false);
            }
        }
        check_set_email()
    }
    
    
    myJQuery("#settings_service").change(settings_service_func);

    function check_set_email() {
        if (myJQuery(".y").prop("checked") && (myJQuery("#settings").prop("checked") || myJQuery("#settings_service").prop("checked"))) {
            myJQuery(".yandeksdirekt").val(set_mail(myJQuery(".result>div"), myJQuery(".yandeksdirekt")))
            
        } else if (myJQuery(".g").prop("checked") && (myJQuery("#settings").prop("checked") || myJQuery("#settings_service").prop("checked"))) {
            myJQuery(".yandeksdirekt").val(set_mail(myJQuery(".result>div"), myJQuery(".yandeksdirekt")))
        } else {
            myJQuery(".yandeksdirekt").val('');
        }
        function set_mail(obj, field_umi) {
           var htmls = "";
            obj.each(function () {
                if (!myJQuery(this).hasClass('none')) {
                    
                    if(myJQuery(this).hasClass('settings')){
                    htmls += "<div><b style='color: #000;display: block;padding: 5px 0;'>" + myJQuery(this).find('.title_m').text() + "</b></div>";
                    htmls += "<p style='color:#000'>"+myJQuery(this).find('.title').text() +"</p>";
                    htmls += "<p style='color:#000'>Тариф: " + myJQuery(this).find('.tariff').text() + "</p>";
                    htmls += "<p class='desc_direct' style='color:#000'>" +  myJQuery(this).find('.description').text() + " : " + myJQuery(this).find('.count_phraze').text() + "</p>";
                     htmls += "<p class='' style='color:#000'>Цена - " + myJQuery(this).find('.total .first').text() + " руб.</p>";
                     htmls += "<p style='color:#000'>В услуги включено: </p><p>" + myJQuery(this).find('.wrap_for_info').html()  + "</p>";
                 }
                 else if(myJQuery(this).hasClass('service')){
                     htmls += "<div><b style='color: #000;display: block;padding: 5px 0;'>" + myJQuery(this).find('.title_m').text() + "</b></div>";
                    htmls += "<p style='color:#000'>"+myJQuery(this).find('.title').text() +"</p>";
                    htmls += "<p style='color:#000'>Тариф: " + myJQuery(this).find('.tariffs').text() + "</p>";
                    htmls += "<p class='desc_direct' style='color:#000'>"+myJQuery(this).find('.count_phrazes').text() + "</p>";
                    htmls += "<p class='' style='color:#000'>Цена - " + myJQuery(this).find('.total .first').text() + " руб.</p>";
                    htmls += "<p style='color:#000'>В услуги включено: </p><p>" + myJQuery(this).find('.wrap_for_info').html()  + "</p>";
                     
                 }
                }
            })
            htmls += "<p><b>Итого - " + myJQuery(".result_but .total").text() + " руб.</b></p>"
            if(!myJQuery(".p_disc").hasClass('none')){
                htmls += "<p>Скидка - " + myJQuery(".p_disc .discount").text() + " руб.</p>";
            }
            return htmls;
            
            
            
//            var system = field_umi.data('title')
//            var discount = obj.find('.skidka').text();
//            var tariff = obj.find('.tariff').text();
//            var count_phraze = obj.find('.count_phraze').text();
//            var total = obj.find('.total .first').text();
//            var description = obj.find('.description').text();
//            var price_service = obj.find('.servise_prices').text();
//            
//            htmls += "<div><b style='color:#000'>" + system + "</b>";
//            if (myJQuery(".y").prop('checked') && myJQuery(".g").prop('checked') && (flag_service == true || flag_serv == true)) {
//                htmls = "";
//                htmls += "<div><b style='color: #000;display: block;padding: 5px 0;'>Яндекс.Директ</b><b style='color:#000'>Google Adwords</b>";
//            }
//            if (flag_service == true) {
//                htmls += "<p style='color:#000'>Настройки рекламной комании</p>";
//                htmls += "<p style='color:#000'>Тариф: " + tariff + "</p>";
//                htmls += "<p class='desc_direct' style='color:#000'>" + description + " : " + count_phraze + "</p>";
//                htmls += "<p class='' style='color:#000'>Цена - " + price_service + " руб.</p>";
//            }
//            if ((myJQuery(".g").prop("checked") && myJQuery("#settings_service").prop("checked") && flag_serv == true) ||
//                    (myJQuery(".y").prop("checked") && myJQuery("#settings_service").prop("checked") && flag_serv == true)) {
//                var to_tariff = obj.find('.tariffs').text();
//                var count_phraze_two = obj.find('.count_phrazes').text();
//                htmls += "<p style='color:#000'>Обслуживание рекламной компании </p>";
//                htmls += "<p>Тариф: " + to_tariff + "</p>";
//                htmls += "<p>" + count_phraze_two + "</p>";
//            }
//            htmls += "<p style='color:#000'><b>Сумма: " + total + " руб.</b></p><hr/></div>";
//            if (discount && (myJQuery(".y").prop('checked') && myJQuery(".g").prop('checked') && (flag_service == true || flag_serv == true))) {
//                htmls += "<p style='color:#000'>Скидка: " + discount + " руб.</p></div>";
//            }
//            htmls += "<p style='color:#000'>В услуги включено: " + content.html() + "</p>";
//            htmls += "<p><b>Итого - " + myJQuery(".result_but .total").text() + " руб.</b></p>"
//            if (myJQuery(".y").prop('checked') && myJQuery(".g").prop('checked') && (flag_service == true && myJQuery('#settings').prop("checked"))) {
//                htmls += "<p>Скидка - " + myJQuery(".p_disc .discount").text() + " руб.</p>";
//            }
//            return htmls;
        }
         $('[data-toggle="tooltip"]').tooltip();
    }
      //кнопки под классиком
      
      function func_under_classic(thiss) {
          
        var thats = thiss;
        flag_service = true;
        myJQuery(".classic .btn").removeClass("select_btn");
        myJQuery(".classic .servises .servises_elem").addClass("none");
        myJQuery(".classic .servises .servises_elem").removeClass("select");
        move_block();
        thiss.addClass("select_btn");
        var btn_id = thats.attr("id");
//        myJQuery("#sign").html(myJQuery(this).data("label"));
//        myJQuery("#sign").html(myJQuery("<img src='" + thats.data("src") + "' title='" + thats.data("label") + "'><span class='name_tariff'>Тариф: "+thats.data("label")+"</span>"));
myJQuery("#sign").html(myJQuery("<span class='background_zodiak' style='background:url(" + thats.data("src") + ") no-repeat 0 50%' title='" + thats.data("label") + "'><span class='name_tariff'>Тариф: "+thats.data("label")+"</span></span>"))
         if(myJQuery("#settings").prop("checked")){
        set_description(thats);
    }
        if (myJQuery(".y").prop("checked") || myJQuery(".g").prop("checked")) {
            myJQuery('.p_t').removeClass('none');
        }
        myJQuery(".classic .servises .servises_elem").each(function () {
            if (myJQuery(this).hasClass(btn_id)) {
                myJQuery(this).addClass("select");
                myJQuery(this).removeClass("none");
            }
        });
        check_set_email()
    }
      function func_under_express(thiss) {
        var thats = thiss;
        flag_service = true;
        myJQuery(".express .btn").removeClass("select_btn");
        myJQuery(".express .servises .servises_elem").addClass("none");
        myJQuery(".express .servises .servises_elem").removeClass("select");
        move_block();
        thats.addClass("select_btn");
        var btn_id = thats.attr("id");


//        myJQuery("#sign").text(myJQuery(this).data("label"));
        myJQuery("#sign").html(myJQuery("<img src='" + thats.data("src") + "' title='" + thats.data("label") + "'><span class='name_tariff'>Тариф: "+thats.data("label")+"</span>"));
        if(myJQuery("#settings").prop("checked")){
        set_description(thats);
    }
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
    }
    myJQuery(".classic .btn").click(function () {
        func_under_classic(myJQuery(this))
    });
    func_under_classic(myJQuery(".classic .btn.select_btn"))
     myJQuery(".express .btn").click(function () {
        func_under_express(myJQuery(this))
    });
    
    //кнопки под экспрессом
    myJQuery(".express .btn").click(function () {
      
    });
    //радиоконопки выбор месяца в обслуживании
    myJQuery(".btn-group-tarifs .btn").click(function () {
     
        var checked_tarif = myJQuery(this).find("input").data('checked_tarif');
        myJQuery(".btn-group_but_tarifs .btn input").each(function () {
            if(!myJQuery(this).hasClass('disabled')){
            var cur_price = myJQuery(this).data(checked_tarif);
            myJQuery(this).parent().next().text(set_mounth(cur_price))
        }
        })
        
    })

    //вспомогательные функции
    function recive(){
       return myJQuery('.btn-group-tarifs .btn.active input').data('checked_tarif')
    }
    function set_rub(price){
        return price+" руб.";
    }
    function get_id(flag){
        if(flag=="active"){
            return myJQuery(".btn-group_but_tarifs .btn.active input");
        }
        return myJQuery(".btn-group_but_tarifs .btn.active").data('id');
    }
  
    
    //кнопки под обслуживанием
    //радиоконопки выбор месяца в обслуживании
    
    function group_but_tarifs_func(that) {
        myJQuery(".btn-group_but_tarifs .btn").removeClass("select_btn");
         myJQuery(".btn-group_but_tarifs .btn input").removeClass("selected_price");
         if(that.find('input').data('tariff')){
             myJQuery(".service_tariff").text(that.find('input').data('tariff'));
         }
             
        if (myJQuery("#settings_service").prop('checked')) {
            var cur_price;
            var btn_id;
            flag_serv = true;
            if (!that.hasClass("disabled") && !get_id("active").parent().hasClass('disabled')) {

                myJQuery(".service .servises_elem").addClass("none");
                myJQuery(".service .servises_elem").removeClass("select");
                move_block();
                if (that.parents('.btn-group').hasClass('btn-group-tarifs')) {
                    var that = that;
                    var checked_tarif = that.find("input").data('checked_tarif');
                    myJQuery(".btn-group_but_tarifs .btn input").each(function () {
                        if (myJQuery(this).parent().hasClass('active')) {
                            myJQuery(this).parent().addClass("select_btn");
                            myJQuery(this).addClass("selected_price");
                            cur_price = myJQuery(this).data(checked_tarif);
                            myJQuery(this).parent().next().text(set_mounth(cur_price));
                            btn_id = get_id("active").parent().data('id');
                            set_description_service(get_id("active"), cur_price, that);
                        }
                    });
                } else {
                    
                    that.addClass("select_btn");
                    that.find('input').addClass("selected_price");
                    btn_id = that.data('id');
                    set_description_service(that.find('input'));
                }
                myJQuery(".service .servises_elem").each(function () {
                    if (myJQuery(this).hasClass(btn_id)) {
                        myJQuery(this).addClass("select");
                        myJQuery(this).removeClass("none");
                    }
                });
            }
            check_set_email();
        }
    }
    
    function set_mounth(price){
        return price+" р/мес";
    }
    
    myJQuery(".btn-group_but_tarifs .btn,.btn-group-tarifs .btn").click(function () {
        group_but_tarifs_func(myJQuery(this));
    });

    function removeServeds() {
        if (myJQuery(".y").prop("checked") && myJQuery(".g").prop("checked")) {
            if (myJQuery(".dropdown .select_btn").hasClass('disabled')) {
                if (myJQuery(".select_btn.disabled+ul li a").hasClass('selected_price')) {
                    removeServed(false);
                }
            }
        }
    }
    
    
    function input_radio() {
        if (myJQuery("#settings").prop("checked")) {
            if (myJQuery(".y").prop("checked")) {
                myJQuery(".result>div.yandex").removeClass("none");
            }
            if (myJQuery(".g").prop("checked")) {
                myJQuery(".result>div.google").removeClass("none");
            }
            if (!myJQuery("#settings_service").prop("checked")) {
                removeServed(false)
            } else {
                removeServed(true)
            }
        }
    }
    
    //изменение тарифа радиобаттонами
    myJQuery(".radio_wrap input[type='radio']").change(function () {
     input_radio();
    });
    
    function input_radio_switch(){
        if (myJQuery("#toggle-two").prop("checked")) {
            myJQuery(".classic").removeClass("none");
            myJQuery(".express").addClass("none");
            myJQuery("#sign").text("");
            myJQuery(".classic .btn").each(function () {
                if (myJQuery(this).hasClass("select_btn")) {
                    myJQuery("#sign").html(myJQuery("<img src='" + myJQuery(this).data("src") + "' title='" + myJQuery(this).data("label") + "'><span class='name_tariff'>Тариф: " + myJQuery(this).data("label") + "</span>"));
                    if (myJQuery("#settings").prop("checked")) {
                        set_description(myJQuery(this));
                    }
                }
            });
        } else if (myJQuery("#toggle-three").prop("checked")) {
            myJQuery("#sign").text("");
            myJQuery(".express .btn").each(function () {
                if (myJQuery(this).hasClass("select_btn")) {
                    myJQuery("#sign").html(myJQuery("<img src='" + myJQuery(this).data("src") + "' title='" + myJQuery(this).data("label") + "'><span class='name_tariff'>Тариф: " + myJQuery(this).data("label") + "</span>"));
                    if (myJQuery("#settings").prop("checked")) {
                        set_description(myJQuery(this));
                    }
                }
            });
            myJQuery(".express").removeClass("none");
            myJQuery(".classic").addClass("none");
        }
        removeServeds();
        check_set_email();
    }
    myJQuery(".radio_wrap input[type='radio']").change(function () {
        input_radio_switch();
    });


    //чекбоксы выбор системы
    myJQuery(".y-g input").change(function () {
       
//        if (myJQuery(".y").prop("checked") || myJQuery(".g").prop("checked")) {
//            myJQuery(".main_choose").css('display', 'block');
//        } else {
//            
//            myJQuery(".main_choose").css('display', 'none');
//        }
        myJQuery(".p_disc").addClass("none")
        var but_id = "";
        if (myJQuery(".classic .btn").hasClass("select_btn")) {
            but_id = myJQuery(".classic .btn.select_btn");
        } else {
            but_id = myJQuery(".express .btn.select_btn");
        }
        if (myJQuery(".y").prop("checked") && myJQuery(".g").prop("checked")) {
            if (!myJQuery(".btn-group_but_tarifs .btn-info").hasClass('disabled')) {
                myJQuery(".btn-group_but_tarifs .btn-info").parent().append(myJQuery('<div class="block_div-disable" data-toggle="tooltip" title="При выборе обеих систем этот тариф недоступен">'));
                 $('[data-toggle="tooltip"]').tooltip();
            }
            myJQuery(".btn-group_but_tarifs .btn-info").addClass("disabled");
            if (myJQuery(".btn-group_but_tarifs .btn-info").hasClass('disabled') && myJQuery("#settings_service").prop("checked") && (myJQuery(".btn-group_but_tarifs .btn-info").hasClass('active') || !myJQuery(".btn-group_but_tarifs .btn").hasClass('active')) && flag_serv!=false) {
                myJQuery(".btn-group_but_tarifs .btn-info").removeClass('active')
                myJQuery(".btn-group_but_tarifs .btn-warning").addClass('active');
                group_but_tarifs_func(myJQuery(".btn-group_but_tarifs .btn-warning"))
            }
            myJQuery(".btn-group_but_tarifs .btn-info").removeClass('active')
            myJQuery(".result_but .discount").text(but_id.data('discount'));
            if (myJQuery(".btn-group_but_tarifs .select_btn").hasClass('disabled')) {
//                   if(myJQuery(".select_btn.disabled+ul li a").hasClass('selected_price')){
//                    myJQuery(".servises_elem_serv.one_var").addClass('none')
//                    if(flag_service==false){
//                        myJQuery(".order_main").css('display','none')
//                    }
//                    
//                    
//                }
            }
        } else {
            myJQuery('.block_div-disable').remove();
            myJQuery(".btn-group_but_tarifs .btn-info").removeClass("disabled");
        }
        if (myJQuery(".y").prop("checked") && (myJQuery(".classic .btn").hasClass("select_btn") || myJQuery(".express .btn").hasClass("select_btn"))) {
//            check_set_email();
            myJQuery('.p_t').removeClass('none');
            myJQuery('.result_button').removeClass('none');
            move_block();
            set_description(but_id);
            
        } else {
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
         removeServeds();
        check_set_email()
       none_result();
    });
 

 
    myJQuery(".checkbox-inline .btn").click(function () {
        myJQuery(this).toggleClass('active_checkbox');
        if (myJQuery(this).hasClass('active_checkbox')) {
            myJQuery(this).parent().find('.busket_title').text('Убрать из корзины');
            
            myJQuery(this).parent().find('.input_shop').attr('checked', 'checked');
            if (myJQuery(this).parent().find('.input_shop').attr('id') == "settings") {
                settings_check();
            } else {
                settings_service_func();
            }
        } else {
            myJQuery(this).parent().find('.busket_title').text('Добавить в корзину');
            myJQuery(this).parent().find('.input_shop').removeAttr('checked')
            if (myJQuery(this).parent().find('.input_shop').attr('id') == "settings") {
                settings_check();
            } else {
                settings_service_func();
            }
        }
    })
   settings_check();
  settings_service_func();
    
        myJQuery(".switcher_but .btn").click(function () {
        myJQuery(".switcher_but .btn").removeClass('active_checkbox')
        myJQuery(this).toggleClass('active_checkbox');
        if (myJQuery(this).hasClass('active_checkbox')) {
            if (myJQuery(this).data('type') == 'classic') {
                myJQuery("#toggle-three").attr('checked','')
                myJQuery("#toggle-two").attr('checked','checked')
                input_radio();
                input_radio_switch();
            } else {
                myJQuery("#toggle-two").attr('checked','')
                myJQuery("#toggle-three").attr('checked','checked')
                input_radio();
                input_radio_switch();
               
            }

        }
      
    })
    
 
// $('body','hover',$(".block_div-disable")).on
//    $(".block_div-disable").hover(function () {
//        $('[data-toggle="tooltip"]').tooltip();
//        var height = $(".pack_dropdown .btn-group.btn-group_but_tarifs").height();
//        console.log(height)
//        myJQuery(".pack_dropdown .btn-group.btn-group_but_tarifs").css('height', (height)+"px");
//        myJQuery(".pack_dropdown .btn-group.btn-group_but_tarifs").css('overflow', 'visible');
//    }, function () {
//        myJQuery(".pack_dropdown .btn-group.btn-group_but_tarifs").css('overflow', 'hidden');
//        myJQuery(".pack_dropdown .btn-group.btn-group_but_tarifs").css('height', 'auto')
//    })
    
    
    $("body").on("mousemove", ".block_div-disable", function () {
        var height = $(".pack_dropdown .btn-group.btn-group_but_tarifs").height();
        console.log(height)
        myJQuery(".pack_dropdown .btn-group.btn-group_but_tarifs").css('height', (height) + "px");
        myJQuery(".pack_dropdown .btn-group.btn-group_but_tarifs").css('overflow', 'visible');
    })

    $("body").on("mouseleave", ".block_div-disable", function () {
       myJQuery(".pack_dropdown .btn-group.btn-group_but_tarifs").css('overflow', 'hidden');
        myJQuery(".pack_dropdown .btn-group.btn-group_but_tarifs").css('height', 'auto')
    })
   $('[data-toggle="tooltip"]').tooltip();



var div = document.createElement('div');
div.style.overflowY = 'scroll';
div.style.width = '50px';
div.style.height = '50px';
div.style.visibility = 'hidden';
document.body.appendChild(div);
var scrollWidth = div.offsetWidth - div.clientWidth;
document.body.removeChild(div);




 var menu_vertical_h = $('.form_calculate_col_fixed').offset().top;
    var stop_margin_top = 0;
    var reigth_col=$(".form_calculate_col_first").outerWidth()+$(".form_calculate_full").offset().left
    var width_fix=$(".form_calculate_col_first").outerWidth();
     var height_fix=$(".form_calculate_col_fixed").outerHeight();
    var top_col = $(".form_calculate_col_fixed").offset().top + $(".form_calculate_col_fixed").height();
    var height_menu=$(".header_inner.navi_scrolled.navi_scrolled_resize").height();
  
    lll();
    
   
    function lll(){
        if ($("body").outerWidth() + scrollWidth > 991) {
            height_menu=$(".header_inner.navi_scrolled.navi_scrolled_resize").height();
              console.log(height_menu);
           top_col = $(".form_calculate_col_fixed").offset().top + $(".form_calculate_col_fixed").height();
            if ($(window).scrollTop() +height_menu> menu_vertical_h) {
              
                 width_fix = $(".form_calculate_col_first").outerWidth();
                   console.log(width_fix)
                $(".form_calculate_col_fixed").css({'left': reigth_col, 'width': width_fix, 'height': height_fix});
               
                $(".form_calculate_col_fixed").css({'left': reigth_col});
                if (!$(".form_calculate_col_fixed").hasClass("fix_for_side_bar")) {
                    $(".form_calculate_col_fixed").addClass("fix_for_side_bar")
                    $(".form_calculate_col_fixed").css({'top': height_menu+'px'})
                }
                ;
                if (top_col > $(".form_calculate_full").offset().top + $(".form_calculate_full").outerHeight()) {
                    console.log("qwe")
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
                    $(".form_calculate_col_fixed").css({'bottom': '', 'top': ''})
                }

            } else {
                $(".form_calculate_col_fixed").removeClass("fix_for_side_bar");
                $(".form_calculate_col_fixed").css({'left': '', 'width': '', 'height': ''});
            }
        } else {
            $(".form_calculate_col_fixed").removeClass('fix_for_side_bar_abs');
            $(".form_calculate_col_fixed").removeClass("fix_for_side_check");
            $(".form_calculate_col_fixed").removeClass("fix_for_side_bar");
            $(".form_calculate_col_fixed").css({'bottom': '', 'top': '', 'left': '', 'width': '', 'height': ''})
        }
        
        
        
    }
    
    
    $(window).resize(function () {
    reigth_col = $(".form_calculate_col_first").outerWidth() + $(".form_calculate_full").offset().left
    top_col = $(".form_calculate_col_fixed").offset().top + $(".form_calculate_col_fixed").height();
     width_fix = $(".form_calculate_col_first").outerWidth();
    height_fix = $(".form_calculate_col_fixed").outerHeight();
    height_menu=$(".header_inner.navi_scrolled.navi_scrolled_resize").height();
        lll();
    })

    $(window).scroll(function () {
        lll();
    });




    
});
