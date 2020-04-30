import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as PlaylistsActions } from '../../store/ducks/playlists'

import { Container, NewPlaylist, Nav } from './styles'

import AddPlaylistIcon from '../../assets/images/add_playlist.svg'

class Sidebar extends Component {
  static propTypes = {
    getPlaylistsRequest: PropTypes.func.isRequired,
    playlists: PropTypes.shape({
      data: PropTypes.arrayOf({
        id: PropTypes.number,
        title: PropTypes.string,
      }),
    }).isRequired,
  }

  componentDidMount() {
    this.props.getPlaylistsRequest()
  }

  render() {
    return (
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

            {this.props.playlists.data.map(playlist => (
              <li key={playlist.id}>
                <Link to={`playlists/${playlist.id}`}>{playlist.title}</Link>
              </li>
            ))}
          </Nav>
        </div>
        <NewPlaylist>
          <img src={AddPlaylistIcon} alt="Adicionar Playlist" />
          Nova Playlist
        </NewPlaylist>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  playlists: state.playlists,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(PlaylistsActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
