const UserInfo = ({ firstname, lastname, useraccount, balance }) => {
    return (
        <div>
            <h1 className='font-bold text-3xl text-white '>โอนเงิน</h1>
            <div className='text-black text-left'>
                <p className='border-2 rounded bg-white border-white'>
                    <p className='ml-2 text-lg font-bold'> {firstname} {lastname} </p>
                    <p className='ml-6 text-gray-600'>{useraccount} </p>
                    <p className='ml-6 text-gray-600'> {balance} บาท</p>
                </p>
            </div>
        </div>

    )
}

export default UserInfo