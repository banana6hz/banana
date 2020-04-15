<template>
    <div class="myFooter">
        <!-- <img src="../../static/JavaScript.pdf" alt=""> -->
        <div class="footerCon">
            <div class="footerLeft">
                <ul>
                    <li>关于我们</li>
                    <li>关于他们</li>
                    <li>关于阿们</li>
                    <li>新年快乐</li>
                    <li>恭喜发财</li>
                </ul>
                <p>www.hhhh.com</p>
            </div>
            <div class="footerRight">
                <ul>
                    <li><a href="#"><img src="../../static/img/banner.png" alt=""></a></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'myFooter'
}
</script>

<style scoped lang="scss">
    .myFooter{background:#2d3237;color:#fff;bottom:0;width:100%;}
    .footerCon{padding:20px 10%;display:flex;justify-content:space-between;align-items: center;}
    .footerLeft li{margin-right:10px;}
</style>

