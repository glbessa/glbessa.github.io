import "./Home.css"

import PortifolioCard from "../components/PortifolioCard"

export default function Home() {
    return (
        <main>
            <section className="about">
                <img src="../assets/imgs/profile.jpeg" alt="Profile picture" />
                <p>Olá, eu me chamo Gabriel Leite Bessa e este é meu site pessoal para apresentação e portifólio. 
                    Atualmente no 6º semestre de Ciência da Computação na Universidade Federal de Pelotas!</p>
            </section>
            <hr className="divider"/>
            <section className="portifolio">
                <h2 id="portifolio">Portifólio</h2>
                <div className="portifolioContainer">
                    <PortifolioCard 
                        title="DeepRAD"
                        description="Projeto desenvolvido na UFPel que tem como objetivo a detecção de características em raios-x odontológicos por meio de técnicas de inteligência artificial."
                        url="https://github.com/glbessa/DeepRAD"    
                    />
                    <a href="https://github.com/glbessa/confortimetro_klimaa" className="portifolioCard">
                        <h3>Confortímetro Klimaa</h3>
                        <p>Projeto desenvolvido na UFPel que busca auxiliar no desenvolvimento do prédio inteligente da universidade com baixo emissão de carbono.</p>
                    </a>
                    <a href="https://github.com/glbessa/PampaOS" className="portifolioCard">
                        <h3>Simulador PampaSim</h3>
                        <p>Projeto desenvolvido na UFPel para o projeto e implementação de um simulador completo e funcional para a disciplina de sistemas operacionais.</p>
                    </a>
                    <a href="https://github.com/glbessa/amigo_secreto" className="portifolioCard">
                        <h3>Sorteador de Amigo Secreto</h3>
                        <p></p>
                    </a>
                    <a href="https://github.com/glbessa/Z808-Feijoada" className="portifolioCard">
                        <h3>Z808-Feijoada</h3>
                        <p>Projeto desenvolvido em grupo no contexto da disciplina de Programação de Sistemas e no qual foi desenvolvida máquina virtual, carregador, ligador, montador e preprocessador para a arquitetura hipotética Z808.</p>
                    </a>
                    <a href="https://github.com/glbessa/ASCIIArtGenerator" className="portifolioCard">
                        <h3>Gerador de arte ASCII</h3>
                        <p>Criação de uma arte em texto ASCII a partir de uma imagem.</p>
                    </a>
                    <a href="https://github.com/glbessa/campus_explorer" className="portifolioCard">
                        <h3>Campus Explorer</h3>
                        <p></p>
                    </a>
                </div>
            </section>
            <hr className="divider"/>
            <section className="resume">
                <h2 id="resume">Currículo</h2>
                <div>
                    <h3>Currículo em português:</h3>
                    <object data="../assets/documents/resume.pdf" type="application/pdf" width="350px" height="400px">
                        <p>Não foi possível carregar a visualização... Tente baixar <a href="../assets/documents/resume.pdf" download="true">aqui</a>.</p>
                    </object>
                </div>
                <div>
                    <h3>Resume in English:</h3>
                    <object data="../assets/documents/resume.pdf" type="application/pdf" width="350px" height="400px">
                        <p>Não foi possível carregar a visualização... Tente baixar <a href="../assets/documents/resume.pdf" download="true">aqui</a>.</p>
                    </object>
                </div>
            </section>
            <hr className="divider" />
            <section className="contacts">
                <h2 id="contacts">Contatos</h2>
                
                <div className="contactContainer">
                    
                    <a target="_blank" href="https://www.linkedin.com/in/gabrielleitebessa/" className="contactCard">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" />
                    </a>
                    <a target="_blank" href="https://github.com/glbessa" className="contactCard">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" />
                    </a>
                    <a target="_blank" href="https://github.com/glbessa" className="contactCard">
                        <img src="../assets/imgs/instagram.svg" alt="Instagram" />
                    </a>
                </div>
            </section>
        </main>
    )
}