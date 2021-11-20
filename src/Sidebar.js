import React from 'react';
import "./Sidebar.css";
import { Avatar } from '@mui/material';
import bg_ava from './bg_ava.jpg'

function Sidebar() {

        const recentItem = (topic) => (
            <div className="sidebar__recentItem">
                <span className="sidebar__hash">#</span>
                <p>{topic}</p>
            </div>
        );

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&w=1000&q=80" alt=""/>
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
                {recentItem('reactjs')}
                {recentItem('Program')}
                {recentItem('Python')}
                {recentItem('C++')}
            </div>
        </div>
    );
}

export default Sidebar
