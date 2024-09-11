import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const experienceSteps = [
    {
        label: 'Co-op Software Developer',
        description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
    },
    {
        label: 'Web Application/Knowledge Graph Engineer',
        description:
            'An ad group contains one or more ads which target a shared set of keywords.',
    },
    {
        label: 'Many More to Come!',
        description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
    },
];

const Timeline = () => {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <Box sx={{ m: 2 }}>
            <Stepper activeStep={activeStep} orientation='vertical'>
                {experienceSteps.map((step, index) => (
                    <Step key={step.label}>
                        <StepLabel>
                            <Typography color='white' fontWeight={700}>
                                {step.label}
                            </Typography>
                        </StepLabel>
                        <StepContent>
                            <Typography color='white'>
                                {step.description}
                            </Typography>
                            <Box sx={{ mb: 2 }}>
                                <Button
                                    variant='contained'
                                    onClick={handleNext}
                                    sx={{ mt: 1, mr: 1 }}
                                    disabled={
                                        index === experienceSteps.length - 1
                                    }
                                >
                                    Continue
                                </Button>
                                <Button
                                    disabled={index === 0}
                                    onClick={handleBack}
                                    sx={{ mt: 1, mr: 1, color: 'white' }}
                                >
                                    Back
                                </Button>
                            </Box>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
            {activeStep === experienceSteps.length && (
                <Paper square elevation={0} sx={{ p: 3 }}>
                    <Typography>
                        All steps completed - you&apos;re finished
                    </Typography>
                    <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                        Reset
                    </Button>
                </Paper>
            )}
        </Box>
    );
};

export default Timeline;
