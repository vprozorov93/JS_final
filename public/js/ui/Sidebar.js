/**
 * Класс Sidebar отвечает за работу боковой колонки:
 * кнопки скрытия/показа колонки в мобильной версии сайта
 * и за кнопки меню
 * */
class Sidebar {
  /**
   * Запускает initAuthLinks и initToggleButton
   * */
  static init() {
    this.initAuthLinks();
    this.initToggleButton();
  }

  /**
   * Отвечает за скрытие/показа боковой колонки:
   * переключает два класса для body: sidebar-open и sidebar-collapse
   * при нажатии на кнопку .sidebar-toggle
   * */
  static initToggleButton() {
    const toggleButton = document.querySelector('.sidebar-toggle')
    const parent = toggleButton.closest('.skin-blue')
    console.log(parent)
    toggleButton.addEventListener('click', (event) => {
      event.preventDefault()
      if (parent.classList.contains('sidebar-open')){
        parent.classList.toggle('sidebar-open')
        parent.classList.toggle('sidebar-collapse')
      } else {
        parent.classList.toggle('sidebar-open')
        parent.classList.toggle('sidebar-collapse')
      }
    })

  }

  /**
   * При нажатии на кнопку входа, показывает окно входа
   * (через найденное в App.getModal)
   * При нажатии на кнопку регастрации показывает окно регистрации
   * При нажатии на кнопку выхода вызывает User.logout и по успешному
   * выходу устанавливает App.setState( 'init' )
   * */
  static initAuthLinks() {

    document.addEventListener('click', event => {
      if (event.target.classList.contains('menu-item_register')) {
        modal = new Modal(App.getModal('modal-register'))
        modal.open()
      } else if (event.target.classList.contains('menu-item_login')) {
        modal = new Modal(App.getModal('modal-login'))
        modal.open()
      } else if(event.target.classList.contains('menu-item_logout')) {
        User.logout()
      }
    })
  }
}