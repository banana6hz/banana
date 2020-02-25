!function() {
    var sliderTrack = document.getElementsByClassName('.slider_track')
    var sliderItem = document.getElementsByClassName('.slider-item')
    var sliderDots = document.getElementsByClassName('.slick_dots')
    function slider(){
        for(var i=0;i<sliderDots.length;i++){
            sliderDots[i].click(function(){
                var leftscoll= 30*i;
                sliderTrack[i].css('transform:translate3d(50px; 0px, 0px);')
            })
        }
        //sliderTrack.css()
    }
    setTimeout(
        slider()
    ,3000);
    for(var i=0;i<sliderDots.length;i++){
        sliderItem[i].addClass('.slider_active')
    }
}(jquery)