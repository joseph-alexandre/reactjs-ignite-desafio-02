import { useEffect, useState } from 'react';

import { api } from './services/api';

import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';
import { SideBar } from './components/SideBar';
import { Content } from './components/Content';
import { GenreResponseProps } from './props/GenreResponseProps';

export function App() {

  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  
  useEffect(() => {
    api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
      setSelectedGenre(response.data);
    })
  }, [selectedGenreId])

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar previousGenreIdState={selectedGenreId} 
               setGenreIdState={setSelectedGenreId} />
      <Content selectedGenre={selectedGenre} />
    </div>
  )
}