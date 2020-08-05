import React, { Fragment } from 'react';
import Header from '../../../components/header';
import { Section, Container, Column, Card, Title } from 'rbx';
import LogoImage from '../../../assets/images/logo.png';
import '../../../styles/auth.scss';


const LoginScreen = () => (
    <Fragment>
        <Header />
        <Section size="medium" className="auth">
            <Container>
                <Column.Group centered>
                    <Column size={3}>
                        <Card>
                            <Card.Content>
                                <Section>
                                    <Column.Group centered>
                                        <Column size={12}>
                                            <img src={LogoImage} />
                                        </Column>
                                    </Column.Group>

                                    <Column.Group>
                                        <Column size={12}>
                                            <Title size={6} className="has-text-grey has-text-centered">
                                                Acesso em todo lugar
                                                </Title>
                                        </Column>
                                    </Column.Group>
                                </Section>

                            </Card.Content>
                        </Card>
                    </Column>
                </Column.Group>
            </Container>
        </Section>
    </Fragment>
);

export default LoginScreen;
