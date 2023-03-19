import { Component } from '@angular/core';
import { ModerationsService } from '../services/moderations.service';

@Component({
  selector: 'app-moderations',
  templateUrl: './moderations.component.html',
  styleUrls: ['./moderations.component.css']
})
export class ModerationsComponent {

  constructor(private moderatetext: ModerationsService) { }

  ngOnInit(): void {
  }

  request : string = "";
  result : string = "";

  postCompletition() {
    let myprompt = this.request

    var payload = {
      input: myprompt
    }

    this.moderatetext.moderateContent(payload)
    .subscribe((data: any) => {
      //alert(JSON.stringify(data));
      console.log(data);
      const bool_result = data.results[0].flagged
      if(bool_result == true)
      {
        this.result = "Es ofensivo";
      }
      else
      {
        this.result = "No es ofensivo";
      }

    })

  }


}
