<template>
    <div class="slider">
        <div class="slider_txt">
            <div class="slider_items">
                <div class="slider_list">
                    <div class="slider_track" style="width:2400px;opacity: 1;position: relative;">
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
                    <div class="slider_item">aaaa</div>
                    <!-- <div class="slider_item">bbb</div>
                    <div class="slider_item">ccc</div> -->
                </div>
            </div>
        </div>
        <div class="slider_nav">
            <div class="slider_dots">
                <ul class="slick_dots">
                    <li><button>1</button></li>
                    <li><button>1</button></li>
                    <li><button>1</button></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
// import slider from '../../static/js/slider.js'
export default {
    method:{
        slider(){
            alert(2)
            // var sliderTrack = document.getElementsByClassName('.slider_track')
            // var sliderItem = document.getElementsByClassName('.slider-item')
            // var sliderDots = document.getElementsByClassName('.slick_dots')
            // console.log(this.sliderDots.length)
            // for(var i=0;i<sliderDots.length;i++){
            //         sliderDots[i].click(function(){
            //             alert(1)
            //             //var leftscoll= 30*i;
            //             sliderTrack[i].css('transform:translate3d(50px; 0px, 0px);')
            //         })
            // }
            // for(var i=0;i<sliderDots.length;i++){
            //     sliderItem[i].addClass('.slider_active')
            // }
        }
    },
    created(){
        alert(1)
        this.slider()
        // setTimeout(
        //         this.slider()
        //     ,3000);
    }
    
}
</script>

<style scoped lang="scss">
.slider{width:60%;position:relative;display:flex;flex-wrap:wrap;justify-content:center;}
.slider_txt{width:62%;padding:7% 8%;min-height:200px;box-sizing: border-box;}
.slider_img{width:38px;}
.slider_items .slider_item{position:relative;overflow:hidden;box-sizing:border-box;}
.slider_item{float:left;}
.slider_list{position:relative;overflow:hidden;}
.slider_track{
    top: 0;
    left: 0;
    display: block;
    margin-left: auto;
    margin-right: auto;
}
.slider_nav{width: 62%;position: absolute;left: 0;bottom: 16.6%;text-align: center;}
.slick_dots li{margin:0 10px;}
.slider_active{display:block;}
</style>
