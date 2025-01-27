import AppScreen from '@app-components/app-screen/app-screen';
import Colors from '@app-experience/colors';
import React, { useEffect, useState } from 'react';
import { Platform, Image, View, TextInput, ScrollView, Text, FlatList, ImageBackground } from 'react-native';
import { styles } from './search-container.styles';
import { CustomText } from '@app-components/index';
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
  const [filteredNomads, setFilteredNomads] = useState<Nomads[]>([]);
  const [filteredHashTags, setFilteredHashTags] = useState<HashTags[]>([]);
  const [filteredCommunities, setFilteredCommunities] = useState<Community[]>([]);

  useEffect(() => {
    const nomads = generateNomadsList(20);
    const communities = generateCommunityList(20);
    const hashtags = generateHashTagList(20);

    setNomadsList(nomads);
    setCommunityList(communities);
    setHashTagList(hashtags);

    setFilteredNomads(nomads);
    setFilteredHashTags(hashtags);
    setFilteredCommunities(communities);
  }, [])

  const filterData = (text: string) => {
    setSearchText(text);

    if (!text) {
      // Reset to original data if search is cleared
      setFilteredNomads(nomadsList);
      setFilteredHashTags(hashTagList);
      setFilteredCommunities(communityList);
      return;
    }

    const lowerCaseText = text.toLowerCase();

    // Filter Nomads
    const filteredNomads = nomadsList.filter((nomad) =>
      nomad.name.toLowerCase().includes(lowerCaseText)
    );

    // Filter HashTags
    const filteredHashTags = hashTagList.filter((hashtag) =>
      hashtag.type.toLowerCase().includes(lowerCaseText)
    );

    // Filter Communities
    const filteredCommunities = communityList.filter((community) =>
      community.firstHeading.toLowerCase().includes(lowerCaseText) ||
      community.secondHeading.toLowerCase().includes(lowerCaseText)
    );

    setFilteredNomads(filteredNomads);
    setFilteredHashTags(filteredHashTags);
    setFilteredCommunities(filteredCommunities);
  };

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
                placeholder="Search"
                placeholderTextColor={Colors.darkgray.base}
                style={styles.textInputStyle}
                value={searchText}
                onChangeText={filterData}
              />
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
                data={filteredHashTags}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                  <View style={styles.hashTagContainer}>
                    <Image source={{ uri: item.image }} height={140} width={140} style={{ borderRadius: Metrics.borderRadius.L }}/>
                    <View style={styles.flexDirection}>
                      <CustomText style={[styles.avatarText, { color: Colors.white }]}>{item.type}</CustomText>
                      <CustomText style={[styles.avatarText, { color: Colors.white }]}>{item.count}m</CustomText>
                    </View>
                  </View>
                )}
                showsHorizontalScrollIndicator={false}
              />
          </Section>
          <Section title="Top Community">
            <FlatList
                horizontal
                data={filteredCommunities}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                  <View style={styles.avatarContainer}>
                    <ImageBackground
                      source={{ uri: item.image }}
                      style={styles.imageBackground}
                      imageStyle={styles.imageStyle} // To style the image (e.g., borderRadius)
                    >
                      {/* Overlay Text */}
                      <CustomText style={styles.topRight}>{`${item.postCount} post/day`}</CustomText>
                      <CustomText style={styles.bottomLeft}>{item.firstHeading}</CustomText>
                      <CustomText style={styles.bottomLeftSecond}>{item.secondHeading}</CustomText>
                    </ImageBackground>
                  </View>
                )}
                showsHorizontalScrollIndicator={false}
              />
          </Section>
          <Section title="Top Nomads">
            <FlatList
              horizontal
              data={filteredNomads}
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
