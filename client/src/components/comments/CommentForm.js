import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addComment } from '../../action/postActions';
import './CommentForm.css'

class CommentForm extends Component {


  constructor(props) {
    super(props);
    this.state = {
      text: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

 

  onSubmit(e) {
    e.preventDefault();

    const { user } = this.props.auth;
    const { postId } = this.props;

    const newComment = {
      text: this.state.text,
      name: user.name,
      avatar: user.avatar
    };

    console.log(postId)
    this.props.addComment(postId, newComment);
    this.setState({ text: '' });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });

  }

  componentWillReceiveProps(newProps) {
    if (newProps.errors) {
      this.setState({ errors: newProps.errors });
    }
  }


  render() {

    console.log(this.props.autoFocus)

    const { errors } = this.state;
    const {user} = this.props.auth
    return (
                
    <div className="row">

      <div className="col-md-1 d-xs-none d-sm-none d-md-none d-lg-none d-xl-block">
        <img
          src={user.avatar}
          className="rounded-circle float-left mt-3"
          alt="Pizza"
          width="44"
          height="46"
        />
      </div>
      <div className="col-md-11">
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <input type="text"
              name="text"
              value={this.state.text}
              autoFocus={this.props.autoFocus}
              className="form-control"
              id="comments"
              onChange={this.onChange}
              error={errors.text}
              placeholder="Write a Comment....." />
              
          </div>
        </form>
      </div>
    </div>
            
        )
  }
}



CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { addComment })(CommentForm)
