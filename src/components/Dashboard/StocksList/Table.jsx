import React from "react";
import TableHeader from './TableHeader';
import TableItem from './TableItem';
import STOCK_DAY_ALL from 'Data/STOCK_DAY_ALL.json';

export default function StocksListTable({ filterValue }) {
    var data = STOCK_DAY_ALL;

    return (
        <div className="stocksList__content">
            <table style={{ width: 100 + '%' }}>
                <thead><TableHeader /></thead>
                <tbody className="stocksList__items">
                    {data
                        .filter((item) => {
                            let filter = filterValue;
                            if (!filter) return true;

                            let code = item['Code'];
                            let name = item['Name'];

                            return (code.startsWith(filter) || name.startsWith(filter));
                        })
                        .map((item, index) => (
                            <TableItem data={item} key={index} />
                        ))}
                </tbody>
            </table>
        </div>
    );
}