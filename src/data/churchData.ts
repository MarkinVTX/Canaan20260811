import { Sermon, Ministry, ChurchEvent, PrayerRequest, StatementOfFaith } from '../types';

export const CHURCH_INFO = {
  nameEn: "Canaan Shin Sheng Christian Church",
  nameZh: "加南新生基督教會",
  chineseNameAlt: "Canaan New Life Christian Church",
  websiteUrl: "www.canaanshinsheng.org",
  annualThemeZh: "同心合一，興旺福音，建造教會",
  annualThemeEn: "United as One, Flourishing the Gospel, Building the Church",
  pastorZh: "孟蘇倫 牧師",
  pastorEn: "Rev. Meng Sulun",
  pastors: [
    { nameZh: "孟蘇倫 牧師", nameEn: "Rev. Meng Sulun", titleZh: "主講牧師", titleEn: "Guest Preacher" },
    { nameZh: "Ito 傳道", nameEn: "Evangelist Ito", titleZh: "傳道", titleEn: "Evangelist" },
    { nameZh: "鄭育青 弟兄", nameEn: "Brother Zheng Yuqing", titleZh: "司會 / 事工同工", titleEn: "Service Presider" },
  ],
  elders: [
    { titleZh: "長老", titleEn: "Elder", nameZh: "萬四 長老", nameEn: "Elder Wan", phone: "(310) 347-2010" },
    { titleZh: "長老", titleEn: "Elder", nameZh: "張文辛 長老", nameEn: "Elder Chang", phone: "(310) 468-3789" },
    { titleZh: "執事", titleEn: "Deacon", nameZh: "馬新民 執事", nameEn: "Deacon Ma", phone: "(310) 989-4528" },
  ],
  address: "25226 S. Western Ave, Harbor City, CA 90710",
  phone1: "(310) 626-6103",
  phone2: "(310) 347-2010",
  email: "ShinShengChurch@Gmail.com",
  denominationEn: "Independent Christian Church",
  denominationZh: "獨立基督教會 (Independent Church)",
  zoomId: "310-626-6103",
  zoomPasscode: "25226",
  establishedYear: 1984,
  zelleEmail: "ShinShengChurch@Gmail.com",
  zellePhone: "(310) 626-6103",
  checkPayableTo: "Canaan Shin Sheng Christian Church",
  googleMapsUrl: "https://maps.google.com/?q=25226+S.+Western+Ave,+Harbor+City,+CA+90710",
};

export const WEEKLY_BIBLE_READING = {
  memoryVerseZh: "你們要先求他的國和他的義，這些東西都要加給你們了。（馬太福音 6:33）",
  memoryVerseEn: "But seek first his kingdom and his righteousness, and all these things will be given to you as well. (Matthew 6:33)",
  verseReference: "馬太福音 6:33 / Matthew 6:33",
  schedule: [
    { date: "8/10 (週一)", oldTestament: "詩篇 79-80", newTestament: "羅馬書 11:1-18" },
    { date: "8/11 (週二)", oldTestament: "詩篇 81-83", newTestament: "羅馬書 11:19-36" },
    { date: "8/12 (週三)", oldTestament: "詩篇 84-86", newTestament: "羅馬書 12" },
    { date: "8/13 (週四)", oldTestament: "詩篇 87-88", newTestament: "羅馬書 13" },
    { date: "8/14 (週五)", oldTestament: "詩篇 89-90", newTestament: "羅馬書 14" },
    { date: "8/15 (週六)", oldTestament: "詩篇 91-93", newTestament: "羅馬書 15:1-13" },
    { date: "8/16 (週日)", oldTestament: "詩篇 94-96", newTestament: "羅馬書 15:14-33" },
  ]
};

