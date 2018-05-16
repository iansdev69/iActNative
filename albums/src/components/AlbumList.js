/**
 * @flow
 */
import React, { Component } from 'react';
import {
  ScrollView
} from 'react-native';
import axios from 'axios';
import AlbumDetails from './AlbumDetails';

type Props = {};

class AlbumList extends Component<Props> {
    state = {
        albums: []
    }

    componentWillMount() {
        console.log('componentWillMount');
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data }));
    } 

    renderAlbums() {
        return this.state.albums.map(album =>
        <AlbumDetails key={album.title} album={album} />);
    }

    render() {
        console.log('state', this.state);
        return (
            <ScrollView>
               {this.renderAlbums()}
            </ScrollView>
        );
    }
}
export default AlbumList;
