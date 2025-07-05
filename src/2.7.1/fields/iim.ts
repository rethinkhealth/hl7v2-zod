import hl7v2Metadata from "../registry";
import * as datatypes from "../datatypes";

/**
 * HL7 v2.7 IIM Fields
 *
 * HL7 v2.7 IIM field definitions
 * Each field consists of specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * IIM.1 - Primary Key Value - IIM
 */
export const IIM_1 = datatypes.CWE.register(hl7v2Metadata, {
  title: "IIM.1",
  version: "2.7",
  description: "Primary Key Value - IIM",
  type: "Field",
  item: 1897,
  table: "",
  longName: "HL7Primary Key Value - IIM"
});

/**
 * IIM.2 - Service Item Code
 */
export const IIM_2 = datatypes.CWE.register(hl7v2Metadata, {
  title: "IIM.2",
  version: "2.7",
  description: "Service Item Code",
  type: "Field",
  item: 1799,
  table: "",
  longName: "HL7Service Item Code"
});

/**
 * IIM.3 - Inventory Lot Number
 */
export const IIM_3 = datatypes.ST.register(hl7v2Metadata, {
  title: "IIM.3",
  version: "2.7",
  description: "Inventory Lot Number",
  type: "Field",
  item: 1800,
  table: "",
  longName: "HL7Inventory Lot Number"
});

/**
 * IIM.4 - Inventory Expiration Date
 */
export const IIM_4 = datatypes.DTM.register(hl7v2Metadata, {
  title: "IIM.4",
  version: "2.7",
  description: "Inventory Expiration Date",
  type: "Field",
  item: 1801,
  table: "",
  longName: "HL7Inventory Expiration Date"
});

/**
 * IIM.5 - Inventory Manufacturer Name
 */
export const IIM_5 = datatypes.CWE.register(hl7v2Metadata, {
  title: "IIM.5",
  version: "2.7",
  description: "Inventory Manufacturer Name",
  type: "Field",
  item: 1802,
  table: "",
  longName: "HL7Inventory Manufacturer Name"
});

/**
 * IIM.6 - Inventory Location
 */
export const IIM_6 = datatypes.CWE.register(hl7v2Metadata, {
  title: "IIM.6",
  version: "2.7",
  description: "Inventory Location",
  type: "Field",
  item: 1803,
  table: "",
  longName: "HL7Inventory Location"
});

/**
 * IIM.7 - Inventory Received Date
 */
export const IIM_7 = datatypes.DTM.register(hl7v2Metadata, {
  title: "IIM.7",
  version: "2.7",
  description: "Inventory Received Date",
  type: "Field",
  item: 1804,
  table: "",
  longName: "HL7Inventory Received Date"
});

/**
 * IIM.8 - Inventory Received Quantity
 */
export const IIM_8 = datatypes.NM.register(hl7v2Metadata, {
  title: "IIM.8",
  version: "2.7",
  description: "Inventory Received Quantity",
  type: "Field",
  item: 1805,
  table: "",
  longName: "HL7Inventory Received Quantity"
});

/**
 * IIM.9 - Inventory Received Quantity Unit
 */
export const IIM_9 = datatypes.CWE.register(hl7v2Metadata, {
  title: "IIM.9",
  version: "2.7",
  description: "Inventory Received Quantity Unit",
  type: "Field",
  item: 1806,
  table: "",
  longName: "HL7Inventory Received Quantity Unit"
});

/**
 * IIM.10 - Inventory Received Item Cost
 */
export const IIM_10 = datatypes.ST.register(hl7v2Metadata, {
  title: "IIM.10",
  version: "2.7",
  description: "Inventory Received Item Cost",
  type: "Field",
  item: 1807,
  table: "",
  longName: "HL7Inventory Received Item Cost"
});

/**
 * IIM.11 - Inventory On Hand Date
 */
export const IIM_11 = datatypes.DTM.register(hl7v2Metadata, {
  title: "IIM.11",
  version: "2.7",
  description: "Inventory On Hand Date",
  type: "Field",
  item: 1808,
  table: "",
  longName: "HL7Inventory On Hand Date"
});

/**
 * IIM.12 - Inventory On Hand Quantity
 */
export const IIM_12 = datatypes.NM.register(hl7v2Metadata, {
  title: "IIM.12",
  version: "2.7",
  description: "Inventory On Hand Quantity",
  type: "Field",
  item: 1809,
  table: "",
  longName: "HL7Inventory On Hand Quantity"
});

/**
 * IIM.13 - Inventory On Hand Quantity Unit
 */
export const IIM_13 = datatypes.CWE.register(hl7v2Metadata, {
  title: "IIM.13",
  version: "2.7",
  description: "Inventory On Hand Quantity Unit",
  type: "Field",
  item: 1810,
  table: "",
  longName: "HL7Inventory On Hand Quantity Unit"
});

/**
 * IIM.14 - Procedure Code
 */
export const IIM_14 = datatypes.CNE.register(hl7v2Metadata, {
  title: "IIM.14",
  version: "2.7",
  description: "Procedure Code",
  type: "Field",
  item: 393,
  table: "HL70088",
  longName: "HL7Procedure Code"
});

/**
 * IIM.15 - Procedure Code Modifier
 */
export const IIM_15 = datatypes.CNE.register(hl7v2Metadata, {
  title: "IIM.15",
  version: "2.7",
  description: "Procedure Code Modifier",
  type: "Field",
  item: 1316,
  table: "HL70340",
  longName: "HL7Procedure Code Modifier"
});
