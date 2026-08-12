import { ServiceTime, Ministry, Sermon, ChurchEvent, TranslationDict, PrayerRequest } from './types';

export const TRANSLATIONS: TranslationDict = {
  // Navigation
  navHome: { en: 'Home', zh: '首頁' },
  navServices: { en: 'Services', zh: '崇拜聚會' },
  navMinistries: { en: 'Ministries', zh: '事工與團契' },
  navSermons: { en: 'Sermons', zh: '主日講道' },
  navEvents: { en: 'Events', zh: '最新活動' },
  navPrayer: { en: 'Prayer Requests', zh: '代禱事項' },
  navGive: { en: 'Give', zh: '奉獻支持' },
  navBible: { en: 'Bible Search', zh: '聖經搜尋' },
  navAbout: { en: 'About & Faith', zh: '教會歷史與信仰' },
  navContact: { en: 'Contact', zh: '聯絡我們' },

  // Hero Section
  heroTitle: { en: 'Canaan Shin Sheng Christian Church', zh: '迦南新生基督教會' },
  heroSubtitle: { en: 'A warm, bible-believing, Christ-centered family where lives are renewed and faith comes alive.', zh: '一個溫馨、信守聖經、以基督為中心的大家庭，在這裡生命得以更新，信仰充滿活力。' },
  welcomeMessage: { en: 'Welcome Home', zh: '歡迎回家' },
  joinUsButton: { en: 'Join Our Sunday Worship', zh: '參加我們的主日崇拜' },
  viewSchedule: { en: 'Service Schedule', zh: '聚會時間表' },
  verseOfTheDay: { en: 'Verse of the Day', zh: '今日金句' },
  verseText: { en: '"He has filled the hungry with good things, and the rich he has sent away empty." — Luke 1:53', zh: '「祂叫飢餓的得飽美食，叫富足的空手回去。」—— 路加福音 1:53' },

  // Service Times Section
  servicesHeader: { en: 'Worship with Us', zh: '與我們一同敬拜' },
  servicesSub: { en: 'We gather together weekly to praise God, study His Word, and fellowship with one another. Join us in person or online.', zh: '我們每週聚集，讚美神、學習祂的話語，並彼此相交。歡迎親臨或線上參與。' },
  sundayWorship: { en: 'Sunday Worship Service', zh: '主日崇拜聚會' },
  childrenSundaySchool: { en: 'Children\'s Sunday School', zh: '兒童主日學' },
  youthFellowship: { en: 'Youth Fellowship', zh: '青年團契' },
  prayerMeeting: { en: 'Weekly Prayer Meeting', zh: '週三禱告會' },
  watchLive: { en: 'Watch Live Stream', zh: '觀看直播' },
  onlinePlatform: { en: 'Available on YouTube and Zoom', zh: '可於 YouTube 及 Zoom 觀看' },

  // Ministries
  ministriesHeader: { en: 'Our Ministries', zh: '教會事工與團契' },
  ministriesSub: { en: 'There is a place for everyone to grow, connect, and serve. Find where you belong.', zh: '這裡有適合每個人成長、建立連結和服務的地方。尋找屬於您的歸宿。' },

  // Sermons
  sermonsHeader: { en: 'Sermon Archive', zh: '主日講道回顧' },
  sermonsSub: { en: 'Listen to past messages, search by speaker, or filter by topic to deepen your walk with God.', zh: '聆聽過往信息、按講員搜尋或按主題篩選，以深化您與神的同行。' },
  searchSermons: { en: 'Search sermons, scriptures or speakers...', zh: '搜尋講道、經文或講員...' },
  allSpeakers: { en: 'All Speakers', zh: '所有講員' },
  listenNow: { en: 'Listen Now', zh: '立即聆聽' },
  watchVideo: { en: 'Watch Video', zh: '觀看影片' },
  readSummary: { en: 'Read Summary', zh: '閱讀摘要' },
  audioPlayer: { en: 'Sermon Audio Player', zh: '講道音訊播放器' },

  // Events
  eventsHeader: { en: 'Upcoming Events & News', zh: '最新活動與消息' },
  eventsSub: { en: 'Keep up to date with what\'s happening at Canaan Shin Sheng. Join us for connection and community.', zh: '隨時掌握迦南新生教會的最新動態。加入我們的聚會與社區。' },
  registerButton: { en: 'Register / Sign Up', zh: '立即報名 / 登記' },
  registeredSuccess: { en: 'Thank you for registering! We have reserved your spot.', zh: '感謝您的報名！我們已為您保留名額。' },
  spotsRemaining: { en: 'spots left', zh: '個剩餘名額' },
  joiningCount: { en: 'attending', zh: '人已報名' },

  // Prayer Request
  prayerHeader: { en: 'Prayer Wall', zh: '代禱之牆' },
  prayerSub: { en: 'We believe in the power of prayer. Share your requests anonymously or with your name, and let our community lift you up in prayer.', zh: '我們深信禱告的力量。不論具名或匿名分享您的代禱需要，讓我們一同在禱告中扶持您。' },
  submitPrayer: { en: 'Submit a Prayer Request', zh: '提交代禱請求' },
  prayerFormName: { en: 'Your Name (Leave blank for Anonymous)', zh: '您的姓名（留空則為匿名）' },
  prayerFormContent: { en: 'How can we pray for you?', zh: '我們能為您代禱什麼？' },
  submitButton: { en: 'Submit Request', zh: '提交請求' },
  prayForThis: { en: 'Pray for this', zh: '為此代禱' },
  prayedSuccess: { en: 'You prayed for this request.', zh: '您已為此代禱。' },

  // Giving
  givingHeader: { en: 'Generosity & Giving', zh: '奉獻與支持' },
  givingSub: { en: 'Your tithes and offerings support our local ministries, outreach efforts, and global mission partnerships. Thank you for your faithfulness.', zh: '您的什一奉獻與奉獻支持我們本地的事工、外展工作以及全球宣教夥伴。感謝您的忠心。' },
  waysToGive: { en: 'Ways to Give', zh: '奉獻方式' },
  zelleTitle: { en: 'Zelle Electronic Transfer', zh: 'Zelle 電子轉帳' },
  zelleInstructions: { en: 'Send to church email: finance@canaanshinsheng.org', zh: '發送至教會信箱：finance@canaanshinsheng.org' },
  checkTitle: { en: 'Mail a Check', zh: '郵寄支票' },
  checkInstructions: { en: 'Payable to "Canaan Shin Sheng Christian Church". Mail to: 1200 Church Road, Cupertino, CA 95014', zh: '支票抬頭請寫 "Canaan Shin Sheng Christian Church"，郵寄至：1200 Church Road, Cupertino, CA 95014' },
  offeringTitle: { en: 'In-Person Offering', zh: '主日親自奉獻' },
  offeringInstructions: { en: 'Offerings can be placed in the giving boxes located at the back of the sanctuary.', zh: '奉獻可投入大堂後方的奉獻箱內。' },
  copiedEmail: { en: 'Email copied to clipboard!', zh: '電子郵件已複製到剪貼簿！' },
  copiedAddress: { en: 'Address copied to clipboard!', zh: '地址已複製到剪貼簿！' },
  copyButton: { en: 'Copy', zh: '複製' },

  // Contact
  contactHeader: { en: 'Get in Touch', zh: '與我們聯絡' },
  contactSub: { en: 'Have questions, need prayer, or want to know more about our church? Reach out to our pastoral team.', zh: '有任何問題、需要代禱，或想更深入了解我們的教會？請與我們的牧者團隊聯絡。' },
  formName: { en: 'Full Name', zh: '姓名' },
  formEmail: { en: 'Email Address', zh: '電子郵件' },
  formSubject: { en: 'Subject', zh: '主題' },
  formMessage: { en: 'Message', zh: '信息內容' },
  sendMessage: { en: 'Send Message', zh: '發送信息' },
  messageSent: { en: 'Thank you! Your message has been sent. Our team will contact you soon.', zh: '謝謝！您的信息已送出。我們的團隊將很快與您聯絡。' },
  churchLocation: { en: 'Church Location', zh: '聚會地點' },
  contactInfo: { en: 'Contact Information', zh: '聯絡資訊' },
  officeHours: { en: 'Office Hours', zh: '辦公時間' },
  officeHoursText: { en: 'Tuesday - Saturday: 9:00 AM - 5:00 PM', zh: '週二至週六：上午 9:00 - 下午 5:00' },
};

