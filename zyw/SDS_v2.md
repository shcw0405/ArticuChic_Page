


# Software Design Specification (SDS)

Revision History: 

| Date      | Author   | Description    |
| ----      | ------   | -----------    |
| May 13    | WU, ZHU  | Third  version |

<style>#rev +table td:nth-child(1) { white-space: nowrap }</style>
<div id="rev"></div>

[toc]

## 1. Introduction

### 1.1 Intended Audience and Purpose

The document is intended to help the customer understand the system design, and serves as the basis of task division and inter-module communication, providing design information for developers and testers.

### 1.2 How to use the document

The document is organized as follows:

- show the control and data flow of the whole system
- show the detailed design of  modules

## 2. Control and Data flow Design
### 2.1 Contex
- The data/control flow of this system is described for the following three users: data flow analysis
![data-flow](../../assets/zyw/dataflow.png)
#### 2.1.1 Data Flow Analysis  
##### 2.1.1.1. User Authentication Process  
- **Login**  
  Data Flow: `LoginCredentials` (user-input credentials like account/password) → transmitted to `Login` activity to initiate authentication; `UserDataForVerification` → passed from `Login` to `Verification` activity as authentication basis.  
- **Verification**  
  Data Flow: `UserDataForVerification` → input to `Verification` activity; `VerifiedUserDataStatus` (validation result) → output from `Verification` activity indicating success/failure.  
- **Patient Sign-Up**  
  Data Flow: `NewPatientData` → directly written to `D2: Patient DB` to complete registration.  
- **Doctor Sign-Up**  
  Data Flow: `NewDoctorRegistrationInfo` → transmitted to `Doctor Sign-Up` activity; `RegistrationDetails` → processed through hierarchical Admin approval flow, ultimately linked to `Sign-Up` activity.  

##### 2.1.1.2. Core Database Interaction  
- **Query Patient DB**  
  Data Flow: `QueryForPatientInfo` → triggers query operation; `PatientData` → retrieved from `D2: Patient DB` to fulfill request.  
- **Query Doctor DB**  
  Data Flow: `QueryForDoctorInfo` → triggers query operation; `DoctorData` → retrieved from `D1: Doctor DB` to fulfill request.  
- **Modify Patient DB**  
  Data Flow: `DataToUpdatePatient` → input to `Modify Patient DB` activity; `PatientData` → updated in `D2: Patient DB`.  
- **Modify Doctor DB**  
  Data Flow: `DataToUpdateDoctor` → input to `Modify Doctor DB` activity; `DoctorData` → updated in `D1: Doctor DB`.  

##### 2.1.1.3. Patient Data Management Process  
- **Patient Management**  
  Data Flow: `ManagesDataIn` → retrieves `PatientListData` from `D2: Patient DB` for doctor review.  
- **Select Patient**  
  Data Flow: `CriteriaForSelection` → input to `Select Patient` activity; `ReadPatientDetailsFrom` → retrieves `DetailedPatientInfo` from `D3: Patient Information DB`.  
- **Information Request**  
  Data Flow: `InfoRequestDetails` → input to `Information Process` activity; `PatientInformation` → retrieved from `D3: Patient Information DB` or other sources.  
- **Information Processing**  
  Data Flow: `PatientInformation` → processed into `ProcessedInformation`; `DataToStoreOrRetrieve` → utilized during processing; `ProcessedInformation` → output to `Display` activity.  

##### 2.1.1.4. Data Comparison and Presentation  
- **Comparison**  
  Data Flow: `DataForComparison` → input to `Comparison` activity; `PatientInformation` (from `D3`) and `StandardInformation` (from `D4: Standard Information DB`) → analyzed to generate `ComparisonAnalysis` results.  
- **Display**  
  Data Flow: `DataForDirectDisplay`, `ProcessedInformation`, and `ComparisonAnalysis` → aggregated and presented through UI in specified formats (charts/reports).  

### 2.1.2 Control Flow Analysis
![admin-control-flow](../../assets/zyw/admin_workflow.png)
#### 2.1.2.1 Admin Control Flow Analysis
#### 2.1.2.1 Control Flow Analysis  
##### 2.1.2.1.1. Admin Initiation to Login  
**Control Flow**: Admin → **Login**  
- *Trigger*: Admin initiates workflow.  
- *Condition*: **Login Success** → Proceed to **Admin Menu**.  

##### 2.1.2.1.2. Admin Menu Decisions  
###### 2.1.2.1.2.1. Query Doctor DB  
**Control Flow**: Admin Menu → **Process: Query Doctor DB** (Trigger: *Selects "Query Doctor DB"*) → **Interact with D1 (Doctor DB)**  

###### 2.1.2.1.2.2. Query Patient DB  
**Control Flow**: Admin Menu → **Process: Query Patient DB** (Trigger: *Selects "Query Patient DB"*) → **Interact with D2 (Patient DB)**  

###### 2.1.2.1.2.3. Modify Patient DB  
**Control Flow**: Admin Menu → **Process: Modify Patient DB** (Trigger: *Selects "Modify Patient DB"*) → **Interact with D2 (Patient DB)**  

