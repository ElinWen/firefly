<template>
    <div class="header">
        <form action="/brand/detail.jhtml" method="get">
            <input type="hidden" name="brandNo" value="4600">
            <input type="text" name="brandKeyword" placeholder="名称/型号/主芯片型号/">
            <input type="hidden" name="p" value="p">
            <button><i class="iconfont iconallicon-08"></i></button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style lang="scss" scoped>
    .header{
        height: 500px;
        background: url("../../assets/img/2.jpg") center no-repeat;
        position: relative;
    }
    form{
        display: inline-block;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: -25px;
        background: white;
        border-radius: 25px;
        padding: 0 4px 0 25px;
        box-shadow: 0px 0px 27px rgba(0, 0, 0, 0.16);
    }
    input{
        display: inline-block;
        height: 50px;
        width: 675px;
        background: white;
        font-size: 16px;
        line-height: 50px;
        border: 0;
    }
    button{
        display: inline-block;
        width: 100px;
        height: 42px;
        background: #00479d;
        border-radius: 21px;
        cursor: pointer;
        position: relative;
        top: 4px;
    }
    i{
        font-size: 28px;
        line-height: 42px;
        color: white;
    }
</style>