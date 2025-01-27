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
// import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons'; // Correct import for icons
import Colors from '../../experience/colors';
import { AppScreen } from '@app-components/app-screen/app-screen';
import { styles } from './home-container.styles';
import { getHomePageData } from '@app-helpers/functions';
const MaterialCommunityIcons = require('react-native-vector-icons/Ionicons').default as React.ElementType;
function HomeContainer() {
  const [images, setImages] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchImages = async () => {
      setImages(getHomePageData(20));
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
            <Image source={{ uri: item.image }} style={styles.image} />

            <View style={styles.iconsContainer}>
              <TouchableOpacity style={styles.iconButton}>
                <MaterialCommunityIcons name="person-add-outline" size={30} color="white" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <MaterialCommunityIcons name="chatbubbles-outline" size={30} color="white" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <MaterialCommunityIcons name="heart-outline" size={30} color="white" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <MaterialCommunityIcons name="paper-plane-outline" size={30} color="white" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <MaterialCommunityIcons name="arrow-redo-outline" size={30} color="white" />
              </TouchableOpacity>
            </View>
            <View style={styles.captionContainer}>
              <View style={styles.profileContainer}>
                <Text style={styles.username}>@username</Text>
              </View>
              <Text style={styles.caption}>{item.caption}</Text>
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
