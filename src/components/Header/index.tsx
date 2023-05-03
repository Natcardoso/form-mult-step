import { Container, ContainerStep, Details, Line, StepSvg } from "./styles";
import Service from "../../assets/svgStepHeader/service.svg";
import Contact from "../../assets/svgStepHeader/contactDetails.svg";
import Written from "../../assets/svgStepHeader/written.svg";
import Illustration from "../../assets/svgStepHeader/illustration.svg";
import Project from "../../assets/svgStepHeader/project.svg";
import MessageConfirmation from "../../assets/svgStepHeader/messageConfirmation.svg";

type Props = {
    currentStep: number;
};

const Header = ({ currentStep }: Props) => {
    const steps = [
        {
            id: 0,
            title: "Tipo de serviço",
            step: "Passo 1/6",
            icon: <Service />,
        },
        {
            id: 1,
            title: "Detalhes de contato",
            step: "Passo 2/6",
            icon: <Contact />,
        },
        {
            id: 2,
            title: "Conteúdo escrito",
            step: "Passo 3/6",
            icon: <Written />,
        },
        {
            id: 3,
            title: "Ilustrações",
            step: "Passo 4/6",
            icon: <Illustration />,
        },
        {
            id: 4,
            title: "Suporte do projeto",
            step: "Passo 5/6",
            icon: <Project />,
        },
        {
            id: 5,
            title: "Confirmação",
            step: "Passo 6/6",
            icon: <MessageConfirmation />,
        },
    ];

    return (
        <Container>
            {steps.map((step) => (
                <ContainerStep key={step.id}>
                    <StepSvg
                        active={step.id === currentStep}
                        check={step.id <= currentStep}
                    >
                        {step.icon}
                    </StepSvg>
                    {step.id === currentStep && (
                        <Details>
                            <span>{step.step}</span>
                            <span>{step.title}</span>
                        </Details>
                    )}
                    {step.id !== 5 && <div className="line"></div>}
                </ContainerStep>
            ))}
        </Container>
    );
};

export default Header;
