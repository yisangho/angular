import { Component, OnInit, Input, SimpleChange } from '@angular/core';
import { PageToggleService } from 'src/app/share/page-toggle.service';

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.css'],
  // providers: [
  //   PageToggleService
  // ]
})
export class TimeDisplayComponent implements OnInit {

  @Input() inputData: string;

  
  min:number = 0
  sec:number = 0
  ms:number = 0

  timeInterval

  constructor(
    private pageToggleService: PageToggleService
  ) { 

    console.log(this.inputData);

  }

  timeStart() {
    this.pageToggleService.plusCount();

    this.timeStop();
    this.timeInterval = setInterval(() => {
      this.ms++;
    }
    ,10)
    clearInterval()
  }

  timeStop() {
    clearInterval(this.timeInterval)
  }

  timeReset() {
    this.timeStop();
    this.ms = 0;
  }

  // ngOnChanges(changes: SimpleChange) {
  //   console.log(changes);
  //   for(let propName in changes) {
  //     if(propName == 'inputData') {

  //       switch(changes[propName].currentValue) {
  //         case 'start':
  //         this.timeStart();
  //         break;

  //         case 'stop':
  //         this.timeStop();
  //         break;

  //         case 'reset':
  //           this.timeReset();
  //           break;

  //       }
  //     }
  //   }
  // }

  ngOnInit() {



  }

}
