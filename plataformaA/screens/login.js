
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import logo from "./assets/logo.png";
import { use, useState } from 'react';

export default function login() {
  const [usuario, setUsuario] = useState();
  const [password, setPassword]= useState();
  const [errorMessage, setErrorMessage] = useState();  
  

  const validate = ()=>{
    if(usuario.length<11){
      setErrorMessage('usuario invalido:');
    }else if (String(password).length <6){
      setErrorMessage('senha invalida');
    }else{
      alert('sucesso','login realizado com sucesso!')
    }
  }
  const handlerUser= (values) =>{
    setUsuario(values);
    setErrorMessage('')
    
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={logo}
          style={styles.logo}
        />
        <Text style={styles.texto}>Seja bem vindo</Text>

         <text style={styles.erro}>informe o Usuario</text>

        {String(errorMessage).length > 0 ?<text style={styles.usuario}>{errorMessage}</text>:null}
        <TextInput

          placeholder='Usuario'
          keyboardType='numeric'
          placeholderTextColor="#9aa0a6"
          style={styles.input}
          onChange={setUsuario}
 
        />

        <TextInput
          placeholder='senha'
          secureTextEntry
          placeholderTextColor="#9aa0a6"
          style={styles.input}
        />

        <TouchableOpacity style={styles.button}>
          <text style={styles.buttonText}>Entrar</text>
        </TouchableOpacity>

        <View>

          <TouchableOpacity style={styles.rowBetwenn}>
            <Text style={styles.link}>esqueci o Usuario</Text>
          </TouchableOpacity>
          <Text style={styles.dividirText}>ou</Text>
          <TouchableOpacity>
            <Text style={styles.link}>esqueci minha senha</Text>
          </TouchableOpacity>

        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6f8',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20

  },
  card: {
    width: '100',
    maxWidth: 420,
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 24,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 6
  },
  logo: {
    width: 210,
    height: 80,
    alignSelf: 'center'
  },
  texto: {
    fontSize: 15,
    color: '#6b7280',
    fontWeight: '600',
    marginTop: 12,
    marginBottom: 10,
    textAlign: 'center'


  },
  input: {
    height: 46,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 12,
    marginBottom: 10,
    fontSize: 15
  },
  button: {
    height: 46,
    backgroundColor: '#2c3b48',
    bordertRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 6

  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',

  },
  rowBetwenn: {
    flexDirection: 'row',
    justifyContent: 'center',


  },
  link: {
    color: '#c8003c',
    fontSize: 14,


  },
  dividirText: {
    marginHorizontal: 10,
    color: '#9aa0a6'
  },
  erro:{
    color: '#c8003c',
    textAlign: 'center',
    marginBottom:8 
   }


});
