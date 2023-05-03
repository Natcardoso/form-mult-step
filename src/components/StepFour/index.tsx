import React, { useState } from "react";
import { ContainerStep, Title } from "../../styles/app-styled";
import { ContainerCards } from "../StepOne/styles";
import { Card } from "../StepThree/styles";
import Like from "../../assets/like.svg";
import Dislike from "../../assets/dislike.svg";
import { Idata } from "../../App";

type Props = {
    data: Idata;
    update: (key: string, value: string | number) => void;
};

export const StepFour = ({ data, update }: Props) => {
    const [checked, setChecked] = useState(data.ilustOrPhoto);

    return (
        <ContainerStep>
            <Title>Você tem ilustrações ou fotografia?</Title>

            <ContainerCards>
                <input
                    type="radio"
                    id="yes"
                    onClick={() => {
                        update("ilustOrPhoto", "yes");
                        setChecked("yes");
                    }}
                    checked={checked == "yes"}
                />
                <Card htmlFor="yes">
                    <Like />
                    <span>Sim</span>
                </Card>
                <input
                    type="radio"
                    id="no"
                    onClick={() => {
                        update("ilustOrPhoto", "no");
                        setChecked("no");
                    }}
                    checked={checked == "no"}
                />
                <Card htmlFor="no">
                    <Dislike />
                    <span>Não</span>
                </Card>
            </ContainerCards>
        </ContainerStep>
    );
};
