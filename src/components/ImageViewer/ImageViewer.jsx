import React from 'react';
import { Text, Image } from 'react-native';
import { StyleSheet } from 'react-native';


const ImageViewer = ({placeholderImageSource,selectedImage}) => {
    if(selectedImage){
        return (
            <Image source={{uri:selectedImage}} style={styles.image} />
        )
    }
    return (
        <Image source={placeholderImageSource} style={styles.image} />
    )
}

export const styles = StyleSheet.create({
	imageviewer: {
		flex: 1,
	},
    image:{
        width: 320,
        height: 440,
        borderRadius: 10,
      }
});
export default ImageViewer