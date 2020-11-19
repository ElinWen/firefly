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
            searchList: [],
            showSearchList: false
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
            if(val.length < 4){
                $this.showSearchList = false
                $this.searchList = []
                return
            }
            Axios({
                url: '/common/search/auto_list.jhtml',
                method: 'get',
                params: {
                    datatype: 0,
                    keyword: $this.keyword
                }
            }).then(function (response) {
                let data = response.data
                $this.searchList = data.returnMsgList
                $this.showSearchList = true
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
            window.location.href = '/search/optimal/searchKey.jhtml?keywprd='+this.keyword
        },
        goToSearch(partNo){
            this.keyword = partNo
            this.showSearchList = false
            this.onSubmit()
        }
    }
}