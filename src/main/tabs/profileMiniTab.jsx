import React, {useState} from 'react';
import DummyFace from '../../assets/face.png'
import {IoSettingsOutline} from 'react-icons/io5'
import {  FiCalendar, FiUsers, FiUserCheck } from 'react-icons/fi' 

function ProfileMiniTab () {
    const [toggleCheck, setToggleCheck] = useState(false)
    return (
        <div className="userProfileTab">
            <div className="userProfileAction">
                <div><IoSettingsOutline /></div>
                <div className="toggleSwitch">
                    <label className="labelText">Public</label>
                    <input type="checkbox" defaultChecked={toggleCheck} onChange={() => { setToggleCheck(!toggleCheck); }}/>
                    <span className="sliderBox roundedSlider"></span>
                </div>
            </div>
            <div className="userProfileDetails">
                <div className="userProfilePic">
                    <img src={DummyFace} style={{ width:'100%', height:'100%', borderRadius:'15px' }} alt=""/>
                </div>
                <div className="userProfileName">
                    Name
                </div>
                <div className="userProfileUsrName">
                    username
                </div>
            </div>
            <div className="userProfileFooter">
                <div className="userProfileData">
                    <div className="userFollowDiv">
                        <div className="userFollowNmbr">500</div>
                        <div className="usrFlwDataRec">
                            <div className="usrFlwIcon"><FiUsers/></div>
                            <div className="usrFlwData">Followers</div>
                        </div>
                    </div>
                    <div className="userFollowDiv">
                        <div className="userFollowNmbr">500</div>
                        <div className="usrFlwDataRec">
                            <div className="usrFlwIcon"><FiUserCheck/></div>
                            <div className="usrFlwData">Following</div>
                        </div>
                    </div>
                    <div className="userFollowDiv">
                        <div className="userFollowNmbr">500</div>
                        <div className="usrFlwDataRec">
                            <div className="usrFlwIcon"><FiCalendar/></div>
                            <div className="usrFlwData">Events</div>
                        </div>
                    </div>
                </div>
                <div className="usrProfileFooterActions">
                    <div className="topBarDivBtnInv">Edit Profile</div>
                    <div className="topBarDivBtnInv">Go Live</div>
                </div>
            </div>
        </div>
    );
}

export default ProfileMiniTab;
