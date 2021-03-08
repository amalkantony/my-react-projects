import React, {useState} from 'react';
import Discover from './discover'
import DummyImg from '../../assets/RectComp.png'
import DummyFace from '../../assets/face.png'
import EventTiles from './eventTiles';
import {AiOutlineClockCircle} from 'react-icons/ai'
import {GiVolleyballBall, GiPopcorn} from 'react-icons/gi'
import {MdFlight} from 'react-icons/md'
import { IoLocationSharp } from 'react-icons/io5'
import { FaRegComment } from 'react-icons/fa'
import { AiOutlineShareAlt } from 'react-icons/ai'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

function SearchResult () {

    const [dateState, setDateState] = useState(new Date())

    return (
        <div className="SearchResultLayout">
            <Discover />
            <div className="SearchResultRow">
                <div className="SearchResultRow1">
                    <div className="SearchResultTitleDiv">
                        <div className="SearchResultIcon"><AiOutlineClockCircle/> </div>
                        <div className="SearchResultTitle">Events on selected date</div>
                    </div>
                    <div className="SearchResultDiscoverList">
                        {
                            [...Array(3)].map(item => {
                                return(
                                    <div className="SearchResultEventTile">
                                        <div className="eventTileImg searchEventAdj" style={{backgroundColor:'grey'}}>
                                            <img src={DummyImg} alt="" style={{ width:'100%', height:'100%' }}/>
                                            <div className="eventLocDiv">
                                                <IoLocationSharp style={{ color:'var(--cl_orange)' }}/>    23Km
                                            </div>
                                        </div>
                                        <div className="eventDescpDiv searchEventAdj2">
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
                                                <div><FaRegComment/>  Comments</div>
                                                <div><AiOutlineShareAlt/> Share</div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div style={{ display:'flex', alignItems:'flex-start', justifyContent:'flex-start' }}>
                    <Calendar value={dateState} onChange={setDateState}/>
                </div>
            </div>
            <div className="SearchResultCol">
                <div className="SearchResultTitleDiv">
                    <div className="SearchResultIcon"><GiPopcorn /></div>
                    <div className="SearchResultTitle">Entertainment Events</div>
                </div>
                <div className="SearchResultGrid">
                    {
                        [...Array(8)].map(item => {
                            return(
                                <EventTiles />
                            )
                        })
                    }
                </div>
            </div>
            <div className="SearchResultCol">
                <div className="SearchResultTitleDiv">
                    <div className="SearchResultIcon"><MdFlight/> </div>
                    <div className="SearchResultTitle">Travel Events</div>
                </div>
                <div className="SearchResultGrid">
                    {
                        [...Array(8)].map(item => {
                            return(
                                <EventTiles />
                            )
                        })
                    }
                </div>
            </div>
            <div className="SearchResultCol">
                <div className="SearchResultTitleDiv">
                    <div className="SearchResultIcon"><GiVolleyballBall/> </div>
                    <div className="SearchResultTitle">Sporting Events</div>
                </div>
                <div className="SearchResultGrid">
                    {
                        [...Array(8)].map(item => {
                            return(
                                <EventTiles />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default SearchResult;
