
window.onload = () =>{

    const {createApp, ref, reactive, computed, watch, onMounted , onUpdated} = Vue
    const App = {

        setup(){
            const IndexPage = ref('index')
            const handIndexPage = (el = null , key, callback = null )=> {
                IndexPage.value = key
            }
            const MenuBlockTopic = ref('')
            const MenuBlockBool  = ref(false)
            const MenuBlockClass = ref('')
            const MenuBlockData = reactive({data:[
                {where:'各處公告欄' , className:'MenuBlockPosition_green' ,key:'專線單位', },
                {where:'各處公告欄' , className:'MenuBlockPosition_green' ,key:'後勤單位', },
                {where:'各處公告欄' , className:'MenuBlockPosition_green' ,key:'管理單位', },
                {where:'常用服務區' , className:'MenuBlockPosition_brown' ,key:'預選休', },
                {where:'應用服務網' , className:'MenuBlockPosition_blue_Repair' , key:'我要報修', },
                {where:'應用服務網' , className:'MenuBlockPosition_blue_Meeting' , key:'我要訂會議室', },
                {where:'訊息傳達站' , className:'MenuBlockPosition_purple',key:'客服問問', },
            ]})
            const handMenuBlock = (el = null , key ) =>{
                // css顯示的區塊
                MenuBlockData.data.forEach(item=>{
                    if(item.key === key) MenuBlockClass.value = item.className
                })      
                // 離開 where規定區塊時 隱藏
                if(key === 'clear'){
                    ClearMenuBlock()
                    return
                }
                // 改變區塊內容
                if(MenuBlockTopic.value !== '' && MenuBlockBool.value){
                    MenuBlockTopic.value = key
                    return
                }
                if(MenuBlockTopic.value === '' && !MenuBlockBool.value){
                    MenuBlockTopic.value = key
                    MenuBlockBool.value = true
                }
            }
            const ClearMenuBlock = ()=>{
                MenuBlockTopic.value = ''
                MenuBlockBool.value = false
                MenuBlockClass.value = ''
            }
            // 收尋功能
            const SearchWordInput = ref(null)
            const CategorySelect = ref('/TWM專區,/銷售專區,/EBG專區,/EBG-809專區,/EBG-直營諮詢,/申裝查核處,/行動網專區,/TWM專區/TWM專區/TWM專區-WEBAP/TWM專區-WEBAP-新手機資訊,/新創服務')
            const SearchFocusBool = ref(false)
            const  submitSearch = () => {
              let keyword = SearchWordInput.value.value.trim().replace(" ", "&");
              let searchCategory = CategorySelect.value;
              if (keyword !== '') {
                const searchUrl = `http://172.19.1.22/tornado/result.aspx?keyword=${encodeURIComponent(keyword)}&searchCategory=${encodeURIComponent(searchCategory)}&action=1`;
                window.open(searchUrl);
              }
            }            
            onMounted(()=>{
                SearchWordInput.value.addEventListener("focus",()=>{
                    SearchFocusBool.value = true
                })
                SearchWordInput.value.addEventListener("blur",()=>{
                    SearchFocusBool.value = false
                })
                window.addEventListener("keydown", (e) => {
                    console.log(e.keyCode,SearchFocusBool.value);
                    if (e.keyCode === 13 && SearchFocusBool.value) {
                      submitSearch();
                    }
                });
            })
            return{
                IndexPage,
                handIndexPage,

                MenuBlockBool,
                MenuBlockTopic,
                MenuBlockClass,
                handMenuBlock,
                // 收尋功能
                SearchWordInput,
                CategorySelect,
                submitSearch
            }   
        },

    }
    createApp(App).mount("#app")     

}





