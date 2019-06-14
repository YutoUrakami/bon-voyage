import * as React from 'react';
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router";
import {Dispatch} from "redux";
import {Image} from "../../models/image";
import {updateSlideShowIndex} from "../../reducers/imagesListReducer";
import Panel from '../panel/panel';
import './slideShow.css'
import {Transition} from 'react-transition-group'
import Loading from '../loading/loading'
import {FolderListState, ImagesListState, BurgerMenuState, SwipeHandlerState} from "../../store";
import * as Hammer from 'hammerjs'
import {registerSwipeHandler} from "../../reducers/swipeHandlerReducer";

interface SlideShowProps {
  images: Image[],
  index: number,
  isLoading: boolean,
  swipeHandlerRegistered: boolean
}

interface DispatchProps {
  dispatch: Dispatch
}

class SlideShow extends React.Component<SlideShowProps & DispatchProps & RouteComponentProps> {
  constructor(props) {
    super(props);
    this.state = {
      swipeHandlerRegistered: false
    }
  }

  public render() {
    if (this.props.isLoading) {
      return (
        <Loading/>
      )
    } else {
      return (
        <div className="slide-container">
          <div className="slide-box" id="slide-box">
            {this.props.images.map((img, index) =>
              <Transition
                in={index === this.props.index}
                timeout={300}
                key={img.publicId}>
                {status => (
                  <Panel srcURL={img.src}
                         caption={img.caption}
                         transitionClassName={`fade fade-${status}`}
                  />
                )}
              </Transition>
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

  public componentDidMount(): void {
    if (this.registerSlideSwipeHandler()) {
      registerSwipeHandler()(this.props.dispatch)
    }
  }

  public componentDidUpdate(): void {
    if (!this.props.swipeHandlerRegistered) {
      if (this.registerSlideSwipeHandler()) {
        registerSwipeHandler()(this.props.dispatch)
      }
    }
  }

  private registerSlideSwipeHandler = (): boolean => {
    const slideBox = document.getElementById("slide-box");
    if (!slideBox) {
      return false;
    }
    const mc = new Hammer.Manager(slideBox, {
      recognizers: [
        [Hammer.Swipe, {direction: Hammer.DIRECTION_HORIZONTAL}]
      ]
    });
    mc.set({enable: true});
    mc.on("swipe", this.swipeHandler);
    return true;
  };

  private swipeHandler = (input: HammerInput) => {
    if (input.direction === Hammer.DIRECTION_LEFT) {
      this.next()
    } else {
      this.previous()
    }
    input.srcEvent.stopPropagation();
  };

  private previous = () => {
    let nextIndex = this.props.index - 1;
    if (nextIndex < 0) {
      nextIndex = this.props.images.length - 1
    }
    updateSlideShowIndex(nextIndex)(this.props.dispatch);
  };

  private next = () => {
    let nextIndex = this.props.index + 1;
    if (this.props.images.length <= nextIndex) {
      nextIndex = 0
    }
    updateSlideShowIndex(nextIndex)(this.props.dispatch);
  };

  private onClickLeft = (event: React.MouseEvent<HTMLDivElement>) => {
    this.previous();
    event.stopPropagation();
  };

  private onClickRight = (event: React.MouseEvent<HTMLDivElement>) => {
    this.next();
    event.stopPropagation();
  };
}

export default withRouter(connect(
  (state: {
    folders: FolderListState,
    images: ImagesListState,
    burger: BurgerMenuState,
    swipeHandler: SwipeHandlerState
  }): SlideShowProps => {
    return {
      images: state.images.list,
      index: state.images.index,
      isLoading: state.images.isLoading,
      swipeHandlerRegistered: state.swipeHandler.registered
    }
  }
)(SlideShow));
