import React from 'react';
import './style/Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import CompareIcon from '@material-ui/icons/Compare';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

function Header() {
    return (
        <div className="Header">
            <div className="logo">
                <a href="/">
                    <img src="https://i.ibb.co/YhnP3jJ/dlogo.png" alt="logo" />
                </a>
            </div>
            <div className="toate_categoriile">
                <div className="menuIcon">
                    <MenuIcon />
                </div>
                <p>Toate categoriile</p>
            </div>
            <div className="input_field">
                <input placeholder="caută în peste 15 000 de produse"></input>
                <div className="searchIcon">
                    <SearchIcon />
                </div>
            </div>
            <div className="options">
                <div className="option">
                    <FavoriteBorderIcon />
                </div>
                <div className="option">
                    <CompareIcon />
                </div>
                <div className="option">
                    <ShoppingCartIcon />
                </div>
            </div>
            <div className="contul_meu">
                <div className="contul_meu_text">contul meu</div>
                <div className="personOutlineIcon"><PersonOutlineIcon /></div>
            </div>
        </div>
    );
};

export default Header;
