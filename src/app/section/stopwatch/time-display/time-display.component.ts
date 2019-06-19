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

    this.timeStop();
    this.timeInterval = setInterval(() => {
      if ( this.ms > 100 ) {
        this.ms = 0;
        this.sec++;
      }

      if ( this.sec > 60) {
        this.sec = 0;
        this.min++;
      }
      this.ms++;
    }
    ,10)

  }

  timeStop() {
    clearInterval(this.timeInterval)
  }

  timeReset() {
    this.timeStop();
    this.ms = 0;
    this.sec = 0;
  }

  ngOnInit() {
    console.log('ng on init')
  }

  ngDoCheck() {
    console.log('ng do check')
  }

  ngAfterContentInit() {
    console.log('ng after content init')
  }

  ngAfterContentChecked() {
    console.log('ng after content checked')
  }

  ngAfterViewInit() {
    console.log('ng after view init')
  }

  ngAfterViewChecked() {
    console.log('ng after view checked')
  }

  ngOnDestroy() {
    console.log('destroy')
  }


}
