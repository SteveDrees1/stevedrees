import React, {Component} from 'react';
//import {Route, Link, Redirect} from "react-router-dom";
import { 
    Box 
} from '@material-ui/core';
import Styles from './Menu.module.css';

class Menu extends Component {

    //constructor(props) {
        //super(props);
        //this.state = {
            
        //}
    //}
    
    render() {
        return (
            <>
                <Box id={Styles.menuWrapper}>
                    <Box id={Styles.topBox} className={Styles.commonBox}>
                        <Box className={Styles.topInnerMenuLinks}>
                            <MenuLink label={"Contact"} size={"2.5vw"}
                                      clicked={()=>{
                                          this.props.history.push("/contact");
                                      }}
                            />
                        </Box>
                        <Box className={Styles.topInnerMenuLinks} id={Styles.middleLiner}>
                            <MenuLink label={"About"} size={"2.5vw"}
                                      clicked={()=>{
                                          this.props.history.push("/about");
                                      }}
                            />
                        </Box>
                    </Box>
                    <Box id={Styles.middleBox} className={Styles.commonBox}>
                        <MenuLink label={"My Work"}
                                  clicked={()=>{
                                      this.props.history.push("/my-work");
                                  }}
                        />
                    </Box>
                    <Box id={Styles.bottomBox} className={Styles.commonBox}>
                        <MenuLink label={"Resume"} size={"2.5vw"}
                            clicked={()=>{
                                this.props.history.push("/resume")
                            }}
                        />
                    </Box>
                </Box>
            </>
        );
    }
}
export default Menu;

function MenuLink({label, size, clicked}){
    return(
        <Box className={Styles.menuLinkWrapper} onClick={(e)=>{ clicked(e)}}>
            <h1 className={Styles.menuLinkLabel} style={{fontSize: size ? size : "4vw"}}>
                {label}
            </h1>
        </Box>
    )
}