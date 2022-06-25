import { React, useState } from 'react'
import { Button, Modal, ModalBody, ModalHeader } from 'reactstrap';


const CommentForm= ({ campsiteId }) => {
  const [ modalOpen, setModalOpen ] = useState({ modalOpen : false });
  return (
    <>
      <Button 
        bool='outline'
        onClick={() => setModalOpen(true)}>
          <i className='fa fa-pencil fa-lg' /> Add Comment
      </Button>
      <Modal isOpen={modalOpen}>
        <ModalHeader toggle={() => setModalOpen(false)}>Add Comment</ModalHeader>
        <ModalBody>campsite: {campsiteId}</ModalBody>
      </Modal>
    </>
  )
};

export default CommentForm;