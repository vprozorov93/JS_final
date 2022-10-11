/**
 * Класс LoginForm управляет формой
 * входа в портал
 * */
class LoginForm extends AsyncForm {
  /**
   * Производит авторизацию с помощью User.login
   * После успешной авторизации, сбрасывает форму,
   * устанавливает состояние App.setState( 'user-logged' ) и
   * закрывает окно, в котором находится форма
   * */
  onSubmit(data) {
    User.login(data, (err, response) =>{
      if (response && response.success) {
        App.setState('user-logged')
        document.getElementById('login-form').reset()
        modal = new Modal(App.getModal('modal-login'))
        modal.close()
      }
    })
  }
}