import ImageService from "./image-service.js";


let _imageService = new ImageService()

function drawImg(img) {
  console.log(img)
  document.getElementById('body').style.backgroundImage = `url(${img.large_url})`
}

export default class ImageController {
  constructor() {
    _imageService.getImage(drawImg)
  }

}

