import React from 'react'
import DestModalHeader from './DestModalHeader';
import DestModalContent from './DestModalContent';

const ViewDestinationModal = ({ detail, type, transactionSource, closeModal }) => {

  return (
    <div>
      <div className='fixed flex start-0 top-0 justify-center z-20 bg-black bg-opacity-30 h-screen w-full '>
        <div className='relative bg-white rounded-lg max-w-4xl min-h-[70vh] w-full my-auto p-8'>
          <DestModalHeader
            transactionSource={transactionSource}
            closeModal={closeModal} />
          <DestModalContent
            detail={detail}
            type={type}
            transactionSource={transactionSource}
          />
        </div>
      </div>
    </div>
  )
}

export default ViewDestinationModal