import React, { Component } from "react";
import { Box } from "@mui/material";
import Styles from "./Menu.module.css";
import { withNavigation } from "../../common/withNavigation"; // Import the HOC

class Menu extends Component {
    render() {
        return (
            <>
                <Box id={Styles.menuWrapper}>
                    <Box id={Styles.topBox} className={Styles.commonBox}>
                        <Box className={Styles.topInnerMenuLinks}>
                            <MenuLink
                                label={"Contact"}
                                size={"2.5vw"}
                                clicked={() => {
                                    this.props.navigate("/contact"); // Use navigate instead of history.push
                                }}
                            />
                        </Box>
                        <Box className={Styles.topInnerMenuLinks} id={Styles.middleLiner}>
                            <MenuLink
                                label={"About"}
                                size={"2.5vw"}
                                clicked={() => {
                                    this.props.navigate("/about");
                                }}
                            />
                        </Box>
                    </Box>
                    <Box id={Styles.middleBox} className={Styles.commonBox}>
                        <MenuLink
                            label={"My Work"}
                            clicked={() => {
                                this.props.navigate("/my-work");
                            }}
                        />
                    </Box>
                    <Box id={Styles.bottomBox} className={Styles.commonBox}>
                        <MenuLink
                            label={"Resume"}
                            size={"2.5vw"}
                            clicked={() => {
                                this.props.navigate("/resume");
                            }}
                        />
                    </Box>
                </Box>
            </>
        );
    }
}

// Wrap the Menu component with the withNavigation HOC
export default withNavigation(Menu);

function MenuLink({ label, size, clicked }) {
    return (
        <Box
            className={Styles.menuLinkWrapper}
            onClick={(e) => {
                clicked(e);
            }}
        >
            <h1
                className={Styles.menuLinkLabel}
                style={{ fontSize: size ? size : "4vw" }}
            >
                {label}
            </h1>
        </Box>
    );
}
