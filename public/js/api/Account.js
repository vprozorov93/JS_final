/**
 * Класс Account наследуется от Entity.
 * Управляет счетами пользователя.
 * Имеет свойство URL со значением '/account'
 * */
const endfunc =  ( err, response ) => {
  if (err) {
    console.log( err )
  } else {
    console.log( response )
  }
}
class Account extends Entity {
  
  static URL = '/account'
  /**
   * Получает информацию о счёте
   * */
  static get(id = '', callback=endfunc) {
    createRequest({url: `${this.URL}/${id}`, method: 'GET', callback: callback})
  }
}
