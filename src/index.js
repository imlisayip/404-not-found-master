import React from "react";
import ReactDom from "react-dom";
import "./styles.scss"
import scarecrow from "url:./Scarecrow.png"

const Header = () => {
    return (
        <div className="nav">
            404 not found
        </div>
    )
}
const Image = () => {
    return (
        <div className="image">
            <img src={scarecrow} alt="scarecrow" />
        </div>
    )
}
const Info = () => {
    return (
        <div className="info">
            <h1>I have bad news for you</h1>
            <p>
                The page you are looking for might be removed or is temporarily unavailable
            </p>
            <button>Back to Homepage</button>
        </div>
    )
}
const App = () => {
    return (
        <>
            <Header />
            <div className="media-text">
                <Image />
                <Info />
            </div>
        </>
    )
}
ReactDom.render(<App />, document.getElementById("app"));