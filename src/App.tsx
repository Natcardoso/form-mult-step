import { useState } from "react";
import Header from "./components/Header";
import useForm from "./components/hooks/useForm";
import { StepFive } from "./components/StepFive";
import { StepFour } from "./components/StepFour";
import { StepOne } from "./components/StepOne";
import { StepSix } from "./components/StepSix";
import { StepThree } from "./components/StepThree";
import { StepTwo } from "./components/StepTwo";
import { ButtonActions, Container, Content, Form } from "./styles/app-styled";
import { MsgSuccess } from "./components/MsgSuccess";

export type Idata = {
    services: string;
    name: string;
    tel: string;
    linkProject: string;
    writtenContent: string;
    ilustOrPhoto: string;
    projectBanner: string;
    email: string;
};

const INITIAL_DATA = {
    services: "",
    name: "",
    tel: "",
    linkProject: "",
    writtenContent: "",
    ilustOrPhoto: "",
    projectBanner: "",
    email: "",
};

function App() {
    const [data, setData] = useState<Idata>(INITIAL_DATA);
    const [openMsgSuccess, setOpenMsgSuccess] = useState(false);

    const updateFieldHandle = (key: string, value: string | number) => {
        setData((prev) => {
            return { ...prev, [key]: value };
        });
    };

    const formComponents = [
        <StepOne data={data} update={updateFieldHandle} />,
        <StepTwo data={data} update={updateFieldHandle} />,
        <StepThree data={data} update={updateFieldHandle} />,
        <StepFour data={data} update={updateFieldHandle} />,
        <StepFive data={data} update={updateFieldHandle} />,
        <StepSix data={data} update={updateFieldHandle} />,
    ];

    const { currentStep, currentComponent, changeStep } =
        useForm(formComponents);

    return (
        <Container>
            <Content>
                <Header currentStep={currentStep} />
                <Form
                    onSubmit={(event) => {
                        changeStep(currentStep + 1, event);
                        if (currentStep == 5) setOpenMsgSuccess(true);
                    }}
                >
                    {currentComponent}
                    <ButtonActions>
                        {currentStep > 0 && (
                            <button
                                className="buttonBack"
                                type="button"
                                onClick={() => changeStep(currentStep - 1)}
                            >
                                Voltar
                            </button>
                        )}
                        <button type="submit" className="buttonNext">
                            {currentStep == 5 ? "Enviar" : "Próximo Passo"}
                        </button>
                    </ButtonActions>
                </Form>
            </Content>
            {openMsgSuccess && <MsgSuccess />}
        </Container>
    );
}

export default App;
