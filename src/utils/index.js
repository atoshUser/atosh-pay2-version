import {
  airbnb,
  binance,
  coinbase,
  dropbox,
  send,
  shield,
  star,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Bosh sahifa",
  },
  {
    id: "features",
    title: "Xizmatlar",
  },
  {
    id: "product",
    title: "Maxsulot",
  },
  {
    id: "clients",
    title: "Mijozlar",
  },
];

export const statistics = [
  {
    id: 1,
    title: "Foydalanuvchi faol",
    value: "+9300",
  },
  {
    id: 2,
    title: "Kompaniya Homiyligida",
    value: "100+",
  },
  {
    id: 3,
    title: "Tranzaksiya ",
    value: "+110M",
  },
];

export const features = [
  {
    id: 1,
    icon: star,
    title: "Mukofotlar",
    content:
      "Eng yaxshi kredit kartalari aksiyalari va sovrinlarning ajoyib kombinatsiyasi taklif qiladi.",
  },
  {
    id: 2,
    icon: shield,
    title: "100% himoyalangan",
    content: `Ma'lumotlaringiz va tranzaktsiyalaringiz xavsiz ekanligiga ishonch hosil qilish uchun faol choralar mavjud.`,
  },
  {
    id: 3,
    icon: send,
    title: `Balansni o'tkazish`,
    content: `Balansni o'tkazish kredit kartasi sizga foizlarni to'lashda ko'p pul tejashda yordam beradi.`,
  },
];

export const feedbacks = [
  {
    id: 1,
    name: "Komilov Anvar",
    title: "Menga yoqgan afzalliklari!",
    content: "Menga ko'proq pullarimni boshqara olishim juda yoqadi.",
  },
  {
    id: 2,
    name: "Aliyev Nodirbek",
    title: "Istalgan vaqtda!",
    content:
      "Mening fikrimcha eng afzalligi istalgan vaqtda va istalgan masofadan turib chet eldan o'zimga yoqgan buyum uchun xarid qilish..",
  },
  {
    id: 3,
    name: "Roziyev Qobil",
    title: "Menga muhimi pullarimni xavfsizligi!",
    content:
      "Xar tomonlama pullarimni xavfsizligi mani tinchlantiradi va o'z pullarimni bemalol ishonaman.",
  },
];

export const clients = [
  {
    id: 1,
    logo: dropbox,
  },
  {
    id: 2,
    logo: airbnb,
  },
  {
    id: 3,
    logo: coinbase,
  },
  {
    id: 4,
    logo: binance,
  },
];

const baseUrl = `https://www.hoobank.com`;
const baseUrl2 = `https://www.sammi.ac`;
export const footerLink = [
  {
    title: "Jamiyat",
    links: [
      {
        name: `Yordam markazi`,
        url: `${baseUrl}/help-center/`,
      },
      {
        name: `Hamkorlar`,
        url: `${baseUrl}/partners/`,
      },
      {
        name: `Takliflar`,
        url: `${baseUrl}/suggestions/`,
      },
      {
        name: "Blog",
        url: `${baseUrl}/blog/`,
      },
      {
        name: `Yangiliklar`,
        url: `${baseUrl}/newsletters`,
      },
    ],
  },
  {
    title: `Foydali havola`,
    links: [
      {
        name: `Kontent`,
        url: `${baseUrl2}/content/`,
      },
      {
        name: `Qanday ishlaydi`,
        url: `${baseUrl2}/how-it-works/`,
      },
      {
        name: `Shartlar va Hizmatlar`,
        url: `${baseUrl2}/terms-and-services/`,
      },
    ],
  },
  {
    title: "Hamkorlar",
    links: [
      {
        name: `Bizning Hamkorimiz`,
        url: `${baseUrl2}/our-partner`,
      },
      {
        name: `Hamkor Bo'ling`,
        url: `${baseUrl2}/become-a-partner`,
      },
    ],
  },
];
