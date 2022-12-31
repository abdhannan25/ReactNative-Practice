import { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, Button } from "react-native";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBAIvfrKYYgGqqJC0G6b3sHwVkJjQyLb8o",
    authDomain: "mad-practice-d795a.firebaseapp.com",
    projectId: "mad-practice-d795a",
    storageBucket: "mad-practice-d795a.appspot.com",
    messagingSenderId: "1027490141833",
    appId: "1:1027490141833:web:c51857c3a2d9b4e450d858"
  };

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();


export default function Firebase(props) {
    
    const createUser = () => {
        auth.createUserWithEmailAndPassword('akhzarn@yahoo.com','123456')
        .then( data =>{
          // QUERY Firestore Ko Data Send Kar dain gai
          console.log('firebase return is = ',data)
        }).catch(error=>{
          console.log('Catch Error',error)
        })
      }

      const loginUser = () => {
        auth.signInWithEmailAndPassword('akhzarn@yahoo.com','123456')
        .then( data =>{
          // QUERY Firestore Ko Data Send Kar dain gai
          console.log('firebase return is = ',data)
        }).catch(error=>{
          console.log('Catch Error',error)
        })
      }

      const guestUser = () => {
        auth.signInAnonymously()
        .then( data =>{
          // QUERY Firestore Ko Data Send Kar dain gai
          console.log('firebase return is = ',data)
        }).catch(error=>{
          console.log('Catch Error',error)
        })
      }
      
      const logoutUser = () => {
        auth.onAuthStateChanged(user=>{
          if(user){
            console.log('Logged in user is =', user)
            auth.signOut()
          }else{
            console.log('No One is =', user)
          }
        })
      }

    return (
        <View style={styles.container}>
            <Button
                title="Create USer"
                onPress={createUser}
                />

            <Button
                title="Firebase Sign In"
                onPress={loginUser}
                />

            <Button
                    title="Guest User"
                    onPress={guestUser}
                    />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FBFCFC",
    },
   
});