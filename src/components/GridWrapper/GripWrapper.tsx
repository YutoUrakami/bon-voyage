import * as React from 'react';
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {listingInFolder} from "../../reducers/imagesListReducer";
import Grid from '../Grid/Grid'

interface GripWrapperProps {
  folderName: string
}

interface DispatchProps {
  dispatch: Dispatch
}

class GripWrapper extends React.Component<GripWrapperProps & DispatchProps> {
  public render() {
    return <Grid/>
  }

  public componentWillMount(): void {
    listingInFolder(this.props.folderName)(this.props.dispatch)
  }
  
  public componentWillReceiveProps(nextProps: GripWrapperProps & DispatchProps) {
    listingInFolder(nextProps.folderName)(nextProps.dispatch)
  }
}
export default connect()(GripWrapper);
