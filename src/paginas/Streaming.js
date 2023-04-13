import '../App.css';
import Navbar from '../componentes/Navbar';
import InicioCompStreaming from '../componentes/InicioCompStreaming';
import Formulario from '../componentes/Formulario';
import Banners from '../componentes/Banners';
import ContactoPopUP from '../componentes/ContactoPopUP';
import Footer from '../componentes/Footer';

function Streaming() {
    return (
        <>
            <Navbar/>
            <ContactoPopUP/>
            <InicioCompStreaming/>
            <Formulario/>
            <Banners/>
            <Footer/>
        </>
    )
}
export default Streaming
