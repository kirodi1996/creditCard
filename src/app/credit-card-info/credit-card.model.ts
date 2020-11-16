export class CreditCard {
  constructor(
    public creditCardNumber: string,
    public cardHolder: string,
    public expirationDate: Date,
    public securityCode: string,
    public amount: number
  ) { }
}
