import hl7v2Metadata from "../registry";
import * as datatypes from "../datatypes";

/**
 * HL7 v2.8 ORC Fields
 *
 * HL7 v2.8 ORC field definitions
 * Each field consists of specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ORC.1 - Order Control
 */
export const ORC_1 = datatypes.ID.register(hl7v2Metadata, {
  title: "ORC.1",
  version: "2.8",
  description: "Order Control",
  type: "Field",
  item: 215,
  table: "HL70119",
  longName: "HL7Order Control",
  length: 2
});

/**
 * ORC.2 - Placer Order Number
 */
export const ORC_2 = datatypes.ST.register(hl7v2Metadata, {
  title: "ORC.2",
  version: "2.8",
  description: "Placer Order Number",
  type: "Field",
  item: 216,
  table: "",
  longName: "HL7Placer Order Number"
});

/**
 * ORC.3 - Filler Order Number
 */
export const ORC_3 = datatypes.ST.register(hl7v2Metadata, {
  title: "ORC.3",
  version: "2.8",
  description: "Filler Order Number",
  type: "Field",
  item: 217,
  table: "",
  longName: "HL7Filler Order Number"
});

/**
 * ORC.4 - Placer Group Number
 */
export const ORC_4 = datatypes.EIP.register(hl7v2Metadata, {
  title: "ORC.4",
  version: "2.8",
  description: "Placer Group Number",
  type: "Field",
  item: 218,
  table: "",
  longName: "HL7Placer Group Number"
});

/**
 * ORC.5 - Order Status
 */
export const ORC_5 = datatypes.ID.register(hl7v2Metadata, {
  title: "ORC.5",
  version: "2.8",
  description: "Order Status",
  type: "Field",
  item: 219,
  table: "HL70038",
  longName: "HL7Order Status",
  length: 2
});

/**
 * ORC.6 - Response Flag
 */
export const ORC_6 = datatypes.ID.register(hl7v2Metadata, {
  title: "ORC.6",
  version: "2.8",
  description: "Response Flag",
  type: "Field",
  item: 220,
  table: "HL70121",
  longName: "HL7Response Flag",
  length: 1
});

/**
 * ORC.8 - Parent Order
 */
export const ORC_8 = datatypes.EIP.register(hl7v2Metadata, {
  title: "ORC.8",
  version: "2.8",
  description: "Parent Order",
  type: "Field",
  item: 222,
  table: "",
  longName: "HL7Parent Order"
});

/**
 * ORC.9 - Date/Time of Transaction
 */
export const ORC_9 = datatypes.DTM.register(hl7v2Metadata, {
  title: "ORC.9",
  version: "2.8",
  description: "Date/Time of Transaction",
  type: "Field",
  item: 223,
  table: "",
  longName: "HL7Date/Time of Transaction"
});

/**
 * ORC.10 - Entered By
 */
export const ORC_10 = datatypes.XCN.register(hl7v2Metadata, {
  title: "ORC.10",
  version: "2.8",
  description: "Entered By",
  type: "Field",
  item: 224,
  table: "",
  longName: "HL7Entered By"
});

/**
 * ORC.11 - Verified By
 */
export const ORC_11 = datatypes.XCN.register(hl7v2Metadata, {
  title: "ORC.11",
  version: "2.8",
  description: "Verified By",
  type: "Field",
  item: 225,
  table: "",
  longName: "HL7Verified By"
});

/**
 * ORC.12 - Ordering Provider
 */
export const ORC_12 = datatypes.XCN.register(hl7v2Metadata, {
  title: "ORC.12",
  version: "2.8",
  description: "Ordering Provider",
  type: "Field",
  item: 226,
  table: "",
  longName: "HL7Ordering Provider"
});

/**
 * ORC.13 - Enterer's Location
 */
export const ORC_13 = datatypes.ST.register(hl7v2Metadata, {
  title: "ORC.13",
  version: "2.8",
  description: "Enterer's Location",
  type: "Field",
  item: 227,
  table: "",
  longName: "HL7Enterer's Location"
});

/**
 * ORC.14 - Call Back Phone Number
 */
export const ORC_14 = datatypes.XTN.register(hl7v2Metadata, {
  title: "ORC.14",
  version: "2.8",
  description: "Call Back Phone Number",
  type: "Field",
  item: 228,
  table: "",
  longName: "HL7Call Back Phone Number"
});

/**
 * ORC.15 - Order Effective Date/Time
 */
export const ORC_15 = datatypes.DTM.register(hl7v2Metadata, {
  title: "ORC.15",
  version: "2.8",
  description: "Order Effective Date/Time",
  type: "Field",
  item: 229,
  table: "",
  longName: "HL7Order Effective Date/Time"
});

/**
 * ORC.16 - Order Control Code Reason
 */
export const ORC_16 = datatypes.CWE.register(hl7v2Metadata, {
  title: "ORC.16",
  version: "2.8",
  description: "Order Control Code Reason",
  type: "Field",
  item: 230,
  table: "HL79999",
  longName: "HL7Order Control Code Reason"
});

/**
 * ORC.17 - Entering Organization
 */
export const ORC_17 = datatypes.CWE.register(hl7v2Metadata, {
  title: "ORC.17",
  version: "2.8",
  description: "Entering Organization",
  type: "Field",
  item: 231,
  table: "HL79999",
  longName: "HL7Entering Organization"
});

/**
 * ORC.18 - Entering Device
 */
export const ORC_18 = datatypes.CWE.register(hl7v2Metadata, {
  title: "ORC.18",
  version: "2.8",
  description: "Entering Device",
  type: "Field",
  item: 232,
  table: "HL79999",
  longName: "HL7Entering Device"
});

