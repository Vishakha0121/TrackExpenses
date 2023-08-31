import React, { useState } from 'react';
import './EMIcalcy.css';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import { Table, TableBody, TableCell, TableRow } from '@material-ui/core';
import { Pie } from 'react-chartjs-2';
import TableDetail from './TableDetail';
import 'chart.js/auto';
import SliderMarks from './SliderMarks'


// import { Chart } from 'react-chartjs-2';

const PrettoSlider = withStyles({
    root: { color: '#ff4800', height: 10 },
    thumb: { height: 25, width: 25, background: 'white', border: '3px solid black', marginTop: -9, marginLeft: -9 },
    track: { height: 10, borderRadius: 4 },
    rail: { height: 10, borderRadius: 4 },
})(Slider);

const EMIcalcy = () => {
    const [pAmount, setpAmount] = useState(0);
    const [interest, setInterest] = useState(0);
    const [duration, setDuration] = useState(0);
    const maxValue = 6000000;
    const intMax = 20;
    const maxDuration = 360;

    const intr = interest / 1200;
    const emi = duration ? Math.round(pAmount * intr / (1 - (Math.pow(1 / (1 + intr), duration)))) : 0;
    const totalAmt = duration * emi;
    var TotalAmountOfCredit = Math.round((emi / intr) * (1 - Math.pow((1 + intr), (-duration))));
    const TotalAmountOfInterest = Math.round(totalAmt - TotalAmountOfCredit);

    return (
        <div className='EMIcalc'>
            <div className='CalApp'>
                <h2 className='CalHead'><u>EMI CALCULATOR</u></h2>
                <div>
                    <Typography gutterBottom><strong>Loan Amount</strong></Typography>
                    <PrettoSlider value={pAmount} marks={SliderMarks.marksAmt} onChange={(event, vAmt) => { setpAmount(vAmt) }} defaultValue={pAmount} max={maxValue} />
                </div>
                <div>
                    <Typography gutterBottom><strong>Interest Rate %</strong></Typography>
                    <PrettoSlider value={interest} marks={SliderMarks.marksInt} onChange={(event, vInt) => { setInterest(vInt) }} defaultValue={interest} max={intMax} />
                </div>
                <div>
                    <Typography gutterBottom><strong>Duration</strong></Typography>
                    <PrettoSlider value={duration} marks={SliderMarks.marksTenure} onChange={(event, vDur) => { setDuration(vDur) }} defaultValue={duration} max={maxDuration} />
                </div>
                <div>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <TableDetail pAmount={pAmount} totalAmt={totalAmt} interest={interest} duration={duration} emi={emi} TotalAmountOfInterest={TotalAmountOfInterest} />
                                </TableCell>
                                <TableCell>
                                    <Pie
                                        data={{
                                            labels: ['Total Interest', 'Total Amount'],
                                            datasets: [{
                                                data: [TotalAmountOfInterest, pAmount],
                                                backgroundColor: ['#313131', '#ff4800']
                                            }]
                                        }}
                                        width={200}
                                        height={200}
                                    />
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div>

        </div>
    );
}

export default EMIcalcy;
