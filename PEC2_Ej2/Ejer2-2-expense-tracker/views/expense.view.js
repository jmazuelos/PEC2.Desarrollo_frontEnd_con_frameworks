/**
 * @class Vista
 * Gestiona la pantalla de visualizacion
 */

class TransactionView {
  constructor() {
    this.app = this.getElement("#root");
    this.title = this.createElement("h2");
    this.title.textContent = "Expense Tracker";
    this.container = this.createElement("div", "container");
    this.balanceTitle = this.createElement("h4");
    this.balanceTitle.textContent = "YOUR BALANCE";
    this.balanceValue = this.createElement("h1");
    this.balanceValue.id = "balance";
    this.subContainer = this.createElement("div", "inc-exp-container");
    this.incomeContainer = this.createElement("div");
    this.incomeTitle = this.createElement("h4");
    this.incomeTitle.textContent = "INCOME";
    this.incomeParagraph = this.createElement("p", "money plus");
    this.incomeParagraph.id = "money-plus";
    this.incomeContainer.append(this.incomeTitle, this.incomeParagraph);
    this.expenseContainer = this.createElement("div");
    this.expenseTitle = this.createElement("h4");
    this.expenseTitle.textContent = "EXPENSE";
    this.expenseParagraph = this.createElement("p", "money minus");
    this.expenseParagraph.id = "money-minus"; 
    this.expenseContainer.append(this.expenseTitle, this.expenseParagraph);
    this.subContainer.append(this.incomeContainer, this.expenseContainer);
    this.historyTitle = this.createElement("h3");
    this.historyTitle.textContent = "History";
    this.list = this.createElement("ul", "list");
    this.addTitle = this.createElement("h3");
    this.addTitle.textContent = "Add new transaction";
    this.form = this.createElement("form");
    this.form.id = "form";
    this.textContainer = this.createElement("div", "form-control");
    this.textLabel = this.createElement("label");
    this.textLabel.htmlFor = "text";
    this.textLabel.textContent = "Text";
    this.textInput = this.createElement("input");
    this.textInput.type = "text";
    this.textInput.id = "text";
    this.textInput.placeholder = "Enter text...";
    this.textInput.name = "transactionText";
    this.textContainer.append(this.textLabel, this.textInput);
    this.amountContainer = this.createElement("div", "form-control");
    this.amountLabel = this.createElement("label");
    this.amountLabel.htmlFor = "amount";
    this.amountLabel.innerHTML = "Amount" + "<br/>" + "(negative - expense, positive - income)";
    this.amountInput = this.createElement("input");
    this.amountInput.type = "number";
    this.amountInput.id = "amount";
    this.amountInput.placeholder = "Enter Amount...";
    this.amountInput.name = "transactionAmount";
    this.amountContainer.append(this.amountLabel, this.amountInput);
    this.submitButton = this.createElement("button", "btn");
    this.submitButton.textContent = "Add transaction";
    this.form.append(this.textContainer, this.amountContainer, this.submitButton);
    this.container.append(this.balanceTitle, this.balanceValue, this.subContainer, this.historyTitle, this.list, this.addTitle, this.form);
    this.app.append(this.title, this.container);

    this._temporaryTransactionValue = "";
    this._initLocalListeners();
    this.onlynumeric();
  }

  _initLocalListeners() {
    this.list.addEventListener("input", event => {
      if (event.target.className === "editable") {
        this._temporaryTransactionValue = parseFloat(event.target.innerText);
      }
    });
  }

  get _transactionText() {
    return this.textInput.value;
  }

  _resetInput() {
    this.textInput.value = "";
  }

  get _transactionValue() {
    return parseFloat(this.amountInput.value);
  }

  _resetValue() {
    this.amountInput.value = "";
  }

  getElement(selector) {
    const element = document.querySelector(selector);

    return element;
  }

  createElement(tag, className) {
    const element = document.createElement(tag);

    if (className){
      if(className.includes(" ")){
        const classNames = className.split(" ");
        classNames.forEach(className => {
          element.classList.add(className);
        });
      }else{
        element.classList.add(className);
      }
    } 

    return element;
  }

  displayTransactions(transactions) {
    //Elimina todos los nodos de transacciones
    while (this.list.firstChild) {
      this.list.removeChild(this.list.firstChild);
    }

    let total = 0;
    let income = 0;
    let expense = 0;

    if(transactions.length){
      //Crea los nodos de transacciones
      transactions.forEach(transaction => {

        const sign = transaction.amount < 0 ? '-' : '+';
    
        const item = document.createElement('li');
      
        //Aniade el id y la clase segun el valor
        item.id = transaction.id;
        item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');
        
        //Muestra por pantalla la tarjeta del historial, que se incluye en la lista
        item.innerHTML = `
          ${transaction.text} <span contenteditable="true" class="editable">${sign}${Math.abs(transaction.amount)}</span> 
          <button class="delete-btn">x</button>
        `;
      
        this.list.appendChild(item);

        //Actualiza los valores de balance, income y expense
        total += transaction.amount;

        if(sign === '+'){
          income += +transaction.amount;
        }else{
          expense += +transaction.amount;
        }
      });

      //Muestra por pantalla los valores anteriores actualizados

      this.balanceValue.innerText = `$${total.toFixed(2)}`;
      this.incomeParagraph.innerText = `$${income.toFixed(2)}`;
      this.expenseParagraph.innerText = `$${Math.abs(expense).toFixed(2)}`;
    }else{
      this.balanceValue.innerText = `$${0..toFixed(2)}`;
      this.incomeParagraph.innerText = `$${0..toFixed(2)}`;
      this.expenseParagraph.innerText = `$${0..toFixed(2)}`;
    }
    
    // Debugging
    console.log(transactions);
  }

  bindAddTransaction(handler) {
    this.form.addEventListener("submit", event => {
      event.preventDefault();

      if (this._transactionText && this._transactionValue) {
        handler(this._transactionText, this._transactionValue);
        this._resetInput();
        this._resetValue();
      }else{
        alert('Please add a text and amount');
      }
    });
  }

  bindRemoveTransaction(handler) {
    this.list.addEventListener("click", event => {
      if (event.target.className === "delete-btn") {
        const id = event.target.parentElement.id;

        handler(id);
      }
    });
  }

  bindEditTransaction(handler){
    this.list.addEventListener("focusout", event => {
      if (this._temporaryTransactionValue && !isNaN(this._temporaryTransactionValue)) {
        const id = event.target.parentElement.id;
        handler(id, this._temporaryTransactionValue);
        this._temporaryTransactionValue = "";
      }
    });
  }

  onlynumeric(){
    this.list.addEventListener("keydown", event => {
      if (event.target.className === "editable" && (!/\d|\.|\-/.test(event.key) || (((/\./.test(event.key)) && event.target.innerText.match(/\./))) || (((/\-/.test(event.key)) && event.target.innerText.match(/\-/)))) && event.key !== "Backspace" && event.key !== "ArrowLeft" && event.key !== "ArrowRight") {
        event.preventDefault();
      }
    });
  }

}



