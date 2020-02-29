import React from 'react'

import { Container, NewPlaylist, Nav } from './styles'

import AddPlaylistIcon from '../../assets/images/add_playlist.svg'

const Sidebar = () => (
  <Container>
    <div>
      <Nav main>
        <li>
          <a href="http://railson.net/">Navegar</a>
        </li>
        <li>
          <a href="http://railson.net/">Rádio</a>
        </li>
      </Nav>

      <Nav>
        <li>
          <span>SUA BIBLIOTECA</span>
        </li>
        <li>
          <a href="http://railson.net/">Seu Daily Mix</a>
        </li>
        <li>
          <a href="http://railson.net/">Tocados Recentemente</a>
        </li>
        <li>
          <a href="http://railson.net/">Músicas</a>
        </li>
        {/* <li>
          <a href='http://railson.net/'>Álbuns</a>
        </li>
        <li>
          <a href='http://railson.net/'>Artistas</a>
        </li>
        <li>
          <a href='http://railson.net/'>Estações</a>
        </li>
        <li>
          <a href='http://railson.net/'>Arquivos Locais</a>
        </li> */}
        <li>
          <a href="http://railson.net/">Vídeos</a>
        </li>
        <li>
          <a href="http://railson.net/">Podcasts</a>
        </li>
      </Nav>

      <Nav>
        <li>
          <span>Playlists</span>
        </li>

        <li>
          <a href="http://railson.net/">Metal Pesado</a>
        </li>
        {/* <li>
          <a href='http://railson.net/'>Flash Back</a>
        </li>
        <li>
          <a href='http://railson.net/'>Love Songs</a>
        </li> */}
      </Nav>
    </div>
    <NewPlaylist>
      <img src={AddPlaylistIcon} alt="Adicionar Playlist" />
      Nova Playlist
    </NewPlaylist>
  </Container>
)

export default Sidebar
