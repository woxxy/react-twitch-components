import { TwitchLegacyChannelSubscriptionsResponse } from '../../src/hooks';

const legacySubscriber: Record<
  string,
  TwitchLegacyChannelSubscriptionsResponse
> = {
  me: {
    _total: 6,
    subscriptions: [
      {
        created_at: '2021-01-02T21:55:04Z',
        _id: '53054d5c37f0fc559947c7c9c141817959e1d5df',
        sub_plan: '1000',
        sub_plan_name: "Woxxy's Egg Fund",
        is_gift: false,
        user: {
          display_name: 'Tizianoreica',
          type: 'user',
          bio:
            "Antonio. Italian. Live in Malmo. Computer engineer. Rubik's Cube addicted. Gym rat. In fruit and vegetables I trust",
          created_at: '2015-03-25T18:05:11Z',
          updated_at: '2020-12-31T11:28:17Z',
          name: 'tizianoreica',
          _id: '86313806',
          logo:
            'https://static-cdn.jtvnw.net/jtv_user_pictures/26e9d4d3-0882-48d5-b185-9b5a700cb0bd-profile_image-300x300.jpg',
        },
        sender: null,
      },
    ],
  },
};

export { legacySubscriber };
