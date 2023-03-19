import { Component } from '@angular/core';
import { ImagesgenerationService } from '../services/imagesgeneration.service';

@Component({
  selector: 'app-imagesgeneration',
  templateUrl: './imagesgeneration.component.html',
  styleUrls: ['./imagesgeneration.component.css']
})
export class ImagesgenerationComponent {

  constructor(private imagesgeneration: ImagesgenerationService) { }

  ngOnInit(): void {
  }

  request : string = "";
  result : string = "";

  postCompletition() {
    let myprompt = this.request


    this.imagesgeneration.generateImage(myprompt)
    .subscribe((data: any) => {
      //alert(JSON.stringify(data));
      console.log(data);
      const imageURL = data.data[0].url;
      this.result = imageURL
    })

  }

}
