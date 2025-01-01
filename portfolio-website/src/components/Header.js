/*******************************************************************************
 * This file was adapted from a blog post by Ibas Majeed on https://ibaslogic.com/
 * Date: December 31, 2024
 * URL: https://ibaslogic.com/how-create-multilevel-dropdown-menu-react/
*******************************************************************************/
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className="nav-area">
                <Link to="/">Logo</Link>
                <Navbar />
            </div>
        </header>
    );
};

export default Header;