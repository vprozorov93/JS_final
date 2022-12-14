// const { application } = require("express")

/**
 * Класс CreateAccountForm управляет формой
 * создания нового счёта
 * */
class CreateAccountForm extends AsyncForm {
  /**
   * Создаёт счёт с помощью Account.create и закрывает
   * окно в случае успеха, а также вызывает App.update()
   * и сбрасывает форму
   * */
  onSubmit(data) {
    bill = Account.create()
    if (bill === 'OK') {
      this.element.reset()
      App.update()
      App.getModal('newAccount').close()
    }
  }
}