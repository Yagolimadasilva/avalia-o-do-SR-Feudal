import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get('window');

export default function App() {
  const [numero, setNumero] = useState(0);
  const [scaleValue] = useState(new Animated.Value(1));

  const sortearNumero = () => {
    // Animação de escala para dar feedback visual
    Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: 1.2,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();

    // Gera número aleatório entre 1 e 100
    const novoNumero = Math.floor(Math.random() * 100) + 1;
    setNumero(novoNumero);
  };

  return (
    <View style={styles.container}>
      {/* Título */}
      <Text style={styles.titulo}>🎲 SORTEADOR 🎲</Text>
     
      {/* Número atual */}
      <Animated.View
        style={[
          styles.numeroContainer,
          {
            transform: [{ scale: scaleValue }],
          },
        ]}
      >
        <Text style={styles.numero}>{numero}</Text>
      </Animated.View>
     
      {/* Botão */}
      <TouchableOpacity style={styles.botao} onPress={sortearNumero}>
        <Text style={styles.botaoTexto}>SORTEAR</Text>
      </TouchableOpacity>
     
      {/* Instrução */}
      <Text style={styles.instrucao}>
        Toque no botão para gerar um número de 1 a 100
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#00d4ff',
    marginBottom: 50,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 212, 255, 0.5)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 10,
  },
  numeroContainer: {
    backgroundColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    width: width * 0.7,
    height: width * 0.7,
    borderRadius: width * 0.35,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 60,
    shadowColor: '#00d4ff',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 15,
  },
  numero: {
    fontSize: 80,
    fontWeight: '900',
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
  botao: {
    backgroundColor: '#00d4ff',
    paddingVertical: 20,
    paddingHorizontal: 50,
    borderRadius: 30,
    shadowColor: '#00d4ff',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.6,
    shadowRadius: 20,
    elevation: 12,
  },
  botaoTexto: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  instrucao: {
    fontSize: 16,
    color: '#888',
    marginTop: 30,
    textAlign: 'center',
  },
});