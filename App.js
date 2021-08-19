import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     
      <Image
          style={{ width: 200, height: 150, marginBottom: 15 }}
          source={require("./assets/Gato.png")}
        />
        <Text style={styles.Gr}>Grupo teorico: G03T</Text>
      <Text style={styles.Aln}>Alumna: Erika Alondra Marroquin Echegoyen</Text>
      <Text style={styles.Lej}>Lenguaje de programacion favorito: C#</Text>
      <Text style={styles.Hob}>Hobbies: Ver series, jugar con mi gato, escuchar musica</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe4b5',
    alignItems: 'center',
    justifyContent: 'center',
  },

Gr:{
  color: 'black',
  fontWeight: 'lighter',
  fontSize: 40
},

Aln:{
  color: 'blue',
  fontWeight: 'bold',
  fontSize: 30
},

Lej:{
  color: 'red',
  fontWeight: 'lighter',
  fontSize: 40
},

Hob:{
  color: 'purple',
  fontWeight: 'bold',
  fontSize: 30
},
});
