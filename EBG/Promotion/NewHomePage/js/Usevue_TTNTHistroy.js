
window.onload = () =>{

    const {createApp, ref, reactive, computed, watch, onMounted , onUpdated} = Vue
    const App = {

        setup(){
            const YearIs = ref(2023)
            const handYearIs = (el=null, key) => YearIs.value = key
            const HistoryData = reactive({data:[
                {year:2024 ,date:'',title:'',url:'#'},
                {year:2023 ,date:'112/10/17',title:'2023/10月客服小棧CAFÉ主題調查問卷',url:'#'},
                {year:2023 ,date:'112/10/05',title:'2023年工作智慧王名單出爐囉!!',url:'https://ccweb-tpweb.tcs.com.tw/公佈欄/服務規劃處/網站規劃暨語音管理科/homepage/工作智慧王提案/index_2023.htm'},
                {year:2023 ,date:'112/08/25',title:'【2024年度訓練需求問卷調查~活動開跑】填卷期間8/28~9/03《同 仁 版》',url:'#'},
                {year:2023 ,date:'112/08/25',title:'【2024年度訓練需求問卷調查~活動開跑】填卷期間8/28~9/03《主 管 版》',url:'#'},
                {year:2023 ,date:'112/08/23',title:'2023/08月預選休主題調查問卷',url:'#'},
                {year:2023 ,date:'112/04/27',title:'【勞安室公告】2023/5/1疫後健康新生活',url:'https://ccweb-tpweb.tcs.com.tw/公佈欄/勞工安全衛生管理室/homepage/Document/COVID-19/20230427.html'},
                {year:2023 ,date:'112/03/13',title:'【勞安室公告】2023/03/13起調整公司防疫措施',url:'https://ccweb-tpweb.tcs.com.tw/公佈欄/勞工安全衛生管理室/homepage/Document/COVID-19/20230313.html'},
                {year:2023 ,date:'112/02/21',title:'【服規活動】分享，原來是件簡單又快樂的事(義賣活動)，歡迎同仁至湯城10F選購',url:'#'},
                {year:2023 ,date:'112/02/14',title:'【勞安室公告】2023/02/20起調整公司防疫措施',url:'https://ccweb-tpweb.tcs.com.tw/公佈欄/勞工安全衛生管理室/homepage/Document/COVID-19/20230214.html'},
                {year:2023 ,date:'112/02/08',title:'【勞安室公告】2023台灣大員工健康檢查公告-敬請配合填寫「員工-健檢調查表」',url:'https://ccweb-tpweb.tcs.com.tw/Health/index.html'},
                {year:2023 ,date:'112/01/19',title:'【勞安室公告】春節假期期間防疫通報說明',url:'https://ccweb-tpweb.tcs.com.tw/公佈欄/勞工安全衛生管理室/homepage/Document/COVID-19/20230119.html'},
                {year:2022 ,date:'111/12/27',title:'2022員工滿意度調查',url:'#'},
                {year:2022 ,date:'111/11/14',title:'【勞安室公告】2022/11/14起調整公司防疫措施',url:'https://ccweb-tpweb.tcs.com.tw/公佈欄/勞工安全衛生管理室/homepage/Document/COVID-19/20221114.html'},
                {year:2022 ,date:'111/10/31',title:'【勞安室公告】2022/11/07起調整公司防疫措施',url:'https://ccweb-tpweb.tcs.com.tw/公佈欄/勞工安全衛生管理室/homepage/Document/COVID-19/20221031.html'},
                {year:2022 ,date:'111/10/20',title:'【勞安室公告】新增『員工本人入境通報』防疫措施',url:'https://ccweb-tpweb.tcs.com.tw/公佈欄/勞工安全衛生管理室/homepage/Document/COVID-19/20221020.html'},
                {year:2022 ,date:'111/10/20',title:'2022年工作智慧王名單出爐囉!!',url:'https://ccweb-tpweb.tcs.com.tw/公佈欄/服務規劃處/網站規劃暨語音管理科/homepage/工作智慧王提案/index_2022.htm'},
                {year:2022 ,date:'111/08/12',title:'【勞安室公告】調整辦公室階段解封因應防疫措施，請同仁務必配合',url:'https://ccweb-tpweb.tcs.com.tw/公佈欄/勞工安全衛生管理室/homepage/Document/COVID-19/20220812.html'},
                {year:2022 ,date:'111/07/15',title:'【勞安室公告】調整辦公室階段解封因應防疫措施，請同仁務必配合',url:'https://ccweb-tpweb.tcs.com.tw/公佈欄/勞工安全衛生管理室/homepage/Document/COVID-19/20220715.html'},
                {year:2022 ,date:'111/06/27',title:'【勞安室公告】調整辦公室階段解封因應防疫措施，請同仁務必配合',url:'https://ccweb-tpweb.tcs.com.tw/公佈欄/勞工安全衛生管理室/homepage/Document/COVID-19/20220627.html'},
                {year:2022 ,date:'111/05/19',title:'【勞安室公告】更新【員工自我應變指引3.0】及【COVID-19 確診個案與接觸者疫調通報表2.0】',url:'https://ccweb-tpweb.tcs.com.tw/公佈欄/勞工安全衛生管理室/homepage/Document/COVID-19/20220519.html'},
                {year:2022 ,date:'111/05/13',title:'【勞安室公告】更新辦公室防疫管理指引8.0&Covid-19訪客管制表7.0',url:'#'},
                {year:2022 ,date:'111/05/11',title:'【勞安室公告】因應國內疫情持續升溫，請同仁務必配合相關防疫措施',url:'#'},
                {year:2022 ,date:'111/04/27',title:'【勞安室公告】隨著國內疫情持續升溫，請配合相關防疫措施',url:'#'},
                {year:2022 ,date:'111/04/12',title:'【勞安室公告】4/16~5/2期間，防疫相關注意事項',url:'#'},
                {year:2022 ,date:'111/03/31',title:'【勞安室公告】近期COVID-19疫情持續升溫，適逢清明連假將至，請同仁務必戒慎防疫',url:'#'},
                {year:2022 ,date:'111/03/31',title:'內網【好速上網專區】改版使用滿意度調查',url:'#'},
                {year:2022 ,date:'111/03/10',title:'【勞安室公告】更新辦公室防疫管理指引6.0',url:'#'},
                {year:2022 ,date:'111/03/07',title:'【勞安室公告】自3/14(一)起全公司進入後疫情時代之新常態辦公模式',url:'#'},
                {year:2022 ,date:'111/03/04',title:'【勞安室公告】調整入境防疫措施暨更新COVID-19訪客管制表6.0',url:'#'},
                {year:2022 ,date:'111/02/22',title:'【勞安室公告】COVID-19防疫措施階段性解封因應措施',url:'#'},
                {year:2022 ,date:'111/02/16',title:'【勞安室公告】居家上班展延至2/28',url:'#'},
                {year:2022 ,date:'111/01/21',title:'111/1/21 因應Omicron疫情延燒，提升公司相關防疫措施',url:'#'},
                {year:2022 ,date:'111/01/16',title:'111/1/17 因應桃園機場Omicron疫情延燒，提升公司相關防疫措施',url:'#'},
                {year:2022 ,date:'111/01/10',title:'111/1/10 因應桃園機場Omicron變異株感控擴大，提升公司相關防疫措施',url:'#'},
                {year:2022 ,date:'111/01/07',title:'【勞安室公告】新增春節入境A方案之相關防疫措施配合',url:'#'},
                {year:2021 ,date:'111/12/15',title:'【勞安室公告】新增春節入境方案之相關防疫措施',url:'#'},
                {year:2021 ,date:'111/11/26',title:'內網【帳務資訊】改版使用滿意度調查',url:'#'},
                {year:2021 ,date:'111/11/24',title:'台客最佳Disney+代言人活動開跑',url:'#'},
                {year:2021 ,date:'111/09/29',title:'2021年工作智慧王名單出爐囉!!',url:'https://ccweb-tpweb.tcs.com.tw/公佈欄/服務規劃處/網站規劃暨語音管理科/homepage/工作智慧王提案/index_2021.htm'},
                {year:2021 ,date:'111/08/11',title:'2020員工滿意度調查',url:'#'},
                {year:2021 ,date:'111/08/06',title:'【2022年度訓練需求問卷調查~活動開跑】填卷期間8/6~8/15《同 仁 版》',url:'#'},
                {year:2021 ,date:'111/08/06',title:'【2022年度訓練需求問卷調查~活動開跑】填卷期間8/6~8/15《主 管 版》',url:'#'},
                {year:2021 ,date:'111/06/28',title:'【訓練電子報 - 第37期】好速體驗案，客服搶先機',url:'https://ccweb-tpweb.tcs.com.tw/公佈欄/服務規劃處/教育訓練科/網頁/訓練電子報/202106.html'},
                {year:2021 ,date:'111/02/20',title:'大董接受併購協會專訪影片',url:'https://ccweb-tpweb.tcs.com.tw/公佈欄/服務規劃處/教育訓練科/網頁/影片/大董接受併購協會專訪影片分享.mp4'},
                {year:2021 ,date:'111/02/05',title:'【訓練電子報 - 第36期】好速機上盒/視訊盒各款功能差異',url:'https://ccweb-tpweb.tcs.com.tw/公佈欄/服務規劃處/教育訓練科/網頁/訓練電子報/202102封面.html'},
                {year:2021 ,date:'111/01/13',title:'【好速e學習】好速《機上盒/視訊盒》差異比較大公開',url:'#'},
                {year:2020 ,date:'111/11/16',title:'內網【申裝異動】改版使用滿意度調查',url:'#'},
                {year:2020 ,date:'111/10/16',title:'2020年工作智慧王名單出爐囉!!',url:'https://ccweb-tpweb.tcs.com.tw/公佈欄/服務規劃處/網站規劃暨語音管理科/homepage/工作智慧王提案/index_2020.htm'},
                {year:2020 ,date:'111/09/03',title:'【2021年度訓練需求問卷調查~活動開跑】填卷期間9/3~9/9《同 仁 版》',url:'#'},
                {year:2020 ,date:'111/09/03',title:'【2021年度訓練需求問卷調查~活動開跑】填卷期間9/3~9/9《主 管 版》',url:'#'},
                {year:2020 ,date:'111/06/17',title:'內網【標準作業】改版使用滿意度調查',url:'#'},
                {year:2020 ,date:'111/04/24',title:'【訓練電子報 - 第33期】好速學習專區，學習的好工具!!',url:'https://ccweb-tpweb.tcs.com.tw/公佈欄/服務規劃處/教育訓練科/網頁/訓練電子報/202004.html'},
                {year:2020 ,date:'111/04/23',title:'【好速e學習】銷售達人分享',url:'#'},
                {year:2020 ,date:'111/03/05',title:'台灣大哥大-總經理的話',url:'#'},
                {year:2020 ,date:'111/01/20',title:'【訓練電子報 - 第32期】新年新計劃~就從今天開始!',url:'https://ccweb-tpweb.tcs.com.tw/公佈欄/服務規劃處/教育訓練科/網頁/訓練電子報/202001封面.html'},
            ]})
            HistoryDataRender = computed(()=>{
                let year = YearIs.value
                let data = HistoryData.data
                let result = []
                result = data.filter(item=>{
                    if(year === item.year) return item
                })
                return result
            })

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
                YearIs,
                handYearIs,
                HistoryDataRender,
                // 收尋功能
                SearchWordInput,
                CategorySelect,
                submitSearch                
            }   
        },

    }
    createApp(App).mount("#app")     

}





