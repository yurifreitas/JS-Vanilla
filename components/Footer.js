export function renderFooter() {

    const footer = document.querySelector('#footer');

    footer.innerHTML = `
           <section class="section-footer" id="section-texts">
                    <a href="https://playvalorant.com/pt-br/download/" target="_blank">Baixe o jogo</a>
                    <a href="https://assets.contentstack.io/v3/assets/blt0eb2a2986b796d29/blt96bcb1f792b51a6b/6116afd61da1da13cddbee74/VALORANT_Community_Competition_Guidelines_por-BR_v1.2.pdf" target="_blank">Torneios Independentes</a>                    
           </section>

           <section id="section-logos">
                    <a href="https://www.riotgames.com/pt-br?_ga=2.202650514.243762150.1696266792-99981719.1696266790" target="_blank"><img src="assets/logo-riot.png"></a>
                    <a href="https://playvalorant.com/pt-br/" target="_blank"><img src="assets/icons8-valorant-250.png"></a>              
           </section>

           <section id="direitos">
                    <p>© 2023 Riot Games, Inc. Riot Games, VALORANT e Qualquer Logotipo associado são marcas comerciais, marcas de serviço e/ou marcas registradas da Riot Games, Inc.</p>
           </section>

           <section id="section-links">
                    <a href="https://www.riotgames.com/pt-br/privacy-notice-BR?_ga=2.202062098.243762150.1696266792-99981719.1696266790" target="_blank">Políticas de Privacidade</a>
                    <a href="https://www.riotgames.com/pt-br/terms-of-service-BR?_ga=2.202062098.243762150.1696266792-99981719.1696266790" target="_blank">Termos de Serviços</a>           
           </section>

           <section id="section-classificacao">
                    <img id="classificacao" src="https://images.contentstack.io/v3/assets/blt0eb2a2986b796d29/blt84ae391429f2375a/5f2db8f41967337e7590c9a8/riot-seloclassind-14-val.png?&height=100&disable=upscale">
           </section>
    `;
}