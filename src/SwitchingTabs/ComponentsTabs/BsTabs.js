import React from 'react';
import  {Container, Row,Tabs, Tab} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './tabstyle.css'
import SimpleCalcy from '../../Calculators/SimpleCalcy/SimpleCalcy';
import EMIcalcy from '../../Calculators/EMIcalcy/EMIcalcy';
import SIcalcy from '../../Calculators/SIcalcy/SIcalcy';
import CompoundInterestCalcy from '../../Calculators/CompoundInterestCalcy/CompoundInterestCalcy';

const BsTabs = () => {
  return (
   <>
    <Container className='py-4'>
        <Row>
        <div className='row'>
        <div className='col-12 mx-5'>
          <div className='new-intro'>
            <h1>CALCULATE !</h1>
          </div>
        </div>
      </div>
        </Row>
    </Container>
    <Container className='py-4'>
        <Row className='justify-content-center'>
            <Tabs justify variant='pills' defaultActiveKey='tab-1' className='mb-1 p-0 tab-cont'>
                <Tab eventKey='tab-1' title='Simple Calculator'>
                    <SimpleCalcy/>
                </Tab>
                <Tab eventKey='tab-2' title='Simple Interest'>
                    <SIcalcy/>
                </Tab>
                <Tab eventKey='tab-3' title='Compound Interest'>
                    <CompoundInterestCalcy/>
                </Tab>
                <Tab eventKey='tab-4' title='EMI Calculator'>
                    <EMIcalcy/>
                </Tab>
            </Tabs>
        </Row>
      
    </Container>
   </>
  );
}

export default BsTabs;
