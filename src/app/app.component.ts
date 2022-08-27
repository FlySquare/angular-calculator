import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  text = '0';
  processOne: any = 0;
  processTwo: any = 0;
  lastOperation: string ;
  itIsPositive = true;

  numbers(number: any) {
    if(this.processOne === 0) {
      this.text = this.text !== '0' ? this.text + '' + number : number;
    }else{
      if(this.text !== '0'){
        this.text = this.text + '' +number;
      }else{
        this.text = number;
      }
      this.processTwo = this.text;
    }
  }

  changePositive() {
    if (this.itIsPositive) {
      this.itIsPositive = false;
      this.text = '-' + this.text;
    } else {
      this.itIsPositive = true;
      this.text = this.text.slice(1);
    }
  }

  plus() {
    if (this.processTwo === 0){
      this.lastOperation = '+';
      this.processOne = this.text;
      this.text = ''
    }else{
      this.total();
    }
  }

  minus() {
    if (this.processTwo === 0){
      this.lastOperation = '-';
      this.processOne = this.text;
      this.text = ''
    }else{
      this.total();
    }
  }

  multiply() {
    if (this.processTwo === 0){
      this.lastOperation = 'x';
      this.processOne = this.text;
      this.text = ''
    }else{
      this.total();
    }
  }

  divide() {
    if (this.processTwo === 0){
      this.lastOperation = '/';
      this.processOne = this.text;
      this.text = ''
    }else{
      this.total();
    }
  }

  percent() {
    this.processOne = Number(this.text)/100;
    this.text = this.processOne.toString();
  }

  total() {
    console.log('total');
    if (this.lastOperation === '+'){
      this.processOne = Number(this.processOne) + Number(this.text);
    }else if (this.lastOperation === 'x'){
      this.processOne = Number(this.processOne) * Number(this.text);
    }else if (this.lastOperation === '-'){
      this.processOne = Number(this.processOne) - Number(this.text);
    }else if (this.lastOperation === '/'){
      this.processOne = Number(this.processOne) / Number(this.text);
    }
    this.text = this.processOne.toString();
    this.processTwo = 0;
    console.log(this.processOne,'processOne');
    console.log(this.processTwo,'processTwo');
    console.log(this.lastOperation,'lastOperation');
  }

  clear() {
    this.text = '0';
    this.processTwo = 0;
    this.processOne = 0;
    this.lastOperation = '';
    this.itIsPositive = true;
  }
}
