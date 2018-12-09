import * as React from 'react';
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router";
import {Image} from "../../models/image";
import {ImagesListState} from "../../store";
import Panel from '../Panel/Panel';
import './SlideShow.css'

interface SlideShowProps {
  images: Image[],
  index: number
}

class SlideShow extends React.Component<SlideShowProps & RouteComponentProps> {
  public render() {
    return (
      <div className="slide-container">
        <div className="slide-box">
          {this.props.images.filter((img, index) =>
            index === this.props.index
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
    let nextIndex = this.props.index - 1;
    if (nextIndex < 0) {
      nextIndex = this.props.images.length - 1
    }
    this.props.history.push(`#${nextIndex}`)
  };

  private onClickRight = () => {
    let nextIndex = this.props.index + 1;
    if (this.props.images.length <= nextIndex) {
      nextIndex = 0
    }
    this.props.history.push(`#${nextIndex}`)
  };
}

export default withRouter(connect(
  (state: ImagesListState): SlideShowProps => {
    return {
      images: state.list,
      index: state.index
    }
  }
)(SlideShow));
