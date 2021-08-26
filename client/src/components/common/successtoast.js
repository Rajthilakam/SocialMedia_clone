import React from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';
//import {ToastContainer} from 'react-bootstrap/Toast';
import Toast from 'react-bootstrap/Toast';

//import ReactDOM from 'react-dom'; 


export default function Toasts (show) {
    //const [show, setShow] = React.useState(true);
    //const [position, setPosition] = React.useState('top-start');
    //return (
        //const [show,setShow] = React.useState(true);
        const position = React.useState('top-start');
  
  return (
    <div className="container">
       
        <Toast  show={show} delay={2000} position = {position} autohide>
          <Toast.Header>
            <strong className="mr-auto">Bootstrap Toast</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>This is simple Bootstrap Toast Example</Toast.Body>
        </Toast>
  
       
  
    </div>
       
       
    );
  }

  //class Toasts extends React.Component{ 
	//render(){ 
		//return( 
            //<div className="top-right">
            
          //</div>
			//); 
	//} 
//}   

//export default Toasts;