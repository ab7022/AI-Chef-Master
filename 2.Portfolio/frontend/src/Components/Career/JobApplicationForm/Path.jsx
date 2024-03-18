import { Stepper,Step } from 'react-form-stepper';
import './path.css'; 

const Path = ({ activeStep = 0 }) => {
    return (
        <div>
            <Stepper className=' overflow-x-auto' activecolor='#ffbd13' styleConfig={{"activeBgColor":"blue", "completedBgColor":"blue", "inactiveBgColor":"gray"}} activeStep={activeStep}>
                <Step label="My Information" />
                <Step label="My Experience" />
                <Step label="Application Questions" />
                <Step label="Voluntary  Disclosures" />
                <Step label="Review" />
            </Stepper>
        </div>
    );
};

export default Path;
