/**
 * @flow
 */
import React from 'react';
import {
  Text,
  View,
  Image,
  Linking
} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';


const AlbumDetails = ({ album }) => {
    const { 
            title, 
            artist, 
            thumbnail_image,
            image,
            url
        } = album;
    const { 
            imageContainer, 
            textContainer, 
            thumbnailContainer,
            headerText,
            imageArtContainer
        } = styles;

    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainer}>
                    <Image style={imageContainer} source={{ uri: thumbnail_image }} />
                </View>
                <View style={textContainer}>
                    <Text style={headerText}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image style={imageArtContainer} source={{ uri: image }} />
            </CardSection>
              
            <CardSection>
                <Button onPress={() => Linking.openURL(url)}>
                    Buy Now!
                </Button>
            </CardSection>
        </Card>
    );
};

const styles = {
    imageContainer: {
        height: 50,
        width: 50,
    },
    thumbnailContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    textContainer: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    headerText: {
        fontSize: 16
    },
    imageArtContainer: {
        height: 300,
        flex: 1,
        width: null
    }

};
export default AlbumDetails;
