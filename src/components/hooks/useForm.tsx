import { useState } from "react";

const useForm = (steps: JSX.Element[]) => {
    const [currentStep, setCurrentStep] = useState(0);

    const changeStep = (
        index: number,
        event?: React.FormEvent<HTMLFormElement>
    ) => {
        event && event.preventDefault();

        if (index < 0 || index >= steps.length) return;
        setCurrentStep(index);
    };

    return {
        currentStep,
        currentComponent: steps[currentStep],
        changeStep,
    };
};

export default useForm;
