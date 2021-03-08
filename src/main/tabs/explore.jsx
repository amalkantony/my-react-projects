import React from 'react';
import {AiOutlineClockCircle} from 'react-icons/ai'
import {GiVolleyballBall, GiPopcorn} from 'react-icons/gi'
import {MdFlight} from 'react-icons/md'

function Explore () {
    return (
        <div className="exploreDivLayout">
            <div className="exploreDivHead">
                <div className="exploreDivTitle">Explore</div>
                <div className="exploreDivSubTitle">What can we help you to find, ?</div>
            </div>
            <div className="exploreSubDiv">
                <div className="exploreBoxDiv">
                    <div className="exploreBoxIcon"><AiOutlineClockCircle /></div>
                    <div className="exploreBoxTitle">Today Events</div>
                </div>
                <div  className="exploreBoxDiv">
                    <div  className="exploreBoxIcon"><GiPopcorn/></div>
                    <div className="exploreBoxTitle">Entertainment</div> 
                </div>
                <div  className="exploreBoxDiv">
                    <div  className="exploreBoxIcon"><MdFlight/></div>
                    <div className="exploreBoxTitle">Travel</div>
                </div>
                <div  className="exploreBoxDiv">
                    <div  className="exploreBoxIcon"><GiVolleyballBall /></div>
                    <div className="exploreBoxTitle">Sporting</div>
                </div>
            </div>
        </div>
    );
}

export default Explore;