export const SERVICE_TIMES: ServiceTime[] = [
  {
    id: 's1',
    name: {
      en: 'Pre-Service Sunday School',
      zh: '禮拜前主日學'
    },
    time: {
      en: 'Sundays at 10:00 AM',
      zh: '每週日 上午 10:00'
    },
    location: {
      en: 'Sanctuary & Classrooms',
      zh: '主堂及各團契教室'
    },
    description: {
      en: 'A dedicated scripture study and devotional preparation before the main Sunday worship service.',
      zh: '主日聖會前的專題聖經研讀、靈修與身心預備。'
    }
  },
  {
    id: 's2',
    name: {
      en: 'Sunday Worship Service',
      zh: '禮拜聖會'
    },
    time: {
      en: 'Sundays at 11:00 AM',
      zh: '每週日 上午 11:00'
    },
    location: {
      en: 'Main Sanctuary & Live Stream',
      zh: '大堂崇拜 & 網路直播'
    },
    description: {
      en: 'Our primary corporate worship gathering featuring hymn singing, scripture reading, pastoral sermon, and Holy Communion.',
      zh: '教會最核心的主日崇拜聖會，包含詩歌讚美、聖經朗讀、牧者證道及聖餐。'
    }
  },
  {
    id: 's3',
    name: {
      en: 'Saints Fellowship Lunch',
      zh: '聖徒交通會餐'
    },
    time: {
      en: 'Sundays at 12:30 PM',
      zh: '每週日 中午 12:30'
    },
    location: {
      en: 'Fellowship Hall',
      zh: '副堂 / 交通會餐廳'
    },
    description: {
      en: 'A warm fellowship meal after Sunday service where church family, visitors, and friends connect and share lives over food.',
      zh: '崇拜結束後全體聖徒共進午餐，讓會友、新朋友與家庭在愛中交流與相聚。'
    }
  },
  {
    id: 's4',
    name: {
      en: 'Choir Practice',
      zh: '詩班練歌'
    },
    time: {
      en: 'Sundays at 1:00 PM',
      zh: '每週日 下午 1:00'
    },
    location: {
      en: 'Music Room / Choir Loft',
      zh: '詩班練歌房 / 獻詩席'
    },
    description: {
      en: 'Weekly practice for choir members to rehearse vocal praise pieces and prepare for worship service music ministry.',
      zh: '詩班團員每週主日午後例行練歌、合聲練習及聖詩事工預備。'
    }
  },
  {
    id: 's5',
    name: {
      en: 'Weekly Prayer Meeting',
      zh: '每週禱告會'
    },
    time: {
      en: 'Wednesdays at 7:30 PM',
      zh: '每週三 晚上 7:30'
    },
    location: {
      en: 'Grace Chapel & Online via Zoom',
      zh: '恩典副堂 & 線上 Zoom 聚會'
    },
    description: {
      en: 'A quiet time of corporate prayer, scripture meditation, and intercession for our community and global missions.',
      zh: '會眾共同禱告、默想聖經的安靜時光，為我們的社區和全球宣教代求。'
    }
  }
];

