import Api from '@/api/Api.js'
import Axios from 'axios'
import Cookies from 'js-cookie'

export default {
    name: 'Top',
    data(){
        return {
            keyword: '',
            width: 0,
            uname: '',
            isLogin: false,
            searchList: []
        }
    },
    created(){
        let $this = this
        Axios.get(Api.isLogin).then(function (response) {
                let data = response.data
                if(data.responseCode == 1){
                    $this.isLogin = true
                    $this.uname = Cookies.get('uname')
                }
            }).catch(function (error) {
                console.log(error);
            });
    },
    watch: {
        keyword: function(val, oldVal){
            let $this = this
            if(val.length < 2){
                $this.searchList = []
                return
            }
            Axios({
                url: Api.searchSuggestions,
                method: 'get',
                params: {
                    datatype: 0,
                    keyword: $this.keyword
                }
            }).then(function (response) {
                let data = response.data
                $this.searchList = data.returnMsgList
            });
        }
    },
    methods: {
        onSubmit(){
            if(this.width == 0){
                this.width = 200
                return
            }
            if(this.keyword.length < 2){
                alert('搜索型号不能少于2个字符！')
                return
            }
            window.location.href = Api.search+'?keywprd='+this.keyword
        },
        goToSearch(partNo){
            this.keyword = partNo
            this.searchList = []
            this.onSubmit()
        },
        onBlur(){
            this.searchList = []
        }
    }
}