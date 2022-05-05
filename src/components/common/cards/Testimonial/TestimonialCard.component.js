import { Avatar, Blockquote, Text, Title } from '@mantine/core';

const TestimonialCard = ({ testimonial }) => {
  return (
    <article style={{ textAlign: 'center' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Avatar
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
          radius="50%"
          size={60}
        />
      </div>
      <Blockquote
        color="green"
        sx={theme => ({ color: theme.colors.dark[3], fontSize: '1.6rem' })}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
        cupiditate, dicta ea esse excepturi id illum laboriosam quibusdam
        quisquam soluta?
      </Blockquote>
      <Title order={5}>Fernando</Title>
      <Text>Nutriólogo Profesional</Text>
    </article>
  );
};

export default TestimonialCard;
