import React from 'react';
import DummyFace from '../../assets/face.png'
import DummyMedia from '../../assets/RectComp.png'
import {AiOutlineEye, AiOutlineUserAdd } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'
import {Link} from 'react-router-dom'

function EventMedia () {
    return (
        <div className="EventMediaLayout">
            <Link to='/event' style={{ textDecoration:'none', color:'var(--cl_light_grey)' }}>
            <div className="backLinkBtn">Back </div>
            </Link>
            <div className="EventMediaTopLayout">
                <div className="EventMediaTopBar">
                    <div className="EventMediaTitle">Reynisfjara Black Sand Beach</div>
                    <div className="EventMediaUsrDetails">
                        <div className="EventMediaUsrDp">
                            <img src={DummyFace} className="EventMediaUsrDp" alt="" style={{ width:'100%', height:'100%' }}/>
                        </div>
                        
                        <div className="EventMediaByName">By Name</div>
                    </div>
                </div>
                <div className="singleEventPopularity" style={{ width:'320px' }}>
                    <div className="singleEventPopTab singleEventPopTabActive">
                        <div className="singleEventFooterIcon singleEventFooterIconActive" >
                            <FaRegComment style={{ color:'var(--cl_orange)' }}/> </div>
                        <div className="featuredProfilesTitle featuredProfilesTitleActive">600</div>
                        <div className="featuredProfileUsrname featuredProfileUsrnameActive">Posts</div>
                    </div>
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
                        
            </div>
            <div className="EventMediaSepDiv">
              <div className="EventMediaSepActive">All</div>
              <div className="EventMediaSepInActive">Photos</div>
              <div className="EventMediaSepInActive">Videos</div>  
            </div>
            <div className="EventMediaImgGrids">
                {
                    [...Array(25)].map(item => {
                        return(
                            <div className="EventMediaTile"
                            style={{backgroundSize: 'cover', 
                            backgroundImage: " url("+ DummyMedia +")"}}
                            >
                                <div className="EventMediaTileUsr">
                                    <div className="EventMediaTileUsrDP">
                                        <img src={DummyFace} className="EventMediaTileUsrDP" alt="" style={{ width:'100%', height:'100%' }}/>
                                    </div>
                                    <div className="EventMediaTileUsrName">Name</div>
                                </div>
                                <div className="EventMediaTileUsrViews">115K views</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default EventMedia;
