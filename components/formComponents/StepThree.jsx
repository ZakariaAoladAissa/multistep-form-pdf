import {StyleSheet,View, Text, TouchableOpacity } from 'react-native';


export default StepThree= ({fullName,phoneNember,email,website,portfolio,coverLetter,setActiveStep,fileUri,fileName})=>{
    
    
    return (
        <View >
            <View style={{gap:5,marginVertical:10,paddingHorizontal:20}}>
                <Text style={{fontSize:18,fontWeight:"500"}}>Review your application</Text>
                <Text style={{color:"grey"}}>Review your information</Text>
            </View>
            <View style={{paddingHorizontal:20,paddingVertical:8,backgroundColor:"#f4f5f9",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                <Text style={{fontSize:16,fontWeight:"500"}}>Personal information </Text>
                <TouchableOpacity onPress={()=>{setActiveStep(0)}} style={{borderRadius:50,backgroundColor:"black",width:70,padding:8}}><Text style={{textAlign:"center",color:"white"}}>Edit</Text></TouchableOpacity>
            </View>
            <View style={{paddingHorizontal:20,paddingVertical:8}}>
                <Text style={{color:"grey",fontSize:16,fontWeight:"500"}}>Full name</Text>
                <Text style={{fontSize:16,fontWeight:"500"}}>{fullName} </Text>
            </View>
            <View style={{paddingHorizontal:20,paddingVertical:8}}>
                <Text style={{color:"grey",fontSize:16,fontWeight:"500"}}>Phone number</Text>
                <Text style={{fontSize:16,fontWeight:"500"}}>{phoneNember} </Text>
            </View>
            <View style={{paddingHorizontal:20,paddingVertical:8}}>
                <Text style={{color:"grey",fontSize:16,fontWeight:"500"}}>Email</Text>
                <Text style={{fontSize:16,fontWeight:"500"}}>{email} </Text>
            </View>
            <View style={{paddingHorizontal:20,paddingVertical:8}}>
                <Text style={{color:"grey",fontSize:16,fontWeight:"500"}}>Personal website</Text>
                <Text style={{fontSize:16,fontWeight:"500"}}>{website} </Text>
            </View>
            <View style={{paddingHorizontal:20,paddingVertical:8}}>
                <Text style={{color:"grey",fontSize:16,fontWeight:"500"}}>Portfolio URL</Text>
                <Text style={{fontSize:16,fontWeight:"500"}}>{portfolio} </Text>
            </View>

            <View style={{paddingHorizontal:20,paddingVertical:8,backgroundColor:"#f4f5f9",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                <Text style={{fontSize:16,fontWeight:"500"}}>Additional information </Text>
                <TouchableOpacity onPress={()=>{setActiveStep(1)}} style={{borderRadius:50,backgroundColor:"black",width:70,padding:8}}><Text style={{textAlign:"center",color:"white"}}>Edit</Text></TouchableOpacity>
            </View>
            <View style={{paddingHorizontal:20,paddingVertical:8}}>
                <Text style={{color:"grey",fontSize:16,fontWeight:"500"}}>Cover letter</Text>
                <Text style={{fontSize:16,fontWeight:"500"}}>{coverLetter} </Text>
            </View>
            <View style={{paddingHorizontal:20,paddingVertical:8}}>

            <Text style={{color:"grey",fontSize:16,fontWeight:"500"}}>Resume</Text>
                {fileUri &&<View  style={{flexDirection:'row',alignItems:"center",gap:7}}>
                    
                            <TouchableOpacity style={{width:40,height:40,alignItems:"center",justifyContent:"center" ,backgroundColor:"#eaedfe",borderRadius:20}}><Text style={{color:"#2246e5",fontSize:24}}>*</Text></TouchableOpacity>
                            <Text style={{flex:1,fontSize:15,fontWeight:"500"}} numberOfLines={1} ellipsizeMode="tail">{fileName}</Text>
                
                    </View>}
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
  