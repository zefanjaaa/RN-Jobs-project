// import { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   Image,
//   FlatList,
// } from "react-native";
// import { icons, images, SIZES, COLORS } from "../../../constants";
// import { useRouter } from "expo-router";

// import styles from "./welcome.style";

// const jobTypes = ["Full-time", "Part-time", "Contractor"];

// const Welcome = () => {
//   const router = useRouter();
//   // const [activeJobType, setActiveJobType] = useState(jobTypes[0]);
//   const [activeJobType, setActiveJobType] = useState("fulltime");

//   return (
//     <View>
//       <View style={styles.container}>
//         <Text style={styles.userName}>Hello Welcome!</Text>
//         <Text style={styles.welcomeMessage}>
//           Find your dream job in your city
//         </Text>
//       </View>
//       <View style={styles.searchContainer}>
//         <View style={styles.searchWrapper}>
//           <TextInput
//             style={styles.searchInput}
//             value=""
//             onChange={() => {}}
//             placeholder="What job are you looking for?"
//           />
//         </View>
//         <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
//           <Image
//             source={icons.search}
//             resizeMode="contain"
//             style={styles.searchBtnImage}
//           />
//         </TouchableOpacity>
//       </View>
//       <View style={styles.tabsContainer}>
//         <FlatList
//           data={jobTypes}
//           renderItem={({ item }) => (
//             <TouchableOpacity
//               style={styles.tab(activeJobType, item)}
//               onPress={() => {
//                 setActiveJobType(item);
//                 router.push(`/search/${item}`);
//               }}
//             >
//               <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
//             </TouchableOpacity>
//           )}
//         />
//       </View>
//     </View>
//   );
// };

// export default Welcome;

import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { icons, images, SIZES, COLORS } from "../../../constants";
import { useRouter } from "expo-router";

import styles from "./welcome.style";

const jobTypes = ["Full-time", "Part-time", "Contractor", "Internship"];

const Welcome = () => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState("fulltime");

  return (
    <View style={styles.container}>
      <Text style={styles.userName}>Hello Welcome!</Text>
      <Text style={styles.welcomeMessage}>
        Find your dream job in your city
      </Text>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onChangeText={() => {}}
            placeholder="What job are you looking for?"
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        style={styles.tabsContainer}
        data={jobTypes}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.tab(activeJobType, item)}
            onPress={() => {
              setActiveJobType(item);
              router.push(`/search/${item}`);
            }}
          >
            <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item}
        contentContainerStyle={{ columnGap: SIZES.small }}
      />
    </View>
  );
};

export default Welcome;
