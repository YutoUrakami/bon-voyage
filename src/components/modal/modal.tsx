import * as React from 'react';
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router";
import {Dispatch} from "redux";
import {updateSlideShowIndex} from "../../reducers/imagesListReducer";
import SlideShow from "../slideShow/slideShow";
import './modal.css'
import {ModalState} from "../../store";
import {dismissModal} from "../../reducers/modalReducer";

interface ModalProps {
  show: boolean
}

interface DispatchProps {
  dispatch: Dispatch
}

class Modal extends React.Component<ModalProps & DispatchProps & RouteComponentProps> {
  public render() {
    return (
      <div className="modal_window" id="slideModal" onClick={this.kickClosingModal}>
        <div className="modal_content">
          <SlideShow/>
        </div>
        <div className="modal-close-button" onClick={this.kickClosingModal}>
          <i className="material-icons">close</i>
        </div>
      </div>
    )
  }
  
  public componentWillReceiveProps = (nextProps: Readonly<ModalProps & DispatchProps & RouteComponentProps>) => {
    if (nextProps.show) {
      this.launchModal();
    } else {
      this.closeModal();
    }
  };
  
  private kickClosingModal = () => {
    dismissModal()(this.props.dispatch);
  };

  private launchModal = () => {
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

export default withRouter(connect((state: { modal: ModalState }): ModalProps => {
  return { show: state.modal.show }
})(Modal));
