import { useState } from 'react';
import CompanyLogo from './CompanyLogo';

const themes = ['light', 'saturated'];
export default function NavBar() {
    const [theme, setTheme] = useState(localStorage.getItem('theme') ?? themes[0]);

    const handleTheme = () => {
        if (theme) {
            // console.log('theme:', theme);
            // console.log('index:', themes.indexOf(theme));
            if (themes.indexOf(theme) === themes.length - 1) {
                const newtheme = themes[0];
                setTheme(newtheme);
                localStorage.setItem('theme', newtheme);
            } else {
                const newtheme = themes[themes.indexOf(theme) + 1];
                setTheme(newtheme);
                // console.log('newtheme', newtheme);
                localStorage.setItem('theme', newtheme);
            }
        }
    };
    return (
        <nav className='nav__container limit-width'>
            <a href='/' className='company'>
                <CompanyLogo />
                <p className='nav__title'>Comnica</p>
            </a>
            <button onClick={handleTheme} className={`theme-toggle ${theme} `}>
                <input type='checkbox' />
            </button>
        </nav>
    );
}
