import styled from "styled-components";

const MainContactWrapper = styled.div`
  background-color: var(--Navy);
  padding-top: 8em;
  padding-bottom: 8em;
`;

const MainContact = styled.div`
  max-width: 1300px;
  margin: auto;
  color: var(--White);

  @media (max-width: 1499px) {
    max-width: 850px;
  }

  @media (max-width: 984px) {
    max-width: 470px;
  }

  @media (max-width: 500px) {
    max-width: 350px;
  }
`;

const ContactFormWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1499px) {
    flex-direction: column;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  width: 50%;
  padding: 3em;
  margin-top: 1em;
  border-radius: 0.5em;
  background-color: var(--Teal);

  @media (max-width: 1499px) {
    width: 100%;
  }
`;

const ContactLabel = styled.label`
  display: flex;
  flex-direction: column;
`;

const ContactInput = styled.input`
  padding: 1em;
  border-radius: 0.5em;
  border-style: none;
  background-color: var(--Navy);
  color: var(--White);
  margin-top: 0.8em;
`;

const ContactTextArea = styled.textarea`
  padding: 1em;
  border-radius: 0.5em;
  border-style: none;
  background-color: var(--Navy);
  color: var(--White);
  resize: none;
  margin-top: 0.8em;
`;

const ContactButton = styled.button`
  padding: 0.8em;
  border-radius: 0.5em;
  background-color: var(--Navy);
  color: var(--White);
  border: none;
  cursor: pointer;
`;

export const S = {
  MainContactWrapper,
  MainContact,
  ContactFormWrapper,
  ContactForm,
  ContactLabel,
  ContactInput,
  ContactTextArea,
  ContactButton,
};
