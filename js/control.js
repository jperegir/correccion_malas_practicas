/* La variable let puede, en este caso, sustituirse por una constante,
   igual que sucede con el caso del mainMenu, ya que aunque esto no afecta a
   al funcionamiento de la app, si en más eficiente a nivel de procesos.
*/
let iconMenu = document.querySelector('#icon-menu'); // Aquí utilizar const
const mainMenu = document.getElementById('main-menu');

iconMenu.addEventListener('click', () =>
  mainMenu.classList.toggle('show')
);
