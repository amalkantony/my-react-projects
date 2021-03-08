import React from 'react';
import './style.css';
import { MdKeyboardArrowDown } from 'react-icons/md'
import {  FiCalendar } from 'react-icons/fi' 
import { IoLocationOutline } from 'react-icons/io5'
import { BiSearch } from 'react-icons/bi'
import { Link } from 'react-router-dom';


function Discover () {
    return (
        <div className="discoverDivLayout">
            <div className="discoverDivTitle">Discover event around you</div>
            <div className="discoverSubDiv">
                <div className="discoverInputDiv">
                    <input type="text" className="discoverInputField" style={{ width:'60%', maxWidth:'20vw', minWidth:'11vw' }} placeholder="Keyword"/>
                </div>
                <div className="discoverInputDiv">
                    <input type="text" className="discoverInputField"  style={{ width:'50%', maxWidth:'17vw', minWidth:'6vw' }} placeholder="All Categories"/>
                    <MdKeyboardArrowDown />
                </div>
                <div className="discoverInputDiv">
                    <input type="text" className="discoverInputField"  style={{ width:'50%', maxWidth:'17vw', minWidth:'6vw' }} placeholder="Any date"/>
                    <FiCalendar />
                </div>
                <div className="discoverInputDiv">
                    <input type="text" className="discoverInputField"  style={{ width:'50%', maxWidth:'17vw', minWidth:'6vw' }} placeholder="Location"/>
                    <IoLocationOutline style={{ color:'white' }}/>
                </div>
                <Link to="/search" style={{ textDecoration:'none' }}>
                <div  className="topBarDivBtn">
                    <BiSearch />
                    Search
                </div>
                </Link>
                
            </div>
        </div>
    );
}

export default Discover;
