import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import logo from './logo.svg';


function Header() {
    return (
        <div className='header'>
            <h1>Header Component</h1>

            <div className="header__left">
                <img src={logo} alt=""/>

                <div className="header__serach">
                    <SearchIcon />
                    <input type="text"/>
                </div>
            </div>

            <div className="header__right">

            </div>
        </div>
    )
}

export default Header
