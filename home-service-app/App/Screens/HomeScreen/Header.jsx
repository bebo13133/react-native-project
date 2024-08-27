import { View, Text,Image, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import Colors from '../../Utils/Colors'
import FontAwesome from '@expo/vector-icons/FontAwesome';
export default function Header() {
  const {user,isLoading} = useUser()

  return user&&(
    <View style={styles.container}>
      {/* Profile Section */}
      <View style={styles.profileMainContainer}>
      <View style={styles.profileContainer}>
        <Image style={styles.userImage} source= {{uri: user?.imageUrl}}/>
        <View>
          <Text style={{color:Colors.WHITE, fontSize:17, fontFamily:'outfit'}}>Welcome,</Text>
          <Text style={{color:Colors.WHITE, fontSize:17, fontFamily:'outfit-medium'}}>{user?.fullName}</Text>
        </View>
      </View>
      <FontAwesome name="bookmark-o" size={34} color="white" />
      </View>
      {/* Search bar */}
      <View style={styles.searchBarContainer}>
        <TextInput placeholder='Search'
        style={styles.searchInput}
        ></TextInput>
        <FontAwesome name="search"
        style={styles.searchbtn}
         size={24} color={Colors.PRIMARY}  />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  userImage:{
    width: 50,
    height: 50,
    borderRadius: 99
  },
  container:{
    padding: 20,
    paddingTop:40,
    borderBottomLeftRadius:25,
    borderBottomRightRadius:25,
    backgroundColor:Colors.PRIMARY
  
  },
  profileMainContainer:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    
  },
  profileContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  searchBarContainer:{
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
   gap: 20,
   marginTop: 10,
   },
  searchInput:{
    padding:7,
    paddingHorizontal:16,
    backgroundColor: Colors.WHITE,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
    fontSize: 16,
    width: '80%',
    fontFamily: 'outfit'

  },
  searchbtn:{
   backgroundColor: Colors.WHITE,
   borderRadius: 15,
   padding: 10,
  }
})