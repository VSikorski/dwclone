import React from 'react';
import './style/Footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className="footer__upper">
                <div className="footer__col1">
                    <div className="footer__header">Magazin Online</div>
                    <div className="footer__infoSection">
                        <div className="footer__info">gsm.: 060 78 22 23</div>
                        <div className="footer__info">tel.: 022 78 22 22</div>
                        <div className="footer__info">email: sales@darwin.md</div>
                    </div>
                    <div className="footer__icons">
                        <div className="footer__icon1"></div>
                        <div className="footer__icon2"></div>
                        <div className="footer__icon3"></div>
                    </div>
                </div>
                <div className="footer__col2">
                    <div className="footer__header">Relații clienți</div>
                    <div className="footer__infoSection">
                        <div className="footer__info">gsm.: 068 088 443</div>
                        <div className="footer__info">email: reclamatii@darwin.md</div>
                        <div className="footer__info">Contacte</div>
                    </div>
                </div>
                <div className="footer__col3">
                    <div className="footer__header">Servicii</div>
                    <div className="footer__infoSection">
                        <div className="footer__info">Smart Protection</div>
                        <div className="footer__info">Trade-in</div>
                    </div>
                </div>
                <div className="footer__col4">
                    <div className="footer__header">Informații</div>
                    <div className="footer__infoSection">
                        <div className="footer__info">Promoții</div>
                        <div className="footer__info">Lifehack</div>
                        <div className="footer__info">Blog</div>
                        <div className="footer__info">Colecţii</div>
                        <div className="footer__info">Darwin Club</div>
                        <div className="footer__info">Cariera Ta</div>
                        <div className="footer__info">Garanție si servicii</div>
                        <div className="footer__info">Politica de confidențialitate</div>
                    </div>
                </div>
            </div>
            <div className="footer__lower">
                <div className="footer__logo"><img src="https://i.ibb.co/23SFCYy/logo-black.png" alt="Logo"/></div>
                <div className="footer__text">©2021 Website creat în scopuri ne-comerciale, ne afiliat companiei Darwin</div>
                <div className="footer__payment__logo"><img src="https://i.ibb.co/MfLkbZk/css-sprites-min.png" alt="Payment Logos"/></div>
            </div>
        </div>
    )
};

export default Footer;

