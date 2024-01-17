interface linkData {
  title: string;
  href: string;
}
interface linkWithImageData extends linkData {
  src: string;
  desc: string;
}
export const sections: linkData[] = [
  {
    title: "World",
    href: "/",
  },
  {
    title: "Africa",
    href: "/",
  },
  {
    title: "Americas",
    href: "/",
  },
  {
    title: "Asia",
    href: "/",
  },
  {
    title: "Australia",
    href: "/",
  },
  {
    title: "Canada",
    href: "/",
  },
  {
    title: "Europe",
    href: "/",
  },
  {
    title: "Middle East",
    href: "/",
  },
  {
    title: "Science",
    href: "/",
  },
  {
    title: "Climate",
    href: "/",
  },
  {
    title: "Health",
    href: "/",
  },
  {
    title: "Obituaries",
    href: "/",
  },
];
export const topStories: linkData[] = [
  {
    title: "Israel-Hamans War",
    href: "/",
  },
  {
    title: "Russian Ukraine war",
    href: "/",
  },
];
export const newsletters: linkWithImageData[] = [
  {
    title: "Morning Briefing: Europe",
    href: "/",
    src: "https://images.unsplash.com/photo-1422433555807-2559a27433bd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Get what you need to know to start your day.",
  },
  {
    title: "The Interpreter",
    href: "/",
    src: "https://images.unsplash.com/photo-1496096265110-f83ad7f96608?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Analysis that explains politics, policy and everyday life.",
  },
];
export const podcasts: linkWithImageData[] = [
  {
    title: "Australia letter",
    href: "/",
    src: "https://images.unsplash.com/photo-1515861461225-1488dfdaf0a8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "News, features, and opinions for readers in the region.",
  },
  {
    title: "Canada letter",
    href: "/",
    src: "https://images.unsplash.com/photo-1578973615934-8d9cdb0792b4?q=80&w=1589&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Backstories and analysis for our canadian correspondents.",
  },
];
