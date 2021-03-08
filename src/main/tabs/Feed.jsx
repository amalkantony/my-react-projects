import React from 'react';
import FeaturedProfiles from '../../common/featuredProfiles';
import DummyFace from '../../assets/face.png'
import DummyImg from '../../assets/Rectangle 21.png'
import {IoIosArrowForward} from 'react-icons/io'
import { IoLocationSharp } from 'react-icons/io5'
import { FaRegComment } from 'react-icons/fa'
import { AiOutlineShareAlt, AiOutlineEye } from 'react-icons/ai'
import { FiSend } from 'react-icons/fi'
import {FcLike} from 'react-icons/fc'

function Feed () {
    return (
        <div className="FeedLayout">
            <div className="FeedSideBar">
                <div className="FeedSideBarTitleDiv">
                    <div className="FeedSideBarTitle">Your Feed</div>
                    <div className="FeedSideBarSub">Lorem ipsum dolor sit amet enim</div>
                </div>
                <div className="FeedSideBarList">
                    <div className="FeedSideBarItemActive">
                        <div>All Events</div>
                        <div><IoIosArrowForward /></div>
                    </div>
                    <div className="FeedSideBarItem">
                        <div>Trending</div>
                        <div><IoIosArrowForward /></div>
                    </div>
                </div>
            </div>
            <div className="FeedList">
                {
                    [...Array(12)].map(item => {
                        return(
                            <div className="FeedItemLayout">
                                <div className="FeedItemTopBar">
                                    <div className="FeedItemUsr">
                                        <div className="FeedItemUsrDp">
                                            <img src={DummyFace} className="FeedItemUsrDp" alt=""/>
                                        </div>
                                        <div className="FeedItemUsrDetails">
                                            <div className="FeedItemUsrName">Name</div>
                                            <div className="FeedItemUsrTime">Time</div>
                                        </div>
                                    </div>
                                    <div className="FeedItemUsrName" style={{ paddingRight:'5px' }}>...</div>
                                </div>
                                <div className="FeedItemImage">
                                    <img src={DummyImg} alt="" className="FeedItemImage" style={{ width:'100%', height:'100%' }}/>
                                    <div className="eventLocDiv">
                                        <IoLocationSharp style={{ color:'var(--cl_orange)' }}/>    23Km
                                    </div>
                                </div>
                                <div className="FeedItemEventFooter">
                                    <div className="FeedItemEventDp">
                                        <img src={DummyFace} className="FeedItemEventDp" alt=""/>
                                    </div>
                                        <div className="FeedItemUsrDetails">
                                            <div className="FeedItemEventName">Whats New</div>
                                            <div className="FeedItemEventTime">Time</div>
                                        </div>
                                </div>
                                <div className="FeedItemIconShareDiv">
                                    <div className="FeedItemIconDiv">
                                        <div><FcLike/> <span>3</span></div>
                                        <div><FaRegComment/> <span>2 comments</span></div>
                                        <div><AiOutlineEye/> <span>5</span></div>
                                    </div>
                                    <div>
                                        <AiOutlineShareAlt/> <span>Share</span>
                                    </div>
                                </div>
                                <div className="FeedItemCommentBox">
                                    <div className="FeedItemUsrDp">
                                        <img src={DummyFace} className="FeedItemUsrDp" alt=""/>
                                    </div>
                                    <div className="FeedItemUsrDetails">
                                        <div className="FeedItemUsrName">Name</div>
                                        <div className="FeedItemUsrTime">coment</div>
                                    </div>
                                </div>
                                <div className="FeedItemReplyBox">
                                    <div className="FeedItemReplyDp">
                                        <img src={DummyFace} alt=""  className="FeedItemReplyDp"/>
                                    </div>
                                    <div className="FeedItemReplyInputDiv">
                                        <input type="text"  className="FeedItemReplyInput"/>
                                        <div  className="FeedItemReplyBtn">
                                            <FiSend style={{ color:'var(--cl_orange)', fontSize:'14px'}}/>
                                            <span>SEND</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="FeedLeftBar">
                <FeaturedProfiles />
            </div>
        </div>
    );
}

export default Feed;
