import * as React from 'react';
import {connect} from 'react-redux'
import {RouteComponentProps, withRouter } from 'react-router-dom'
import {Dispatch} from "redux";
import {listingByTag, updateIndex} from "../../reducers/imagesListReducer";
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
      this.parseIndex(this.props.location.hash)
    )(this.props.dispatch);
  }
  
  public componentWillReceiveProps(nextProps: Readonly<DispatchProps & RouteComponentProps>, nextContext: any): void {
    const newIndex = this.parseIndex(nextProps.location.hash);
    this.props.dispatch(updateIndex(newIndex));
  }
  
  // public componentWillUnmount(): void {
  //   this.props.dispatch(clearImages());
  // }

  private parseIndex(hash: string): number {
    const match = hash.match(/^#([0-9]+)/);
    let index = 0;
    if (match) {
      index = parseInt(match[1], 10)
    }
    return index
  }
}

export default withRouter(connect()(Top));
