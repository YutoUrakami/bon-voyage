import * as React from 'react';
import {connect} from 'react-redux'
import {RouteComponentProps, withRouter} from 'react-router-dom'
import {Dispatch} from "redux";
import {topImages} from "../../reducers/imagesListReducer";
import SlideShow from '../slideShow/slideShow';
import "./top.css"

interface DispatchProps {
  dispatch: Dispatch
}

class Top extends React.Component<DispatchProps & RouteComponentProps> {
  public render() {
    return (
      <div className="top">
        <SlideShow/>
      </div>
    )
  }

  public componentWillMount() {
    topImages()(this.props.dispatch);
  }
}

export default withRouter(connect()(Top));
