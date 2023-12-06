import React from "react";
import Header from "../components/Header";
import {
  Section,
  Container,
  Title,
  Description,
  TeamTitle,
  ImageContainer,
  ImageWrapper,
  Image,
  ImageCaption,
} from "../styles/pages/AboutUs";
// import fauzan from "../assets/images/fauzan.jpg";
// import fito from "../assets/images/fito.jpg";
// import syahri from "../assets/images/syahri.jpg";
// import reinhard from "../assets/images/reinhard.jpg";
import avatar from "../assets/images/avatar.jpg";

const AboutUs = () => {
  return (
    <div>
      <Header />
      <Section>
        <Container>
          <Title>About Us</Title>
          <Description>
            At ISDIC, we are passionate about music and dedicated to bringing
            the joy of music to people around the world. Our mission is to
            create a platform that connects music lovers, artists, and industry
            professionals in a seamless and enjoyable way. Whether you are a
            music enthusiast looking for your favorite tunes, an aspiring artist
            seeking opportunities to showcase your talent, or a music industry
            professional wanting to discover new talent and collaborate, ISDIC
            is here to fulfill your needs. We offer a vast collection of songs
            from various genres, ensuring that there is something for everyone.
            Our advanced search and recommendation algorithms help you discover
            new music based on your preferences, allowing you to expand your
            musical horizons. Our team consists of dedicated music enthusiasts
            who work tirelessly to curate and deliver the best music experience
            to our users. From discovering emerging artists to organizing live
            performances and events, we are committed to promoting and
            supporting the music community. Join ISDIC today and immerse
            yourself in the world of music. Let's create, connect, and celebrate
            the universal language of music together!
          </Description>
        </Container>
      </Section>
      <div>
        <TeamTitle>Our Team</TeamTitle>
        <ImageContainer>
          <ImageWrapper>
            <Image src={avatar} alt="Aditya" />
            <ImageCaption>Aditya</ImageCaption>
          </ImageWrapper>
          <ImageWrapper>
            <Image src={avatar} alt="Arland" />
            <ImageCaption>Arland</ImageCaption>
          </ImageWrapper>
          <ImageWrapper>
            <Image src={avatar} alt="Farrel" />
            <ImageCaption>Farrel</ImageCaption>
          </ImageWrapper>
          <ImageWrapper>
            <Image src={avatar} alt="Nevada" />
            <ImageCaption>Nevada</ImageCaption>
          </ImageWrapper>
          <ImageWrapper>
            <Image src={avatar} alt="Putu" />
            <ImageCaption>Putu</ImageCaption>
          </ImageWrapper>
        </ImageContainer>
      </div>
    </div>
  );
};

export default AboutUs;
