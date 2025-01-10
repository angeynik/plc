# Alarm Manager 128 Libaray for Coolmay FX3G PLC

> ## Depricated!!! Use Alarm Manager 128

## Rodemap

- Special register to contain system errors

## Terminology

- Alarm - is an object that stores mainly Boolean state (TRUE\FALSE) along with other specific properties.
- Register alarm - is aa action during with Alarm goes to TRUE state

## Description

This library helps you to manage different alarms in you processes. Main concept is that once you initialize all possible alarms. Then you set each alarm with different condition to register alarm state. Then you can get registered alarms filtered buy process number, sevirity to affect your processes or alerts.

You may create 128 alerts.

## Initialisation

Before you can start using alarms you have to set where you want this data to be stored. When PLC starts use `M8002` set global parameter.

```iecst
IF M80002 THEN
    AM_D_START := 3000;
END_VAR
```

This means that all alerts data will be stored starting from `D3000`. It tottaly takes 305 registers. So `D3000`-`D3305` will be used to save alerts states and parameters.

## Function Blocks

### AM_INIT

This block allows you to initialize properties of all alarms you plan to have. You should run this FB only once when program starts. You can use `M8002` flag to run block of code or separate program POU in a new Task.

| Variable | Scope | Type | Description |
| --- | --- | --- | --- |
| `iNum` | INPUT | ANY16 | Alarm ID. From 0 to 128 |
| `iSevirity` | INPUT | ANY16 | Sevirity of an alarm|
| `iProcess` | INPUT | ANY16 | Number of process. |
| `xLock` | INPUT | Bit | Does this alarm should lock (stop) the process |
| `xLatch` | INPUT | Bit | Is it a latching alarm |
| `xZoomer` | INPUT | Bit | Does this alarm produce buzzer signal |

#### Alarm Properties

##### `iSevirity`

Sevirity defines weight of your alarm. Although it does not treat alarms diferently and do not do any additional actions because of this property. It is lately used for filtering alarms. The values could be:

- 0 - Not set
- 1 - Message
- 2 - Warning
- 3 - Error

##### `iProcess`

Process number. This is a way to group your alarms to different categories. You can use any numbers here. For instance you have 2 different processes in your program. If one stops another should continue to work. So you init different alarms in different processes (groups) and then when check for registered alarms you can filleter by this property.

##### `xLock`

Indicates either this alarm should lock or stop the process. Let's say you have gas heater. If fire detector fail to see fire you want to close Gaz valve. Then you setup "No fire" alarm as locking, and then you filter for all locking alarms and lock process if it is found.

##### `xLatch`

Latching alarms do not deregister itself when gone and require manual reset by operator. None-latching alarms are automatically deregistered as soon as an alarm condition switch to FALSE.

##### `xZoomer`

Should this alarm to activate buzzer.

#### Example

Define function block instance in Local Label of your POU.

```iecst
VAR
    fbAMInit: AM_INIT;
END_VAR
```

Now in the body of POU

```iecst
IF M8002 THEN
    (* Sensor od AD0 of pressue lost connection *)
    fbAMINIT(iNum := 0, iProcess := 1, iSevirity := 2,
        xLock := TRUE, xLatch := FALSE, xZoomer := TRUE);

    (* No fire alarm on X10 input *)
    fbAMINIT(iNum := 1, iProcess := 1, iSevirity := 3,
        xLock := TRUE, xLatch := TRUE, xZoomer := TRUE);
END_IF
```

### AM_SET

This FB register alarms conditions. This is used on every program cycle.

| Variable | Scope | Type | Description |
| --- | --- | --- | --- |
| `iNum` | INPUT | ANY16 | Alarm ID. From 0 to 128 |
| `xState` | INPUT | Bit | Condition for alarm to be registered |

#### Example

Define function block instance in Local Label of your POU.

```iecst
VAR
    fbAMSet: AM_SET;
END_VAR
```

Now in the body of POU

```iecst
fbAmSet(iNum := 0, xState := (D8030 = 32760));
fbAmSet(iNum := 1, xState := (NOT X10));
```

If you want to use delay for alarm you have to use it manually. Turned out that it is hard to reserve even 32 not to say 128 timers when those could even not used. This version of Alarm Manger I give timeout control to user. Here is how.

```iecst
(* Alert will be set after 0.5 second (1 = 100ms) *)
OUT_T((D8030 = 32760), TC0, 5);
fbAmSet(iNum := 0, xState := TS0);

(* Alert will be set after 1 second (1 = 100ms) *)
OUT_T((NOT X10), TC1, 10);
fbAmSet(iNum := 1, xState := TS1);
```

### AM_ON