export const WEEKLY_SCHEDULE = [
  {
    eventEn: "Sunday School",
    eventZh: "禮拜前主日學",
    timeEn: "Sundays at 10:00 AM",
    timeZh: "星期日 上午 10:00",
    locationEn: "Main Sanctuary & Classrooms",
    locationZh: "主堂與教室",
  },
  {
    eventEn: "Sunday Worship Service",
    eventZh: "禮拜聖會 (主日崇拜)",
    timeEn: "Sundays at 11:00 AM",
    timeZh: "星期日 上午 11:00",
    locationEn: "Main Worship Hall / Live Stream",
    locationZh: "主堂禮拜堂 / 線上禮拜",
  },
  {
    eventEn: "Fellowship Lunch",
    eventZh: "聖徒交通會餐 (愛宴)",
    timeEn: "Sundays at 12:30 PM",
    timeZh: "星期日 下午 12:30",
    locationEn: "Fellowship Hall",
    locationZh: "副堂會餐廳",
  },
  {
    eventEn: "Choir Practice",
    eventZh: "詩班練歌",
    timeEn: "Sundays at 1:00 PM",
    timeZh: "星期日 下午 1:00",
    locationEn: "Choir Room",
    locationZh: "詩班室",
  },
  {
    eventEn: "Thursday Online Prayer Meeting",
    eventZh: "禱告會 (線上 Zoom)",
    timeEn: "Thursdays at 8:00 PM",
    timeZh: "星期四 晚上 8:00",
    locationEn: "Zoom ID: 310-626-6103 (Passcode: 25226)",
    locationZh: "Zoom ID: 310-626-6103 (密碼: 25226)",
  },
  {
    eventEn: "Cell Group Fellowship",
    eventZh: "細胞小組 (每月兩次)",
    timeEn: "Bi-weekly Saturdays at 2:00 PM",
    timeZh: "星期六 下午 2:00 (每月兩次)",
    locationEn: "Member Homes / Church",
    locationZh: "弟兄姊妹家中 / 教會",
  },
  {
    eventEn: "Hiking & Health Group",
    eventZh: "健行小組 (每月一次)",
    timeEn: "Monthly Saturday at 9:30 AM",
    timeZh: "星期六 上午 9:30 (每月一次)",
    locationEn: "Local South Bay Trails",
    locationZh: "南灣步道與公園",
  }
];

