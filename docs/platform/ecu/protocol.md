# Shassis Controller Communication Protocol

## 1. Overview
This protocol is designed for communication between a ROS2 system running on platforms such as RPI and a chassis controller operating on hardware like BeagleBone Blue or STM32. It uses UART for communication.

## 2. Protocol Architecture
The protocol consists of two layers:  
1. **Data Link Layer** – Ensures data integrity.  
2. **Application Layer** – Defines the core communication commands.  

### 2.1. Data Link Layer
The Data Link Layer ensures message integrity and completeness.

**Frame Format**
| Offset | Size (bytes) | Field         | Description |
|--------|-------------|---------------|-------------|
| 0      | 1           | `frame_length` | Total packet length including CRC16. |
| 1      | N           | `payload`      | Application Layer (Layer 2) data. |
| N+1    | 2           | `crc16`        | CRC16 checksum (Modbus polynomial: 0x8005). |

### 2.2 Application Layer
This layer defines the structure of the commands and responses.

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
| `0x06`     | [`get_imu`](#get_imu-0x06) | Retrieves IMU data (accelerometer, gyroscope, quaternion, magnetometer) |

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
| 1      | 1           | status           | 0 = OK, 1 = Error |

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
| 1      | 1           | status           | 0 = OK, 1 = Error |

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

### get_imu (0x06)

**Request**
| Offset | Size (bytes) | Field Description | Values |
|--------|--------------|-------------------|--------|
| 0      | 1            | command_id        | 0x06   |

**Response**
| Offset | Size (bytes) | Field Description | Values/Format |
|--------|-------------|--------------------|---------------|
| 0      | 1           | command_id         | 0x06 |
| 1      | 4           | accel_x            | Accelerometer X-axis (float, little-endian) |
| 5      | 4           | accel_y            | Accelerometer Y-axis (float, little-endian) |
| 9      | 4           | accel_z            | Accelerometer Z-axis (float, little-endian) |
| 13     | 4           | gyro_x             | Gyroscope X-axis (float, little-endian) |
| 17     | 4           | gyro_y             | Gyroscope Y-axis (float, little-endian) |
| 21     | 4           | gyro_z             | Gyroscope Z-axis (float, little-endian) |
| 25     | 4           | mag_x              | Magnetometer X-axis (float, little-endian) |
| 29     | 4           | mag_y              | Magnetometer Y-axis (float, little-endian) |
| 33     | 4           | mag_z              | Magnetometer Z-axis (float, little-endian) |
| 37     | 4           | quat_w             | Quaternion W component (float, little-endian) |
| 41     | 4           | quat_x             | Quaternion X component (float, little-endian) |
| 45     | 4           | quat_y             | Quaternion Y component (float, little-endian) |
| 49     | 4           | quat_z             | Quaternion Z component (float, little-endian) |