export const MINISTRIES: Ministry[] = [
  {
    id: 'm1',
    name: {
      en: 'Worship Ministry',
      zh: '敬拜事工'
    },
    tagline: {
      en: 'Praising God with hearts and voices',
      zh: '以心靈和聲音讚美真神'
    },
    description: {
      en: 'Our worship team guides the congregation into God\'s presence through modern songs and traditional hymns, utilizing acoustic, electric, vocal, and audiovisual support.',
      zh: '我們的敬拜小組透過現代詩歌和傳統聖詩，結合吉他、電子琴、和聲以及影音支援，帶領會眾進入神的同在。'
    },
    meetingTime: {
      en: 'Rehearsals: Thursdays at 7:00 PM',
      zh: '彩排時間：每週四晚上 7:00'
    },
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'm2',
    name: {
      en: 'Children & Family Ministry',
      zh: '兒童與家庭事工'
    },
    tagline: {
      en: 'Building strong foundations in Christ',
      zh: '在基督裡建立穩固的根基'
    },
    description: {
      en: 'Dedicated to helping children understand God\'s love, memorize scripture, and make friendships. We offer specialized nursery care and children\'s chapel program.',
      zh: '致力於幫助孩子們明白神的愛、背誦聖經並建立友誼。我們提供專業的嬰兒看護與兒童崇拜活動。'
    },
    meetingTime: {
      en: 'Sundays at 9:30 AM & 11:15 AM',
      zh: '每週日上午 9:30 及 11:15'
    },
    image: 'https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'm3',
    name: {
      en: 'Youth & Young Adults',
      zh: '青少年與青年團契'
    },
    tagline: {
      en: 'Living authentically in a complex world',
      zh: '在複雜的世界中活出真實信仰'
    },
    description: {
      en: 'A space for middle/high schoolers and college students to ask honest questions, study the Bible, serve together, and build lifelong friendships through trips, camps, and meetings.',
      zh: '為初高中生和大學生提供一個坦誠發問、查考聖經、共同服務的空間，透過退修會、營會和定期聚會建立終身友誼。'
    },
    meetingTime: {
      en: 'Fridays at 7:30 PM',
      zh: '每週五晚上 7:30'
    },
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'm4',
    name: {
      en: 'Adult Small Groups & Fellowships',
      zh: '成人小組與團契'
    },
    tagline: {
      en: 'Doing life together in deep community',
      zh: '在緊密連結的社區中共享生命'
    },
    description: {
      en: 'Life is better together. Our small groups meet in homes and online across the Harbor City and South Bay / Los Angeles area to share meals, pray, support one another, and grow in faith.',
      zh: '生活因彼此相伴而更美。我們的小組在 Harbor City 及南加州 South Bay 地區的家庭及線上聚會，分享愛筵、禱告、彼此扶持，並在信仰中一同成長。'
    },
    meetingTime: {
      en: 'Various days and locations weekly',
      zh: '每週不同時間與地點（請洽同工）'
    },
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'm5',
    name: {
      en: 'Caring & Outreach Ministry',
      zh: '關懷與外展事工'
    },
    tagline: {
      en: 'Sharing Christ\'s love through service',
      zh: '藉由實際服務傳遞基督的愛'
    },
    description: {
      en: 'We reach out to our community with food pantries, home visits for the elderly, and missions supporting global networks in Taiwan, East Asia, and local shelters.',
      zh: '我們透過食物發放、探訪年長者、以及支持台灣、東亞及本地庇護所的宣教網絡，向社區傳遞真摯關懷。'
    },
    meetingTime: {
      en: 'Monthly community projects',
      zh: '每月定期社區服務活動'
    },
    image: 'https://images.unsplash.com/photo-1469571486040-0b9b178e4d38?auto=format&fit=crop&q=80&w=600'
  }
];

