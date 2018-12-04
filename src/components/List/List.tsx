import * as React from 'react';
import {Image} from '../../models/image'
import * as cloudFunctions from '../../services/cloudFunctions';
import './/List.css'

interface ListProps {
  folderName: string
}

interface ListState {
  images: Image[]
}

class List extends React.Component<ListProps, ListState> {
  constructor(props: any) {
    super(props);
    this.state = {
      images: []
    }
  }

  public render() {
    return (
      <div className="folder-tree-root">
        <div className="folder-container">
          {this.state.images.map((img) => {
            return (
              <div key={img.publicId} className="folder-item">
                <img src={this.imgThumbnailUrl(img.src)}/>
                <div className="folder-item-mask">
                  <div className="caption">description</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  public componentWillMount() {
    cloudFunctions.listImagesInFolder(this.props.folderName)
      .then((data) => {
        this.setState({
          images: data.sort((a, b) => {
            return a.publicId < b.publicId ? -1 : 1
          })
        })
      })
  }

  private imgThumbnailUrl = (originalUrl: string): string => {
    const searchStr = '/image/upload/';
    const insertIndex = originalUrl.indexOf(searchStr) + searchStr.length;
    return [originalUrl.slice(0, insertIndex), `c_thumb,h_720,w_720/`, originalUrl.slice(insertIndex)].join('');
  };
}

export default List;
