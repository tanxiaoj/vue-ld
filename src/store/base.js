import axios form 'axios'

const HOST = 'http://api.51ledong.com:8081/ledong-p2c-webapps-wwwp';

export default function (url, params) {

	axios.post(url, params).then(function (response) {
	    console.log(response);
	}).catch(function (error) {
	    console.log(error);
	});
}