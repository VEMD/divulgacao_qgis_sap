import "./styles.css"

const Home = () => {
    return (
        <>
            <div className="containerApresentacao">
                <img className="logoQgisEx" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/QGIS_logo%2C_2017.svg/1200px-QGIS_logo%2C_2017.svg.png"></img>
                <h1>O maior Sistema de Informações Geográficas livre e de código aberto do mundo!</h1>
            </div>
            <div className="containerCarousel">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <a href="https://qgis.myspreadshop.net/" target="_blank">
                                <img className="d-block w-100" src="https://qgis.org/pt_BR/_static/images/qgisorg_shop_banner.png" alt="Primeiro Slide" />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>LOJA DE PRODUTOS</h5>
                                    <p>Suporte o projeto adquirindo seus produtos favoritos!</p>
                                </div>
                            </a>
                        </div>
                        <div className="carousel-item">
                            <a href="https://qgis.org/pt_BR/site/forusers/download.html" target="_blank">
                                <img className="d-block w-100" src="https://qgis.org/pt_BR/_static/images/qgisorg_banner322.png?t=oct2021" alt="Segundo Slide" />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>VERSÃO MAIS RECENTE</h5>
                                    <p>Baixe agora a versão mais recente do QGIS e confira o <a href="https://qgis.org/pt_BR/site/forusers/visualchangelog322/index.html" target="_blank">Registro de Alterações</a>!</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Anterior</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Próximo</span>
                    </a>
                </div>
            </div>
            <div className="card-deck">
                <div className="card">
                    <img className="card-img-top imgQgisTrademark" src="https://qgis.org/pt_BR/_static/images/trademark.png?t=23feb2018" alt="Imagem de capa do card" />
                    <div className="card-body">
                        <h5 className="card-title">Site Oficial</h5>
                        <p className="card-text">A página que você está acessando contém apenas algumas informações. Acesse o site oficial para saber tudo sobre o QGIS!</p>
                        <a className="btn btn-secondary" href="https://qgis.org/pt_BR/site/" target="_blank">Ir para o site</a>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src="https://thumbs.dreamstime.com/b/moeda-real-do-brasileiro-um-isolada-no-fundo-branco-de-124134700.jpg" alt="Imagem de capa do card" />
                    <div className="card-body">
                        <h5 className="card-title">Suporte o Projeto QGIS</h5>
                        <p className="card-text">Faça uma doação e ajude a manter o maior software livre de SIG do Mundo!</p>
                        <a className="btn btn-secondary" href="https://donate.qgis.org/" target="_blank">Fazer uma doação</a>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top imgQgisBlog" src="https://qgisblog.files.wordpress.com/2017/04/cropped-qgis-blog-banner_normal.png" alt="Imagem de capa do card" />
                    <div className="card-body">
                        <h5 className="card-title">Blog do QGIS</h5>
                        <p className="card-text">Acesse o blog e fique por dentro das últimas novidades do projeto!</p>
                        <a className="btn btn-secondary" href="https://blog.qgis.org/" target="_blank">Ir para o site</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;