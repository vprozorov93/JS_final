/**
 * Класс CreateTransactionForm управляет формой
 * создания новой транзакции
 * */
class CreateTransactionForm extends AsyncForm {
  /**
   * Вызывает родительский конструктор и
   * метод renderAccountsList
   * */
  constructor(element) {
    super(element)
    this.renderAccountsList()
  }

  /**
   * Получает список счетов с помощью Account.list
   * Обновляет в форме всплывающего окна выпадающий список
   * */
  renderAccountsList() {
    accountList = Account.list()
    selectBill = this.element.querySelector('.accounts-select')
    optionsBill = ''
    accountList.forEach(element => {
      optionsBill += `<option value="${element.id}">${element.name}</option>`
    })
    selectBill.innerHTML = optionsBill
  }

  /**
   * Создаёт новую транзакцию (доход или расход)
   * с помощью Transaction.create. По успешному результату
   * вызывает App.update(), сбрасывает форму и закрывает окно,
   * в котором находится форма
   * */
  onSubmit(data) {
    const transaction = Transaction.create(data)
    if (transaction === 'OK') {
      this.element.reset()
      App.update()
      if (this.element.dataset.modal_id === 'newExpense'){
        App.getModal('newExpense').close()
      } else {
        App.getModal('newIncome').close()
      }
    }
  }
}