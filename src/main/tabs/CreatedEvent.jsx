import React from 'react';
import DummyImg from '../../assets/Rectangle 21.png'
import DummyFace from '../../assets/face.png'
import { IoLocationSharp } from 'react-icons/io5'
import { FiThumbsUp} from 'react-icons/fi'

function CreatedEvent () {
    return (
        <div className="NewEventCreatedLayout">
            <div className="NewEventCreatedLeft1">
                <div className="NewEventCreatedTitle">See how it looks</div>
                <div className="eventTileLayout">
            <div className="eventTile">
                <div className="eventTileImg">
                    <img src={DummyImg} alt="" style={{ width:'100%', height:'100%' }}/>
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
                    
                </div>
            </div>
        </div>
            </div>
            <div className="NewEventCreatedRight">
                <div className="NewEventCreatedIcon">
                    <FiThumbsUp />
                </div>
                <div className="NewEventCreatedRightTitle">
                    Your event has been added successfully
                </div>
                <div className="NewEventCreatedSubTitle">
                    Now share it with your friends on social media
                </div>
                <div className="NewEventCreatedSocialDiv">
                    <div className="NewEventSocialIcon">icon</div>
                    <div className="NewEventSocialIcon">icon</div>
                    <div className="NewEventSocialIcon">icon</div>
                </div>
                <div className="NewEventCreatedSubTitle">
                    or copy the link and share it in other places 
                </div>
                <div className="NewEventCreatedLinkDiv">
                    <div className="NewEventCreatedInputDiv">
                        <input type="text" className="NewEventCreatedInput"/>
                    </div>
                    <div className="NewEventCreatedBtn">
                        Copy Link
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreatedEvent;
