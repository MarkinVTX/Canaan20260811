import { Language } from './types';

export interface BibleVerse {
  bookId: string;
  bookName: { en: string; zh: string };
  chapter: number;
  verse: number;
  text: { en: string; zh: string };
}

export interface BibleBook {
  id: string;
  name: { en: string; zh: string };
  testament: 'OT' | 'NT';
  chapters: number[];
}

export const BIBLE_BOOKS: BibleBook[] = [
  { id: 'gen', name: { en: 'Genesis', zh: '創世記' }, testament: 'OT', chapters: [1] },
  { id: 'psa', name: { en: 'Psalms', zh: '詩篇' }, testament: 'OT', chapters: [23, 100] },
  { id: 'pro', name: { en: 'Proverbs', zh: '箴言' }, testament: 'OT', chapters: [3] },
  { id: 'jhn', name: { en: 'John', zh: '約翰福音' }, testament: 'NT', chapters: [1, 3] },
  { id: 'rom', name: { en: 'Romans', zh: '羅馬書' }, testament: 'NT', chapters: [12] },
  { id: '1co', name: { en: '1 Corinthians', zh: '哥林多前書' }, testament: 'NT', chapters: [13] }
];

export const BIBLE_VERSES: BibleVerse[] = [
  // Genesis 1
  {
    bookId: 'gen',
    bookName: { en: 'Genesis', zh: '創世記' },
    chapter: 1,
    verse: 1,
    text: {
      en: 'In the beginning, God created the heavens and the earth.',
      zh: '起初，神創造天地。'
    }
  },
  {
    bookId: 'gen',
    bookName: { en: 'Genesis', zh: '創世記' },
    chapter: 1,
    verse: 2,
    text: {
      en: 'The earth was without form and void, and darkness was over the face of the deep. And the Spirit of God was hovering over the face of the waters.',
      zh: '地是空虛混沌，淵面黑暗；神的靈運行在水面上。'
    }
  },
  {
    bookId: 'gen',
    bookName: { en: 'Genesis', zh: '創世記' },
    chapter: 1,
    verse: 3,
    text: {
      en: 'And God said, "Let there be light," and there was light.',
      zh: '神說：「要有光」，就有了光。'
    }
  },
  {
    bookId: 'gen',
    bookName: { en: 'Genesis', zh: '創世記' },
    chapter: 1,
    verse: 4,
    text: {
      en: 'And God saw that the light was good. And God separated the light from the darkness.',
      zh: '神看光是好的，就把光暗分開了。'
    }
  },
  {
    bookId: 'gen',
    bookName: { en: 'Genesis', zh: '創世記' },
    chapter: 1,
    verse: 5,
    text: {
      en: 'God called the light Day, and the darkness he called Night. And there was evening and there was morning, the first day.',
      zh: '神稱光為「晝」，稱暗為「夜」。有晚上，有早晨，這是頭一日。'
    }
  },
  {
    bookId: 'gen',
    bookName: { en: 'Genesis', zh: '創世記' },
    chapter: 1,
    verse: 6,
    text: {
      en: 'And God said, "Let there be an expanse in the midst of the waters, and let it separate the waters from the waters."',
      zh: '神說：「諸水之間要有空氣，將水分為上下。」'
    }
  },
  {
    bookId: 'gen',
    bookName: { en: 'Genesis', zh: '創世記' },
    chapter: 1,
    verse: 7,
    text: {
      en: 'And God made the expanse and separated the waters that were under the expanse from the waters that were above the expanse. And it was so.',
      zh: '神就造出空氣，將空氣以下的水、空氣以上的水分開了。事就這樣成了。'
    }
  },
  {
    bookId: 'gen',
    bookName: { en: 'Genesis', zh: '創世記' },
    chapter: 1,
    verse: 8,
    text: {
      en: 'And God called the expanse Heaven. And there was evening and there was morning, the second day.',
      zh: '神稱空氣為「天」。有晚上，有早晨，是第二日。'
    }
  },
  {
    bookId: 'gen',
    bookName: { en: 'Genesis', zh: '創世記' },
    chapter: 1,
    verse: 9,
    text: {
      en: 'And God said, "Let the waters under the heavens be gathered together into one place, and let the dry land appear." And it was so.',
      zh: '神說：「天下的水要聚在一處，使旱地露出來。」事就這樣成了。'
    }
  },
  {
    bookId: 'gen',
    bookName: { en: 'Genesis', zh: '創世記' },
    chapter: 1,
    verse: 10,
    text: {
      en: 'God called the dry land Earth, and the waters that were gathered together he called Seas. And God saw that it was good.',
      zh: '神稱旱地為「地」，稱水的聚處為「海」。神看著是好的。'
    }
  },

  // Psalm 23
  {
    bookId: 'psa',
    bookName: { en: 'Psalms', zh: '詩篇' },
    chapter: 23,
    verse: 1,
    text: {
      en: 'The Lord is my shepherd; I shall not want.',
      zh: '耶和華是我的牧者，我必不致缺乏。'
    }
  },
  {
    bookId: 'psa',
    bookName: { en: 'Psalms', zh: '詩篇' },
    chapter: 23,
    verse: 2,
    text: {
      en: 'He makes me lie down in green pastures. He leads me beside still waters.',
      zh: '祂使我躺臥在青草地上，領我在可安歇的水邊。'
    }
  },
  {
    bookId: 'psa',
    bookName: { en: 'Psalms', zh: '詩篇' },
    chapter: 23,
    verse: 3,
    text: {
      en: 'He restores my soul. He leads me in paths of righteousness for his name\'s sake.',
      zh: '祂使我的靈魂甦醒，為自己的名引導我走義路。'
    }
  },
  {
    bookId: 'psa',
    bookName: { en: 'Psalms', zh: '詩篇' },
    chapter: 23,
    verse: 4,
    text: {
      en: 'Even though I walk through the valley of the shadow of death, I will fear no evil, for you are with me; your rod and your staff, they comfort me.',
      zh: '我雖然行過死蔭的幽谷，也不怕遭害，因為你與我同在；你的杖，你的竿，都安慰我。'
    }
  },
  {
    bookId: 'psa',
    bookName: { en: 'Psalms', zh: '詩篇' },
    chapter: 23,
    verse: 5,
    text: {
      en: 'You prepare a table before me in the presence of my enemies; you anoint my head with oil; my cup overflows.',
      zh: '在我敵人面前，你為我擺設筵席；你用油膏了我的頭，使我的福杯滿溢。'
    }
  },
  {
    bookId: 'psa',
    bookName: { en: 'Psalms', zh: '詩篇' },
    chapter: 23,
    verse: 6,
    text: {
      en: 'Surely goodness and mercy shall follow me all the days of my life, and I shall dwell in the house of the Lord forever.',
      zh: '我一生一世必有恩惠慈愛隨著我；我且要住在耶和華的殿中，直到永遠。'
    }
  },

  // Psalm 100
  {
    bookId: 'psa',
    bookName: { en: 'Psalms', zh: '詩篇' },
    chapter: 100,
    verse: 1,
    text: {
      en: 'Make a joyful noise to the Lord, all the earth!',
      zh: '普天下當向耶和華歡呼！'
    }
  },
  {
    bookId: 'psa',
    bookName: { en: 'Psalms', zh: '詩篇' },
    chapter: 100,
    verse: 2,
    text: {
      en: 'Serve the Lord with gladness! Come into his presence with singing!',
      zh: '當樂意事奉耶和華，當向祂歌唱來到祂面前！'
    }
  },
  {
    bookId: 'psa',
    bookName: { en: 'Psalms', zh: '詩篇' },
    chapter: 100,
    verse: 3,
    text: {
      en: 'Know that the Lord, he is God! It is he who made us, and we are his; we are his people, and the sheep of his pasture.',
      zh: '你們當曉得耶和華是神！我們是祂造的，也是屬祂的；我們是祂的民，也是祂草場的羊。'
    }
  },
  {
    bookId: 'psa',
    bookName: { en: 'Psalms', zh: '詩篇' },
    chapter: 100,
    verse: 4,
    text: {
      en: 'Enter his gates with thanksgiving, and his courts with praise! Give thanks to him; bless his name!',
      zh: '當稱謝進入祂的門，當讚美進入祂的院。當感謝祂，稱頌祂的名！'
    }
  },
  {
    bookId: 'psa',
    bookName: { en: 'Psalms', zh: '詩篇' },
    chapter: 100,
    verse: 5,
    text: {
      en: 'For the Lord is good; his steadfast love endures forever, and his faithfulness to all generations.',
      zh: '因為耶和華本為善。祂的慈愛存到永遠；祂的信實直到萬代。'
    }
  },

  // Proverbs 3:5-6
  {
    bookId: 'pro',
    bookName: { en: 'Proverbs', zh: '箴言' },
    chapter: 3,
    verse: 5,
    text: {
      en: 'Trust in the Lord with all your heart, and do not lean on your own understanding.',
      zh: '你要專心仰賴耶和華，不可倚靠自己的聰明。'
    }
  },
  {
    bookId: 'pro',
    bookName: { en: 'Proverbs', zh: '箴言' },
    chapter: 3,
    verse: 6,
    text: {
      en: 'In all your ways acknowledge him, and he will make straight your paths.',
      zh: '在你一切所行的事上都要認定祂，祂必指引你的路。'
    }
  },

  // John 1
  {
    bookId: 'jhn',
    bookName: { en: 'John', zh: '約翰福音' },
    chapter: 1,
    verse: 1,
    text: {
      en: 'In the beginning was the Word, and the Word was with God, and the Word was God.',
      zh: '太初有道，道與神同在，道就是神。'
    }
  },
  {
    bookId: 'jhn',
    bookName: { en: 'John', zh: '約翰福音' },
    chapter: 1,
    verse: 2,
    text: {
      en: 'He was in the beginning with God.',
      zh: '這道太初與神同在。'
    }
  },
  {
    bookId: 'jhn',
    bookName: { en: 'John', zh: '約翰福音' },
    chapter: 1,
    verse: 3,
    text: {
      en: 'All things were made through him, and without him was not any thing made that was made.',
      zh: '萬物是藉著祂造的；凡被造的，沒有一樣不是藉著祂造的。'
    }
  },
  {
    bookId: 'jhn',
    bookName: { en: 'John', zh: '約翰福音' },
    chapter: 1,
    verse: 4,
    text: {
      en: 'In him was life, and the life was the light of men.',
      zh: '生命在祂裡頭，這生命就是人的光。'
    }
  },
  {
    bookId: 'jhn',
    bookName: { en: 'John', zh: '約翰福音' },
    chapter: 1,
    verse: 5,
    text: {
      en: 'The light shines in the darkness, and the darkness has not overcome it.',
      zh: '光照在黑暗裡，黑暗卻不接受光。'
    }
  },
  {
    bookId: 'jhn',
    bookName: { en: 'John', zh: '約翰福音' },
    chapter: 1,
    verse: 14,
    text: {
      en: 'And the Word became flesh and dwelt among us, and we have seen his glory, glory as of the only Son from the Father, full of grace and truth.',
      zh: '道成了肉身，住在我們中間，充充滿滿地有恩典有真理。我們也見過祂的榮光，正是父獨生子的榮光。'
    }
  },

  // John 3
  {
    bookId: 'jhn',
    bookName: { en: 'John', zh: '約翰福音' },
    chapter: 3,
    verse: 16,
    text: {
      en: 'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
      zh: '「神愛世人，甚至將祂的獨生子賜給他們，叫一切信祂的，不致滅亡，反得永生。'
    }
  },
  {
    bookId: 'jhn',
    bookName: { en: 'John', zh: '約翰福音' },
    chapter: 3,
    verse: 17,
    text: {
      en: 'For God did not send his Son into the world to condemn the world, but in order that the world might be saved through him.',
      zh: '因為神差祂的兒子降世，不是要定世人的罪，乃是要叫世人因祂得救。'
    }
  },
  {
    bookId: 'jhn',
    bookName: { en: 'John', zh: '約翰福音' },
    chapter: 3,
    verse: 18,
    text: {
      en: 'Whoever believes in him is not condemned, but whoever does not believe is condemned already, because he has not believed in the name of the only Son of God.',
      zh: '信祂的人，不被定罪；不信的人，罪已經定了，因為他不信神獨生子的名。'
    }
  },

  // Romans 12
  {
    bookId: 'rom',
    bookName: { en: 'Romans', zh: '羅馬書' },
    chapter: 12,
    verse: 1,
    text: {
      en: 'I appeal to you therefore, brothers, by the mercies of God, to present your bodies as a living sacrifice, holy and acceptable to God, which is your spiritual worship.',
      zh: '所以弟兄們，我以神的慈悲勸你們，將身體獻上，當作活祭，是聖潔的，是神所喜悅的；你們如此事奉乃是理所當然的。'
    }
  },
  {
    bookId: 'rom',
    bookName: { en: 'Romans', zh: '羅馬書' },
    chapter: 12,
    verse: 2,
    text: {
      en: 'Do not be conformed to this world, but be transformed by the renewal of your mind, that by testing you may discern what is the will of God, what is good and acceptable and perfect.',
      zh: '不要效法這個世界，只要心意更新而變化，叫你們察驗何為神的善良、純全、可喜悅的旨意。'
    }
  },
  {
    bookId: 'rom',
    bookName: { en: 'Romans', zh: '羅馬書' },
    chapter: 12,
    verse: 3,
    text: {
      en: 'For by the grace given to me I say to everyone among you not to think of himself more highly than he ought to think, but to think with sober judgment, each according to the measure of faith that God has assigned.',
      zh: '我憑著所賜我的恩對你們各人說：不要看自己過於所當看的，要照著神所分給各人信心的大小，看得合乎中道。'
    }
  },

  // 1 Corinthians 13
  {
    bookId: '1co',
    bookName: { en: '1 Corinthians', zh: '哥林多前書' },
    chapter: 13,
    verse: 1,
    text: {
      en: 'If I speak in the tongues of men and of angels, but have not love, I am a noisy gong or a clanging cymbal.',
      zh: '我若能說萬人的方言，並天使的話語，卻沒有愛，我就成了鳴的鑼，響的鈸一般。'
    }
  },
  {
    bookId: '1co',
    bookName: { en: '1 Corinthians', zh: '哥林多前書' },
    chapter: 13,
    verse: 2,
    text: {
      en: 'And if I have prophetic powers, and understand all mysteries and all knowledge, and if I have all faith, so as to remove mountains, but have not love, I am nothing.',
      zh: '我若有先知講道之能，也明白各樣的奧秘，各樣的知識，而且有全備的信，叫我能夠移山，卻沒有愛，我就算不得什麼。'
    }
  },
  {
    bookId: '1co',
    bookName: { en: '1 Corinthians', zh: '哥林多前書' },
    chapter: 13,
    verse: 3,
    text: {
      en: 'If I give away all I have, and if I deliver up my body to be burned, but have not love, I gain nothing.',
      zh: '我若將所有的賙濟窮人，又捨己身叫人焚燒，卻沒有愛，仍然與我無益。'
    }
  },
  {
    bookId: '1co',
    bookName: { en: '1 Corinthians', zh: '哥林多前書' },
    chapter: 13,
    verse: 4,
    text: {
      en: 'Love is patient and kind; love does not envy or boast; it is not arrogant',
      zh: '愛是恒久忍耐，又有恩慈；愛是不嫉妒；愛是不自誇，不張狂，'
    }
  },
  {
    bookId: '1co',
    bookName: { en: '1 Corinthians', zh: '哥林多前書' },
    chapter: 13,
    verse: 5,
    text: {
      en: 'or rude. It does not insist on its own way; it is not irritable or resentful;',
      zh: '不做害羞的事，不求自己的益處，不輕易發怒，不計算人的惡，'
    }
  },
  {
    bookId: '1co',
    bookName: { en: '1 Corinthians', zh: '哥林多前書' },
    chapter: 13,
    verse: 6,
    text: {
      en: 'it does not rejoice at wrongdoing, but rejoices with the truth.',
      zh: '不喜歡不義，只喜歡真理；'
    }
  },
  {
    bookId: '1co',
    bookName: { en: '1 Corinthians', zh: '哥林多前書' },
    chapter: 13,
    verse: 7,
    text: {
      en: 'Love bears all things, believes all things, hopes all things, endures all things.',
      zh: '凡事包容，凡事相信，凡事盼望，凡事忍耐。'
    }
  },
  {
    bookId: '1co',
    bookName: { en: '1 Corinthians', zh: '哥林多前書' },
    chapter: 13,
    verse: 8,
    text: {
      en: 'Love never ends. As for prophecies, they will pass away; as for tongues, they will cease; as for knowledge, it will pass away.',
      zh: '愛是永不止息。先知講道之能終必歸於無有；說方言之能終必停止；知識也終必歸於無有。'
    }
  },
  {
    bookId: '1co',
    bookName: { en: '1 Corinthians', zh: '哥林多前書' },
    chapter: 13,
    verse: 13,
    text: {
      en: 'So now faith, hope, and love abide, these three; but the greatest of these is love.',
      zh: '如今常存的有信，有望，有愛這三樣，其中最大的是愛。'
    }
  }
];
