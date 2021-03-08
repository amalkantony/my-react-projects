import React from 'react';
import LogoWhite from '../assets/logo-white 1.png'

function Footer () {
    return (
        <div className="footerDivLayout">
            <div className="footerDivRow1">
                <div className="footerDivTitle">
                    Subscribe to receive latest updates.
                </div>
                <div className="footerSignupDiv">
                    <div className="footerinputDiv">
                        <input type="text" className="footerInput" placeholder="Your email"/>
                    </div>
                    <div className="footerSignupBtn">
                        Sign up
                    </div>
                </div>
            </div>
            <div className="footerDivRow2">
                <div className="footerDivCol1">
                    <div className="footerDivRC1">
                        <img src={LogoWhite} alt="" />
                        <div className="footerDivSubtitle">
                            nfbnfngbnfgb
                        </div>
                    </div>
                    <div className="footerDivSubtitle">
                        Copyright Mutual Events
                    </div>
                </div>
                <div className="footerDivCol2">
                    <div className="footerDivRC2">
                        <div className="footerColTitle">Menu</div>
                        <div className="footerColList">
                            <div>Browse</div>
                            <div>Feed</div>
                            <div>Events</div>
                            <div>Profile</div>
                        </div>
                    </div>
                    <div  className="footerDivRC2">
                        <div className="footerColTitle">Programs</div>
                        <div className="footerColList">
                            <div>Trending</div>
                            <div>Discover</div>
                        </div>
                    </div>
                    <div  className="footerDivRC2">
                        <div className="footerColTitle">Legal</div>
                        <div className="footerColList">
                            <div>Privacy Policy</div>
                            <div>Terms of Service</div>
                            <div>User Guidelines</div>
                        </div>
                    </div>
                </div>
                <div className="footerDivRow3">
                    <div>Facebook</div>
                    <div>twitter</div>
                    <div>LinkedIn</div>
                </div>
            </div>
            
        </div>
    );
}

export default Footer;
