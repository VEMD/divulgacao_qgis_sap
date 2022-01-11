import { Link } from "react-router-dom";
import { GrDocumentText } from "react-icons/gr";

import "./styles.css";

const Documentacao = () => {
    return (
            <div className="doc">
                <div className="docCabecalho">
                    <div className="docCabecalhoTxt">
                        <h2>Documentação do QGIS</h2>
                        <p>O QGIS possui muita documentação. A maioria está em Inglês, mas alguns documentos, como o manual de usuário, estão também disponíveis em outros idiomas.</p>
                    </div>

                    <div className="docImgDoc">
                        <GrDocumentText size={150} />
                    </div>
                </div>
                <hr className="separador"/>
                <div className="doc316">
                    <h3>QGIS 3.16 (LTR atual)</h3>
                    <p>Para usuários:</p>
                        <ul>
                            <li>Leia o <a href="https://docs.qgis.org/3.16/pt_BR/docs/user_manual" target="_blank">Desktop User Guide/Manual</a></li>
                            <li>Leia o <a href="https://docs.qgis.org/3.16/pt_BR/docs/server_manual" target="_blank">Server Guide/Manual</a></li>
                            <li>Siga os tutoriais em <a href="https://docs.qgis.org/3.16/pt_BR/docs/training_manual/" target="_blank">Manual de Formação QGIS</a></li>
                            <li>Aprenda o básico dos SIGs em <a href="https://docs.qgis.org/3.16/pt_BR/docs/gentle_gis_introduction" target="_blank">Uma breve Introdução ao SIG</a></li>
                        </ul>
                    <p>Para escritores de documentação:</p>
                        <ul>
                            <li>Aprenda como escrever documentos em <a href="https://docs.qgis.org/3.16/pt_BR/docs/documentation_guidelines" target="_blank">Orientação da Documentação</a></li>
                        </ul>
                    <p>Para desenvolvedores:</p>
                        <ul>
                            <li>Avance com o Python, estude o <a href="https://docs.qgis.org/3.16/pt_BR/docs/pyqgis_developer_cookbook/" target="_blank">Livro de Dicas PyQGIS (para módulos e scripting)</a></li>
                            <li><a href="https://qgis.org/api/3.16/" target="_blank" className="reference external">Documentação Api C++</a></li>
                            <li><a href="https://qgis.org/pyqgis/3.16/" target="_blank" className="reference external">PyQGIS - documentação QGIS Python Api</a></li>
                            <li><a href="https://github.com/qgis/QGIS/blob/release-3_16/INSTALL.md" className="reference external">Building QGIS from Source</a></li>
                        </ul>
                    <p>Para baixar:</p>
                        <ul>
                            <li><a href="https://docs.qgis.org/3.16/pdf" target="_blank">PDF dos manuais</a></li>
                            <li><a href="https://docs.qgis.org/3.16/zip" target="_blank">zip HTML dos manuais</a></li>
                        </ul>
                    <p>Para mais informações e documentações de outras versões:</p>
                        <ul>
                            <li><a href="https://qgis.org/pt_BR/docs/index.html" target="_blank">Mais documentações</a></li>
                        </ul>
                </div>
            </div>
    )
}

export default Documentacao;