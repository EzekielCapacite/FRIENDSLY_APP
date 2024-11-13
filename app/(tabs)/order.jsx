import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const MenuItem = ({ item }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.price}>PESOS {item.price}.00</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>
            <Text style={styles.quantityButton}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{quantity}</Text>
          <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
            <Text style={styles.quantityButton}>+</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Bookmark = () => {
  const menuItems = [
    {
      id: '1',
      title: 'Chicken Burger',
      description: 'Burger with chicken patty, cheese slice, and vegetables',
      price: 599,
      image: 'https://www.recipetineats.com/uploads/2023/09/Crispy-fried-chicken-burgers_5.jpg', // Replace with your image URL
    },
    {
      id: '2',
      title: 'Cheesy Chicken Lasagna',
      description: 'Lasagna with chicken sauce, cheese, white sauce, and vegetables',
      price: 799,
      image: 'https://www.allrecipes.com/thmb/aR092XCzdl_7RBgEKEp-7Wy71kI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/8758-White-Cheese-Chicken-Lasagna-DDMFS-3x4-0177-2147ea1ce51c42228efdcb907819b5c2.jpg',
    },
    {
      id: '3',
      title: 'Beef Shawarma',
      description: 'Shawarma with roast beef, mayo, tomato sauce, and vegetables',
      price: 449,
      image: 'https://amiraspantry.com/wp-content/uploads/2020/11/beef-shawarma-recipe-IG.jpg',
    },
    {
      id: '4',
      title: 'Chicken Nuggets',
      description: 'Chicken nuggets with mayo, tomato sauce, and special sauce',
      price: 499,
      image: 'https://www.cookwithnabeela.com/wp-content/uploads/2024/02/ChickenNuggets.webp',
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={menuItems}
        renderItem={({ item }) => <MenuItem item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#ADD8E6',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginBottom: 20,
    flexDirection: 'row',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  infoContainer: {
    marginLeft: 10,
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginVertical: 5,
  },
  price: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  quantityButton: {
    fontSize: 20,
    color: '#333',
    paddingHorizontal: 10,
  },
  quantityText: {
    fontSize: 16,
    marginHorizontal: 10,
  },
  addButton: {
    backgroundColor: '#007BFF',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignSelf: 'flex-start',
    marginTop: 10,
  },
  addButtonText: {
    color: '#ffffff',
    fontSize: 14,
  },
});

export default Bookmark;
