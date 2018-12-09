import * as React from 'react';
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router";
import {Image} from '../../models/image'
import {ImagesListState} from "../../store";
import './Grid.css'

interface GridProps {
  images: Image[]
}

class Grid extends React.Component<GridProps & RouteComponentProps> {
  public render() {
    return (
      <div className="folder-tree-root">
        <div className="folder-container">
          {this.props.images.map((img) => {
            return (
              <div key={img.publicId} className="folder-item">
                <img src={this.imgThumbnailUrl(img.src)}/>
                <div className="folder-item-mask">
                  <div className="caption">{img.caption}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  private imgThumbnailUrl = (originalUrl: string): string => {
    const searchStr = '/image/upload/';
    const insertIndex = originalUrl.indexOf(searchStr) + searchStr.length;
    return [originalUrl.slice(0, insertIndex), `c_thumb,h_720,w_720/`, originalUrl.slice(insertIndex)].join('');
  };
}

export default withRouter(connect(
  (state: ImagesListState): GridProps => {
    return {
      images: state.list,
    }
  }
)(Grid));
