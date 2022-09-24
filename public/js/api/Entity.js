const e = require("express")
const endfunc = ( err, response ) => {
  if (err) {
    console.log( err )
  } else {
    console.log( response )
  }
}

/**
 * Класс Entity - базовый для взаимодействия с сервером.
 * Имеет свойство URL, равно пустой строке.
 * */
class Entity {
  static URL = ''
  /**
   * Запрашивает с сервера список данных.
   * Это могут быть счета или доходы/расходы
   * (в зависимости от того, что наследуется от Entity)
   * */
  static list(data, callback=endfunc){
    createRequest({'url': this.URL, 'data': data, 'method': 'PUT', 'callback': callback})
  }

  /**
   * Создаёт счёт или доход/расход с помощью запроса
   * на сервер. (в зависимости от того,
   * что наследуется от Entity)
   * */
  static create(data, callback=endfunc) {
    createRequest({'url': this.URL, 'data': data, 'method': 'PUT', 'callback': callback})
  }

  /**
   * Удаляет информацию о счёте или доходе/расходе
   * (в зависимости от того, что наследуется от Entity)
   * */
  static remove(data, callback=endfunc) {
    createRequest({'url': this.URL, 'data': data, 'method': 'DELETE', 'callback': callback})
  }
}