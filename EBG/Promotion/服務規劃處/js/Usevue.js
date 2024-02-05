
window.onload = () =>{

    const {createApp, ref, reactive, computed, watch, onMounted , onUpdated} = Vue
    const App = {

        setup(){
            const MainCont = ref('index')
            const HeaderCont = ref('')
            const navIsCont = ref('各科介紹')

            const PageContData = reactive({data:[
                {idx:0,key:'index',   mainIs:'index', headerIs:'', navIs:'各科介紹'},
                {idx:1,key:'各科介紹', mainIs:'專案管理科',headerIs:'各科介紹',navIs:'各科介紹'},
                {idx:1,key:'班表系統', mainIs:'最新班表',headerIs:'班表系統',navIs:'班表系統'},
                {idx:2,key:'最新班表', mainIs:'最新班表',headerIs:'班表系統',navIs:'班表系統'},
                {idx:3,key:'年度休假天數對照表', mainIs:'年度休假天數對照表',headerIs:'班表系統',navIs:'班表系統'},
                {idx:4,key:'活動花絮', mainIs:'活動花絮',headerIs:'活動花絮',navIs:''},
                {idx:5,key:'專案管理科', mainIs:'專案管理科',headerIs:'各科介紹',navIs:'各科介紹'},
                {idx:6,key:'網站暨語音科', mainIs:'網站暨語音科',headerIs:'各科介紹',navIs:'各科介紹'},
            ]})
            const handPageCont = (el = null, key)=>{
                if(HeaderCont.value === key && navIsCont.value === key) return
                PageContData.data.forEach(item=>{
                    if(item.key === key){
                        HeaderCont.value = item.headerIs
                        MainCont.value = item.mainIs
                        navIsCont.value = item.navIs
                    }
                })
            }
            

            // 剛進入頁面時 依據 window.location.search 顯示內容
            if(window.location.search !== ''){
                console.log(decodeURI(window.location.search).replace("?cont=",""));
                let searchTxt = decodeURI(window.location.search).replace("?cont=","")
                handPageCont(null , searchTxt)
            }
            return{
                MainCont,
                HeaderCont,
                navIsCont,
                handPageCont,
       
            }   
        },

    }
    createApp(App).mount("#app")     

}





