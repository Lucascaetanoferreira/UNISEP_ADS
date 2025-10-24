
import { StyleSheet, Text, View, View, Image, TextInput, TouchableOpacity, View} from 'react-native';
import { TextInput } from 'react-native/types_generated/index';
import logo from "./assent/logo.png"

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
         <Image
           source={logo}
           style={styles.logo}
         />
         <Text style={styles.texto}>Seja bem vindo</Text>

         <TextInput

         placeholder='Usuario'
         keyboardType='numeric'
         placeholderTextColor="#9aa0a6"
         style={styles.input}


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
         <Text  style={styles.link}>esqueci minha senha</Text>
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
    alignItems:'center',
    padding:20
    
  },
  card:{
    width: '100',
    maxWidth: 420,
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 24,
    shadowColor: '#000',
    shadowOpacity:0.06,
    shadowRadius: 10,
    elevation:6
  },
   logo:{
    width:210,
    height:80,
    alignSelf:'center'
  },
   texto:{
    fontSize: 15,
    color: '#6b7280',
    fontWeight: '600',
    marginTop: 12,
    marginBottom: 10,
    textAlign: 'center'
    

    },
   input:{
    height:46,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 12,
    marginBottom: 10,
    fontSize: 15
   },
   button:{
    height:46,
    backgroundColor:'#2c3b48',
    bordertRadius: 10,
    justifyContent:'center',
    alignItems:'center',
    marginTop: 6

   },
   buttonText:{
    color:'#fff',
    fontWeight:'600',

   },
   rowBetwenn:{
    flexDirection:'row',
    justifyContent:'center',


   },
   link:{
    color: '#c003c',
    fontSize:14,


   },
   dividirText:{
    marginHorizontal:10,
     color:'#9aa0a6'
   }

});
