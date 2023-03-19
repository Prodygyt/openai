import { Component } from '@angular/core';
import { Textdavinciedit001Service } from '../services/textdavinciedit001.service';

@Component({
  selector: 'app-textdavinciedit001',
  templateUrl: './textdavinciedit001.component.html',
  styleUrls: ['./textdavinciedit001.component.css']
})
export class Textdavinciedit001Component {
  constructor(private textdavinciedit001: Textdavinciedit001Service) { }

  ngOnInit(): void {
  }

  input : string = "";
  instruction : string = "";
  result : string = "";

  postCompletition() {
    let my_input = this.input
    let my_instruction = this.instruction

    var payload = {
      model: "text-davinci-edit-001",
      input: my_input,
      instruction: my_instruction,
    }

    this.textdavinciedit001.postCompletion(payload)
    .subscribe((data: any) => {
      //alert(JSON.stringify(data));
      console.log(data);
      this.result = data.choices[0].text;
    })

  }
}
