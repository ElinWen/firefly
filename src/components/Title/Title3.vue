<template>
    <div class="tabbar clearfix">
        <p>{{data.title}}<span>{{data.titleEn}}</span></p>
        <ul>
            <li v-for="(item, index) in data.tabbar" :key="index" :class="{active: data.activeId == index}" @click="changeTab(index)"><p>{{item}}</p></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Title3",
        props: ['data'],
        methods: {
            changeTab(id){
                this.data.activeId = id
            }
        }
    }
</script>

<style lang="scss" scoped>
    .tabbar{
        font-weight: bold;
        padding: 60px 0;

        &>p{
            color: #1e1e1e;
            font-size: 30px;
            line-height: 30px;
            border-left: 4px solid #3766D8;
            padding-left: 11px;
            float: left;

            span{
                color: #e3e3e3;
                font-size: 14px;
                float: right;
                position: relative;
                top: 10px;
                padding-left: 5px;
            }
        }

        ul{
            float: right;

            li{
                border-right: 1px solid #e3e3e3;
                float: left;
                &:last-child{
                    border: 0;
                }

                p{
                    font-size: 20px;
                    margin: 0 42px;
                    color: #6a6a6a;
                    line-height: 29px;
                    cursor: pointer;
                    letter-spacing: 1.2px;
                    &:hover{
                        color: #3766D8;
                        border-bottom: 2px solid #3766D8;
                    }
                }

                &.active{
                    p{
                        color: #3766D8;
                        border-bottom: 2px solid #3766D8;
                    }
                }
            }
        }
    }
</style>