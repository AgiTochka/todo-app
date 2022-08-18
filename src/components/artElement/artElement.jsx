import React from "react";
import './artElement.css'

class ArtElement extends React.Component {
    render() {
        return (
            <div style={this.props.difStyle} className='header-wellcome' >
                <div className='responsive-box one'>
                    <div className='circle '></div>
                </div>
                <div className='responsive-box two'>
                    <div className='circle'></div>
                </div>
            </div>
        );
    }

}
 export default ArtElement;
