import React, {useState} from 'react';
import Gmap from '../../assets/Gmap.png'
import DummyFace from '../../assets/face.png'
import DummyImg from '../../assets/Rectangle 21.png'
import {IoMdAdd} from 'react-icons/io'
import {BsImages} from 'react-icons/bs'
import {GiVolleyballBall, GiPopcorn} from 'react-icons/gi'
import {MdFlight} from 'react-icons/md'
import {FiSun, FiCalendar, FiWatch } from 'react-icons/fi'
import {IoMdCheckmark} from 'react-icons/io'
import { BiSearch } from 'react-icons/bi'
import { Link } from 'react-router-dom'

function AddEvent () {

    const [eventStage, setEventStage] = useState(1)
    const [toggleCheck, setToggleCheck] = useState(false)
    const [eventStageTitle, setEventStageTitle ] = useState("General")

    const [cat1, setCat1] = useState(0)
    const [cat2, setCat2] = useState(0)
    const [cat3, setCat3] = useState(0)
    const [cat4, setCat4] = useState(0)
    
    const nextStage = () =>{
        setEventStage(eventStage+1)
        if(eventStage===1)
            setEventStageTitle("Location")
        else if(eventStage===2)
            setEventStageTitle("Date and Time")
        else if(eventStage===3)
            setEventStageTitle("Invite Users")
        else if(eventStage===4)
            setEventStageTitle("Participants")
        else
            setEventStageTitle("Suggestions")
    }

    const prevStage = () =>{
        setEventStage(eventStage-1)
        if(eventStage===2)
            setEventStageTitle("General")
        else if(eventStage===3)
            setEventStageTitle("Location")
        else if(eventStage===4)
            setEventStageTitle("Date and Time")
        else if(eventStage===5)
            setEventStageTitle("Invite Users")
        else
            setEventStageTitle("Participants")
    }

    return (
        <div className="AddEventLayout">
            <div className="AddEventSidebar">
                <div className="AddEventSideTitle">
                    <div className="AddEventSideIcon"><IoMdAdd /></div>
                    <div className="AddEventSideBarTitle">Add event</div>
                </div>
                <div className="AddEventSubSide">
                    <div className="AddEventSub">
                        {   eventStage===1?
                        <div className="AddEventSubSideIconActive">1</div> : <div className="AddEventSubSideIconComplete"><IoMdCheckmark/> </div>
                        }
                        <div className={ eventStage!==1? "AddEventSubSideTitleComplete" : "AddEvenSubSideTitleActive"}>General</div>
                    </div>
                    <div className="AddEventSub">
                        {   eventStage<=2?
                                <div className={ eventStage===2 ? "AddEventSubSideIconActive":"AddEventSubSideIcon" }>2</div> 
                            :   <div className="AddEventSubSideIconComplete"><IoMdCheckmark/> </div>
                        }
                        <div className={ eventStage<2? "AddEventSubSideTitle" : eventStage!==2 ? "AddEventSubSideTitleComplete" : "AddEvenSubSideTitleActive"}>Location</div>
                    </div>
                    <div className="AddEventSub">
                        {   eventStage<=3?
                                <div className={ eventStage===3 ? "AddEventSubSideIconActive":"AddEventSubSideIcon" }>3</div> 
                            :   <div className="AddEventSubSideIconComplete"><IoMdCheckmark/> </div>
                        }
                        <div className={ eventStage<3? "AddEventSubSideTitle" : eventStage!==3 ? "AddEventSubSideTitleComplete" : "AddEvenSubSideTitleActive"}>Date and Time </div>
                    </div>
                    <div className="AddEventSub">
                        {   eventStage<=4?
                                <div className={ eventStage===4 ? "AddEventSubSideIconActive" : "AddEventSubSideIcon"}>4</div> 
                            :   <div className="AddEventSubSideIconComplete"><IoMdCheckmark/> </div>
                        }
                        <div className={ eventStage<4? "AddEventSubSideTitle" : eventStage!==4 ? "AddEventSubSideTitleComplete" : "AddEvenSubSideTitleActive"}>Invite Users</div>
                    </div>
                    <div className="AddEventSub">
                        {   eventStage<=5?
                                <div className={ eventStage===5 ? "AddEventSubSideIconActive" : "AddEventSubSideIcon"}>5</div> 
                            :   <div className="AddEventSubSideIconComplete"><IoMdCheckmark/> </div>
                        }
                        <div className={ eventStage<5? "AddEventSubSideTitle" : eventStage!==5 ? "AddEventSubSideTitleComplete" : "AddEvenSubSideTitleActive"}>Participants</div>
                    </div>
                    <div className="AddEventSub">
                        {   eventStage<=6?
                                <div className={ eventStage===6 ? "AddEventSubSideIconActive" : "AddEventSubSideIcon"}>6</div> 
                            :   <div className="AddEventSubSideIconComplete"><IoMdCheckmark/></div>
                        }
                        <div className={ eventStage<6? "AddEventSubSideTitle" : eventStage!==6 ? "AddEventSubSideTitleComplete" : "AddEvenSubSideTitleActive"}>Suggestions</div>
                    </div>    
                </div>
            </div>
            <div className="AddEventContentLayout">
                <div className="AddEventContentTitle">{eventStageTitle}</div>
                {
                    eventStage===1?
                        <div className="AddEventContent">
                            <div className="AddEventSect1">
                                <div className="AddEventSectTitle">Click to add image</div>
                                <div className="AddEventSectImgInput">
                                    <BsImages style={{ color:'var(--cl_orange)' }}/>
                                </div>
                            </div>
                            <div className="AddEventSect2">
                                <div className="AddEventSectTitle">Title</div>
                                <div className="AddEventSectInputDiv">
                                    <input type="text" className="AddEventSectInput"/>
                                </div>
                            </div>
                            <div className="AddEventSect3">
                                <div className="AddEventSectTitle">Select Category</div>
                                <div className="exploreSubDiv">
                                    <div className={ !cat1 ? "exploreBoxDiv" : "exploreBoxDiv exploreBoxDivBorder"} onClick={()=>setCat1(!cat1)}>
                                        <div className="exploreBoxIcon"><GiPopcorn /></div>
                                        <div className="exploreBoxTitle">Entertainment</div>
                                    </div>
                                    <div className={ !cat2 ? "exploreBoxDiv" : "exploreBoxDiv exploreBoxDivBorder"} onClick={()=>setCat2(!cat2)}>
                                        <div  className="exploreBoxIcon"><MdFlight/></div>
                                        <div className="exploreBoxTitle">Travel</div> 
                                    </div>
                                    <div className={ !cat3 ? "exploreBoxDiv" : "exploreBoxDiv exploreBoxDivBorder"} onClick={()=>setCat3(!cat3)}>
                                        <div  className="exploreBoxIcon"><FiSun /></div>
                                        <div className="exploreBoxTitle">Holidays</div>
                                    </div>
                                    <div className={ !cat4 ? "exploreBoxDiv" : "exploreBoxDiv exploreBoxDivBorder"} onClick={()=>setCat4(!cat4)}>
                                        <div  className="exploreBoxIcon"><GiVolleyballBall /></div>
                                        <div className="exploreBoxTitle">Sporting</div>
                                    </div>
                                </div>
                            </div>
                            <div className="AddEventSect4">
                                <div className="AddEventSectTitle">About</div>
                                <div className="AddEventSectTextAreaDiv">
                                    <textarea className="AddEventSectTextArea" cols="80" rows="10"></textarea>
                                </div>
                            </div>
                            <div className="AddEventSect5">
                                <div className="toggleSwitch">
                                    <input type="checkbox" defaultChecked={toggleCheck} onChange={() => { setToggleCheck(!toggleCheck); }}/>
                                    <span className="sliderBox roundedSlider"></span>
                                </div>
                                <div className="AddEventSectTitle"  style={{ paddingLeft:'20px' }}>Include reviews and ratings</div>
                            </div>
                        </div>
                    :   eventStage===2?
                        <div className="AddEventContent">
                            <div className="AddEventSect1">
                                <div className="AddEventSectTitle">Search Location</div>
                                <div className="AddEventSectInputDiv">
                                    <input type="text" className="AddEventSectInput"/>
                                    <BiSearch/>
                                </div>
                            </div>
                            <div className="AddEventMapDiv">
                                <img src={Gmap} className="AddEventMapDiv" style={{ height:'100%', width:'100%' }} alt=""/>
                            </div>
                        </div>
                    :   eventStage===3?
                        <div className="AddEventContent">
                            <div className="AddEventSect1">
                                <div className="AddEventDateTime">
                                    <div className="AddEventDateTimeIcon"><FiCalendar  style={{ color:'var(--cl_orange)' }}/></div>
                                    <div className="AddEventSectTitle">Date</div>
                                </div>
                                <div className="AddEventSectInputDiv AddEventDateTimeInput" style={{ width:'15vw' }}>
                                    <input type="text"  className="AddEventSectInput"/>
                                </div>
                            </div>
                            <div className="AddEventSect2">
                                <div className="AddEventDateTime">
                                    <div className="AddEventDateTimeIcon"><FiWatch  style={{ color:'var(--cl_orange)' }}/></div>
                                    <div className="AddEventSectTitle">From</div>
                                </div>
                                <div className="AddEventSectInputDiv AddEventDateTimeInput" style={{ width:'10vw' }}>
                                    <input type="text"  className="AddEventSectInput"/>
                                </div>
                            </div>
                            <div className="AddEventSect3" style={{ paddingBottom: '30px' }}>
                                <div className="AddEventDateTime">
                                    <div className="AddEventDateTimeIcon"><FiWatch  style={{ color:'var(--cl_orange)' }}/></div>
                                    <div className="AddEventSectTitle">To</div>
                                </div>
                                <div className="AddEventSectInputDiv AddEventDateTimeInput" style={{ width:'10vw' }}>
                                    <input type="text"  className="AddEventSectInput"/>
                                </div>
                            </div>
                        </div>
                    :   eventStage===4?
                        <div className="AddEventContent">
                            <div className="AddEventSect1">
                                <div className="AddEventSect1">
                                    <div className="AddEventSectTitle">Name, Contact No</div>
                                    <div className="AddEventSectInputDiv">
                                        <input type="text" className="AddEventSectInput"/>
                                    </div>
                                </div>
                                <div className="AddEventUserList">
                                    {
                                        [...Array(10)].map(item => {
                                            return(
                                                <div className="AddEventUserItem">
                                                    <div className="AddEventUserSec2">
                                                        username
                                                    </div>
                                                    <div className="AddEventUserSec1">
                                                        <div className="AddEventUserCheckDiv">
                                                            <input type="checkbox"  className="AddEventUserCheckBox"/>
                                                        </div>
                                                        <div className="AddEventUserDp">
                                                            <img src={DummyFace} alt=""  className="AddEventUserDp"/>
                                                        </div>
                                                        <div className="AddEventUsrName">Name</div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    :   eventStage===5?
                    <div className="AddEventContent">
                    
                        <div className="AddEventSect1">
                            <div className="AddEventSectTitle">Search </div>
                            <div className="AddEventSectInputDiv">
                                <input type="text" className="AddEventSectInput"/>
                            </div>
                        </div>
                        <div className="AddEventUserList">
                            {
                                [...Array(10)].map(item => {
                                    return(
                                        <div className="AddEventUserItem">
                                            <div className="AddEventRoleAssign">
                                                Assigned Role
                                            </div>
                                            <div className="AddEventUserSec2">
                                                username
                                            </div>
                                            <div className="AddEventUserSec1">
                                                <div className="AddEventUserDp">
                                                    <img src={DummyFace} alt=""  className="AddEventUserDp"/>
                                                </div>
                                                <div className="AddEventUsrName">Name</div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    
                </div>
                    :   eventStage===6?
                        <div  className="AddEventContent">
                            <div className="AddEventSect1">
                                <div className="AddEventSectTitle">Select similar things to your events</div>
                                <div className="AddEventTilesList">
                                    {
                                        [...Array(6)].map(ite => {
                                            return(
                                            <div className="eventTileLayout">
                                                <div className="eventTile">
                                                    <div className="eventTileImg">
                                                        <img src={DummyImg} alt="" style={{ width:'100%', height:'100%' }}/>
                                                    </div>                    
                                                    <div className="eventDescpDiv">
                                                        
                                                        <div className="eventDescTitle">
                                                            London Fashion Week Fashion Shows and Events
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    :   null

                }
                <div className="AddEventFooter">
                    {   eventStage !== 6?
                        <div className="AddEventNextBtn" onClick={()=> nextStage()}>Next Step</div>     :   
                        <Link to='/event_success' style={{ textDecoration:'none' }}>
                        <div  className="AddEventNextBtn">Complete</div>
                        </Link>
                    }
                    {   eventStage !== 1?
                        <div className="AddEventCancelBtn" onClick={()=> prevStage()}>Cancel</div>   :   null
                    }
                </div>
            </div>
            
        </div>
    );
}

export default AddEvent;
