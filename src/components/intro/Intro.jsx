import "./intro.scss"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { init } from 'ityped'
import { useEffect, useRef } from "react";

export default function Intro() {


    const textRef = useRef();


    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 70,
            typeSpeed: 80,
            strings: ["CSS/HTML Developer", "Front-End Web Designer", "React Developer"]
        })
    }, [])

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgWrapper">
                    <img src="assets/man.png" alt="man" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Trevor Jarvis</h1>
                    <h3>Freelance <span ref={textRef}></span></h3>
                    <a href="#portfolio">
                        <ExpandMoreIcon style={{ fontSize: 80 }} />
                    </a>
                </div>
            </div>

        </div>
    )
}
