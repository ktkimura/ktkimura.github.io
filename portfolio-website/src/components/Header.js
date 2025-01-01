import Navbar from './Navbar';

/*******************************************************************************
 * This file was adapted from a blog post by Ibas Majeed on https://ibaslogic.com/
 * Date: December 31, 2024
 * URL: https://ibaslogic.com/how-create-multilevel-dropdown-menu-react/
*******************************************************************************/

const Header = () => {
    return (
        <header>
            <div className="nav-area">
                <a href="/">Logo</a>
                <Navbar />
            </div>
        </header>
    );
};

export default Header;