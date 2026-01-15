const projects = [
  {
    id: 1,
    title: "Client-side Secure Password Generator",
    description:
      "Generates customizable passwords directly in the browser without sending data to a server.",
    problem: "Weak and reused passwords compromise user security.",
    focus: "Controlled inputs, derived state, predictable re-renders",
    learnings: "Learned how small state changes affect component re-renders.",
    techStack: ["React", "JavaScript", "TailwindCSS"],
    liveUrl: "#",
    repoUrl: "https://github.com/manishwashimkar/password-generator",
  },
  {
    id: 2,
    title: "State-driven Game Logic (Tic Tac Toe)",
    description:
      "Built using React state reconciliation principles for predictable game logic and instant UI updates without external storage or backend dependency.",
    problem:
      "Unstructured state handling leads to unreliable game logic and UI bugs.",
    focus: "clean component design and predictable state flow",
    learnings:
      "Learned how to maintain UI layer and Data layer in sync for better performance",
    techStack: ["HTML5", "CSS", , "JavaScript", "ReactJS"],
    liveUrl: "#",
    repoUrl: "https://github.com/manishwashimkar/state-driven-game-logic",
  },
  {
    id: 3,
    title: "React Based Paytm UI Clone",
    description:
      "Responsive UI clone focused on layout replication and component structure using Tailwind, emphasizing spacing discipline and visual hierarchy.",
    problem:
      "Complex fintech UIs require scalable, responsive, and consistent layouts.",
    focus: "Controlled inputs, derived state, predictable re-renders",
    learnings: "Learned how small state changes affect component re-renders.",
    techStack: ["HTML", "CSS", "JavaScript", "React", "TailwindCSS"],
    liveUrl: "#",
    repoUrl: "https://github.com/manishwashimkar/react-based-paytm-ui-clone",
  },
];

export default projects;
