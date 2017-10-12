import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

import { Product } from '../../shared/product.model';

@Component({
  selector: 'app-register-item',
  templateUrl: './register-item.component.html',
  styleUrls: ['./register-item.component.styl']
})
export class RegisterItemComponent implements OnInit {

  @Input() product: Product;
  @Input() productCount: number = 0;
  @Output() purchaseProduct: EventEmitter<any> = new EventEmitter();
  @Output() cancelProduct: EventEmitter<any> = new EventEmitter();

  public isSale: Boolean = false;

  constructor() { }

  ngOnInit() {
  }
  assetsPath(name: string) {
    if (name.includes('_sale')) {
      this.isSale = true;
      name = name.replace('_sale', '');
    }
    const path = `../../../../assets/images/${name}.jpg`;
    return path;
  }

  private defaultTop = 80
  public productItemStyles = { 'top.px': this.defaultTop };
  private startY: number = 0;
  private isRelease: Boolean = false;
  onTouchStart($event) {
    this.startY = $event.changedTouches[0].pageY;
    this.isRelease = false;
  }
  onTouchMove($event) {
    const top = this.defaultTop + $event.changedTouches[0].pageY - this.startY;
    this.productItemStyles = { 'top.px': top };
  }
  onTouchEnd($event) {
    const diff = $event.changedTouches[0].pageY - this.startY;
    if (diff > 50) {
      this.purchaseProduct.emit(this.product);
    }
    if (diff < -50) {
      this.cancelProduct.emit(this.product);
    }
    this.isRelease = true;
    this.productItemStyles = { 'top.px': this.defaultTop };
  }

}
