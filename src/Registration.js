import React, { useState } from 'react';
import './Registration.css';

const Registration = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [nameInput, setNameInput] = useState('');
  const [userInput, setUserInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [mobileInput, setMobileInput] = useState('');
  const [error, setError] = useState(false);
  const [userError, setUserError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [mobileError, setMobileError] = useState(false);
  const [buttonColor, setButtonColor] = useState(generateRandomColor()); // Initial color
  const [nextComponentVisible, setNextComponentVisible] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const inputStyles = {
    backgroundColor: '#292929',
    color: 'white',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    outline: 'none',
  };

  const labelStyles = {
    color: 'black',
  };

  const handleInputs = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setNameInput(value);
        setError(false);
        break;
      case 'username':
        setUserInput(value);
        setUserError(false);
        break;
      case 'email':
        setEmailInput(value);
        setEmailError(false);
        break;
      case 'mobile':
        setMobileInput(value);
        setMobileError(false);
        break;
      default:
        break;
    }
  };

  const handleButton = (e) => {
    e.preventDefault();

    // Check the length of each input individually
    setError(nameInput.length === 0);
    setUserError(userInput.length === 0);
    setEmailError(emailInput.length === 0);
    setMobileError(mobileInput.length === 0);
    if (!error && !userError && !emailError && !mobileError && isChecked) {
      // Set state to show the next component
      setNextComponentVisible(true);
    }
    // Generate a random color and set the state
    setButtonColor(generateRandomColor());
  };

  // Function to generate a random color
  function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  
   return (
    <div className='Home'>
      {nextComponentVisible ? (
        <NextComponent />
      ) : (
        <form className="form">
          <h1>Super app</h1>
          <br />
          <h5>Create your new account</h5>
          <br />

        <div className="inputs">
          <input
            name="name"
            onChange={handleInputs}
            style={inputStyles}
            type="text"
            placeholder="Name"
          />
          {error ? (
            <label style={labelStyles} className="label">
              Field is required
            </label>
          ) : (
            ''
          )}{' '}
          <br />
          <input
            name="username"
            onChange={handleInputs}
            style={inputStyles}
            type="text"
            placeholder="UserName"
          />
          {userError ? (
            <label style={labelStyles} className="label">
              Field is required
            </label>
          ) : (
            ''
          )}{' '}
          <br />
          <input
            name="email"
            onChange={handleInputs}
            style={inputStyles}
            type="email"
            placeholder="Email"
          />
          {emailError ? (
            <label style={labelStyles} className="label">
              Field is required
            </label>
          ) : (
            ''
          )}{' '}
          <br />
          <input
            name="mobile"
            onChange={handleInputs}
            style={inputStyles}
            type="numeric"
            placeholder="Mobile"
          />
          {mobileError ? (
            <label style={labelStyles} className="label">
              Field is required
            </label>
          ) : (
            ''
          )}{' '}
          <br />
        </div>



        <input
          type="checkbox"
          name="cheack"
          onChange={handleCheckboxChange}
        />

        {isChecked ? 'Checked!' : 'Share my registration data with Superapp'}



{/* 
        <div className="checkbox-container">
            <input
              type="checkbox"
              name="cheack"
              onChange={handleCheckboxChange}
            />
            <span>
              {isChecked ? 'Checked! Share my registration data with Superapp' : 'Share my registration data with Superapp'}
            </span>
          </div> */}







        <label>
          <button
            onClick={handleButton}
            className="SignUp"
            style={{ backgroundColor: buttonColor }}
          >
            SIGN UP
          </button>
        </label>
        <footer>
          <h6>
            By clicking on Sign up, you agree to Superapp Terms and Conditions
            of Use
          </h6>
          <h6>
            To learn more about how Superapp collects, uses, shares, and protects
            your personal data please head Superapp Privacy Policy
          </h6>
        </footer>
      </form>
  )}
  </div>
);
};


const NextComponent = () => {
  return (
    <div>
      <h1>Next Component</h1>
      <p>This is the next component after successful form submission.</p>
    </div>
  );
};

export default Registration;







