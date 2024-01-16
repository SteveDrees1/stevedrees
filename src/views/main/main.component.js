import React, {Component} from 'react';
import Styles from './main.module.css';

import {BrowserRouter as Router, Route, Switch,} from "react-router-dom";
import Menu from "../Menu/Menu.component";
import MyWork from "../MyWork/MyWork.component";
import CaseStudy from "../CaseStudy/CaseStudy.component";
import Contact from "../Contact/Contact.component";

class App extends Component {
    //constructor(props) {
    //super(props);
    //this.state = {}
    //}

    render() {
        return (
            <>
                <Marco>
                    <Router>
                        <Switch>
                            <Route exact={true} path="/" component={MeName}/>
                            <Route exact={true} path="/menu" component={Menu}/>
                            <Route exact={true} path="/my-work" component={MyWork}/>
                            <Route exact={true} path="/case-study/:caseID" component={CaseStudy}/>
                            <Route exact={true} path="/about" component={CaseStudy}/>
                            <Route exact={true} path="/contact" component={Contact}/>
                        </Switch>
                    </Router>
                </Marco>
            </>
        );
    }
}

export default App;

function Marco(props) {
    return (
        <>
            <div id={Styles.marco}>
                {props.children}
            </div>
        </>
    )
}

function MeName(props) {
    const backgroundClips = [
        "https://media.giphy.com/media/2tTiCSfEEP5QS5TjGr/source.gif",
        "https://media.giphy.com/media/1lvotGQwhzi6O0gQtV/source.gif",
    ];
    let randNumber = Math.floor(Math.random() * backgroundClips.length) + 1
    let background = backgroundClips[(randNumber - 1)];

    return (
        <>
            <div className={Styles.wrappersWrapper}>
                <div id={Styles.meNameWrapper}>
                    <h1 className={Styles.codeDream}
                        style={{backgroundImage: `url(${background})`}}>
                        Steve Drees
                    </h1>
                    <h1 id={Styles.loadText}
                        style={{backgroundImage: `url(${background})`}}
                        className={Styles.codeDream}>
                        <FakeLoader {...props}/>/100
                    </h1>

                </div>
            </div>

        </>
    )
}

function FakeLoader({history}) {
    const [count, setCount] = React.useState(0)
    let i;
    const requestRef = React.useRef();
    const previousTimeRef = React.useRef();

    const animate = time => {
        if (previousTimeRef.current !== undefined) {
            const deltaTime = time - previousTimeRef.current;
            setCount(prevCount => (prevCount + deltaTime * 0.01) % 100);
        }
        previousTimeRef.current = time;
        requestRef.current = window.requestAnimationFrame(animate);
    }

    React.useEffect(() => {
        requestRef.current = window.requestAnimationFrame(animate);
        return () => cancelAnimationFrame(requestRef.current);
    }, []); // Make sure the effect runs only once

    i = `${Math.round(count)}`

    if (i >= 100) {
        cancelAnimationFrame(requestRef.current);
        history.push("/my-work");
    }

    return i

}
