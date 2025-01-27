import AppScreen from '@app-components/app-screen/app-screen';
import Colors from '@app-experience/colors';
import React, { useEffect, useState } from 'react';
import { Platform, Image, View, TextInput, ScrollView, Text, FlatList } from 'react-native';
import { styles } from './search-container.styles';
import { CustomText } from '@app-components/index';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { imageUrl } from '@app-helpers/constants';
import Metrics from '@app-experience/metrics';
import { Community, HashTags, Nomads } from '@app-helpers/interfaces';
import { generateCommunityList, generateHashTagList, generateNomadsList } from '@app-helpers/functions';
import { Avatar } from 'react-native-paper';

function SearchContainer() {
  const [searchText, setSearchText] = useState<string>('')
  const [nomadsList, setNomadsList] = useState<Nomads[]>([]);
  const [hashTagList, setHashTagList] = useState<HashTags[]>([])
  const [communityList, setCommunityList] = useState<Community[]>([])

  useEffect(() => {
    setNomadsList(generateNomadsList(20))
    setCommunityList(generateCommunityList(20))
    setHashTagList(generateHashTagList(20))
  }, [])

  const Section = ({ title, children }) => (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <CustomText style={styles.heading}>{title}</CustomText>
        <CustomText style={styles.seeAll}>See all</CustomText>
      </View>
      <View style={{ paddingVertical: Metrics.size.s2 }}>
        {children}
      </View>
    </View>
  );
  return (
    <AppScreen
      style={{ flex: 1 }}
      preset="scroll"
      statusbar={{
        color: Colors.primary.base,
        barstyle: Platform.OS === 'android' ? 'light-content' : 'dark-content',
        transluent: false,
      }}
    >
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>      
        <View style={styles.container}>
          <View>
            <CustomText style={styles.heading}>
              Discover the World
            </CustomText>
            <View style={styles.searchBar}>
              <TextInput
                placeholder="Search Colleges, Courses & Exams"
                placeholderTextColor={Colors.darkgray.base}
                style={styles.textInputStyle}
                value={searchText}
                onChangeText={(val) =>
                  setSearchText(val)
                }
              />
              <IonIcon name="search-outline" size={20} color={Colors.darkgray.thicker} />
            </View>
          </View>
          <View style={{ borderRadius: Metrics.borderRadius.N, height: Metrics.size.s20 * 2 }}>
            <Image source={{ uri: imageUrl }} style={styles.image} resizeMode='cover' />
            <View style={styles.cardOverlay}>
              <Text style={styles.cardText}>#Top search of the day</Text>
            </View>
          </View>
          <Section title="Trending HashTags">
            <FlatList
                horizontal
                data={hashTagList}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                  <View style={styles.avatarContainer}>
                    <Image source={{ uri: item.image }} height={100} width={100} style={{ borderRadius: Metrics.borderRadius.L }}/>
                    <CustomText style={styles.avatarText}>{item.type}</CustomText>
                    <CustomText style={styles.avatarText}>{item.count}</CustomText>
                  </View>
                )}
                showsHorizontalScrollIndicator={false}
              />
          </Section>
          <Section title="Top Community">
            <FlatList
                horizontal
                data={communityList}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                  <View style={styles.avatarContainer}>
                    <Image source={{ uri: item.image }} height={100} width={100} style={{ borderRadius: Metrics.borderRadius.L }}/>
                    <CustomText style={styles.avatarText}>{item.firstHeading}</CustomText>
                    <CustomText style={styles.avatarText}>{item.secondHeading}</CustomText>
                    <CustomText style={styles.avatarText}>{`${item.postCount}post/day`}</CustomText>
                  </View>
                )}
                showsHorizontalScrollIndicator={false}
              />
          </Section>
          <Section title="Top Nomads">
            <FlatList
              horizontal
              data={nomadsList}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <View style={styles.avatarContainer}>
                  <Avatar.Image source={{ uri: item.image }} size={100} />
                  <CustomText style={styles.avatarHeaderText}>{item.name}</CustomText>
                  <CustomText style={styles.avatarText}>{`${item.followerCount}k followers`}</CustomText>
                </View>
              )}
              showsHorizontalScrollIndicator={false}
            />
          </Section>
        </View>
      </ScrollView>
    </AppScreen>
  );
}

export default SearchContainer;
