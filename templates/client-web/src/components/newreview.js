import React from 'react';
import axios from 'axios';
import { Modal, Button } from 'antd';
import CustomForm from '../components/form.js';

class NewReviewModal extends React.Component {
    
    state = {
        loading: false,
        visible: false
    }
    showModal = () => {
        this.setState({
          visible: true,
        });
      }
  
    handleOk = () => {
        this.setState({ loading: true });
      }
      
    handleCancel = () => {
        this.setState({ visible: false });
      }
    componentDidMount = () => {
        console.log("newreview page loaded");
    }
    render() {
        const { visible, loading } = this.state;
    return (
      <div>
          <h1>Loaded</h1>
        <Button type="primary" onClick={this.showModal}>
          Open Modal with customized footer
        </Button>
        <Modal
          visible={visible}
          title="Title"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>Return</Button>,
            <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
              Submit
            </Button>,
          ]}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    );
  }
}
export default NewReviewModal;