import {StyleSheet,View, Text, TouchableOpacity } from 'react-native';

import { TextInput } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';

export default StepTwo= ({fileUri,setFileUri,fileName,setFileName,coverLetter,setCoverLetter})=>{
    
    
    const pickDocument = async () => {
        let result = await DocumentPicker.getDocumentAsync({});
        setFileUri(result.assets[0].uri)
        setFileName(result.assets[0].name)
      };
    return (
        <View style={{paddingHorizontal:20}}>
            <View style={{gap:5,marginVertical:10}}>
                <Text style={{fontSize:18,fontWeight:"500"}}>Additional information</Text>
                <Text style={{color:"grey"}}>We need additional information first</Text>
                <Text style={{color:"red"}}>*Required fileds</Text>
            </View>
            <View style={{gap:5,marginVertical:10}}>
                <Text style={{fontSize:18,fontWeight:"500"}}>Cover Letter<Text style={{color:"red"}}>*</Text></Text>
                <TextInput
                    style={styles.textInput}
                    multiline={true}
                    numberOfLines={15}
                    value={coverLetter}
                    onChangeText={setCoverLetter}
                    placeholder="Sell yourself here.."
                />
                <Text style={{color:"grey",fontWeight:"500"}}>Enter your real name</Text>
            </View>
            <View style={{gap:5,marginVertical:10}}>
                <Text style={{fontSize:18,fontWeight:"500"}}>Resume</Text>
                {fileUri &&
                     <TouchableOpacity onPress={pickDocument} style={{flexDirection:'row',alignItems:"center",gap:7}}>
                        <TouchableOpacity style={{width:40,height:40,alignItems:"center",justifyContent:"center" ,backgroundColor:"#eaedfe",borderRadius:20}}><Text style={{color:"#2246e5",fontSize:24}}>*</Text></TouchableOpacity>
                        <Text style={{flex:1,fontSize:15,fontWeight:"500"}} numberOfLines={1} ellipsizeMode="tail">{fileName}</Text>
                        <TouchableOpacity onPress={()=>{setFileUri(null);setFileName(null);}} style={{width:40,height:40,alignItems:"center",justifyContent:"center" ,borderRadius:20}}><Text style={{color:"grey",fontSize:28}}>x</Text></TouchableOpacity>
                    </TouchableOpacity>
                }
                <TouchableOpacity onPress={pickDocument} style={{flexDirection:'row',gap:7,marginTop:15}}>
                    <TouchableOpacity style={{width:40,height:40,alignItems:"center",justifyContent:"center" ,backgroundColor:"black",borderRadius:20}}><Text style={{color:"white",fontSize:24}}>+</Text></TouchableOpacity>
                    <View>
                        <Text style={{fontSize:18,fontWeight:"500"}}>Add a file</Text>
                        <Text style={{color:"grey"}}>Max file size 12mb .pdf, .doc, .docs</Text>         
                    </View>
                    
                </TouchableOpacity>
                
            </View>
        </View>
    );
    
}

const styles = StyleSheet.create({
    
    textInput: {
        height:200,
        textAlignVertical: 'top',
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
  