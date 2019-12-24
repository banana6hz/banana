<template>
    <div>
        <div class="container">
            <div class="wave"></div>
        </div>
        <div class="container1">
        <div class="wave1"></div>
        </div>
        <div class="g-container">
        <div class="g-number">98.7%</div>
        <div class="g-contrast">
            <div class="g-circle"></div>
            <ul class="g-bubbles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.container {
  position: relative;
  margin: 0 auto;
  width: 200px;
  height: 200px;
  padding: 5px;
  border: 5px solid rgb(118, 218, 255);
  border-radius: 50%;
  overflow: hidden;
}
.wave {
    position: relative;
    width: 200px;
    height: 200px;
    background-color: rgb(118, 218, 255);
    border-radius: 50%;	 
    &::before,
    &::after{
        content: "";
        position: absolute;
        width: 400px;
        height: 400px;
        top: 0;
        left: 50%;
        background-color: rgba(255, 255, 255, .4);
        border-radius: 45%;
        transform: translate(-50%, -70%) rotate(0);
        animation: rotate 6s linear infinite;
        z-index: 10;
    }	    
    &::after {
      border-radius: 47%;
      background-color: rgba(255, 255, 255, .9);
      transform: translate(-50%, -70%) rotate(0);
      animation: rotate 10s linear -5s infinite;
      z-index: 20;
    }
}

@keyframes rotate {
  50% {transform: translate(-50%, -73%) rotate(180deg);}
  100% {transform: translate(-50%, -70%) rotate(360deg);}
}

.container1{
  width:150px;
  height:300px;
  position: relative;
  border:5px solid rgb(42, 46, 43);
  padding:5px;
  border-radius: 4px;
  overflow: hidden;
  margin:20px auto;
}
.wave1 {
  position: relative;
  width:150px;
  height:300px;
  background: #42b983;
  &::before,
  &::after{
    content: '';
    position: absolute;
    width:300px;
    height:300px;
    border-radius:45%;
    top:0;
    left:50%;
    background: rgba(255, 255, 255, .4);
    transform: translate(-50%,-10%) rotate(0);
    animation: rotate11 4s linear infinite;
    z-index:10;
  }
  &::after{
    border-radius: 40%;
    background: rgba(255, 255, 255, .7);
    transform: translate(-50%,-10%) rotate(0);
    animation: rotate12 4s linear infinite;
    z-index:20;
  }
}
@keyframes rotate11{
  50%{transform: translate(-50%,-50%) rotate(180deg);}
  100%{transform: translate(-50%,-90%) rotate(360deg);}
}
@keyframes rotate12{
  50%{transform: translate(-50%,-50%) rotate(90deg);}
  100%{transform: translate(-50%,-90%) rotate(180deg);}
}

.g-number {
    position: absolute;
    width: 300px;
    top: 27%;
    text-align: center;
    font-size: 32px;
    z-index: 10;
    color: #fff;
}

.g-container {
    position: relative;
    width: 300px;
    height: 400px;
    margin: auto;
}

.g-contrast {
    filter: contrast(15) hue-rotate(0);
    width: 300px;
    height: 400px;
    background-color: #000;
    overflow: hidden;
    animation: hueRotate 10s infinite linear;
}

.g-circle {
    position: relative;
    width: 300px;
    height: 300px;
    box-sizing: border-box;
    filter: blur(8px);
    
    &::after {
        content: "";
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(0);
        width: 200px;
        height: 200px;
        background-color: lime;
        border-radius: 41% 52% 43% 56% / 42% 38% 58% 49%;
        animation: rotate 10s infinite linear;
    }
    
    &::before {
        content: "";
        position: absolute;
        width: 176px;
        height: 176px;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        background-color: #000;
        z-index: 10;
    }
}

.g-bubbles {
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 100px;
    height: 40px;
    transform: translate(-50%, 0);
    border-radius: 100px 100px 0 0;
    background-color: lime;
    filter: blur(5px);
}

li {
    position: absolute;
    border-radius: 50%;
    background: lime;
}

@for $i from 0 through 15 { 
    li:nth-child(#{$i}) {
        $width: 15 + random(15) + px;//random(number)返回0-number的数字
        $opacity: random(100);
        left: 15 + random(70) + px;
        top: 50%;
        transform: translate(-50%, -50%);
        width: $width;
        height: $width;
        animation: moveToTop #{random(6) + 3}s ease-in-out -#{random(5000)/1000}s infinite;
    }
}

@keyframes rotate {
    50% {
        border-radius: 42% 38% 58% 49% / 41% 52% 43% 56%;
    }
    100% {
        transform: translate(-50%, -50%) rotate(720deg);
    }
}

@keyframes moveToTop {
    90% {
        opacity: 1;
    }
    100% {
        opacity: .1;
        transform: translate(-50%, -180px);
    }
}

@keyframes hueRotate {
    100% {
        filter: contrast(15) hue-rotate(360deg);
    }
}
</style>
