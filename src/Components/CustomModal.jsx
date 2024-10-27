import React from 'react';
import { Modal } from 'antd';

//footer is an array like this:footer={[
      //     <Button key="back" onClick={handleCancel}>
      //     Return
      //   </Button>,
      //   <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
      //     Submit
      //   </Button>,
      //   <Button
      //     key="link"
      //     href="https://google.com"
      //     type="primary"
      //     loading={loading}
      //     onClick={handleOk}
      //   >
      //     Search on Google
      //   </Button>,
      // ]}
const CustomModal = ({ isOpen, onClose, title, children, footer, okText, cancelText}) => {
  return (
    <Modal title={title} open={isOpen} onOk={onClose} onCancel={onClose}
    footer={footer} okText={okText ? okText:'تایید'}
    cancelText={cancelText ? cancelText:'لغو'}>
      {children}
    </Modal>
  );
};

export default CustomModal;
