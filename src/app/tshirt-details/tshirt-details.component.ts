import { EventEmitter,Component, OnInit, OnChanges, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tshirt-details',
  templateUrl: './tshirt-details.component.html',
  styleUrls: ['./tshirt-details.component.css']
})
export class TshirtDetailsComponent implements OnInit,OnChanges {

  @Input() tshirt;
  quantity;
  error=false;
  @Output() cancelevent= new EventEmitter();
  @Output() buyevent= new EventEmitter();
  ngOnChanges(): void{

  }
  buy(){
    if(this.quantity){
      if(this.quantity > this.tshirt.inStock){
        alert("not available");
      }
      else{
        this.tshirt.inStock = this.tshirt.inStock - this.quantity;
        this.buyevent.emit(this.tshirt);
      }
    }
  }
  cancel(){
    this.cancelevent.emit(false);
  }

  ngOnInit(): void{
    console.log("init");
  }
  }


