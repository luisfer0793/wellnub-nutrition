import { Fragment, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import {
  Button,
  Container,
  Grid,
  Group,
  Image,
  Stepper,
  Text,
  Title,
} from '@mantine/core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRightLong,
  faArrowLeftLong,
} from '@fortawesome/free-solid-svg-icons';

import { TestimonialCard, WithHelmet } from 'components';

import { LANDING_PAGE_META_TAGS } from 'utils/constants.util';

import { useStepperStyles, useStyles } from './Landing.styles';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const gridItems = [
  {
    id: 'grid-item-1',
    title: 'Resultados respaldados por ciencia',
    image:
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
    alt: 'Respaldados por la ciencia',
    description:
      'Con la tecnología InBody® que ponemos a tu alcance, los resultados hablan por sí solos. Con el respaldo de estos datos, educa y emplea a tus pacientes para que tomen el control de susalud y bienestar.',
  },
  {
    id: 'grid-item-2',
    title: 'Consultas presenciales o virtuales',
    image:
      'https://images.unsplash.com/photo-1573497491208-6b1acb260507?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    alt: 'Consultas presenciales o virtuales',
    description:
      '¡Tú decides cómo! Queremos que más personas te encuentren y te contacten de manera sencilla y profesional. No necesitas consultorio. Wellnub lo hace posible.',
  },
  {
    id: 'grid-item-3',
    title: 'Tus pacientes eligen cuando y donde',
    image:
      'https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    alt: 'Tus pacientes eligen cuando y donde',
    description:
      'Actualmente contamos con 8 spots en la Ciudad de México y área metropolitana, tus pacientes podrán elegir el más cercano y conveniente para reservar su prueba InBody® desde la app.',
  },
];

const GridItem = ({ data }) => {
  const { classes, cx } = useStyles();

  return (
    <article className={classes.gridItem}>
      <Image
        radius="sm"
        src={data.image}
        alt={data.alt}
        className={classes.gridImage}
      />
      <Title order={4} className={cx(classes.gridItemTitle, classes.black)}>
        {data.title}
      </Title>
      <Text size="sm">{data.description}</Text>
    </article>
  );
};

const TestimonialCarousel = ({ testimonials }) => {
  return (
    <Swiper loop centeredSlides spaceBetween={50} slidesPerView={3}>
      <SwiperSlide>
        <TestimonialCard />
      </SwiperSlide>
      <SwiperSlide>
        <TestimonialCard />
      </SwiperSlide>
      <SwiperSlide>
        <TestimonialCard />
      </SwiperSlide>
      <SwiperSlide>
        <TestimonialCard />
      </SwiperSlide>
      <SwiperSlide>
        <TestimonialCard />
      </SwiperSlide>
    </Swiper>
  );
};

const StyledStepper = props => {
  const { classes } = useStepperStyles();
  return <Stepper classNames={classes} {...props} />;
};

const LandingPage = () => {
  const [step, setStep] = useState(1);

  const { classes, cx } = useStyles();

  const onNextStepClickHandler = () => {
    setStep(prevState => prevState + 1);
  };

  const onPrevStepClickHandler = () => {
    setStep(prevState => prevState - 1);
  };

  return (
    <WithHelmet noLayout title="Wellnub" metaTags={LANDING_PAGE_META_TAGS}>
      <header className={cx(classes.section, classes.hero)}>
        <Container size="xl">
          <div className={classes.marginBottomLg}>
            <Title order={1} className={cx(classes.title, classes.black)}>
              Lleva Tu Consulta De Nutrición Al Siguiente Nivel
            </Title>
          </div>
          <div className={classes.marginBottomLg}>
            <Text className={classes.heroDescription}>
              Las herramientas más efectivas en la palma de tu mano, con un
              simple clic. Monitorea de cerca el éxito de tu consulta
              nutricional, gana mayor credibilidad, fidelidad y nuevos pacientes
              día con día
            </Text>
          </div>
          <div className={classes.marginBottomLg}>
            <ul className={classes.heroList}>
              <li>Servicio las 24 horas</li>
              <li>Una enorme lista de profesionales</li>
              <li>Resultados al instante</li>
            </ul>
          </div>
          <div>
            <Button color="green">Empieza ahora</Button>
            <Text size="sm" className={classes.heroInfoText}>
              No te pedimos tarjeta de crédito, usa Wellnub y cancela cuando
              quieras
            </Text>
          </div>
        </Container>
      </header>
      <section className={cx(classes.section, classes.center)}>
        <Container size="xl">
          <Title
            order={2}
            align="center"
            className={cx(classes.black, classes.subtitle)}
          >
            Prueba la app que te traerá más pacientes a través de las mejores
            herramientas para tu consulta
          </Title>
          <Button
            color="green"
            rightIcon={<FontAwesomeIcon icon={faArrowRightLong} />}
          >
            Conóce más
          </Button>
        </Container>
      </section>
      <section className={cx(classes.section, classes.center, classes.bgGray)}>
        <Container size="xl">
          <Title
            order={2}
            align="center"
            className={cx(classes.black, classes.subtitle)}
          >
            Tenemos las herramientas que están evolucionando la nutrición
          </Title>
          <div className={classes.grid}>
            {gridItems.map(item => (
              <GridItem data={item} key={item.id} />
            ))}
          </div>
        </Container>
      </section>
      <section className={cx(classes.section, classes.black)}>
        <Container size="xl">
          <Title
            order={2}
            align="center"
            className={cx(classes.black, classes.subtitle, classes.center)}
          >
            Tres sencillos pasos para medir la composición corporal de tus
            pacientes con nuestra red
          </Title>
          <Grid>
            <Grid.Col span={5}>
              <Text weight={700} className={classes.stepNumber}>
                01.
              </Text>
              <Title order={4} className={classes.stepTitle}>
                Canjea
              </Title>
              <Text className={classes.gray}>
                Envíale un pase de escaneo corporal a tu paciente por medio de
                nuestra app. Tu paciente podrá canjear su pase por un escaneo en
                la locación Wellnub que elija
              </Text>
            </Grid.Col>
            <Grid.Col span={7}>
              <Image src="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80" />
            </Grid.Col>
          </Grid>
          <div className={classes.stepperWrapper}>
            <Group className={classes.stepperControlsWrapper} position="center">
              <Button
                variant="subtle"
                color="gray"
                disabled={step === 0}
                onClick={onPrevStepClickHandler}
                leftIcon={<FontAwesomeIcon icon={faArrowLeftLong} />}
              >
                Anterior
              </Button>
              <Button
                variant="subtle"
                color="gray"
                disabled={step === 3}
                onClick={onNextStepClickHandler}
                rightIcon={<FontAwesomeIcon icon={faArrowRightLong} />}
              >
                Siguiente
              </Button>
            </Group>
            <StyledStepper active={step} onStepClick={setStep} size="xs">
              <Stepper.Step />
              <Stepper.Step />
              <Stepper.Step />
            </StyledStepper>
          </div>
        </Container>
      </section>
      <section className={cx(classes.section, classes.center, classes.bgGray)}>
        <Container size="xl">
          <Title
            order={2}
            align="center"
            className={cx(classes.black, classes.subtitle)}
          >
            Nuestros nutriólogos opinan
          </Title>
          <div>
            <TestimonialCarousel />
          </div>
        </Container>
      </section>
    </WithHelmet>
  );
};

export default LandingPage;
