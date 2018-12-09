import * as React from 'react';
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {listingInFolder} from "../../reducers/imagesListReducer";
import Grid from '../Grid/Grid'

interface DispatchProps {
  dispatch: Dispatch
}

class Portraits extends React.Component<DispatchProps> {
  public render() {
    return <Grid/>
  }
  
  public componentWillMount(): void {
    listingInFolder("portraits")(this.props.dispatch)
  }
}
export default connect()(Portraits);
