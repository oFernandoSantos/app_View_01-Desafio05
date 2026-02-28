import React from 'react';
import {View, Text} from 'react-native';

function App(){
  return(
  
 <View style={{ backgroundColor: 'blue', height: 300, width: "300px", height: "100%"}}>
  
  <View style={{ backgroundColor: 'orange', height: 300, width: "100%", height: "20%"}}>
  <Text>COMPONENTE VIEW</Text>
  <Text>Fernando Santos e Caio Bueno</Text>
  <Text>dd/mm/aaaa</Text>
  </View>
  
  <View style={{ backgroundColor: 'yellow', height: 150, width: "100px", height: "70%"}}>
  <Text>COMPONENTE VIEW</Text>
  <Text>Fernando Santos e Caio Bueno</Text>
  <Text>dd/mm/aaaa</Text>
  </View>

  <View style={{ backgroundColor: 'red', height: 75, width: "200px", height: "10%"}}> 
  <Text>COMPONENTE VIEW</Text>
  <Text>Fernando Santos e Caio Bueno</Text>
  <Text>dd/mm/aaaa</Text>
  </View>
  
  </View>
  );
}
export default App;