###### 2.1.2.1.2.4. Modify Doctor DB  
**Control Flow**: Admin Menu → **Process: Modify Doctor DB** (Trigger: *Selects "Modify Doctor DB"*) → **Interact with D1 (Doctor DB)**  

###### 2.1.2.1.2.5. Doctor Sign-Up  
**Control Flow**: Admin Menu → **Process: Doctor Sign-Up** (Trigger: *Selects "Doctor Sign-Up"*) → **Interact with D2 (Patient DB)**  
![doctor-control-flow](../../assets/zyw/doctor_workflow.png)
#### 2.1.2.2 Doctor Control Flow Analysis  
##### 2.1.2.2.1. Doctor Initiation to Login  
**Control Flow**: Doctor → **Process: Login**  
- *Explanation*: Doctor initiates workflow by entering the login process.  

##### 2.1.2.2.2. Login to Verification  
**Control Flow**: **Process: Login** → **Process: Verification** (Trigger: *Credentials transmitted*)  
- *Explanation*: After login, credentials are validated through **Verification**.  

##### 2.1.2.2.3. Verification to Patient Management  
**Control Flow**: **Process: Verification** → **Process: Patient Management** (Condition: *Verified*)  
- *Explanation*: Upon successful verification, the workflow proceeds to patient management.  

##### 2.1.2.2.4. Patient Management to Database Interaction  
**Control Flow**: **Process: Patient Management** → **Interact with D2 (Patient DB)**  
- *Explanation*: Direct interaction with D2 for patient list retrieval or updates.  

##### 2.1.2.2.5. Patient Management to Select Patient  
**Control Flow**: **Process: Patient Management** → **Process: Select Patient**  
- *Explanation*: Transition to selecting a specific patient from the list.  

##### 2.1.2.2.6. Actions for Selected Patient  
###### 2.1.2.2.6.1. Display Path  
**Control Flow**:  
**Actions for Selected Patient** → **Process: Display Patient Details** (Trigger: *Selects "Display"*) → **Interact with D3 (Patient Info DB)**  
- *Explanation*: Retrieves detailed patient data from D3 for display.  

###### 2.1.2.2.6.2. Comparison Path  
**Control Flow**:  
**Actions for Selected Patient** → **Process: Comparison** (Trigger: *Selects "Comparison"*) →  
1. **Interact with D4 (Standard Info DB)** (retrieves standard metrics)  
2. **Process: Comparison** (analyzes D3 and D4 data)  
3. **Process: Display Comparison Result** (presents analysis)  

###### 2.1.2.2.6.3. Information Request Path  
**Control Flow**:  
**Actions for Selected Patient** → **Process: Information Request** (Trigger: *Selects "Information Request"*) →  
1. **Process: Information Process** (handles data logic)  
2. **Interact with D3 (Patient Info DB)** (retrieves/stores data)  
3. **Process: Display Request Result** (outputs processed information)  
![patient-control-flow](../../assets/zyw/pattient_workflow.png)
#### 2.1.2.3 Patient Control Flow Analysis  
##### 2.1.2.3.1. Patient Initiation to Action Decision  
**Control Flow**: Patient → **Action?**  
- *Explanation*: Patient initiates workflow and selects between registration or login.  

##### 2.1.2.3.2. Action Decision - Sign Up Path  
**Control Flow**:  
**Action?** → **Process: Sign Up** (Trigger: *Chooses "Sign Up"*) → **Store in D2 (Patient DB)** → **Process: Login**  
- *Explanation*: Registration data is stored in D2, then redirected to login.  

##### 2.1.2.3.3. Action Decision - Login Path  
**Control Flow**: **Action?** → **Process: Login** (Trigger: *Chooses "Login"*)  

##### 2.1.2.3.4. Login to Verification  
**Control Flow**: **Process: Login** → **Process: Verification** (Trigger: *Credentials transmitted*)  
- *Explanation*: System validates credentials during verification.  

##### 2.1.2.3.5. Verification to Patient Menu  
**Control Flow**: **Process: Verification** → **Patient Menu** (Condition: *Verified*)  
- *Explanation*: Successful verification grants access to patient menu options.  

##### 2.1.2.3.6. Patient Menu Decisions  
###### 2.1.2.3.6.1. Display Info Path  
**Control Flow**:  
**Patient Menu** → **Process: Display** (Trigger: *Selects "Display Info"*)  
- *Explanation*: Directly displays patient-related information.  

###### 2.1.2.3.6.2. Information Request Path  
**Control Flow**:  
**Patient Menu** → **Process: Information Request** (Trigger: *Selects "Information Request"*) →  
1. **Process: Information Process** (handles data logic)  
2. **Interact with D3 (Patient Information DB)** (retrieves/stores data)  
3. **Process: Display Result** (outputs processed information)  


<!--
## 2. System Design
### 2.1 Context

- The embedded system module is divided in three part. The first part is the Router to respond to the requests from the server. The second part is four function components. They are called by Router to complete requests. The last part is DataCollector. It serves as a medium for interacting with sensors.
- The embedded system is planned to develop with python

### 2.2 Architecture
#### 2.2.1 Component Diagram
- version 1.0

![component](./component.png)



## 3. Detailed Design

### 3.1 Class Diagram

version 1.0

![class](./class.png)



### 3.2 Class Design



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