import { FC } from 'react';
import './button.css';
import { TwitchProvider } from '../components/TwitchProvider';
import { TwitchWrapper } from '../template/TwitchWrapper';
import {
  OverwatchCamera,
  OverwatchUltimate,
  OverwatchUltimateFollowersGoal,
  OverwatchUltimateSubscriberGoal,
} from '../components/templates/games/Overwatch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitch, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { UserDisplayName } from '../components/atoms/UserDisplayName';
import {
  faCrown,
  faTicketAlt,
  faUserFriends,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import { LatestFollower } from '../components/atoms/LatestFollower';
import { LatestSubscriber } from '../components/atoms/LatestSubscriber';

export const TemplateGameOverwatchStory: FC = () => {
  return (
    <TwitchProvider>
      <TwitchWrapper streamWidth={'1920px'} streamHeight={'1080px'}>
        <OverwatchCamera>
          <FontAwesomeIcon icon={faTwitch} /> <UserDisplayName />
        </OverwatchCamera>
        <OverwatchUltimate
          upperLeft={[
            {
              title: 'Followers Goal',
              icon: <FontAwesomeIcon icon={faUserFriends} />,
              rawValue: <OverwatchUltimateFollowersGoal goal={64} />,
            },
          ]}
          upperRight={[
            {
              title: 'Subscriber Goal',
              icon: <FontAwesomeIcon icon={faCrown} />,
              rawValue: <OverwatchUltimateSubscriberGoal goal={3} />,
            },
          ]}
          left={[
            {
              title: 'Twitch Username',
              icon: <FontAwesomeIcon icon={faTwitch} />,
              value: <UserDisplayName />,
            },
            {
              title: 'Twitter Username',
              icon: <FontAwesomeIcon icon={faTwitter} />,
              value: '@woxxy',
            },
          ]}
          right={[
            {
              title: 'Latest Follower',
              icon: <FontAwesomeIcon icon={faUserPlus} />,
              value: <LatestFollower />,
            },
            {
              title: 'Latest Subscriber',
              icon: <FontAwesomeIcon icon={faTicketAlt} />,
              value: <LatestSubscriber />,
            },
          ]}
        />
      </TwitchWrapper>
    </TwitchProvider>
  );
};
