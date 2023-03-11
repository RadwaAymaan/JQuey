$(document).ready(function () {
    function closeSlide(){
    $('#closeBtn').click(function(){
        $('.side-bar').css('display','none');
        $('.side-bar').css('width','0px')
        $(".home-content").css("margin-left", "0px");
    })
}
    closeSlide();
   
    $('.side-bar').css('display','none');
    $('.side-bar').css('width','0px')
    $(".home-content").css("margin-left", "0px")
    function openSlide(){
        $('#menu').click(function(){
        if( $('.side-bar').width() == "250"){
            $('.side-bar').css('display','none');
            $('.side-bar').css('width','0px')
            $(".home-content").css("margin-left", "0px");
        }else{
            $('.side-bar').css('width','250px');
            $('.side-bar').css('display','flex');
            $(".home-content").css("margin-left", "250px");
        }
    })
        }
        openSlide();


        $("a[href^='#']").click(function (eventInfo) { 
            let href  = eventInfo.target.getAttribute('href');
             let sectionScroll = $(href).offset().top;
            $("html,body").animate({scrollTop:sectionScroll},100);
           });

    $('#singers div:first').css('display','block');
    $('#singers h3').click(function () { 
    $(this).next().slideToggle(500);
    $('#singers div').not($(this).next()).slideUp(500);
});

let deadline = new Date("Mar 30, 2023 10:0:0").getTime();
let x = setInterval(function() {
let now = new Date().getTime();
let t = deadline - now;
let days = Math.floor(t / (1000 * 60 * 60 * 24));
let hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((t % (1000 * 60)) / 1000);
document.getElementById("day").innerHTML = days + " D" ;
document.getElementById('hours').innerHTML = hours + " h";
document.getElementById('minutes').innerHTML = minutes + " m";
document.getElementById('seconds').innerHTML = seconds + " s";
    if (t < 0) {
        clearInterval(x);
    document.getElementById("day").innerHTML = "EXPIRED";
    document.getElementById('hours').innerHTML = "EXPIRED";
    document.getElementById('minutes').innerHTML = "EXPIRED";
    document.getElementById('seconds').innerHTML = "EXPIRED";
    }
}, 1000);


let max= 100;
$('textArea').keyup(function(){ 
    let characterCount = $(this).val().length;
    let remain = max - characterCount;
    if(remain <= 0){
        $('#num').text('your available character finished');
    }else{
        $('#num').text(remain);
    }
   
  });
});

