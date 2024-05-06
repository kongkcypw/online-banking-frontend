const TranferGroup = ({ accountnum, setAccountnum, amount, setAmount, handleInputChange }) => {
    return (
        <div>
            <p className='text-left font-bold text-orange-400 my-3'> ถึง </p>
            <div className='border-2 rounded bg-white border-white pt-2 pb-8'>
                <div className="py-2">
                    <select name="bank" id="bank" className="w-full px-1">
                        <option value="krungthai" data-img="https://thailandpicks.com/wp-content/uploads/2018/06/client-logo-krungthai-bank.png">กรุงไทย</option>
                        <option value="kasikorn">กสิกร<img src="https://i.ibb.co/YZsXKQr/true.jpg"/></option>
                        <option value="Bangkok">กรุงเทพ</option>
                        <option value="krungthon">กรุงธน</option>
                    </select>
                </div>
                <div className="px-2 ">
                    <p className="text-left text-sm text-slate-500">เลขบัญชี</p>
                    <input
                        type="text"
                        value={accountnum}
                        onChange={(e) => handleInputChange(e, setAccountnum, 'text')}
                        placeholder="กรอกเลขบัญชี"
                        className=" placeholder:font-normal placeholder:text-sm font-bold text-right text-orange-400 mt-1 block w-full border-b border-gray-300 focus:outline-none focus:text-orange-400"
                    />
                </div>
                <div className="px-2">
                    <div className='text-left text-sm text-slate-500 mt-2'> จำนวนเงิน: </div>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => handleInputChange(e, setAmount, 'number')}
                        placeholder="0.00 THB"
                        className="text-right text-black mt-1 block w-full border-b border-gray-300 focus:outline-none focus:text-orange-400"
                    />
                </div>
            </div>
        </div>
    )
}

export default TranferGroup
