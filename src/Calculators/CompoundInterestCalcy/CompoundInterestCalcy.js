import React, { useState } from 'react';
import './CompoundInterestCalcy';
import { render } from 'react-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import ErrorModal from '../../Proj3/ComponentsPending/UI_Pending/ErrorModal';

const CompoundInterestCalcy = () => {

    const [principal, setPrincipal] = useState(0)
    const [ciDuration, setCiDuration] = useState(0)
    const [air, setAir] = useState(0)
    const [result, setResult] = useState('')
    const [error,setError]=useState();

    const calculate = (e) => {
        e.preventDefault()
            if (principal === 0 || ciDuration === 0 || air === 0) {
                setError({
                    title:'Invalid Input',
                    message:"Please fill all the details."
                })
                return;
            }
            else {
                const result = principal * Math.pow(1 + air, ciDuration);
                setResult(result.toFixed(2));
            }
    }

    const ciHandleClick = (e) => {
        setResult('');    
        setPrincipal(0);
        setCiDuration(0);
        setAir(0);
    }

     const  errorHandler=()=>{
    setError(null);
}

    return (
        <>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            ></Box>
            {error&&<ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
            <div className="SIcalcy">

                <div className='SIcontainer'>
                    <div className='heading_text'>
                        <h1 className='heading_one'>Compound Interest Calculator</h1>
                        <p className='heading_two'>Calculate your compound interest Easily!</p>
                    </div>
                    <div className='total_amount_card'>
                        <div className='card_text '>
                            <h3 className='total_amount_heading'>₹ {result}</h3>
                            <p className='total_amount_para'>Total compound interest</p>
                        </div>
                    </div>
                    <form onSubmit={calculate}>

                        <div className='input_area'>
                            <div className='input_field'>
                                <TextField type="number" value={principal || ""} label="Principal Amount (Rs.)" variant='outlined' onChange={(e) => { setPrincipal(e.target.value) }} id="outlined-basic" />
                            </div>
                            <div className='input_field'>
                                <TextField type="number" value={ciDuration || ""} label="Duration (Yr)" variant='outlined' onChange={(e) => { setCiDuration(e.target.value) }} id="outlined-basic" />
                            </div>
                            <div className='input_field'>
                                <TextField type="number" value={air || ""} label="Annual Interest Rate (%)" variant='outlined' onChange={(e) => { setAir(e.target.value / 100) }} id="outlined-basic" />
                            </div>
                        </div>
                        <div className='button_collection'>
                            <Stack spacing={2} direction="row">
                                <Button type='submit' className='btn_one' style={{ backgroundColor: '#ff4800' }} variant="contained" >Calculate</Button>
                                <Button className='btn_one' style={{ borderColor: '#ff4800', color: '#ff4800' }} onClick={ciHandleClick} variant="outlined">Reset</Button>
                            </Stack>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default CompoundInterestCalcy;