This si a function that detects a presence of a single alarm.

| Variable | Scope | Type | Description |
| --- | --- | --- | --- |
| `DNUM` | INPUT | ANY16 | Global variable `AM_D_START`.  |
| `ANUM` | INPUT | ANY16 | Global constant `AM_BLOCK_ALARM` |
| `iNum` | INPUT | ANY16 | Alarm ID. From 0 to 128 |

This function litle bit cluttered, because we cannot use global variables in the function we have to pass it as a parameter. This makes it a bit long but as an exchange you can use it as a function in expressions.

```iecst
xErrorSensor := AM_ON(AM_D_START, AM_BLOCK_ALARM, 0);

IF AM_ON(AM_D_START, AM_BLOCK_ALARM, 1) THEN
    (* Do something *)
END_IF;
```

### AM_RESET

Reset all alarms.

| Variable | Scope | Type | Description |
| --- | --- | --- | --- |
| `DNUM` | INPUT | ANY16 | Global variable `AM_D_START`.  |
| `DSTATE` | INPUT | ANY16 | Global constant `AM_BLOCK_STATE`.  |

#### Example

```iecst
IF MEP(xResetAlarms) THEN
    M0 := fbAMReset(AM_D_START, AM_BLOCK_STATE);
END_IF;
```

Again, because we cannot use global variables in function we have to pass it as a parameters. Also any function call should have left hand side, thus `M0 :=` is required.

### AM_IS_BLOCK

Detects if there are registered alarms with `xLock` property `TRUE`.

| Variable | Scope | Type | Description |
| --- | --- | --- | --- |
| `iProcessNum` | INPUT | ANY16 | Number or process. If 0 will search through all alarms. If number will match against `iProcess` property of alarm given during initialization. |
| `iSevirity` | INPUT | ANY16 | Sevirity level. If 0 will search through all alarms. If number will match against `iSevirity` property of alarm given during initialization. |
| `Q` | OUTPUT | Bit | Result |

#### Example

Define function block instance in Local Label of your POU.

```iecst
VAR
    fbAMBlock: AM_IS_BLOCK;
END_VAR
```

Now in the body of POU. This example will have `Q` active if any registered alarm with `xLock` property is found.

```iecst
fbAMBlock();
IF NOT fbAMBlock.Q THEN
    (* Do something if there is not blocking alarm *)
END_IF;
```

This example will have `Q` active if any registered alarm with `xLock` property and sevirity level 3 (Error) is found.

```iecst
fbAMBlock(iSevirity := 3);
IF NOT fbAMBlock.Q THEN
    (* Do something if there is not blocking alarm *)
END_IF;
```

### AM_HAS_ALARM

Detects if there are any registered alarms.

| Variable | Scope | Type | Description |
| --- | --- | --- | --- |
| `iProcessNum` | INPUT | ANY16 | Number or process. If 0 will search through all alarms. If number will match against `iProcess` property of alarm given during initialization. |
| `iSevirity` | INPUT | ANY16 | Sevirity level. If 0 will search through all alarms. If number will match against `iSevirity` property of alarm given during initialization. |
| `Q` | OUTPUT | Bit | Result |

#### Example

Define function block instance in Local Label of your POU.

```iecst
VAR
    fbAMHas: AM_HAS_ALARM;
END_VAR
```

Now in the body of POU. This example will have `Q` active if any registered alarm is found.

```iecst
fbAMHas();
IF NOT fbAMHas.Q THEN
    (* Do something if there is not blocking alarm *)
END_IF;
```

This example will have `Q` active if any registered alarm with sevirity level 3 (Error) is found.

```iecst
fbAMHas(iSevirity := 3);
IF NOT fbAMHas.Q THEN
    (* Do something if there is not blocking alarm *)
END_IF;
```

### AM_ZOOMER

Detects if there are any registered alarms with `xZoomer` property.

| Variable | Scope | Type | Description |
| --- | --- | --- | --- |
| `Q` | OUTPUT | Bit | Result |

#### Example

Define function block instance in Local Label of your POU.

```iecst
VAR
    fbAMZoomer: AM_ZOOMER;
END_VAR
```

Now in the body of POU. This example will have `Q` active if any registered alarm with `xZoomer` property is found. In this example `DO_Zoomer` is an PLC output for buzzer, `DI_ZoomerReset` is a PLC input button to reset buzzer signal.

```iecst
fbAMZoomer();
PLS(fbAMZoomer.Q, M100);
SET(M100, DO_Zoomer);

PLS(DI_ZoomerReset, M101);
PLF(fbAMZoomer.Q, M102);
RST(M101 OR M102, DO_Zoomer);
```
