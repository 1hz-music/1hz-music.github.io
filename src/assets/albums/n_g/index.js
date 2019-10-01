import COVER from './cover.jpg';
import JUMBOTRON from './jumbotron.jpg';

export default {
  id: 'NGD',
  gradientColors: ['#34335d', '#1d1c46'],

  cover: COVER,
  jumbotron: JUMBOTRON,
  title: 'Night Guardian',
  leader: 'Daily',
  illust: 'Axleaki',
  design: '角川烈',
  mastering: 'UN1C0DE',
  releaseDate: new Date(2018, 7 - 1, 21),
  resources: [
    {
      type: 'video',
      title: 'Video',
      href: 'https://www.bilibili.com/video/av26634532',
      embed: null,
    },
    {
      type: 'audio',
      title: 'Soundcloud',
      href: 'https://soundcloud.com/ovjffjrm6bqb/night-guardianpreview',
      embed: null,
    },
    {
      type: 'audio',
      title: '网易云音乐',
      href: 'https://music.163.com/#/song?id=864765144',
      embed: null,
    },
  ],
  tracks: [
    {
      title: '啟程',
      artist: 'Mei',
      genre: 'Symphony',
      duration: [2, 9],
    },
    {
      title: 'Night Guardian',
      artist: 'Daily/Antistar',
      genre: 'Trance',
      duration: [5, 49],
    },
    {
      title: 'Saw Your Eyes',
      artist: 'Amberry',
      genre: 'Uplifting Trance',
      duration: [7, 0],
    },
    {
      title: 'SiO2H’F',
      artist: 'Antistar',
      genre: 'Trance',
      duration: [5, 0],
    },
    {
      title: 'Departure',
      artist: 'Nascent Nova',
      genre: 'Epic Dubstep',
      duration: [5, 25],
    },
    {
      title: 'Invader',
      artist: 'SLT',
      genre: 'Post Hard Renaissance',
      duration: [2, 18],
    },
    {
      title: 'Four Minutes Before Sunrise',
      artist: 'Rocky',
      genre: 'Post Rock',
      duration: [4, 4],
    },
    {
      title: '最初の草原',
      artist: '辰远 [Vocal. 辰音タツ; 氷クカミ]',
      genre: 'Pop',
      duration: [4, 38],
    },
  ],
};
