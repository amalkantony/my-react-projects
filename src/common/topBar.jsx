import React, { useState } from 'react';
import Logo from '../assets/logo.png'
import {NotificationIcon} from './icon'
import './style.css'
import { MdSearch } from "react-icons/md"; 
import { useLocation, Link } from 'react-router-dom';

function TopBar () {

    const [navBtnActive, setNavBtnActive] = useState(null)
    const {pathname} = useLocation()
    let split_path = pathname.split('/')

    return (
        <div className="topBarDivLayout">
            <div className="topBarDivLeftLayout">
                <div className="topBarDivImg">
                    <img src={Logo} alt="" />
                </div>
                <div className="inputFieldDiv" style={{ alignItems:'center' }}> 
                    <input className="inputFieldStyle" type="text" placeholder="Search"/>
                    <MdSearch style={{ width:'21px', height:'21px', color:'#7D7D8D' }} />
                </div>
            </div>
            <div className="topBarDivRightLayout">
                <div className="topBarNavDiv">
                    <Link to='/home' style={{ textDecoration:'none' }}>
                    <div id='Browse' className={ (navBtnActive==="Browse"||split_path[1]==='search'||split_path[1]==='home') 
                    ? "topBarNavDivBtnActive" : "topBarNavDivBtn"} onClick={()=>setNavBtnActive('Browse')}>
                        Browse
                    </div>
                    </Link>
                    <Link to='/feed' style={{ textDecoration:'none' }}>
                    <div  id='Feed' className={ (navBtnActive==="Feed"||split_path[1]==='feed') 
                    ? "topBarNavDivBtnActive" : "topBarNavDivBtn"} onClick={()=>setNavBtnActive('Feed')}>
                        Feed
                    </div>
                    </Link>
                    <Link to='/event' style={{ textDecoration:'none' }}>
                    <div  id='Events' className={ (navBtnActive==="Events"||split_path[1]==='event'||
                    split_path[1]==='event-media'||split_path[1]==='add_event'||split_path[1]==='event_success') 
                    ? "topBarNavDivBtnActive" : "topBarNavDivBtn"} onClick={()=>setNavBtnActive('Events')}>
                        Events
                    </div>
                    </Link>
                    <Link to='/profile' style={{ textDecoration:'none' }}>
                    <div  id='Profile' className={ navBtnActive==="Profile"||split_path[1]==='profile' ? "topBarNavDivBtnActive" : "topBarNavDivBtn"} onClick={()=>setNavBtnActive('Profile')}>
                        Profile
                    </div>
                    </Link>
                    <div style={{ pointerEvents:'none' }} id='Loyalty' className={ navBtnActive==="Loyalty" ? "topBarNavDivBtnActive" : "topBarNavDivBtn"} onClick={()=>setNavBtnActive('Loyalty')}>
                        Loyalty Program
                    </div>
                </div>
                {
                    navBtnActive!=="Browse"?
                <div className="topBarDivIcon">
                    <NotificationIcon />
                </div>
                :
                null
                }
                <Link to="/add_event" style={{ textDecoration:'none' }} onClick={()=>setNavBtnActive('Events')}>
                <div className="topBarDivBtn">
                    Add Event
                </div>
                </Link>
                
                {
                    navBtnActive!=="Browse"?
                null :
                
                <div className="topBarDivBtnInv">
                    Sign Up
                </div>
                }
            </div>
        </div>
    );
}

export default TopBar;
