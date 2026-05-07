import { useState } from 'react';
import { Modal, View, Text, Pressable } from 'react-native';

export default function TelaComModal() {
  // Estado para controlar se o Modal está visível (true) ou oculto (false)
  const [modalVisivel, setModalVisivel] = useState(false);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Pressable onPress={() => setModalVisivel(true)}>
        <Text>Abrir Aviso</Text>
      </Pressable>

      {/* Componente Modal sendo controlado pelo estado */}
      <Modal visible={modalVisivel} animationType="slide" transparent={true}>
        <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center' }}>
          <View style={{ backgroundColor: 'white', padding: 20, margin: 20, borderRadius: 10 }}>
            <Text>Este é o conteúdo do Modal!</Text>
            
            <Pressable onPress={() => setModalVisivel(false)}>
              <Text>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}