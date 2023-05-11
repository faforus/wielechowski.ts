import React, { useState } from 'react';
import classes from './ContactForm.module.css';
import Spinner from './Spinner';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formIsValid, setFormIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [sendingForm, setSendingForm] = useState(false);
  const [sendingFormOutcome, setSendingFormOutcome] = useState<null | string>(null);
  const [rodo, setRodo] = useState(false);

  const toggleRodoHandler = () => {
    setRodo((prev) => !prev);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    validateForm();

    if (formIsValid) {
      setSendingForm(true);
      const url = 'https://sendemail-2qkjfrtbsq-uw.a.run.app';
      const data = {
        name,
        surname,
        phoneNumber,
        email,
        message,
      };

      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          setName('');
          setSurname('');
          setPhoneNumber('');
          setEmail('');
          setMessage('');
          setSendingForm(false);
          setSendingFormOutcome('sent');
        } else {
          throw new Error('Error sending the form.');
        }
      } catch (error) {
        console.error('Error:', error);
        setSendingForm(false);
        setSendingFormOutcome('notsent');
      }
    }
  };

  const validateForm = () => {
    let isValid = true;
    let error = '';

    if (message.trim().length < 10) {
      isValid = false;
      error = 'Wiadomość musi mieć co najmniej 10 znaków.';
    }

    const nameAndSurnameProvided = name.trim().length > 0 || surname.trim().length > 0;
    const emailOrPhoneProvided = email.trim().length > 0 || phoneNumber.trim().length > 0;

    if (!nameAndSurnameProvided || !emailOrPhoneProvided) {
      isValid = false;
      error = 'Proszę podać imię lub nazwisko oraz email lub numer telefonu.';
    }

    const nameContainsNumbers = /\d/.test(name);
    const surnameContainsNumbers = /\d/.test(surname);

    if (nameContainsNumbers || surnameContainsNumbers) {
      isValid = false;
      error = 'Imię i nazwisko nie mogą zawierać cyfr.';
    }

    if (email.trim().length > 0 && (!email.includes('@') || !email.includes('.'))) {
      isValid = false;
      error = 'Adres email jest nieprawidłowy.';
    }

    if (phoneNumber.trim().length > 0 && !/^[0-9+\-\s]+$/.test(phoneNumber)) {
      isValid = false;
      error = 'Numer telefonu zawiera niedozwolone znaki.';
    }

    setFormIsValid(isValid);
    setErrorMessage(error);
  };

  let content;
  if (!sendingForm && sendingFormOutcome === null) {
    content = (
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes['input-label-caontainer']}>
          <label htmlFor='name'>Imię:</label>
          <input
            type='text'
            id='name'
            value={name}
            name='Name'
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className={classes['input-label-caontainer']}>
          <label htmlFor='surname'>Nazwisko:</label>
          <input
            type='text'
            id='surname'
            value={surname}
            name='Surname'
            onChange={(event) => setSurname(event.target.value)}
          />
        </div>
        <div className={classes['input-label-caontainer']}>
          <label htmlFor='phone'>Telefon:</label>
          <input
            type='tel'
            id='phone'
            value={phoneNumber}
            name='phone'
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
        </div>
        <div className={classes['input-label-caontainer']}>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            value={email}
            name='email'
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className={classes['input-label-caontainer']}>
          <label htmlFor='message'>Wiadomość:</label>
          <textarea
            id='message'
            value={message}
            name='message'
            onChange={(event) => setMessage(event.target.value)}
          />
        </div>
        {!formIsValid ? (
          <div className={classes['error-message-container']}>
            <p>{errorMessage}</p>
          </div>
        ) : (
          ''
        )}
        <button type='submit' onClick={validateForm}>
          Wyślij
        </button>
      </form>
    );
  }
  if (sendingForm) {
    content = (
      <div className={classes['spinner-container']}>
        <Spinner maxHeight='100px' />
      </div>
    );
  }
  if (sendingFormOutcome === 'sent') {
    content = (
      <div className={classes.sent}>
        <p>Wiadomość wysłana!</p>
        <button
          onClick={() => {
            setSendingFormOutcome(null);
          }}
        >
          OK
        </button>
      </div>
    );
  }
  if (sendingFormOutcome === 'notsent') {
    content = (
      <div className={classes.sent}>
        <p style={{ textAlign: 'center' }}>
          Problem z wysłaniem wiadomości.
          <br />
          Spróbuj ponownie.
        </p>
        <button
          onClick={() => {
            setSendingFormOutcome(null);
          }}
        >
          OK
        </button>
      </div>
    );
  }

  return (
    <div className={classes['form-container']}>
      {content}
      {!sendingForm && (
        <button onClick={toggleRodoHandler} className={classes.rodo}>
          rodo
        </button>
      )}
      {rodo ? (
        <p className={classes['rodo-text']}>
          Administratorem danych osobowych jest Filip Wielechowski NIP 5862228933, REGON 520394284.
          Dane wpisane w formularzu kontaktowym będą przetwarzane w celu udzielenia odpowiedzi na
          przesłane pytanie.
        </p>
      ) : (
        ''
      )}
    </div>
  );
};

export default ContactForm;
