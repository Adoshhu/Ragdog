import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { Linking } from 'react-native';
import { API_URL } from '/../common/api';

const AnimeScreen = () => {
  const [animeMediaUrl, setAnimeMediaUrl] = useState('');
  const [mediaType, setMediaType] = useState('');
  const navigation = useNavigation();
  const apiUrls = [
    'https://nekos.best/api/v2/baka',
    'https://nekos.best/api/v2/bite',
    'https://nekos.best/api/v2/bored',
    'https://nekos.best/api/v2/cry',
    'https://nekos.best/api/v2/cuddle',
    'https://nekos.best/api/v2/dance',
    'https://nekos.best/api/v2/facepalm',
    'https://nekos.best/api/v2/feed',
    'https://nekos.best/api/v2/handhold',
    'https://nekos.best/api/v2/happy',
    'https://nekos.best/api/v2/highfive',
    'https://nekos.best/api/v2/hug',
    'https://nekos.best/api/v2/kick',
    'https://nekos.best/api/v2/kiss',
    'https://nekos.best/api/v2/laugh',
    'https://nekos.best/api/v2/nod',
    'https://nekos.best/api/v2/nom',
    'https://nekos.best/api/v2/nope',
    'https://nekos.best/api/v2/path',
    'https://nekos.best/api/v2/poke',
    'https://nekos.best/api/v2/pout',
    'https://nekos.best/api/v2/punch',
    'https://nekos.best/api/v2/shoot',
    'https://nekos.best/api/v2/shrug',
    'https://nekos.best/api/v2/slap',
    'https://nekos.best/api/v2/sleep',
    'https://nekos.best/api/v2/smile',
    'https://nekos.best/api/v2/smug',
    'https://nekos.best/api/v2/stare',
    'https://nekos.best/api/v2/think',
    'https://nekos.best/api/v2/thumbsup',
    'https://nekos.best/api/v2/tickle',
    'https://nekos.best/api/v2/wave',
    'https://nekos.best/api/v2/wink',
    'https://nekos.best/api/v2/yeet',
    'https://nekos.best/api/v2/waifu',
  ];

  const loadNewAnime = () => {
    const []
  return (
    <View>
      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.link}>Home</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <TouchableOpacity onPress={() => navigation.navigate('Dogs')}>
          <Text style={styles.link}>Dogs</Text>
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: 'center', marginTop: 20 }}>
        {animeMediaUrl ? (
          <TouchableOpacity onPress={loadNewAnime}>
            {mediaType === 'gif' ? (
              <Image source={{ uri: animeMediaUrl }} style={styles.gif} />
            ) : (
              <Image source={{ uri: animeMediaUrl }} style={styles.image} />
            )}
          </TouchableOpacity>
        ) : (
          <Text>Loading...</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
    fontSize: 18,
    marginHorizontal: 10,
  },
  image: {
    width: 200,
    height: 200,
  },
  gif: {
    width: 400,
    height: 400,
    resizeMode: 'contain',
  },
});

export default AnimeScreen;
