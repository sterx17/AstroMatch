import { AppContainer } from "./AppStyles";
import { ChoiceScreen } from "./components/ChoiceScreen/ChoiceScreen";
import { WelcomeScreen } from "./components/WelcomeScreen/WelcomeScreen";
import { MatchesList } from "./components/MatchesList/MatchesList";
import { useState, useEffect } from "react";
import axios from 'axios'


function App() {
  // useStates relacionados aos Botões de Navegação
  const [nav, setNav] = useState('Welcome')

  // funções relacionadas a navegação
  const capturaClickComecar = () => {
    setNav('Choice')
  }
  const capturaClickUsuario = () => {
    setNav('Matches')
  }
  const capturaClickVoltar = () => {
    setNav('Choice')
  }

  // chamada API (pega perfis)
  const [perfil, setPerfil] = useState([])
  const [perfisEscolhidos, setPerfisEscolhidos] = useState([])

  const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno'
  const headers = { headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin':'*' }}

  const pegaPerfil = () => {
    axios.get(url + '/person')
    .then((response) =>{ setPerfil(response.data) }).catch((error) => { console.log(error.response + ' deu ruim.')})
  }

  useEffect(() => {pegaPerfil()}, [])

  // controles do Match

  const choosePerson = (choice) => {
    axios.post(url + '/choose-person', headers, choice).then((response) => { setPerfisEscolhidos(response.data)}).catch((error) => {console.log(error.response + 'deu ruim no salvar o perfil.')})
  }

  const escolhaPositiva = (id) => {
    const body = {
      "id": {id},
	    "choice": true
    }
    choosePerson(body)
    pegaPerfil()
  }
  const escolhaNegativa = (id) => {
    const body = {
      "id": {id},
	    "choice": false
    }
    choosePerson(body)
    pegaPerfil()
  }

  console.log(perfisEscolhidos)

  // Renderização dos Matches dados

  
  
  switch (nav) {
    case 'Choice':
      return <AppContainer><ChoiceScreen botaoEscolhaPositiva={() => { escolhaPositiva(perfil.profile.id)}} imagem={perfil.profile.photo} nome={perfil.profile.name} idade={perfil.profile.age} bio={perfil.profile.bio} onClick={capturaClickUsuario} /></AppContainer>;
    case 'Matches':
      return <AppContainer><MatchesList onClick={capturaClickVoltar} /></AppContainer>;
    default:
      return <AppContainer><WelcomeScreen onClick={capturaClickComecar}/></AppContainer>;
  }
}

export default App;
