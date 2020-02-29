import React from 'react'

import { Container, Title, List, Playlist } from './styles'

const Browse = () => (
  <Container>
    <Title>Navegar</Title>
    <List>
      <Playlist to="/playlists/1">
        <img
          src="http://2.bp.blogspot.com/_rUg2zEENQfQ/TSubalHShFI/AAAAAAAAA0Q/lI_nOrJ8HIY/s400/massacration_gates_of_metal_fried_chicken_of_death_2005_retail_cd-front.jpg"
          alt="Playlist"
        />
        <strong>Metal Pesado Xovem</strong>
        <p>Escute um Rock maroto e programe para o infinito.</p>
      </Playlist>
      <Playlist to="/playlists/1">
        <img
          src="https://lastfm.freetls.fastly.net/i/u/ar0/d222e43cf9244e3a8bf4dd0baa09540c.jpg"
          alt="Playlist"
        />
        <strong>Pop Esperto</strong>
        <p>Ruby Ruby Ruby Ruby Ahhh Ahhhhhh.</p>
      </Playlist>
      <Playlist to="/playlists/1">
        <img
          src="http://www.tricolorontherock.com.br/wp-content/uploads/2016/09/Nirvana-Nevermind-Album-Cover.jpg"
          alt="Playlist"
        />
        <strong>Light Rock</strong>
        <p>Para concentrar e alucinar.</p>
      </Playlist>
      <Playlist to="/playlists/1">
        <img
          src="https://direct.rhapsody.com/imageserver/images/alb.366011533/500x500.jpg"
          alt="Playlist"
        />
        <strong>Bon Jovi Interessante</strong>
        <p>Tairone recomenda.</p>
      </Playlist>
    </List>
  </Container>
)
export default Browse
