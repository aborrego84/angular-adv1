import { Component } from '@angular/core';

@Component({
  selector: 'app-incrementator',
  templateUrl: './incrementator.component.html',
  styles: [
  ]
})
export class IncrementatorComponent {
  progress:number = 50;
  get getPorcent(){
    return `${this.progress}%`;
  }
  changeValue (value:number){
    this.progress +=value;
    if(this.progress<0)
      this.progress =0;
    if(this.progress>100)
      this.progress =100;
  }
}
