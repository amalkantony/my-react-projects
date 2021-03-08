import React from 'react';
import EventTile from './eventTiles'

function Recommended () {
    return (
        <div className="recomLayout">
            <div className="exploreDivHead">
                <div className="exploreDivTitle">Recommended for you</div>
                <div className="exploreDivSubTitle">Expeirience events based on your interests</div>
            </div>
            <div className="recomEventsLists">
                {
                    [...Array(12)].map((item,key)=>{
                        return(
                            <EventTile/>
                        )
                    })
                }
            </div>
            <div className="recomLoadBtn">
                <div className="topBarDivBtn">
                    Load More
                </div>
            </div>
            
        </div>
    );
}

export default Recommended;