export const RECENT_SERMONS: Sermon[] = [
  {
    id: "sermon-1",
    title: "Is Life Really Gone in the Blink of an Eye?",
    titleZh: "人生真的轉眼成空嗎？",
    speaker: "Rev. Meng Sulun",
    speakerZh: "孟蘇倫 牧師",
    date: "2026-08-09",
    scripture: "Ecclesiastes 1:2-3",
    scriptureZh: "傳道書第 1 章第 2-3 節",
    series: "Sunday Message",
    seriesZh: "主日證道",
    summary: "Reflecting on Ecclesiastes on the brevity of earthly labor and discovering eternal purpose and heavenly peace in God.",
    summaryZh: "『傳道者說：虛空的虛空，虛空的虛空，凡事都是虛空。人在日光之下的勞碌，有什麼益處呢？』在日光之下尋找上帝賜予永恆的生命目的與公義冠冕。",
    points: [
      "Vanity under the sun — Ecclesiastes 1:2-3",
      "Everything beautiful in its time — Ecclesiastes 3:11",
      "The whole duty of humanity — Ecclesiastes 12:13"
    ],
    pointsZh: [
      "日光之下的虛空 — 傳道書 1:2-3",
      "神造萬物，各按其時成為美好 — 傳道書 3:11",
      "人所當盡的分 — 傳道書 12:13"
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "sermon-2",
    title: "Abiding in Grace & Serving with Faithfulness",
    titleZh: "忠心忠僕，靠主行事",
    speaker: "Evangelist Ito",
    speakerZh: "Ito 傳道",
    date: "2026-08-16",
    scripture: "Romans 12:1-2",
    scriptureZh: "羅馬書 12:1-2",
    series: "Upcoming Sunday Message",
    seriesZh: "下主日證道預告",
    summary: "Upcoming message by Evangelist Ito on presenting our lives as living sacrifices holy and pleasing to God.",
    summaryZh: "預告下主日由 Ito 傳道證道分享，勸勉弟兄姊妹將身體獻上當作活祭，忠心傳講神的話語。",
    points: [
      "Living sacrifices, holy and pleasing to God",
      "Renewing your mind through scripture",
      "Serving with wisdom, love, and spiritual strength"
    ],
    pointsZh: [
      "將身體獻上，當作活祭，是聖潔的，是神所喜悅的",
      "心意更新而變化，察驗神的旨意",
      "以智慧、愛心與屬靈大能忠心事奉"
    ]
  },
  {
    id: "sermon-3",
    title: "Walking in the Newness of Life",
    titleZh: "在生命的樣式中走新路",
    speaker: "Rev. Meng Sulun",
    speakerZh: "孟蘇倫 牧師",
    date: "2026-08-02",
    scripture: "Romans 6:1-11",
    scriptureZh: "羅馬書 6:1-11",
    series: "Renewed Grace in Christ",
    seriesZh: "基督裡的更新恩典",
    summary: "Reflecting on our burial with Christ through baptism and resurrection power into walking daily in vibrant spiritual life.",
    summaryZh: "省思我們藉著洗禮與基督同死、同埋葬，並領受復活的大能，在日常生活中走出一條更新的屬靈道路。",
    points: [
      "Dead to sin, alive to God in Christ Jesus",
      "Walking as new creations in daily family and work settings",
      "Yielding our hearts as instruments of righteousness"
    ],
    pointsZh: [
      "向罪是死的，在基督耶穌裡向神卻是活的",
      "在日常家庭與工作中展現新造的人之樣貌",
      "將我們的心獻給神，作為義的器具"
    ]
  }
];

export const MINISTRIES: Ministry[] = [
  {
    id: "sunday-school",
    name: "Sunday School Ministry",
    nameZh: "禮拜前主日學 (成人與兒童)",
    leader: "Sunday School Teachers",
    leaderZh: "主日學教務同工",
    description: "In-depth Bible teaching before morning service, training teachers and lesson preparation for all ages.",
    descriptionZh: "崇拜前的主日學真理教導，裝備弟兄姊妹、栽培主日學講師與備課同工。",
    meetingTime: "Sundays 10:00 AM",
    meetingTimeZh: "星期日 上午 10:00",
    location: "Education Wing Classrooms",
    locationZh: "主堂與教室",
    iconName: "BookOpen",
    tags: ["Education", "Bible Study", "All Ages"]
  },
  {
    id: "worship-choir",
    name: "Choir & Music Ministry",
    nameZh: "詩班獻詩與聖樂讚美",
    leader: "Choir Director",
    leaderZh: "詩班指揮與同工",
    description: "Rehearsing sacred choral anthems and leading congregation praise every Sunday morning.",
    descriptionZh: "每主日早晨與午後進行詩班練歌，引領會眾同心讚美，獻上最美的詩歌。",
    meetingTime: "Sundays 1:00 PM",
    meetingTimeZh: "星期日 下午 1:00",
    location: "Choir Room",
    locationZh: "詩班室",
    iconName: "Music",
    tags: ["Music", "Worship", "Sunday"]
  },
  {
    id: "thursday-prayer",
    name: "Thursday Night Zoom Prayer Meeting",
    nameZh: "週四線上守望禱告會",
    leader: "Pastoral Team",
    leaderZh: "教務同工",
    description: "Gathering online via Zoom every Thursday at 8:00 PM to intercede for church, family health, and community needs.",
    descriptionZh: "每週四晚上 8:00 透過 Zoom 線上連線，同心為肢體健康、空調工程修繕、青年事工與福音外展守望禱告。",
    meetingTime: "Thursdays 8:00 PM",
    meetingTimeZh: "星期四 晚上 8:00",
    location: "Zoom ID: 8927547290 (Passcode: 25226)",
    locationZh: "Zoom ID: 8927547290 (密碼: 25226)",
    iconName: "HeartHandshake",
    tags: ["Prayer", "Zoom", "Intercession"]
  },
  {
    id: "cell-groups",
    name: "Cell Groups & Small Fellowship",
    nameZh: "細胞小組 (每月兩次)",
    leader: "Cell Group Leaders",
    leaderZh: "小組長與同工",
    description: "Bi-weekly fellowship, mutual encouragement, Bible discussion, and caring for member families.",
    descriptionZh: "每月兩次於週六下午舉行細胞小組，透過聖經研討、生活分享與愛心扶持，建立緊密的信仰社群。",
    meetingTime: "Bi-weekly Saturdays 2:00 PM",
    meetingTimeZh: "星期六 下午 2:00 (每月兩次)",
    location: "Member Homes / Church",
    locationZh: "弟兄姊妹家中 / 教會",
    iconName: "Users",
    tags: ["Small Group", "Cell", "Fellowship"]
  },
  {
    id: "hiking-group",
    name: "Hiking & Outdoor Wellness Group",
    nameZh: "健行小組 (每月一次)",
    leader: "Outdoor Ministry Team",
    leaderZh: "健行小組同工",
    description: "Monthly Saturday morning trail walks, lunch fellowship, and short spiritual devotions outdoors.",
    descriptionZh: "每月一次於週六上午進行南灣步道健行，享受上帝創造的大自然，並有午餐與短講分享。",
    meetingTime: "Monthly Saturday 9:30 AM",
    meetingTimeZh: "星期六 上午 9:30 (每月一次)",
    location: "South Bay Trails & Parks",
    locationZh: "南灣步道與公園",
    iconName: "Compassion",
    tags: ["Outreach", "Fitness", "Fellowship"]
  },
  {
    id: "youth-ministry",
    name: "NextGen & Youth Ministry",
    nameZh: "青年事工與年輕世代培育",
    leader: "Youth Staff & Pastor",
    leaderZh: "青年事工輔導",
    description: "Nurturing young adults and youth to be rooted in biblical truth and grow together in fellowship.",
    descriptionZh: "帶領更多年輕兄弟姊妹來到教會，在真理中扎根，在團契中彼此扶持、成長，成為神的器皿。",
    meetingTime: "Saturdays / Sundays",
    meetingTimeZh: "週六聚會 / 主日靈修",
    location: "Church Fellowship Hall",
    locationZh: "副堂青少年中心",
    iconName: "Users",
    tags: ["Youth", "NextGen", "Growth"]
  }
];

export const UPCOMING_EVENTS: ChurchEvent[] = [
  {
    id: "event-1",
    title: "Sunday Service & Holy Communion",
    titleZh: "禮拜聖會 (主日崇拜)",
    date: "2026-08-16",
    time: "11:00 AM - 12:30 PM",
    timeZh: "上午 11:00 - 中午 12:30",
    location: "Main Worship Hall / Live Stream",
    locationZh: "主堂禮拜堂 / 線上禮拜",
    description: "Presided by Brother Zheng Yuqing, message by Evangelist Ito. Followed by fellowship lunch at 12:30 PM.",
    descriptionZh: "由鄭育青弟兄司會，Ito 傳道證道分享神的話語。崇拜後備有 12:30 聖徒交通會餐。",
    category: "worship"
  },
  {
    id: "event-2",
    title: "Thursday Night Zoom Prayer Meeting",
    titleZh: "週四線上守望禱告會",
    date: "2026-08-13",
    time: "8:00 PM - 9:15 PM",
    timeZh: "晚上 8:00 - 9:15",
    location: "Zoom ID: 8927547290 (Passcode: 25226)",
    locationZh: "Zoom ID: 8927547290 (密碼: 25226)",
    description: "Intercessory prayer for church facility upgrades, youth ministry, sick members, and local outreach.",
    descriptionZh: "同心為教會冷氣安裝工程、青年事工、同工會及肢體健康守望禱告。請大家踴躍參加。",
    category: "prayer",
    zoomId: "8927547290"
  },
  {
    id: "event-3",
    title: "Cell Group Fellowship Gathering",
    titleZh: "細胞小組聚會 (每月兩次)",
    date: "2026-08-22",
    time: "2:00 PM - 4:00 PM",
    timeZh: "下午 2:00 - 4:00",
    location: "Fellowship Hall & Member Homes",
    locationZh: "教會副堂與弟兄姊妹家中",
    description: "Bi-weekly cell group discussion, prayer, and encouragement.",
    descriptionZh: "每月兩次的小組查經分享與愛心關懷，歡迎同心建造。",
    category: "fellowship"
  }
];

export const STATEMENT_OF_FAITH: StatementOfFaith[] = [
  {
    title: "The Holy Trinity",
    titleZh: "三位一體的神",
    content: "We believe in one God, eternally existing in three Persons: Father, Son, and Holy Spirit, co-equal in power and glory.",
    contentZh: "我們相信獨一真神，永恆存在於父、子、聖靈三個位格中，同權、同榮、同尊。",
    verses: ["Matthew 28:19", "2 Corinthians 13:14"]
  },
  {
    title: "Authority of Holy Scripture",
    titleZh: "聖經的權威",
    content: "We believe the Bible, both Old and New Testaments, is the divinely inspired, infallible Word of God and supreme rule for faith and living.",
    contentZh: "我們相信新舊約聖經皆為上帝所默示的無誤神的話語，是我們信仰與生活的最高準則。",
    verses: ["2 Timothy 3:16-17", "Psalm 119:105"]
  },
  {
    title: "Salvation Through Christ Alone",
    titleZh: "唯獨基督的救恩",
    content: "We believe salvation is received purely by grace through faith in Jesus Christ, who died for our sins and rose bodily from the dead.",
    contentZh: "我們相信拯救唯獨靠著神的恩典、因信耶穌基督而得，耶穌為我們的罪釘死在十字架上，並從死裡身體復活。",
    verses: ["Ephesians 2:8-9", "John 14:6"]
  },
  {
    title: "The Church & Great Commission",
    titleZh: "教會與大使命",
    content: "We believe the Church is the body of Christ called to worship God, build up believers, love our neighbors, and make disciples of all nations.",
    contentZh: "我們相信教會是基督的身體，受召敬拜神、建立信徒、愛鄰舍，並廣傳福音使萬民作主的門徒。",
    verses: ["Matthew 28:18-20", "Hebrews 10:24-25"]
  }
];

export const CHURCH_HISTORY_MILESTONES = [
  {
    year: "1984",
    titleEn: "Founding of Canaan Shin Sheng",
    titleZh: "加南新生基督教會創立",
    descEn: "Established as a gospel beacon serving South Bay Taiwanese and Chinese families, holding its inaugural worship service.",
    descZh: "於南灣地區成立，舉行首屆開拓主日崇拜，成為事奉華人與台胞家庭的福音燈塔。"
  },
  {
    year: "1996",
    titleEn: "Sanctuary Acquisition in Harbor City",
    titleZh: "購入海港城現址聖堂",
    descEn: "Acquired and dedicated the permanent church facility located at 25226 S. Western Ave, Harbor City, CA.",
    descZh: "順利購得位於 Harbor City S. Western Ave 現址之自屬聖堂，展開定居深耕與社區宣教。"
  },
  {
    year: "2012",
    titleEn: "Independent Nondenominational Church",
    titleZh: "自立獨立基督教會",
    descEn: "Operating as an independent nondenominational Christian church led by the board of elders, deacons, and pastoral team.",
    descZh: "成為獨立基督教會，由長執同工會與事工同工共同推動教牧與社區宣教事工。"
  },
  {
    year: "2026",
    titleEn: "United as One, Flourishing the Gospel",
    titleZh: "同心合一，興旺福音，建造教會",
    descEn: "Continuing under our annual theme to build up youth, strengthen Sunday school, update facilities, and praise God together.",
    descZh: "以「同心合一，興旺福音，建造教會」為標題，更新冷氣設備與招牌，推動青年事工、健行小組與週四線上禱告會。"
  }
];

export const INITIAL_PRAYERS: PrayerRequest[] = [
  {
    id: "prayer-1",
    author: "教會同工會",
    category: "general",
    title: "為教會冷氣安裝工程與招牌設計代禱",
    content: "感謝主！冷氣安裝過程順利，請繼續為招牌的設計與製作守望，求主賜下來自神的智慧與力量，使一切按著神美善的旨意成就。",
    date: "2026-08-09",
    isConfidential: false,
    prayedCount: 31
  },
  {
    id: "prayer-2",
    author: "教育部同工",
    category: "faith",
    title: "為青年事工與主日學備課同工守望",
    content: "求主賜福教會青年事工，帶領更多年輕兄弟姊妹來到教會在真理中扎根；並賜智慧與愛心給主日學講師與備課同工，渴慕真理。",
    date: "2026-08-08",
    isConfidential: false,
    prayedCount: 28
  },
  {
    id: "prayer-3",
    author: "關懷小組",
    category: "health",
    title: "為長者與會友身體健康關懷禱告",
    content: "請為萬四長老、張文辛長老與馬新民執事及全體會友關懷服事禱告，求主保守長輩身體康健、平安喜樂。",
    date: "2026-08-05",
    isConfidential: false,
    prayedCount: 24
  }
];
