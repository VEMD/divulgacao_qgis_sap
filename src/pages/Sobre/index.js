import "./styles.css"

const Sobre = () => {
    return (
        <div className="containerSobre">
            <h1 className="textSobre">Conheça o QGIS</h1>
            <h4 className="textSobre">Esta página foi criada pelo aluno Vinicius Dória para apresentar
                                      o software QGIS e <b>pode conter informações desatualizadas</b>. 
                                      É um exercício para a disciplina de Desenvolvimento
                                      Front-end do curso de pós-graduação em Desenvolvimento Web Full
                                      Stack da Unyleya.</h4>
            <h4 className="textSobre">Visite a página oficial do QGIS para maiores informações:</h4>
            <a className="linkSite" href="https://qgis.org/pt_BR/site/" target="_blank">qgis.org</a>
        </div>
    )
}

export default Sobre;