export const SERMONS: Sermon[] = [
  {
    id: 'sr1',
    title: {
      en: 'A Renewed Heart in a Changing World',
      zh: '在變革世界中更新的心靈'
    },
    speaker: {
      en: 'Rev. Jonathan Chen',
      zh: '陳約拿單 牧師'
    },
    date: '2026-06-21',
    passage: {
      en: 'Romans 12:1-2',
      zh: '羅馬書 12:1-2'
    },
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Placeholder
    summary: {
      en: 'How do we align ourselves with God\'s perfect will when the cultural current pulls us elsewhere? Pastor Chen breaks down the dynamic process of renewing our minds and sacrificing our egos for a higher, holy calling.',
      zh: '當文化的潮流將我們拉往他處時，我們如何與上帝完美的旨意對齊？陳牧師深入剖析了更新心意、為更高更聖潔的呼召獻上自己的動態過程。'
    },
    tags: ['Faith', 'Life', 'Romans']
  },
  {
    id: 'sr2',
    title: {
      en: 'Navigating Storms of Doubt',
      zh: '行過疑惑的風暴'
    },
    speaker: {
      en: 'Rev. Jonathan Chen',
      zh: '陳約拿單 牧師'
    },
    date: '2026-06-14',
    passage: {
      en: 'Matthew 14:22-33',
      zh: '馬太福音 14:22-33'
    },
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    summary: {
      en: 'Like Peter walking on water, we often lose our focus and begin to sink in doubts. This message inspires us to keep our eyes locked on Christ despite the waves crashing around our career, health, and family.',
      zh: '就像彼得在水面上行走一樣，我們常常失去焦點，並在疑惑中下沉。這篇信息激勵我們，不論事業、健康和家庭周圍的波濤如何洶湧，都要將目光緊緊鎖定在基督身上。'
    },
    tags: ['Faith', 'Doubt', 'Matthew']
  },
  {
    id: 'sr3',
    title: {
      en: 'The Abounding Grace of the Shepherd',
      zh: '好牧人豐盛的恩典'
    },
    speaker: {
      en: 'Dr. Rebecca Wang',
      zh: '王麗貝卡 博士'
    },
    date: '2026-06-07',
    passage: {
      en: 'Psalm 23',
      zh: '詩篇 23'
    },
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    summary: {
      en: 'A comforting exploration of the Lord as our personal Shepherd. Dr. Wang highlights the active care, restoration of the soul, and ultimate security found in walking through dark valleys with God.',
      zh: '對「耶和華是我們的個人牧者」進行了一次溫暖人心的探討。王博士強調了上帝主動的看顧、靈魂的甦醒，以及與神同行走過死蔭幽谷時所得的終極安全感。'
    },
    tags: ['Comfort', 'Grace', 'Psalms']
  },
  {
    id: 'sr4',
    title: {
      en: 'Generous Hands, Joyful Hearts',
      zh: '慷慨的雙手，喜樂的心'
    },
    speaker: {
      en: 'Rev. Jonathan Chen',
      zh: '陳約拿單 牧師'
    },
    date: '2026-05-31',
    passage: {
      en: '2 Corinthians 9:6-11',
      zh: '哥林多後書 9:6-11'
    },
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    summary: {
      en: 'Scripture tells us God loves a cheerful giver. This sermon examines the theological connection between modern stewardship, trusting God with our finances, and discovering true kingdom joy.',
      zh: '聖經告訴我們神喜愛樂意奉獻的人。這篇講道探討了現代管家職分、將我們的財務信託給神，以及發現真正神國喜樂之間的神學關聯。'
    },
    tags: ['Giving', 'Stewardship', 'Corinthians']
  }
];

