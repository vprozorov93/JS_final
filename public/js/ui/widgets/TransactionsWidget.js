/**
 * Класс TransactionsWidget отвечает за
 * открытие всплывающих окон для
 * создания нового дохода или расхода
 * */

class TransactionsWidget {
  /**
   * Устанавливает полученный элемент
   * в свойство element.
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * */
  constructor( element ) {
    if (!element) {
      throw new Error('Param "element" can\'t be empty')
    }
    this.element = element
    this.registerEvents()
  }
  /**
   * Регистрирует обработчики нажатия на
   * кнопки «Новый доход» и «Новый расход».
   * При нажатии вызывает Modal.open() для
   * экземпляра окна
   * */
  registerEvents() {
    document.addEventListener('click', (event) =>{
      if (event.target.classList.contains('create-income-button')){
        App.getModal('newIncome')
      } else if (event.target.classList.contains('create-expense-button')){
        App.getModal('newExpense')
      }
    })
  }
}
