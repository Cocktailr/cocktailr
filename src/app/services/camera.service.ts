import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { NativeStorage } from "@ionic-native/native-storage";

@Injectable({
  providedIn: 'root'
})
export class CameraService {

  base64Image : string;
  options: CameraOptions = {
    quality: 100,
    targetHeight: 720,
    targetWidth: 720,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  constructor(private camera: Camera) {}

   takePhoto() : string {
    this.camera.getPicture(this.options).then((imageData) => {
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
      }, (err) => {
        console.error(err);
      });
    return this.base64Image;
   }
}
