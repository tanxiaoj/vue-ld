const HOST = 'http://api.51ledong.com:8081/ledong-p2c-webapps-wwwp';

export default function (url, params) {

    var promise = new Promise((resolve, reject) => {

	var res ;

	var postData = params; 
	   
		postData = (function(obj){ // 转成post需要的字符串.  
		    var str = "";  
		   
		    for(var prop in obj){  
		        str += prop + "=" + obj[prop] + "&"  
		    }  
		    return str;  

		})(postData);  

		var xhr = new XMLHttpRequest();  
		   
		xhr.open("POST", HOST+url, true);  
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");  
		xhr.onreadystatechange = function(){  
		    var XMLHttpReq = xhr;  
		    if (XMLHttpReq.readyState == 4) {  
		        if (XMLHttpReq.status == 200) {  

		            res = JSON.parse(XMLHttpReq.responseText); 

		            resolve(res.retContent)

		        }  
		    }  
		};  
		xhr.send(postData);   


  	});

	return promise ;
}