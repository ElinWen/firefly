<template>
    <div class="section">
        <slot name="title"></slot>
        <slot name="content"></slot>
    </div>
</template>

<script>
    export default {
        name: "Section",
        components: {
            
        }
    }
</script>

<style lang="scss" scoped>
    .section{
        padding-top: 100px;
    }
</style>