---
title: 27E Custom Battery Management System
subtitle: Advanced cell-level monitoring and management for FSAE electric vehicle competition
pageTitle: FSAE 27E Custom BMS
listed: true
order: 2
date: Mar 2026 - Current
summary: Leading R&D of a custom BMS for Highlander Racing's 27E competition car using 10 BQ79616 management units communicating to a Teensy 4.1 with CAN Bus output for cell voltage monitoring.
gallery:
- src: /images/placeholder.jpg
  alt: BMS Cell Monitoring Module
- src: /images/placeholder.jpg
  alt: Teensy 4.1 Integration
details:
- label: Duration
  value: Mar 2026 - Current
- label: Team Size
  value: 1-2 engineers
- label: Role
  value: Lead Hardware & Firmware Engineer
- label: Technologies
  value: Teensy 4.1, BQ79616, CAN Bus, Battery Management, Isolated Communication
- label: Languages
  value: C++
- label: Tools
  value: PlatformIO, Oscilloscopes, Battery Testing Equipment
links:
- label: View on GitHub
  url: https://github.com/UCR-FSAE/bms27E
footerTagline: CS Development Team Lead at UCR Highlander Racing
---

### Overview

The 27E Custom Battery Management System (BMS) is a sophisticated cell-level monitoring solution designed for Highlander Racing's 27E competition vehicle. This project represents a significant advancement in battery safety and performance monitoring, utilizing specialized integrated circuits to track individual cell voltages in a high-voltage battery pack.

### Key Features

- 10 BQ79616 battery management ICs in series configuration for comprehensive cell monitoring
- Teensy 4.1 microcontroller as the primary processing unit
- Real-time cell voltage acquisition and balancing algorithms
- CAN Bus communication for vehicle integration
- Temperature monitoring for thermal protection
- Isolated communication for safety and noise immunity
- FSAE Rule compliance for battery management

### Technical Implementation

The system employs a daisy-chain architecture with 10 BQ79616 cells connected in series, allowing simultaneous monitoring of up to 160 individual cells. Each BQ79616 communicates back to the Teensy 4.1 microcontroller, which aggregates the data and broadcasts critical battery information over the CAN bus. The implementation includes sophisticated filtering algorithms to ensure data integrity in the noisy automotive environment.

### Challenges & Solutions

One major challenge was ensuring reliable communication across all 10 BQ79616 modules despite the high-current, high-noise environment of an electric vehicle. This was addressed through careful signal integrity analysis, proper PCB layout with multiple ground planes, and implementation of error-checking protocols on the CAN bus messages.

### Results

The custom BMS provides unprecedented visibility into battery cell health, enabling the team to optimize pack performance, extend battery life, and ensure safe operation under racing conditions. The system successfully demonstrated reliable operation during 27E development and testing phases.
