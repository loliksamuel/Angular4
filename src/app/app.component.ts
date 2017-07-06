import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    counter   :number       = 1;
    title     :string       = 'app';
    firstName :string       = 'sam';
    lastName  :string       = 'Car';
    city      :string       = 'TLV';
    skills    =["java", "javascript", "angular", "spring", "spring boot", "jhipster"];
    isMarried :boolean      = false;
    age       :number       =   20;

    //event binding
    onButtonClick(){
      this.title  = this.title  + this.counter++;
    }

    //event binding
    onCheckboxClick(){
      this.isMarried = !this.isMarried;
    }
}
