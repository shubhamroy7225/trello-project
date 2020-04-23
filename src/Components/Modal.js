import React from 'react';
import 'react-responsive-modal/styles.css';
import Modal from 'react-responsive-modal'; 
const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center'
};
class Appp extends React.Component {
render() { 
    return (
      <div style={styles}>
        <Modal open={this.props.openModal} onClose={this.props.closeModal}>
          <h2>{`${this.props.card.name}`}</h2>
        </Modal>
      </div>
    );
  }
}
export default Appp;