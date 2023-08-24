import { send, shield, star } from "../assets";

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
