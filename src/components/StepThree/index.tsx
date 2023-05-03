import React, { useState } from "react";
import { ContainerStep, SubTitle, Title } from "../../styles/app-styled";
import { ContainerCards } from "../StepOne/styles";
import { Card } from "./styles";
import Like from "../../assets/like.svg";
import Dislike from "../../assets/dislike.svg";
import { Idata } from "../../App";

type Props = {
    data: Idata;
    update: (key: string, value: string | number) => void;
};

export const StepThree = ({ data, update }: Props) => {
    const [checked, setChecked] = useState(data.writtenContent);

    return (
        <ContainerStep>
            <Title>Você tem conteúdo escrito disponível?</Title>

            <ContainerCards>
                <input
                    type="radio"
                    id="yes"
                    checked={checked === "yes"}
                    onClick={() => {
                        update("writtenContent", "yes");
                        setChecked("yes");
                    }}
                />
                <Card htmlFor="yes">
                    <Like />
                    <span>Sim</span>
                </Card>
                <input
                    type="radio"
                    id="no"
                    checked={checked === "no"}
                    onClick={() => {
                        update("writtenContent", "no");
                        setChecked("no");
                    }}
                />
                <Card htmlFor="no">
                    <Dislike />
                    <span>Não</span>
                </Card>
            </ContainerCards>
        </ContainerStep>
    );
};
