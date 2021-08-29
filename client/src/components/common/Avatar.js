import React, { Component } from 'react';
import pizza from '../../photos/pizza.jpg'

export default class Avatar extends Component {
    render() {
        return (
            <>
              <img
                        src= {pizza}
                        className="rounded-circle float-left"
                        alt="Pizza"
                        width="54"
                        height="56"
                      />  
            </>
        )
    }
}
