import * as React from 'react';
import {RouteComponentProps} from "react-router";
import SlideShow from '../SlideShow/SlideShow'

interface IProps extends RouteComponentProps<{ folder: string }> {
}

class Portraits extends React.Component<IProps> {
  public render() {
    // TODO: リスト表示
    return <SlideShow tag={this.props.match.params.folder}/>
  }
}
export default Portraits;
