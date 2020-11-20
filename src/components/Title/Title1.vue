<template>
    <div class="title">
        <p class="h1"><slot name="h1"></slot></p>
        <p class="shadow"><slot name="shadow"></slot></p>
    </div>
</template>

<script>
    export default {
        name: "Title1"
    }
</script>

<style lang="scss" scoped>
    .title{
        text-align: center;
        font-weight: bold;
        .h1{
            color: #1e1e1e;
            font-size: 36px;
            position: relative;
            z-index: 1;
        }
        .shadow{
            color: #f2f2f2;
            font-size: 32px;
            margin-top: -32px;
        }
        &:after{
            content: '';
            width: 40px;
            height: 5px;
            background: #f3981d;
            display: block;
            margin: 0 auto;
        }
    }
</style>