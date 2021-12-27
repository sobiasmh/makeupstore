import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { SearchBar, PricingCard, colors } from 'react-native-elements';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function App() {
  const MakeupStore = ({ navigation }) => {
    return (
      <Tab.Navigator
        initialRouteName="Categories"
        activeColor="white"
        shifting={true}
        labelStyle={{ fontSize: 12 }}
        style={{ backgroundColor: 'tomato' }}>
        <Tab.Screen
          name="Categories"
          component={Categories}
          options={{
            tabBarLabel: 'Categories',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="clipboard"
                color={color}
                size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Products"
          component={Products}
          options={{
            tabBarLabel: 'Products',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="cart" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };

  const WatchLearn = ({ navigation }) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Watch and Learn</Text>
      </View>
    );
  };
  const Categories = () => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
        }}>
        <ScrollView>
          <View
            style={{
              backgroundColor: '#8267BE',
              width: 299,
              height: 100,
              borderRadius: 12,
              marginBottom: 20,
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <View>
              <Text style={styles.text}>Face</Text>
            </View>
            <View>
              <Image
                style={{
                  resizeMode: 'cover',
                  height: 100,
                  width: 100,
                  marginLeft: 100,
                  marginTop: 9,
                }}
                source={{
                  uri: 'https://cdn-icons.flaticon.com/png/512/1807/premium/1807363.png?token=exp=1640599877~hmac=d6de1f3bba1eeba66c361ef52a3db38f',
                }}
              />
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#A3E4DB',
              width: 299,
              height: 100,
              borderRadius: 12,
              marginBottom: 20,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <View>
              <Text style={styles.text}>Lips</Text>
            </View>
            <Image
              style={{
                resizeMode: 'cover',
                height: 100,
                width: 100,
                marginLeft: 100,
                marginTop: 9,
              }}
              source={{
                uri: 'https://cdn-icons.flaticon.com/png/512/2975/premium/2975771.png?token=exp=1640599877~hmac=40795a28dd48c9399d5e311fe7b87401',
              }}
            />
          </View>
          <View
            style={{
              backgroundColor: '#F999B7',
              width: 299,
              height: 100,
              borderRadius: 12,
              marginBottom: 20,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <View>
              <Text style={styles.text}>Eyes</Text>
            </View>
            <Image
              style={{
                resizeMode: 'cover',
                height: 100,
                width: 100,
                marginLeft: 100,
                marginTop: 9,
              }}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/3163/3163195.png',
              }}
            />
          </View>
          <View
            style={{
              backgroundColor: '#2C272E',
              width: 299,
              height: 100,
              borderRadius: 12,
              marginBottom: 20,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <View>
              <Text style={styles.text}>Skin</Text>
            </View>
            <Image
              style={{
                resizeMode: 'cover',
                height: 100,
                width: 100,
                marginLeft: 100,
                marginTop: 9,
              }}
              source={{
                uri: 'https://cdn-icons.flaticon.com/png/512/1807/premium/1807383.png?token=exp=1640599877~hmac=f2d7112ac6e9370ded55ece033a7b255',
              }}
            />
          </View>
        </ScrollView>
      </View>
    );
  };

  const Products = ({ navigation }) => {
    const [search, setSearch] = useState('');

    const updateSearch = (search) => {
      setSearch(search);
    };

    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fffafd',
        }}>
        <Text></Text>
        <View style={{ flex: 1 }}>
          <View style={styles.view}>
            <SearchBar
              placeholder="Search Here..."
              onChangeText={updateSearch}
              platform="android"
              value={search}
            />
          </View>
          <ScrollView>
            <View>
              <View style={{ padding: 8, margin: 8 }}>
                <Text style={styles.text2}>All Makeup Products</Text>
              </View>

              <View style={styles.row}>
                <View style={styles.carts}>
                  <Image
                    style={styles.productImg}
                    source={{
                      uri: 'https://www.nyxcosmetics.com/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw4ba747ae/ProductImages/2018/Face/Total_Control_Drop_Foundation/800897147617_totalcontroldropfoudnation_sienna_alt1.jpg',
                    }}
                  />
                  <View>
                    <Text style={styles.prdtext1}>NYX Foundation</Text>
                  </View>
                  <View style={styles.row}>
                    <Text style={styles.prdtext2}>Rs.900</Text>

                    <TouchableOpacity
                      style={{
                        backgroundColor: '#EC255A',
                        width: 30,
                        height: 30,
                        borderRadius: 50,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 7,
                      }}
                      onPress={() => navigation.navigate('Item')}>
                      <Text
                        style={{
                          color: 'white',
                          fontSize: 18,
                          fontWeight: 'bold',
                        }}>
                        +
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.carts}></View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  };
  const ShowProduct = ({ navigation }) => {
    const[getNumber,setNumber] = useState(1)
    
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fffafd',
        }}>
        <TouchableOpacity
              style={{
                backgroundColor: '#EC255A',
                width: 90,
                height: 30,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 7,
                marginRight:210
              }}
              onPress={() => navigation.navigate('Products')}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 13,
                  fontWeight: 'bold',
                }}>
                BACK
              </Text>
            </TouchableOpacity>
        <ScrollView>
          <View>
            <Image
              style={{ height: 290, width: 290, margin: 13 }}
              source={{
                uri: 'https://www.nyxcosmetics.com/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw4ba747ae/ProductImages/2018/Face/Total_Control_Drop_Foundation/800897147617_totalcontroldropfoudnation_sienna_alt1.jpg',
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginBottom: 10,
            }}>
            <View>
              <Text style={styles.prdtext1}>NYX Foundation</Text>
            </View>

            <Text style={styles.prdtext2}>Rs.900</Text>
          </View>
          <View>
            <Text style={styles.prdtext1}>Product Details</Text>
            <View style={{ padding: 5, margin: 8, alignContent: 'center' }}>
              <Text
                style={{ backgroundColor: '#FEE3EC', padding: 8, margin: 5 }}>
                Shockingly lightweight, waterproof and pigmented AF, Can’t Stop
                Won’t Stop Full Coverage Foundation is our full coverage classic
                foundation that hustles as hard as you do. This comfy,
                long-wearing waterproof liquid comes in a wide range of
                flattering tones that don’t transfer. Every creamy liquid shade
                glides on smooth, delivering matte coverage that stays true up
                to 24 hours. This over achiever also works to control shine and
                mattify your complexion all-day long
              </Text>
            </View>
          </View>
          <View
            style={{
              justifyContent: 'space-evenly',
              flexDirection: 'row',
              margin: 3,
              marginBottom: 10,
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: '#EC255A',
                width: 30,
                height: 30,
                borderRadius: 50,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 7,
              }}
              onPress={() => setNumber(getNumber-1)}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 18,
                  fontWeight: 'bold',
                }}>
                -
              </Text>
            </TouchableOpacity>
            <Text style={styles.prdtext2}>{getNumber}</Text>
            <TouchableOpacity
              style={{
                backgroundColor: '#EC255A',
                width: 30,
                height: 30,
                borderRadius: 50,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 7,
              }}
              onPress={() => setNumber(getNumber+1)}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 18,
                  fontWeight: 'bold',
                }}>
                +
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                backgroundColor: '#EC255A',
                width: 120,
                height: 30,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 7,
              }}
              onPress={() => {}}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 13,
                  fontWeight: 'bold',
                }}>
                ADD TO CART
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  };

  const Drawer = createDrawerNavigator();
  const Tab = createBottomTabNavigator();

  const DrawerNav = () => {
    return (
      <Drawer.Navigator
        screenOptions={{
          drawerStyle: {
            backgroundColor: '#FEE3EC',
            width: 240,
          },
        }}
        initialRouteName="Makeup Store">
        <Drawer.Screen
          options={{
            headerStyle: {
              backgroundColor: '#781D42',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          name="Makeup Store"
          component={MakeupStore}
        />
        <Drawer.Screen
          options={{
            headerStyle: {
              backgroundColor: '#041C32',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          name="Watch & Learn"
          component={WatchLearn}
        />
        <Drawer.Screen
          options={{
            drawerLabel: () => null,
            headerStyle: {
              backgroundColor: '#781D42',
            },

            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          name="Item"
          component={ShowProduct}
        />
      </Drawer.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <DrawerNav />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 27,
    margin: 15,
  },
  text2: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#2C272E',
  },
  carts: {
    backgroundColor: '#FEE3EC',
    width: 147,
    height: 190,
    margin: 7,
    padding: 5,
  },
  view: {
    margin: 10,
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 10,
    borderRadius: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  productImg: {
    resizeMode: 'cover',
    height: 100,
    width: 100,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 8,
  },
  prdtext1: {
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 9,
    marginLeft: 9,
  },
  prdtext2: {
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 9,
    marginLeft: 9,
  },
});
