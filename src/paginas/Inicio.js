import '../App.css';
import Navbar from '../componentes/Navbar';
import InicioCompo from '../componentes/InicioCompo';
import Formulario from '../componentes/Formulario';
import Banners from '../componentes/Banners';
import ContactoPopUP from '../componentes/ContactoPopUP';
import Footer from '../componentes/Footer';

function Inicio() {
    return (
        <>
            <Navbar/>
            <ContactoPopUP/>
            <InicioCompo/>
            <Formulario/>
            <Banners/>
            <Footer/>
        </>
    )
}
export default Inicio
