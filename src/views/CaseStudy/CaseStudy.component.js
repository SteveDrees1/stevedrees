import React, {Component} from 'react';
//import {Route, Link, Redirect} from "react-router-dom";
import {Box} from '@material-ui/core';
import Styles from './CaseStudy.module.css';
import {HorizontalLineTop, VerticalLineLeft} from "../../common/AnimatedLines/AnimatedLines.component";
import Projects from '../../projects'
import Tilty from "react-tilty";
import Navigation from "../../common/Navigation/Navigation.component";

class CaseStudy extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            deliverables: [],
            techUse: []
        }
    }

    componentDidMount() {
        let projectToDisplay = Projects.filter(item => item.id === this.props.match.params.caseID)[0];
        if (projectToDisplay === undefined || null) {
            this.props.history.replace("/my-work");
        } else {
            this.setState(projectToDisplay);
        }
    }

    render() {
        return (
            <>
                <Box id={Styles.templateWrapper}>
                    <Box id={Styles.left}>
                        <VerticalLineLeft/>
                        <Box id={Styles.leftInnerTopBox}>
                            <Box id={Styles.leftInnerTopBoxInnerWrap} className={`fadeIn`}>
                                <VerticalLineLeft/>
                                <h3 className={Styles.minorTitle}>
                                    Tech Used
                                </h3>
                                <ul className={Styles.boxArticleUL}>
                                    {
                                        this.state.techUse.map((label) => {
                                            return (
                                                <li
                                                    key={label}
                                                    className={Styles.boxArticleULLI}>
                                                    {label}
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </Box>
                            <Box id={Styles.leftInnerTopBoxInnerWrap} className={`fadeIn`}>
                                <h3 className={Styles.minorTitle}>
                                    Deliverables
                                </h3>
                                <ul className={Styles.boxArticleUL}>
                                    {
                                        this.state.deliverables.map((label) => {
                                            return (
                                                <li key={label}>{label}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </Box>
                        </Box>
                        <Box id={Styles.leftInnerBottomBox}>
                            <HorizontalLineTop/>
                            <Tilty className={`fadeIn`} style={{width: "65%", zIndex: 30}} settings={{
                                scale: 1.13,
                            }}>
                                <img src={this.state.imgOne}/>
                            </Tilty>
                        </Box>
                    </Box>
                    <Box id={Styles.right} className={`fadeIn`}>
                        <Navigation/>
                        <Box id={Styles.descWrapper}>
                            <HorizontalLineTop/>
                            <h1 id={Styles.caseStudyTitle}>
                                {this.state.title}
                            </h1>
                            <p id={Styles.caseStudyDescription}>
                                {this.state.description}
                            </p>
                        </Box>

                    </Box>
                </Box>
            </>
        );
    }
}

export default CaseStudy;

function FadeIn(props) {
    return (
        <>
            {props.children}
        </>
    )
}