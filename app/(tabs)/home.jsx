import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons'; // For icons
import { useNavigation } from '@react-navigation/native';  // Import useNavigation

const home = () => {
  return (
    <ScrollView style={styles.container}>
      
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="What are you looking for?"
          style={styles.searchInput}
        />
        <TouchableOpacity style={styles.searchButton}>
          <FontAwesome5 name="search" size={20} color="white" />
        </TouchableOpacity>
      </View>

      {/* Categories */}
      <View style={styles.categoriesContainer}>
        <TouchableOpacity style={styles.categoryButton}>
          <MaterialIcons name="restaurant" size={24} color="#1E90FF" />
          <Text style={styles.categoryText}>Restaurants</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <MaterialIcons name="local-cafe" size={24} color="#1E90FF" />
          <Text style={styles.categoryText}>Coffee Shops</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <MaterialIcons name="fastfood" size={24} color="#1E90FF" />
          <Text style={styles.categoryText}>Fast Food</Text>
        </TouchableOpacity>
      </View>

      {/* Popular Food Section */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Popular Food</Text>
        <TouchableOpacity style={styles.viewAllButton}>
          <Text style={styles.viewAllText}>View All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.foodScroll}>
        <Image source={{ uri: 'https://healthnewshub.org/wp-content/uploads/2024/03/Fast-Food-Restaurants.jpg' }} style={styles.foodImage} />
        <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4kV_1xBvf3PhGXxL9pDBYrzj-efhbzLFK8w&s' }} style={styles.foodImage} />
        <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBVcb3SrcEwh1QynO6fs2elOLALRowpjAFVQ&s' }} style={styles.foodImage} />
        <Image source={{ uri: 'https://www.recipetineats.com/uploads/2023/09/Crispy-fried-chicken-burgers_5.jpg' }} style={styles.foodImage} />
        <Image source={{ uri: 'https://www.allrecipes.com/thmb/aR092XCzdl_7RBgEKEp-7Wy71kI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/8758-White-Cheese-Chicken-Lasagna-DDMFS-3x4-0177-2147ea1ce51c42228efdcb907819b5c2.jpg' }} style={styles.foodImage} />
      </ScrollView>

      {/* Fast Food Offers Section */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Fast Food Offers</Text>
        <TouchableOpacity style={styles.viewAllButton}>
          <Text style={styles.viewAllText}>View All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.foodScroll}>
        <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Hh1Ka8zIU0KaPaIdDTLYqFXT1JNmXsXK3g&s' }} style={styles.foodImage} />
        <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ6Oa0vDztvKy-52f5ZLy4ub8zWGnwRwcK1w&s' }} style={styles.foodImage} />
        <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStxYUb82L3RX5dgbZ_sPnFJGziaA3O3nqMQw&s' }} style={styles.foodImage} />
        <Image source={{ uri: 'https://www.cookwithnabeela.com/wp-content/uploads/2024/02/ChickenNuggets.webp' }} style={styles.foodImage} />
        <Image source={{ uri: 'https://amiraspantry.com/wp-content/uploads/2020/11/beef-shawarma-recipe-IG.jpg' }} style={styles.foodImage} />
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ADD8E6',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#FFF',
    borderColor: '#D3D3D3',
    borderWidth: 1,
  },
  searchButton: {
    backgroundColor: '#1E90FF',
    padding: 10,
    marginLeft: 10,
    borderRadius: 10,
  },
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  categoryButton: {
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    borderColor: '#D3D3D3',
    borderWidth: 1,
    width: '30%',
  },
  categoryText: {
    marginTop: 5,
    color: '#1E90FF',
    fontWeight: '600',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
  },
  viewAllButton: {
    backgroundColor: '#000',
    padding: 5,
    borderRadius: 5,
  },
  viewAllText: {
    color: '#FFF',
    fontWeight: '600',
  },
  foodScroll: {
    marginBottom: 20,
  },
  foodImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginRight: 10,
  },
});

export default home;
