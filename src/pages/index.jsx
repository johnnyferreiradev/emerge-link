import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { Button } from 'components/Buttons';
import Banner from 'components/Banner';
import Section from 'components/Section';
import { Row, Column } from 'components/Grid';
import PlanCard from 'components/PlanCard';

import PublicLayout from 'layouts/PublicLayout';

import bannerImage from 'assets/images/network.jpg';

import Container from '../styles/pages/Home';

function Home() {
  const router = useRouter();

  return (
    <PublicLayout>
      <Container>
        <Head>
          <title>Emerge Link</title>
        </Head>

        <Banner backgroundImage={bannerImage} />

        <Section background="white">
          <Row>
            <Column desktop="12" tablet="12" mobile="12">
              <h2>Quem somos</h2>
              <p className="subtitle">Somos uma empresa que impulsiona as conexões necessárias em todos os momentos dos nossos clientes</p>
            </Column>
          </Row>
          <Row>
            <div className="card-info">
              <h3 className="title">Internet com qualidade e velocidade</h3>
              <p>
                Navegue, assista filmes, jogue online, faça downloads sem queda.
                Com Emerge Link você tem mais velocidade, cobertura e estabilidade
                da rede, seja de uso empresarial ou pessoal.
              </p>
            </div>

            <div className="card-info">
              <h3 className="title">Missão</h3>
              <p>
                Contribuir na inclusão social e digital, favorecendo a
                geração de empregos, o compartilhamento de informações
                e o desenvolvimento das regiões mais carentes.
              </p>
            </div>

            <div className="card-info">
              <h3 className="title">Visão</h3>
              <p>
                Ser o provedor de internet com o maior número de clientes
                conectados e satisfeitos na região nordestina.
              </p>
            </div>

            <div className="card-info">
              <h3 className="title">Valores</h3>
              <p>
                Inovação, comprometimento, preço justo e confiança.
              </p>
            </div>
          </Row>
        </Section>

        <Section>
          <Row>
            <PlanCard
              plan={{
                name: 'Básico',
                size: '50 Mega',
                price: '60,00',
              }}
            />

            <PlanCard
              plan={{
                name: 'Básico',
                size: '50 Mega',
                price: '60,00',
              }}
            />

            <PlanCard
              plan={{
                name: 'Básico',
                size: '50 Mega',
                price: '60,00',
              }}
            />

            <PlanCard
              plan={{
                name: 'Básico',
                size: '50 Mega',
                price: '60,00',
              }}
            />
          </Row>
          <Row>
            <h2>É importante saber</h2>
          </Row>
          <Row>
            <div className="card-info">
              <h3 className="title">Instalação</h3>
              <p>
                Para todos os combos a instalação é gratuita. Ela ocorre em até 7
                dias úteis a partir do agendamento, de segunda a sábado, das 08h às 20h.
              </p>
            </div>

            <div className="card-info">
              <h3 className="title">12 meses de fidelização</h3>
              <p>
                Nossos planos possuem 12 meses de duração. Haverá uma multa
                rescisória proporcional ao período restante para completar
                os 12 meses, caso o cancelamento seja solicitado.
              </p>
            </div>

            <div className="card-info">
              <h3 className="title">Soluções sob medida</h3>
              <p>
                Nossos consultores são especialistas em entender o que a sua empresa precisa.
              </p>
            </div>
          </Row>
        </Section>

        <Section background="primary">
          <Row>
            <h2>Contate-nos</h2>
          </Row>
          <Row>
            <p>Deseja assinar um plano?</p>
            <Button buttonTheme="secondary">
              Envie-nos uma mensagem
            </Button>

            <p className="divisor">Ou</p>

            <p>Ligue para nossa central de atendimento</p>

            <p className="phone-number">0800 725 4155</p>
          </Row>
          <Row>
            <h2>Visite nossas redes sociais</h2>
          </Row>
          <Row>
            <p>Instagram</p>
            <p>Facebook</p>
            <p>Linkedin</p>
          </Row>
        </Section>
      </Container>
    </PublicLayout>
  );
}

export default Home;
