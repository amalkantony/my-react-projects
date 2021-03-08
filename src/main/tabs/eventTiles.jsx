import React from 'react';
import DummyImg from '../../assets/Rectangle 21.png'
import DummyFace from '../../assets/face.png'
import { IoLocationSharp } from 'react-icons/io5'
import { FaRegComment } from 'react-icons/fa'
import { AiOutlineShareAlt } from 'react-icons/ai'
import { Link } from 'react-router-dom'

function EventTiles () {
    return (
        <div className="eventTileLayout">
            <Link to='/event' style={{ textDecoration:'none', color:'black' }}>
            <div className="eventTile">
                <div className="eventTileImg">
                    <img src={DummyImg} alt="" style={{ width:'100%', height:'100%', borderRadius:'10px 10px 0 0' }}/>
                    <div className="eventLocDiv">
                    <IoLocationSharp style={{ color:'var(--cl_orange)' }}/>    23Km
                    </div>
                </div>
                
                <div className="eventDescpDiv">
                    <div className="eventUsrDiv">
                        <div className="eventUsrDp">
                            <img src={DummyFace} className="eventUsrDp" alt="" style={{ width:'100%', height:'100%' }}/>
                        </div>
                        <div className="eventUsrSub">Name</div>
                        <div className="eventUsrSub">Date</div>
                    </div>
                    <div className="eventDescTitle">
                        London Fashion Week Fashion Shows and Events
                    </div>
                    <div className="eventfooter">
                        <div><FaRegComment/> Comments</div>
                        <div><AiOutlineShareAlt/></div>
                    </div>
                </div>
            </div>
            </Link>
            
        </div>
    );
}

export default EventTiles;
