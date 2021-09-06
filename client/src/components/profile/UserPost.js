import React, { Component } from 'react';
import UserPostFeed from './UserPostFeed';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {getUserPosts} from '../../action/postActions';

class UserPost extends Component {

    constructor(props){
        super(props)    
        this.state = {
            userid:''       
            
          };
    }


    componentWillReceiveProps(newProps) {
        
        if (newProps.errors) {
          this.setState({ errors: newProps.errors });
        }
      }

    render() {


        const { posts } = this.props.post;

        let UserPostContent;
        UserPostContent = <UserPostFeed posts={posts} />;

        return (
            <div>
                {UserPostContent}
            </div>
        )
    }
}


UserPost.propTypes = {
    getUserPosts: PropTypes.func.isRequired,
    profile:PropTypes.object.isRequired,
    post: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,


};

const mapStateToProps = state => ({
    profile:state.profile,
    post: state.post,
    errors:state.errors
});

export default connect(mapStateToProps, {getUserPosts}) (UserPost)