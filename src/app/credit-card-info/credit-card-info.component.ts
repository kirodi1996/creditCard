import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CreditCard } from './credit-card.model';
import { DtoService } from './dto-service.service';

@Component({
  selector: 'app-credit-card-info',
  templateUrl: './credit-card-info.component.html',
  styleUrls: ['./credit-card-info.component.scss']
})
export class CreditCardInfoComponent implements OnInit, OnDestroy {

  creditCardForm: FormGroup = new FormGroup({
    cardNumber: new FormControl('', [Validators.required]),
    cardHolderName: new FormControl('', [Validators.required]),
    expiryDate: new FormControl('', [Validators.required]),
    cvv: new FormControl(''),
    price: new FormControl('', [Validators.required, Validators.pattern("^[1-9][0-9]*$")])

  })
  creditCardData: CreditCard;
  todayDate: Date = new Date();
  cardInfoSubscription$: Subscription;
  showSuccess: boolean = false;
  showError: boolean = false;
  loading: boolean = false;
  constructor(private dtoService: DtoService) { }

  ngOnInit() {
    this.todayDate.setMonth(this.todayDate.getMonth() - 1)
  }

  saveData(): void {
    this.loading = true;
    this.showSuccess = this.showError = false;
    let cardInfo: CreditCard = new CreditCard(
      this.creditCardForm.controls.cardNumber.value,
      this.creditCardForm.controls.cardHolderName.value,
      this.creditCardForm.controls.expiryDate.value,
      this.creditCardForm.controls.cvv.value,
      this.creditCardForm.controls.price.value
    )
    this.cardInfoSubscription$ = this.dtoService.storeCardInfo(cardInfo).subscribe(resp => {
      this.showSuccess = true;
      this.loading = false;
    }, err => {
      this.showError = true;
      this.loading = false;
    })
  }

  ngOnDestroy() {
    this.cardInfoSubscription$ && this.cardInfoSubscription$.unsubscribe();
  }
}