export const UPCOMING_EVENTS: ChurchEvent[] = [
  {
    id: 'e1',
    title: {
      en: 'Summer Family Retreat 2026',
      zh: '2026 夏季家庭退修會'
    },
    date: '2026-07-24',
    time: {
      en: 'July 24 - 26, Fri 4 PM to Sun 2 PM',
      zh: '7月24日（週五下午4點）至 26日（週日下午2點）'
    },
    location: {
      en: 'Mount Hermon Conference Center, Santa Cruz',
      zh: '聖克魯茲 Mount Hermon 會議中心'
    },
    description: {
      en: 'A refreshing weekend for the whole family! Includes bilingual inspiring messages, kids outdoor games, ropes course, bonfire praise, and deep fellowship in the beautiful redwood forest.',
      zh: '全家人放鬆與更新的週末！在美麗的紅杉林中，包含雙語啟發信息、兒童戶外遊戲、繩索挑戰、營火讚美與深入的彼此相交。'
    },
    category: 'special',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=600',
    attendeesCount: 42
  },
  {
    id: 'e2',
    title: {
      en: 'VBS 2026: Galactic Hope',
      zh: '2026 兒童夏令營：星際盼望'
    },
    date: '2026-08-03',
    time: {
      en: 'August 3 - 7, Mon to Fri 9:00 AM - 12:30 PM',
      zh: '8月3日 至 7日，週一至五 上午 9:00 - 12:30'
    },
    location: {
      en: 'Canaan Fellowship Hall & Classrooms',
      zh: '迦南聯誼廳及各教室'
    },
    description: {
      en: 'Our annual Vacation Bible School! Kids will explore the wonders of the universe and build a stellar faith through fun experiments, high-energy music, awesome crafts, and memorable bible stories.',
      zh: '我們一年一度的兒童暑期聖經學校！孩子們將透過趣味實驗、充滿活力的音樂、精美手作與難忘的聖經故事，探索宇宙奧秘，建立閃耀的信仰。'
    },
    category: 'fellowship',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=600',
    attendeesCount: 65
  },
  {
    id: 'e3',
    title: {
      en: 'Joint Water Baptism Service',
      zh: '聯合水禮崇拜'
    },
    date: '2026-08-30',
    time: {
      en: 'Sunday at 10:30 AM',
      zh: '主日上午 10:30'
    },
    location: {
      en: 'Church Courtyard & Swimming Pool',
      zh: '教會庭院與戶外泳池'
    },
    description: {
      en: 'Join us for a beautiful joint celebration of our brothers and sisters taking their public stand of faith in baptism. Followed by a delicious church-wide BBQ picnic. Come celebrate with us!',
      zh: '歡迎加入我們，共同見證弟兄姊妹受洗、公開宣示信仰。崇拜後將舉行美味的全教會烤肉野餐，邀您一同慶賀！'
    },
    category: 'service',
    image: 'https://images.unsplash.com/photo-1510253585354-9a84594e9f90?auto=format&fit=crop&q=80&w=600',
    attendeesCount: 18
  }
];