/**
 * ORC.19 - Action By
 */
export const ORC_19 = datatypes.XCN.register(hl7v2Metadata, {
  title: "ORC.19",
  version: "2.8",
  description: "Action By",
  type: "Field",
  item: 233,
  table: "",
  longName: "HL7Action By"
});

/**
 * ORC.20 - Advanced Beneficiary Notice Code
 */
export const ORC_20 = datatypes.CWE.register(hl7v2Metadata, {
  title: "ORC.20",
  version: "2.8",
  description: "Advanced Beneficiary Notice Code",
  type: "Field",
  item: 1310,
  table: "HL70339",
  longName: "HL7Advanced Beneficiary Notice Code"
});

/**
 * ORC.21 - Ordering Facility Name
 */
export const ORC_21 = datatypes.XON.register(hl7v2Metadata, {
  title: "ORC.21",
  version: "2.8",
  description: "Ordering Facility Name",
  type: "Field",
  item: 1311,
  table: "",
  longName: "HL7Ordering Facility Name"
});

/**
 * ORC.22 - Ordering Facility Address
 */
export const ORC_22 = datatypes.XAD.register(hl7v2Metadata, {
  title: "ORC.22",
  version: "2.8",
  description: "Ordering Facility Address",
  type: "Field",
  item: 1312,
  table: "",
  longName: "HL7Ordering Facility Address"
});

/**
 * ORC.23 - Ordering Facility Phone Number
 */
export const ORC_23 = datatypes.XTN.register(hl7v2Metadata, {
  title: "ORC.23",
  version: "2.8",
  description: "Ordering Facility Phone Number",
  type: "Field",
  item: 1313,
  table: "",
  longName: "HL7Ordering Facility Phone Number"
});

/**
 * ORC.24 - Ordering Provider Address
 */
export const ORC_24 = datatypes.XAD.register(hl7v2Metadata, {
  title: "ORC.24",
  version: "2.8",
  description: "Ordering Provider Address",
  type: "Field",
  item: 1314,
  table: "",
  longName: "HL7Ordering Provider Address"
});

/**
 * ORC.25 - Order Status Modifier
 */
export const ORC_25 = datatypes.CWE.register(hl7v2Metadata, {
  title: "ORC.25",
  version: "2.8",
  description: "Order Status Modifier",
  type: "Field",
  item: 1473,
  table: "HL79999",
  longName: "HL7Order Status Modifier"
});

/**
 * ORC.26 - Advanced Beneficiary Notice Override Reason
 */
export const ORC_26 = datatypes.CWE.register(hl7v2Metadata, {
  title: "ORC.26",
  version: "2.8",
  description: "Advanced Beneficiary Notice Override Reason",
  type: "Field",
  item: 1641,
  table: "HL70552",
  longName: "HL7Advanced Beneficiary Notice Override Reason"
});

/**
 * ORC.27 - Filler's Expected Availability Date/Time
 */
export const ORC_27 = datatypes.DTM.register(hl7v2Metadata, {
  title: "ORC.27",
  version: "2.8",
  description: "Filler's Expected Availability Date/Time",
  type: "Field",
  item: 1642,
  table: "",
  longName: "HL7Filler's Expected Availability Date/Time"
});

/**
 * ORC.28 - Confidentiality Code
 */
export const ORC_28 = datatypes.CWE.register(hl7v2Metadata, {
  title: "ORC.28",
  version: "2.8",
  description: "Confidentiality Code",
  type: "Field",
  item: 615,
  table: "HL70177",
  longName: "HL7Confidentiality Code"
});

/**
 * ORC.29 - Order Type
 */
export const ORC_29 = datatypes.CWE.register(hl7v2Metadata, {
  title: "ORC.29",
  version: "2.8",
  description: "Order Type",
  type: "Field",
  item: 1643,
  table: "HL70482",
  longName: "HL7Order Type"
});

/**
 * ORC.30 - Enterer Authorization Mode
 */
export const ORC_30 = datatypes.CNE.register(hl7v2Metadata, {
  title: "ORC.30",
  version: "2.8",
  description: "Enterer Authorization Mode",
  type: "Field",
  item: 1644,
  table: "HL70483",
  longName: "HL7Enterer Authorization Mode"
});

/**
 * ORC.31 - Parent Universal Service Identifier
 */
export const ORC_31 = datatypes.CWE.register(hl7v2Metadata, {
  title: "ORC.31",
  version: "2.8",
  description: "Parent Universal Service Identifier",
  type: "Field",
  item: 2287,
  table: "",
  longName: "HL7Parent Universal Service Identifier"
});

/**
 * ORC.32 - Advanced Beneficiary Notice Date
 */
export const ORC_32 = datatypes.DT.register(hl7v2Metadata, {
  title: "ORC.32",
  version: "2.8",
  description: "Advanced Beneficiary Notice Date",
  type: "Field",
  item: 2301,
  table: "",
  longName: "HL7Advanced Beneficiary Notice Date"
});

/**
 * ORC.33 - Alternate Placer Order Number
 */
export const ORC_33 = datatypes.ST.register(hl7v2Metadata, {
  title: "ORC.33",
  version: "2.8",
  description: "Alternate Placer Order Number",
  type: "Field",
  item: 3300,
  table: "",
  longName: "HL7Alternate Placer Order Number"
});

/**
 * ORC.34 - Order Workflow Profile
 */
export const ORC_34 = datatypes.CWE.register(hl7v2Metadata, {
  title: "ORC.34",
  version: "2.8",
  description: "Order Workflow Profile",
  type: "Field",
  item: 3387,
  table: "HL70934",
  longName: "HL7Order Workflow Profile"
});
