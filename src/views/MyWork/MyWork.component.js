import React, {Component} from 'react';
//import {Route, Link, Redirect} from "react-router-dom";
import {
    Box
} from '@material-ui/core';
import Styles from './MyWork.module.css';
import {VerticalLineLeft, HorizontalLineTop} from "../../common/AnimatedLines/AnimatedLines.component";
import Tilty from "react-tilty";
import Navigation from "../../common/Navigation/Navigation.component";

class MyWork extends Component {

    //constructor(props) {
        //super(props);
        //this.state = {

        //}
    //}

    handleCaseStudyClick(to){
        this.props.history.push(`/case-study/${to}`)
    }

    render() {
        return (
            <>
                <Box id={Styles.templateWrapper}>
                    <Box id={Styles.left} className={Styles.innerBox}>
                        <VerticalLineLeft/>
                        <Box className={Styles.middleInnerBox}>
                            <Box className={Styles.horizontalMobile}>
                                <HorizontalLineTop/>
                            </Box>
                            <Tilty className={"fadeIn"} id={Styles.fundersTextWrapper} settings = {{
                                scale: 1.1,
                            }}>
                                <WorkTemp
                                    img={"/img/ProjectUnknownLogo.png"}
                                    logo={"/img/ProjectUnknownTextLogo.png"}
                                    logoStyle={{marginTop: "0", transform: "translateZ(100px)"}}
                                    clicked={()=>{this.handleCaseStudyClick("ProjectUnknown")}}
                                />
                            </Tilty>
                        </Box>
                        <Box className={Styles.middleInnerBox}>
                            <HorizontalLineTop/>
                            <Tilty className={"fadeIn"} id={Styles.fundersTextWrapper} settings = {{
                                scale: 1.1,
                            }}>
                                <WorkTemp
                                    img={"/img/Buildings.png"}
                                    logo={"/img/FundersTextLogo.png"}
                                    logoStyle={{marginTop: "-95px", transform: "translateZ(100px)"}}
                                    clicked={()=>{this.handleCaseStudyClick("FundersLink")}}
                                />
                            </Tilty>
                        </Box>
                    </Box>
                    <Box id={Styles.middle} className={Styles.innerBox}>
                        <VerticalLineLeft/>
                        <Box className={Styles.horizontalMobile}>
                            <HorizontalLineTop/>
                        </Box>
                        <Box className={Styles.middleInnerBox} >
                            <Tilty className={"fadeIn"} id={Styles.devMindWrapper} settings = {{
                                scale: 1.1,
                            }}>
                                <WorkTemp
                                    img={"/img/DevMindLogo.png"}
                                    logo={"/img/DevMindTextLogo.png"}
                                    logoStyle={{marginTop: "0px"}}
                                    clicked={()=>{this.handleCaseStudyClick("DevMind")}}
                                />
                            </Tilty>
                        </Box>
                        <Box className={Styles.middleInnerBox}>
                            <HorizontalLineTop/>
                            <Tilty style={{width: "84%", zIndex: 30}} className={"fadeIn"}  settings = {{
                                scale: 1.08,
                            }}>
                                <img className={`fadeIn`}
                                     src={"/img/AetherLogoAndTextLogo.png"}
                                     alt={"Aether Description"}
                                     onClick={()=>{this.handleCaseStudyClick("Aether")}}
                                />
                            </Tilty>
                        </Box>
                    </Box>
                    <Box id={Styles.right} className={Styles.innerBox}>
                        <Box id={Styles.topRightNavigation}>
                            <Navigation />
                        </Box>
                        <Box id={Styles.rightWorkCont}>
                            <HorizontalLineTop/>
                            <Tilty className={"fadeIn"} id={Styles.Studio953Wrapper} settings = {{
                                scale: 1.1,
                            }}>
                                <WorkTemp
                                    img={"/img/Studio953Logo.png"}
                                    logo={"/img/Studio953TextLogo.png"}
                                    logoStyle={{marginTop: "0px"}}
                                    clicked={()=>{this.handleCaseStudyClick("Studio953")}}
                                />
                            </Tilty>
                        </Box>
                    </Box>
                </Box>
            </>
        );
    }
}
export default MyWork;


function WorkTemp({img, logo, logoStyle, clicked}){
    return(
        <Box className={Styles.workTemp} onClick={(e)=>{clicked(e)}}>
            <img src={img} alt={"FundersLink Description"}/>
            <img src={logo} style={logoStyle} alt={"FundersLink Description"}/>
        </Box>
    )
}