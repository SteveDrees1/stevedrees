import React, { Component } from "react";
import { Box } from "@mui/material";
import Styles from "./CaseStudy.module.css";
import { HorizontalLineTop, VerticalLineLeft } from "../../common/AnimatedLines/AnimatedLines.component";
import Projects from "../../projects";
import Tilty from "react-tilty";
import Navigation from "../../common/Navigation/Navigation.component";
import { withRouter } from "../../common/withRouter"; // Import the HOC

class CaseStudy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            deliverables: [],
            techUse: [],
        };
    }

    componentDidMount() {
        const { params, navigate } = this.props; // Access params and navigate from props
        const projectToDisplay = Projects.find((item) => item.id === params.caseID);

        if (!projectToDisplay) {
            navigate("/my-work", { replace: true }); // Replace history.replace
        } else {
            this.setState(projectToDisplay);
        }
    }

    render() {
        return (
            <>
                <Box id={Styles.templateWrapper}>
                    <Box id={Styles.left}>
                        <VerticalLineLeft />
                        <Box id={Styles.leftInnerTopBox}>
                            <Box id={Styles.leftInnerTopBoxInnerWrap} className={`fadeIn`}>
                                <VerticalLineLeft />
                                <h3 className={Styles.minorTitle}>Tech Used</h3>
                                <ul className={Styles.boxArticleUL}>
                                    {this.state.techUse.map((label) => (
                                        <li key={label} className={Styles.boxArticleULLI}>
                                            {label}
                                        </li>
                                    ))}
                                </ul>
                            </Box>
                            <Box id={Styles.leftInnerTopBoxInnerWrap} className={`fadeIn`}>
                                <h3 className={Styles.minorTitle}>Deliverables</h3>
                                <ul className={Styles.boxArticleUL}>
                                    {this.state.deliverables.map((label) => (
                                        <li key={label}>{label}</li>
                                    ))}
                                </ul>
                            </Box>
                        </Box>
                        <Box id={Styles.leftInnerBottomBox}>
                            <HorizontalLineTop />
                            <Tilty
                                className={`fadeIn`}
                                style={{ width: "65%", zIndex: 30 }}
                                settings={{ scale: 1.13 }}
                            >
                                <img src={this.state.imgOne} alt={this.state.title} />
                            </Tilty>
                        </Box>
                    </Box>
                    <Box id={Styles.right} className={`fadeIn`}>
                        <Navigation />
                        <Box id={Styles.descWrapper}>
                            <HorizontalLineTop />
                            <h1 id={Styles.caseStudyTitle}>{this.state.title}</h1>
                            <p id={Styles.caseStudyDescription}>{this.state.description}</p>
                        </Box>
                    </Box>
                </Box>
            </>
        );
    }
}

export default withRouter(CaseStudy);
