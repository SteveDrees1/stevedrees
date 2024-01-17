import React, {Component} from 'react';
//import {Route, Link, Redirect} from "react-router-dom";
import {Box, Button, TextField} from '@material-ui/core';
import Styles from './Contact.module.css';
import {
    HorizontalLineBottom,
    HorizontalLineTop,
    VerticalLineLeft,
    VerticalLineRight
} from "../../common/AnimatedLines/AnimatedLines.component";
import Navigation from "../../common/Navigation/Navigation.component";

class Contact extends Component {

    //constructor(props) {
    //super(props);
    //this.state = {

    //}
    //}

    render() {
        return (
            <>
                <Box id={Styles.contactWrapper}>
                    <VerticalLineLeft/>
                    <VerticalLineRight/>
                    <HorizontalLineBottom/>
                    <HorizontalLineTop/>
                    <h1 id={Styles.contactFormTitle} className={`fadeIn`}>
                        Contact Form
                    </h1>
                    <form id={Styles.contactForm} autoComplete="on" className={`fadeIn`}>
                        <TextField
                            className={Styles.inputSpacer}
                            fullWidth
                            id="standard-basic"
                            label="Full Name"
                        />
                        <TextField
                            className={Styles.inputSpacer}
                            fullWidth
                            id="standard-basic"
                            label="Email"
                        />
                        <TextField
                            className={Styles.inputSpacer}
                            fullWidth
                            textarea
                            id="standard-basic"
                            label="Message"
                            multiline
                            rows={10}
                        />
                        <Button
                            id={Styles.sendButton}
                        > Send </Button>
                    </form>
                    {/*<Box width={"62.5%"}>*/}
                    <Navigation/>
                    {/*</Box>*/}

                </Box>
            </>
        );
    }
}

export default Contact;