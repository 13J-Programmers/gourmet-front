import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import { animations } from './animation';

@Component({
  selector: 'app-status-modal',
  templateUrl: './status-modal.component.html',
  styleUrls: ['./status-modal.component.styl'],
  animations: [
    animations
  ]
})
export class StatusModalComponent implements OnInit, OnChanges {

  @Input() isOpen: Boolean;
  @Input() time: number;
  @Output() onClose: EventEmitter<any> = new EventEmitter();
  private innerStatus = 'close';

  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.isOpen.currentValue) {
      this.innerStatus = 'open';
      const openTime = this.time ? this.time : 2000;
      setTimeout(() => {
        this.innerStatus = 'close';
      }, openTime);
      setTimeout(() => {
        this.onClose.emit(null);
      }, openTime + 100);
    }
  }
}
