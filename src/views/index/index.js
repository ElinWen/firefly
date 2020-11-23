import Header from '@/components/Header/Header.vue'
import Title1 from "../../components/Title/Title1";
import Title2 from "../../components/Title/Title2";
import Section from "../../components/Section/Section";

export default {
    name: 'index',
    data(){
        return{
            category: [{
                href: "/",
                name: "其它",
                count: 67
            },
                {
                    href: "/",
                    name: "其它blabla",
                    count: 7
                },
                {
                    href: "/",
                    name: "其它啊啊啊啊啊啊",
                    count: 27
                }],
            proList: [{
                    href: "/1150/8003165182.shtml",
                    name: "物联网集成开发实践套件",
                    desc: "物联网学习套件，针对在校学生、业内工程师进行基于LoRa的物联网技术培养。通过产品化的模组，简化项目开发难度，用户可基于开发套件快速搭建LoRa物联网系统。",
                    img: "//img.iceasy.com/product/product/images/201808/ff80808162bc97b40165889c57da0351.jpg",
                    price: '￥299.00'
                },
                {
                    href: "/1150/8003165182.shtml",
                    name: "物联网集成开发实践套件",
                    desc: "物联网学习套件，针对在校学生、业内工程师进行基于LoRa的物联网技术培养。通过产品化的模组，简化项目开发难度，用户可基于开发套件快速搭建LoRa物联网系统。",
                    img: "//img.iceasy.com/product/product/images/201808/ff80808162bc97b40165889c57da0351.jpg",
                    price: ""
                },
                {
                    href: "/1150/8003165182.shtml",
                    name: "物联网集成开发实践套件",
                    desc: "物联网学习套件，针对在校学生、业内工程师进行基于LoRa的物联网技术培养。通过产品化的模组，简化项目开发难度，用户可基于开发套件快速搭建LoRa物联网系统。",
                    img: "//img.iceasy.com/product/product/images/201808/ff80808162bc97b40165889c57da035.jpg",
                    price: ""
                }]
        }
    },
    components: {
        Section,
        Header,
        Title1,
        Title2
    }
}