import React, { useContext } from 'react';

const PlayerContext = React.createContext<any>({} as any)

export const usePlayerContext = () => useContext(PlayerContext)

export const PlayerProvider = ({children} : {children : any}) => {

  let igraci = [{
    ime : 'Leo',
    prezime: 'Mesi',
    broj: 11,
    pozicija: 'napadac'
  },
  {
    ime : 'Kristijano',
    prezime: 'Ronaldo',
    broj: 7,
    pozicija: 'napadac'
  },
  {
    ime : 'Manuel',
    prezime: 'Nojer',
    broj: 99,
    pozicija: 'golman'
  },
  {
    ime : 'David',
    prezime: 'De Gea',
    broj: 1,
    pozicija: 'golman'
  },
  {
    ime : 'Nemanja',
    prezime: 'Vidic',
    broj: 2,
    pozicija: 'odbrana'
  },
  {
    ime : 'Nemanja',
    prezime: 'Modric',
    broj: 5,
    pozicija: 'sredina'
  },
  {
    ime : 'Edgar',
    prezime: 'Davids',
    broj: 46,
    pozicija: 'sredina'
  },
  {
    ime : 'Karim',
    prezime: 'Benzema',
    broj: 14,
    pozicija: 'napadac'
  }]

  let value:any = {
    igraci
  }


  return <PlayerContext.Provider value={value}>
    {children}
  </PlayerContext.Provider>
}

