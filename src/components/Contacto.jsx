//  import React, { useState } from 'react';

// import { Helmet } from "react-helmet";

// import mapa from "../img/mapa.png"
// const Contacto = () => {
//     const [state,setState]= useState("");
//     const [name,setName]=useState("");
//     const [last,setLast]=useState("");
//     const [email,setEmail]=useState("");
//     const [phone,setPhone]=useState("");
//     const [message,setMessage]=useState("");

    
//     const  handleChange =(e,stateOne)=> {
//       console.log(e.target.value);
      
//         const value = e.target.value;
//         return stateOne(value);

//     };


//     async function fetchdata(e){ 
//         e.preventDefault();
//         const res =await fetch('http://localhost:3000/api/contact/index.php', {
//             method: 'POST',
//             body: JSON.stringify({
//                 NombreUser:name,
//                 ApellidoUser:last,   
//                 CelularUser:phone,
//                 EmailUser: email ,
//                 MensajeUser:message,
//             }),
//             headers: new Headers({ "Content-Type": "application/json" })
//         })
//         res.json()
//         .then(res=>console.log(res))
//         .then(setState("recibido"))
//         .catch(error=> console.log(error));
//     };
//     return (
//         <div className="diamante pb-9">
//             <Helmet>
//                 <title>Contacto - Diamante Perú</title>
//                 <meta name="description" content="Diamantes certificados por el Laboratorio mas prestigioso y famoso del mundo, Gemological Institute of America (GIA)" />
//                 <meta name="keywords" content="Diamante,diamante,joyas,diamante peru,diamante perú,Bodas,Testimonios,novios" />
//                 <meta name="URL" content="http://www.diamanteperu.com"/>
//                 <meta name="author" content="diamanteperu.com"/>
//                 <meta name="distribution" content="global"/> 
//             </Helmet>
//             <div className="white-background-text">
//                 {state === "" && (
//                     <> 
//                         <form  
//                             onSubmit={fetchdata}   
//                             method="POST"
//                             action="/api/contact/index.php" className="real-white" >
//                             <h1 className="raleway-semibold font-size-2em" >CONTACTO</h1>
//                             <p className="raleway-regular">Para cualquier consulta sobre alguna de nuestras joyas y diamantes, así como información de ventas y promociones, por favor contacte a uno de nuestros especialistas.</p>
//                             <div className="container-text-inputs">
//                                 <div className="flex-input raleway-regular">
//                                     <input 
//                                     type="text" 
//                                     value={name}
//                                     onChange={(e)=>{handleChange(e,setName)}}
//                                     id="name" 
//                                     name="name" 
//                                     required className="contact-input-size" 
//                                     placeholder="Nombre*"/>
//                                     <input 
//                                     type="text"   
//                                     value={last}
//                                     onChange={(e)=>{handleChange(e,setLast)}}
//                                     id="lastName" 
//                                     name="apellido"  
//                                     className="contact-input-size" 
//                                     placeholder="Apellido*"/>
//                                 </div>
//                                 <div className="flex-input raleway-regular">
//                                     <input 
//                                     type="number"   
//                                     value={phone}
//                                     onChange={(e)=>{handleChange(e,setPhone)}}
//                                     id="phone"  
//                                     name="telefono" 
//                                     required className="contact-input-size" 
//                                     placeholder="Telefono*"/>  
//                                     <input 
//                                     type="email"    
//                                     value={email}
//                                     onChange={(e)=>{handleChange(e,setEmail)}}  
//                                     id="mail"  
//                                     name="correo" 
//                                     required className="contact-input-size" 
//                                     placeholder="Correo Electrónico*"/>
//                                 </div>
//                                 <textarea  
//                                 value={message}
//                                 onChange={(e)=>{handleChange(e,setMessage)}}
//                                 name="mensaje" 
//                                 id="message" 
//                                 className="contact-input-size textarea raleway-regular" 
//                                 required placeholder="Mensaje"  
//                                 cols="30" 
//                                 rows="10"></textarea>
//                             </div>
//                             <button type="submit"className="btn-flat black color-white border-none btn-contact text-size14 raleway-medium-italic">ENVIAR </button>
//                         </form>
//                     </>
//                 )}
//                 {state === "recibido" && (
//                     <>
//                         <form className="real-white afterContact">
//                             <h1 className="raleway-semibold font-size-2em">¡Gracias por ponerse en contacto con Diamante Perú!</h1>
//                             <p className="raleway-regular">Uno de nuestros ejecutivos se estará poniendo en contacto en la brevedad posible para poder asesorarlo con su compra o ayudarlo a solucionar su consulta.</p>
//                             <div className="container-text-inputs"></div>
//                         </form>
//                     </>
//                 )}
//                 <div className="container-more-contact raleway-medium">
//                     <p className="text-contact">Av. reducto 1135 - Miraflores-Lima,Perú</p>
//                     <p className="text-contact consultas"><i className="fas fa-envelope p-right-05 "></i>consultas@diamanteperu.com</p>
//                     <p className="text-contact"><i className="fas fa-phone-alt  p-right-05"></i>01 241-8536</p>
//                     <p className="text-contact p-left-2"><i className="fas fa-phone-alt p-right-05"></i>01 445-6139</p>
//                 </div>
//                 <div className="center raleway-medium font-size-1em line-heigth-1">
//                     <p className="text-contact horariosAtencion center ">Horarios de Atención: Lun – Vier: 10 am – 7 pm / Sáb: 10 am – 6 pm</p>
//                     <p className="text-contact cierreRefrigerio center">(Cierre por refrigerio de 2pm – 3pm).</p>
//                 </div>
//                 <div className="mapa real-white real-white1">
//                     <img src={mapa} alt="" class="w100"/>
//                 </div>
//             </div>  
//         </div>
//     )
// }

