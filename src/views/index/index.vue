<template>
    <div>
        <Header></Header>

        <section>
            <Title1>
                <template v-slot:h1>模块&板卡</template>
                <template v-slot:shadow>MODULE & BOARD</template>
            </Title1>
            <div class="content">
                <ul class="category clearfix">
                    <li v-for="(item, index) in category" :key="index"><a :href="item.href"><span class="fl">{{item.name}}</span><span class="fr">({{item.count}})</span></a></li>
                </ul>
                <div>
                    <Title2 url="https://www.baidu.com">
                        <template v-slot:left>产品推荐</template>
                        <template v-slot:right >更多推荐></template>
                    </Title2>
                    <ul class="pro-list clearfix">
                        <li v-for="(item, index) in proList" :key="index">
                            <a class="img" :href="item.href" target="_blank"><img onerror="this.src='/assets/images/pro/pro_200_200.png'" :src="item.img"></a>
                            <a class="name" :href="item.href" target="_blank">{{item.name}}</a>
                            <p class="desc">{{item.desc}}</p>
                            <p class="price">{{item.price}}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <section class="grey">
            <Title1>
                <template v-slot:h1>工程服务</template>
                <template v-slot:shadow><span style="color:white">ENGINEERING SERVICES</span></template>
            </Title1>
            <div class="content">
                <ul class="services clearfix">
                    <li>
                        <router-link to="/programmed">
                            <p>烧录</p>
                            <p>萤火工场烧录车间位于广东虎门保税仓，是以汽车电子为主的十万级净化无尘车间，车间配有全自动化烧录产线、小批量手动烧录产线及转包装产线等。设备与人工接地线区分接地，车间配备独立空调系统24小时恒定温湿度，给予芯片更安全的生产环境。</p>
                            <p>查看详情</p>
                        </router-link>
                    </li>
                    <li>
                        <a href="/firefly/pcb.jhtml" target="_blank" title="PCB设计及制样">
                            <p>PCB设计及制样</p>
                            <p>萤火工场PCBA基地位于松山湖科技二路5号中国电子产业园，提供PCB 设计，样板贴片，BOM物料配套。</p>
                            <p>查看详情</p>
                        </a>
                    </li>
                    <li>
                        <a href="/firefly/technology.jhtml" target="_blank" title="测试及技术整改">
                            <p>测试及技术整改</p>
                            <p>萤火工场提供EMC/EMI整改服务，电磁干扰(EMI)问题整改服务，电磁抗干扰(EMS)问题整改服务，SI设计和layout技术服务。</p>
                            <p>查看详情</p>
                        </a>
                    </li>
                    <li>
                        <a href="/firefly/lease.jhtml" target="_blank" title="实验室租赁">
                            <p>实验室租赁</p>
                            <p>萤火实验室设备根据技术应用分为射频实验室、无线连接实验室、音频实验室、环境实验室四个实验室能够为相关应用做技术服务。</p>
                            <p>查看详情</p>
                        </a>
                    </li>
                </ul>
            </div>
        </section>

        <section>
            <Title1>
                <template v-slot:h1>萤火学堂课程</template>
                <template v-slot:shadow>FIREFLY SCHOOL COURSE</template>
            </Title1>
            <div class="content class">
                <div class="intro clearfix">
                    <div>
                        <p>中电港萤火学堂是电子工程师能力提升的首选平台，它贯穿产业链条，打通了线上线下壁垒，提供一站式学习IC技术应用和行业设计技能，致力成为国内电子信息技术应用实践教育的领跑者。</p>
                        <p class="bold">课程合作</p>
                        <p>萤火学堂-经理：Jacky</p>
                        <p>jacky.deng@cecport.com</p>
                    </div>
                </div>

                <div>
                    <Title2 url="https://www.baidu.com">
                        <template v-slot:left>课程分类</template>
                        <template v-slot:right >更多分类></template>
                    </Title2>
                    <ul class="clearfix list">
                        <li><a href="/firefly/school.jhtml?tabbarId=EmbeddedFoundation" target="_blank" title="嵌入式基础"><span>嵌入式基础</span></a></li>
                        <li><a href="/firefly/school.jhtml?tabbarId=ConsumerElectronics" target="_blank" title="消费电子"><span>消费电子</span></a></li>
                        <li><a href="/firefly/school.jhtml?tabbarId=InformationSafety" target="_blank" title="信息安全"><span>信息安全</span></a></li>
                        <li><a href="/firefly/school.jhtml?tabbarId=InternetOfThings" target="_blank" title="物联网"><span>物联网</span></a></li>
                        <li><a href="/firefly/school.jhtml?tabbarId=AutomotiveElectronics" target="_blank" title="汽车电子"><span>汽车电子</span></a></li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
</template>

<script src="./index.js"></script>

<style src="./index.scss" lang="scss" scoped></style>