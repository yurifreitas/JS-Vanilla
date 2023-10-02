export const renderHeader = () => {
  // Renderizar dinamicamente os links do menu
  //   const navLinks = navigationRoutes
  //     .map((route) => {
  //       return `<a href="#${route.path}">${route.name}</a>`
  //     })
  //     .join(' ')

  const header = document.querySelector('#header')

  header.innerHTML = `
        <div>
            <h1> Valorant info</h1>

            <nav id="navigation">
                <ul>
                    <li></li>
                    <li><a>Sobre o Jogo</a></li>
                </ul>
            </nav>

            <input id="search" placeholder="Busque um personagem" maxlength="20"/>

        </div>

    `

  const a = document.createElement('a')
  const li = document.querySelector('li')
  a.text = 'Personagens'

  li.appendChild(a)

  a.addEventListener('click', () => {
    openSideBar()
  })
}

export function openSideBar() {
  const sideBar = document.querySelector('sidebar')
  if (sideBar.classList[0] === 'slideIn') {
    sideBar.classList.remove('slideIn')
    sideBar.classList.add('slideOut')
  } else {
    sideBar.classList.add('slideIn')
    sideBar.classList.remove('slideOut')
  }
  console.log('sidebar tá on!')
}
