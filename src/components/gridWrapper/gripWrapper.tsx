import * as React from 'react';
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {listingInFolder} from "../../reducers/imagesListReducer";
import Grid from '../grid/grid'
import * as title from "../../helpers/title"

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
    listingInFolder(this.props.folderName)(this.props.dispatch);
  }
  
  public componentDidMount = (): void => {
    title.set(this.props.folderName);
  };
  
  public componentDidUpdate = (prevProps: Readonly<GripWrapperProps & DispatchProps>) => {
    if (prevProps.folderName !== this.props.folderName) {
      listingInFolder(this.props.folderName)(this.props.dispatch);
      title.set(this.props.folderName);
    } 
  }
}
export default connect()(GripWrapper);
