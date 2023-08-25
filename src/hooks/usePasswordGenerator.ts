import React ,{useState} from 'react'

const options = [
    {title : "Include Uppercase Letters" , state : false},
    {title : "Include LowerCase Letters" , state : false},
    {title : "Include Numbers" , state: false},
    {title : "Include Symbols", state : false}
  ];



interface ICheckBox {
    title : string ; 
    state : boolean;
 }

const usePasswordGenerator = () => {
    const [password , setPassword] = useState("");
    const [errorMessage , setErrorMessage] = useState("");

    const generatePassword =  (checkboxData : any , length : number) =>{ // to do

        let charset = "" , generatedPassword = "";
        const selectedOption = checkboxData.filter(
            (checkbox : ICheckBox)=>checkbox.state
        );

        if(selectedOption.length == 0 ){
            setErrorMessage("Select Atleast one  option");
            setPassword("");
            return;
        }


        selectedOption.forEach((option : any)=>{
            switch(option.title){
                case options[0].title: 
                charset+= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                break;
                case options[1].title :
                charset+= "abcdefghijklmnopqrstuvwxyz";
                break;
                case options[2].title :
                charset+="0123456789";
                break;
                case  options[3].title :
                charset+="!@#$%^&*()";
                default : 
                break;
            }
        })

        for(let i=0;i < length;i++){
            const randomIndex = Math.floor(Math.random() * charset.length);
            generatedPassword += charset[randomIndex];
        }
        setPassword(generatedPassword)
        console.log(generatedPassword);
        setErrorMessage("")

    }

    return {password , errorMessage , generatePassword};
 
}

export default usePasswordGenerator