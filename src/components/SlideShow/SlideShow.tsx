import * as React from 'react';
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router";
import {Dispatch} from "redux";
import {Image} from "../../models/image";
import {updateIndex} from "../../reducers/imagesListReducer";
import {ImagesListState} from "../../store";
import Panel from '../Panel/Panel';
import './SlideShow.css'
import {CSSTransition} from 'react-transition-group'
import Loading from '../Loading/Loading'

interface SlideShowProps {
  images: Image[],
  index: number,
  isLoading: boolean
}

interface DispatchProps {
  dispatch: Dispatch
}

class SlideShow extends React.Component<SlideShowProps & DispatchProps & RouteComponentProps> {
  public render() {
    if (this.props.isLoading) {
      return (
        <Loading/>
      )
    } else {
      return (
        <div className="slide-container">
          <div className="slide-box">
            {this.props.images.map((img, index) =>
              <CSSTransition
                classNames="fade"
                in={index === this.props.index}
                appear={true}
                mountOnEnter={true}
                timeout={750}
                key={img.publicId}>
                <Panel srcURL={img.src} caption={img.caption} key={img.publicId}/>
              </CSSTransition>
            )}
          </div>
          <div className="slide-navigation-left">
            <div className="navigation-icon" onClick={this.onClickLeft}>
              <i className="material-icons">chevron_left</i>
            </div>
          </div>
          <div className="slide-navigation-right">
            <div className="navigation-icon" onClick={this.onClickRight}>
              <i className="material-icons">chevron_right</i>
            </div>
          </div>
        </div>
      )
    }
  }
  
  private onClickLeft = (event: React.MouseEvent<HTMLDivElement>) => {
    let nextIndex = this.props.index - 1;
    if (nextIndex < 0) {
      nextIndex = this.props.images.length - 1
    }
    this.props.dispatch(updateIndex(nextIndex));
    event.stopPropagation();
  };

  private onClickRight = (event: React.MouseEvent<HTMLDivElement>) => {
    let nextIndex = this.props.index + 1;
    if (this.props.images.length <= nextIndex) {
      nextIndex = 0
    }
    this.props.dispatch(updateIndex(nextIndex));
    event.stopPropagation();
  };
}

export default withRouter(connect(
  (state: ImagesListState): SlideShowProps => {
    return {
      images: state.list,
      index: state.index,
      isLoading: state.isLoading
    }
  }
)(SlideShow));
