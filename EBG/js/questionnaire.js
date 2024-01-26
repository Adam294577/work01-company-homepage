function questionnaire(svid) { 
	ACC_LOGIN_ID = agent_id
	// var requestURL = "https://twm.svy.do/automation/bs/api/v1/twm/referral"; //測試機
	var requestURL = "https://twm5g.cc/automation/bs/api/v1/twm/referral"; //正式機
	var dataJSON = {};
	dataJSON["svid"] = svid;
	dataJSON["uuid"] = ACC_LOGIN_ID;
	
	$.ajax({
		url: requestURL,
		data: JSON.stringify(dataJSON),
		type: "POST",
		dataType: "json",
		contentType: "application/json;charset=utf-8",
		success: function(returnData){
			console.log(returnData);
			// alert("問卷網址: " + returnData.data.data.referral_url);
            window.open(returnData.data.data.referral_url);
		},
		error: function(xhr, ajaxOptions, thrownError){
			alert("問卷顯示異常，錯誤代碼" + xhr.status + "，請聯繫相關IT人員，謝謝!");
			console.log(xhr.status);
			console.log(xhr.responseJSON);
			// console.log(xhr.responseJSON.message);
			// console.log(xhr.responseJSON.error_code);
			console.log(thrownError);
		}
	});
}
