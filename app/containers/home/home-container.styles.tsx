import Metrics from '@app-experience/metrics';
import { Dimensions, ImageStyle, StyleSheet, ViewStyle } from 'react-native';
const { height, width } = Dimensions.get("window");
export const styles = StyleSheet.create({
    loaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      },
      imageContainer: {
        height: height - 150,
        width,
        justifyContent: 'flex-end', // Ensures that icons and caption are at the bottom
        position: 'relative', // Necessary for absolute positioning
      },
      image: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
      } as ImageStyle,
      iconsContainer: {
        position: 'absolute',
        bottom: Metrics.size.s10 * 2,
        right: Metrics.size.s1,
        flexDirection: 'column',
        justifyContent: 'space-between',
      } as ViewStyle,
      iconButton: {
        marginHorizontal: Metrics.size.s2,
      },
      captionContainer: {
        position: 'absolute',
        bottom: 10,
        left: 20,
        right: 20,
        paddingVertical: 10,
        borderRadius: Metrics.borderRadius.S,
      },
      profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      profileImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
      },
      username: {
        fontSize: 16,
        fontWeight: '700',
        color: 'white',
      },
      caption: {
        color: 'white',
        fontSize: 14,
        marginTop: 5,
      },
  });
  