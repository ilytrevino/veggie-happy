import React, { Component } from "react";
import styled from 'styled-components';
import firebase from '../config/FirestoreConfig';
import Like from '../assets/heart.png';

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

class Post extends Component {

  handleLikes = () => {
    console.log('working likes')
    let postId = this.props.postKey;
    let likesCountRef = firebase.database().ref('posts/' + postId + '/hearts');
    likesCountRef.on('value', function(snapshot) {
      console.log(snapshot.val())
      // updateStarCount(postElement, snapshot.val());
    });
  }

  // updateLikes = (hearts) => {
  //   let updates = {};
  //   updates['/posts' + ]
  //   if(hearts === 0){
  //     firebase.database().ref().update();
  //   }
  // }

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
            <ClickLink href=""><i className="fas fa-ellipsis-v"></i></ClickLink>
          </PostUser>
        </header>
        <PostCaption>
          {this.props.content}
        </PostCaption>
        <PostLikeCount>
          <ClickLink onClick={this.handleLikes}><HeartIcon src={Like} /></ClickLink>
          <PostLikeCounter>{this.props.hearts}</PostLikeCounter>
        </PostLikeCount>

      </PostContainer>
    )
  }
}

export default Post;
