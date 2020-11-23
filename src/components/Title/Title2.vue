<template>
    <div class="title clearfix">
        <p><slot name="left"></slot></p>
        <a :href="url"><slot name="right"></slot></a>
    </div>
</template>

<script>
    export default {
        name: "Title2",
        props: ['url']
    }
</script>

<style lang="scss" scoped>
    .title{
        line-height: 16px;
        p{
            font-size: 16px;
            border-left: 4px solid #00479d;
            padding-left: 5px;
            margin-bottom: 10px;
            float: left;
        }
        a{
            font-size: 12px;
            display: block;
            float: right;
            color: #00479d;
        }
    }
</style>