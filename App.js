import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  Pressable,
  Modal,
} from 'react-native';
import { SearchBar, colors, Input } from 'react-native-elements';
import uuid from 'react-native-uuid';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function App() {
  const MakeupStore = ({ navigation }) => {
    return (
      <Tab.Navigator
        initialRouteName="Categories"
        activeColor="white"
        shifting={true}
        labelStyle={{ fontSize: 12 }}>
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
      <Tab.Navigator
        initialRouteName="Categories"
        activeColor="white"
        shifting={true}
        labelStyle={{ fontSize: 12 }}>
        <Tab.Screen
          name="Videos"
          component={Videos}
          options={{
            tabBarLabel: 'Videos',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="video" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Community"
          component={Community}
          options={{
            tabBarLabel: 'Community',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="message-processing-outline"
                color={color}
                size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Reviews"
          component={Reviews}
          options={{
            tabBarLabel: 'Reviews',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="heart-circle"
                color={color}
                size={26}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };
  const Categories = ({ navigation }) => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
        }}>
        <ScrollView>
          <TouchableOpacity
            style={{
              backgroundColor: '#8267BE',
              width: 299,
              height: 100,
              borderRadius: 12,
              marginBottom: 20,
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}
            onPress={() => navigation.navigate('Products', { n: 'Face' })}>
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
                  uri: 'https://cdn-icons.flaticon.com/png/512/1807/premium/1807363.png?token=exp=1641057458~hmac=9cbb5c325245f895f25cd12615e6e367',
                }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#A3E4DB',
              width: 299,
              height: 100,
              borderRadius: 12,
              marginBottom: 20,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}
            onPress={() => navigation.navigate('Products', { n: 'Lips' })}>
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
                uri: 'https://cdn-icons.flaticon.com/png/512/2975/premium/2975771.png?token=exp=1641057348~hmac=b2e2308f31ef253b4e3c1a57c6c2bea9',
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#F999B7',
              width: 299,
              height: 100,
              borderRadius: 12,
              marginBottom: 20,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}
            onPress={() => navigation.navigate('Products', { n: 'Eyes' })}>
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
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#2C272E',
              width: 299,
              height: 100,
              borderRadius: 12,
              marginBottom: 20,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}
            onPress={() => navigation.navigate('Products', { n: 'Skin' })}>
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
                uri: 'https://cdn-icons.flaticon.com/png/512/1807/premium/1807383.png?token=exp=1641057467~hmac=29df26c50af52828dced4e39bee35d08',
              }}
            />
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  };

  const Products = ({ navigation, route }) => {
    const [search, setSearch] = useState('');
    const [array, setarray] = useState([]);
    const [filtered, setFilterted] = useState('');
    const [f, setf] = useState('');

    const { n } = route.params!=undefined? route.params:{};
    const [getcondition, setcondition] = React.useState(true);
    
    
    const getproduct = () => {
      fetch(
        `https://barebeauty-bc3ab-default-rtdb.firebaseio.com/Products.json`,
        {
          method: 'GET',
        }
      )
        .then((response) => response.json())
        .then((responsejson) => {
          let samplearray = [];
          for (key in responsejson) {
            if (array.length == 0) {
              samplearray.push(responsejson[key]);
            } else {
              samplearray.push(responsejson[key]);
            }
          }
          setarray(samplearray);

          setcondition(false);
        })
        .catch((err) => {
          console.error(err);
        });
    };

    React.useEffect(() => {
      getproduct();
    }, []);

    const updateSearch = (search) => {
      const d = array.filter((item) => {
        return item.Name.match(search);
      });

      setSearch(search);
      setFilterted(d);
    };
    if (getcondition) {
      return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" />

          <Text>Waiting for response</Text>
        </View>
      );
    }
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'flex-start',
          width: '100%',
          padding: 4,
          margin: 4,
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

          <View>
            <View style={{ padding: 8, margin: 8 }}>
              <Text style={styles.text2}>All Makeup Products</Text>
            </View>

            <FlatList
              style={{ marginBottom: 80, width: '100%' }}
              data={
                filtered.length > 0
                  ? filtered
                  : array &&
                   array
                  ? array.filter((item) => item.Category.match(n))
                  : null
              }
              numColumns={2}
              renderItem={({ item }) => {
                return (
                  <View style={styles.row}>
                    <View style={styles.carts}>
                      <Image
                        style={styles.productImg}
                        source={{
                          uri: item.uri,
                        }}
                      />
                      <View>
                        <Text style={styles.prdtext1}>{item.Name}</Text>
                      </View>
                      <View style={styles.row}>
                        <Text style={styles.prdtext2}>Rs {item.Price}</Text>

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
                          onPress={() => {
                            navigation.navigate('Item', {
                              product: item,
                            });
                          }}>
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
                  </View>
                );
              }}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </View>
      </View>
    );
  };
  const ShowProduct = ({ navigation, route }) => {
    const [getNumber, setNumber] = useState(1);
    const { product } = route.params;
    const [getCart, setCart] = useState([
      { Name: null, Price: null, Quantity: null, key: Math.random() },
    ]);

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
            marginRight: 210,
          }}
          onPress={() => {
            navigation.navigate('Products');
          }}>
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
                uri: product.uri,
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
              <Text style={styles.prdtext1}>{product.Name}</Text>
            </View>

            <Text style={styles.prdtext2}>Rs.{product.Price}</Text>
          </View>
          <View>
            <Text style={styles.prdtext1}>Product Details</Text>
            <View style={{ padding: 5, margin: 8, alignContent: 'center' }}>
              <Text
                style={{ backgroundColor: '#FEE3EC', padding: 8, margin: 5 }}>
                {product.Description}
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
              onPress={() => setNumber(getNumber - 1)}>
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
              onPress={() => setNumber(getNumber + 1)}>
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
                margin: 3,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 7,
              }}
              onPress={() => {
                var obj = {};
                obj['Name'] = product.Name;
                obj['Price'] = product.Price;
                obj['Quantity'] = getNumber;
                obj['key'] = Math.random();
                setCart([...getCart, obj]);
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 13,
                  fontWeight: 'bold',
                }}>
                ADD PRODUCT
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
              onPress={() =>
                navigation.navigate('Order', {
                  prd: getCart,
                })
              }>
              <Text
                style={{
                  color: 'white',
                  fontSize: 13,
                  fontWeight: 'bold',
                }}>
                CHECK CART
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  };
  const Videos = () => {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fffafd',
        }}>
        <Text>My video project!</Text>
      </View>
    );
  };
  const Community = () => {
    const [search, setSearch] = useState('');
    const [getQues, setQues] = useState('');
    const [getPost, setPost] = useState([]);
    const [filtered, setFilterted] = useState('');

    const updateSearch = (search) => {
      const d = getPost.filter((item) => {
        return item.toLowerCase().match(search);
      });

      setSearch(search);
      setFilterted(d);
    };
    const submit = () => {
      setPost([...getPost, getQues]);
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
              placeholder="Search Questions..."
              onChangeText={updateSearch}
              platform="android"
              style={{ padding: 5 }}
              value={search}
            />
          </View>
          <View style={{ padding: 8, margin: 8 }}>
            <Text style={styles.text2}>Ask Questions</Text>
          </View>
          <View>
            <Input
              placeholder="Type your question here"
              leftIcon={{ type: 'font-awesome', name: 'comment' }}
              onChangeText={setQues}
            />
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: '#D77FA1',
              width: 100,
              height: 30,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 7,
              marginLeft: 220,
            }}
            onPress={() => {
              submit();
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 13,
                fontWeight: 'bold',
              }}>
              POST
            </Text>
          </TouchableOpacity>
          <View style={styles.quesBox}>
            <FlatList
              data={filtered.length > 0 ? filtered : getPost}
              keyExtractor={({ id }, index) => id}
              renderItem={({ item }) => (
                <Text
                  style={{
                    backgroundColor: '#BAABDA',
                    padding: 8,
                    margin: 5,
                    fontSize: 17,
                    borderWidth: 1,
                    borderColor: 'white',
                  }}>
                  {item}
                </Text>
              )}
            />
          </View>
        </View>
      </View>
    );
  };
  const Reviews = () => {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fffafd',
        }}></View>
    );
  };

  const Order = ({ navigation, route }) => {
    const { prd } = route.params;
    const [getName, setName] = useState('');
    const [getAddress, setAddress] = useState('');
    const [getmodalvisible, setModalVisible] = React.useState(false);

    const sentData = () => {
      let ID = uuid.v4().toString();

      for (var i in prd) {
        var reqOptions = {
          method: 'PUT',

          body: JSON.stringify({
            ID: ID,
            PName: prd[i].Name,
            PQuantity: prd[i].Quantity,
            PPrice: prd[i].Price,
            UName: getName,
            UAddress: getAddress,
          }),
        };
      }
      fetch(
        `https://barebeauty-bc3ab-default-rtdb.firebaseio.com/Orders/${ID}.json`,
        reqOptions
      )
        .then((res) => console.log(res))
        .then((result) => console.log('Add Response:', result))
        .catch((error) => console.log('error', error));
    };
    const deleteItem = (key) => {
      navigation.setParams({
        prd: prd.filter((i) => i.key != key),
      });
    };
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fffafd',
        }}>
        <Modal animationType="fade" visible={getmodalvisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={{ textAlign: 'center' }}>
                Thanks for Placing Order
              </Text>
              <View>
                <Pressable
                  style={{
                    backgroundColor: '#EC255A',
                    width: 120,
                    height: 30,
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 7,
                  }}
                  onPress={() => {
                    setModalVisible(false);
                    navigation.navigate('Products');
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 13,
                      fontWeight: 'bold',
                    }}>
                    Go Back home
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
        <View style={{ flex: 1, width: '95%' }}>
          <FlatList
            style={{ paddingTop: 20, marginBottom: 2, width: '100%' }}
            data={prd}
            renderItem={({ item }) => (
              <TouchableOpacity
                key={item.key}
                style={{
                  backgroundColor: '#F0D290',
                  margin: 5,
                  padding: 5,
                  borderRadius: 10,
                  width: 300,
                  height: 90,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={{ fontSize: 17, fontWeight: 'bold' }}>
                  {item.Name} {'\n'} {item.Price} {'\n'} {item.Quantity}
                </Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: 'white',
                    width: 30,
                    height: 30,
                    borderRadius: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  onPress={() => {
                    deleteItem(item.key);
                  }}>
                  <Text style={{ color: 'red', fontSize: 10 }}>X</Text>
                </TouchableOpacity>
              </TouchableOpacity>
            )}
          />

          <View>
            <Text style={styles.txt}>Name</Text>
            <Input
              placeholder="Enter Name"
              onChangeText={setName}
              leftIcon={<Icon name="user" size={24} color="grey" />}
            />
          </View>

          <View>
            <Text style={styles.txt}>Address</Text>
            <Input
              placeholder="Enter Address"
              onChangeText={setAddress}
              leftIcon={<Icon name="home" size={24} color="grey" />}
            />
          </View>

          <TouchableOpacity
            style={{
              backgroundColor: '#EC255A',
              width: 120,
              height: 30,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 7,
              marginBottom: 15,
            }}
            onPress={() => {
              sentData();
              setModalVisible(true);
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 15,
                fontWeight: 'bold',
              }}>
              ORDER
            </Text>
          </TouchableOpacity>
        </View>
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
              backgroundColor: '#BAABDA',
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
          name="Order"
          component={Order}
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
    margin: 0,
    backgroundColor: '#fff',
    padding: 0,
    marginVertical: 0,
    borderRadius: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    flexWrap: 'wrap',
    flexBasis: '50%',
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
  quesBox: {
    backgroundColor: '#CCD1E4',
    width: 300,
    height: 195,
    margin: 5,
    padding: 5,
    marginLeft: 14,
    alignContent: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FEECE9',
  },
  modalView: {
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
