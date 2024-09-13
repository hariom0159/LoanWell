import React,{useState} from 'react';
import AuthenticationService from '../service/AuthenticationService';
import  {useNavigate} from 'react-router-dom';
import "../style/Login.css"


const Login = () => {
    const history = useNavigate();  // Object to navigate 
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
  
    const handleLogin = async () => {
      if (!email || !password) {
        setErrorMessage('Please enter both email and password.');
        return;
      }
  
      const employee = {
        email,
        password
      };
  
    /*await is usually used to unwrap promises by passing a Promise as the expression. 
  Using await pauses the execution of its surrounding async function until the promise is 
  settled (that is, fulfilled or rejected).
  When execution resumes, the value of the await expression becomes that of the 
  fulfilled promise.
  
  The Promise object represents the eventual completion (or failure) of an asynchronous 
  operation and its resulting value
     */
  try {
      const loginSuccess = await AuthenticationService.login(employee);
      console.log('API response:', loginSuccess.data); // Add this line
      if (loginSuccess) {
        setSuccessMessage('Login successful. Redirecting...');
        setTimeout(() => {
          history('/about-us'); // navigates to product Component
        }, 2000);
      } else {
        setErrorMessage('Invalid email or password.');
      }
    } catch (error) {
      console.error('Login error', error);
      setErrorMessage('An error occurred during login.');
    }
    
    };
  
    return (
      <div className="container">
          
      <span className='head'><h2>LOGIN</h2></span>
      <br></br>
      <br></br>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <br></br>
        <button className="btn btn-primary" onClick={handleLogin}>Login</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
     
      </div>
    );
  };
  
  export default Login;