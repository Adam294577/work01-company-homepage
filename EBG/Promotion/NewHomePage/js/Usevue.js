
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

            return{
                IndexPage,
                handIndexPage,

                BulletinBoardsBool,
                BulletinBoardsTitle,
                handBulletinBoardsTitle,
            }   
        },

    }
    createApp(App).mount("#app")     

}





