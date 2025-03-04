import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useModal } from '../../context/Modal';
import * as sessionActions from '../../store/session';
import './SignupForm.css';

function SignupFormModal() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const { closeModal } = useModal();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [hasSubmitted, setHasSubmitted] = useState(false);

   useEffect(() => {
      const formErrors = {};
      if (!confirmPassword.length || !email.length || firstName.length < 2 || lastName.length < 2 || username.trim().length < 4 ||   password.trim().length < 6 ) {
        setIsButtonDisabled(true);
      } else {
        setIsButtonDisabled(false);
      }
      if(!isValidEmail(email)){
        formErrors.email ="Please provide a valid email.";
      }
      if (confirmPassword.length && password !== confirmPassword){
        formErrors.confirmPassword="Confirm Password must be the same as the Password";
     
      }
      setErrors( formErrors);
    }, [errors,username, password, email, confirmPassword, firstName, lastName ]);

  function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setHasSubmitted(true);
    const formErrors= {};
    if (password !== confirmPassword){
      formErrors.confirmPassword="Confirm Password must be the same as the Password";
    } 
    if(!isValidEmail(email)){
      formErrors.email ="Please provide a valid email.";
    }   
    setErrors(formErrors);
    if (!Object.values(errors).length){ 
      setErrors({});
      return dispatch(
        sessionActions.signup({
          email,
          username,
          firstName,
          lastName,
          password
        })
      )
        .then(closeModal)
        .catch(async (res) => {
          const data = await res.json();
          if (data?.errors) {
            setErrors(data.errors);
            setHasSubmitted(true);
          }
        });
    }
  };

  return (
    <div className='signup-modal'>
      <h1 className='signup-header'>Sign Up</h1>
      <form onSubmit={handleSubmit} className='signup-form'>
        <label>
          Email
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <div className="errors">{hasSubmitted && errors.email && <p>{errors.email}</p>}</div>
        <label>
          Username
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <div className="errors">
          {errors.username && <p>{errors.username}</p>}
        </div>
        <label>
          First Name
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </label>
        <div className="errors">
          {errors.firstName && <p>{errors.firstName}</p>}
        </div>
        <label>
          Last Name
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </label>
        <div className="errors">
          {errors.lastName && <p>{errors.lastName}</p>}
        </div>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <div className="errors">
          {errors.password && <p>{errors.password}</p>}
        </div>
        <label>
          Confirm Password
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>
        <div className="errors">
          {hasSubmitted && errors.confirmPassword && <p>{errors.confirmPassword}</p>}
        </div>
        <button type="submit" 
          disabled={isButtonDisabled}
          className='signup-button'>Sign Up</button>
      </form>
    </div>
  );
}

export default SignupFormModal;