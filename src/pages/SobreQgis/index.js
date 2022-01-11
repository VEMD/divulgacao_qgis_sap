import "./styles.css"

const SobreQgis = () => {
    return (
        <div className="containerSobreQgis">
            <h1 className="textSobreQgis">QGIS - O maior SIG do mundo!</h1>
            <h4 className="textSobreQgis">O QGIS é um Sistema de Informações Geográficas profissional construído, com muito orgulho, 
                                          como um Software Livre e de Código Aberto 
                                          (<a href="https://pt.wikipedia.org/wiki/Software_livre_e_de_c%C3%B3digo_aberto" target="_blank">Free and Open Source Software - FOSS</a>).</h4>
            
            <h2>Construa Mapas:</h2>
            <div className="containerFeatures">
                <a href="https://www.flickr.com/photos/137941464@N06/51803159713/in/pool-2244553@N22" target="_blank"><img src="https://live.staticflickr.com/65535/51803159713_a4afdeaae4_q.jpg"></img></a>
                <a href="https://www.flickr.com/photos/fotosavulso/51731483959/in/pool-2244553@N22" target="_blank"><img src="https://live.staticflickr.com/65535/51731483959_7198cb533d_q.jpg"></img></a>
                <a href="https://www.flickr.com/photos/valentinschalk/48833946281/in/pool-2244553@N22" target="_blank"><img src="https://live.staticflickr.com/65535/48833946281_2605a44cf8_q.jpg"></img></a>
                <a href="https://www.flickr.com/photos/7361002@N08/51262546680/in/pool-2244553@N22" target="_blank"><img src="https://live.staticflickr.com/65535/51262546680_d6535aec00_q.jpg"></img></a>
                <div className="containerButton">
                    <a class="btn btn-secondary" href="https://qgis.org/en/site/about/screenshots.html" role="button" target="_blank">Acesse mais exemplos</a>
                </div>
            </div>

            <h2>Realize análises espaciais avançadas:</h2>
            <div className="containerFeatures">
                <a href="https://www.flickr.com/photos/city-planner/51759940337/in/pool-2327386@N22" target="_blank"><img src="https://live.staticflickr.com/65535/51759940337_93be764c42_q.jpg"></img></a>
                <a href="https://www.flickr.com/photos/ingo-valgma/51706991437/in/pool-2327386@N22" target="_blank"><img src="https://live.staticflickr.com/65535/51706991437_5e7b440c4d_q.jpg"></img></a>
                <a href="https://www.flickr.com/photos/ingo-valgma/51715422115/in/pool-2327386@N22" target="_blank"><img src="https://live.staticflickr.com/65535/51715422115_5fc1e0f540_q.jpg"></img></a>
                <a href="https://www.flickr.com/photos/ingo-valgma/51708452184/in/pool-2327386@N22" target="_blank"><img src="https://live.staticflickr.com/65535/51708452184_195aa27bbf_q.jpg"></img></a>
                <div className="containerButton">
                    <a class="btn btn-secondary" href="https://qgis.org/en/site/about/screenshots.html#screenshots" role="button" target="_blank">Acesse mais exemplos</a>
                </div>
            </div>

            <div className="containerButtonGetStart">
                <a class="btn btn-outline-success btn-lg" href="https://qgis.org/pt_BR/site/forusers/index.html" role="button" target="_blank">Comece a usar o QGIS agora!</a>
            </div>

        </div>
    )
}

export default SobreQgis;