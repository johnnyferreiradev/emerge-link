import React, { useContext, useState, useEffect } from 'react';
import Head from 'next/head';
import {
  FaFileSignature,
  FaChartLine,
  FaRocket,
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
} from 'react-icons/fa';
import { BsFillStarFill } from 'react-icons/bs';

import { RefsContext } from 'contexters/RefsContext';

import { getPublicPlans } from 'api/plans';

import { Button } from 'components/Buttons';
import Banner from 'components/Banner';
import Section from 'components/Section';
import { Row, Column } from 'components/Grid';
import PlanCard from 'components/PlanCard';

import PublicLayout from 'layouts/PublicLayout';

import bannerImage from 'assets/images/network.jpg';

import Container from '../styles/pages/Home';

function Home() {
  const refs = useContext(RefsContext);

  const [plans, setPlans] = useState([]);

  const goToWhatsapp = () => {
    const message = 'Olá, gostaria de assinar um plano de internet!';
    window.location.href = `https://api.whatsapp.com/send?phone=5588996218411&text=${message}`;
  };

  useEffect(() => {
    getPublicPlans()
      .then((response) => {
        setPlans(response.data.plans);
      });
  }, []);

  return (
    <PublicLayout>
      <Container>
        <Head>
          <title>Emerge Link</title>
        </Head>

        <Banner backgroundImage={bannerImage} showPlansButton={plans.length > 0} />

        <Section background="white" className="about-us">
          <Row ref={refs.aboutUs}>
            <Column desktop="12" tablet="12" mobile="12" className="flex f-column a-i-center">
              <h1>Quem somos</h1>
              <p className="subtitle txt-secondary">Somos uma empresa que impulsiona as conexões necessárias em todos os momentos dos nossos clientes</p>
            </Column>
          </Row>
          <Row className="flex j-c-center a-i-start">
            <div className="card-info">
              <FaFileSignature />
              <h3 className="title">Missão</h3>
              <p className="txt-secondary">
                Contribuir na inclusão social e digital, favorecendo a
                geração de empregos, o compartilhamento de informações
                e o desenvolvimento das regiões mais carentes.
              </p>
            </div>

            <div className="card-info">
              <FaChartLine />
              <h3 className="title">Visão</h3>
              <p className="txt-secondary">
                Ser o provedor de internet com o maior número de clientes
                conectados e satisfeitos na região nordestina.
              </p>
            </div>

            <div className="card-info">
              <BsFillStarFill />
              <h3 className="title">Valores</h3>
              <p className="txt-secondary">
                Inovação, comprometimento, preço justo e confiança.
              </p>
            </div>

            <div className="card-info">
              <FaRocket />
              <h3 className="title">Internet com qualidade e velocidade</h3>
              <p className="txt-secondary">
                Com Emerge Link você tem mais velocidade, cobertura e estabilidade
                da rede, seja de uso empresarial ou pessoal.
              </p>
            </div>
          </Row>
        </Section>

        {plans.length > 0 && (
          <Section className="plans">
            <Row ref={refs.plans}>
              <h1>Nosso planos</h1>
            </Row>
            <Row className="mt-3 mb-3">
              {plans.map((plan) => (
                <PlanCard
                  plan={{
                    name: plan.name,
                    size: plan.size,
                    price: plan.price,
                  }}
                />
              ))}
            </Row>
            <Row>
              <h2 className="txt-primary mb-3">É importante saber</h2>
            </Row>
            <Row>
              <div className="card-info">
                <h3 className="title">Instalação</h3>
                <p className="txt-secondary">
                  Para todos os combos a instalação é gratuita. Ela ocorre em até 7
                  dias úteis a partir do agendamento, de segunda a sábado, das 08h às 20h.
                </p>
              </div>

              <div className="card-info">
                <h3 className="title">12 meses de fidelização</h3>
                <p className="txt-secondary">
                  Nossos planos possuem 12 meses de duração. Após esse período
                  deve ser feita a renovação do contrato.
                </p>
              </div>

              <div className="card-info">
                <h3 className="title">Soluções sob medida</h3>
                <p className="txt-secondary">
                  Nossos consultores são especialistas em entender o que a sua empresa precisa.
                </p>
              </div>
            </Row>
          </Section>
        )}

        <Section background="primary" className="contact-us">
          <Row ref={refs.contact}>
            <h1>Contate-nos</h1>
          </Row>
          <Row>
            <p>Deseja assinar um plano?</p>
            <Button buttonTheme="secondary" onClick={() => goToWhatsapp()}>
              <FaWhatsapp />
              Envie-nos uma mensagem
            </Button>

            <p className="divisor">ou</p>

            <p>Ligue para nossa central de atendimento</p>

            <p className="phone-number">0800 725 4155</p>
          </Row>
          <Row>
            <h1>Visite nossas redes sociais</h1>
          </Row>
          <Row className="social-media">
            <FaInstagram />
            <FaFacebook />
            <FaLinkedin />
          </Row>
        </Section>
      </Container>
    </PublicLayout>
  );
}

export default Home;
