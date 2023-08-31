import './SIcalcy.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react'
import ErrorModal from '../../Proj3/ComponentsPending/UI_Pending/ErrorModal';
import ButtonPending from '../../Proj3/ComponentsPending/UI_Pending/ButtonPending';

const SIcalcy = () => {

  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [num3, setNum3] = useState('');
  const [Add, setAdd] = useState("");
  const [error,setError]=useState();

  const calcSum = (e) => {
    e.preventDefault()
    console.log(e);
    
        if(num1.trim().length===0 || num2.trim().length===0 || num3.trim().length===0){
            setError({
                title:'Invalid Input',
                message:"Please fill all the details."
            })
            return;
        }
        else {
          let Add = parseInt(num1) * parseInt(num2) * parseInt(num3) / 100;
          console.log(typeof (Add));
          setAdd(parseInt(Add))
        }
  }

  const handleClick = (e) => {
    setAdd('');
    // window.location.reload();
    setNum1(0);
    setNum2(0);
    setNum3(0);

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




      <div className="SIcalcy">
      {error&&<ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
        <div className='SIcontainer'>
          <div className='heading_text'>
            <h1 className='heading_one'>Simple Interest Calculator</h1>
            <p className='heading_two'>Calculate your simple interest Easily!</p>
          </div>
          <div className='total_amount_card'>
            <div className='card_text '>
              <h3 className='total_amount_heading'>₹ {Add}</h3>
              <p className='total_amount_para'>Total simple interest</p>
            </div>
          </div>
          <form onSubmit={calcSum}>

            <div className='input_area'>
              <div className='input_field'>
                <TextField type="number" value={num1 || ""} onChange={(e) => setNum1(e.target.value)} id="outlined-basic" label="₹ Principal amount" variant="outlined" />
              </div>
              <div className='input_field'>
                <TextField type="number" value={num2 || ""} onChange={(e) => setNum2(e.target.value)} id="outlined-basic" label="Rate of interest (p.a) %" variant="outlined" />
              </div>
              <div className='input_field'>
                <TextField type="number" value={num3 || ""} onChange={(e) => setNum3(e.target.value)} id="outlined-basic" label="Time period ( Yr )" variant="outlined" />
              </div>
            </div>
            <div className='button_collection'>
              <Stack spacing={2} direction="row">
                <Button value='Calculate' type='submit' className='btn_one' style={{ backgroundColor: '#ff4800' }} variant="contained">Calculate</Button>  
                <Button className='btn_one' style={{ borderColor: '#ff4800', color: '#ff4800' }} onClick={handleClick} variant="outlined" >Reset</Button>
              </Stack>
            </div>
          </form>

        </div>
      </div>
    </>
  );
}

export default SIcalcy;