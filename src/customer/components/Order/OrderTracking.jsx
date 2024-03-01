import React from 'react'
import Box from '@mui/material/Box';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { Stepper } from '@mui/material';

const steps = [
    "Placed",
    'Order Confirmed',
    'Shipped',
    'Out For Delivery',
    'Delivered'
  ];
  
const OrderTracking = ({activeStep}) => {
  return (
    <Box sx={{ width: '100%' }} >
        <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel  sx={{ color: '#9155FD',fontSize: '44px' }}  className={``}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  )
}

export default OrderTracking