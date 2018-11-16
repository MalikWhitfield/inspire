const url = '//bcw-getter.herokuapp.com/?url=';
const url2 = 'http://www.splashbase.co/api/v1/images/search?query=forests'
const apiUrl = url + encodeURIComponent(url2);


// @ts-ignore
const imgApi = axios.create({
	baseURL: apiUrl,
	timeout: 3000
});

export default class ImageService {
	getImage(drawImg) {
		imgApi.get('') //
		// ^^^^^^^ How do you call this function?
		console.log("Looking for a good pic")
		imgApi().then(res => {
			console.log('Image Data:', res.data)
			let index = Math.floor(Math.random() * res.data.images.length)
			drawImg(res.data.images[index])
		})
	}
}
