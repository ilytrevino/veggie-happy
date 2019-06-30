import React, { Component } from "react";
import styled from 'styled-components';
import firebase from '../config/FirestoreConfig';
import Like from '../assets/heart.png';
import Alert from '../components/SweetAlert';

const PostContainer = styled.div `
  border-radius: 3px;
  border: 1px solid #e6e6e6;
  background-color: #fff;
  margin: 5%;
`;

const PostUser = styled.div `
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  padding: 10px;
  align-items: center;
`;

const PostUserAvatar = styled.div `
  width: 30px;
  height: 30px;
`;

const PostUserNickname = styled.div `
  display: flex;
  flex: 1;
  margin-left: 12px;
  font-family: 'PT Sans', sans-serif;
  font-weight: bold;
`;

const PostUserAvatarImg = styled.img `
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

const PostCaption = styled.div `
  text-align: left;
  padding: 10px;
`;

const PostInput = styled.textarea `
  border: none;
  display: flex;
  flex: 1;
  margin-right: 10px;
`;

const ClickLink = styled.button `
  border: none;
  background: none;
  color: inherit;
  cursor: pointer;
`;

const Icons = styled.i`
  color: #888888;
  margin: auto 5px;
`;

const HeartIcon = styled.img`
  height: 20px;
  width: 20px
  margin 5px;
`;

const PostLikeCount = styled.div`
  border-top: 1px solid #e6e6e6;
  display: flex;
  padding-top: 5px;
  text-align: left;
  margin: 10px;
`;

const PostLikeCounter = styled.p`
  padding: 0 10px;
  margin: auto 0;
`;

const DeleteConfirmation = styled.div`
  display:none;
  position:fixed;
  top:0px;
  width:100%;
  height:150px;
  background-color:#5882FA;
  text-align:center;
`;

class Post extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: '',
      hearts: '',
      edit: false,
      alert: false
    }
  }

  componentDidMount(){
    let user = firebase.auth().currentUser;
    let postId = this.props.postKey;
    let likes = firebase.database().ref('posts/' + postId + '/hearts');
    likes.once('value').then(snapshot => {
      this.setState({
        user: user.uid,
        caption: this.props.content,
        hearts: snapshot.numChildren()
      })
    })
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleEdit = () => {
    this.setState({
      edit: true
    });
  }

  handleSaveEdit = () => {
    this.setState({
      edit: false
    })
  }

  handleLikes = () => {

    let promise = new Promise(resolve => {
      let postId = this.props.postKey;
      let userId = this.state.user;
      let likes = firebase.database().ref('posts/' + postId + '/hearts');

      likes.once('value')
        .then((snapshot) => {

          if(snapshot.hasChild(userId) && snapshot.child(userId).val() === true){

            firebase.database().ref('posts/' + postId + '/hearts/' + userId).remove().then(() => {return resolve(snapshot)});

          } else {
            let hearts = {};
            hearts[userId] = true;

            firebase.database().ref('posts/' + postId + '/').update({
              hearts
            }).then(() => {return resolve(snapshot)});
          }
      })
    });

    promise.then(() => {this.componentDidMount()})

  }

  handleDeletePost = () => {
    this.setState({
      alert: true
    })
    alert("¿Estás seguro que quieres eliminar esta publicación?");
    // this.props.handleDeletePost(this.props.postKey)
  }

  render() {
    return (
      <PostContainer ref="Post">
        <header>
          <PostUser>
            <PostUserAvatar>
              <PostUserAvatarImg src="https://scontent-qro1-1.xx.fbcdn.net/v/t1.0-9/50343425_10161200476515632_1845036058220167168_n.jpg?_nc_cat=111&_nc_oc=AQkFIUgg3xx7Cstib46DEJppkaF1Kz_wImD0OKml2k8RE6kEWFcqGmsC37-cs-T5dC8&_nc_ht=scontent-qro1-1.xx&oh=17c727ade354e38527e757b0b966c491&oe=5D7E651C" alt="Ily" />
            </PostUserAvatar>
            <PostUserNickname>
              <span>{this.props.user}</span> {this.props.privacy === 'public' ? <Icons className="fas fa-globe-americas"/> : <Icons className="fas fa-users"/>}
            </PostUserNickname>
            {this.state.edit
              ? <ClickLink onClick={this.handleSaveEdit}><i className="far fa-save"></i></ClickLink>
              : <ClickLink onClick={this.handleEdit}><i className="fas fa-pencil-alt"></i></ClickLink>
            }
            <ClickLink onClick={this.handleDeletePost}><i className="fas fa-trash-alt"></i></ClickLink>
          </PostUser>
        </header>
        <PostCaption name="caption" onChange={this.handleChange} contentEditable={this.state.edit}>
          {this.state.caption}
        </PostCaption>
        <PostLikeCount>
          <ClickLink onClick={this.handleLikes}><HeartIcon src={Like} /></ClickLink>
          <PostLikeCounter>{this.state.hearts}</PostLikeCounter>
        </PostLikeCount>
      </PostContainer>
    )
  }
}

export default Post;
