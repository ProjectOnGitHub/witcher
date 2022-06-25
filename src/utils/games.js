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
    heading: 'Ведьмак',
    lightTheme: false,
    year: 2007,
    platforms: ['PC'],
    text: [
      'История начинается с появления Геральта, которого долго считали мертвым. Его находят без сознания, ошеломленного и совершенно ничего не помнящего. Благодаря такой завязке сюжета игроки, не знакомые с творчеством Анджея Сапковского, могут плавно погрузиться в увлекательный завораживающий мир «Ведьмака».',
      'В игре использована инновационная система взаимосвязи решений и их последствий. Суть ее в том, что принятые в тот или иной момент игры решения в дальнейшем отразятся на развитии сюжета, побуждая игроков тщательно обдумывать и взвешивать свои действия.',
      'Окружающий мир в игре живет собственной жизнью, и Геральт отнюдь не является его центром. Неигровые персонажи существуют сами по себе, независимо от главного героя, однако действия Геральта могут влиять на них, а они, в свою очередь, способны совершенно по-разному реагировать на его поступки. Мир игры многообразен и изменчив, и Геральт – лишь часть его, хотя именно от его поступков зависит будущее этого мира.',
    ],
  },
  {
    id: 'the-witcher-2',
    cover: theWitcher2,
    category: 'Основные',
    url: '/',
    heading: 'Ведьмак 2: Убийцы королей',
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
    heading: 'Ведьмак 3: Дикая охота',
    lightTheme: false,
    year: 2015,
    platforms: ['PC', 'Xbox One', 'PlayStation 4', 'Nintendo Switch'],
    text: [
      'Вы — Ведьмак, профессиональный охотник на монстров, наёмный убийца. С раннего детства ведьмаков тренируют и подвергают мутациям благодаря чему, у них есть сверхчеловеческие умения, сила и скорость реакции. Им не доверяют, но считают необходимым злом, которое может противостоять монстрам в этом мире. Вы всегда в пути, всегда там, где есть боль и страдания и чужие проблемы становятся вашими... если за это хорошо платят. И теперь вы взяли самый сложный заказ: найти дитя, о котором писали в древних пророчествах. Живое орудие, от которого зависит судьба всего мира. Принимайте решения, выходящие за рамки выбора между добром и злом, и будьте готовы столкнуться с их последствиями.',
      '«Ведьмак 3: Дикая Охота» — сюжетная ролевая игра с открытым фэнтези миром, который полон проблем и безразличия к моральным принципам. Новый «Ведьмака» построен для бесконечных приключений и задаёт новые стандарты по размеру, глубине и наполненности своим открытым миром. Вы сможете исследовать все его края, полные торговых городов, опасных горных перевалов и забытых пещер. Это борьба на выживание: договаривайтесь с подлыми полководцами, жуткими ведьмами и продажными властителями и помогайте им в самых темных и опасных делах, чтобы потом потратить заработанные деньги на улучшение своего вооружения или на то, чтобы насладиться всеми прелестями ночной жизни городов.',
    ],
  },
  {
    id: 'hearts-of-stone',
    cover: heartsOfStone,
    category: 'Основные',
    url: '/',
    heading: 'Ведьмак 3: Дикая Охота — Каменные сердца',
    lightTheme: true,
    year: 2015,
    platforms: ['PC', 'Xbox One', 'PlayStation 4', 'Nintendo Switch'],
    text: [
      '«Каменные сердца» — это первое официальное крупное дополнение к игре «Ведьмак 3: Дикая охота», грандиозному ролевому приключению, получившему множество наград.',
      'Получив заказ от Господина Зеркало, Геральт должен встретиться с Ольгердом фон Эвереком — безжалостным главарём бандитов, получившим дар бессмертия.',
      'Почувствуйте себя снова Геральтом из Ривии, профессиональным охотником на чудовищ, которого в этот раз наняли разобраться с главарём бандитов Ольгердом фон Эвереком, человеком, обретшим дар бессмертия. Это дополнение к игре «Ведьмак 3: Дикая Охота» рассчитано более чем на 10 часов прохождения: новые персонажи, новые приключения, смертоносные чудовища, уникальная романтическая история и новый сюжет, формируемый вашими решениями.',
    ],
  },
  {
    id: 'blood-and-wine',
    cover: bloodAndWine,
    category: 'Основные',
    url: '/',
    heading: 'Ведьмак 3: Дикая Охота — Кровь и вино',
    lightTheme: false,
    year: 2016,
    platforms: ['PC', 'Xbox One', 'PlayStation 4', 'Nintendo Switch'],
    text: [
      '«Кровь и вино» – второе и заключительное дополнение к игре «Ведьмак 3: Дикая Охота» – знаменитой ролевой игры с открытым миром.',
      'Станьте профессиональным охотником на чудовищ Геральтом из Ривии и отправляйтесь на поиски славы и приключений в далёкий Туссент, земли которого не тронула ни одна война последних лет. Откройте страшную тайну, которая скрывается за появлением смертоносной твари, что сеет страх и погибель по всему княжеству. Когда все улики заводят в тупик, только ведьмак сумеет отыскать страшную правду и выжить, не став очередной жертвой зла, таящегося в ночи. Дополнение «Кровь и вино» добавляет в игру новый регион для путешествий, новых персонажей и чудовищ: более 30 интереснейших часов игры, насыщенных неожиданными сюжетными поворотами, страшными преступлениями, романтикой и ложью.',
    ],
  },
  {
    id: 'gwent',
    cover: bloodAndWine,
    category: 'Онлайн',
    url: '/online',
    heading: 'Гвинт: Ведьмак. Карточная игра',
    lightTheme: false,
    year: 2018,
    platforms: ['PC', 'iOS', 'Android'],
    text: [
      'Хотите сыграть в самую знаменитую коллекционную карточную игру в мире «Ведьмака», не заплатив ни кроны? В ГВИНТЕ вас ждут динамичные и захватывающие сражения: вводите соперников в заблуждение, быстро принимайте решения и тщательно отбирайте карты для колоды. В бою вам помогут Геральт, Йеннифэр и другие знакомые герои из мира «Ведьмака», а заклинания и особые способности смогут переломить ход битвы в любую минуту. В классических играх, сезонных матчах и на арене вам не обойтись без уловок и хитрых приёмов.',
      'ГВИНТ — это карточная игра, в которой ваше главное оружие не удача, а мастерство. Выберите фракцию, соберите армию и вступите в борьбу с другими игроками в различных игровых режимах. Придумывайте и меняйте стратегии на ходу благодаря сотням карт с харизматичными героями, мощными заклинаниями и особыми способностями. Не забывайте: от ваших решений зависит все.',
      'Продумывайте тактику и выкладывайте карты в рукопашном или дальнобойном ряду. Чтобы выиграть раунд, наберите больше очков, чем ваш противник. Чтобы выиграть битву, одержите победу в двух раундах из трех. И не ждите, что будет легко.',
    ],
  },
  {
    id: 'thronebreaker',
    cover: bloodAndWine,
    category: 'Онлайн',
    url: '/online',
    heading: 'Кровная вражда: Ведьмак. Истории',
    lightTheme: true,
    year: 2018,
    platforms: ['PC', 'Xbox One', 'PlayStation 4', 'Nintendo Switch', 'iOS', 'Android'],
    text: [
      '«Кровная вражда» — это одиночная ролевая игра, действие которой происходит в мире «Ведьмака». Игра сочетает захватывающий сюжет, исследования, уникальные головоломки и карточные сражения.',
      'Создатели игры «Ведьмак 3: Дикая Охота» готовы познакомить игроков с историей Мэвы, воинственной королевы Лирии и Ривии. Перед лицом неминуемого вторжения империи Нильфгаард Мэве предстоит вновь взяться за меч и отправиться в трудное и мрачное путешествие.',
      'В «Кровной вражде» вы встретитесь со множеством самобытных, многогранных персонажей. Кто-то станет вашим союзником, а кто-то бросит вам вызов на поле боя. «Кровная вражда» сочетает в себе боевую механику игры «ГВИНТ: Ведьмак. Карточная игра» и детально проработанные сюжетные сражения. Примерьте на себя роль командира и задействуйте уникальные способности своих отрядов, чтобы привести армию к победе.',
    ],
  },
  {
    id: 'monster-slayer',
    cover: bloodAndWine,
    category: 'Онлайн',
    url: '/online',
    heading: 'Ведьмак: Охотник на чудовищ',
    lightTheme: false,
    year: 2021,
    platforms: ['iOS', 'Android'],
    text: [
      'Вас ждут сюжетные задания и захватывающие приключения в духе серии игр «Ведьмак». Вы на собственном опыте узнаете, каково живётся истребителю монстров.',
      'Просторы континента населяют гнусные чудовища. Охотиться на них предстоит тем, кого называют ведьмаками. События игры «Ведьмак: Охотник на чудовищ» происходят задолго до появления Геральта из Ривии. Благодаря дополненной реальности мир вокруг вас наполнят обитатели мира тёмного фэнтези. В знакомых местах появятся ужасные твари, и вам придётся встать на путь профессионального убийцы чудовищ.',
      'Прежде чем сражаться с реалистичными исполинскими чудовищами в бою от первого лица, тщательно подготовьте персонажа: потренируйтесь, сварите эликсиры и масла, приготовьте бомбы и подберите подходящее снаряжение.',
      'На память о победах над знакомыми и невиданными прежде монстрами из мира «Ведьмака» вы будете собирать кровавые трофеи. Со временем коллекция разрастётся до невероятных размеров, достойных выдающегося охотника на чудовищ.',
    ],
  },
  {
    id: 'adwenture-game',
    cover: bloodAndWine,
    category: 'Онлайн',
    url: '/online',
    heading: 'Ведьмак: Приключенческая игра',
    lightTheme: true,
    year: 2021,
    platforms: ['iOS', 'Android'],
    text: [
      'Увлекательная игра - «Ведьмак: Приключенческая игра» - приглашает вас совершить захватывающее путешествие в чудесный фэнтезийный мир! Вы можете выбрать роль одного из четырех героев, известных по книгам и видеоиграм. Кто вам больше по душе – профессиональный охотник на чудовищ Геральт из Ривии, искусная чародейка Трисс Меригольд, краснолюдский воин Ярпен Зигрин или лукавый бард Лютик? Каждый персонаж обладает уникальными способностями и справляется с неприятностями по-своему. Действовать силой, использовать свое обаяние или пойти по пути дипломатии – решать вам!',
      'Вас ждет множество разнообразных заданий. Займитесь охотой на монстров, зарабатывайте золото, общайтесь с персонажами, разбираясь в хитросплетении союзов истинных и ложных. Вам предстоит захватывающее приключение, которое заставит вас позабыть обо всем, едва вы приступите к игре. Простые правила и понятная механика позволят мгновенно погрузиться в увлекательный игровой процесс. Разумеется, вы сможете помогать друг другу… Однако не переусердствуйте – ведь победитель в этой игре только один!',
    ],
  },
  {
    id: 'versus',
    cover: bloodAndWine,
    category: 'Прочие',
    url: '/other',
    heading: 'The Witcher: Versus',
    lightTheme: false,
    year: 2021,
    platforms: ['iOS', 'Android'],
    text: [
      'Серия компьютерных игр разработана польской компанией CD Projekt RED по мотивам одноимённой серии романов польского писателя Анджея Сапковского. Релиз первой игры на платформе Windows состоялся 24 октября 2007 года — в России, 26 октября — в Европе и 30 октября 2007 года — в США. В 2012 году вышла версия для OS X.',
    ],
  },
  {
    id: 'battle-arena',
    cover: bloodAndWine,
    category: 'Прочие',
    url: '/other',
    heading: 'The Witcher Battle Arena',
    lightTheme: true,
    year: 2021,
    platforms: ['iOS', 'Android'],
    text: [
      'Серия компьютерных игр разработана польской компанией CD Projekt RED по мотивам одноимённой серии романов польского писателя Анджея Сапковского. Релиз первой игры на платформе Windows состоялся 24 октября 2007 года — в России, 26 октября — в Европе и 30 октября 2007 года — в США. В 2012 году вышла версия для OS X.',
    ],
  },
  {
    id: 'rise-of-the-white-wolf',
    cover: bloodAndWine,
    category: 'Прочие',
    url: '/other',
    heading: 'The Witcher: Rise of the White Wolf',
    lightTheme: false,
    year: 2021,
    platforms: ['iOS', 'Android'],
    text: [
      'Серия компьютерных игр разработана польской компанией CD Projekt RED по мотивам одноимённой серии романов польского писателя Анджея Сапковского. Релиз первой игры на платформе Windows состоялся 24 октября 2007 года — в России, 26 октября — в Европе и 30 октября 2007 года — в США. В 2012 году вышла версия для OS X.',
    ],
  },
  {
    id: 'crimson trail',
    cover: bloodAndWine,
    category: 'Прочие',
    url: '/other',
    heading: 'The Witcher: Crimson Trail',
    lightTheme: true,
    year: 2021,
    platforms: ['iOS', 'Android'],
    text: [
      'Серия компьютерных игр разработана польской компанией CD Projekt RED по мотивам одноимённой серии романов польского писателя Анджея Сапковского. Релиз первой игры на платформе Windows состоялся 24 октября 2007 года — в России, 26 октября — в Европе и 30 октября 2007 года — в США. В 2012 году вышла версия для OS X.',
    ],
  },
];

