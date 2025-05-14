import { Text, View, StyleSheet } from 'react-native';
 import { Link } from 'expo-router'; 
 import { Image } from 'expo-image';
 import Button from '@/components/Button';
 import ImageViewer from '@/components/ImageViewer'
 
 const PlaceholderImage = require('@/assets/images/react-logo.png')
export default function Index() {
  return (
    <View style={styles.container}>
      <view style={styles.ImageContainer}>
        <ImageViewer imgSource={PlaceholderImage} />
     </view>
     <View style= {styles.footerContainer}>
      <Button label="Choose a photo" />
      <Button label="Use this photo" />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  ImageContainer: {
    flex: 1,
    paddingTop: 28
  },
    image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  footerContainer: {
    flex: 1/3,
    alignItems: 'center'
  },
});
