# Modbus RTU Driver Library for Coolmay FX3G PLC

## Roadmap

- Modbus Master on port 3

## Terminology

- Register - an area of the memory in Modbus address stack.

## Requirements

This library require other libraries to be installed:

- Utils.sul
- TimeControl.sul

> !!! Important. This library uses timer `TC191`. Make sure you do not use it anywhere in your program.

## Description

This library helps you setup PLC as Modbus Slave or Modbus Master (on ports 2 and 3) to read and write data from Modbus devices over RTU. It requires minimum efforts to setup a master.

Coolmay PLCs have 2 RS485 ports. One is terminal connected and that one is port 2, and another is on DB9 connector,  that is one port 3.

## MB_PORT_SETTINGS

This function create a variable with correct bits for port initialization as master or slave.

| Variable | Scope | Type | Description |
| --- | --- | --- | --- |
| `Parity` | INPUT | ANY16 | Use constants  `MB_PARITY_NONE` or `MB_PARITY_ODD` or `MB_PARITY_EVEN` |
| `StopBit` | INPUT | ANY16 | Use constants `MB_STOPBIT_1` or `MB_STOPBIT_2` |
| `Baudrate` | INPUT | ANY16 | Use constants `MB_BPS_600` or `MB_BPS_1200` or `MB_BPS_2400` or `MB_BPS_4800` or `MB_BPS_9600` or `MB_BPS_19200` or `MB_BPS_38400` or `MB_BPS_57600` or `MB_BPS_115200` |

Declare local Unsigned Double Word variable in your program such as `PortSettings`. And the call function.

```iecst
PortSettings := MB_PORT_SETTINGS(MB_DL_8, MB_PARITY_NONE, MB_STOPBIT_1, MB_BPS_9600);
```

## Modbus Slave

### MB_SLAVE_INIT_PORT2

This function initialize Modbus slave on port 2 (terminal connector).

| Variable | Scope | Type | Description |
| --- | --- | --- | --- |
| `xInit` | INPUT | BIT | Signal to init data. It initialize every time there is rising edge on this parameter. |
| `iAddress` | INPUT | ANY16 | What will be the address of this PLC in a Modbus network |
| `PortSettings` | INPUT | ANY16 | Result of MB_PORT_SETTINGS function |

Example setup of slave with address 1 on port 2.

```iecst
PortSettings := MB_PORT_SETTINGS(MB_DL_8, MB_PARITY_NONE, MB_STOPBIT_1, MB_BPS_9600);
M0 := MB_SLAVE_INIT_PORT2(TRUE, 1, PortSettings);
```

This is all you need to make your PLC a slave. `M0` is not used anywhere.It is just requirement for calling functions. It have to have left side.

### MB_SLAVE_INIT_PORT3

This function initialize Modbus slave on port 3 (DB9 connector).

| Variable | Scope | Type | Description |
| --- | --- | --- | --- |
| `xInit` | INPUT | BIT | Signal to init data. It initialize every time there is rising edge on this parameter. |
| `iAddress` | INPUT | ANY16 | What will be the address of this PLC in a Modbus network |
| `PortSettings` | INPUT | ANY32 | Result of MB_PORT_SETTINGS function |

Example setup of slave with address 16 on port 3.

```iecst
PortSettings := MB_PORT_SETTINGS(MB_DL_8, MB_PARITY_NONE, MB_STOPBIT_1, MB_BPS_9600);
M0 := MB_SLAVE_INIT_PORT3(TRUE, 16, PortSettings);
```

## Modbus Master

Right now you can setup Modbus master only on port 2 (terminal connector).

### MB_MASTER_INIT_PORT2

This function initialize Modbus Master on port 2 (terminal connector).

| Variable | Scope | Type | Description |
| --- | --- | --- | --- |
| `xInit` | INPUT | BIT | Signal to init data. It initialize every time there is rising edge on this parameter. |
| `PortSettings` | INPUT | ANY32 | Result of MB_PORT_SETTINGS function |

Example setup of master on port 2.

