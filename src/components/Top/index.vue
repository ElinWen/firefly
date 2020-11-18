<template>
    <div class="top">
        <div class="wrap clearfix">
            <ul class="fl">
                <li><a href="/" target="_blank"><img src="@/assets/img/1.png"></a></li>
                <li><a href="/" target="_blank">首页</a></li>
                <li><a href="/" target="_blank">BOM配单</a></li>
                <li><a href="/" target="_blank">PCB智造</a></li>
            </ul>
            <ul class="fr">
                <li>
                    <form action="/search/optimal/searchKey.jhtml" method="get" class="search" target="_blank" @submit="onSubmit">
                        <input type="text" name="keyword" autocomplete="off" placeholder="型号/品牌/描述/参数" v-model.trim="keyword" :style="{width:width+'px'}">
                        <button type="submit"><i class="iconfont iconallicon-08"></i>搜索</button>
                    </form>
                </li>
                <li class="vertical-line"><a href="/" target="_blank">立即登录</a></li>
                <li class="vertical-line"><a href="/" target="_blank">免费注册</a></li>
                <li class="menu vertical-line">
                    <a href="/" target="_blank">我的订单<i class="iconfont iconarrow-down-filling"></i></a>
                    <ul>
                        <li><a href="/" target="_blank">我的订单</a></li>
                        <li><a href="/" target="_blank">我的询价</a></li>
                        <li><a href="/" target="_blank">我的收藏</a></li>
                    </ul>
                </li>
                <li class="menu">
                    <a href="/" target="_blank">客服中心<i class="iconfont iconarrow-down-filling"></i></a>
                    <ul>
                        <li><a href="/" target="_blank">帮助中心</a></li>
                        <li><a href="/" target="_blank">在线客服</a></li>
                        <li><a href="/" target="_blank">退换货</a></li>
                        <li><a href="/" target="_blank">投诉建议</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'Top',
        data(){
            return {
                keyword: '',
                width: 0
            }
        },
        methods: {
            onSubmit(e){
                if(this.width == 0){
                    this.width = 200
                    e.preventDefault()
                    return
                }
                if(this.keyword.length < 2){
                    alert('搜索型号不能少于2个字符！')
                    e.preventDefault()
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
.top{
    height: 30px;
    background: #32373e;
    color: white;
    font-size: 12px;
    line-height: 30px;
    .wrap{
        width: 1200px;
        margin: 0 auto;
    }
    a, button{
        color: white;
        cursor: pointer;
        &:hover{
            color: #ff8b00;
        }
    }
    li{
        display: inline-block;
    }
    .fl{
        img{
            vertical-align: text-top;
        }
        li{
            padding-right:30px;
        }
    }
    .fr{
        li{
            padding: 0 10px;
            position: relative;
            text-align: center;
        }
        .search{
            input{
                background: none;
                border: 0;
                border-bottom: 1px solid white;
                color: white;
                width: 0;
                transition: all 0.5s;
            }
            button{
                border: 0;
                background: none;
            }
            .iconfont{
                font-size: 12px;
                padding-right: 5px;
            }
        }
        .menu{
            position: relative;
            padding: 0;
            .iconfont{
                display: inline-block;
                transition: all 0.5s;
            }
            &:hover{
                .iconfont{
                    transform: rotate(-180deg);
                }
                ul{
                    transform: rotateX(0);
                }
            }
            > a{
                display: block;
                width: 90px;
            }
            ul{
                transform-origin: top;
                transform: rotateX(90deg);
                transition: all 0.5s;
                position: absolute;
                width: 90px;
                box-shadow: 0 2px 5px #cccccc;
                li{
                    padding: 0;
                    display: block;
                    position: relative;
                }
                a{
                    color: #666666;
                    display: block;
                    height: 24px;
                    line-height: 24px;
                    text-align: left;
                    text-indent: 20px;
                    &:hover{
                        color: #00479d;
                        background: #e8f3ff;
                    }
                }
            }
        }
    }
    .vertical-line{
        &:after{
            content: "";
            width: 1px;
            height: 14px;
            display: block;
            position: absolute;
            right: 0;
            background: white;
            top: 50%;
            transform: translateY(-50%);
        }
    }
}
</style>