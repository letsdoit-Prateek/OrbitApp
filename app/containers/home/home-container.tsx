import React, { useEffect, useState } from 'react';
import { 
  ActivityIndicator, 
  FlatList, 
  Platform, 
  Text, 
  View, 
  Image, 
  Dimensions, 
  TouchableOpacity 
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; // Correct import for icons
import Colors from '../../experience/colors';
import { AppScreen } from '@app-components/app-screen/app-screen';
import { styles } from './home-container.styles';
// const MaterialCommunityIcons = require('react-native-vector-icons/MaterialCommunityIcons').default as React.ElementType;
const { height, width } = Dimensions.get("window");
function HomeContainer() {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchImages = async () => {
      const randomImages: string[] = Array.from({ length: 20 }).map(
        (_, index) => `https://picsum.photos/${width}/${height - 400}?random=1`
      );
      setImages(randomImages);
      setLoading(false);
    };

    fetchImages();
  }, []);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  return (
    <AppScreen
      style={{ flex: 1 }}
      preset="fixed"
      statusbar={{
        color: Colors.primary.base,
        barstyle: Platform.OS === 'android' ? 'light-content' : 'dark-content',
        transluent: false,
      }}
    >
      <FlatList
        data={images}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image source={{ uri: item }} style={styles.image} />

            <View style={styles.iconsContainer}>
              <TouchableOpacity style={styles.iconButton}>
                <MaterialCommunityIcons name="heart-outline" size={30} color="white" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <MaterialCommunityIcons name="send" size={30} color="white" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <MaterialCommunityIcons name="share-outline" size={30} color="white" />
              </TouchableOpacity>
            </View>
            <View style={styles.captionContainer}>
              <View style={styles.profileContainer}>
                <Text style={styles.username}>@username</Text>
              </View>
              <Text style={styles.caption}>This is a caption for the image.</Text>
            </View>
          </View>
        )}
        pagingEnabled
        showsVerticalScrollIndicator={false}
      />
    </AppScreen>
  );
}

export default HomeContainer;
