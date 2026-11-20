---
title: 24E CAN Test Bench
subtitle: Hardware-in-Loop testing platform for FSAE vehicle firmware validation
pageTitle: FSAE CAN Test Bench
listed: true
order: 6
date: Apr 2025 (1 month)
summary: Arduino UNO with CAN Shield device for broadcasting joystick ADC input over CAN bus. Built to validate Dashboard CAN bus sniffing capabilities and test firmware during development.
gallery:
- src: /images/placeholder.jpg
  alt: CAN Test Bench Setup
- src: /images/placeholder.jpg
  alt: Arduino with CAN Shield
details:
- label: Duration
  value: Apr 2025 (1 month)
- label: Team Size
  value: 1-2 engineers
- label: Role
  value: Design Engineer
- label: Technologies
  value: CAN Bus, ADC, Joystick Input, MCP2515
- label: Languages
  value: Arduino C++
- label: Tools
  value: Arduino IDE, Oscilloscope, CAN Bus Analyzer
links:
- label: View on GitHub
  url: https://github.com/UCR-FSAE/can-test-bench
footerTagline: CS Development Team Lead at UCR Highlander Racing
---

### Overview

The CAN Test Bench is a critical tool for validating Vehicle Control Unit (VCU) and Dashboard firmware in a controlled laboratory environment. This Hardware-in-Loop (HIL) testing platform simulates vehicle inputs and the CAN bus communication that occurs during actual racing conditions.

### Key Features

- Arduino UNO microcontroller for test signal generation
- Arduino CAN Shield (MCP2515 based) for CAN bus communication
- Joystick input simulation for driver commands
- ADC-based analog signal generation
- Real-time CAN message broadcasting at 500 kilobaud
- Flexible configuration for various test scenarios
- Cost-effective and quick to iterate

### Technical Implementation

The test bench uses an Arduino UNO to read a joystick connected to its ADC inputs, converting analog stick positions into CAN messages that are then broadcast on the CAN bus at 500 kilobaud. This simulates the accelerator and brake pedal inputs that would normally come from the driver interface. The system allows firmware engineers to test VCU logic without assembling a complete vehicle.

### Development Workflow

Developers use this test bench as part of their development cycle before hardware integration testing. They can rapidly iterate on firmware changes, test edge cases, and validate CAN communication protocols. The test bench proved invaluable for accelerating development of both the Dashboard and VCU firmware.

### Results

The CAN test bench successfully enabled rapid firmware development and debugging, reducing the time needed for full-vehicle integration testing. Many firmware bugs were caught and fixed before first vehicle startup, significantly improving reliability and safety.
