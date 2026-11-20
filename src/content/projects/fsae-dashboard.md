---
title: FSAE Dashboard
subtitle: Telemetry system for real-time vehicle monitoring and diagnostics
listed: true
order: 8
cardTitle: 26E Driver Dashboard
date: Sept 2024 - Current
summary: STM32F7 Discovery Board dashboard leveraging FreeRTOS for concurrent CAN bus sniffing and real-time display updates. Validated with Hardware-in-Loop testing using Arduino CAN Shield test bench.
gallery:
- src: /images/fsae-dashboard-main.jpg
  alt: FSAE Dashboard Main View
  caption: Main dashboard interface showing real-time telemetry data
- src: /images/fsae-dashboard-circuit.jpg
  alt: Dashboard Circuit Board
  caption: Custom PCB design for sensor integration
- src: /images/fsae-dashboard-installation.jpg
  alt: Dashboard Installation
  caption: Dashboard mounted in the FSAE vehicle
details:
- label: Duration
  value: Sept 2024 - Current
- label: Team Size
  value: 2-3 firmware engineers
- label: Role
  value: Lead Firmware Engineer & CS Team Lead
- label: Microcontroller
  value: STM32F7 Discovery Board
- label: Technologies
  value: STM32F7, FreeRTOS, CAN Bus, Real-time Operating Systems, Embedded C, Display Drivers
- label: Tools
  value: STM32CubeIDE, Git, CAN Bus Analyzers, Oscilloscopes, Logic Analyzers
links:
- label: View on GitHub
  url: https://github.com/UCR-FSAE/dashboard26E
footerTagline: UCR Highlander Racing
---

### Overview

The FSAE Dashboard is the driver's primary interface for real-time vehicle telemetry and system diagnostics during competitions and testing. Built on an STM32F7 Discovery Board with FreeRTOS real-time operating system, the dashboard simultaneously acquires data from the vehicle's CAN bus network while refreshing display information. It serves as both an information display and a critical safety system, providing drivers with essential vehicle status data during high-speed operation.

### Key Features

- STM32F7 Discovery Board with integrated LCD display
- FreeRTOS-based multitasking for concurrent CAN bus monitoring and display updates
- Real-time CAN bus message filtering and parsing
- Simultaneous display refresh independent of communication latency
- Custom GUI optimized for readability at high vehicle speeds
- Battery voltage and temperature monitoring with visual alerts
- Motor speed and torque command visualization
- Accumulator energy state display
- Hardware-in-Loop (HIL) test validation via Arduino CAN Shield test bench
- FSAE rules-compliant failure mode handling

### Technical Implementation

The system uses FreeRTOS to create two main tasks: a high-priority CAN bus sniffing task that continuously monitors incoming vehicle data, and a lower-priority display update task that refreshes the LCD with the latest vehicle state. This separation of concerns ensures that CAN message reception is never delayed by display refresh operations, guaranteeing that critical vehicle data is always captured with minimal latency. The STM32F7's processing capability is leveraged to maximize real-time performance.

### Testing & Validation

The dashboard was thoroughly validated using a custom CAN test bench built with an Arduino UNO and CAN Shield. This Hardware-in-Loop (HIL) setup simulates realistic vehicle operation by broadcasting torque commands, speed data, and temperature information. The test bench enabled rapid iteration and debugging of the dashboard firmware before full vehicle integration, significantly reducing development time.
