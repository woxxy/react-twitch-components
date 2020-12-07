import atoms from './components/atoms';
import molecules from './components/molecules';
import { TwitchProvider } from './components/TwitchProvider';
import {
  OverwatchCamera,
  OverwatchUltimate,
} from './components/templates/games/Overwatch';

const index = {
  TwitchProvider,
  ...atoms,
  ...molecules,
  OverwatchUltimate,
  OverwatchCamera,
};

module.exports = index;
