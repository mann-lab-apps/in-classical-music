import { GoHome, GoHomeFill } from "react-icons/go";
import { RiSearchLine, RiSearchFill } from "react-icons/ri";
import { IoMusicalNotesOutline, IoMusicalNotesSharp } from "react-icons/io5";
import { IoChatbubbles, IoChatbubblesOutline } from "react-icons/io5";
import { PiUserList, PiUserListFill } from "react-icons/pi";

export const SUPABASE_API_KEY = process.env.REACT_APP_SUPABASE_API_KEY;
export const SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL;
export const ADDRESS_API_URL = process.env.REACT_APP_ADDRESS_API_URL;

export const FIREBASE_MESSAGING_VAPID_KEY =
  process.env.REACT_APP_FIREBASE_MESSAGING_VAPID_KEY;
export const FIREBASE_API_KEY = process.env.REACT_APP_FIREBASE_API_KEY;
export const FIREBASE_AUTH_DOMAIN = process.env.REACT_APP_FIREBASE_AUTH_DOMAIN;
export const FIREBASE_PROJECT_ID = process.env.REACT_APP_FIREBASE_PROJECT_ID;
export const FIREBASE_STORAGE_BUCKET =
  process.env.REACT_APP_FIREBASE_STORAGE_BUCKET;
export const FIREBASE_MESSAGING_SENDER_ID =
  process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID;
export const FIREBASE_APP_ID = process.env.REACT_APP_FIREBASE_APP_ID;

export const navigation = [
  {
    path: "/",
    name: "홈",
    icon: GoHome,
    selectedIcon: GoHomeFill,
    isLoggedInUserOnly: false,
  },
  // {
  //   path: '/search',
  //   name: '둘러보기',
  //   icon: RiSearchLine,
  //   selectedIcon: RiSearchFill,
  //   isLoggedInUserOnly: false,
  // },
  {
    path: "/artists",
    name: "아티스트",
    icon: IoMusicalNotesOutline,
    selectedIcon: IoMusicalNotesSharp,
    isLoggedInUserOnly: false,
  },
  {
    path: "/chats",
    name: "채팅",
    icon: IoChatbubblesOutline,
    selectedIcon: IoChatbubbles,
    isLoggedInUserOnly: true,
  },
  {
    path: "/my-page",
    name: "마이페이지",
    icon: PiUserList,
    selectedIcon: PiUserListFill,
    isLoggedInUserOnly: true,
  },
];

// 아티스트 = "프로필" (음악가 + 단체 + 교육기관, ...), "활동" (연주회, ...), ""
//
