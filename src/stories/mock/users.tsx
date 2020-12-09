import { TwitchUsersResponse } from '../../interfaces';

const users: Record<string, TwitchUsersResponse> = {
  me: {
    data: [
      {
        broadcaster_type: 'affiliate',
        created_at: '2014-07-19T18:25:51.044873Z',
        description:
          'I\'m a Software Developer, Manager, Videogamer, Anime Watcher and an absolute Memer. Reviews: "This is a very high quality stream for having just 5 viewers" "You look younger every time I see you" "Can you make your oven RGB too? (yes)"',
        display_name: 'WoxxyTheFool',
        email: 'woxxysamazingmail@gmail.com',
        id: '66727133',
        login: 'woxxythefool',
        offline_image_url:
          'https://static-cdn.jtvnw.net/jtv_user_pictures/531ddd2c-2a00-4e31-9820-20649a8f9488-channel_offline_image-1920x1080.jpeg',
        profile_image_url:
          'https://static-cdn.jtvnw.net/jtv_user_pictures/7675e11d-880d-4c77-bfe2-b38a93d591bf-profile_image-300x300.png',
        type: '',
        view_count: 452,
      },
    ],
  },
};

export { users };
