import React from "react";
import Slider from "rc-slider";

import { Container, Current, Volume, Controls, Progress, Time, ProgressSlider } from "./styles";

import VolumeIcon from "../../assets/images/volume.svg";
import ShuffleIcon from "../../assets/images/shuffle.svg";
import BackwardIcon from "../../assets/images/backward.svg";
import PlayIcon from "../../assets/images/play.svg";
import ForwardIcon from "../../assets/images/forward.svg";
import RepeatIcon from "../../assets/images/repeat.svg";

const Player = () => (
  <Container>
    <Current>
      <img src="https://lastfm.freetls.fastly.net/i/u/ar0/d222e43cf9244e3a8bf4dd0baa09540c.jpg" alt="Kaiser Chiefs - Ruby" />
      <div>
        <span>Yours Truly Angry Mob</span>
        <small>Kaiser Chiefs</small>
      </div>
    </Current>
    <Progress>
      <Controls>
        <button>
          <img src={ShuffleIcon} alt="Aleatório" />
        </button>
        <button>
          <img src={BackwardIcon} alt="Anterior" />
        </button>
        <button>
          <img src={PlayIcon} alt="Tocar" />
        </button>
        <button>
          <img src={ForwardIcon} alt="Próximo" />
        </button>
        <button>
          <img src={RepeatIcon} alt="Repetir" />
        </button>
      </Controls>

      <Time>
        <span>1:39</span>
        <ProgressSlider>
          <Slider
            railStyle={{ background: "#404040", borderRadius: 10 }}
            trackStyle={{ background: "#1ED760" }}
            handleStyle={{ border: 0 }}
          />
        </ProgressSlider>
        <span>4:24</span>
      </Time>
    </Progress>
    <Volume>
      <img src={VolumeIcon} alt="volume" />
      <Slider
        railStyle={{ background: "#404040", borderRadius: 10 }}
        trackStyle={{ background: "#FFF" }}
        handleStyle={{ display: "none" }}
        value={100}
      />
    </Volume>
  </Container>
);

export default Player;
