import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import  useMediaQuery  from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import StepLabel from '@mui/material/StepLabel';
import Check from '@mui/icons-material/Check';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top:2.3,
    left: 'calc(-44% + -1.5px)',
    right: 'calc(44% + 1.5px)',
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#784af4',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#784af4',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderLeftWidth: 3,
    borderRadius: 1,
  },

}));

const QontoStepIconRoot = styled('div')(({ theme, ownerState }:{theme:any,ownerState:any}) => ({
  color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
  display: 'flex',
  alignItems: 'center',
  ...(ownerState.active && {
    color: '#784af4',
  }),
  '& .QontoStepIcon-completedIcon': {
    display:'none',
    Visibility:'hidden',
    position:'relative',
    top:0,
    color: '#784af4',
    zIndex: 1,
    // fontSize: 22,
  },

  '& .QontoStepIcon-circle': {
    width: 13,
    height: 13,
    Pointer:'ds',
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
}));

function QontoStepIcon(props: { active: boolean; completed: boolean; className: any; }) {
  const { active, completed = true, className } = props;

  return (
    //@ts-ignore
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

QontoStepIcon.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  completed: PropTypes.bool,
};

export default function CustomizedSteppers(props:{count:string[] | null}) {
    const { count } = props;
    console.log('from stepper',typeof count)
    const theme = useTheme();
    const mdDown = useMediaQuery(theme.breakpoints.down('md'),{noSsr:false})
  return (
    <Stack direction={'row'}>
      <Stepper orientation='vertical' alternativeLabel activeStep={1} connector={<QontoConnector />}>
        {count?.map((label, index) => (
          <Step key={index + 2}>
            {/* @ts-ignore */}
               { mdDown ? null : <StepLabel StepIconComponent={QontoStepIcon}>{index + 1}</StepLabel>}
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
}
