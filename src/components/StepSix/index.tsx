import React from "react";
import { ContainerStep, SubTitle, Title } from "../../styles/app-styled";
import { Content } from "../StepTwo/styles";
import { Idata } from "../../App";

type Props = {
    data: Idata;
    update: (key: string, value: string | number) => void;
};

export const StepSix = ({ data, update }: Props) => {
    return (
        <ContainerStep>
            <Title>Confirmar Envio</Title>
            <SubTitle>
                Obrigado por dedicar seu tempo para preencher este formulário.
            </SubTitle>
            <Content>
                <div>
                    <label htmlFor="email">
                        Qual é o seu melhor e-mail de contato?
                    </label>
                    <input
                        type="text"
                        id="email"
                        placeholder="E-mail"
                        value={data.email}
                        onChange={(e) => update("email", e.target.value)}
                        autoFocus
                    />
                </div>
            </Content>
        </ContainerStep>
    );
};
