import React, { Component } from 'react';
import UserPostFeed from './UserPostFeed';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {getUserPosts} from '../../action/postActions'

class UserPost extends Component {

    constructor(){
        super()    
        this.state = {                    
            errors:{}
        }
    }

    componentDidMount() {
        this.props.getUserPosts();
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
    post: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired

};

const mapStateToProps = state => ({
    post: state.post,
    errors:state.errors
});

export default connect(mapStateToProps, {getUserPosts}) (UserPost)