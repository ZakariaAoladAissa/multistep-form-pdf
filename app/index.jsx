import { useState } from 'react';
import { Image, StyleSheet, Platform, View, Text, TouchableOpacity } from 'react-native';

import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { TextInput } from 'react-native';
import { CountryPicker } from 'react-native-country-codes-picker';
import StepOne from "../components/formComponents/StepOne"
import StepTwo from '../components/formComponents/StepTwo';
import StepThree from '../components/formComponents/StepThree';
export default function HomeScreen() {
    const [fullName, setFullName] = useState('');
    const [phoneNember, setPhoneNember] = useState('+212');
    const [email, setEmail] = useState('');
    const [website, setWebsite] = useState('');
    const [portfolio, setPortfolio] = useState('');
    const [show, setShow] = useState(false);
    const [countryCode, setCountryCode] = useState('+212');
    const [countryCodeName, setCountryCodeName] = useState('MA');
    const [fileUri, setFileUri] = useState(null);
    const [fileName, setFileName] = useState(null);
    const [coverLetter, setCoverLetter] = useState('');
    const [activeStep, setActiveStep] = useState(0); // Track the current step
    return (
    <View style={{flex: 1,marginTop:30, backgroundColor:"white"}}>
    <ProgressSteps activeStep={activeStep}>
        <ProgressStep label="First Step" nextBtnDisabled={!fullName || !phoneNember || !email || !website || !portfolio}
         nextBtnStyle={{backgroundColor:!fullName || !phoneNember || !email || !website || !portfolio ?"grey" : "blue",borderRadius: 5, width:250, paddingVertical:10}} nextBtnTextStyle={{textAlign:"center", color: "white"}} nextBtnText="Continue">
        <StepOne
            fullName={fullName}
            setFullName={setFullName}
            phoneNember={phoneNember}
            setPhoneNember={setPhoneNember}
            email={email}
            setEmail={setEmail}
            website={website}
            setWebsite={setWebsite}
            portfolio={portfolio}
            setPortfolio={setPortfolio}
            countryCode={countryCode}
            countryCodeName={countryCodeName}
            setCountryCode={setCountryCode}
            setCountryCodeName={setCountryCodeName}
            show={show}
            setShow={setShow}
        />
        </ProgressStep>
        <ProgressStep onNext={()=>setActiveStep(2)} nextBtnDisabled={!coverLetter}
         previousBtnStyle={{display:"none"}} label="Second Step" nextBtnStyle={{backgroundColor: !coverLetter ? "grey":"blue",borderRadius: 5, width:250, paddingVertical:10}} nextBtnTextStyle={{textAlign:"center", color: "white"}} nextBtnText="Continue">
            <StepTwo
                fileUri={fileUri}
                setFileUri={setFileUri}
                fileName={fileName}
                setFileName={setFileName}
                coverLetter={coverLetter}
                setCoverLetter={setCoverLetter}
            />
        </ProgressStep>
        <ProgressStep label="Third Step"  previousBtnStyle={{display:"none"}} nextBtnStyle={{backgroundColor:"blue",borderRadius: 5, width:250, paddingVertical:10}} nextBtnTextStyle={{textAlign:"center", color: "white"}} nextBtnText="Submit">
            <StepThree
                fullName={fullName}
                phoneNember={phoneNember}
                email={email}
                website={website}
                portfolio={portfolio}
                coverLetter={coverLetter}
                activeStep={activeStep}
                setActiveStep={setActiveStep}
                fileUri={fileUri}
                fileName={fileName}
            />
        </ProgressStep>
    </ProgressSteps>
</View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
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
