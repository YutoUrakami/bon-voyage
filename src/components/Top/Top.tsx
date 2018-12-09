import * as React from 'react';
import {connect} from 'react-redux'
import {RouteComponentProps, withRouter } from 'react-router-dom'
import {Dispatch} from "redux";
import {listingByTag, updateIndex} from "../../reducers/imagesListReducer";
import {parseIndex} from "../../utilities";
import SlideShow from '../SlideShow/SlideShow';

interface DispatchProps {
  dispatch: Dispatch
}

class Top extends React.Component<DispatchProps & RouteComponentProps> {
  public render() {
    return <SlideShow/>
  }

  public componentWillMount() {
    listingByTag(
      "top",
      parseIndex(this.props.location.hash)
    )(this.props.dispatch);
  }
  
  public componentWillReceiveProps(nextProps: Readonly<DispatchProps & RouteComponentProps>, nextContext: any): void {
    const newIndex = parseIndex(this.props.location.hash);
    this.props.dispatch(updateIndex(newIndex));
  }
}

export default withRouter(connect()(Top));
