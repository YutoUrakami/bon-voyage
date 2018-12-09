import * as React from 'react';
import {connect} from 'react-redux'
import {RouteComponentProps, withRouter } from 'react-router-dom'
import {Dispatch} from "redux";
import {listingByTag} from "../../reducers/imagesListReducer";
import SlideShow from '../SlideShow/SlideShow';

interface DispatchProps {
  dispatch: Dispatch
}

class Top extends React.Component<DispatchProps & RouteComponentProps> {
  public render() {
    return <SlideShow/>
  }

  public componentWillMount() {
    listingByTag("top", 0)(this.props.dispatch);
  }
}

export default withRouter(connect()(Top));
