import { Link } from "react-router-dom";

import "./styles.css";

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <Link className="reactLink" to="/">
                    <a className="navbar-brand color-id">
                        <img class="imgLogoNav" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/QGIS_logo_new.svg/1200px-QGIS_logo_new.svg.png" alt="Logo QGIS"/>
                    </a>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#conteudoNavbarSuportado" aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="conteudoNavbarSuportado">
                    <ul className="navbar-nav mr-auto mx-auto">
                        <li className="nav-item active">
                            <Link className="reactLink" to="/">
                                <a className="nav-link">Home</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="reactLink" to="/SobreQgis">
                                <a className="nav-link">Sobre o QGIS</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="reactLink" to="/Documentacao">
                                <a className="nav-link">Documentação</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="reactLink" to="/Downloads">
                                <a className="nav-link">Downloads</a>
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle navDropdownCursor" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Comunidades
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="https://qgisbrasil.org/" target="_blank">QGIS Brasil</a>
                                <a className="dropdown-item" href="https://qgis.de/" target="_blank">QGIS Alemanha</a>
                                <a className="dropdown-item" href="https://qgis.us/" target="_blank">QGIS EUA</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="https://qgis.org/en/site/forusers/usergroups.html" target="_blank">Outras comunidades</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link className="reactLink" to="/Sobre">
                                <a className="nav-link">Sobre a página</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header;