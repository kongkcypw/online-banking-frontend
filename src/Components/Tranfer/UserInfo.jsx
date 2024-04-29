const UserInfo = ({ firstname, lastname, useraccount, balance}) => {
    return (
        <div>
            <h1 className='font-bold text-3xl text-white '>โอนเงิน</h1>
            <div>
                <label className='mr-96 font-bold text-white '> จาก </label>
                <p className='border-2 rounded bg-white border-white'>
                    <p className='pr-48 font-bold'>  {firstname} {lastname} </p>
                    <p className=' pr-32  text-gray-500'>หมายเลขบัญชี: {useraccount} </p>
                    <p className=' pr-56 font-semibold'> {balance} THB</p>
                </p>
            </div>
        </div>

    )
}

export default UserInfo