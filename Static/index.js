$('.main-reviews').slick({
    slidesToShow: 4, //сколько слайдов показывать в карусели
    slidesToScroll: 1 // сколько слайдов прокручивать за раз
});

$('.main-slide').slick({
    slidesToShow: 1, //сколько слайдов показывать в карусели
    slidesToScroll: 1 // сколько слайдов прокручивать за раз
});


//Выбор типа дома

$('.tupe-house').on('click', function(){
    $('.tupe-house').removeClass('active');
    $(this).toggleClass('active')
})


//Выбор материалов

$('#tupe-1').on('click', function(event){
    $(this).toggleClass('active');
})

$('#tupe-2').on('click', function(event){
    $(this).toggleClass('active');
})

$('#tupe-3').on('click', function(event){
    $(this).toggleClass('active');
})

//выбор сроков

$('#time-1').on('click', function(event){
    $(this).toggleClass('active');
})

$('#time-2').on('click', function(event){
    $(this).toggleClass('active');
})

//калькулятор

$('.cost-button').on('click', function(event){
    var main = 0;
    $('[data-class]').each(function(index){
        if ($(this).hasClass('active')){
            main += Number.parseInt($(this).attr('data-class'))
            console.log(main)
            $('#info').innerHTML = main;
        el_fullcost = $('.cost-number');
        el_fullcost.innerHTML = main;
        $('#info').html(main);
        }
    })
})

//форма обратного звонка

// $('#form').on('click', function(event){
//     var user = $('#user').val;
//     var phone = $('#phone').val;
//     console.log(user);
//     console.log(phone);
// })

$('#form').on('click', function(event){
    var user = $('input[name=user]').val();
    var phone = $('input[name=phone]').val();
    var form = true;
        if (user==""){
            user = false;
        }
        if (phone==""){
            phone = false;
        }
    var shipment = {'value_user':user, 'value_phone':phone}
        if (form){
            $.post('send.php', form, function(otvet){
                result = '<div>'+otvet.text+'<div>';
                $("#form_result").hide().html(result).slideDown();
            }, 'json');
        }
    console.log(user);
    console.log(phone);
    alert(`${user} успешно отравили заяку по номенр телефона ${phone}!`)
})

