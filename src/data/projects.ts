export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  github: string;
  tags: string[];
  featured: boolean;
  status: "complete" | "in-progress" | "experimental";
}

export const projects: Project[] = [
  {
    id: "portscanner",
    title: "Port_Scanner",
    description:
      "A simple and efficient multi-threaded port scanner built in Python to quickly scan a range of ports on a target IP address.",
    longDescription:
      "This port scanner tool enables users to check which ports are open on a specified IP address. It utilizes threading to scan multiple ports concurrently, making the scanning process faster and more efficient.",
    tech: ["Python", "Sockets", "Threading", "MySql"],
    github: "https://github.com/RaiSan001/Port_Scanner",
    tags: ["networking", "tool", "python"],
    featured: true,
    status: "complete",
  },
 {
  id: "file-encryptor",
  title: "Python File Encryptor and Decryptor",
  description:
    "A simple Python tool for encrypting and decrypting files using AES-128 symmetric encryption with the Fernet scheme.",
  longDescription:
    "Built as a small cybersecurity learning project to understand symmetric encryption, secure key handling, and file operations in Python. The tool allows users to safely encrypt and decrypt files using generated Fernet keys.",
  tech: ["Python", "Cryptography", "Fernet"],
  github: "https://github.com/RaiSan001/File_Encrypter_and_Decrypter",
  tags: ["encryption", "python", "security"],
  featured: true,
  status: "complete",
},
{
  id: "password-checker",
  title: "Password Strength Checker and Generator",
  description:
    "A simple desktop application built with Python and Tkinter to evaluate password strength and generate secure passwords.",
  longDescription:
    "Created as a beginner-friendly cybersecurity project to understand password security concepts, GUI development, and random password generation in Python. The application checks password complexity based on character variety and also generates strong randomized passwords.",
  tech: ["Python", "Tkinter"],
  github: "https://github.com/RaiSan001/Password_Check_and_Gen",
  tags: ["password", "security", "gui"],
  featured: false,
  status: "complete",
},
{
  id: "tic-tac-toe-ai",
  title: "Tic Tac Toe",
  description:
    "A browser-based Tic Tac Toe game featuring an unbeatable AI opponent using the minimax algorithm and a local 2-player mode.",
  longDescription:
    "Built as a small game development project to learn JavaScript logic, decision-making algorithms, and interactive UI design. The project includes an AI opponent powered by the minimax algorithm, ensuring optimal gameplay, along with a traditional 2-player mode.",
  tech: ["JavaScript", "HTML5", "CSS3"],
  github: "https://github.com/RaiSan001/Tic_Tac_Toe",
  tags: ["game", "ai", "javascript"],
  featured: false,
  status: "complete",
},
{
  id: "pdf-manager",
  title: "PDF Merger and Splitter",
  description:
    "A Python desktop application for merging, splitting, and extracting pages from PDF files through a simple GUI.",
  longDescription:
    "Built as a beginner-friendly project to explore GUI development and file handling in Python. The application allows users to merge multiple PDFs into a single document, split PDFs into separate files, and extract selected pages from existing PDFs using an easy-to-use Tkinter interface.",
  tech: ["Python", "Tkinter", "Pillow"],
  github: "https://github.com/RaiSan001/PDF_Merger_and_Splitter",
  tags: ["pdf", "desktop-app", "python"],
  featured: true,
  status: "complete",
},
];