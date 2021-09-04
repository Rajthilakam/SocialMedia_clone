import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserPostItem from './UserPostItem';


export default class UserPostFeed extends Component {
    render() {
        if(!this.props.posts) {
            return null
        }
        const {posts} = this.props
            return posts.map(post => <UserPostItem key={post._id} post={post} />);            
        
    }
}

UserPostFeed.propTypes = {
    posts: PropTypes.array.isRequired
  };
