import { Link } from "react-router-dom";
import { GrCloudDownload } from "react-icons/gr";

import "./styles.css";

const Downloads = () => {
    return (
            <div className="download">
                <div className="downloadCabecalho">
                    <div className="downloadCabecalhoTxt">
                        <h2>QGIS Desktop</h2>
                        <p>
                            Aqui estão os principais links para download da versão estável (LTR) mais recente do QGIS.
                            Caso queira baixar outras versões, acesse o site oficial <space />
                            <a href="https://qgis.org/en/site/forusers/download.html" target="_blank">aqui</a>
                            .
                        </p>
                    </div>

                    <div className="downloadImgDoc">
                        <GrCloudDownload size={150} />
                    </div>
                </div>
                <hr className="separador"/>
                <div className="divDownload">
                    <h3><img className="windowsLogo" src="https://logosmarcas.net/wp-content/uploads/2021/02/Windows-New-Logo.png"></img>Windows</h3>
                    <ul>
                        <li><a href="https://qgis.org/downloads/QGIS-OSGeo4W-3.16.15-1.msi" target="_blank">QGIS Standalone versão 3.16</a></li>
                    </ul>
                </div>
                <hr className="separadorMenor"/>
                <div className="divDownload">
                    <h3><img className="macLogo" src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"></img>macOS</h3>
                    <ul>
                        <li><a href="hthttps://qgis.org/downloads/macos/qgis-macos-ltr.dmg" target="_blank">QGIS Standalone versão 3.16</a></li>
                    </ul>
                </div>
                <hr className="separadorMenor"/>
                <div className="divDownload">
                    <h3><img className="linuxLogo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png"></img>Linux</h3>
                    <ul>
                        <li><a href="https://qgis.org/en/site/forusers/alldownloads.html#linux" target="_blank">Instruções para a instalação</a></li>
                    </ul>
                </div>
                <hr className="separadorMenor"/>
                <div className="divDownload">
                    <h3><img className="androidLogo" src="https://dwglogo.com/wp-content/uploads/2019/09/android_logo.png"></img>Android</h3>
                    <ul>
                        <li><a href="https://play.google.com/store/apps/details?id=ch.opengis.qfield&utm_source=qgis.org" target="_blank"><img className="playBadge" src="https://play.google.com/intl/pt-BR/badges/static/images/badges/pt-br_badge_web_generic.png"></img></a></li>
                    </ul>
                </div>
            </div>
    )
}

export default Downloads;