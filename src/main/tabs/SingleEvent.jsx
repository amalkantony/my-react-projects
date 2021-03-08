import React from 'react';
import EventTiles from './eventTiles';
import DummyFace from '../../assets/face.png'
import DummyBigImg from '../../assets/BigImg.png'
import Gmap from '../../assets/Gmap.png'
import {FaRegCalendarCheck} from 'react-icons/fa'
import { IoMailOutline } from 'react-icons/io5'
import { FiImage, FiCalendar} from 'react-icons/fi'
import { AiOutlineShareAlt, AiOutlineEye, AiOutlineUserAdd } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'
import {Link} from 'react-router-dom'

function SingleEvent () {
    return (
        <div className="singleEventLayout">
            <div className="singleEventBGImg">
                <img src={DummyBigImg} className="singleEventBGimg" style={{ height:'100%', width:'100%', borderRadius:'10px' }} alt="" />
            </div>
            <div className="singleEventContentSect">
                <div className="singleEventContent">
                    <div className="singleEventTitle">Title</div>
                    <div className="eventUsrDiv">
                        <div className="eventUsrDp">
                            <img src={DummyFace} className="eventUsrDp" alt="" style={{ width:'100%', height:'100%' }}/>
                        </div>
                        <div className="eventUsrSub">Name</div>
                        <div className="eventUsrSub">Rating</div>
                    </div>
                    
                    <div className="singleEventDesc">
                    Reynisfjara beach is located conveniently in the middle of the South Coast, adjacent to the village of Vík. This means that those taking the Ring Road around the country, or else those heading to the Jökulsárlón glacier lagoon, will pass it, and are encouraged to make a stop.

The closest major landmark is the Dyrhólaey rock arch and cliffs. While many seabirds are found at Reynisfjara, it is nothing compared to the numbers here. From May to August, it is one of the best places to see puffins from land.

En route to Reynisfjara from Reykjavík, you will discover waterfalls, such as Seljalandsfoss and Skógafoss, and glaciers, such as Eyjafjallajökull and Mýrdalsjökull. Further along the South Coast, you will reach the Vatnajökull National Park, with its many glacier tongues, glacier lagoons, black sand deserts, and the incredible Skaftafell Nature Reserve.

Visitors to Reynisfjara must be made well aware of the potential dangers present at the beach. First of all, the rolling, roaring waves of Reynisfjara are particularly violent, often pushing far further up the beach than many would expect.

These are called sneaker-waves, and they can appear when least expected, even on incredibly still days. There are no significant landmasses in between Antarctica and the shores of Reynisfjara, meaning waves have thousands of kilometers to build.

Visitors are advised to never turn their back on the waves, and keep a safe distance of at least 30 meters (98 feet).

Aside from these sudden and dramatic shifts in the tide, the rip currents offshore are infamous for their strength and ability to drag helpless people out into the freezing cold open ocean. A number of fatal accidents have occurred at Reynisfjara, the last of which occurred in January 2017.<br/>




Reynisfjara beach is located conveniently in the middle of the South Coast, adjacent to the village of Vík. This means that those taking the Ring Road around the country, or else those heading to the Jökulsárlón glacier lagoon, will pass it, and are encouraged to make a stop.

The closest major landmark is the Dyrhólaey rock arch and cliffs. While many seabirds are found at Reynisfjara, it is nothing compared to the numbers here. From May to August, it is one of the best places to see puffins from land.

En route to Reynisfjara from Reykjavík, you will discover waterfalls, such as Seljalandsfoss and Skógafoss, and glaciers, such as Eyjafjallajökull and Mýrdalsjökull. Further along the South Coast, you will reach the Vatnajökull National Park, with its many glacier tongues, glacier lagoons, black sand deserts, and the incredible Skaftafell Nature Reserve.

Visitors to Reynisfjara must be made well aware of the potential dangers present at the beach. First of all, the rolling, roaring waves of Reynisfjara are particularly violent, often pushing far further up the beach than many would expect.

These are called sneaker-waves, and they can appear when least expected, even on incredibly still days. There are no significant landmasses in between Antarctica and the shores of Reynisfjara, meaning waves have thousands of kilometers to build.

Visitors are advised to never turn their back on the waves, and keep a safe distance of at least 30 meters (98 feet).

Aside from these sudden and dramatic shifts in the tide, the rip currents offshore are infamous for their strength and ability to drag helpless people out into the freezing cold open ocean. A number of fatal accidents have occurred at Reynisfjara, the last of which occurred in January 2017.
                    </div>
                    <div className="singleEventContentFooter">
                        <div className="singleEventFooterBox">
                            <div className="singleEventFooterIcon"><FaRegCalendarCheck style={{ color:'var(--cl_orange)' }}/></div>
                            <div>Confirm</div>
                        </div>
                        <div className="singleEventFooterBox">
                            <div className="singleEventFooterIcon"><IoMailOutline style={{ color:'var(--cl_orange)' }}/></div>
                            <div>Subscribe</div>
                        </div>
                        <div className="singleEventFooterBox">
                            <div className="singleEventFooterIcon"><FiImage style={{ color:'var(--cl_orange)' }}/> </div>
                            <div>Add Image</div>
                        </div>
                        <div className="singleEventFooterBox">
                            <div className="singleEventFooterIcon"><AiOutlineShareAlt style={{ color:'var(--cl_orange)' }}/></div>
                            <div>Share</div>
                        </div>
                    </div>
                </div>
                <div className="singleEventSideBar">
                    <div className="singleEventBuyTicketDiv">
                        <div className="singleEventBuyTicketTitle">Buy Tickets</div>
                        <div className="singleEventTicketDet">
                            <div className="singleEventTicketSubDiv">
                                <div className="singleEventTicketSub">Price</div>
                                <div className="singleEventTicketVal">$19.99</div>
                            </div>
                            <div className="singleEventTicketSubDiv">
                                <div className="singleEventTicketSub">Quantity</div>
                                <div className="singleEventTicketCounter">
                                    <div className="counterSwitch">-</div>
                                    <div className="couterNumber">1</div>
                                    <div className="counterSwitch">+</div>
                                </div>
                            </div>
                            <div className="singleEventTicketFinal">
                                <div className="TicketFinalTitle">Total</div>
                                <div className="TicketFinalTitle">$19.90</div>
                            </div>
                            <div className="singleEventTicketBtn">
                                Buy Tickets
                            </div>
                        </div>
                    </div>
                    <div className="singleEventSideBarTabs">
                        <div className="singleEventPopularity">
                            <Link to='/event-media' style={{ textDecoration:'none', color:'black' }}>
                            <div className="singleEventPopTab">
                                <div className="singleEventFooterIcon" ><FaRegComment style={{ color:'var(--cl_orange)' }}/> </div>
                                <div className="featuredProfilesTitle">600</div>
                                <div className="featuredProfileUsrname">Posts</div>
                            </div>
                            </Link>
                            
                            <div className="singleEventPopTab">
                                <div className="singleEventFooterIcon" ><AiOutlineEye style={{ color:'var(--cl_orange)' }}/></div>
                                <div className="featuredProfilesTitle">600</div>
                                <div className="featuredProfileUsrname">Views</div>
                            </div>
                            <div className="singleEventPopTab">
                                <div className="singleEventFooterIcon" ><AiOutlineUserAdd style={{ color:'var(--cl_orange)' }}/></div>
                                <div className="featuredProfilesTitle">600</div>
                                <div className="featuredProfileUsrname">Attending</div>
                            </div>
                            
                        </div>
                        <div className="singleEventMap">
                            <div className="singleEventsMapDisp">
                                <img src={Gmap} alt="" style={{ height:'100%', width:'100%' }}/>
                            </div>
                            <div className="singleEventSideTitle">
                                <div className="featuredProfilesTitle">LocationName</div>
                                <div className="featuredProfileUsrname">landmark</div>    
                            </div>
                        </div>
                        <div className="singleEventDateTimeDiv">
                            <div className="singleEventDateTimeIcon"><FiCalendar style={{ color:'var(--cl_orange)' }}/></div>
                            <div className="singleEventDateTime">
                                <div className="singleEventDateTimeTitle">Fri 25 Oct 2020</div>
                                <div className="featuredProfileUsrname">05:00pm - 07:00pm</div>
                            </div>
                        </div>
                        <div className="singleEventAssinged">
                            <div className="singleEventAssingedTitle">Assigned Role</div>
                            <div className="singleEventMemList">
                                {
                                    [...Array(3)].map(ite => {
                                        return(
                                            <div  className="singleEventMemItem">
                                                <div className="featuredProfileDp">
                                                    <img src={DummyFace} className="featuredProfileDp" alt="" style={{ width:'100%', height:'100%' }}/>
                                                </div>
                                                <div className="featuredProfileDet" style={{ paddingLeft:'10px'}}>
                                                    <div className="featuredProfileName">Name</div>
                                                    <div className="featuredProfileUsrname">username</div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="singleEventPartipantDiv">
                            <div className="singleEventParticipantTitleDiv">
                                <div className="featuredProfilesTitle">Participants</div><div className="featuredProfilesSubTitle">See all</div>
                            </div>
                            <div className="singleEventParticipantList">
                                {
                                    [...Array(3)].map(itm => {
                                        return(
                                            <div className="singleEventParticipantDP">
                                                <img src={DummyFace}  className="singleEventParticipantDP" alt="" style={{height:'100%', width:'100%'}} />
                                            </div>
                                        )
                                    })
                                }
                                <div className="singleEventParticipantDP" style={{backgroundColor:'var(--cl_light_grey)'}}>3+</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="singleEventsSimilarEventsDiv">
                <div className="singleEventSimilarEventTitle">Similar Events</div>
                <div className="similarEventLists">
                    {
                        [...Array(4)].map((item,key)=>{
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

export default SingleEvent;
