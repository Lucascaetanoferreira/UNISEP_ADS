import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const[values, setValor]= useState(0)
  const[nome, setNome]=useState(0)

   function add(){
    setValor(values+ 1);
   }
   function rmv(){
    setValor(values- 1);
   }
  return (
    <View style={styles.container}>
      <Text>
        {values}
      </Text>

      <Button 

      title='adicionar'
      onPress={()=>{add()}}
      />
      
      <Button 

      title='excluir'
      onPress={()=>{rmv()}}
      />


     <TextInput
        onChangeText={setNome}
        values={nome}
        style={{
          borderWidth:1,
          with: 200,
          height: 35,
          borderBlockColor:'#0000'
        }}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
