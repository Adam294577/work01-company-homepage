
window.onload = () =>{

    const {createApp, ref, reactive, computed, watch, onMounted , onUpdated} = Vue
    const App = {

        setup(){
            const IndexPage = ref('index')
            const handIndexPage = (el = null , key, callback = null )=> {
                IndexPage.value = key
                if(key === '各處公告欄'){
                    BulletinBoardsTitle.value  = callback
                }
                console.log(IndexPage.value);
            }

            const BulletinBoardsTitle = ref('')
            return{
                IndexPage,
                handIndexPage,
                BulletinBoardsTitle
            }   
        },

    }
    createApp(App).mount("#app")     

}


