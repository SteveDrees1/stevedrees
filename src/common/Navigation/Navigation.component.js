import React from 'react';
//import {Route, Link, Redirect} from "react-router-dom";
import {
    Box, Link
} from '@material-ui/core';
import Styles from './Navigation.module.css';
// import Styles from "../../views/MyWork/MyWork.module.css";

// class Navigation extends Component {
//
//     //constructor(props) {
//         //super(props);
//         //this.state = {
//
//         //}
//     //}
//
//     render() {
//         return (
//             <>
//                 <Box>
//                     {5+5}
//                 </Box>
//             </>
//         );
//     }
// }

function Navigation(){
    return(
        <Box id={Styles.BottomNav} className={`fadeIn`}>
            <h1 id={Styles.myNameTextLogo}>Steve Drees</h1>

            <Box id={Styles.navHolder}>
                <Link className={Styles.link} href="/contact" color="inherit">
                    Hire |
                </Link>
                <Link className={Styles.link} href="/my-work" color="inherit">
                    Case Studies |
                </Link>
                {/*<Link className={Styles.link} href="/contact" color="inherit">*/}
                {/*    Hire Me |*/}
                {/*</Link>*/}
                <Link className={Styles.link} href="/William_Drees_Resume.pdf" color="inherit">
                    Resume |
                </Link>
                <Link className={Styles.link} href="/contact" color="inherit">
                    Contact
                </Link>

            </Box>
        </Box>
    )
}

export default Navigation;