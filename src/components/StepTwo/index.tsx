import React from "react";
import { ContainerStep, SubTitle, Title } from "../../styles/app-styled";
import { Content } from "./styles";
import { Idata } from "../../App";

type Props = {
    data: Idata;
    update: (key: string, value: string | number) => void;
};

export const StepTwo = ({ data, update }: Props) => {
    return (
        <ContainerStep>
            <Title>Mal podemos esperar para conhecê-lo.</Title>
            <SubTitle>
                Por favor, preencha os dados abaixo para que possamos entrar em
                contato com você.
            </SubTitle>
            <Content>
                <div>
                    <label htmlFor="name">Por favor, insira seu nome</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Primeiro nome"
                        value={data.name}
                        onChange={(e) => update("name", e.target.value)}
                        autoFocus
                    />
                </div>
                <div>
                    <label htmlFor="tel">Insira um número de telefone</label>
                    <input
                        type="text"
                        id="tel"
                        placeholder="Número de telefone"
                        value={data.tel}
                        onChange={(e) => {
                            const value = e.target.value
                                .replace(/\D/g, "")
                                .replace(/(\d{2})(\d)/, "($1) $2")
                                .replace(/(\d{5})(\d{4})(\d)/, "$1-$2");
                            update("tel", value);
                        }}
                    />
                </div>
                <div>
                    <label htmlFor="link">
                        Insira um link para seu site (opcional)
                    </label>
                    <input
                        type="text"
                        id="link"
                        placeholder="Local na rede Internet"
                        value={data.linkProject}
                        onChange={(e) => update("linkProject", e.target.value)}
                    />
                </div>
            </Content>
        </ContainerStep>
    );
};
