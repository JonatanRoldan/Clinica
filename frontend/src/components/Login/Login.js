
import { useState } from "react";
import NavCollaps from '../Navbar';
import { useNavigate } from "react-router-dom";
import './login.css'

export function Login() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const baseUrl = "http://localhost:3000/auth/signin";
  const navigate = useNavigate();
  const [error, setError]= useState();

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      "username":user.username,
      "password":user.password
  })
  };
  const handleChange = ({target: {name,value}})=>
    setUser({...user,[name]:value});
    
  const handleSubmit = async(e) => {
    e.preventDefault();
    setError('')
    try {

      fetch(baseUrl, requestOptions)
      .then(response => response.json())
      .then(data => {
        localStorage.setItem('usuario', JSON.stringify(data))
      });
      navigate('/');
    } catch (error) {
      setError(error.message);
    }
    
  };
  return (
    <>
    <NavCollaps></NavCollaps>
    <div className="center">
      <h1>Iniciar Sesion</h1>
      
    </div>
    </>
  )
}