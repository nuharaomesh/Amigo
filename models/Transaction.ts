export default class Transaction {
  userID!: string;
  amount!: string;
  category!: string;
  type!: string;
  note!: string;

  constructor(
    userID: string,
    amount: string,
    category: string,
    type: string,
    note: string
  ) {
    this.userID = userID;
    this.amount = amount;
    this.category = category;
    this.type = type;
    this.note = note;
  }
}
