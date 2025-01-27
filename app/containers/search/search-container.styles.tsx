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
        fontWeight: '700'
    },
    avatarText: {
        marginTop: 5,
        fontSize: Metrics.size.s2 + 5,
        fontWeight: '500'
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
    heading: {
        color: Colors.lightGreen.lighter_200,
        fontSize: Metrics.size.s5,
        fontWeight: '800'
    } as TextStyle,
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
    },
  });
  