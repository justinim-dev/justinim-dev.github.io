---
title: 26E Thermistor Sense Module
subtitle: Battery thermal monitoring system for temperature-dependent safety in FSAE electric vehicle
pageTitle: FSAE Thermistor Sense Module
listed: true
order: 4
date: Oct 2025 - Current
summary: STM32 Bluepill and ESP-32 based thermal monitoring module for Highlander Racing's battery pack. Collects multiplexed thermistor data, converts ADC values to temperature using calibration equations, and packages data into CAN messages.
gallery:
- src: /images/placeholder.jpg
  alt: Thermistor Sense Module Board
- src: /images/placeholder.jpg
  alt: Thermistor Network
details:
- label: Duration
  value: Oct 2025 - Current
- label: Team Size
  value: 1-2 engineers
- label: Role
  value: Lead Hardware & Firmware Engineer
- label: Technologies
  value: STM32, ESP-32, ADC, CAN Bus, Thermistor Sensing, Arduino IDE
- label: Languages
  value: C++
- label: Tools
  value: PlatformIO, Multimeter, Thermal Imaging Camera, Oscilloscope
links:
- label: STM32 Bluepill Implementation
  url: https://github.com/UCR-FSAE/thermistor-module
- label: ESP-32 Implementation
  url: https://github.com/UCR-FSAE/ThermSenseESP
footerTagline: CS Development Team Lead at UCR Highlander Racing
---

### Overview

The Thermistor Sense Module is a distributed thermal monitoring solution for the 26E electric vehicle's battery pack. Battery temperature is critical for safety and performance, and this module provides real-time temperature data across multiple pack locations to ensure safe operation under varying load conditions.

### Key Features

- STM32 Bluepill microcontroller for primary data processing
- Optional ESP-32 wireless capability for future expansion
- Multiplexed thermistor data acquisition across subpack
- Precision ADC conversion from analog sensor readings
- Calibration equation for accurate temperature conversion
- CAN Bus message packaging for vehicle network integration
- Low-power design suitable for battery-powered operation

### Technical Implementation

The module reads analog voltages from multiple thermistors connected to multiplexed ADC inputs on the STM32 Bluepill. Each reading is converted to temperature using a calibration equation derived from thermistor datasheets. The processed temperature data is packaged into CAN messages and transmitted to the Vehicle Control Unit and Battery Management System for safety decision-making.

### Temperature Monitoring Strategy

Thermistors are distributed strategically across different sections of the battery subpack to capture temperature gradients. This provides better understanding of thermal distribution and helps identify hot spots that could affect battery safety or performance. The CAN messages are broadcast at regular intervals, allowing other systems to monitor pack health in real-time.

### Results

The thermistor module successfully provides the necessary thermal visibility into the battery pack. Engineers can now make informed decisions about charging rates, discharge rates, and thermal management strategies. The system detected thermal anomalies during testing that would have otherwise gone unnoticed.
