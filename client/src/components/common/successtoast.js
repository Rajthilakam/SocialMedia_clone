import React from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';
import Toast from 'react-bootstrap/Toast';


export default function Toasts () {
    const [show, setShow] = React.useState(true);
    return (
        <Toast show={show} onClose={() => setShow(false)} delay={3000} autohide>
        <Toast.Header>
        </Toast.Header>
        <Toast.Body>
          Please check your email to reset the password...
        </Toast.Body>
      </Toast>
    );
  }
