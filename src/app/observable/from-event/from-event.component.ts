import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { CommonService } from 'src/app/core/common.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss'],
})
export class FromEventComponent implements OnInit, AfterViewInit {
  @ViewChild('addBtn') addBtn!: ElementRef;
  constructor(private _common: CommonService) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    let count = 1;
    fromEvent(this.addBtn.nativeElement, 'click').subscribe((res) => {
      let str = 'Video' + count++;
      console.log(str);
      this._common.addElement(str, 'containerBox');
      this._common.addElement(str, 'containerBox2');
    });
  }
}
