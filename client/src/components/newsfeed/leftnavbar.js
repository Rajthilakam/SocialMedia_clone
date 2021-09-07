import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LeftNavbar.css';
import baby from '../../photos/baby1.jpg'

class Leftnavbar extends Component {
  render() {
    return (

      <ul className="collapse show mt-lg-3 pl-lg-3 pl-sm-0">
        <Link to="#">
          <li className="icons">

            <i
            ><img
                src={baby}
                className="rounded-circle float-left mr-3 d-sm-none d-md-none d-lg-inline d-xl-inline"
                alt="Pizza"
                width="44"
                height="46"
              /></i>

            <h5 className="sidebarfont">
              <span>Mohita Sai Karthik</span>
            </h5>
          </li>
        </Link>


        <Link to="#">
          <li className="icons">
            <h5>
              <span
                className="mr-2"
                style={{ fontSize: 30, color: "Dodgerblue" }}
              >
                <i className="fas fa-user-friends d-sm-none d-md-none d-lg-inline d-xl-inline"></i>
              </span>
              <span className="sidebarfont">Find Friends</span>
            </h5>
          </li>
        </Link>

        <Link to="#">
          <li className="icons">
            <h5>
              <span
                className="mr-3"
                style={{ fontSize: 30, color: "Mediumslateblue" }}
              >
                <i className="fas fa-save d-sm-none d-md-none d-lg-inline d-xl-inline"></i>
              </span>
              <span className="sidebarfont">Saved Posts</span>
            </h5>
          </li>
        </Link>

        <Link to="">
          <li className="icons">
            <h5>
              <span className="mr-3" style={{ fontSize: 30, color: "red" }}>
                <i className="fas fa-heart d-sm-none d-md-none d-lg-inline d-xl-inline"></i>
              </span>
              <span className="sidebarfont"> Favourites </span>
            </h5>
          </li>
        </Link>

        <Link to="#">
          <li className="icons">
            <h5>
              <span
                className="mr-2"
                style={{ fontSize: 30, color: "royalblue" }}
              >
                <i className="fas fa-users d-sm-none d-md-none d-lg-inline d-xl-inline"></i>
              </span>
              <span className="sidebarfont"> Groups </span>
            </h5>
          </li>
        </Link>

        <Link to="#">
          <li className="icons">
            <h5>
              <span className="mr-3" style={{ fontSize: 30 }}>
                <i className="fas fa-calendar-alt  d-sm-none d-md-none d-lg-inline d-xl-inline"></i>

              </span>
              <span className="sidebarfont"> Events </span>
            </h5>
          </li>
        </Link>

        <Link to="#">
          <li className="icons">
            <h5>
              <span
                className="mr-2"
                style={{ fontSize: 30, color: "mediumvioletred" }}
              >
                <i className="fas fa-video  d-sm-none d-md-none d-lg-inline d-xl-inline"></i>
              </span>
              <span className="sidebarfont"> Videos </span>
            </h5>
          </li>
        </Link>

        <Link to="#">
          <li className="icons">
            <h5>
              <span className="mr-2" style={{ fontSize: 30, color: "skyblue" }}>
                <i className="fas fa-clock  d-sm-none d-md-none d-lg-inline d-xl-inline"></i>
              </span>
              <span className="sidebarfont"> Memories </span>
            </h5>
          </li>
        </Link>
      </ul>
    )
  }
}

export default Leftnavbar
