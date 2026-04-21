export type Proverb = {
  id: string;
  text: string;
  meaning: string;
  origin: string;
  century: string;
  theme: string;
  englishEquivalent?: string;
  englishText?: string;
  tags: string[];
};

export const themes = [
  { id: 'wisdom', label: 'Мудрость', emoji: '🦉' },
  { id: 'work', label: 'Труд', emoji: '⚒️' },
  { id: 'family', label: 'Семья', emoji: '🏡' },
  { id: 'time', label: 'Время', emoji: '⏳' },
  { id: 'friendship', label: 'Дружба', emoji: '🤝' },
  { id: 'truth', label: 'Правда', emoji: '⚖️' },
  { id: 'nature', label: 'Природа', emoji: '🌿' },
  { id: 'money', label: 'Деньги', emoji: '💰' },
];

export const proverbs: Proverb[] = [
  {
    id: '1',
    text: 'Без труда не вытащишь и рыбку из пруда',
    meaning: 'Любое дело требует усилий и терпения. Без упорного труда нельзя достичь желаемого результата.',
    origin: 'Пришла из крестьянского быта, отражает наблюдение за трудом рыбаков и земледельцев.',
    century: 'XVII',
    theme: 'work',
    englishText: 'No pain, no gain',
    englishEquivalent: 'Без боли нет результата',
    tags: ['труд', 'терпение', 'результат'],
  },
  {
    id: '2',
    text: 'Слово не воробей, вылетит — не поймаешь',
    meaning: 'Сказанное слово нельзя взять обратно. Нужно тщательно обдумывать свои слова перед тем, как их произнести.',
    origin: 'Образ воробья — быстрой и юркой птицы — метафора безвозвратности сказанного.',
    century: 'XVIII',
    theme: 'wisdom',
    englishText: 'A word spoken is past recalling',
    englishEquivalent: 'Сказанное слово нельзя вернуть',
    tags: ['слова', 'осторожность', 'речь'],
  },
  {
    id: '3',
    text: 'В гостях хорошо, а дома лучше',
    meaning: 'Каким бы прекрасным ни было чужое жильё, дом — самое родное и комфортное место.',
    origin: 'Отражает патриархальные ценности русской культуры, где дом — центр вселенной.',
    century: 'XVII',
    theme: 'family',
    englishText: 'East or West, home is best',
    englishEquivalent: 'Восток или Запад — дома лучше всего',
    tags: ['дом', 'семья', 'уют'],
  },
  {
    id: '4',
    text: 'Не откладывай на завтра то, что можно сделать сегодня',
    meaning: 'Промедление и откладывание дел приводит к их накоплению и упущенным возможностям.',
    origin: 'Пословица встречается у многих народов мира, отражает универсальную мудрость о борьбе с прокрастинацией.',
    century: 'XIX',
    theme: 'time',
    englishText: 'Never put off till tomorrow what you can do today',
    englishEquivalent: 'Никогда не откладывай на завтра то, что можешь сделать сегодня',
    tags: ['время', 'дела', 'ответственность'],
  },
  {
    id: '5',
    text: 'Не имей сто рублей, а имей сто друзей',
    meaning: 'Настоящая дружба ценнее любых материальных благ. Друзья всегда помогут в трудную минуту.',
    origin: 'Возникла в эпоху, когда сто рублей было значительной суммой. Подчёркивает духовные ценности над материальными.',
    century: 'XVIII',
    theme: 'friendship',
    englishText: 'A good friend is worth more than a hundred relatives',
    englishEquivalent: 'Хороший друг ценнее ста родственников',
    tags: ['дружба', 'деньги', 'ценности'],
  },
  {
    id: '6',
    text: 'Правда глаза колет',
    meaning: 'Истина порой бывает неприятна и болезненна для восприятия, но именно она делает нас лучше.',
    origin: 'Образ "колоть глаза" — причинять боль — передаёт дискомфорт от услышанной правды.',
    century: 'XVII',
    theme: 'truth',
    englishText: 'The truth hurts',
    englishEquivalent: 'Правда ранит',
    tags: ['правда', 'честность', 'боль'],
  },
  {
    id: '7',
    text: 'Лес рубят — щепки летят',
    meaning: 'При масштабных преобразованиях неизбежны потери и жертвы среди незначительных участников событий.',
    origin: 'Метафора из лесоповала, описывающая побочный ущерб при достижении крупных целей.',
    century: 'XIX',
    theme: 'nature',
    englishText: 'You cannot make an omelette without breaking eggs',
    englishEquivalent: 'Нельзя приготовить омлет, не разбив яиц',
    tags: ['жертвы', 'последствия', 'масштаб'],
  },
  {
    id: '8',
    text: 'Деньги — не главное, но без них как-то грустно',
    meaning: 'Ироничное признание того, что хотя деньги и не цель жизни, материальный достаток важен для комфорта.',
    origin: 'Современная народная мудрость, отражающая прагматичный взгляд на роль денег в жизни.',
    century: 'XX',
    theme: 'money',
    englishText: 'Money is not everything, but it is reasonably close to oxygen',
    englishEquivalent: 'Деньги — не всё, но они близки к кислороду',
    tags: ['деньги', 'жизнь', 'ирония'],
  },
  {
    id: '9',
    text: 'Один в поле не воин',
    meaning: 'Человек в одиночку не может противостоять трудностям. Только в единстве — сила.',
    origin: 'Пришла из военной терминологии, описывает невозможность победить в одиночку.',
    century: 'XVII',
    theme: 'friendship',
    englishText: 'United we stand, divided we fall',
    englishEquivalent: 'Вместе стоим, врозь падаем',
    tags: ['единство', 'сила', 'команда'],
  },
  {
    id: '10',
    text: 'Тише едешь — дальше будешь',
    meaning: 'Осторожность и неторопливость лучше спешки. Медленное, но верное движение к цели надёжнее.',
    origin: 'Дорожная метафора о безопасности езды верхом. Актуальна во все времена.',
    century: 'XVIII',
    theme: 'wisdom',
    englishText: 'Slow and steady wins the race',
    englishEquivalent: 'Медленный и методичный побеждает в гонке',
    tags: ['терпение', 'осторожность', 'путь'],
  },
  {
    id: '11',
    text: 'Яблоко от яблони недалеко падает',
    meaning: 'Дети, как правило, наследуют черты характера и поведение своих родителей.',
    origin: 'Наблюдение за природой: плод падает рядом с деревом, которое его породило.',
    century: 'XVIII',
    theme: 'family',
    englishText: 'The apple doesn\'t fall far from the tree',
    englishEquivalent: 'Яблоко не падает далеко от дерева',
    tags: ['семья', 'наследие', 'характер'],
  },
  {
    id: '12',
    text: 'Утро вечера мудренее',
    meaning: 'После отдыха решение принять проще. Сложные вопросы лучше откладывать на свежую голову.',
    origin: 'Отражает народное наблюдение за работой сознания: после сна мысли становятся яснее.',
    century: 'XVI',
    theme: 'time',
    englishText: 'Sleep on it',
    englishEquivalent: 'Поспи с этой мыслью',
    tags: ['сон', 'решения', 'мудрость'],
  },
];

export const stats = {
  total: proverbs.length,
  themes: themes.length,
  centuries: 7,
  comparisons: proverbs.filter(p => p.englishText).length,
};
