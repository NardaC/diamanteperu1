import React from "react";

import Convenio from "./Convenio";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
// import foto1 from "../img/Clip.png";
import foto1 from "../img/DIAMANTE_bodegon-03.png";
import foto2 from "../img/DIAMANTE_portada-modelo.png";
import foto3 from "../img/DIAMANTE_giftcards.png";

import img1 from "../img/carrousel/3009.png"
import img2 from "../img/carrousel/4002.png"
import img3 from "../img/carrousel/4023.png"
import img4 from "../img/carrousel/1508.png"
import img5 from "../img/carrousel/4013.png"
import img6 from "../img/carrousel/4031.png"
import img7 from "../img/carrousel/3102.png"
import img8 from "../img/carrousel/3107.png"
import img9 from "../img/carrousel/4028.png"
import img10 from "../img/carrousel/4027.png"
import img11 from "../img/anillosTodaOcasion/S223.png"
import img12 from "../img/anillosTodaOcasion/S226.png"
import img13 from "../img/anillosTodaOcasion/S217.png"
import img14 from "../img/anillosTodaOcasion/S221.png"
import img15 from "../img/anillosTodaOcasion/S223_.png"

const Home = () => {
    return(
      <>
      <Helmet>
        <title>Diamante Perú</title>
        <meta name="description" content="Diamantes certificados por el Laboratorio mas prestigioso y famoso del mundo, Gemological Institute of America (GIA)" />
        <meta name="keywords" content="Diamante,diamante, anillos en lima,joyas,diamante peru,diamante perú,sortijas par acompromiso,diamanteschile.com, diamantesenperu.com,sortijasdecompromiso,gemologos en peru,gerardo zela,,perudiamante.com, diamantesbolivia.com, diamantescolombia.com, diamantes bolivia, sortijas bolivia, sortijas argentina, sortijas chile, sortijas ecuador, diamantes colombia, sortijas colombia,5cs,4cs,sortijas de compromiso, sortijas, sortijas para compromiso, adrian zela,gino zela, gemologos en peru, sortijas peru, gia,certificacion,sortijas en peru, sortijas lima, anillos en lima, sortijas de compromiso peru, anillos compromiso peru, anillo de compromiso, sortija compromiso, sortijas compromiso, compromiso sortijas, anillos peru, compromiso peru, bodas, matrimonio, pedida de mano, sortijas de matrimonio, aros de bodas, aros de compromiso, brillantes de compromiso peru, brillantes compromiso, brillantes peru, diamantes en el Peru, diamantes peru, diamante peru, perubrillante, peru brillante, brillantes de compromiso, anillos en lima, anillos en trujillo, sortijas en arequipa, aros de matrimonio, diamonds peru, engagement rings peru, joyerias peru, solitary rings peru, joyas, jewellery shop peru, joyeria, gemologist peru, diamantes de compromiso peru, brillantes de compromiso, anillos de compromiso, anillos de brillante, sortijas de brillante, diamantes brillantes, aros de matrimonio, sortija de matrimonio, gemas, gemologia peru, piedras preciosas, Peru Brillante, diamantes de compromiso, brillantes de compromiso, sortijas de compromiso, anillos de compromiso, anillos de brillante, sortijas de brillante, diamantes brillantes, aros de matrimonio sortija de matrimonio, gemas, gemologia peru, piedras preciosas, diamantes en el peru, diamonds peru, diamantes peru, jewellery shop peru, gemologist peru, diamantes certificados en peru, anillos para novia con diamantes, anillos para novia con brillantes, sortijas para novia con diamantes, sortijas para novia con brillantes, sortijas con diamantes, sortijas con brillantes, aros de novios con diamantes, brillantes en el peru, anillos con diamantes, anillos con brillantes, gemologo en el peru, brillantes certificados en el peru, como comprar un diamante correctamente, como comprar un anillo de compromiso, como comprar un brillante correctamente, diamante peru, diamantes en el peru, diamantes peru, joyerias peru, joyas, diamantes de compromiso, brillantes de compromiso, sortijas de compromiso, anillos de brillante, sortijas de brillante, diamantes brillantes, aros de matrimonio, sortija de matrimonio, gemas, piedras preciosas, diamantes en el peru, joyerias peru, joyeria, brillantes de compromiso, anillos de brillante, sortijas de brillante, diamantes brillantes, aros de matrimonio,piedras preciosas, sortija de matrimonio, diamantes en el peru, diamonds peru, engagement rings peru, joyerias peru, solitary rings peru, joyas, anillos de brillante, sortijas de brillante,  brillantes, aros de matrimonio, piedras preciosas, videos diamantes, joyas y diamantes, diamante bolivia, diamante colombia, diamante peru, diamantes bolivia, diamantes chile, diamantes en peru, peru diamante, diamantes bolivia, diamantes colombia, diamantes bolivia, sortijas bolivia, sortijas argentina, sortijas chile, sortijas ecuador, diamantes colombia, sortijas colombia,Diamante,diamante,joyas,diamante peru,diamante perú,Home,Perú,anillos,aretes,dijes,oro" />
        <meta name="URL" content="http://www.diamanteperu.com"/>
        <meta name="author" content="diamanteperu.com"/>
        <meta name="distribution" content="global"/>
      </Helmet>
        <div className="w100 animated fadeIn ">
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <Link  to="/compromiso"><img src={foto2} className="d-block w-100 h-50-rem" alt="chica"/>
                  <div className="carousel-caption d-none d-md-block">
                    <h5 className="animated fadeInLeft fontsz-5">Tú lo  sueñas, </h5>
                    <p className="animated fadeInLeft  fontsz-5 snell-Roundhand ">nosotros lo creamos</p>
                  </div>
                </Link>
              </div>
              <div className="carousel-item">
                <Link to="/blog"><img src={foto3} className="d-block w-100 h-50-rem" alt="Promocion del mes"/></Link>
              </div>
              <div className="carousel-item">
                <Link to="/joyas"><img src={foto1} className="d-block w-100 h-50-rem" alt="Bodegon joyas"/></Link>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
            <div id="multi-item-example" className="carousel slide carousel-multi-item mt-4 mb-4" data-ride="carousel">
              <div className="controls-top center">
                <a className="btn-floating" href="#multi-item-example" data-slide="prev"><i className="fas fa-chevron-left arrow"></i></a>
                <label className="raleway-regular lt-space-13 ">SORTIJAS</label>
                <a className="btn-floating" href="#multi-item-example" data-slide="next"><i className="fas fa-chevron-right arrow"></i></a>
              </div>
              <div className="carousel-inner" role="listbox">
                <div className="carousel-item active">
                  <div className="row allCenter">
                    <Link className="item-container-total text-decoration-none text-reset col-12 col-sm-4 col-md-2 mb-2 option-menu nav-link " to={ `/novios/Solitario/3009`}>
                    <div className="mb-2">
                      <img className="card-img-top " src={img1}
                            alt="Card image cap"/>
                      <div className="card-body center">
                        <p className="card-title">COD 3009</p>
                      </div>
                    </div>
                  </Link>
                    <Link  className="item-container-total text-decoration-none text-reset col-12 col-sm-4  mb-2 option-menu nav-link col-md-2 clearfix d-none d-md-block"   to={ `/novios/Solitario/4002`}>
                    <div className="mb-2">
                      <img className="card-img-top " src={img2}
                            alt="Card image cap"/>
                      <div className="card-body center">
                        <p className="card-title">COD 4002</p>
                      </div>
                    </div>
                  </Link>
                    <Link  className="item-container-total text-decoration-none text-reset col-12 col-sm-4  mb-2 option-menu nav-link col-md-2 clearfix d-none d-md-block"   to={ `/novios/Solitario/4023`}>
                    <div className="mb-2">
                      <img className="card-img-top " src={img3}
                          alt="Card image cap"/>
                      <div className="card-body center">
                        <p className="card-title">COD 4023</p>
                      </div>
                    </div>
                  </Link>
                    <Link  className="item-container-total text-decoration-none text-reset col-12 col-sm-4  mb-2 option-menu nav-link col-md-2 clearfix d-none d-md-block"   to={ `/novios/Solitario/1508`}>
                    <div className="mb-2">
                      <img className="card-img-top " src={img4}
                            alt="Card image cap"/>
                      <div className="card-body center">
                        <p className="card-title">COD 1508</p>
                      </div>
                    </div>
                  </Link>
                    <Link  className="item-container-total text-decoration-none text-reset col-12 col-sm-4  mb-2 option-menu nav-link col-md-2 clearfix d-none d-md-block"   to={ `/novios/Solitario/4013`}>
                    <div className="mb-2">
                      <img className="card-img-top " src={img5}
                          alt="Card image cap"/>
                      <div className="card-body center">
                        <p className="card-title">COD 4013</p>
                      </div>
                    </div>
                  </Link>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row allCenter">
                    <Link  className="item-container-total text-decoration-none text-reset col-12 col-sm-4  mb-2 option-menu nav-link col-md-2"   to={ `/novios/Con%20más%20Diamantes%20ó%20Laterales/4031`}>
                      <div className="mb-2">
                        <img className="card-img-top " src={img6}
                            alt="Card image cap"/>
                        <div className="card-body center">
                          <p className="card-title">COD 4031</p>
                        </div>
                      </div>
                    </Link>
                    <Link  className="item-container-total text-decoration-none text-reset col-12 col-sm-4  mb-2 option-menu nav-link col-md-2 clearfix d-none d-md-block"   to={ `/novios/Con%20más%20Diamantes%20ó%20Laterales/3102`}>
                      <div className="mb-2">
                        <img className="card-img-top " src={img7}
                          alt="Card image cap"/>
                        <div className="card-body center">
                          <p className="card-title">COD 3102</p>
                        </div>
                      </div>
                    </Link>
                    <Link  className="item-container-total text-decoration-none text-reset col-12 col-sm-4  mb-2 option-menu nav-link col-md-2 clearfix d-none d-md-block"   to={ `/novios/Con%20más%20Diamantes%20ó%20Laterales/3107`}>
                      <div className="mb-2">
                        <img className="card-img-top " src={img8}
                            alt="Card image cap"/>
                        <div className="card-body center">
                          <p className="card-title">COD 3107</p>
                        </div>
                      </div>
                    </Link>
                    <Link  className="item-container-total text-decoration-none text-reset col-12 col-sm-4  mb-2 option-menu nav-link col-md-2 clearfix d-none d-md-block"   to={ `/novios/Con%20más%20Diamantes%20ó%20Laterales/4028`}>
                      <div className="mb-2">
                        <img className="card-img-top " src={img9}
                            alt="Card image cap"/>
                          <div className="card-body center">
                            <p className="card-title">COD 4028</p>
                          </div>
                      </div>
                    </Link>
                    <Link  className="item-container-total text-decoration-none text-reset col-12 col-sm-4  mb-2 option-menu nav-link col-md-2 clearfix d-none d-md-block"   to={ `/novios/Con%20más%20Diamantes%20ó%20Laterales/4027`}>
                      <div className="mb-2">
                        <img className="card-img-top " src={img10}
                              alt="Card image cap"/>
                        <div className="card-body center">
                          <p className="card-title">COD 4027</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row allCenter">
                    <Link  className="item-container-total text-decoration-none text-reset col-12 col-sm-4  mb-2 option-menu nav-link col-md-2"   to={ `/producto/Sortija-toda-ocasión/S223`}>
                      <div className="mb-2">
                        <img className="card-img-top" src={img11}
                          alt="Card image cap"/>
                        <div className="card-body center">
                          <p className="card-title">COD S223</p>
                        </div>
                      </div>
                    </Link>
                    <Link  className="item-container-total text-decoration-none text-reset col-12 col-sm-4  mb-2 option-menu nav-link col-md-2 clearfix d-none d-md-block"   to={ `/producto/Sortija-toda-ocasión/S226`}>
                      <div className="mb-2">
                        <img className="card-img-top" src={img12}
                            alt="Card image cap"/>
                        <div className="card-body center">
                          <p className="card-title">COD S226</p>
                        </div>
                      </div>
                    </Link>
                    <Link  className="item-container-total text-decoration-none text-reset col-12 col-sm-4  mb-2 option-menu nav-link col-md-2 clearfix d-none d-md-block"   to={ `/producto/Sortija-toda-ocasión/S217`}>
                      <div className="mb-2">
                        <img className="card-img-top" src={img13}
                              alt="Card image cap"/>
                        <div className="card-body center">
                          <p className="card-title">COD S217</p>
                        </div>
                      </div>
                    </Link>
                    <Link  className="item-container-total text-decoration-none text-reset col-12 col-sm-4  mb-2 option-menu nav-link col-md-2 clearfix d-none d-md-block"   to={ `/producto/Sortija-toda-ocasión/S221`}>
                      <div className="mb-2">
                        <img className="card-img-top" src={img14}
                              alt="Card image cap"/>
                        <div className="card-body center">
                          <p className="card-title">COD S221</p>
                        </div>
                      </div>
                    </Link>
                    <Link  className="item-container-total text-decoration-none text-reset col-12 col-sm-4  mb-2 option-menu nav-link col-md-2 clearfix d-none d-md-block"   to={ `/producto/Sortija-toda-ocasión/S225`}>
                      <div className="mb-2">
                        <img className="card-img-top" src={img15}
                          alt="Card image cap"/>
                        <div className="card-body center">
                          <p className="card-title">S225</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <Convenio />
        </div>
      </>
    )
}
export default Home;