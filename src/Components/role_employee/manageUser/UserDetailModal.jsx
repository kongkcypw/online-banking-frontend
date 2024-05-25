import React from 'react'

const UserDetailModal = ({ closeModal, selectedUser }) => {

    console.log(selectedUser);

    return (
        <div>
            <div className='fixed flex start-0 top-0 justify-center z-20 bg-black bg-opacity-30 h-screen w-full '>
                <div className='relative bg-white rounded-lg max-w-4xl min-h-[70vh] w-full my-auto p-8'>
                    <p className='text-black cursor-pointer' onClick={closeModal}>ปิด</p>
                    <p className='text-black'>{selectedUser.FirstName}</p>
                </div>
            </div>
        </div>
    )
}

export default UserDetailModal