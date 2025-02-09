# Requirements for the Raspberry Pi Power HAT

1. The board should be designed as a HAT (Hardware Attached on Top) module. The board should meet all requirements except for the presence of EEPROM. Requirements: [https://github.com/raspberrypi/hats/blob/master/designguide.md](https://github.com/raspberrypi/hats/blob/master/designguide.md)
2. The board should be based on the AP64500SP DC-DC converter ([https://www.diodes.com/assets/Datasheets/AP64500.pdf](https://www.diodes.com/assets/Datasheets/AP64500.pdf))
3. The board should provide an output voltage of 5.1V and a current of 5A.
4. Power to the Raspberry Pi should be supplied through the 40-pin connector. All GND pins should be connected together. Both +5V pins should be used.
5. The board should have an additional +5V output connector to allow its use separately for powering other devices.
6. Screw terminal blocks should be used for power input and for the additional +5V output.
7. The board should have protection against reverse polarity connection of the power source.
8. The board should have additional protection against overvoltage.
9. The board should have a serial interface connector at TTL levels. It will be used to connect to the chassis controller. Connector type: JST PH.
10. The board should have serial interface and I2C interface connectors for connecting a GPS sensor with a compass. Connector types: JST PH.
11. The board should have a green LED connected to +5V to indicate the presence of power.
12. The printed circuit board should be designed using KiCad EDA (https://www.kicad.org/).
13. All components of the board should be available for order on the website: https://www.lcsc.com/
14. All KiCAD library components shoul have field ``LCSC`` that is used to make order.