const allPages = [
  {
    id: 'main',
    cover: promoImageMain,
    category: 'Основные',
    url: '/',
    heading: 'О ведьмаке',
    text: [
      'Серия компьютерных игр разработана польской компанией CD Projekt RED по мотивам одноимённой серии романов польского писателя Анджея Сапковского. Релиз первой игры на платформе Windows состоялся 24 октября 2007 года — в России, 26 октября — в Европе и 30 октября 2007 года — в США. В 2012 году вышла версия для OS X.',
    ],
  },
  {
    id: 'online',
    cover: promoImageOnline,
    category: 'Онлайн',
    url: '/online',
    heading: 'Онлайн игры по Ведьмаку',
    text: [
      'Серия компьютерных игр разработана польской компанией CD Projekt RED по мотивам одноимённой серии романов польского писателя Анджея Сапковского. Релиз первой игры на платформе Windows состоялся 24 октября 2007 года — в России, 26 октября — в Европе и 30 октября 2007 года — в США. В 2012 году вышла версия для OS X.',
    ],
  },
  {
    id: 'other',
    cover: promoImageMain,
    category: 'Прочие',
    url: '/other',
    heading: 'Прочие игры по ведьмаку',
    text: [
      'Серия компьютерных игр разработана польской компанией CD Projekt RED по мотивам одноимённой серии романов польского писателя Анджея Сапковского. Релиз первой игры на платформе Windows состоялся 24 октября 2007 года — в России, 26 октября — в Европе и 30 октября 2007 года — в США. В 2012 году вышла версия для OS X.',
    ],
  },
];

export {
  allGames,
  allPages,
};
