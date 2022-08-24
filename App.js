import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

function Botao({text, acao, styleBtn, styleText}) {

  const styleButton = StyleSheet.create({

    btn: {
      width:230,
      height:50,
      borderColor: '#dd7b22',
      borderWidth:2,
      borderRadius: 25,
      marginBottom: 15
    },
    btnArea: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    btnTexto: {
      fontSize: 17,
      fontWeight: "bold",
      color:'#dd7b22'
    }
    


  })

  const {btn, btnArea, btnTexto} = styleButton

  return(
      <TouchableOpacity onPress={acao} style={[btn, styleBtn]} hide={true}>
      <View style={btnArea}>
        <Text style={[btnTexto, styleText]}>{text}</Text></View>
    </TouchableOpacity>
  )

}


function App() {

  const [image, setImg] = useState(require('./src/biscoito.png'));
  const [fraseBiscoito, setFrase] = useState('Seja bem vindo ao nosso app!');
  const [isHide, setHide] = useState(true)

  const {container, img, textoFrase, textoTitulo} = styles;

  const frases = [
    'Do limão uma limonada.',
    'Muita calma nessa alma.',
    'Termina hoje?',
    'Cadê o ganho? Qual é o ganho?',
    'Seja uma espada. Corte e fure dos dois lados.',
    'Já colocou no backlog?',
    'Minha mãe não deixou!',
    'Toda semana tem um ganho.',
    'Controle orçamento na unha.',
    'Já fiz ontem!'
  ]  
  
  function quebraBiscoito() {
    let numero = Math.floor(Math.random() * frases.length)
    setFrase(`A frase do dia é: " ${frases[numero]} "`)
    setHide(false)
    setImg(require('./src/biscoitoAberto.png'))
  }

  function reset(){
    setFrase('Seja bem vindo ao nosso app!')
    setHide(true)
    setImg(require('./src/biscoito.png'))
  }

  console.log(image)

  return (
    <View style={container}>      

      <Text style={textoTitulo}>Biscoito da Sorte GQP</Text>
      <Image source={ image } style={img} />
      <Text style={textoFrase}>{fraseBiscoito}</Text>

      { isHide ? 
      <Botao text={"Quebrar Biscoito"} acao={() => quebraBiscoito()} /> : 
      <Botao text={"Reiniciar Biscoito"} acao={() => reset() } styleBtn={{borderColor: "#CCC"}} styleText={{color:"#CCC"}} /> }
      
      

    </View>
  )
}

export default App


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    width:230,
    height:230
  },
  textoTitulo: {
    fontSize: 30,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center',
    fontWeight: "bold"
  },
  textoFrase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  }
})
