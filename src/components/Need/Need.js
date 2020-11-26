import Api from "@/api/Api";
import Axios from 'axios';
import Popup from "@/components/Popup/Popup";

export default {
    name: "Need",
    components:{
        Popup
    },
    props: ['defaultType'],
    data(){
        return {
            contact: [
                {
                    name: '王宇',
                    phone: '156 5391 1890(微信同号)',
                    tel: '0769-28238088',
                    email: 'yu.wang@cecport.com'
                },
                {
                    name: '徐建标',
                    phone: '136 7009 1025(微信同号)',
                    tel: '',
                    email: 'tsuikp@cecport.com'
                },
                {
                    name: '徐建标',
                    phone: '136 7009 1025(微信同号)',
                    tel: '',
                    email: 'tsuikp@cecport.com'
                },
                {
                    name: '张轩轩',
                    phone: '150 1947 6721(微信同号)',
                    tel: '',
                    email: 'xuanxuan.zhang@cecport.com'
                }],

            //表单字段
            type: 1,
            userName: '',
            mobile: '',
            email: '',
            companyShortname: '',
            content: '',

            //表单提示
            userNameErr: '',
            mobileErr: '',
            emailErr: '',
            companyShortnameErr: '',
            contentErr: '',

            //弹窗：0为隐藏，1为成功，2为失败
            popUpType: 0
        }

    },

    created(){
        this.type = this.defaultType
    },

    methods: {
        submitForm(){
            let flag = true

            //校验用户名
            if(this.userName == ''){
                this.userNameErr = '请输入用户名'
                flag = false
            }else{
                this.userNameErr = ''
            }

            //校验手机号
            if(this.mobile == ''){
                this.mobileErr = '请输入手机号'
                flag = false
            }else if(!/^[1][3,4,5,7,8][0-9]{9}$/.test(this.mobile)){
                this.mobileErr = '请输入正确的手机号'
                flag = false
            }else{
                this.mobileErr = ''
            }

            //校验邮箱
            let regEmail = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
            if(this.email == ''){
                this.emailErr = '请输入邮箱'
                flag = false
            }else if(!regEmail.test(this.email)){
                this.emailErr = '请输入正确的邮箱'
                flag = false
            }else{
                this.emailErr = ''
            }

            //校验公司
            if(this.companyShortname == ''){
                this.companyShortnameErr = '请输入公司名'
                flag = false
            }else{
                this.companyShortnameErr = ''
            }

            //校验需求
            if(this.content == ''){
                this.contentErr = '请输入公司名'
                flag = false
            }else{
                this.contentErr = ''
            }

            if(!flag) return

            let $this = this
            Axios({
                url: Api.need,
                method: 'post',
                data: {
                    type: this.type,
                    mobile: this.mobile,
                    email: this.email,
                    companyShortname: this.companyShortname,
                    content: this.content
                }
            }).then(function (response) {
                let data = response.data
                if(data.responseCode == 1){
                    this.mobile = ''
                    this.email = ''
                    this.companyShortname = ''
                    this.content = ''
                    $this.popUpType = 1
                }else{
                    $this.popUpType = 2
                }
            });

        }
    },
}