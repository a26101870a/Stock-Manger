import React from 'react'
import { useParams } from 'react-router-dom';

export default function Stock() {
    let { stockId } = useParams();
    const flag = (stockId > 1000)

    return (
        <div className='l-content' >
            {flag && <div>No data of Stock Number: {stockId} here.</div>}
            {!flag && <div>Please Enter Correct Stock Number. Eg. 2330</div>}
        </div>
    )
}
