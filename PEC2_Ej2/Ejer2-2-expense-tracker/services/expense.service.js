/** 
 * @Class Servicio
 * Gestiona las operaciones sobre el modelo
*/

class TransactionService {
  constructor() {
    this.transactions = (JSON.parse(localStorage.getItem("transactions")) || []).map(
      transaction => new Transaction(transaction)
    );
  }

  bindTransactionListChanged(callback) {
    this.onTransactionListChanged = callback;
  }

  _commit(transactions) {
    this.onTransactionListChanged(transactions);
    //Actualiza las transacciones en localStorage
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }

  addTransaction(text, amount){
    this.transactions.push(new Transaction({ text, amount }));

    this._commit(this.transactions);
  }

  removeTransaction(_id){
    this.transactions = this.transactions.filter(({ id }) => id != _id);

    this._commit(this.transactions);
  }

  editTransaction(id, updatedValue){
    this.transactions = this.transactions.map(transaction =>
      transaction.id == id ? new Transaction({...transaction, amount: updatedValue }) : transaction
    );

    this._commit(this.transactions);
  }
} 