import React from 'react'

import { Container, Header, SongList } from './styles'

import ClockIcon from '../../assets/images/clock.svg'
import PlusIcon from '../../assets/images/plus.svg'

const Playlist = () => (
  <Container>
    <Header>
      <img
        src="http://2.bp.blogspot.com/_rUg2zEENQfQ/TSubalHShFI/AAAAAAAAA0Q/lI_nOrJ8HIY/s400/massacration_gates_of_metal_fried_chicken_of_death_2005_retail_cd-front.jpg"
        alt="Playlist"
      />
      <div>
        <span>PLAYLIST</span>

        <h1>Metal Pesado Xovem</h1>
        <p>16 músicas</p>
        <button>PLAY</button>
      </div>
    </Header>

    <SongList cellSpacing={0} cellPadding={0}>
      <thead>
        <th />
        <th>Título</th>
        <th>Artista</th>
        <th>Álbum</th>
        <th>
          <img src={ClockIcon} alt="Duração" />
        </th>
      </thead>
      <tbody>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Metal Milkshake</td>
          <td>Massacration</td>
          <td>Metal Land</td>
          <td>3:56</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Metal Milkshake</td>
          <td>Massacration</td>
          <td>Metal Land</td>
          <td>3:56</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Metal Milkshake</td>
          <td>Massacration</td>
          <td>Metal Land</td>
          <td>3:56</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Metal Milkshake</td>
          <td>Massacration</td>
          <td>Metal Land</td>
          <td>3:56</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Metal Milkshake</td>
          <td>Massacration</td>
          <td>Metal Land</td>
          <td>3:56</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Metal Milkshake</td>
          <td>Massacration</td>
          <td>Metal Land</td>
          <td>3:56</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Metal Milkshake</td>
          <td>Massacration</td>
          <td>Metal Land</td>
          <td>3:56</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Metal Milkshake</td>
          <td>Massacration</td>
          <td>Metal Land</td>
          <td>3:56</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Metal Milkshake</td>
          <td>Massacration</td>
          <td>Metal Land</td>
          <td>3:56</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Metal Milkshake</td>
          <td>Massacration</td>
          <td>Metal Land</td>
          <td>3:56</td>
        </tr>
      </tbody>
    </SongList>
  </Container>
)

export default Playlist
