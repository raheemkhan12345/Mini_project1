import React, { useState } from 'react'
import { navbarStyles } from '../assets/dummyStyles'
import { BaggageClaim, Clock } from 'lucide-react';
import { href, Link, useLocation, useNavigate } from 'react-router-dom';

const navItems = [
  { name: "Home", href: "/" },
  { name: "Watches", href: "/watches" },
  { name: "Contact", href: "/contact" },
];


const Navbar = () => {
    const [open , setOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const [active, setActive] = useState(location.pathname || '/');

    const handleNavClick = (href) => {
        setActive(href);
        setOpen(false);
    } 

  return (
    <header className={navbarStyles.header}>
        <nav className={navbarStyles.nav} role='navigations'>
            <div className={navbarStyles.container}>
                {/* Brand Logo */}
                <div className={navbarStyles.brandContainer}>
                    <div className={navbarStyles.logoContainer}>
                        <Clock className={navbarStyles.logoIcon} />
                    </div>
                    <Link to='/' onClick={ () => handleNavClick('/')} className={navbarStyles.logoLink}>
                        <span className={navbarStyles.logoText} style={navbarStyles.logoTextStyle}>
                            chronoElite
                        </span>
                    </Link>
                </div>
                <div className={navbarStyles.desktopNav}>
                    {navItems.map((item) => {
                        const isActive = active === item.href
                        return (
                            <Link key={item.name} to={item.href} onClick={() => handleNavClick(item.href)}
                            className={`${navbarStyles.navItemBase} ${isActive ? navbarStyles.navItemActive: navbarStyles.navItemInactive}`}
                            >
                                <span>{item.name}</span>
                                <span className={`${navbarStyles.activeIndicator} ${isActive 
                                    ? navbarStyles.activeIndicatorVisible 
                                    : navbarStyles.activeIndicatorHidden}`}
                                    ></span>
                            </Link>
                        )
                    })}
                </div>
                {/* Right side  */}
                <div className={navbarStyles.rightActions}>
                    <Link to='/cart' className={navbarStyles.cartLink}>
                    <BaggageClaim className={navbarStyles.cartIcon} />
                    </Link>

                </div>
            </div>
        </nav>
    </header>
  )
}

export default Navbar
