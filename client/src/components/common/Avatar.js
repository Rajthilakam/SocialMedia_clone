import React, { Component } from 'react';
//import pizza from '../../photos/pizza.jpg'

export default class Avatar extends Component {
    render() {
        return (
            <>
              <img
                        src= {this.props.src}
                        className="rounded-circle float-left"
                        alt="default"
                        width="54"
                        height="56"
                      />  
            </>
        )
    }
}
