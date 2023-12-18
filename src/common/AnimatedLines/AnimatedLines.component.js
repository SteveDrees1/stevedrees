import React from 'react';
//import {Route, Link, Redirect} from "react-router-dom";
import {
    Box
} from '@material-ui/core';
import Styles from './AnimatedLines.module.css';

// class AnimatedLines extends Component {
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
// export default AnimatedLines;

function _HorizontalLineTop(){
    return(
        <div className={`${Styles.horizontalLineTop}`}>
        </div>
    )
}

function _HorizontalLineBottom(){
    return(
        <div className={`${Styles.horizontalLineBottom}`}>
        </div>
    )
}

function _VerticalLineLeft(){
    return(
        <div className={Styles.verticalLineLeft}>
        </div>
    )
}

function _VerticalLineRight(){
    return(
        <div className={Styles.verticalLineRight}>
        </div>
    )
}

export const VerticalLineLeft = _VerticalLineLeft;
export const VerticalLineRight = _VerticalLineRight
export const HorizontalLineTop = _HorizontalLineTop;
export const HorizontalLineBottom = _HorizontalLineBottom;