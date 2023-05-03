import React from "react";
import { Container, Modal } from "./styles";
import success from "../../assets/success.gif";

export const MsgSuccess = () => {
    return (
        <Container>
            <Modal>
                <img className="gifSuccess" src={success} />
                <h1>Tudo certo!</h1>
                <span>Formulário enviado com sucesso</span>
            </Modal>
        </Container>
    );
};
