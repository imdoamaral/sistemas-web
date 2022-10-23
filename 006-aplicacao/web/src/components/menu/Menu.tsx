import { Link } from 'react-router-dom';
import './menu.css';

const Menu = () => {

    return (

        <div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/estados'>Listar Estados</Link></li>
                <li><Link to='/cidades'>Listar Cidades</Link></li>
            </ul>
        </div>
    )
}

export default Menu;