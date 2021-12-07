import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent {

    name= "Samuel";
    age =33
    

    getAge(){
      return this.age
    }

    addName(){
      console.log(`Adcionado ${this.name}`);
      
      const number = Math.round(Math.random() * 100);
      this.name = "Samuel" + number;
    }

    addLastName(lastNameInput: any){
      this.name = lastNameInput.value;
      //console.log(lastNameInput.value);
    }

    changeName(event: any){
      //console.log(event)
      this.name = event.target.value;
    }


    
    isAdded = false;

    authentication(){
      console.log(`Welcome back ${this.name}`);
      this.isAdded = true;
    }

    employes = [];

    addEmployes(){
      console.log(`Adicionado ${this.name}`)
      this.isAdded = true;

      //this.employes.push(this.name);
    }



}
