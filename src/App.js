import Login from './componentes/login/Login'
import Alert from './componentes/alert/Alert'
import './App.css';
import { useState } from 'react';

function App() {

  const [alertMessage, setAlertMessage] = useState('')
  const [alertType, setAlertType] = useState('')

  const validLogin = (values) => {
    
    const validEmail = "josemfigueroa04@gmail.com"
    const validPassword = "123456"
    if(values.email === validEmail && values.password === validPassword){
      setAlertMessage("Login successful")
      setAlertType("success")
    }else{
      setAlertMessage("Login failed")
      setAlertType("danger")
    }
  }
  return (
    <div className= "container">
      <Alert message={alertMessage} type={alertType}/>
      <Login onSubmit={validLogin}/>
      
    </div>
  );
}

export default App;
