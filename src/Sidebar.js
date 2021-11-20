import React from 'react';
import "./Sidebar.css";
import { Avatar } from '@mui/material';
import bg_ava from './bg_ava.jpg'

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src={bg_ava} alt=""/>
                <Avatar className="sidebar__avatar" />
                <h2>Apri Kurniawansyah</h2>
                <h4>Student Of Institute Teknologi Sumatera</h4>
            </div>
            
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who Viewed You</p>
                    <p className="sidebar__statNumber">2.543</p>
                </div>
                <div className="sidebar__stat">
                    <p>Viewed On Post</p>
                    <p className="sidebar__statNumber">2.444</p>
                </div>
            </div>

            <div className="sidebar__buttom">
                <p>Recent</p>
            </div>
        </div>
    );
}

export default Sidebar
