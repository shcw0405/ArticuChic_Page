


# Software Design Specification (SDS)

Revision History: 

| Date      | Author    | Description |
| ----      | ------    | ----------- |
| Mar 24    | Yang, Zhu | First version |

<style>#rev +table td:nth-child(1) { white-space: nowrap }</style>
<div id="rev"></div>

[toc]

## 1. Introduction

### 1.1 Intended Audience and Purpose

The document is intended to help the customer understand the system design, and serves as the basis of task division and inter-module communication, providing design information for developers and testers.

### 1.2 How to use the document

The document is organized as follows:

- show the system design of embedded system module
- show the detailed design of  modules


## 2. System Design
### 2.1 Context

- The software system module is divided into three parts. The first part is the router, which is used to send requests to the server as well as to respond to requests from the server. The second part is the server part. The router calls them to fulfill the request. The last part is the data collector. It is the medium with which the router gets the information.
- The software system is planned to develop with C# and C++

### 2.2 Architecture
#### 2.2.1 Worksflow Diagram
- version 1.0

![worksflow](../../assets/yang/worksflow.png)



## 3. Detailed Design

### 3.1 Usecase Diagram

version 1.0

![usecase](../../assets/yang/用例1.png)



### 3.2 Class Design




#### 3.2.1 `User`
#### `Attribute`
```
status:class Status
```
```
accounnt:string
```
```
time:string
```
#### `Operation`
```

```
#### 3.2.2 `Status`
#### `Attribute`
```
Status_name:string
```
#### `Operation`
```

```
#### 3.2.2.1 `Login_Status`
#### `Attribute`
```
Status_name:string=Login_Statue
```
#### `Operation`
```
Login()
```
```
Registration()
```
#### 3.2.2.2 `Run_Status`
#### `Attribute`
```
Status_name:string=Run_Status
```
#### `Operation`
```
HistoricalData()
```
```
NewData()
```
```
ViewNewData()
```
#### 3.2.2.3 `Display_Status`
#### `Attribute`
```
Status_name:string=Display_Status
```
#### `Operation`
```
Display()
```
#### 3.2.2.4 `Data_Status`
#### `Attribute`
```
Status_name:string=Data_Status
```
#### `Operation`
```
Update(string time,string account)
```
```
ViewList()
```
#### 3.2.2.5 `Getting_Status`
#### `Attribute`
```
Status_name:string=Getting_Status
```
#### `Operation`
```
EnterData()
```
```
check()
```
<!--
#### 3.2.1 `Router`

##### `Attribute`

```
IP: string		
```

The IP of server

```
Port: int
```

```
transactionlist: list
```

The list of objects for processing requests.

##### `Operation`

```
Router.getResponse(dataInput: dict): dict
```

Call different functions of different objects in `transactionlist` according to `dataInput` to process server requests.

Return `dict` always.

```
Router.start(): void
```

Start sensor clients to connect with sensors. And start http server to  wait and process server requests.

Return `None` always.



#### 3.2.2 `Transaction`

##### `Attribute`

```
collectorlist: list
```

A list of SensorCollector objects.

##### `Operation`

```
Transaction.getResponse(): dict
```

Process requests received by Router.

Return `dict` always. 

```
Transaction.checkSuitable(dataInput: dict): bool
```

Check if the request type matches the current object.

Return `true` if match successfully,  `false` otherwise.



#### 3.2.3 `RealTimeData`

##### `Attribute`

##### `Operation`

```
RealTimeData.getResponse(): dict
```

Call `SensorCollector.getRealtimeData()` to request real-time data from sensors.

Return `dict` always.

```
RealTimeData.checkSuitable(): bool
```

Check if the request matches the type of request that can be processed

Return `true` if match successfully,  `false` otherwise.



#### 3.2.4 `SensorStatus`

##### `Attribute`

##### `Operation`

```
SensorStatus.getResponse(): dict
```

Call `SensorCollector.getSensorStatus()` to request sensor status information from sensors.

Return `dict` always.

```
SensorStatus.checkSuitable(): bool
```

Check if the request matches the type of request that can be processed

Return `true` if match successfully,  `false` otherwise.



#### 3.2.5 `SensorDetails`

##### `Attribute`

##### `Operation`

```
SensorDetails.getResponse(): dict
```

Get the sensors detail.

Return `dict` always.

```
SensorDetails.checkSuitable(): bool
```

Check if the request matches the type of request that can be processed

Return `true` if match successfully,  `false` otherwise.



#### 3.2.6 `SensorCalibration`

##### `Attribute`

##### `Operation`

```
SensorCalibration.getResponse(): dict
```

Call `SensorCollector.calibrateSensor()` to perform sensors calibration.

Return `dict` always.

```
SensorCalibration.checkSuitable(): bool
```

Check if the request matches the type of request that can be processed

Return `true` if match successfully,  `false` otherwise.



#### 3.2.7 `SensorCollector`

##### `Attribute`

```
datatranform: DataTranform
```

A object which can call `transformData()` to transform data.

```
Mac: string
```

The Mac of sensor.

##### `Operation`

```
SensorCollector.getRealtimeData(): dict
```

Request real-time data from sensors and then call `DataTransform.transformData()` to transform the format of data.

Return `dict` always.

```
SensorCollector.getSensorStatus(): dict
```

Request request sensor status information from sensors and then call `DataTransform.transformData()` to transform the format of data.

Return `dict` always.

```
SensorCollector.calibrate(): dict
```

Perform sensors calibration.

Return `dict` always.

```
SensorCollector.start(): void
```

Connect with sensor, request data from sensor and check if connection is maintained, if not, reconnect with sensor.

Return `None` always.



#### 3.2.8 `DataTransform`

##### `Attribute`

##### `Operation`

```
DataTransform.transformData(originData: dytes, type: string): dict
```

Transform the format of data from `dytes` to `double`.

Return `dict` always.
-->