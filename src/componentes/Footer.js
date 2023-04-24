function Footer() {


  return (
    <>
      <footer class="site-footer">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-6">
              <ul class="footer-links">
                <li><a href='./#'><img className="logoFooter" src="/img/Navbar/Logo.png" alt="Logo" /></a></li>
              </ul>
            </div>
            <div class="col-xs-6 col-md-3 mas">
            </div>
            <div class="col-xs-6 col-md-3">
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12 col-md-6">
              <h6>Acerca De</h6>
              <p class="text-justify">Somos una empresa Ambateña con más de 15 años de experiencia, brindando servicios de internet y transmisión de datos de alta capacidad y velocidad, brindando un servicio estable, seguro y rápido con nuestra red de fibra óptica satisfaciendo así los requerimientos de la población.  </p>
            </div>

            <div class="col-xs-6 col-md-3">
              <h6>Categorias</h6>
              <ul class="footer-links">
                <li><a href="./#">Internet Hogar</a></li>
                <li><a href="./corporativo">Internet Corporativo</a></li>
                <li><a href="./streaming">Streaming</a></li>
                <li><a href="./dual">Dual</a></li>
              </ul>
            </div>
            <div class="col-xs-6 col-md-3">
              <h6>Links</h6>
              <ul class="footer-links">
                <li><a href="./#">Inicio</a></li>
                <li><a href="./#">Nosotros</a></li>
                <li><a href="./#">Planes</a></li>
                <li><a href="./#">Links de Interes</a></li>
                <li><a href="./#">Contáctanos</a></li>
              </ul>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12 col-md-1">
            </div>
            <div class="col-xs-6 col-md-2">
              <div class="image-container">
                <a href="https://www.google.com/maps/place/Speedy+Internet+-+Ambato+Central/@-1.2481557,-78.6437978,19.86z/data=!4m14!1m7!3m6!1s0x91d381e8ee3e1b4f:0xc7601c93cf04b801!2sSpeedy+Internet+-+Ambato+Central!8m2!3d-1.2480028!4d-78.6436233!16s%2Fg%2F11bwpyby9h!3m5!1s0x91d381e8ee3e1b4f:0xc7601c93cf04b801!8m2!3d-1.2480028!4d-78.6436233!16s%2Fg%2F11bwpyby9h">
                  <img src="./img/Footer/location.png" alt="Original Image" />
                  <img src="./img/Footer/locationActive.png" alt="Hover Image" class="hover-image" />
                </a>
                <p>Matriz Ambato: Calle las Frutillas y Guaytambos, sector Ficoa</p>
              </div>
            </div>
            <div class="col-xs-6 col-md-2">
              <div class="image-container dos">
                <a href="https://api.whatsapp.com/send?phone=593999051864">
                  <img src="./img/Footer/phone.png" alt="Original Image" />
                  <img src="./img/Footer/phoneActive.png" alt="Hover Image" class="hover-image" />
                </a>
                <br/><p>(02) 4 700 600 / 0994 50 50 50</p>
              </div>
            </div>
            <div class="col-xs-6 col-md-3">
              <ul class="social-icons">
                <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
                <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
                <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
                <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-sm-6 col-xs-12">
              <p class="copyright-text">Copyright &copy; 2023 All Rights Reserved by
                <a href="#"> Agencia Prez</a>.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
