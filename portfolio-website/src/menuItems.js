/*******************************************************************************
 * This file was adapted from a blog post by Ibas Majeed on https://ibaslogic.com/
 * Date: December 31, 2024
 * URL: https://ibaslogic.com/how-create-multilevel-dropdown-menu-react/
*******************************************************************************/

export const menuItems = [
    {
        title: 'Home',
        url: '/',
    },
    {
        title: 'About Me',
        url: '/about',
    },
    {
        title: 'Projects',
        url: '/projects',
        submenu: [
            {
                title: 'BeaverHub Redesign',
                url: 'beaverhub',
            },
            {
                title: `Let's Get Cooking!`,
                url: 'lets-get-cooking',
            },
            {
                title: 'MyMail',
                url: 'mymail',
            },
        ]
    },
];