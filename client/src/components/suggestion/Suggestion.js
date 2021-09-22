import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Suggestion.css';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { getSuggestions,followUser } from '../../action/profileActions';


class Suggestion extends Component {

    constructor() {
        super()
        this.state = {
            isFollow: false
        }
        this.onFollow = this.onFollow.bind(this)
    }

    componentDidMount() {
        this.props.getSuggestions();
    }

    onFollow(id) { 
        this.props.followUser(id)
        this.setState({isFollow:true})
    }

    onUnFollow(id){
        this.props.unfollowUser(id)
        console.log('unfollow')
    }

    render() {

        const {followings} = this.props.profile
        console.log(followings)

        let suggestionList;
        if (followings && followings !== null && followings.length >= 1) {
            suggestionList = followings.map((profile) => (
                
                <Link to={`/profile/${profile.user}`} className="profilelink">
                    <div
                        className="card card-design"
                        style={{ maxWidth: "16rem", height: "26rem" }}
                    >
                        <img
                            className="card-img-top img-fluid"
                            src={profile.profilepic}
                            alt="Card cap"
                            style={{ width: "18rem", height: "15rem" }}
                        />
                        {profile.user && ( 
                        <h5 className="mt-2 pl-2">{profile.user.fullname?profile.user.fullname:''}</h5>
                        )}
                       
                        {profile.user && (    
                        <div className="card-body">
                            {this.state.isFollow === true ? ( 
                                <Link to="#" 
                                className="btn friendbtn  btn-primary d-block" 
                                onClick={this.onFollow.bind(this,profile.user.id)}>FRIENDS</Link>):
                                (<Link to="#" 
                                className="btn friendbtn  btn-primary d-block" 
                                onClick={this.onFollow.bind(this,profile.user.id)}>ADD FRIEND</Link>)}                            
                                                    
                            <br />
                            <Link to="#" className="btn friendbtn btn-outline-secondary d-block">REMOVE</Link>
                        </div>
                        )}
                    </div>
                </Link>
                )
                            
            )
            
        }
        else {
            suggestionList = null
        }


        return (
            <div className="conatiner-fluid">
                <div className="row">
                    <div className="col-md-3">
                    </div>

                    <div className="col-md-9">
                        <h5 className="mt-3">PEOPLE YOU MAY KNOW</h5>
                        <div className="d-flex flex-wrap mt-5">
                            {suggestionList}
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}



Suggestion.propTypes = {
    getSuggestions: PropTypes.func.isRequired,
    followUser:PropTypes.func.isRequired,
    Profiles: PropTypes.array.isRequired,
    errors: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    profile: state.profile,
    errors: state.errors,
    auth: state.auth
});

export default connect(mapStateToProps, { getSuggestions,followUser })(Suggestion)







