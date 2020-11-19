<template>
    <div class="top">
        <div class="wrap clearfix">
            <ul class="fl">
                <li><a href="/" target="_self"><img src="@/assets/img/1.png"></a></li>
                <li><a href="/" target="_self">首页</a></li>
                <li><a href="https://bom.iceasy.com/" target="_self">BOM配单</a></li>
                <li><a href="/pcbSmart/index.jhtml" target="_self">PCB智造</a></li>
            </ul>
            <ul class="fr">
                <li>
                    <form method="get" class="search" @submit.prevent="onSubmit">
                        <input type="text" name="keyword" autocomplete="off" placeholder="型号/品牌/描述/参数" v-model.trim="keyword" :style="{width:width+'px'}" @blur="onBlur">
                        <button type="submit"><i class="iconfont iconallicon-08"></i>搜索</button>
                        <ul class="search-list" :style="{width:width-2+'px'}" v-if="searchList.length>0">
                            <li v-for="(item, index) in searchList" :key="index" @click="goToSearch(item.partNo)">{{item.partNo}}</li>
                        </ul>
                    </form>
                </li>
                <template v-if="!isLogin">
                    <li class="vertical-line"><a href="/ucenter/ulogin/login.jhtml" target="_self">立即登录</a></li>
                    <li class="vertical-line"><a href="/ucenter/ureg/reg.jhtml" target="_self">免费注册</a></li>
                </template>
                <template v-else>
                    <li style="color: #ff8b00">您好！<a style="color: #ff8b00" href="/ucenter/personinfo/userInfoList.jhtml?#menuid=4001">{{uname}}</a></li>
                    <li><a href="/ucenter/ulogin/logout.jhtml">退出</a></li>
                </template>
                <li class="menu vertical-line">
                    <a href="/ucenter/personinfo/userInfoList.jhtml?#menuid=4001" target="_blank">我的订单<i class="iconfont iconarrow-down-filling"></i></a>
                    <ul>
                        <li><a href="/ucenter/personinfo/userInfoList.jhtml?#menuid=4001" target="_blank">我的订单</a></li>
                        <li><a href="/ucenter/tradeadmin/myRfq.jhtml?#menuid=1002" target="_blank">我的询价</a></li>
                        <li><a href="/ucenter/tradeadmin/favList.jhtml?page=1#menuid=1003" target="_blank">我的收藏</a></li>
                    </ul>
                </li>
                <li class="menu">
                    <a href="javascript:;">客服中心<i class="iconfont iconarrow-down-filling"></i></a>
                    <ul>
                        <li><a href="/help_index.shtml" target="_blank">帮助中心</a></li>
                        <li><a href="javascript:;">在线客服</a></li>
                        <li><a href="/ucenter/cs/returnExchangeList.jhtml?#menuid=2001" target="_blank">退换货</a></li>
                        <li><a href="/complain_suggest.shtml" target="_blank">投诉建议</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>


<script src="./Top.js"></script>

<style src="./Top.scss" lang="scss" scoped></style>