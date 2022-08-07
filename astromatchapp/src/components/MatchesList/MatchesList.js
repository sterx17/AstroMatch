import { React, useState, useEffect } from 'react'
import { UiControllers } from '../MultiPage/UiControllers'
import { MatchesItem } from './MatchesItem'
import { ProfileU } from './ProfileU'
import { MatchesListJS, MatchesTitle } from './Style'
import axios from 'axios'

export const MatchesList = (props) => {

  const [matches, setMatches] = useState([])

  const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/matches'

  const pegaTodosMatches = () => {
    axios.get(url).then((response) => { setMatches(response.data)}).catch((error) => { console.log(error.response + 'deu ruim no pegar os Matches.')})
  }

  useEffect(() => {
    pegaTodosMatches()
  }, [])
  
  const lista = matches.map((item, index) => {
    return <MatchesItem imagem={item.profile.photo} nome={item.profile.name}/>
  })

  return (
    <MatchesListJS>
        <ProfileU />
        <MatchesTitle>Seus Matches</MatchesTitle>
        { lista }
        <UiControllers onClick={props.onClick} />
    </MatchesListJS>
  )
}
