//src /utils/blogPosts.ts

export interface BlogPost {
  postId: number;
  title: string;
  date: string;
  content?: string; //? makes this property optional
  sections?: { title?: string; content?: string }[];
}

export const posts: BlogPost[] = [
  {
    postId: 1,
    title: "First blog post",
    date: "04.06.2024",
    content: "Blog test",
  },
  {
    postId: 2,
    title: "Obama Gaming: Our Agile Jouney",
    date: "04.06.2024",
    sections: [
      { title: "Introduction", content: "What we learned" },
      { title: "Why agile?", content: "it good" },
      { title: "Trial and error", content: "we tried, failed and learned" },
      { title: "learning outcomes", content: "a lot" },
      { title: "Conclusion", content: "we are agile now" },
    ],
  },
];
