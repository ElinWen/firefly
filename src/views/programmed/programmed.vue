<template>
    <div class="page">
        <Header2 menuId="1"></Header2>

        <section class="intro">
            <div class="wrap clearfix">
                <div class="fl">
                    <p>萤火工场烧录车间位于广东虎门保税仓，是以汽车电子为主的十万级净化无尘车间，车间配有全自动化烧录产线、小批量手动烧录产线及转包装产线等。设备与人工接地线区分接地，车间配备独立空调系统24小时恒定温湿度，给予芯片更安全的生产环境。</p>
                    <p><img src="@/assets/img/14.png">IC封装分QFP、QFN、DFN、BGA、SOP、TSOP、SIP等，烧录封装类型多达116种；同时支持Tube，Reel、Tray盘等包装方式。</p>
                    <p><img src="@/assets/img/15.png">设备含有8个吸嘴可同时工作,最高可支持48pcs同时烧录，UPH最高可达3000pcs/h。</p>
                    <p><img src="@/assets/img/16.png">可以完成9种包装方式之间的相互转换，转换包装最高UPH可达12000pcs/h，如管装转REEL等。</p>
                </div>
                <div class="fr">
                    <img src="@/assets/img/13.png">
                </div>
            </div>
        </section>

        <section class="services">
            <div class="wrap">
                <Title3 :data="section2"></Title3>
                <ul class="content clearfix">
                    <!-- IC烧录测试 -->
                    <li :class="{show: section2.activeId == 0}">
                        <div class="fl">
                            <img src="@/assets/img/17.png">
                            <img src="@/assets/img/18.png">
                            <img src="@/assets/img/19.png">
                        </div>
                        <div class="fr">
                            <img src="@/assets/img/20.png">
                            <img src="@/assets/img/21.png">
                        </div>
                    </li>
                    <!-- 转换包装 -->
                    <li :class="{show: section2.activeId == 1}">
                        <div class="fl">
                            <p>转换包装</p>
                            <p>元器件的常规包装方式有三种：盘式、带式、管式。客户时常会遇到某些物料在采购进来后无法直接上SMT，萤火工场烧录车间拥有自动、半自动包装转换设备，效率高，品质稳定，可以提供转换包装的服务，无论是盘式、带式还是管式，都可以按SMT要求进行包装转换。</p>
                        </div>
                        <div class="fr">
                            <img src="@/assets/img/22.png">
                            <img src="@/assets/img/23.png">
                        </div>
                    </li>
                    <!-- 激光镭射 -->
                    <li :class="{show: section2.activeId == 2}">
                        <div class="fl">
                            <p>激光镭射</p>
                            <p>芯片上的文字、图案信息有其相应的代表意义，便于后期识别和追踪。但是芯片的特点是体积小，打标位置精度要求高，还不能破坏芯片的功能属性，所以采用激光打标是最好的选择。</p>
                            <p>激光打标是目前应用最普遍的激光加工技术之一。按照激光器类型可划分为光纤激光打标机、CO2激光打标机、半导体激光打标机等。其原理是利用高能量密度的激光对工件进行局部照射，使表层材料汽化或发生颜色变化，从而留下持久清晰，不可磨灭的标记。</p>
                            <p>芯片上的文字、图案信息有其相应的代表意义，便于后期识别和追踪。但是芯片的特点是体积小，打标位置精度要求高，还不能破坏芯片的功能属性，所以采用激光打标是最好的选择。</p>
                        </div>
                        <div class="fr">
                            <img src="@/assets/img/24.png">
                        </div>
                    </li>
                    <!-- 模块烧录 -->
                    <li :class="{show: section2.activeId == 3}">
                        <p>WIFI模块烧录</p>
                        <p>可对庆科EMW3080系列、EMW30801系列、EMW5080系列模块烧录。</p>
                        <img src="@/assets/img/25.png">
                        <img src="@/assets/img/26.png">
                        <img src="@/assets/img/27.png">
                        <img src="@/assets/img/28.png">
                    </li>
                </ul>
            </div>
        </section>

        <section class="advantages">
            <div class="wrap">
                <Title3 :data="section3"></Title3>
                <ul class="content">
                    <!-- 服务优势 -->
                    <li :class="{show: section3.activeId == 0}">
                        <ul class="clearfix">
                            <li>
                                <img src="@/assets/img/29.png">
                                <p>分销与烧录一站式服务</p>
                            </li>
                            <li>
                                <img src="@/assets/img/30.png">
                                <p>快速开发烧录渠道</p>
                            </li>
                            <li>
                                <img src="@/assets/img/31.png">
                                <p>恒温恒湿，十万级净化车间</p>
                            </li>
                            <li>
                                <img src="@/assets/img/32.png">
                                <p>ESD接地与设备接地双系统</p>
                            </li>
                            <li>
                                <img src="@/assets/img/33.png">
                                <p>央企知识产权更安全</p>
                            </li>
                        </ul>
                    </li>

                    <!-- 设备优势 -->
                    <li :class="{show: section3.activeId == 1}">
                        <ul class="clearfix">
                            <li>
                                <img src="@/assets/img/34.png">
                                <p class="title">IPS-7000<br>全自动高速编程</p>
                                <p>1、最大可以搭载9台最新开发完成的程序编程烧录器A8000、各烧录器可独自完成各项操作，校验速度比原有设备快40%；</p>
                                <p>2、可满足Tray/Tape/Tube盖章打点需求。</p>
                            </li>
                            <li>
                                <img src="@/assets/img/35.png">
                                <p class="title">AP8000<br>手动高速烧录设备</p>
                                <p>1、高性能AP8000搭载全新设计的业界最先进的编程技术。</p>
                                <p>2、内嵌高速FPG，带宽最快可超过1.6Gb/Sec，支持以IC允许的最大速度进行编程。</p>
                            </li>
                            <li>
                                <img src="@/assets/img/36.png">
                                <p class="title"><br>昂科/Elnec烧录座</p>
                                <p>通用烧录座</p>
                            </li>
                            <li>
                                <img src="@/assets/img/37.png">
                                <p class="title"><br>载带</p>
                                <p>1、卷带包装，IC专用载带晶体管专用载带、贴片LED专用载带、贴片电感专用载带、综合类SMD载带、贴片电容专用载带、SMT连接器专用载带、PS载带</p>
                                <p>2、适用产品范围广，规格变换容易。</p>
                            </li>
                        </ul>
                    </li>

                    <!-- 渠道优势 -->
                    <li :class="{show: section3.activeId == 2}" class="clearfix">
                        <div class="fl">
                            <p>对于一些新型IC，市场上可烧录设备比较少，依赖于原厂开发工具或在线烧录，产能比较低，而我们的设备开发厝期较国际品牌开发周期缩短一半时间，为客户提供定制自动化烧录开发。</p>
                        </div>
                        <div class="fr">
                            <img src="@/assets/img/38.png">
                        </div>
                    </li>
                </ul>
            </div>
        </section>

        <section class="support">
            <div class="wrap">
                <Title3 :data="section4"></Title3>
                <ul>
                    <li>
                        <a href="javascript:;">
                            <img src="@/assets/img/39.png">
                            <img class="to" src="@/assets/img/41.png">
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <img src="@/assets/img/40.png">
                            <img class="to" src="@/assets/img/41.png">
                        </a>
                    </li>
                </ul>
            </div>
        </section>

        <Need defaultType="1"></Need>
    </div>
</template>

<script>
    import Header2 from "../../components/Header/Header2";
    import Title3 from "../../components/Title/Title3";
    import Need from "../../components/Need/Need";

    export default {
        name: "programmed",
        data(){
            return {
                section2: {
                    title: '我们的服务',
                    titleEn: 'OUR SERVICES',
                    tabbar: ['IC烧录测试', '转换包装', '激光镭射', '模块烧录'],
                    activeId: 0
                },
                section3: {
                    title: '我们的优势',
                    titleEn: 'OUR ADVANTAGES',
                    tabbar: ['服务优势', '设备优势', '渠道优势'],
                    activeId: 0
                },
                section4: {
                    title: '支援清单',
                    titleEn: 'TO SUPPORT THE LISTING',
                    tabbar: [],
                    activeId: 0
                },
            }
        },
        components: {
            Header2,
            Title3,
            Need
        }
    }
</script>

<style src="./programmed.scss" lang="scss" scoped></style>