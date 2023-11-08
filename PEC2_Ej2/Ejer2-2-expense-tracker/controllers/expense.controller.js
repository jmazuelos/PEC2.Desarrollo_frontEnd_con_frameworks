/**
 * @class Controlador
 * Gestiona la conexion entre la vista y el servicio.
 *
 * @param model
 * @param view
 */
class TransactionController {
  constructor(service, view) {
    this.service = service;
    this.view = view;

    //Binding
    this.service.bindTransactionListChanged(this.onTransactionListChanged);
    this.view.bindAddTransaction(this.handleAddTransaction);
    this.view.bindRemoveTransaction(this.handleRemoveTransaction);

    //Muestra las transacciones iniciales
    this.onTransactionListChanged(this.service.transactions);
  }

  onTransactionListChanged = transactions => {
    this.view.displayTransactions(transactions);
  };

  handleAddTransaction = (transactionText, transactionValue) => {
    this.service.addTransaction(transactionText, transactionValue);
  };

  handleRemoveTransaction = id => {
    this.service.removeTransaction(id);
  };
}