import React from 'react';

class Modal extends React.Component {
  render() {
    if(!this.props.show) {
      return null;
    }
    return (
      <div className='modal'>
        {this.props.children}
        <div className='footer'>
          <button onClick={this.props.onClose}>
            Fermer
          </button>
        </div>
      </div>
    );
  }
}

export default Modal;
