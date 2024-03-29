
window.onload = () =>{

    const {createApp, ref, reactive, computed, watch, onMounted , onUpdated} = Vue
    const App = {

        setup(){
            const MainCont = ref('index')
            const HeaderCont = ref('各科介紹')
            const navIsCont = ref('各科介紹')

            const PageContData = reactive({data:[
                {idx:0,key:'index',   mainIs:'index', headerIs:'各科介紹', navIs:'各科介紹'},
                {idx:1,key:'班表系統', mainIs:'最新班表',headerIs:'班表系統',navIs:'班表系統'},
                {idx:2,key:'最新班表', mainIs:'最新班表',headerIs:'班表系統',navIs:'班表系統'},
                {idx:3,key:'年度休假天數對照表', mainIs:'年度休假天數對照表',headerIs:'班表系統',navIs:'班表系統'},
                {idx:4,key:'活動花絮', mainIs:'活動花絮',headerIs:'活動花絮',navIs:''},
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





