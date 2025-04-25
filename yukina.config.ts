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
    "https://static.vecteezy.com/system/resources/previews/024/209/368/large_2x/aesthetic-city-synthwave-wallpaper-with-a-cool-and-vibrant-neon-design-ai-generated-photo.jpg",
    "https://i.ibb.co/dsV5TPvx/89044cff-c313-4070-88ff-ec8823635473.jpg",
    "https://i.ibb.co/60J4Wqq2/e9902612-7bf4-488b-8a5c-e0f4b95a0c12.jpg"
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