export const INITIAL_PRAYERS: PrayerRequest[] = [
  {
    id: 'pr1',
    name: 'Sister Mary L.',
    request: 'Please pray for my mother\'s upcoming knee surgery on Monday. Pray for peace of mind, skillful doctors, and a smooth rehabilitation afterward.',
    date: '2026-06-25',
    praysCount: 14
  },
  {
    id: 'pr2',
    name: 'Anonymous',
    request: 'I am going through a difficult transition in my career and feeling a lot of anxiety about the future. Please pray that God guides my path and reminds me of His sovereignty.',
    date: '2026-06-24',
    praysCount: 22
  },
  {
    id: 'pr3',
    name: 'Brother Tim & Grace',
    request: 'Thanking God for His protection over our family during our recent travel. We ask for continuous blessings as we start our family devotionals this month.',
    date: '2026-06-22',
    praysCount: 8,
    isAnswered: true
  }
];

export interface HistoryMilestone {
  year: string;
  title: { en: string; zh: string };
  detail: { en: string; zh: string };
}

export const CHURCH_HISTORY: HistoryMilestone[] = [
  {
    year: '1984',
    title: { en: 'First Service', zh: '舉行首次禮拜聚會' },
    detail: {
      en: 'Canaan New Life Christian Church held its very first worship service.',
      zh: '加南新生基督教會 (Canaan New Life Christian Church) 舉行首次禮拜聚會。'
    }
  },
  {
    year: '1996',
    title: { en: 'Relocation to New Sanctuary', zh: '遷入新購禮拜堂' },
    detail: {
      en: 'The church officially moved into its newly purchased sanctuary for worship.',
      zh: '正式遷入新購的禮拜堂聚會。'
    }
  },
  {
    year: '2007',
    title: { en: 'Pulpit & Member Care Support', zh: '總會長老牧師關懷與主日講台' },
    detail: {
      en: 'Elder Liu Fu-Cheng (late former Chairman of EFC General Assembly) and Rev. Liu Rui-Yi (former EFC General Secretary) began assisting with pulpit preaching schedule and member care.',
      zh: '開始由已故的台福總會前任議長劉富誠長老，與前任總幹事劉瑞義牧師協助安排主日講台及會友關懷的工作。'
    }
  },
  {
    year: '2010',
    title: { en: 'Leadership Handover & Lay Education', zh: '總幹事陳敏欽牧師交棒與平信徒教育' },
    detail: {
      en: 'Leadership handover to Rev. Chen Min-Chin (current General Secretary of EFC General Assembly). During this time, Elders Tsai Shou-Ren and Cheng Mei-Hui completed lay leader training at Logos/Evangelical Center and actively coordinated development with EFC.',
      zh: '交棒於台福總會現任總幹事陳敏欽牧師。此間，加南新生基督教會蔡壽仁長老與鄭美惠長老，完成正道培育中心的平信徒教育課程；並積極與台福總會保持協調教會發展的事工。'
    }
  },
  {
    year: '2012.06',
    title: { en: 'EFC Assembly Acceptance', zh: '台福總委會正式通過加盟' },
    detail: {
      en: 'On June 1, 2012, the 27th 2nd EFC General Committee officially accepted Canaan New Life Christian Church as an affiliate member of Evangelical Formosan Church.',
      zh: '2012年6月1日，台福基督教會第二十七屆第二次總委會，正式通過接納加南新生基督教會加盟台福教會。'
    }
  },
  {
    year: '2012.09',
    title: { en: 'First EFC Affiliate Church in North America', zh: '北美第一間台福加盟教會感恩禮拜' },
    detail: {
      en: 'On September 9, 2012 at 3:00 PM, a thanksgiving service was held celebrating Canaan New Life Christian Church becoming the first EFC affiliate church in North America.',
      zh: '2012年9月9日 3:00 PM，舉行加南新生基督教會成為北美第一間台福加盟教會的感恩禮拜。'
    }
  },
  {
    year: 'Present',
    title: { en: 'Independent Evangelical Church', zh: '獨立基督教會' },
    detail: {
      en: 'Canaan New Life Christian Church has transitioned from EFC affiliation to operate as an independent evangelical church, remaining steadfast in biblical truth and Christ-centered ministry.',
      zh: '加南新生基督教會現已脫離台福宗派，正式成為一間獨立基督教會，持續堅守聖經無誤真理，高舉基督，廣傳佳音。'
    }
  }
];

