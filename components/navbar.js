class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                nav {
                    background: rgba(26, 32, 44, 0.9);
                    backdrop-filter: blur(10px);
                    padding: 1rem 2rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    transition: all 0.3s ease;
                }
                .logo {
                    color: white;
                    font-weight: bold;
                    font-size: 1.5rem;
                    display: flex;
                    align-items: center;
                }
                .logo i {
                    margin-right: 0.5rem;
                }
                .nav-links {
                    display: flex;
                    gap: 2rem;
                    list-style: none;
                    margin: 0;
                    padding: 0;
                }
                .nav-links a {
                    color: white;
                    text-decoration: none;
                    font-weight: 500;
                    transition: color 0.3s;
                    position: relative;
                }
                .nav-links a:hover {
                    color: #48bb78;
                }
                .nav-links a:after {
                    content: '';
                    position: absolute;
                    width: 0;
                    height: 2px;
                    bottom: -4px;
                    left: 0;
                    background-color: #48bb78;
                    transition: width 0.3s;
                }
                .nav-links a:hover:after {
                    width: 100%;
                }
                .mobile-menu-button {
                    display: none;
                    background: none;
                    border: none;
                    color: white;
                    cursor: pointer;
                }
                .mobile-menu {
                    display: none;
                    background: rgba(26, 32, 44, 0.95);
                    position: absolute;
                    top: 100%;
                    left: 0;
                    right: 0;
                    padding: 1rem;
                }
                .mobile-menu ul {
                    list-style: none;
                    margin: 0;
                    padding: 0;
                }
                .mobile-menu li {
                    margin-bottom: 1rem;
                }
                .mobile-menu a {
                    color: white;
                    text-decoration: none;
                    font-size: 1.1rem;
                    display: block;
                    padding: 0.5rem;
                }
                @media (max-width: 768px) {
                    .nav-links {
                        display: none;
                    }
                    .mobile-menu-button {
                        display: block;
                    }
                    .mobile-menu.active {
                        display: block;
                    }
                }
                .cta-button {
                    background: #48bb78;
                    color: white;
                    padding: 0.5rem 1.5rem;
                    border-radius: 9999px;
                    transition: all 0.3s;
                }
                .cta-button:hover {
                    background: #38a169;
                    transform: translateY(-2px);
                }
            </style>
            <nav>
                <div class="logo">
                    <i data-feather="compass"></i>
                    WildTrek
                </div>
                <ul class="nav-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="#events">Events</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="/gallery.html">Gallery</a></li>
                    <li><a href="/contact.html">Contact</a></li>
                    <li><a href="/register.html" class="cta-button">Register</a></li>
                </ul>
                <button class="mobile-menu-button" onclick="toggleMobileMenu()">
                    <i data-feather="menu"></i>
                </button>
                <div id="mobile-menu" class="mobile-menu hidden">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="#events">Events</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="/gallery.html">Gallery</a></li>
                        <li><a href="/contact.html">Contact</a></li>
                        <li><a href="/register.html">Register</a></li>
                    </ul>
                </div>
            </nav>
        `;
    }
}

customElements.define('custom-navbar', CustomNavbar);
