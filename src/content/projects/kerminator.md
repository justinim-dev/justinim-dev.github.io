---
title: Kerminator
subtitle: Custom designed robotic manipulator with CAN bus integration
listed: false
gallery:
- src: /images/kerminator-full.jpg
  alt: Kerminator Full View
  caption: Complete robotic manipulator assembly
- src: /images/kerminator-mechanical.jpg
  alt: Mechanical Components
  caption: 3D printed mechanical components and assembly
- src: /images/kerminator-control.jpg
  alt: Control System
  caption: Arduino-based motor control system
details:
- label: Duration
  value: 6 months
- label: Team Size
  value: 2 engineers
- label: Role
  value: Lead Robotics Engineer
- label: Technologies
  value: Arduino, CAN bus, Python, 3D Printing
- label: Tools
  value: Arduino IDE, Fusion 360, Git, ROS
links:
- label: View on GitHub
  url: https://github.com/justinim-dev/kerminator
footerTagline: UCR Highlander Racing
---

### Overview

The Kerminator is a custom-designed robotic manipulator with advanced CAN bus integration for precise control and coordination. Built for research applications in robotics and automation, this project demonstrates the integration of mechanical design, embedded systems, and control theory.

### Key Features

- 6-degree-of-freedom robotic arm with high precision servo control
- Distributed control system using CAN bus network
- Modular design for easy maintenance and upgrades
- Safety interlocks and emergency stop functionality
- Real-time position feedback and control
- ROS integration capabilities for advanced robotics applications
- Custom 3D printed mechanical components

### Technical Implementation

The robotic arm utilizes Arduino-based motor controllers for each joint, communicating through a CAN bus network for distributed control. The mechanical design incorporates 3D printed components for rapid prototyping and customization. The system includes position sensors, limit switches, and safety features to ensure reliable operation.

### Challenges & Solutions

The main challenge was achieving precise coordination between multiple joints while maintaining smooth motion. This was solved through careful tuning of PID controllers and implementing a master-slave communication protocol over the CAN bus. Another challenge was ensuring mechanical stability, which was addressed through iterative design improvements and material selection.

### Results

The Kerminator successfully demonstrated precise positioning capabilities with sub-millimeter accuracy. The modular design allowed for easy integration of additional sensors and tools, making it a versatile platform for robotics research. The project provided valuable insights into distributed control systems and mechanical design optimization.
