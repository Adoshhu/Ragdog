import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import Video from 'react-native-video';

const DogScreen = ({ navigation }) => {
  const [dogMediaUrl, setDogMediaUrl] = useState('');
  const [mediaType, setMediaType] = useState('');

  const loadNewDogMedia = () => {
    axios
      .get('https://random.dog/woof.json')
      .then(response => {
        const url = response.data.url;
        if (url.endsWith('.mp4')) {
          setMediaType('video');
          setDogMediaUrl(url);
        } else if (url.endsWith('.gif')) {
          setMediaType('gif');
          setDogMediaUrl(url);
        } else {
          setMediaType('image');
          setDogMediaUrl(url);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    loadNewDogMedia();
  }, []);

  return (
    <View>
      {dogMediaUrl !== '' && mediaType === 'image' ? (
        <TouchableOpacity onPress={loadNewDogMedia}>
          <Image
            source={{ uri: dogMediaUrl }}
            style={{ width: 360, height: 500 }}
          />
        </TouchableOpacity>
      ) : mediaType === 'gif' ? (
        <TouchableOpacity onPress={loadNewDogMedia}>
          <Image
            source={{ uri: dogMediaUrl }}
            style={{ width: 360, height: 500 }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      ) : mediaType === 'video' ? (
        <TouchableOpacity onPress={loadNewDogMedia}>
          <Video
            source={{ uri: dogMediaUrl }}
            style={{ width: 360, height: 500 }}
            resizeMode="contain"
            controls
          />
        </TouchableOpacity>
      ) : (
        <Text>Loading...</Text>
      )}

      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.link}>Home</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <TouchableOpacity onPress={() => navigation.navigate('Anime')}>
          <Text style={styles.link}>Anime</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    width: '80%',
  },
  input: {
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 5,
    paddingHorizontal: 14,
    color: 'black',
  },
  link: {
    color: 'blue',
  },
});
export default DogScreen;
