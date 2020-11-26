<template>
    <header>
        <ul>
            <li :class="{active : menuId == 1}"><router-link to="/programmed">烧录</router-link></li>
            <li :class="{active : menuId == 2}"><router-link to="/pcb">PCB打样</router-link></li>
            <li :class="{active : menuId == 3}"><router-link to="/technology">测试及技术整改</router-link></li>
            <li :class="{active : menuId == 4}"><router-link to="/lease">实验室租赁</router-link></li>
        </ul>
    </header>
</template>

<script>
    export default {
        name: "Header2",
        props: ['menuId']
    }
</script>

<style lang="scss" scoped>
    header{
        height: 350px;
        background: url(../../assets/img/12.png) center no-repeat;
        position: relative;

        ul{
            display: inline-block;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: -40px;
            padding: 5px;
            background: white;
            border-radius: 40px;
            box-shadow: 0px 0px 27px rgba(16, 90, 150, 0.17);
            white-space: nowrap;

            li{
                display: inline-block;

                a {
                    height: 70px;
                    display: inline-block;
                    border-radius: 35px;
                    font-size: 24px;
                    line-height: 70px;
                    padding: 0 56px;
                    color: #666666;
                }

                &.active, &:hover{
                    a{
                        color: white;
                        background: #00479d;
                    }
                }
            }
        }
    }
</style>