import React, { Component } from 'react'
import { Text, View } from 'react-native'
import axios from 'axios';
import PhotoSection from '../photoSection/photoSection';
import { connect } from 'react-redux';
import { getPhotos } from '../../actions';

class PhotoFeed extends Component {
    state = {
        "photos": null
    }

    componentDidMount () {
        // axios.get('http://localhost:3000/data')
        //     .then(response => {
        //         console.log(response);
        //         this.setState({
        //             "photos": response.data
        //         })
        //     })
        //     .catch(err => console.log(err))
        this.props.getPhotos();
    }

    renderPhoto() {
        return this.props.photos.map((item, index) => {
            return (
                <PhotoSection key={index} username={item.user.username} image={item.images.standard_resolution.url}/>
            )
        })
    }

    render() {
        return (
        <View>
            {this.renderPhoto()}
        </View>
        )
    }
}

function mapStateToProps (state) {
    return {
        photos: state.photos
    }
};

export default connect(mapStateToProps, { getPhotos })(PhotoFeed);