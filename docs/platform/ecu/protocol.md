# Shassis Controller Communication Protocol

## 1. Overview
This protocol is designed for communication between a ROS2 system running on platforms such as RPI and a chassis controller operating on hardware like BeagleBone Blue or STM32. It supports both TCP and UART, allowing for a seamless future transition between the two communication methods.

## 2. Protocol Architecture
The protocol consists of two layers:  
1. **Frame Layer (Layer 1)** – Ensures data integrity, required only for UART.  
2. **Protocol Layer (Layer 2)** – Defines the core communication commands.  

### 2.1. Frame Layer (Layer 1) – UART Only
**(Not used in TCP mode)**  
The frame layer is **only applicable when using UART**, as UART does not guarantee message integrity or completeness.

**Frame Format (UART Only)**
| Offset | Size (bytes) | Field         | Description |
|--------|-------------|---------------|-------------|
| 0      | 1           | `frame_length` | Total packet length (including CRC16). Ensures packet boundary detection over UART |
| 1      | N           | `payload`      | Protocol Layer (Layer 2) data |
| N+1    | 2           | `crc16`        | CRC16 checksum. Provides error detection for unreliable UART communication |

### 2.2 Protocol Layer (Layer 2) – Used in TCP & UART
This is the core protocol used in both TCP and UART modes. 

**Protocol Format**
| Offset | Size (bytes) | Field         | Description |
|--------|-------------|---------------|-------------|
| 0      | 1           | `command_id`   | Unique command identifier |
| 1      | N           | `payload`      | Command-specific data |

## 3. Command Set
| Command ID | Command Name       | Description          |
|------------|-------------------|----------------------|
| `0x01`     | [`get_api_version`](#get_api_version-0x01) | Retrieves the API version of the system |
| `0x02`     | [`set_motor_speed`](#set_motor_speed-0x02) | Sets the speed of a motor |
| `0x03`     | [`set_all_motors_speed`](#set_all_motors_speed-0x03) | Sets the speed for all four motors in a single command |
| `0x04`     | [`get_encoder`](#get_encoder-0x04) | Retrieves the encoder value for a specific motor |
| `0x05`     | [`get_all_encoders`](#get_all_encoders-0x05) | Retrieves the encoder values for all motors |

### get_api_version (0x01)
Retrieves the firmware/API version.

**Request**
| Offset | Size (bytes) | Field Description | Values |
|--------|-------------|------------------|--------|
| 0      | 1           | command_id       | 0x01   |
| 1      | 1           | ROS2 Driver Version | 1-255 |

**Response**
| Offset | Size (bytes) | Field Description | Values |
|--------|-------------|------------------|--------|
| 0      | 1           | command_id       | 0x01   |
| 1      | 1           | API Version      | 1-255  |

### set_motor_speed (0x02)
Sets the speed of a specific motor.

**Request**
| Offset | Size (bytes) | Field Description | Values |
|--------|-------------|------------------|--------|
| 0      | 1           | command_id       | 0x02   |
| 1      | 1           | motor_id         | Motor ID (0-3) |
| 2      | 4           | speed            | Speed in RPM multiplied by 100 (signed value, negative value means reverse direction) |

**Response**
| Offset | Size (bytes) | Field Description | Values |
|--------|-------------|------------------|--------|
| 0      | 1           | command_id       | 0x02   |

### set_all_motors_speed (0x03)
Sets the speed for all four motors in a single command.

**Request**
| Offset | Size (bytes) | Field Description | Values |
|--------|-------------|------------------|--------|
| 0      | 1           | command_id       | 0x03   |
| 1      | 4           | speed_motor_1    | Speed in RPM multiplied by 100 (signed value, negative value means reverse direction) |
| 5      | 4           | speed_motor_2    | Speed in RPM multiplied by 100 (signed value, negative value means reverse direction) |
| 9      | 4           | speed_motor_3    | Speed in RPM multiplied by 100 (signed value, negative value means reverse direction) |
| 13     | 4           | speed_motor_4    | Speed in RPM multiplied by 100 (signed value, negative value means reverse direction) |

**Response**
| Offset | Size (bytes) | Field Description | Values |
|--------|-------------|------------------|--------|
| 0      | 1           | command_id       | 0x03   |

### get_encoder (0x04)
Retrieves the encoder value for a specific motor.

**Request**
| Offset | Size (bytes) | Field Description | Values |
|--------|-------------|------------------|--------|
| 0      | 1           | command_id       | 0x04   |
| 1      | 1           | motor_id         | Motor ID (0-3) |

**Response**
| Offset | Size (bytes) | Field Description | Values |
|--------|-------------|------------------|--------|
| 0      | 1           | command_id       | 0x04   |
| 1      | 4           | encoder_value    | Encoder value (signed value, negative value means reverse direction) |

### get_all_encoders (0x05)
Retrieves the encoder values for all motors.

**Request**
| Offset | Size (bytes) | Field Description | Values |
|--------|-------------|------------------|--------|
| 0      | 1           | command_id       | 0x05   |

**Response**
| Offset | Size (bytes) | Field Description | Values |
|--------|-------------|------------------|--------|
| 0      | 1           | command_id       | 0x05   |
| 1      | 4           | encoder_value_motor_1 | Encoder value (signed value, negative value means reverse direction) |
| 5      | 4           | encoder_value_motor_2 | Encoder value (signed value, negative value means reverse direction) |
| 9      | 4           | encoder_value_motor_3 | Encoder value (signed value, negative value means reverse direction) |
| 13     | 4           | encoder_value_motor_4 | Encoder value (signed value, negative value means reverse direction) |

