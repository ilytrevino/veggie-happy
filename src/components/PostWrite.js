import React, { Component } from "react";
import styled from 'styled-components';
import Switch from './Switch';

const CreatePostContainer = styled.div `
  border-radius: 3px;
  border: 1px solid #e6e6e6;
  background-color: #fff;
  margin: 5%;
`;

const PostUser = styled.div `
  display: flex;
  margin: 10px;
  align-items: center;
`;

const PostContent = styled.div `
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

const PostUserNickname = styled.div `
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  flex: 1;
  font-family: 'PT Sans', sans-serif;
  font-weight: bold;
`;

const PostUserAvatarImg = styled.img `
  border-radius: 50%;
  height: 30px;
  margin-right: 10px;
  width: 30px;
`;

const PostCaption = styled.div `
  display: flex;
`;

const PostInput = styled.textarea `
  border: none;
  display: flex;
  flex: 1;
  margin-right: 10px;
`;

const PostFooter = styled.div`
  border-top: 1px solid #e6e6e6;
  display: flex;
  flex-direction: row;
  color: #888888;
  margin: 0 10px;
  text-align: left;
`;

const SwitchDiv = styled.div`
  margin-top: 5px;
`;

const Icons = styled.i`
  margin: auto 5px;
`;

const PostButton = styled.button`
  background: #43B157;
  border-radius: 30px;
  border: none;
  color: white;
  font-family: 'PT Sans',sans-serif;
  font-weight: 500;
  margin: 2px;
  margin-left: auto;
  margin-right: 0;
  width: 100px;
  text-shadow:none;
`;

class PostWrite extends Component {
  render() {
    return (
      <CreatePostContainer ref="Post">
        <header>
          <PostUser>
            <PostUserNickname>
              <span>Crear publicación</span>
            </PostUserNickname>
          </PostUser>
        </header>
        <PostContent>
          <PostCaption>
              <PostUserAvatarImg src="https://scontent-qro1-1.xx.fbcdn.net/v/t1.0-9/50343425_10161200476515632_1845036058220167168_n.jpg?_nc_cat=111&_nc_oc=AQkFIUgg3xx7Cstib46DEJppkaF1Kz_wImD0OKml2k8RE6kEWFcqGmsC37-cs-T5dC8&_nc_ht=scontent-qro1-1.xx&oh=17c727ade354e38527e757b0b966c491&oe=5D7E651C" alt="Ily" />
            <PostInput placeholder="¿Qué quieres compartir hoy?" />
          </PostCaption>
        </PostContent>
        <PostFooter>
          <Icons className="fas fa-globe-americas"/>
          <SwitchDiv>
            <Switch />
          </SwitchDiv>
          <Icons className="fas fa-users"/>
          <PostButton>Publicar</PostButton>
        </PostFooter>
      </CreatePostContainer>
    )
  }
}

export default PostWrite;
