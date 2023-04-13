import '../App.css';
import Navbar from '../componentes/Navbar';
import InicioCompDual from '../componentes/InicioCompDual';
import Formulario from '../componentes/Formulario';
import Banners from '../componentes/Banners';
import ContactoPopUP from '../componentes/ContactoPopUP';
import Footer from '../componentes/Footer';

function Dual() {
    return (
        <>
            <Navbar/>
            <ContactoPopUP/>
            <InicioCompDual/>
            <Formulario/>
            <Banners/>
            <Footer/>
        </>
    )
}
export default Dual
