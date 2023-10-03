import { router } from "../scripts/router.js"
import { navigationRoutes } from "../scripts/routes.js"

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
                <ul class="navigation-header">
                    <li></li>
                    <li><a href="#${navigationRoutes[0].path}">Sobre o Jogo</a></li>
                </ul>
            </nav>

        </div>

    `

  const a = document.createElement('a')
  const li = document.querySelector('li')
  a.text = 'Personagens'
  const route = navigationRoutes[1];
  a.href = `#${route.path}`

  li.appendChild(a)

  a.addEventListener('click', () => {
    router()
  })
}

