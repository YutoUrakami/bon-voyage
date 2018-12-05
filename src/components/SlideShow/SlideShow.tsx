import * as React from 'react';
import {connect} from "react-redux";
import {Image} from "../../models/image";
import {ImagesListState} from "../../store";
import Panel from '../Panel/Panel';
import './SlideShow.css'

interface SlideShowProps {
  images: Image[]
}

class SlideShow extends React.Component<SlideShowProps> {
  constructor(props: any) {
    super(props);
    this.state = {
      update: false
    }
  }

  public render() {
    return (
      <div className="slide-container">
        <div className="slide-box">
          {this.props.images.filter((img, index) =>
            index === 0 // TODO: path parameterで受け取る
          ).map((img) =>
            <Panel srcURL={img.src} key={img.publicId}/>
          )}
        </div>
        <div className="slide-navigation-left">
          <div className="navigation-icon">
            <i className="fas fa-chevron-left" onClick={this.onClickLeft}/>
          </div>
        </div>
        <div className="slide-navigation-right">
          <div className="navigation-icon">
            <i className="fas fa-chevron-right" onClick={this.onClickRight}/>
          </div>
        </div>
      </div>
    )
  }
  
  private onClickLeft = () => {
    // TODO
    return
  };

  private onClickRight = () => {
    // TODO
    return
  };
}

export default connect(
  (state: ImagesListState): SlideShowProps => {
    return {images: state.list}
  }
)(SlideShow);
