---
sidebar_position: 2
---

import YouTubeVideo from '@site/src/components/youtube';

# Tasks
Here you can find a list of tasks that you can choose for yourself.

## Electronics development

We are looking for students who are willing to participate in development of printed circuit boards.
For development these boards we use [**KiCAD**](https://www.kicad.org/)

### Raspberry Pi power board
Raspberry PI power from the battery needs to have stable and quite powerful DC-DC converter.

We have already developed the first prorotype:

![RPI HAT](../platform/rpi_power_hat/img/rpihat_v1.png)

But as expected mistakes were made and wishes were expressed for an improvement.

### Chassis controller

A chassis controller is required to control the robot's motors. Currently, we're using [BeagleBone Blue](https://www.beagleboard.org/boards/beaglebone-blue). But it's too expensive and impossible to buy lately. That's why we want to develop our own controller on STM32 base.

**Main features:**
* Control of four DC motors 
* Reading motor encoder readings
* Accelerometer reading and calibration
* Compass reading and calibration
* GPS module data reading
* PID wheel speed regulator
* Ethernet interface for receiving control commands
* PWM outputs for servomotor control.

Functional diagram: [Архітектура системи](../platform/overview/overview.md).

At the first stage, since there is a risk of making plenty of mistakes, we're planning to develop the board as a STM32-Discovery expansion board. Then, when we have gained experience, we're going to develop a full-fledged board with STM32 microcontroller installed on it.

## Embedded software development

The chassis controller requires a STM32 software. We're looking for a students team, who will participate in it's development.
See the chassis design task description for basic functionality.

## Robot design development
At the first stage, we've decided to make the design as simple as possible, so that the assembly wouldn't reqiure special tools and the materials could be purchased easily and inexpensively. Therefore, our robot now looks like this: 
![KPI Rover](./img/kpi_rover.png)

In this design, the main disadvantage of this robot - he cannot be used in bad weather conditions. Also, the chassis has poor cross-country ability due to lack of suspension.

We're looking for students, who can design, print and assemble a modern robot chassis for this project.

Here's an example of a good open source project:

<YouTubeVideo videoId="90HxqwZaWRA" />

## DevOps and Dev Process

The number of project participants is growing. The amount of source code and it's complexity is also increasing. Therefore, to simplify the development process and prevent changes from software breaking, we need to:
1. **Describe the development process:**
   * How to join the project.
   * How to create a task?
   * How to create a working branch?
   * How to create a PR?
   * Commit requirements
   * Code style requirements
   * Unit tests coverage requirements
   * Static code analysis requirements
   * etc.
2. **Configure CI using GitHub Actions**
3. **Configure Release process using GitHub Packages**
