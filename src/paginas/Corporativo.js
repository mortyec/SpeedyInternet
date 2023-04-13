import '../App.css';
import Navbar from '../componentes/Navbar';
import InicioCompCorporativo from '../componentes/InicioCompCorporativo';
import Formulario from '../componentes/Formulario';
import Banners from '../componentes/Banners';
import ContactoPopUP from '../componentes/ContactoPopUP';
import Footer from '../componentes/Footer';

function Corporativo() {
    return (
        <>
            <Navbar/>
            <ContactoPopUP/>
            <InicioCompCorporativo/>
            <Formulario/>
            <Banners/>
            <Footer/>
        </>
    )
}
export default Corporativo
