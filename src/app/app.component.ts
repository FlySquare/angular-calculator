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
    if(this.processOne === undefined) {
      this.text = this.text !== '0' ? this.text + '' + number : number;
    }else{
      this.text = number;
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
    alert('plus');
  }

  minus() {
    alert('minus');
  }

  multiply() {
    alert('multiply');
  }

  divide() {
    alert('divide');
  }

  percent() {
    alert('percent');
    this.processOne = Number(this.text)/100;
    this.text = this.processOne.toString();
  }

  total() {
    alert('total');
  }

  clear() {
    this.text = '0';
    this.itIsPositive = true;
  }
}
