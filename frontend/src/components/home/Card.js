import React, { useLayoutEffect,useState } from "react";
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from "react-router-dom";
import "./card.css";
import "./seating.css";

function Card({ pelicula }) {
  const [statModal1, setModal1] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const navigate = useNavigate();
  const [hora,sethora]=useState([])
  const [opcion,setopcion]=useState(1)
  const [array,setarray]=useState([])
  useLayoutEffect(() => {
	}, [hora])

  const handleClick1 = (id) => {
    console.log(array)
    if(!array.includes(id)){
      array.push(id)
      document.getElementById(id).className = "seat selected";
    }else{
      setarray(array.filter((item) => item !== id))
      document.getElementById(id).className = "seat";
    }
  };
  const handleClick = () => {
    pelicula.seatind1=hora;
    pelicula.seatind2=array;
    localStorage.setItem('peli', JSON.stringify(pelicula))
    localStorage.setItem('op', opcion)
    navigate('/reservar');
  };
  return (
    <>
    <div className="card text-center animate__animated animate__fadeInUp shadow-lg p-3 mb-5 bg-white rounded">
      <div className="overflow">
        <img src={pelicula.imgUrl} alt="a wallpaper" className="card-img-top" />
      </div>
      <div className="card-body">
        <h4 className="card-title">{pelicula.name}</h4>
        <hr/>
        <p>Horario: {pelicula.schedule}</p>
        <p>Categoria: {pelicula.category}   Precio: Q{pelicula.price}   </p>
        <button type="button" className="btn btn-dark btn-lg " onClick={()=>setShow(true)} >DETALLES</button>
      </div>
    </div>
    
    <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>
              <h1> Pelicula {pelicula.name} </h1> 
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="movie-container">
                <button className="btn btn-dark col-md-3"onClick={() => (sethora(pelicula.seatind1),setopcion(1))}>4:30 pm</button>
                <button className="btn btn-dark col-md-3 mx-5"onClick={() => (sethora(pelicula.seatind2),setopcion(2))}>7:00 pm</button>
                <button className="btn btn-dark col-md-3"onClick={() => (sethora(pelicula.seatind3),setopcion(3))}>9:30 pm</button>
              </div>
              <hr/>
              <div className="container">
                <div className="screen"><h2>{pelicula.name}</h2></div> 
                <div className="row">
                  {hora.map((item,index) => (
                    <div id={index} key={index} className={item.state ? "seat" : "seat sold"} onClick={event => handleClick1(index)}>
                    </div>
                  ))}
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <button type="button" className="btn btn-dark container"onClick={handleClick}>Reservar</button>
            </Modal.Footer>
    </Modal>
    
    </>
  );
}


export default Card;