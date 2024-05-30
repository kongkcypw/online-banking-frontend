import React from 'react'

import FlowTrasfer from './FlowTransfer';
import FlowTopup from './FlowTopup';
import FlowATM from './FlowATM';

const DestModalContent = ({ detail, type, transactionSource }) => {
    return (
        <div className='pt-12'>

            {(type === "TRANSFER" && transactionSource.Flow === "OUT") &&
                <FlowTrasfer detail={transactionSource} transactionSource={detail} />
            }

            {(type === "TRANSFER" && transactionSource.Flow === "IN") &&
                <FlowTrasfer detail={detail} transactionSource={transactionSource} />
            }

            {(type === "TOPUP" || type === "BILL") &&
                <FlowTopup detail={detail} transactionSource={transactionSource} />
            }

            {(type === "WITHDRAW") &&
                <FlowATM detail={detail} transactionSource={transactionSource} />
            }

        </div>
    )
}

export default DestModalContent