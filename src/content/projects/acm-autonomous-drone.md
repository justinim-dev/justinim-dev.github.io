---
title: Autonomous Drone Navigation
subtitle: Computer vision-based autonomous obstacle course navigation system
listed: true
order: 7
date: Dec 2024 - Current
summary: Python-based autonomous drone navigating obstacle courses using Raspberry Pi, OpenCV for cone detection, and trained HAAR Cascade models for real-time computer vision processing.
gallery:
- src: /images/placeholder.jpg
  alt: Autonomous Drone Platform
- src: /images/placeholder.jpg
  alt: Cone Detection in Action
- src: /images/placeholder.jpg
  alt: Obstacle Course Setup
details:
- label: Duration
  value: Dec 2024 - Current
- label: Team Size
  value: 8-12 students
- label: Role
  value: Project Director & Lead Software Engineer
- label: Technologies
  value: OpenCV, HAAR Cascade, Computer Vision, Autonomous Systems, Drone Flight Control
- label: Languages
  value: Python
- label: Hardware
  value: Raspberry Pi Zero, Drone Platform, USB Camera/CSI Camera
- label: Tools
  value: OpenCV, PuTTY, SSH, Python Flask (server), Git
links:
- label: View on GitHub
  url: https://github.com/acm-ucr/autonomous-drone
footerTagline: Software Engineer at ACM@UCR
---

### Overview

The Autonomous Drone Navigation project is a student-led initiative at ACM@UCR to develop a fully autonomous unmanned aerial vehicle capable of navigating complex obstacle courses. The system combines computer vision, real-time image processing, and flight control to autonomously detect and navigate around obstacles.

### Key Features

- Real-time video streaming from drone camera to ground station
- OpenCV-based cone detection and tracking
- HAAR Cascade classifier for robust object recognition
- Python-based processing pipeline on Raspberry Pi
- Local server for frame capture and analysis
- Autonomous flight path planning and obstacle avoidance
- Scalable architecture for future enhancements

### Technical Architecture

The system architecture consists of three main components: the drone itself with a camera and Raspberry Pi Zero for onboard processing, an intermediate local server that captures and queues video frames, and a laptop running the main computer vision pipeline. The Raspberry Pi streams video frames to the server, which are then processed by OpenCV for cone detection. The detection results inform autonomous flight decisions through a feedback loop.

### Computer Vision Pipeline

The vision pipeline employs a trained HAAR Cascade model for cone detection. During development, we created a custom training dataset by scraping the internet for positive samples (cone images) and negative samples (background images without cones). A Python script with a graphical interface was developed to manage the training data collection and model training process, making it easy for team members to contribute datasets.

### Challenges & Solutions

One of the main challenges was reliably detecting orange traffic cones under varying lighting conditions and from different altitudes. This was addressed by training multiple HAAR Cascade models with diverse datasets and implementing confidence thresholding to filter false positives. The distributed processing architecture (edge processing on Pi + cloud processing on laptop) helped optimize latency and computational efficiency.

### Results & Learning Outcomes

The project successfully demonstrated autonomous navigation through an obstacle course, with the drone autonomously identifying cones and adjusting flight paths to avoid collisions. Beyond technical achievements, the project provided valuable experience in computer vision, embedded Linux systems, drone programming, and collaborative robot development.
