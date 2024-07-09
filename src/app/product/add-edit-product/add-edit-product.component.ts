import { Component, Input, input, OnInit, Output,EventEmitter,OnChanges, SimpleChanges} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { title } from 'process';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { ProductService } from '../../product.service';
import { log } from 'console';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { Message } from 'primeng/api';


@Component({
  selector: 'add-edit-product',
  standalone: true,
  imports: [DialogModule,ButtonModule,InputTextModule,InputTextareaModule,InputNumberModule,ReactiveFormsModule],
  templateUrl: './add-edit-product.component.html',
  styleUrl: './add-edit-product.component.css'
})
export class AddEditProductComponent implements OnInit,OnChanges{
  constructor(private fb:FormBuilder,private proSrvice:ProductService){}

  messages: Message[] | undefined;

  @Input() displayAddModal:boolean=true;
  @Output() clickClose : EventEmitter<boolean>=new EventEmitter<boolean>();
  @Output() dataTosend : EventEmitter<any>=new EventEmitter<any>
  @Input() isSlectedData:any=null;
  modalType='Add'
  productForm=this.fb.group({
    title:['',Validators.required],
    price:['',Validators.required],
    description:["",Validators.required],
    category:["",Validators.required],
    image:["",Validators.required]
  })
  ngOnInit(): void {

  }
  closeModal(){
this.clickClose.emit(true);
  }
  addProduct(){
this.proSrvice.AddEditproduct(this.productForm.value,this.isSlectedData).subscribe(res=>{
  console.log(res);
  this.dataTosend.emit(res);
  this.closeModal();

  const msg=this.modalType === 'Add' ? 'product added' : 'updated';
  this.messages = [{ severity: 'info', detail: msg }];

  // this.productForm.reset(); 
  // this.clickClose.emit(true);

},
error=>{
this.messages = [{ severity: 'info', detail: 'error' }];
console.log("error ocured")


})
  }
  ngOnChanges(): void {
    if(this.isSlectedData){
      this.modalType='Edit'
    this.productForm.patchValue(this.isSlectedData);
    }
    else{
      this.productForm.reset();
      this.modalType='Add'
    }
      }
}
