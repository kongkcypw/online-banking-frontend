const UserInfo = ({ firstname, lastname, useraccount, balance }) => {
    return (
        <div>
            <div className='text-black text-left'>
                <p className='border-2 rounded bg-white border-white px-4 py-4'>
                    <p className=' text-lg font-bold'> {firstname} {lastname} </p>
                    <p className='text-sm'>เลขบัญชี {useraccount} </p>
                    <p className='text-2xl font-bold mt-2'> {balance} บาท</p>
                </p>
            </div>
        </div>

    )
}

export default UserInfo