import React from 'react';
import {Table, TableCell, TableRow, TableHead} from '@material-ui/core';
// 
const TableDetail = (props) => {
    return (
        <Table style={{ width: '100%' }}>
            <TableHead>
                <TableRow>
                    <TableCell className='EtableCellText'><strong>Loan Amount</strong></TableCell>
                    <TableCell className='EtableCellTVal'><strong>Rs. </strong>{props.pAmount}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className='EtableCellText'><strong>Interest %</strong></TableCell>
                    <TableCell className='EtableCellTVal'>{props.interest}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className='EtableCellText'><strong>Tenure(Months)</strong></TableCell>
                    <TableCell className='EtableCellTVal'>{props.duration}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className='EtableCellText'><strong>EMI (Monthly)</strong></TableCell>
                    <TableCell className='EtableCellTVal'><strong>Rs. </strong>{props.emi}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className='EtableCellText'><strong>Total Interest</strong></TableCell>
                    <TableCell className='EtableCellTVal'><strong>Rs. </strong>{props.TotalAmountOfInterest}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className='EtableCellText'><strong>Loan Payment</strong><br/>(Loan Amount+Interest)</TableCell>
                    <TableCell className='EtableCellTVal'><strong>Rs. </strong>{props.totalAmt ? props.totalAmt:0}</TableCell>
                </TableRow>
            </TableHead>
        </Table>
    );
}

export default TableDetail;
