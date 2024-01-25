import { StatusBar } from 'expo-status-bar';
import  { useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import ImageViewer from './src/components/ImageViewer/ImageViewer';
import PlaceHolderImage from './assets/images/wallpaper.png'
import Button from './src/components/Button/Button';
export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const pickImageAsync  = async () => {
    
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    })
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }else{
      alert('No se seleccionó ninguna imagen');
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hola Naty!!!</Text>
      
       <ImageViewer 
            placeholderImageSource={PlaceHolderImage}
            selectedImage={selectedImage}/>
       <Button theme="primary" label="Elegir una foto" onPress={pickImageAsync}/>
       <Button theme="" label="Usar esta foto" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    
    
  },
  text:{
    fontSize: 50,
    color: '#cccccc'
  }
 
});
