<template>
    <div class="slider">
        <div class="slider_txt">
            <div class="slider_items">
                <div class="slider_list">
                    <div class="slider_track" style="width:2400px;opacity: 1;position: relative;transform:translateX(0);">
                        <div class="slider_item">生活起居规律，生活起居规律。生活起居规律，生活起居规律。</div>
                        <div class="slider_item">保证充足的睡眠，保证充足的睡眠。保证充足的睡眠，保证充足的睡眠，保证充足的睡眠。</div>
                        <div class="slider_item">完了我社么都不会了😭</div>
                        <!-- <div class="slider_item">ccc</div> -->
                    </div>
                </div>
            </div>
        </div>
        <div class="slider_img">
            <div class="slider_items">
                <div class="slider_list">
                    <div class="slider_track" style="width:2400px;opacity: 1;position: relative;transform:translateX(0);">
                        <div class="slider_item"><img src="../assets/slider/pizza.png" alt=""></div>
                        <div class="slider_item"><img src="../assets/slider/hotPop.png" alt=""></div>
                        <div class="slider_item"><img src="../assets/slider/watermelon.png" alt=""></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="slider_nav">
            <div class="slider_dots">
                <ul class="slick_dots">
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
// import slider from '../../static/js/slider.js'
export default {
    methods:{
        slider(){
            var sliderTrack = document.getElementsByClassName('slider_track');
            var slickDots = document.getElementsByClassName('slick_dots')[0].children;
            var leftScroll01;
            var leftScroll02;
            //var sliderTrackLeft = document.getElementsByClassName('sliderTrack')[0].children[0].offsetLeft//sliderTrack[0]左移的距离
            var index = 0
            function move(){
                if(index<slickDots.length-1){
                    index++;
                }else{
                    index=0
                }
                leftScroll01 = -index * sliderTrack[0].children[0].offsetWidth;
                leftScroll02 = -index * sliderTrack[1].children[0].offsetWidth;
                sliderTrack[0].style.transform="translate3d("+leftScroll01+"px,0,0)";
                sliderTrack[1].style.transform="translate3d("+leftScroll02+"px,0,0)";
            }
            setInterval(move,3000);
            for(var i=0;i<slickDots.length;i++){
                slickDots[i].index = i;
                slickDots[i].onclick=function(){
                    index = this.index + 1;
                    leftScroll01 = -this.index * sliderTrack[0].children[0].offsetWidth;
                    leftScroll02 = -this.index * sliderTrack[1].children[0].offsetWidth;
                    sliderTrack[0].style.transform="translate3d("+leftScroll01+"px,0,0)";
                    sliderTrack[1].style.transform="translate3d("+leftScroll02+"px,0,0)";
                }
            }
        }
    },
    mounted() {
        this.slider();
    }
    
}
</script>

<style scoped lang="scss">
.slider{width:60%;position:relative;display:flex;flex-wrap:wrap;justify-content:center;}
.slider_txt{width:62%;padding:7% 8%;min-height:200px;box-sizing: border-box;}
.slider_img{width:38%;}
.slider_items .slider_item{position:relative;overflow:hidden;box-sizing:border-box;height:100%;}
.slider_item{float:left;width:380px;}
.slider_list{position:relative;overflow:hidden;}
.slider_track{
    top: 0;
    left: 0;
    display: block;
    margin-left: auto;
    margin-right: auto;
}
.slider_nav{width: 62%;position: absolute;left: 0;bottom: 0;text-align: center;}
.slick_dots li{margin:0 10px;width:50px;height:10px;box-sizing:border-box;text-align:center;background:#e4e4e4}
.slider_active{display:block;}
</style>
