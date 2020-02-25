<template>
    <div id="wrap">
        <div class="index_bg">
            <!-- <img src="../assets/banner/pic01.jpg" alt="pic01"> -->
        </div>
        <div class="myIndex">
            <!-- <div class="index_img">
                <img src="../assets/icebear.jpg" alt="welcome">
            </div> -->
            <div class="index_txt">
                <!-- <p class="index_logo"><img src="../assets/bang.gif" alt=""></p> -->
                <h1 class="index_title">Welcome</h1>
                <p>Only if you ask to see me,</p>
                <p> our meeting will be meaningful to me.</p>
                <p>Happy Happy 2020 ❗ 🎇</p>
                <!-- <p>https://www.cnblogs.com/zerozq/p/8480157.html</p>
                <p>http://4db.cc/p/5/</p>
                <p>http://bm.straightline.jp/</p>
                <p>https://hao.uisdc.com/</p>
                <p>https://sezaki-design.com/</p>
                <p>http://www.joooyoo.com/</p> -->
                <p class="btn_more" @click="goHome()">View more</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        goHome(){
            this.$router.push('./home')
        }
    }
}
</script>

<style scoped lang="scss">
#wrap{width:100%;height:100%;}
.index_bg{height:100%;width:100%;z-index:-100;position:absolute;background-image:url(../../static/img/banner/pic01.jpg);opacity:.9;}
.index_bg img{width:100%;height:100%;}
.myIndex{padding:60px 120px;display:flex;align-items:center;position:relative;float:right;}
.index_img{
    width:45%;
    img{
        max-width: 84%;
        height: auto;
        vertical-align: bottom;
    }
}
.index_txt{
    padding:80px;
    min-width: 600px;
    box-sizing: border-box;
    position: relative;
    color:#fff;
    .index_logo{position: absolute;right:40px;top:0px;}
    h1{font-family:Georgia, 'Times New Roman', Times, serif;font-size:120px;font-weight: 400;letter-spacing: .08em;text-shadow:10px 10px 14px rgb(59, 58, 58);}
    p{font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;letter-spacing: .1em;font-size:20px;padding-left:60px;}
    .btn_more{
        padding:10px 20px;
        box-sizing: border-box;
        border-radius:6px;
        background: #fff;
        position: absolute;
        bottom:0px;
        right:130px;
        font-size:18px;
        margin:0;
        border:1px solid #fbce015e;
        color:#000;
        transition: all 0.6s;
        &:hover{
            // animation:mymove 1s 1;
            // transform: scale(1.05,1.05);
            font-size:20px;box-shadow: 3px 3px 6px #dbd9d9;font-weight:500;
        }
    }
    // @keyframes mymove {
    //     from{font-size:18px;}
    //     to{font-size:20px;box-shadow: 3px 3px 6px #dbd9d9;}
    // }
}
</style>

