import Colors from '@app-experience/colors';
import Metrics from '@app-experience/metrics';
import { Dimensions, ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';
export const styles = StyleSheet.create({
    avatarContainer: {
        alignItems: 'center',
        marginRight: 15,
    },
    avatarHeaderText: {
        marginTop: 5,
        fontSize: Metrics.size.s2 + 5,
        fontWeight: '700',
        color: Colors.lightGreen.lighter_200
    },
    avatarText: {
        marginTop: 5,
        fontSize: Metrics.size.s2 + 5,
        fontWeight: '500',
        color: Colors.lightGreen.lighter_200
    },
    cardOverlay: {
        position: 'absolute',
        bottom: 10,
        left: 10,
    },
    cardText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    container: {
        backgroundColor: Colors.grey.lighter,
        flex: 1,
        paddingHorizontal: Metrics.size.s8,
        paddingTop: Metrics.size.s10,
        gap: Metrics.size.s8
    } as ViewStyle,
    flexDirection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: Metrics.size.s2,
        width: '100%',
        position: 'absolute',
        bottom: 20,
    } as ViewStyle,
    hashTagContainer: {
        marginRight: Metrics.size.s4
    } as ViewStyle,
    heading: {
        color: Colors.lightGreen.lighter_200,
        fontSize: Metrics.size.s5,
        fontWeight: '800'
    } as TextStyle,
    imageBackground: {
        width: 140,
        height: 140,
        justifyContent: 'space-between', // Ensures child elements (text) are properly spaced
    },
    imageStyle: {
        borderRadius: Metrics.borderRadius.L,
    },
    image: {
        height: '100%',
        width: '100%',
        borderRadius: Metrics.borderRadius.L
    } as ImageStyle,
    searchBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Colors.white,
        borderRadius: Metrics.borderRadius.N,
        borderWidth: 1,
        borderColor: Colors.border.base_300,
        paddingHorizontal: Metrics.size.s3,
        height: Metrics.size.s12,
        gap: Metrics.size.s3,
        marginTop: Metrics.size.s2
    } as ViewStyle,
    scrollContent: {
        paddingBottom: 10, // Ensures the content doesn't clip at the bottom
    },
    section: {
    // marginBottom: Metrics.size.s1
    } as ViewStyle,
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    } as ViewStyle,
    seeAll: {
        color: Colors.lightGreen.lighter_200,
        fontSize: Metrics.size.s3,
        fontWeight: '700'
    } as TextStyle,
    textInputStyle: {
        fontFamily: Metrics.fontFamily.Medium,
        fontSize: Metrics.size.s3,
        color: Colors.black,
        width: '75%',
    } as TextStyle,
    topSearchCard: {
        marginBottom: 20,
        borderRadius: 10,
    } as ViewStyle,
    topRight: {
        position: 'absolute',
        top: 5,
        right: 5,
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
    } as TextStyle,
    bottomLeft: {
        position: 'absolute',
        bottom: Metrics.size.s10,
        left: Metrics.size.s2,
        color: 'white',
        fontSize: Metrics.size.s4,
        fontWeight: '600'
    } as TextStyle,
    bottomLeftSecond: {
        position: 'absolute',
        bottom: Metrics.size.s2,
        left: Metrics.size.s2,
        color: 'white',
        fontSize: Metrics.size.s6,
        fontWeight: '800',
        paddingTop: Metrics.size.s3
    } as TextStyle,
  });
  