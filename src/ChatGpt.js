import React, { useState } from 'react';

const Chat = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if any of the input boxes is empty
    if (input1 === '' || input2 === '') {
      setErrorMessage('Error: Both input boxes must be filled out');
    } else {
      setErrorMessage('');
      // Perform any other actions with the form data if needed
    }
  };

  return (
    <div>
      <h2>React Form Validation</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Input 1:
          <input
            type="text"
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
            required
          />
        </label>

        <br />

        <label>
          Input 2:
          <input
            type="text"
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
            required
          />
        </label>

        <br />

        <input type="submit" value="Submit" />
      </form>

      {errorMessage && <p style={{ color: 'red', fontWeight: 'bold' }}>{errorMessage}</p>}
    </div>
  );
};

export default Chat;
