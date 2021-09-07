import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../common/Spinner';
import { getPosts } from '../../action/postActions';
import CreatePost from './CreatePost';
//import PostItem from './PostItem';
import PostFeed from './PostFeed';

class Post extends Component { 

    constructor(){
        super()    
        this.state = {                    
            errors:{}
        }
    }

    componentDidMount() {
        this.props.getPosts();
    }

    componentWillReceiveProps(newProps) {
        if (newProps.errors) {
          this.setState({ errors: newProps.errors });
        }

      }

    render() {

        const { posts, loading } = this.props.post;
        //const {errors} = this.state
        let postContent;

        if (posts === null || loading) {
            postContent = <Spinner />;
        } else {
            postContent = <PostFeed posts={posts} />;
        }
        return (
            <div>
                <CreatePost />
                {postContent}
            </div>
        )
    }
}


Post.propTypes = {
    getPosts: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired

};

const mapStateToProps = state => ({
    post: state.post,
    errors:state.errors
});

export default connect(mapStateToProps, {getPosts})(Post)