// export default Contacto

import React from 'react';
import axios from 'axios';
import PruebaContacto from "./pruebaCOntacto"
import mapa from "../img/mapa.png"

class Contacto extends React.Component{
  
  constructor(props) {
	super(props);
	this.state = {
        name: '',
        lastname: '',
        phone: '',
  	    email: '',
        message: ''
	}
  }

  handleSubmit(e){
    e.preventDefault();
    console.log(this.state);
    axios({
      method: "POST", 
      url:"http://localhost:3000/api/contact/index.php", 
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success'){
        alert("Message Sent."); 
        this.resetForm()
      }else if(response.data.status === 'fail'){
        alert("Message failed to send.")
      }
    })
  }

  resetForm(){
    
     this.setState({name: '', email: '', message: ''})
  }
  
  render() {
	return(
        <div className="diamante pb-9">

        
  	<div className="white-background-text">
  	<form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST" className="real-white">
        <h1 className="raleway-semibold font-size-2em" >CONTACTO</h1>
        <p className="raleway-regular">Para cualquier consulta sobre alguna de nuestras joyas y diamantes, así como información de ventas y promociones, por favor contacte a uno de nuestros especialistas.</p>
  	    <div className="container-text-inputs">
          <div className="flex-input raleway-regular">
      	    <input type="text" required className="contact-input-size" id="name" placeholder="Nombre*" value={this.state.name} onChange={this.onNameChange.bind(this)} />
            <input type="text" required className="contact-input-size" id="lastname" placeholder="Apellido*" value={this.state.lastname} onChange={this.onLastNameChange.bind(this)} />
          </div>
          <div className="flex-input raleway-regular">
            <input type="number" required className="contact-input-size" id="phone" placeholder="Celular*" value={this.state.phone} onChange={this.onPhoneChange.bind(this)} />
      	    <input type="email" required className="contact-input-size" id="email" aria-describedby="emailHelp" placeholder="Correo Electrónico*" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
          </div>
          <textarea className="contact-input-size textarea raleway-regular"  rows="10" column="30"id="message" required placeholder="Mensaje" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
  	    </div>
  	    <button type="submit" className="btn-flat black color-white border-none btn-contact text-size14 raleway-medium-italic">ENVIAR</button>
  	</form>
      <div className="mapa real-white real-white1">
        <img src={mapa} alt="" className="w100"/>
        </div>
  	</div>
      <PruebaContacto/>
      </div>
      
	);
  }

  onNameChange(event) {
	this.setState({name: event.target.value})
  }
  onLastNameChange(event) {
	this.setState({lastname: event.target.value})
  }
  onPhoneChange(event) {
	this.setState({phone: event.target.value})
  }
  onEmailChange(event) {
	this.setState({email: event.target.value})
  }

  onMessageChange(event) {
	this.setState({message: event.target.value})
  }
}




export default Contacto;