import React, { Component } from "react";
import styled from 'styled-components';

const PostContainer = styled.div `
  border-radius: 3px;
  border: 1px solid #e6e6e6;
  background-color: #fff;
  margin: 5% 10%;
`;

const PostUser = styled.div `
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

const MenuDots = styled.a `
  color: inherit;
`;

class Post extends Component {
  render() {
    return (
      <PostContainer ref="Post">
        <header>
          <PostUser>
            <PostUserAvatar>
              <PostUserAvatarImg src="https://scontent-qro1-1.xx.fbcdn.net/v/t1.0-9/50343425_10161200476515632_1845036058220167168_n.jpg?_nc_cat=111&_nc_oc=AQkFIUgg3xx7Cstib46DEJppkaF1Kz_wImD0OKml2k8RE6kEWFcqGmsC37-cs-T5dC8&_nc_ht=scontent-qro1-1.xx&oh=17c727ade354e38527e757b0b966c491&oe=5D7E651C" alt="Ily" />
            </PostUserAvatar>
            <PostUserNickname>
              <span>Ily Trevino</span>
            </PostUserNickname>
            <MenuDots href=""><i className="fas fa-ellipsis-v"></i></MenuDots>
          </PostUser>
        </header>
        <PostCaption>
          Moving the community!
        </PostCaption>

      </PostContainer>
    )
  }
}

export default Post;
