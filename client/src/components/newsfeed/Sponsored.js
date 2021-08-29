import React, { Component } from 'react';
import './Sponsored.css';
import kalacademy from '../../photos/Kalacademy.jpg';
import wit from '../../photos/women-in-tech-2020.jpg'

export default class Sponsored extends Component {
    render() {
        return (
            <div className="row">
                <div className="col">
                    <div className="media">
                        <img
                            className="mr-3"
                            src= {kalacademy}
                            alt="Kal Academy"
                        />
                        <div className="media-body">
                            <h5 className="mt-3">Kal Academy</h5>
                            <p>
                                Accredited, Non-profit coding academy for women and
                                minorities. Subscribe to our newsletter.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="media">
                        <img
                            className="mr-3"
                            src={wit}
                            alt="Kal Academy"
                        />
                        <div className="media-body">
                            <h5 className="mt-3">Women in Tech</h5>
                            <p>Women in Tech Conference 2021 - Seattle</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

