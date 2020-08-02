import React, { ReactFragment } from 'react';
import presentationImage from '../../assets/images/presentation.png';
import Header from '../../components/header';
import { Column, Section, Title, Container } from 'rbx';
import '../../styles/home.scss';

const { Fragment } = require("react")
const HomeScreen = () => (
    <Fragment>
        <Header />
        <Section size="medium" className="home">
            <Container>
                <Column.Group>
                    <Column size={5}>
                        <Title size={2} spaced className="has-text-while">
                            Acesse suas anotações facilmente de qualquer lugar, basta estar conectado.
                        </Title>
                        <Title size={5} spaced className="has-text-light" subtitle>
                            Faça já o seu cadastro.
                        </Title>
                        <a className="button is-outlined is-white is-large">
                            <strong>Cadastre-se grátis</strong>
                        </a>
                    </Column>
                    <Column size={6} offset={1}>
                        <img src={presentationImage} />
                    </Column>
                </Column.Group>
            </Container>
        </Section>
    </Fragment>
);

export default HomeScreen;