import React, { Component, Fragment } from 'react';

export default class InfoCard extends Component {
    render() {
        return (
            <div className="row">
            <div className="col">
               <div className="card topcard mt-3">
                 <div className="card-title mb-0">
                   <h4 className="ml-4 mt-2">Info</h4>
                 </div>
                 <div className="card-body">
                   <p>
                     <i className="fas fa-home"></i>
                     <Fragment>&nbsp;</Fragment>Lives in Bellevue
                   </p>
                   <p>
                     <i className="far fa-clock"></i>
                     <Fragment>&nbsp;</Fragment>Joined Augugst 2021
                   </p>
                   <p>
                     <i className="fas fa-graduation-cap"></i>
                     <Fragment>&nbsp;</Fragment>Studied at University of Washington
                   </p>
                 </div>
               </div>
             </div>
       </div>  
        )
    }
}
