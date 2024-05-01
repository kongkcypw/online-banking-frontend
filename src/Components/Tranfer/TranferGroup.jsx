const TranferGroup = ({ accountnum, setAccountnum, amount, setAmount, handleInputChange }) => {
    return (
        <div>
         
            <p className='text-left font-bold text-white '> ถึง </p>
            <div className='border-2 rounded bg-white border-white'>

                

                <div> <select name="bank" id="bank">
                    <option value="krungthai" data-img="https://thailandpicks.com/wp-content/uploads/2018/06/client-logo-krungthai-bank.png">กรุงไทย</option>
                    <option value="kasikorn">กสิกร</option>
                    <option value="Bangkok">กรุงเทพ</option>
                    <option value="krungthon">กรุงธน</option>
                </select> </div>
                <input
                    type="text"
                    value={accountnum}
                    onChange={(e) => handleInputChange(e, setAccountnum, 'text')}
                    placeholder="Account no."
                    className="text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                />
                <div className=' font-semibold'> จำนวนเงิน </div>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => handleInputChange(e, setAmount, 'number')}
                    placeholder="0.00 THB"
                    className="text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                />
            </div>
        </div>
    )
}

export default TranferGroup
