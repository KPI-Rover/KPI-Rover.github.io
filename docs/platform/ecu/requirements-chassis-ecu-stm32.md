# Requirements for the Chassis Controller PCB

1. The controller should be designed as an expansion board for the STM32F407G-DISC1 development board.
2. The controller should be powered by an external power source with a voltage range of 6V to 30V.
3. The controller should have protection against reverse polarity connection of the power source.
4. Screw terminal blocks should be used for power connections.
5. The controller should measure the input voltage of the power source.
6. The controller should have a buzzer controlled by MCU.
7. The controller should have 4 groups of output signals for motor control. Connector type: JST PH.  
   Signals in each group:
   - PWM with a frequency up to 20 kHz. Logic level 5V.
   - Forward (F) — logic output for direction control. Logic level 5V.
   - Reverse (R) — logic output for direction control. Logic level 5V.
   - GND.
8. The controller should have 4 groups of inputs for encoders. Connector type: JST PH.  
   Signals in each group:
   - +5V — encoder power supply.
   - GND.
   - Phase A — signal from the encoder for tracking position or rotation. Used to determine the direction of movement along with the Phase B signal.
   - Phase B — signal working together with Phase A for precise determination of direction and number of rotations. By alternating the signals of phases A and B, both speed and direction of movement can be determined.
9. The controller should have on board 4 status blue LEDs. The current through the LED should be limited to 15 mA. Connector type: JST PH.
10. The controller should have an output for connecting 3 external status LEDs (red, yellow, green). The current through each LED should be limited to 15 mA. Connector type: JST PH.
11. The controller should have a serial interface connector at TTL levels. Connector type: JST PH.
12. The controller should have 2 inputs for HC-SR04 ultrasonic sensors. Connector type: JST PH.  
   Signals for each sensor:
   - VCC — sensor power supply (+5V).
   - GND — ground.
   - TRIG — input signal to trigger the ultrasonic wave. The controller sends a short pulse (10 microseconds) to activate the measurement.
   - ECHO — output signal indicating the return time of the reflected ultrasonic wave. The duration of this signal is proportional to the distance to the object.
13. The controller should have the MPU-6050 (IMU) module.
14. The controller should have a serial interface connector at TTL level with 5V power for external GPS sensor. Connector type: JST PH. 
15. The controller shopuld have connector for external compas connected over I2C interface. Connector type: JST PH.
16. The dimensions of the controller board should not exceed 110x190 mm. Preferably, but not necessarily, not exceed 100x100 mm.
17. The number of PCB layers should not exceed 4. Preferably 2.
18. The controller board should have 4 holes with a diameter of 3.2 mm at the corners for mounting to the chassis.
19. All SMD components should be placed on the side of the STM32F407G-DISC1 board connector.
20. All connectors for connecting modules, signals, and power should be located on the opposite side of the STM32F407G-DISC1 board.
21. The printed circuit board should be designed using KiCad EDA (https://www.kicad.org/).
22. All components of the board should be available for order on the website: https://www.lcsc.com/
