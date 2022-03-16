import React from 'react';
import Form from '../../components/Form/Form';
import { MapContainer, StyledHeading, StyledIframe } from './style';

function Contact() {
  return (
    <main>
      <StyledHeading>Contact Us</StyledHeading>
      <Form />
      <MapContainer>
        <StyledIframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2828.367825364475!2d-93.24430883378925!3d44.85480618191727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f62f6c393c612d%3A0xb3c6f1806e78286b!2sMall%20of%20America%C2%AE!5e0!3m2!1sen!2sus!4v1646762261037!5m2!1sen!2sus"
          height="300"
          allowFullScreen="yes"
          ></StyledIframe>
      </MapContainer>
    </main>
  );
}

export default Contact