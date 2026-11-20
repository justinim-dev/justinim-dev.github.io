---
title: FSAE VCU
subtitle: Vehicle Control Unit for FSAE electric vehicle with motor control and safety systems
listed: true
order: 5
cardTitle: 26E Vehicle Control Unit
date: Jun 2025 - Current
summary: STM32F7 based Vehicle Control Unit implementing FSAE-compliant motor control with gradient equations for accelerator/brake pedal positions, torque curve calculations, and 500 kilobaud CAN bus communication to motor inverters.
gallery:
- src: /images/fsae-vcu-main.jpeg
  alt: FSAE VCU Main Board
- src: /images/fsae-vcu-fsm.jpg
  alt: FSAE VCU FSM Design
details:
- label: Duration
  value: Jun 2025 - Current
- label: Team Size
  value: 3-5 firmware engineers
- label: Role
  value: Lead Firmware Engineer & CS Team Lead
- label: Microcontroller
  value: STM32F7 Nucleo Board
- label: Technologies
  value: STM32, FreeRTOS (optional), Motor Control, CAN Bus, ADC, GPIO, Torque Curves, Safety Systems, FSM Design
- label: Tools
  value: STM32CubeIDE, Git, Oscilloscopes, Logic Analyzers, Multimeters, CAN Bus Analyzers, Power Supplies
links:
- label: View on GitHub
  url: https://github.com/UCR-FSAE/vcu26E
footerTagline: UCR Highlander Racing
---

### Overview

The Vehicle Control Unit (VCU) is the core of the FSAE electric vehicle's electrical architecture and safety systems. It orchestrates all motor control operations, implements critical safety features required by FSAE rules, and communicates with the inverter and other vehicle systems over the CAN bus. The VCU transforms driver inputs into precise motor torque commands while maintaining strict compliance with safety regulations.

### Key Features

- FSAE-compliant Accelerator Pedal Position Sensor (APPS) and Brake System Evaluation (BSE) plausibility checks
- Gradient-based accelerator and brake pedal position calculations via ADC inputs
- Torque curve implementation for optimal motor performance across RPM ranges
- Real-time torque command generation and CAN bus transmission at 500 kilobaud
- Ready to Move (RTM) system implementation for driver safety
- Motor controller integration with Cascadia PM100DX inverter and Emrax 228 motor
- Slew rate filtering to ensure smooth, intentional motor acceleration
- 100 millisecond rule compliance for safety-critical operations
- Both Simple Loop and Finite State Machine (FSM) architecture implementations
- Hardware abstraction via Prototype VCU hat for simplified integration
