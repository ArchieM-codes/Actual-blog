import I18nKeys from "./src/locales/keys";
import type { Configuration } from "./src/types/config";

const YukinaConfig: Configuration = {
  title: "ArchieM blog",
  subTitle: "ArchieM's blog",
  brandTitle: "Archiem.top",

  description: "My blog",

  site: "https://archiem-blog.vercel.app",

  locale: "en", // set for website language and date format

  navigators: [
    {
      nameKey: I18nKeys.nav_bar_home,
      href: "/",
    },
    {
      nameKey: I18nKeys.nav_bar_archive,
      href: "/archive",
    },
    {
      nameKey: I18nKeys.nav_bar_about,
      href: "/about",
    },
    {
      nameKey: I18nKeys.nav_bar_github,
      href: "https://github.com/volcar144",
    },
  ],

  username: "ArchieM",
  sign: "Ad astra et ultra.",
  avatarUrl: "https://i.ibb.co/3mzSrhT3/ec32b5a7-1032-4fef-87f3-741bcc9ae3a7.jpg",
  socialLinks: [
    {
      icon: "line-md:github-loop",
      link: "https://github.com/volcar144",
    }
  ],
  maxSidebarCategoryChip: 6, // It is recommended to set it to a common multiple of 2 and 3
  maxSidebarTagChip: 12,
  maxFooterCategoryChip: 6,
  maxFooterTagChip: 24,

  banners: [
    "https://i.ibb.co/3mzSrhT3/ec32b5a7-1032-4fef-87f3-741bcc9ae3a7.jpg",
  ],

  slugMode: "HASH", // 'RAW' | 'HASH'

  license: {
    name: "CC BY-NC-SA 4.0",
    url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
  },

  // WIP functions
  bannerStyle: "LOOP", // 'loop' | 'static' | 'hidden'
};

export default YukinaConfig;
