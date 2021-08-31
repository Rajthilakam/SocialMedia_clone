import React, { Component } from 'react'
import Avatar from '../common/Avatar';
import './Postmodal.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../action/postActions';

class Postmodal extends Component {

    constructor(){
        super()
        this.state = {
            
            file:'',
            text:'',
            image:'',
            errors:{

            }

        }
        this.onChange = this.onChange.bind(this);
        this.imageUpload = this.imageUpload.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

       

    }

    onChange(e) {
        this.setState({[e.target.name]:e.target.value})
        //this.setState({text :this.state.text})
        //this.setState(this.file = e.target.files[0]);
    }

    imageUpload(e) {
        if(e.target.files) {
            this.setState(this.file = e.target.files[0])
        }        
    }        
        
    onSubmit(e) {
        e.preventDefault();

        //const {user} = this.state.auth

        console.log('in on submit')

        const data = new FormData()
            data.append("file",this.file)
            data.append("upload_preset",'SocialMedia')
            data.append("cloud-name",'socialmediaapp')

            fetch('https://api.cloudinary.com/v1_1/socialmediaapp/image/upload',{
                method:"post",
                body:data
            }
            )
            .then(res => res.json())
            .then(data => {  
               console.log(data.url) 
               this.setState({file:data.url});

               const newPost = {
                text:this.state.text,
                file:this.state.file,
                }   
                
                console.log(newPost)

                this.props.addPost(newPost)

                this.setState(this.file = ''); 
                //this.setState({
                    //text: ''
                  //});
                  //this.setState({ text: '' });
                console.log(this.props.posts.postedbyuser.lastname)
               
            })
           
            .catch(err => {
                console.log(err)
            })            

    }




    render() {

        

        return (
            <div className="modal fade"
                id="postmodal"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalCenterTitle"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-md modal-dialog-centered"
                    style={{ maxWidth: 650 }}
                    role="document">

                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">
                                Create Post
                            </h5>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>


                        <div className="modal-body">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-2">
                                        <Avatar />
                                    </div>
                                    <div class="col-md-10 pl-0">
                                        <h5>Mohita Sai Karthik</h5>
                                        <p pt-0>August 6th at 12.00 PM</p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col">
                                    <form onSubmit = {this.onSubmit} >
                                        <input type="text" 
                                        className="posttext" name="text" 
                                        value={this.state.text} 
                                        autoFocus 
                                        onChange={this.onChange} 
                                        placeholder="What's on your mind Mo?" />
                                        
                                        
                                        {this.file && (
                                             <div className="postimg">
                                             <img
                                                 src= {URL.createObjectURL(this.file)}
                                                 className="postimg"
                                                 alt="Pizza"
                                             />
                                         </div>
                                        )}   

                                            <div className="share-icons">
                                                <h5>Share a post</h5>
                                                <label htmlFor="fileInput">
                                                    <span style={{ fontSize: 30, color: "lightgreen" }}>
                                                        <i className="fas fa-image" data-toggle="tooltip" data-placement="top" title="photos/Videos" ></i>
                                                    </span>
                                                    <input id="fileInput" 
                                                    name="file"
                                                    
                                                    type="file" 
                                                    style={{ display: "none" }} 
                                                    accept=".png,.jpeg,.jpg"
                                                    onChange={this.imageUpload} 
                                                    
                                                    />
                                                </label>
                                                <span style={{ fontSize: 30, color: "orange" }}>
                                                    <i className="fas fa-tags" data-toggle="tooltip" data-placement="top" title="Tag"></i>
                                                </span>
                                                <span style={{ fontSize: 30, color: "red" }}>
                                                    <i className="fas fa-search-location" data-toggle="tooltip" data-placement="top" title="Location"></i>
                                                </span>
                                                <span style={{ fontSize: 30, color: "yellowgreen" }}>
                                                    <i className="fas fa-skiing-nordic" data-toggle="tooltip" data-placement="top" title="Activity"></i>
                                                </span>
                                            </div>
                                            <button
                                                type="button"
                                                className="btn btn-info float-right"
                                                data-dismiss="modal"
                                                onClick = {this.onSubmit}
                                            >
                                                Add Post
                                            </button>

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



Postmodal.propTypes = {
    addPost: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}


const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors,
    posts:state.posts
  });


export default connect(mapStateToProps, { addPost })(Postmodal)
