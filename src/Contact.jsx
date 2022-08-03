import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <Binding>
      <h2 className="common-heading">Its your contact page</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230660.4031530496!2d81.661494743686!3d25.402507546780285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398534c9b20bd49f%3A0xa2237856ad4041a!2sPrayagraj%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1659386182838!5m2!1sen!2sin"
        width="100%"
        height="350"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="container">
        <div className="contact-form">
          <form action="https://formspree.io/f/xrgdzllw" method="POST" className="contact-inputs">
            <input
              type="text"
              name="Studentname"
              placeholder="StudentName"
              autoComplete="off"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="email"
              autoComplete="off"
              required
            />

            <textarea
              name="message"
              cols="30"
              rows="6"
              autoComplete="off"
              required
            ></textarea>

            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </Binding>
  );
};

const Binding = styled.section`
  padding: 1rem 0 5rem 0;

  .container {
    margin-top: 6rem;
    text-align: center;

    .contact-form {
      max-width: 30rem;
      margin: auto;
    }
    .contact-inputs {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      input[type="submit"] {
        cursor: pointer;
        transition: all 0.2s;

        &:hover {
          background-color: ${({ theme }) => theme.colors.white};
          ${'' /* border: 1px solid ${({ theme }) => theme.colors.button}; */}
          border:1px solid rgb(98 84 243);
          ${'' /* color: ${({ theme }) => theme.colors.button}; */}
          color: rgb(89 88 86);
          transform:scale(0.9);
        }
      }
    }
  }
`;

export default Contact;
