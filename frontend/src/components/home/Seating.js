import React,{useLayoutEffect,useState} from 'react'
import { useNavigate } from "react-router-dom";
import styled from 'styled-components'
import "./seating.css";

const Seating = ({children, estado, cabiarState,peli}) => {
  const navigate = useNavigate();
  const [hora,sethora]=useState([])
  const [opcion,setopcion]=useState(1)
  const [array,setarray]=useState([])
  useLayoutEffect(() => {
	}, [hora])

  const handleClick1 = (id) => {
    if(!array.includes(id)){
      array.push(id)
      document.getElementById(id).className = "seat selected";
    }else{
      setarray(array.filter((item) => item !== id))
      document.getElementById(id).className = "seat";
    }
  };
  const handleClick = () => {
    peli.seatind1=hora;
    peli.seatind2=array;
    localStorage.setItem('peli', JSON.stringify(peli))
    localStorage.setItem('op', opcion)
    navigate('/reservar');
  };
  return (
    <>
    {estado&&
      <Overlay>
        <ContenedorModal>
          <BotonCerrar onClick={()=>cabiarState(!estado)} >
            X
          </BotonCerrar>
          {children}
          <div className="movie-container">

          <button className="btn btn-dark col-md-3"onClick={() => (sethora(peli.seatind1),setopcion(1))}>4:30 pm</button>
          <button className="btn btn-dark col-md-3 mx-5"onClick={() => (sethora(peli.seatind2),setopcion(2))}>7:00 pm</button>
          <button className="btn btn-dark col-md-3"onClick={() => (sethora(peli.seatind3),setopcion(3))}>9:30 pm</button>

          </div>
          <hr/>
          <div className="container">
            <div className="screen"><h2>{peli.name}</h2></div> 
            <div className="row">
              {hora.map((item,index) => (
                <div id={index} key={index} className={item.state ? "seat" : "seat sold"} onClick={event => handleClick1(index)}>
                </div>
              ))}
            </div>
            <hr/>
            <button type="button" className="btn btn-dark container" onClick={handleClick}>Reservar</button>
          </div>
          
        </ContenedorModal>
      </Overlay>
    }
    </>
  )
}

export default Seating

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0,0,0,.3); 
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContenedorModal = styled.div`
  width: 500px;
  min-height: 100px;
  background: #fff;
  position: relative;
  border-radius: 5px;
  box-shadow: rgba(100,100,111,0.2) 0px 7px 29px 0px;
  padding: 20px;
`;
const BotonCerrar = styled.div`
  position: absolute;
  top: 20px;
  right:20px;

  width: 30px;
  height: 30px;
  border: none;
  background: none;
  cursor: pointer;
  transition: .3s ease all;
  border-radius: 5px;
  color: #1766DC;

  &:hover {
    background: #f2f2f2;
  }
`;