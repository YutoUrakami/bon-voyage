import * as React from 'react';
import {connect} from 'react-redux'
import {Dispatch} from "redux";
import {listingByTag} from "../../reducers/imagesListReducer";
import SlideShow from '../SlideShow/SlideShow';

interface DispatchProps {
  dispatch: Dispatch
}

class Top extends React.Component<DispatchProps> {
  public render() {
    return <SlideShow/>
  }

  public componentWillMount() {
    listingByTag("top")(this.props.dispatch);
  }
}

export default connect()(Top);
