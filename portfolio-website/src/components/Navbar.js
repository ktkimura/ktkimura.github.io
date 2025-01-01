/*******************************************************************************
 * This file was adapted from a blog post by Ibas Majeed on https://ibaslogic.com/
 * Date: December 31, 2024
 * URL: https://ibaslogic.com/how-create-multilevel-dropdown-menu-react/
*******************************************************************************/
import { menuItems } from '../data/menuItems';
import MenuItems from './MenuItems';

const Navbar = () => {
    return (
        <nav>
            <ul className="menus">
                {menuItems.map((menu, index) => {
                    const depthLevel = 0;
                    return (
                    <MenuItems 
                        items={menu} 
                        key={index} 
                        depthLevel={depthLevel}
                    />
                    );
                })}
            </ul>
        </nav>
    );
};

export default Navbar;