import './menu.css';
import { BsYoutube, BsInstagram } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <div className="menu">
            <a className="social" href="https://youtube.com/c/sujeitoprogramador" target="_blanktarget">
                <BsYoutube size={24} />
            </a>
            <a className="social" href="https://instagram.com/sujeitoprogramador" target="_blanktarget">
                <BsInstagram size={24} />
            </a>
            <Link className="menu-item" to="/links">
                Meus Links
            </Link>
        </div>
    )
}

export default Menu