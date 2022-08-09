import { AppContainer } from "./AppStyles";
import { ChoiceScreen } from "./components/ChoiceScreen/ChoiceScreen";
import { WelcomeScreen } from "./components/WelcomeScreen/WelcomeScreen";
import { MatchesList } from "./components/MatchesList/MatchesList";
import { useState, useEffect } from "react";
import axios from 'axios'


function App() {
  // pega nome de usuario
  const pegaNomeUsuario = () => {
    localStorage.setItem('aluno', inputName)
  }

  // useStates relacionados aos Botões de Navegação
  const [nav, setNav] = useState('Welcome')
  const [inputName, setInputName] = useState('')

  // funções relacionadas a navegação
  const capturaClickComecar = () => {
    setNav('Choice')
    pegaNomeUsuario()
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

  const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/stephany'

  const pegaPerfil = () => {
    axios.get(url + '/person')
    .then((response) =>{ setPerfil(response.data) }).catch((error) => { console.log(error.response + ' deu ruim.')})
  }

  useEffect(() => {pegaPerfil()}, [])

  // controles do Match

  const choosePerson = (choice) => {
    axios.post(url + '/choose-person', choice).then((response) => { setPerfisEscolhidos(...perfisEscolhidos, response.data)}).catch((error) => {console.log(error.response + 'deu ruim no salvar o perfil.')})
  }
  const escolhaPositiva = (id) => {
    const body = {
      "id": `${id}`,
	    "choice": true
    }
    choosePerson(body)
    pegaPerfil()
  }
  const escolhaNegativa = (id) => {
    const body = {
      "id": `${id}`,
	    "choice": false
    }
    choosePerson(body)
    pegaPerfil()
  }

  // Clear

  const limpaMatches = () => {
    axios.put(url + '/clear').then((response) => {pegaPerfil([])}).catch((error) => {console.log(error.response)})
  }
  
  switch (nav) {
    case 'Choice':
      return <AppContainer><ChoiceScreen clear={() => { limpaMatches()  }} botaoEscolhaNegativa={() => { escolhaNegativa(perfil.profile.id) }} botaoEscolhaPositiva={() => { escolhaPositiva(perfil.profile.id)}} imagem={perfil.profile.photo} nome={perfil.profile.name} idade={perfil.profile.age} bio={perfil.profile.bio} onClick={capturaClickUsuario} /></AppContainer>;
    case 'Matches':
      return <AppContainer><MatchesList user={inputName} onClick={capturaClickVoltar} /></AppContainer>;
    default:
      return <AppContainer><WelcomeScreen value={inputName} onChange={(e) => {e.preventDefault(); setInputName(e.target.value)}} onClick={capturaClickComecar}/></AppContainer>;
  }
}

export default App;
