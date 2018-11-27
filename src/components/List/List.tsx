import * as React from 'react';
import * as cloudFunctions from '../../services/cloudFunctions';
import './/List.css'

interface IProps {
  folderName: string
}

interface IState {
  images: Array<{ [key: string]: any }>
}

class List extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      images: []
    }
  }

  public render() {
    return (
      <div className="folder-tree-root">
        <div className="folder-container columns">
          {this.state.images.map((img) => {
            return (
              <div key={img.publicId} className="column is-2-desktop is-one-third-tablet is-half-mobile">
                <img src={this.imgThumbnailUrl(img.src)}/>
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
    return [originalUrl.slice(0, insertIndex), `c_thumb,h_320,w_320/`, originalUrl.slice(insertIndex)].join('');
  };
}

export default List;
