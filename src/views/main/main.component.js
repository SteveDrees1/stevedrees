import Styles from './main.module.css';
import React, {Component} from "react";
import {useRoutes, useNavigate } from "react-router-dom";
import MyWork from "../MyWork/MyWork.component";
import CaseStudy from "../CaseStudy/CaseStudy.component";
import Contact from "../Contact/Contact.component";
import About from "../About/About.component";
import Menu from "../Menu/Menu.component";

const AppRoutes = () => {
    const routes = useRoutes([
        {path: "/", element: <MeName/>},
        {path: "/menu", element: <Menu/>},
        {path: "/my-work", element: <MyWork/>},
        {path: "/case-study/:caseID", element: <CaseStudy/>},
        {path: "/about", element: <About/>},
        {path: "/contact", element: <Contact/>},
    ]);
    return routes;
};

class App extends Component {

    render() {
        return (
            <>
                <Marco>
                    <AppRoutes/>;
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
    const navigate = useNavigate();
    const [count, setCount] = React.useState(0)
    let i;
    const requestRef = React.useRef();
    const previousTimeRef = React.useRef();

    // Stabilize `animate` using React.useCallback
    const animate = React.useCallback((time) => {
        if (previousTimeRef.current !== undefined) {
            const deltaTime = time - previousTimeRef.current;
            setCount((prevCount) => (prevCount + deltaTime * 0.01) % 100);
        }
        previousTimeRef.current = time;
        requestRef.current = window.requestAnimationFrame(animate);
    }, []); // Empty dependency array ensures `animate` is stable

    // Set up the animation effect
    React.useEffect(() => {
        requestRef.current = window.requestAnimationFrame(animate);
        return () => cancelAnimationFrame(requestRef.current);
    }, [animate]); // `animate` is now stable and safely included as a dependency

    i = `${Math.round(count)}`

    if (i >= 100) {
        cancelAnimationFrame(requestRef.current);
        navigate("/my-work");
    }

    return i

}
