import Metrics from "@app-experience/metrics";
import { Dimensions } from "react-native"

const { height, width } = Dimensions.get("window");
export const imageUrl = `https://picsum.photos/${height}/${width - Metrics.size.s5}`