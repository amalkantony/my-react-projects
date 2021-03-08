import React from 'react';
import DummyFace from '../assets/face.png'

function FeaturedProfiles () {
    return (
        <div className="featuredProfilesLayouts">
            <div className="featuredProfilesTitleDiv">
                <div className="featuredProfilesTitle">Featured Profiles</div>
                <div className="featuredProfilesSubTitle">See All</div>
            </div>
            <div className="featuredProfilesList">
                {
                    [...Array(5)].map((item,key)=>{
                        return(
                        <div  className="featuredProfilesListItem">
                            <div className="featuredProfileDp">
                                <img src={DummyFace} className="featuredProfileDp" alt="" style={{ width:'100%', height:'100%' }}/>
                            </div>
                            <div className="featuredProfileDet">
                                <div className="featuredProfileName">Name</div>
                                <div className="featuredProfileUsrname">username</div>
                            </div>
                            <div className="topBarDivBtn">
                                Follow
                            </div>
                        </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default FeaturedProfiles;
