import React from 'react';
import s from './Footer.module.css'

const Footer = () => {
    return (
        <div className={s.footerContainer}>
            <div>
                <div className={s.contactsBlock}>
                    <span className={s.contactsTitle}>Contacts:</span>
                    <ul>
                        <li>
                            <a href="https://uk-ua.facebook.com">Facebook</a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/">Instagram</a>
                        </li>
                        <li>
                            <a href="https://github.com/SmorzhaniukCinis">GitHub</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;
