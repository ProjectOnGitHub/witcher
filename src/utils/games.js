import theWitcher from '../images/the-witcher.jpg';
import theWitcher2 from '../images/the-witcher-2.jpg';
import theWitcher3 from '../images/the-witcher-3.jpg';
import heartsOfStone from '../images/hearts-of-stone.jpg';
import bloodAndWine from '../images/blood-and-wine.jpg';
import promoImageMain from '../images/background.jpg';
import promoImageOnline from '../images/gwent.jpg';

const allGames = [
  {
    id: 'the-witcher',
    cover: theWitcher,
    category: 'Основные',
    url: '/',
    title: 'Ведьмак',
    lightTheme: false,
    year: 2007,
    platforms: ['PC'],
    text: [
      'История начинается с появления Геральта, которого долго считали мертвым. Его находят без сознания, ошеломленного и совершенно ничего не помнящего. Благодаря такой завязке сюжета игроки, не знакомые с творчеством Анджея Сапковского, могут плавно погрузиться в увлекательный завораживающий мир «Ведьмака».',
    ],
  },
  {
    id: 'the-witcher-2',
    cover: theWitcher2,
    category: 'Основные',
    url: '/',
    title: 'Ведьмак 2: Убийцы королей',
    lightTheme: true,
    year: 2011,
    platforms: ['PC', 'Xbox 360'],
    text: [
      'Главный герой игры – ведьмак Геральт из Ривии, профессиональный убийца монстров. Втянутый в политические беспорядки и массовые волнения, захлестнувшие Темерию, Геральт помогает подавить восстание Ордена Пылающей Розы. Вскоре после этого он спасает короля Фольтеста, едва не погибшего от рук очень похожего на ведьмака убийцы. Продолжив защищать короля, Геральт становится его телохранителем, а сам Фольтест старается восстановить мир и порядок в своем королевстве. И вот, наконец, последние бастионы Ордена пали под натиском королевской армии. Однако выясняется, что дело еще не доведено до конца – баронесса Ла Валетт объявляет об отделении своих владений от королевства, и теперь ее замок необходимо захватить.',
      'Месяц спустя после покушения армия Фольтеста стала у ворот замка Ла Валетт, готовясь к финальной битве. Геральт все еще выступает на стороне короля. Пока у него нет возможности начать собственное расследование причин загадочного покушения на Фольтеста.',
    ],
  },
  {
    id: 'the-witcher-3',
    cover: theWitcher3,
    category: 'Основные',
    url: '/',
    title: 'Ведьмак 3: Дикая охота',
    lightTheme: false,
    year: 2015,
    platforms: ['PC', 'Xbox One', 'PlayStation 4', 'Nintendo Switch'],
  },
  {
    id: 'hearts-of-stone',
    cover: heartsOfStone,
    category: 'Основные',
    url: '/',
    title: 'Ведьмак 3: Дикая Охота — Каменные сердца',
    lightTheme: true,
    year: 2015,
    platforms: ['PC', 'Xbox One', 'PlayStation 4', 'Nintendo Switch'],
  },
  {
    id: 'blood-and-wine',
    cover: bloodAndWine,
    category: 'Основные',
    url: '/',
    title: 'Ведьмак 3: Дикая Охота — Кровь и вино',
    lightTheme: false,
    year: 2016,
    platforms: ['PC', 'Xbox One', 'PlayStation 4', 'Nintendo Switch'],
  },
  {
    id: 'gwent',
    cover: bloodAndWine,
    category: 'Онлайн',
    url: '/online',
    title: 'Гвинт: Ведьмак. Карточная игра',
    lightTheme: false,
    year: 2018,
    platforms: ['PC', 'iOS', 'Android'],
  },
  {
    id: 'thronebreaker',
    cover: bloodAndWine,
    category: 'Онлайн',
    url: '/online',
    title: 'Кровная вражда: Ведьмак. Истории',
    lightTheme: true,
    year: 2018,
    platforms: ['PC', 'Xbox One', 'PlayStation 4', 'Nintendo Switch', 'iOS', 'Android'],
  },
  {
    id: 'monster-slayer',
    cover: bloodAndWine,
    category: 'Онлайн',
    url: '/online',
    title: 'Ведьмак: Охотник на чудовищ',
    lightTheme: false,
    year: 2021,
    platforms: ['iOS', 'Android'],
  },
  {
    id: 'adwenture-game',
    cover: bloodAndWine,
    category: 'Онлайн',
    url: '/online',
    title: 'Ведьмак: Приключенческая игра',
    lightTheme: true,
    year: 2021,
    platforms: ['iOS', 'Android'],
  },
  {
    id: 'versus',
    cover: bloodAndWine,
    category: 'Прочие',
    url: '/other',
    title: 'The Witcher: Versus',
    lightTheme: false,
    year: 2021,
    platforms: ['iOS', 'Android'],
  },
  {
    id: 'battle-arena',
    cover: bloodAndWine,
    category: 'Прочие',
    url: '/other',
    title: 'The Witcher Battle Arena',
    lightTheme: true,
    year: 2021,
    platforms: ['iOS', 'Android'],
  },
  {
    id: 'rise-of-the-white-wolf',
    cover: bloodAndWine,
    category: 'Прочие',
    url: '/other',
    title: 'The Witcher: Rise of the White Wolf',
    lightTheme: false,
    year: 2021,
    platforms: ['iOS', 'Android'],
  },
  {
    id: 'crimson trail',
    cover: bloodAndWine,
    category: 'Прочие',
    url: '/other',
    title: 'The Witcher: Crimson Trail',
    lightTheme: true,
    year: 2021,
    platforms: ['iOS', 'Android'],
  },
];

const allPages = [
  {
    id: 'main',
    cover: promoImageMain,
    category: 'Основные',
    url: '/',
    title: 'О ведьмаке',
    text: [
      'Серия компьютерных игр разработана польской компанией CD Projekt RED по мотивам одноимённой серии романов польского писателя Анджея Сапковского. Релиз первой игры на платформе Windows состоялся 24 октября 2007 года — в России, 26 октября — в Европе и 30 октября 2007 года — в США. В 2012 году вышла версия для OS X.',
    ],
  },
  {
    id: 'online',
    cover: promoImageOnline,
    category: 'Онлайн',
    url: '/online',
    title: 'Онлайн игры по Ведьмаку',
    text: [
      'Серия компьютерных игр разработана польской компанией CD Projekt RED по мотивам одноимённой серии романов польского писателя Анджея Сапковского. Релиз первой игры на платформе Windows состоялся 24 октября 2007 года — в России, 26 октября — в Европе и 30 октября 2007 года — в США. В 2012 году вышла версия для OS X.',
    ],
  },
  {
    id: 'other',
    cover: promoImageMain,
    category: 'Прочие',
    url: '/other',
    title: 'Прочие игры по ведьмаку',
    text: [
      'Серия компьютерных игр разработана польской компанией CD Projekt RED по мотивам одноимённой серии романов польского писателя Анджея Сапковского. Релиз первой игры на платформе Windows состоялся 24 октября 2007 года — в России, 26 октября — в Европе и 30 октября 2007 года — в США. В 2012 году вышла версия для OS X.',
    ],
  },
];

export {
  allGames,
  allPages,
};
