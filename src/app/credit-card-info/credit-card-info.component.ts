import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CreditCard } from './credit-card.model';
import { DtoService } from './dto-service.service';

@Component({
  selector: 'app-credit-card-info',
  templateUrl: './credit-card-info.component.html',
  styleUrls: ['./credit-card-info.component.scss']
})
export class CreditCardInfoComponent implements OnInit {
  
  creditCardForm:FormGroup=new FormGroup({
    cardNumber:new FormControl(''),
    cardHolderName:new FormControl(''),
    expiryDate: new FormControl(''),
    cvv:new FormControl(''),
    price:new FormControl('')

  })
  creditCardData:CreditCard;

  constructor(private dtoService:DtoService) {}

  creditCardNumber(eve):void{
    if(eve.target.value.length%4===0){
      this.creditCardForm.controls.cardNumber.setValue(eve.target.value+' ')
    }
  }

  ngOnInit(){}

  saveData():void{
    let cardInfo:CreditCard = new CreditCard(
      this.creditCardForm.controls.cardNumber.value,
      this.creditCardForm.controls.cardHolderName.value,
      this.creditCardForm.controls.expiryDate.value,
      this.creditCardForm.controls.cvv.value,
      this.creditCardForm.controls.price.value
    )
    this.dtoService.storeRecipes(cardInfo).subscribe(resp=>{debugger;})
  }
}