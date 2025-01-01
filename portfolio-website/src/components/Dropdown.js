/*******************************************************************************
 * This file was adapted from a blog post by Ibas Majeed on https://ibaslogic.com/
 * Date: December 31, 2024
 * URL: https://ibaslogic.com/how-create-multilevel-dropdown-menu-react/
*******************************************************************************/
import MenuItems from "./MenuItems";

const Dropdown = ({ submenus, dropdown, depthLevel }) => {
    depthLevel = depthLevel + 1;
    const dropdownClass = depthLevel > 1 ? 'dropdown-submenu' : '';
    return (
      <ul
        className={`dropdown ${dropdownClass} ${
          dropdown ? 'show' : ''
        }`}
      >
        {submenus.map((submenu, index) => (
          <MenuItems
            items={submenu}
            key={index}
            depthLevel={depthLevel}
          />
        ))}
      </ul>
    );
  };
  
  export default Dropdown;