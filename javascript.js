$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

var goTopBtn = document.getElementById('divGoTop');

window.onscroll = function(){displayButton()};


function displayButton(){

    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){

        goTopBtn.style.display = "block";
    } else {

        goTopBtn.style.display = "none";
    }
}

function goTop(){

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}