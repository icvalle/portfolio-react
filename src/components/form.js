import React, { useState } from 'react';

import { validateEmail, checkValue } from '../utils/helpers';

function Form() {
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        // Based on the input type, we set the state of either email, username, and message
        if (inputType === 'email') {
        setEmail(inputValue);
        } else if (inputType === 'userName') {
        setUserName(inputValue);
        } else {
        setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();
    
        // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
        if (!validateEmail(email)) {
          setErrorMessage('Email is invalid');
          // We want to exit out of this code block if something is wrong so that the user can correct it
          return;
          // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
        }
        if (!checkValue(userName)) {
            setErrorMessage('Enter your name');
            return;
        }
        if (!checkValue(message)) {
            setErrorMessage('Enter a message');
            return;
        }
        alert(`Thanks for the message ${userName}!`);
    
        // If everything goes according to plan, we want to clear out the input after a successful submission.
        setUserName('');
        setEmail('');
        setMessage('');
        setErrorMessage('');
      };

    return (
        <div id="contactMe">
        <form class="col-sm-10 col-md-8 col-xl-5">
            <div class="form-group">
                <label for="contactName" class="text-dark">Name:</label>
                <input type="text" class="form-control" id="contactName" value={userName} name="userName" onChange={handleInputChange} />
              </div>
            <div class="form-group">
              <label for="contactEmail" class="text-dark">Email address:</label>
              <input type="email" class="form-control" id="contactEmail" value={email} name="email" onChange={handleInputChange} />
            </div>
            <div class="form-group">
                <label for="contactMessage" class="text-dark">Message:</label>
                <textarea class="form-control" id="contactMessage" rows="3" value={message} name="message" onChange={handleInputChange}></textarea>
              </div>
            <button type="submit" class="btn btn-secondary" onClick={handleFormSubmit}>Submit</button>
          </form>
          {errorMessage && (
            <div>
            <p className="error-text text-danger">{errorMessage}</p>
            </div>
          )}
    </div>
    );
}

export default Form;