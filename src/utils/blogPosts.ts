//src /utils/blogPosts.ts

export interface BlogPost {
  title: string;
  date: string;
  content?: string; //? makes this property optional
  sections?: { title?: string; content?: string }[];
  link?: { text: string; href: string}[];
}

export const posts: BlogPost[] = [
  {
    title: "First blog post",
    date: "04.06.2024",
    content: "Blog test",
  },
  {
    title: "Obama Gaming: Our Agile Journey",
    date: "05.06.2024",
    sections: [
      { title: "Introduction", content: "In the subject INF112 on UiB, we where tasked with developing a game. We assembled a team of developers, and brainstormed ideas for our project." },
      { title: "Project approach:", content: "We chose a Agile approach, and used tools such as Scrum and Kanban to organise the process." },
      { title: "User stories", content: "We had frequent Scrum meetings, where we disgussed our progression and planned new user stories. The user stories helped us to get a grasp on the functionality we wanted in our game. And laid foundation for or next tasks." },
      { title: "Group dynamics", content: "The team had good communication through Discord and physical meetings. We also went on a trip over the mountains in Bergen, which strengthened our ability to cooperate even more." },
      { title: "Technical details", content: "We used libGDX, which seemed to have fell out of date a while ago. A lot of the reference links where dead, but we managed. We tried do separate our project into a Model-View-Controller architecture to follow the STRONG principles. We focused on creating a modular code that allowed us to reused each others work." },
      { title: "Conclusion", content: "We had a great time working on this project, and we learned a lot about Agile development. We also learned a lot about the importance of good communication and cooperation in a team."},
    ],
    link: [{ text: "Project source code", href: "https://github.com/Yeetomeister/INF112-TowerDefense" }],
  },
];
