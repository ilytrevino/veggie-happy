import React from 'react';
import Container from '../components/Container';
import firebase from '../config/FirestoreConfig';
import Post from '../components/Post';

class Posts extends React.Component {
  constructor(props){
    super(props);
    this.state = ({
      user: null,
      posts: [],
    })
  };

  componentDidMount(){
    this.authListener();
  }

  authListener = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
        this.printPosts(user);
      } else {
        this.setState({ user: null });
      }
    });
  }

  printPosts = () => {

  firebase.database().ref('/posts').on('value', (snapshot) => {
    let array = this.snapshotToArray(snapshot);
    array.reverse();
    this.setState({ posts: array });
    })
  }

  snapshotToArray = (snapshot) => {
    let returnArr = [];

    snapshot.forEach((childSnapshot) => {
        let item = childSnapshot.val();
        item.key = childSnapshot.key;

        returnArr.push(item);
    });
    return returnArr;
  }

  render() {
    return (
      <Container>
        {
          this.state.posts.map((e, index) => (<Post key={e.postKey} likes={this.handleLikes} user={e.user} content={e.body} privacy={e.privacy} hearts={e.heartsCount} postKey={e.postKey}/>))
        }
      </Container>
    )
  }
}

export default Posts;
