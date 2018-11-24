import * as React from 'react';
import './Panel.css'

interface IPanelProps {
  srcURL: string
}

class Panel extends React.Component<IPanelProps> {
  public render() {
    return (
      <div className="panel"><img src={this.props.srcURL} /></div>
    );
  }
}
export default Panel;
