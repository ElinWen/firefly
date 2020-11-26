<template>
    <div class="popup" v-if="type">
        <div class="box">
            <i class="close iconfont iconallicon-351" @click="$emit('close')"></i>
            <i class="iconfont iconallicon-63 type" :style="{color: type == 1 ? '#0FCE96' : '#f3582a'}"></i>
            <p style="font-size: 24px;color: #666666">{{type == 1 ? success[0] : fail[0]}}</p>
            <p style="font-size: 16px;color: #999999">{{type == 1 ? success[1] : fail[1]}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Popup',
        props: {
            type: Number // 0为隐藏，1为成功，2为失败
        },
        data(){
            return {
                success: ['提交成功', '后续工作人员会主动联系您接洽具体服务'],
                fail: ['提交失败', '请稍后重试或按左侧联系方式进行咨询']
            }
        }
    }
</script>

<style lang="scss" scoped>
    .popup{
        width: 100%;
        height: 100%;
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.3);
        z-index: 1;

        .box{
            width: 400px;
            height: 232px;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            background: white;
            border-radius: 3px;
            line-height: 36px;

            .close{
                display: block;
                position: absolute;
                right: 15px;
                top: 15px;
                cursor: pointer;
                font-size: 16px;
                line-height: 16px;
                color: #999999;
            }

            .type{
                font-size: 75px;
                line-height: 75px;
                padding: 40px 0 20px 0;
                display: inline-block;
            }
        }
    }
</style>