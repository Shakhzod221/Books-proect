// import { useState } from 'react';
import { Modal, Segmented } from 'antd';
  

const ModalUI = () => {
    
    //   const handleOk = () => {
    //     setIsModalOpen(false);
    //   };
    
    //   const handleCancel = () => {
    //     setIsModalOpen(false);
    //   };
    
  return (
    <>
    <Modal
         title="Sozlamalar" 
         open={false} 
        //  onOk={handleOk} 
        //  onCancel={handleCancel}
         >
       <Segmented
            block
            size='large'
            options={["O'zbekcha", "Русский", "English"]} />
      </Modal>
    </>
  );
};

export default ModalUI
