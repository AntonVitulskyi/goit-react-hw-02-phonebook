import Container from './Container/Container';
import Phonebook from './Phonebook/Phonebook';
import ContactList from './ContactList/ContactList';

export const App = () => {
  return (
    <>
      <Container>
        <Phonebook/>
        <ContactList/>
      </Container>
    </>
  );
};
