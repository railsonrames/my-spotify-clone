import React from "react";

import { Container, Current, Volume } from "./styles";

import VolumeIcon from "../../assets/images/volume.svg";

const Player = () => (
  <Container>
    <Current>
      <img src="https://lastfm.freetls.fastly.net/i/u/ar0/d222e43cf9244e3a8bf4dd0baa09540c.jpg" alt="Kaiser Chiefs - Ruby" />
      <div>
        <span>Yours Truly Angry Mob</span>
        <small>Kaiser Chiefs</small>
      </div>
    </Current>

    <Volume>
      <img src={VolumeIcon} alt="volume" />
    </Volume>
  </Container>
);

export default Player;
