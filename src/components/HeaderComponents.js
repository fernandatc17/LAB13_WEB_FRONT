import React from 'react';

export const HeaderComponent = () => {
    return (
        <header>
            <nav className="navbar bg-primary navbar-expand-lg fixed-top">
                
                <div className="container">
                    
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link fromato01"  href="/">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fromato01" href="/productos">Productos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fromato01" href="#">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fromato01" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                </div>
                
            </nav>
            
        </header>
    );
}

export default HeaderComponent;