<template>
    <div class="navbar">
        <ul class="navbar_ul">
            <li class="navbar_item">酸菜鱼</li>
            <li class="navbar_item">麻辣烫</li>
            <li class="navbar_item">鸡排</li>
            <li class="navbar_item">鸭脖</li>
            <li class="navbar_item">烧烤</li>
            <li class="navbar_item">火锅</li>
        </ul>
    </div>
</template>
<style scoped lang="scss">
    .navbar{position:absolute;z-index:6;width:100%;}
    .navbar_ul{background-color:rgba(235, 232, 232, 0.1);height:60px;width:100%;display:flex;justify-content:space-around;}
    .navbar_item{line-height: 60px;font-size:20px;font-weight: 600;color:aliceblue;}
</style>
