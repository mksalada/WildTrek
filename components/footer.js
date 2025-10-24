class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                footer {
                    background: #1a202c;
                    color: white;
                    padding: 3rem 1rem;
                }
                .footer-content {
                    max-width: 1200px;
                    margin: 0 auto;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 2rem;
                }
                .footer-section h3 {
                    font-size: 1.25rem;
                    margin-bottom: 1rem;
                    color: #48bb78;
                }
                .footer-section ul {
                    list-style: none;
                    padding: 0;
                }
                .footer-section li {
                    margin-bottom: 0.5rem;
                }
                .footer-section a {
                    color: #cbd5e0;
                    text-decoration: none;
                    transition: color 0.3s;
                }
                .footer-section a:hover {
                    color: white;
                }
                .social-icons {
                    display: flex;
                    gap: 1rem;
                    margin-top: 1rem;
                }
                .social-icons a {
                    color: white;
                    background: rgba(255, 255, 255, 0.1);
                    width: 36px;
                    height: 36px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s;
                }
                .social-icons a:hover {
                    background: #48bb78;
                    transform: translateY(-3px);
                }
                .copyright {
                    text-align: center;
                    margin-top: 3rem;
                    padding-top: 1rem;
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                    color: #a0aec0;
                    font-size: 0.875rem;
                }
                @media (max-width: 768px) {
                    .footer-content {
                        grid-template-columns: 1fr;
                    }
                }
            </style>
            <footer>
                <div class="footer-content">
                    <div class="footer-section">
                        <h3>WildTrek</h3>
                        <p>Connecting youth with nature through unforgettable adventures since 2010.</p>
                        <div class="social-icons">
                            <a href="#"><i data-feather="facebook"></i></a>
                            <a href="#"><i data-feather="instagram"></i></a>
                            <a href="#"><i data-feather="twitter"></i></a>
                            <a href="#"><i data-feather="youtube"></i></a>
                        </div>
                    </div>
                    <div class="footer-section">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="#events">Events</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="/gallery.html">Gallery</a></li>
                        </ul>
                    </div>
                    <div class="footer-section">
                        <h3>Information</h3>
                        <ul>
                            <li><a href="/faq.html">FAQ</a></li>
                            <li><a href="/safety.html">Safety</a></li>
                            <li><a href="/terms.html">Terms</a></li>
                            <li><a href="/privacy.html">Privacy</a></li>
                        </ul>
                    </div>
                    <div class="footer-section">
                        <h3>Contact Us</h3>
                        <ul>
                            <li><i data-feather="mail"></i> info@wildtrek.com</li>
                            <li><i data-feather="phone"></i> (555) 123-4567</li>
                            <li><i data-feather="map-pin"></i> 123 Adventure Lane, Forestville</li>
                        </ul>
                    </div>
                </div>
                <div class="copyright">
                    &copy; ${new Date().getFullYear()} WildTrek Youth Adventures. All rights reserved.
                </div>
            </footer>
        `;
    }
}

customElements.define('custom-footer', CustomFooter);
