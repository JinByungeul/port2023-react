import React, { useState } from "react";

const headerNav = [
    {
        title: "intro",
        url: "#intro",
    },
    {
        title: "skill",
        url: "#skill",
    },
    {
        title: "site",
        url: "#site",
    },
    {
        title: "portfolio",
        url: "#portfolio",
    },
    {
        title: "contact",
        url: "#contact",
    },
];

const Header = () => {
    // 상태변수 show 생성 및 초기화
    const [show, setShow] = useState(false);

    const toggleMenu = () => {
        setShow((prevShow) => !prevShow);
    };

    return (
        <header id="header" role="banner">
            <div className="header_inner">
                <div className="header_logo">
                    <a href="/">portfolio <em>vite</em></a>
                </div>
                <nav className={`header_nav ${show ? "show" : ""}`} role="navigation" aria-label="메인 메뉴">
                    <ul>
                        {headerNav.map((nav, key) => (
                            <li key={key}><a href={nav.url}>{nav.title}</a></li>
                        ))}
                    </ul>
                </nav>
                <div
                    className="header_nav_mobile"
                    id="headerToggle"
                    aria-controls="primary-menu"
                    aria-expanded="false"
                    role="button"
                    tabIndex="0"
                    onClick={toggleMenu}
                >
                    <span></span>
                </div>
            </div>
        </header>
    );
};

export default Header;