export interface FaithArticle {
  letter: string;
  title: { en: string; zh: string };
  content: { en: string; zh: string };
}

export const STATEMENT_OF_FAITH: FaithArticle[] = [
  {
    letter: 'A',
    title: { en: 'Holy Scripture', zh: '聖經權威' },
    content: {
      en: 'We believe the Old and New Testaments are the inerrant, inspired Word of God, revealing God\'s complete will for human salvation, and serve as the supreme authority for Christian faith and living.',
      zh: '新舊約聖經是上帝所啟示無謬誤的話語，明陳上帝完備救人的聖旨，是基督徒信仰與生活最高權威。'
    }
  },
  {
    letter: 'B',
    title: { en: 'The Triune God', zh: '三位一體' },
    content: {
      en: 'We believe in the self-existent, eternal, living God who exists eternally in three persons: God the Father, God the Son, and God the Holy Spirit.',
      zh: '自有永有的真活上帝，永存於聖父、聖子與聖靈三位一體。'
    }
  },
  {
    letter: 'C',
    title: { en: 'Creation & Sovereignty', zh: '創造掌權' },
    content: {
      en: 'We believe the Triune God created, sustains, and rules over all creation in the universe, yet is distinct from and prior to all created things.',
      zh: '三位一體的上帝創造、維護並統管宇宙萬物，但祂在一切受造物之前，且與被造物有別。'
    }
  },
  {
    letter: 'D',
    title: { en: 'Human Fall & Salvation Need', zh: '人類墮落' },
    content: {
      en: 'We believe Adam, mankind\'s ancestor, was created in the image of God but fell through sin, losing original innocence and bringing condemnation and death to himself and posterity. Thus mankind needs redemption and is completely unable to save itself.',
      zh: '人類始祖亞當是按上帝的形像被造，但因得罪上帝而失去原有純真本性，遭致本身及其後裔的定罪及死亡，因此人類需要救贖，但卻全然無能自救。'
    }
  },
  {
    letter: 'E',
    title: { en: 'Covenant of Grace', zh: '恩典之約' },
    content: {
      en: 'We believe that in His love and mercy, God provided redemption and established a covenant of grace with His people after the fall, promising and bestowing Savior Jesus Christ so that believers are justified and enjoy eternal life.',
      zh: '上帝因祂的慈愛與憐恤，在人類墮落之後為人類預備救贖大功且與祂的子民訂立恩典之約，上帝不但應許而且實際地賜下救主耶穌基督，使信靠祂的人得以稱義與享受永生。'
    }
  },
  {
    letter: 'F',
    title: { en: 'Jesus Christ', zh: '耶穌基督' },
    content: {
      en: 'We believe Jesus Christ is God\'s only begotten Son, conceived by the Holy Spirit, born of the Virgin Mary, lived a sinless life of obedience, suffered and was crucified for believers, was resurrected from the dead, exalted as Lord and Christ, and poured out the promised Holy Spirit upon the Church.',
      zh: '耶穌基督是上帝的獨生子，由父上帝所差遣，從聖靈所感孕，藉童女馬利亞出生，祂一生無罪順服，並為那些相信祂的子民受苦被釘在十字架上，上帝使祂從死裡復活，並且高昇祂為主為基督，並將所應許之聖靈賜給教會。'
    }
  },
  {
    letter: 'G',
    title: { en: 'Salvation by Grace', zh: '因信稱義' },
    content: {
      en: 'We believe salvation is by grace through faith in Jesus Christ. Redeemed sinners become God\'s people and inherit eternal life. Jesus Christ is the sole Mediator between God and mankind.',
      zh: '人的得救本乎恩也因著相信耶穌，被救贖的罪人得以成為上帝的子民，承受永生，耶穌基督是上帝與人之間的唯一中保，唯獨藉著祂才能到父那裡去。'
    }
  },
  {
    letter: 'H',
    title: { en: 'New Life & Good Works', zh: '新造的人' },
    content: {
      en: 'We believe believers become new creations in Christ, called to walk in the Spirit, die to sin, live to righteousness, emulate Christ, and bear the fruit of the Spirit. Good works are a duty of Christian life, not the basis for justification.',
      zh: '信徒在基督裡成為新造的人，蒙召順著聖靈而行，向罪死、在義上活、效法基督、顯出聖靈的果子。善功是基督徒生活的本份而不是稱義之根據。'
    }
  },
  {
    letter: 'I',
    title: { en: 'Freedom of Conscience', zh: '良心主宰' },
    content: {
      en: 'We believe God alone is Lord of the conscience. Believers are free in faith and conduct from human doctrines or commandments contrary to or added to Scripture.',
      zh: '唯獨上帝才是我們良心的主宰，信徒在信仰與行為上得以超脫一切違反聖經或增添聖經以外的人為誡命。'
    }
  },
  {
    letter: 'J',
    title: { en: 'The Church & Sacraments', zh: '基督教會' },
    content: {
      en: 'We believe all true believers belong to Christ, indwelt by the Spirit, forming Christ\'s body—the invisible Church, which is holy, universal, and united. The invisible Church is manifested through visible local churches of baptized believers serving as a kingdom of priests.',
      zh: '所有真信徒是屬於基督，是聖靈的居所，是基督的身體，亦是無形的教會；教會在基督裡是聖潔、普世性與合一的。無形的教會藉有形的教會表明出來，地方的教會包括一切心信口認基督而且接受洗禮，作為上帝的子民、祭司的國度。教會必須漸漸長大，滿有基督成長的身量，藉著運用聖靈的恩賜在崇拜、聖禮、團契、訓律與服事、見證等事上完成宣教的聖工。'
    }
  },
  {
    letter: 'K',
    title: { en: 'Priesthood of Believers', zh: '信徒皆祭司' },
    content: {
      en: 'We believe in the priesthood of all believers; ordained office-bearers and lay members serve together with one heart.',
      zh: '信徒皆為祭司，受職者與平信徒同心服事。'
    }
  },
  {
    letter: 'L',
    title: { en: 'The Second Coming & Eternity', zh: '基督再臨' },
    content: {
      en: 'We believe Christ will return personally and visibly in glory at the end of age to judge the living and the dead. The dead will be bodily resurrected; believers inherit eternal life, unbelievers are condemned, and the new heaven and new earth begin.',
      zh: '在末日，基督將親自有形體地再來，審判活人與死人。死人將有形體的復活，信徒藉聖靈承受永生，不信的人被定罪，新天新地於是開始。'
    }
  }
];

