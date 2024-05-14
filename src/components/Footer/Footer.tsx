import {useNavigate } from 'react-router-dom';
import './Footer.css';

const Footer = ({styleC = false}:any) => {
  const navigate = useNavigate();

  const handleContact = async () => {
    navigate("/c_contactanos");
  };

  return (
    <footer className={`footer__container ${styleC ? 'estiloFixed':''}`}>
      <div className='footer__container-logo'>
        <img src="/src/assets/logogid.png" alt="" />
        <p className='footer__texto-logo'>DreamHome</p>
      </div>
      <div className="footer__container-items">
        <a className="item" href="/home ">Inicio</a>
        <a className="item" href="/c_sobre-nosotros">Sobre Nosotros</a>
        <a className="item" href="/c_servicios">Servicios</a>
      </div>
      <div className="footer__container-button">
        <h3 className='footer__text'>Vamos hacerlo! -</h3>
        <button onClick={handleContact} className="button__footer">Contactanos</button>
      </div>
    </footer>
  );
};

export default Footer;