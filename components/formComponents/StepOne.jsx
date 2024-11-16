import {StyleSheet,View, Text, TouchableOpacity } from 'react-native';

import { TextInput } from 'react-native';
import { CountryPicker } from 'react-native-country-codes-picker';

export default StepOne= ({fullName,setFullName,phoneNember,setPhoneNember,email,setEmail,website,setWebsite,portfolio,setPortfolio,countryCode,setCountryCode,countryCodeName,setCountryCodeName,show,setShow})=>{
    return (
        <View style={{paddingHorizontal:20}}>
            <View style={{gap:5,marginVertical:10}}>
                <Text style={{fontSize:18,fontWeight:"500"}}>Personal Information</Text>
                <Text style={{color:"grey"}}>Let us get to know you a bit better by sharing your basic info</Text>
                <Text style={{color:"red"}}>*Required fileds</Text>
            </View>
            <View style={{gap:5,marginVertical:10}}>
                <Text style={{fontSize:18,fontWeight:"500"}}>Full name<Text style={{color:"red"}}>*</Text></Text>
                <TextInput
                    style={styles.textInput}
                    value={fullName}
                    onChangeText={setFullName}
                    placeholder="Enter full name"
                />
                <Text style={{color:"grey",fontWeight:"500"}}>Enter your real name</Text>

            </View>
            <View style={{gap:5,marginVertical:10}}>
                <Text style={{fontSize:18,fontWeight:"500"}}>Phone number<Text style={{color:"red"}}>*</Text></Text>
                <View style={{flexDirection:'row',gap:"2%",alignItems:"center"}}>
                    <TouchableOpacity style={{borderWidth:1,padding:10,marginTop:5,fontSize:16,borderColor:'#ccc',borderRadius: 5,width:"16%"}} onPress={()=>setShow(true)}>
                        <Text>{countryCodeName}</Text>
                    </TouchableOpacity>
                    
                    <TextInput
                    style={styles.textInputPhone}
                    value={phoneNember}
                    onChangeText={setPhoneNember}
                />
                </View>
                <CountryPicker
                        show={show}
                        // when picker button press you will get the country object with dial code
                        pickerButtonOnPress={(item) => {
                        setCountryCode(item.dial_code);
                        setPhoneNember(item.dial_code)
                        setCountryCodeName(item.code)
                        setShow(false);
                        }}
                    />
            </View>
            <View style={{gap:5,marginVertical:10}}>
                <Text style={{fontSize:18,fontWeight:"500"}}>Email Address<Text style={{color:"red"}}>*</Text></Text>
                <TextInput
                    style={styles.textInput}
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Enter your email address"
                />
            </View>
            <View style={{gap:5,marginVertical:10}}>
                <Text style={{fontSize:18,fontWeight:"500"}}>personal website</Text>
                <TextInput
                    style={styles.textInput}
                    value={website}
                    onChangeText={setWebsite}
                    placeholder="Enter your website"
                />
                <Text style={{color:"grey",fontWeight:"500"}}>Your home page, blog, or company site</Text>

            </View>
            <View style={{gap:5,marginVertical:10}}>
                <Text style={{fontSize:18,fontWeight:"500"}}>Portfolio URL</Text>
                <TextInput
                    style={styles.textInput}
                    value={portfolio}
                    onChangeText={setPortfolio}
                    placeholder="Enter your email address"
                />
                <Text style={{color:"grey",fontWeight:"500"}}>Only shared with potential employers</Text>

            </View>
        </View>
    );
    
}

const styles = StyleSheet.create({
    
    textInput: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      padding: 10,
      fontSize: 16,
      marginTop: 5,
      backgroundColor:"#f4f5f9",
    },
    textInputPhone:{
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      padding: 10,
      fontSize: 16,
      marginTop: 5,
      backgroundColor:"#f4f5f9",
      width:"82%"
    }
  });
  