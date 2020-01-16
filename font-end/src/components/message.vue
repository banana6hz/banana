<template>
    <div class="msg">
        <!-- <div class="msg_list">
            <h4>flex-grow:0不进行放大</h4>
            <ul class="msg_list_1">
                <li style="flex-grow:0">flex-grow:0</li>
                <li style="flex-grow:0">flex-grow:0</li>
                <li style="flex-grow:0">flex-grow:0</li>
                <li style="flex-grow:0">flex-grow:0</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
                <li>8</li>
                <li>9</li>
                <li>10</li>
                <li>11</li>
            </ul>
        </div>
        <div class="msg_list">
            <h4>全部flex-grow:1则项目将等分剩余空间</h4>
            <ul class="msg_list_2">
                <li style="flex-grow:1">flex-grow:1</li>
                <li style="flex-grow:1">flex-grow:1</li>
                <li style="flex-grow:1">flex-grow:1</li>
                <li style="flex-grow:1">flex-grow:1</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
                <li>8</li>
                <li>9</li>
                <li>10</li>
                <li>11</li>
            </ul>
        </div>
        <div class="msg_list">
            <h4>flex-grow为不同数值时，0表示不缩放，2放大的是1的两倍</h4>
            <ul class="msg_list_3">
                <li style="flex-basis:77px;">flex-basis</li>
                <li style="flex-grow:1">flex-grow:1</li>
                <li style="flex-grow:2">flex-grow:2</li>
                <li style="flex-grow:0">flex-grow:0</li>
                <li>6</li>
                <li>7</li>
                <li>8</li>
                <li>9</li>
                <li>10</li>
                <li>11</li>
            </ul>
        </div>
        <div class="msg_list">
            <h4>align-items:center</h4>
            <ul class="msg_list_4">
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
                <li>8</li>
                <li>9</li>
                <li>10</li>
                <li>11</li>
            </ul>
        </div>
        <div class="msg_list">
            <h4>space-between</h4>
            <ul class="msg_list_5">
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
                <li>8</li>
                <li>9</li>
                <li>10</li>
                <li>11</li>
            </ul>
        </div>
        <div class="msg_list">
            <h4>space-around</h4>
            <ul class="msg_list_6">
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
                <li>8</li>
                <li>9</li>
                <li>10</li>
                <li>11</li>
            </ul>
        </div>
        <div class="msg_list_row_reverse">
            <ul>
                <li>row_reverse_1</li>
                <li>row_reverse_2</li>
                <li>row_reverse_3</li>
            </ul>
        </div>
        <div class="msg_list_column">
            <ul>
                <li>column_1</li>
                <li>column_2</li>
                <li>column_3</li>
            </ul>
        </div>
        <div class="msg_list_column_reverse">
            <ul>
                <li>column_reverse_1</li>
                <li>column_reverse_2</li>
                <li>column_reverse_3</li>
            </ul>
        </div>
        <div class="msg_input">
            <input type="text" placeholder="踩...">
        </div> -->
    </div>
</template>
<script>
export default {
  name: 'message',
}
</script>
<style scoped lang="scss">
    .msg{
        margin:20px auto;
        width:500px;
        border:1px solid #e31;
        padding:10px;
        min-height:150px;
    }
    .msg_list ul{
        display:flex;
        border: 2px solid #225533;
        height:120px;
    }
    .msg_list ul li{
        color:#FFF;
    }
    .msg_list ul li{width:80px;height:30px;}
    .msg_list_1{align-items: center;justify-content: center;}
    .msg_list_1 li{background: #2fdda9;}
    .msg_list_2{align-items: center;justify-content: center;}
    .msg_list_2 li{background: #ebc867;}
    .msg_list_3{flex-wrap: wrap;justify-content: center;align-content: center;}
    .msg_list_3 li{background:#f77c7c;}
    .msg_list_4{flex-wrap: wrap;justify-content: center;align-items: center;}
    .msg_list_4 li{background:#637ae2;}
    .msg_list_5{align-content:space-between;justify-content: center;align-items: center;}
    .msg_list_5 li{background:#188f75;}
    .msg_list_6{align-content:space-around;justify-content: center;align-items: center;}
    .msg_list_6 li{background:#fc9aeb;}
</style>
