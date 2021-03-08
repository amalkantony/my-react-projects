import React from 'react';
import FeaturedProfiles from '../common/featuredProfiles'
import ProfileMini from './tabs/profileMiniTab'
import Discover from './tabs/discover'
import Explore from './tabs/explore'
import Recommended from './tabs/recommended'
import './style.css'

function UserIndex () {
    return (
            <div className="mainContentSectionExp">
                <div className="mainContentDiv">
                    <Discover />
                    <Explore />
                    <Recommended />
                </div>
                <div style={{ display:'flex', flexDirection:'column' }}>
                    <ProfileMini />
                    <FeaturedProfiles/>
                </div>
            </div>  
    );
}

export default UserIndex;
