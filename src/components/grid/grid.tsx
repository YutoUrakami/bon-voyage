import * as React from 'react';
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router";
import {Dispatch} from "redux";
import {Image} from '../../models/image'
import {updateSlideShowIndex} from "../../reducers/imagesListReducer";
import {FolderListState, ImagesListState} from "../../store";
import SlideShow from "../slideShow/slideShow";
import './grid.css'
import Loading from "../loading/loading";
import {CSSTransition} from "react-transition-group";

interface GridProps {
  images: Image[],
  isLoading: boolean
}

interface DispatchProps {
  dispatch: Dispatch
}

class Grid extends React.Component<GridProps & DispatchProps & RouteComponentProps> {
  public render() {
    if (this.props.isLoading) {
      return (
        <Loading/>
      )
    } else {
      return (
        <React.Fragment>
          <div className="grid_root">
            <div className="grid_container">
              {this.props.images.map((img, index) => {
                return (
                  <CSSTransition
                    classNames="fade"
                    in={true}
                    appear={true}
                    mountOnEnter={true}
                    timeout={750}
                    key={img.publicId}>
                    <div key={img.publicId} className="grid_item" id={index.toString(10)} onClick={this.launchModal}>
                      <img src={this.imgThumbnailUrl(img.src)} alt={img.caption}/>
                      <div className="grid_item_mask">
                        <div className="caption">{img.caption}</div>
                      </div>
                    </div>
                  </CSSTransition>
                )
              })}
            </div>
          </div>
          <div className="modal_window" id="slideModal" onClick={this.closeModal}>
            <div className="modal_content">
              <SlideShow/>
            </div>
            <div className="modal-close-button" onClick={this.closeModal}>
              <i className="material-icons">close</i>
            </div>
          </div>
        </React.Fragment>
      )
    }
  }

  private imgThumbnailUrl = (originalUrl: string): string => {
    const searchStr = '/image/upload/';
    const insertIndex = originalUrl.indexOf(searchStr) + searchStr.length;
    return [originalUrl.slice(0, insertIndex), `c_thumb,h_720,w_720/`, originalUrl.slice(insertIndex)].join('');
  };

  private launchModal = (event: React.MouseEvent<HTMLDivElement>) => {
    const gridItem = event.currentTarget.closest(".grid_item");
    if (!gridItem) {
      return;
    }
    const index = parseInt(gridItem.id, 10);
    updateSlideShowIndex(index)(this.props.dispatch);
    const slideModal = document.getElementById("slideModal");
    if (slideModal) {
      slideModal.style.display = "block";
    }
  };

  private closeModal = () => {
    updateSlideShowIndex(-1)(this.props.dispatch);
    const slideModal = document.getElementById("slideModal");
    if (slideModal) {
      slideModal.style.display = "none";
    }
  }
}

export default withRouter(connect(
  (state: { folders: FolderListState, images: ImagesListState }): GridProps => {
    return {
      images: state.images.list.sort((a, b) => {
        return a.publicId < b.publicId ? 1 : -1
      }),
      isLoading: state.images.isLoading
    }
  }
)(Grid));
