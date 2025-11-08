import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import pibble from '@/assets/descarga.jpg';
import { useRouter } from "expo-router";

const HomeScreen = () => {

  const router = useRouter()

  return (
    <View style={styles.container} >
      <Image source={pibble}></Image>
      <Text style={styles.titulo}> Bienvenido a nuestra aplicacion  </Text>
      <Text style={styles.subtitulo}> Captura tus notas en cualquier lugar y en cualquier momento  </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={()=>router.push('./notes')}
      >
        <Text style={{color:'#fff', fontWeight:'bold'}}>Iniciar</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding:20,
    backgroundColor: '#f8f9fa'
  },
  image: {
    width:100,
    height:100,
    marginBottom:20,
    borderRadius:10
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    textAlign: 'center'
  },
  subtitulo: {
    fontSize: 16,
    color:'#666',
    textAlign: 'center',
    marginBottom: 20
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    alignItems: 'center'
  }
})

export default HomeScreen