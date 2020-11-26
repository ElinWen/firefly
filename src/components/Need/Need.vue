<template>
    <div>
        <section>
            <div class="demand-box">
                <div class="fl">
                    <p>联系我们</p>
                    <p><i class="iconfont iconicon-20"></i>{{contact[type-1].name}}</p>
                    <p>{{contact[type-1].phone}}</p>
                    <p>{{contact[type-1].tel}}</p>
                    <p>{{contact[type-1].email}}</p>
                </div>
                <form id="ffForm" class="fr" @submit.prevent="submitForm">
                    <p>提交需求</p>
                    <div class="input-box">
                        <label>服务类型</label>
                        <div class="radio-box">
                            <input type="radio" v-model="type" value="1" id="1"><label for="1">烧录</label>
                            <input type="radio" v-model="type" value="2" id="2"><label for="2">PCB打样</label>
                            <input type="radio" v-model="type" value="3" id="3"><label for="3">测试及技术整改</label>
                            <input type="radio" v-model="type" value="4" id="4"><label for="4">实验室租赁</label>
                        </div>
                    </div>
                    <div class="input-box">
                        <label for="name"><span style="color: red">*</span>姓名</label>
                        <input type="text" placeholder="请输入姓名" id="name" v-model.trim="userName" autocomplete="off">
                        <p class="err">{{userNameErr}}</p>
                    </div>
                    <div class="input-box">
                        <label for="phone"><span style="color: red">*</span>手机号</label>
                        <input type="tel" placeholder="请输入手机号" id="phone" v-model.trim="mobile" maxlength="11" autocomplete="off">
                        <p class="err">{{mobileErr}}</p>
                    </div>
                    <div class="input-box">
                        <label for="email"><span style="color: red">*</span>邮箱</label>
                        <input type="email" placeholder="请输入邮箱" id="email" v-model.trim="email" autocomplete="off">
                        <p class="err">{{emailErr}}</p>
                    </div>
                    <div class="input-box">
                        <label for="company"><span style="color: red">*</span>公司名称</label>
                        <input type="text" placeholder="请输入公司名称" id="company" v-model.trim="companyShortname" autocomplete="off">
                        <p class="err">{{companyShortnameErr}}</p>
                    </div>
                    <div class="input-box">
                        <label for="need"><span style="color: red">*</span>需求描述</label>
                        <textarea placeholder="请输入需求描述" id="need" v-model="content" autocomplete="off"></textarea>
                        <p class="err">{{contentErr}}</p>
                    </div>
                    <button type="submit">提交</button>
                </form>
            </div>

            <Popup :type="popUpType" @close="popUpType = 0"></Popup>

        </section>
    </div>
</template>

<script src="./Need.js"></script>

<style src="./Need.scss" lang="scss" scoped></style>