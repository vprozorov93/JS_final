/**
 * Класс User управляет авторизацией, выходом и
 * регистрацией пользователя из приложения
 * Имеет свойство URL, равное '/user'.
 * */
class User {
  static URL = '/user'
  /**
   * Устанавливает текущего пользователя в
   * локальном хранилище.
   * */
  static setCurrent(user) {
    try {
      localStorage.setItem('moneyManagerUser', JSON.stringify(user))
    } catch {
      console.log('Ошибка получения user')
    }
  }

  /**
   * Удаляет информацию об авторизованном
   * пользователе из локального хранилища.
   * */
  static unsetCurrent() {
    localStorage.removeItem('moneyManagerUser')
  }

  /**
   * Возвращает текущего авторизованного пользователя
   * из локального хранилища
   * */
  static current() {
    try {
      return JSON.parse(localStorage.getItem('moneyManagerUser'))
    } catch {
      return null
    }
  }

  /**
   * Получает информацию о текущем
   * авторизованном пользователе.
   * */
  static fetch(callback) {
    createRequest({
      url: this.URL + '/login',
      method: 'POST',
      responseType: 'json',
      data: '',
      callback: (err, response) => {
        if (response && response.success) {
          this.setCurrent(response.user);
        }
        callback(err, response);
      }
    })
  }

  /**
   * Производит попытку авторизации.
   * После успешной авторизации необходимо
   * сохранить пользователя через метод
   * User.setCurrent.
   * */
  static login(data, callback) {
    createRequest({
      url: this.URL + '/current',
      method: 'GET',
      responseType: 'json',
      data,
      callback: (err, response) => {
        if (response && response.user) {
          this.setCurrent(response.user);
        } else {
          this.unsetCurrent()
        }
        callback(err, response);
      }
    })
  }

  /**
   * Производит попытку регистрации пользователя.
   * После успешной авторизации необходимо
   * сохранить пользователя через метод
   * User.setCurrent.
   * */
  static register(data, callback) {
    createRequest({
      url: this.URL + '/register',
      method: 'POST',
      responseType: 'json',
      data,
      callback: (err, response) => {
        if (response && response.success) {
          this.setCurrent(response.user);
        } else {
          console.log(response)
        }
        callback(err, response);
      }
    })
  }

  /**
   * Производит выход из приложения. После успешного
   * выхода необходимо вызвать метод User.unsetCurrent
   * */
  static logout(callback) {
    createRequest({
      url: this.URL + '/logout',
      method: 'POST',
      responseType: 'json',
      data: '',
      callback: (err, response) => {
        if (response && response.success) {
          this.unsetCurrent();
        } else {
          console.log(response.error)
        }
        callback(err, response);
      }
    })
  }
}
