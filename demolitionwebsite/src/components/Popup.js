import React, { Component } from "react";
import "./Images.css";

class App extends Component {
    render() {
        return(
            <div className="popupParent">
                <div className="popupImage">
                    <button className="imageClosingButton">
                        X
                    </button>
                    {/* eslint-disable-next-line */}
                    <img src = {this.props.popImageUrl} />
                </div>

            </div>
        )
    }
}
export default App;