// Everything about you that appears on more than one page lives here.
// Change it once and every page picks it up.

export const site = {
  name: 'Justin Im',
  tagline: 'Engineer | Developer | Creator',
  footerTagline: 'CS Development Team Lead at UCR Highlander Racing',
  email: 'imjustin679@gmail.com',
  phone: '+1 (925) 399 9234',
  github: 'https://github.com/justinim-dev',
  linkedin: 'https://linkedin.com/in/justin-h-im',
  profileImage: '/images/profile.jpg',
};

export const about =
  "Hello, I'm Justin Im, a Robotics Engineering student at UC Riverside passionate about embedded systems and firmware development. I specialize in working with STM32 microcontrollers, real-time operating systems, and CAN bus communication. As a technical lead at Highlander Racing, I manage firmware development for Formula SAE electric vehicles. I draw inspiration from science fiction and hope to apply those ideas to projects that improve living standards and address environmental challenges.";

export type Entry = {
  name: string;
  role: string;
  duration: string;
  bullets?: string[];
};

export const education: Entry[] = [
  {
    name: 'University of California, Riverside',
    role: 'B.S. in Robotics Engineering',
    duration: 'Expected June 2027',
  },
];

export const experience: Entry[] = [
  {
    name: 'UCR Highlander Racing',
    role: 'CS Development Team Lead',
    duration: 'Dec 2023 - Present',
    bullets: [
      'Project managing a team of 10-20 people to develop firmware for FSAE electric vehicles',
      'Designing and implementing Vehicle Control Unit (VCU) using STM32F7 with FreeRTOS for real-time motor control and safety systems',
      'Creating driver dashboard with STM32F7 Discovery Board utilizing FreeRTOS for concurrent CAN bus communication and display updates',
      'Leading development of custom Battery Management System using BQ79616 ICs and Teensy 4.1 for cell monitoring and CAN bus integration',
      'Overseeing Thermistor Sense Module design using STM32 Bluepill and ESP-32 for thermal monitoring',
      'Presenting software design choices to panels of alumni and industry professionals in design reviews',
    ],
  },
  {
    name: 'ACM@UCR',
    role: 'Software Engineer & Project Director',
    duration: 'Jun 2024 - Present',
    bullets: [
      'Developed autonomous drone project for navigating obstacle courses using Python, Raspberry Pi, and OpenCV',
      'Implemented computer vision pipeline with HAAR Cascade model for cone detection',
      'Built touch screen interface for Wizard-Chess game using C++ and Qt Creator',
      'Contributed to Women in the Law (WITL) website using Node.js, React, Next.js, and Tailwind CSS',
    ],
  },
  {
    name: 'UCR PRT Lab',
    role: 'Undergraduate Student Researcher',
    duration: 'Mar 2025 - Present',
    bullets: [
      'Investigating face detection and emotion recognition applied to infant research',
      'Evaluating facial detection models (MTCNN, dlib, RetinaFace) with Emotion-FER+ for accuracy and performance',
      'Implementing computer vision models using Python and Docker for analysis',
    ],
  },
];

export const skills: { title: string; items: string[] }[] = [
  { title: 'Languages', items: ['C', 'C++', 'Python', 'Verilog'] },
  {
    title: 'Embedded Systems',
    items: ['STM32 (HAL, FreeRTOS)', 'Arduino', 'CAN Bus', 'UART', 'ADC/GPIO', 'Finite State Machines (FSM)'],
  },
  {
    title: 'Platforms & Tools',
    items: ['STM32CubeIDE', 'PlatformIO', 'Git', 'Linux', 'Raspberry Pi', 'OpenCV', 'ROS2', 'Solidworks'],
  },
];