```iecst
PortSettings := MB_PORT_SETTINGS(MB_DL_8, MB_PARITY_NONE, MB_STOPBIT_1, MB_BPS_9600);
M0 := MB_MASTER_INIT_PORT2(TRUE, PortSettings);
```

### MB_PROCESS

This function writes and reads from slave devices.

| Variable | Scope | Type | Description |
| --- | --- | --- | --- |
| `mb_xEnable` | INPUT | BIT | Start processing channels. |
| `mb_arRegs` | INPUT | ARRAY(0..29) OR MB_REG | List of channels |

First you have to create array on 30 elements of MB_REG structure. This array is a list of channels you will process. Every channel may read\write up to 125 registers. After you created this array, you have to setup it once. For instance when PLC starts. You can use `M8002` flag.

This is the list of parameter of every channel.

| Variable | Type | Description |
| --- | --- | --- |
| `iRDevNum` |  ANY16 | Number of `R` device to store result value. For instance if set to `K200` then result of read will be in `R200`. |
| `iNum` |  ANY16 | Number of registers to use.   |
| `iReg` |  ANY16 | Start Modbus (holding\input) register address.  |
| `iRF` |  ANY16 | Modbus read Function (`H3` or `H4`). Default is `H3`.  |
| `iWF` |  ANY16 | Modbus write Function (`H6` or `H10`). Default is `H6`. |
| `iDev` |  ANY16 | Address of slave device.  |
| `tCycle` |  ANY16 | How often to read\write this channel. Use time constants. resolution is `T#10ms`, but I do not recommend to set less that `T#100ms`. |
| `iWriteOnChange` |  ANY16 | If set to `1`, it will write changes to slave immediately as detected otherwise will wait until `tCycle` is reached. |
| `iWR` |  ANY16 | Read write mode. Default is `MB_READ_WRITE`. `MB_READ` or `MB_WRITE` could be set. |

#### `iNum`

Note that it uses double number of devices. If `iNum` is `1` and `iRDevNum` is `200`, then `R200` will have a result and `R201` will be used for internal use. If `iNum` is 5, then `R200`-`R204` will have results and `R205`-`R209` will be used for internal calculations. You have to keep that in mind when setup channels.

For instance if you have setup like this.

```iecst
arRegs[0].iRDevNum := 600;
arRegs[0].iNum := 3;

arRegs[1].iRDevNum := 603;
arRegs[1].iNum := 1;
```

This setup is logical because on a second channel you configure next free device, but without taking in account internal calculation devices, thus will not work.

If you read 3 registers into `R600` next free device will be `R606`.

#### `iWF`

2 functions a supported for write. `H6` to write single register and `H10` to write group of registers. When you set `H6` on a multiple registers channel, when change is detected, it will write only that particular register. If you set `H10` on a multiple registers channel, even if one register in that group is changed it will update slave all registers in one request.

#### Example

Example setup of master on port 2.

```iecst
PortSettings := MB_PORT_SETTINGS(MB_DL_8, MB_PARITY_NONE, MB_STOPBIT_1, MB_BPS_9600);
M0 := MB_MASTER_INIT_PORT2(TRUE, PortSettings);

IF M8002 THEN
    arRegs[0].iRDevNum := 600;
    arRegs[0].iNum := 3;
    arRegs[0].iReg := K16384;
    arRegs[0].iRF := H3;
    arRegs[0].iWF := H6;
    arRegs[0].iDev := H1;
    arRegs[0].tCycle := T#1s;
    arRegs[0].iWriteOnChange := 1;


    arRegs[1].iRDevNum := 610;
    arRegs[1].iNum := 1;
    arRegs[1].iReg := K16389;
    arRegs[1].iRF := H3;
    arRegs[1].iDev := K16;
    arRegs[1].tCycle := T#200ms;
    arRegs[0].iWR := MB_READ;
END_IF;

fbMbProcess(mb_xEnable := TRUE, mb_arRegs:= arRegs);
```

This is all you need. Now in `R600`, `R601` and `R602` will be a results of a first channel from device address 1, updated every second and if changed immediately update slave.

On a `R610` will be result of second channel. If `R610` is changed, it will not update slave but override it with new value from slave in 200ms.
