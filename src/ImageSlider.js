import React, {Component} from 'react'

class ImageSlide extends Component {
    constructor(){
        super()
        this.state = {
            currentSlideIndex: 0,
        }
    }
    

    render(){
        return (
            <div>
                I am on slide {this.state.currentSlideIndex}
            </div>
        )
    }
}

export default ImageSlide