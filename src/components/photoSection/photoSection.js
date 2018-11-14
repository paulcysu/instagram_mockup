import React, { Component } from 'react'
import { Text, View, Image, Button, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";

class PhotoSection extends Component {
  state = {
    "like": false
  }

  toggleLike = () => {
    this.setState({
      "like": !this.state.like,
    })
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.thumbnailSection}>
            <Image source={{uri: "https://picsum.photos/200/300/?random"}} style={styles.thumbnail}/>
            <View style={styles.usernameContainer}>
              <Text style={styles.username}>{this.props.username}</Text>
            </View>
        </View>

        <View>
            <Image source={{uri: this.props.image}} style={{width: null, height: 400}}/>
        </View>

        <View style={styles.heartContainer}>
          <TouchableWithoutFeedback onPress={() => this.toggleLike()}>
            <Text>{ !this.state.like ? "Like" : "Unlike" }</Text>
          </TouchableWithoutFeedback>
        </View>

        <View style={styles.commentContainer}>
            <Text style={styles.username}>{this.props.username}</Text>
            <Text style={styles.commentText}>this is freakin awesome!</Text>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 5
  },
  thumbnailSection: {
    flexDirection: "row",
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd" 
  },
  thumbnail: {
    width: 50, 
    height: 50,
    borderRadius: 25
  },
  usernameContainer: {
    justifyContent: "center",
    padding: 5
  },
  commentContainer: {
    flexDirection: "row",
    padding: 5
  },
  username: {
    fontWeight: "bold"
  },
  commentText: {
    paddingLeft: 5
  },
  heartContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10
  }
})

export default PhotoSection;