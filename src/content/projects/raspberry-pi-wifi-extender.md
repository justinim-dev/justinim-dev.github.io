---
title: Raspberry Pi WiFi Extender
subtitle: Network extension project leveraging Raspberry Pi hardware
listed: true
order: 3
date: ACM Project
summary: A WiFi range extension project built on Raspberry Pi, extending network coverage and connectivity.
gallery:
- src: /images/placeholder.jpg
  alt: Raspberry Pi Hardware Setup
- src: /images/placeholder.jpg
  alt: Network Configuration
- src: /images/placeholder.jpg
  alt: WiFi Coverage Demonstration
details:
- label: Organization
  value: ACM@UCR
- label: Role
  value: Developer
- label: Hardware
  value: Raspberry Pi, Wireless Network Adapters
- label: Technologies
  value: Linux Networking, Network Bridging, WiFi Protocols
- label: Languages
  value: Bash, Python
- label: Tools
  value: Linux, iptables, hostapd, dnsmasq, SSH
links:
- label: View on GitHub
  url: https://github.com/acm-ucr/wifi-extender
footerTagline: Developer at ACM@UCR
---

### Overview

The Raspberry Pi WiFi Extender project demonstrates practical network engineering on embedded systems. This project transforms a Raspberry Pi into a wireless network extender, extending WiFi coverage to areas with weak signal strength.

### Project Goals

- Extend wireless network coverage using Raspberry Pi hardware
- Configure network bridging and routing protocols
- Optimize signal strength and connectivity
- Create a low-cost alternative to commercial WiFi extenders

### Hardware Configuration

The project utilizes a Raspberry Pi as the central processing unit, paired with wireless networking adapters to receive the existing WiFi signal and broadcast an extended network. The hardware setup is designed to be compact and energy-efficient while maintaining stable network performance.

### Network Implementation

The WiFi extender operates by bridging wireless interfaces, allowing the Raspberry Pi to receive signals on one adapter and retransmit them on another. This approach leverages Linux networking capabilities and custom configuration scripts to manage connection stability and signal optimization.

### Technical Challenges

Key challenges addressed include managing dual wireless interfaces, maintaining sufficient bandwidth across the bridge, minimizing latency, and ensuring reliable automatic reconnection in case of signal loss. These were solved through careful tuning of network parameters and implementation of monitoring scripts.

### Learning Outcomes

This project provided comprehensive experience in embedded Linux networking, wireless protocols, network bridge configuration, and hands-on troubleshooting of complex connectivity issues on resource-constrained devices.
