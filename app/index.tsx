import * as React from 'react';
import { ScrollView, TextInput, View } from 'react-native';
import Animated, { FadeInUp, FadeOutDown, LayoutAnimationConfig } from 'react-native-reanimated';
import { Info } from '~/lib/icons/Info';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import { Button } from '~/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';
import { Progress } from '~/components/ui/progress';
import { Text } from '~/components/ui/text';
import { Tooltip, TooltipContent, TooltipTrigger } from '~/components/ui/tooltip';
import { useState } from 'react';
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage'

const GITHUB_AVATAR_URI =
  'https://i.pinimg.com/originals/ef/a2/8d/efa28d18a04e7fa40ed49eeb0ab660db.jpg';

export default function Screen() {
  const [progress, setProgress] = React.useState(78);
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  const handleSubmit = ()=>{
    if(!email || !password){
      return alert("email and password are both required")

    }
    setTimeout(async () =>{
 if(email.trim() === "admin@gmail.com" && password.trim() === "Admin@123"){
      alert("successfuly loggedin")
      setEmail('')
      setPassword('')
      await AsyncStorage.setItem("userToken",'mock-token')
           router.push(`./user/${1}`)
    }else{
      alert("wrong credentials")
    }
    },1500)
   
  }


  function updateProgressValue() {
    setProgress(Math.floor(Math.random() * 100));
  }
  return (

      <View className='flex-1 justify-center items-center gap-5 p-6 bg-secondary/30'>
  <View className='w-full'>
        <Text className='text-2xl text-center font-bold'>Welcome June Mumbe 👋</Text>
        <Text className='text-center'>Login to view your full profile 😎</Text>
       
          <View className='pt-4'>
          <Text>Email</Text>
          <TextInput className='border-2 w-full border-gray-500 rounded-lg text-white' placeholder='Enter your email'  placeholderTextColor="#ccc" value={email} autoCapitalize='none' keyboardType='email-address'  onChangeText={setEmail}/>

           <Text className='pt-4'>Password</Text>
          <TextInput className='border-2 w-full border-gray-500 rounded-lg text-white' placeholder='Enter your password'  placeholderTextColor="#ccc" value={password} secureTextEntry  onChangeText={setPassword}/>
          </View>
          <View className='pt-5'>
    <Button onPress={handleSubmit}>
      <Text className='text-black text-center'>Login</Text>
          </Button>
          </View>
      
         
     
      </View>
    
      </View>
    

  );
}
