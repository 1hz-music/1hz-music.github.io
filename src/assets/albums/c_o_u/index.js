import COVER from './cover.jpg';

export default {
  id: 'COU',
  gradientColors: ['#9faba9', '#878c8f'],

  cover: COVER,
  jumbotron: COVER,
  title: 'Collage of Urbanity',
  leader: 'Daily',
  illust: 'Enma',
  design: ['横尾太喵', 'Enma'],
  mastering: 'UN1C0DE',
  releaseDate: new Date(2019, 7 - 1, 20),
  locked: false,
  resources: [
    {
      type: 'audio',
      title: 'Soundcloud',
      href: 'https://soundcloud.com/ovjffjrm6bqb/collage-of-urbanity-xfd',
    },
    {
      type: 'audio',
      title: '网易云音乐',
      href: 'https://music.163.com/#/song?id=1377556157',
    },
  ],
  tracks: [
    {
      title: 'Afar',
      artist: 'Thomaisho',
      genre: 'New Age',
      duration: [4, 8],
    },
    {
      title: 'SPRITE TOWN',
      artist: 'ぽんきち',
      genre: 'Colorful City Pop',
      duration: [3, 30],
    },
    {
      title: 'Drizzling',
      artist: 'Tanchiky',
      genre: 'Post-Jazz',
      duration: [4, 52],
    },
    {
      title: '暮れ行く日',
      artist: 'nay',
      genre: 'New Age',
      duration: [5, 16],
    },
    {
      title: 'My World',
      artist: 'Candybox',
      genre: 'Lounge',
      duration: [3, 52],
    },
    {
      title: 'Walking On Concrete Road',
      artist: 'Nota',
      genre: 'UK Garage',
      duration: [2, 49],
    },
    {
      title: 'Times That We Forgot',
      artist: 'Mameyudoufu',
      genre: 'Disco Funk',
      duration: [4, 11],
    },
    {
      title: 'Back Alley Party!',
      artist: 'Chroma',
      genre: 'Pop',
      duration: [4, 5],
    },
    {
      title: 'Glow',
      artist: 'Candybox',
      genre: 'Lounge',
      duration: [2, 54],
    },
    {
      title: 'Urband',
      artist: '辰远',
      genre: 'Jazz Pop',
      duration: [3, 21],
    },
    {
      title: 'Starfiled',
      artist: 'Rocky',
      genre: 'Post-Rock',
      duration: [3, 27],
    },
  ],
};
