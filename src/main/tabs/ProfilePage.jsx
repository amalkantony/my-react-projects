import React from 'react';
import DummyBG from '../../assets/bgImg.png'
import DummyFace from '../../assets/face.png'
import EventTiles from './eventTiles';
import {IoMdAdd} from 'react-icons/io'
import {BiPhone} from 'react-icons/bi'
import { IoMailOutline } from 'react-icons/io5'
import { IoLocationOutline } from 'react-icons/io5'
import {  FiCalendar, FiUsers, FiUserCheck } from 'react-icons/fi' 


function ProfilePage () {
    return (
        <div className="ProfilePageLayout">
            <div className="ProfileBGImg">
                <img src={DummyBG} alt="" className="ProfileBGImg"/>
            </div>
            <div className="ProfilePageRow1">
                <div className="ProfilePageCol1">
                    <div className="ProfilePageRC1">
                        <div className="ProfilePageDp">
                            <img src={DummyFace} className="ProfilePageDp" alt=""/>
                        </div>
                        <div className="ProfileNameDiv">
                            <div className="ProfileName">Sophie Harrison</div>
                            <div className="ProfileUsrName">@sophie_harrison</div>
                        </div>
                    </div>
                    <div className="ProfileBio">
                    Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi. Aliquam erat ac ipsum. Integer aliquam purus. 
                    </div>
                    <div className="ProfileStoriesDiv">
                        <div className="ProfileStory">
                            <div className="ProfileStoryAddIcon"><IoMdAdd/></div>
                            <div className="ProfileStoryTitleAdd">Add New</div>
                        </div>
                        {
                            [...Array(3)].map(item => {
                                return(
                                    <div className="ProfileStory">
                                        <div className="ProfileStoryIcon">
                                            <img src={DummyFace} alt="" className="ProfileStoryIcon" style={{ width:'64px', height:'64px' }}/>
                                        </div>
                                        <div className="ProfileStoryTitle">Patrik</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="ProfilePageCol2">
                    <div className="ProfilePageContactTitle">Contact</div>
                    <div className="ProfilePageContactDiv"><IoLocationOutline/> <span>3 Bleeker Street</span></div>
                    <div className="ProfilePageContactDiv"><BiPhone/> <span>+ 41 445 626 7289</span></div>
                    <div className="ProfilePageContactDivEmail"><IoMailOutline/> <span>sophie@mutualevent.com</span></div>
                </div>
                <div className="ProfilePageCol3">
                    <div className="ProfilePage">
                        <div className="ProfileTab">
                            <div className="ProfileTabDig">500</div>
                            <div className="ProfileTabSub">
                                <FiUsers/><span>Followers</span>
                            </div>
                        </div>
                        <div className="ProfileTab">
                            <div className="ProfileTabDig">500</div>
                            <div className="ProfileTabSub">
                                <FiUserCheck /><span>Following</span>
                            </div>
                        </div>
                        <div className="ProfileTab">
                            <div className="ProfileTabDig">500</div>
                            <div className="ProfileTabSub">
                                <FiCalendar /><span>Events</span>
                            </div>
                        </div>
                    </div>
                    <div className="ProfileBtnDiv">
                        <div className="ProfileBtn">Edit Profile</div>
                        <div className="ProfileBtn">Go Live</div>
                    </div>
                    <div className="ProfileLoayaltyBtn">
                        Loyalty Program
                    </div>
                </div>
            </div>
            <div className="ProfilePageRow2">
                <div className="EventMediaSepDiv">
                    <div className="EventMediaSepActive">Recap</div>
                    <div className="EventMediaSepInActive">Events</div>
                    <div className="EventMediaSepInActive">Media</div>
                    <div className="EventMediaSepInActive">Tickets</div>  
                </div>
                <div className="ProfilePageRC2">
                    {
                        [...Array(12)].map(item =>{
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

export default ProfilePage;
