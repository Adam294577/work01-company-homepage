
window.onload = () =>{

    const {createApp, ref, reactive, computed, watch, onMounted , onUpdated} = Vue
    const App = {

        setup(){
            const IndexPage = ref('index')
            const handIndexPage = (el = null , key, callback = null )=> {
                IndexPage.value = key
            }
            const BulletinBoardsTitle = ref('')
            const BulletinBoardsBool  = ref(false)
            const handBulletinBoardsTitle = (el = null , key ) =>{
                if(key === 'clear'){
                    ClearBulletinBoards()
                    return
                }
                if(BulletinBoardsTitle.value !== '' && BulletinBoardsBool.value){
                    BulletinBoardsTitle.value = key
                    return
                }
                if(BulletinBoardsTitle.value === '' && !BulletinBoardsBool.value){
                    BulletinBoardsTitle.value = key
                    BulletinBoardsBool.value = true
                }
            }
            const ClearBulletinBoards = ()=>{
                BulletinBoardsTitle.value = ''
                BulletinBoardsBool.value = false
            }
            // 網址轉到服規內容
            const pushWindowSearch = (el = null ,key) => {
                if(key === ""){
                    window.open(`./服務規劃處_index.html`)
                }else{
                    window.open(`./服務規劃處_index.html?cont=${key}`)
                }
                
            }
            

            return{
                IndexPage,
                handIndexPage,

                BulletinBoardsBool,
                BulletinBoardsTitle,
                handBulletinBoardsTitle,
                pushWindowSearch,
            }   
        },

    }
    createApp(App).mount("#app")     

}





