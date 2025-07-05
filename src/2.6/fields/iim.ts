import hl7v2Metadata from "../registry";
import * as datatypes from "../datatypes";

/**
 * HL7 v2.6 IIM Fields
 *
 * HL7 v2.6 IIM field definitions
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
  version: "2.6",
  description: "Primary Key Value - IIM",
  type: "Field",
  item: 1897,
  table: "",
  longName: "HL7Primary Key Value - IIM",
  length: 250
});

/**
 * IIM.2 - Service Item Code
 */
export const IIM_2 = datatypes.CWE.register(hl7v2Metadata, {
  title: "IIM.2",
  version: "2.6",
  description: "Service Item Code",
  type: "Field",
  item: 1799,
  table: "",
  longName: "HL7Service Item Code",
  length: 250
});

/**
 * IIM.3 - Inventory Lot Number
 */
export const IIM_3 = datatypes.ST.register(hl7v2Metadata, {
  title: "IIM.3",
  version: "2.6",
  description: "Inventory Lot Number",
  type: "Field",
  item: 1800,
  table: "",
  longName: "HL7Inventory Lot Number",
  length: 250
});

/**
 * IIM.4 - Inventory Expiration Date
 */
export const IIM_4 = datatypes.DTM.register(hl7v2Metadata, {
  title: "IIM.4",
  version: "2.6",
  description: "Inventory Expiration Date",
  type: "Field",
  item: 1801,
  table: "",
  longName: "HL7Inventory Expiration Date",
  length: 24
});

/**
 * IIM.5 - Inventory Manufacturer Name
 */
export const IIM_5 = datatypes.CWE.register(hl7v2Metadata, {
  title: "IIM.5",
  version: "2.6",
  description: "Inventory Manufacturer Name",
  type: "Field",
  item: 1802,
  table: "",
  longName: "HL7Inventory Manufacturer Name",
  length: 250
});

/**
 * IIM.6 - Inventory Location
 */
export const IIM_6 = datatypes.CWE.register(hl7v2Metadata, {
  title: "IIM.6",
  version: "2.6",
  description: "Inventory Location",
  type: "Field",
  item: 1803,
  table: "",
  longName: "HL7Inventory Location",
  length: 250
});

/**
 * IIM.7 - Inventory Received Date
 */
export const IIM_7 = datatypes.DTM.register(hl7v2Metadata, {
  title: "IIM.7",
  version: "2.6",
  description: "Inventory Received Date",
  type: "Field",
  item: 1804,
  table: "",
  longName: "HL7Inventory Received Date",
  length: 24
});

/**
 * IIM.8 - Inventory Received Quantity
 */
export const IIM_8 = datatypes.NM.register(hl7v2Metadata, {
  title: "IIM.8",
  version: "2.6",
  description: "Inventory Received Quantity",
  type: "Field",
  item: 1805,
  table: "",
  longName: "HL7Inventory Received Quantity",
  length: 12
});

/**
 * IIM.9 - Inventory Received Quantity Unit
 */
export const IIM_9 = datatypes.CWE.register(hl7v2Metadata, {
  title: "IIM.9",
  version: "2.6",
  description: "Inventory Received Quantity Unit",
  type: "Field",
  item: 1806,
  table: "",
  longName: "HL7Inventory Received Quantity Unit",
  length: 250
});

/**
 * IIM.10 - Inventory Received Item Cost
 */
export const IIM_10 = datatypes.ST.register(hl7v2Metadata, {
  title: "IIM.10",
  version: "2.6",
  description: "Inventory Received Item Cost",
  type: "Field",
  item: 1807,
  table: "",
  longName: "HL7Inventory Received Item Cost",
  length: 12
});

/**
 * IIM.11 - Inventory On Hand Date
 */
export const IIM_11 = datatypes.DTM.register(hl7v2Metadata, {
  title: "IIM.11",
  version: "2.6",
  description: "Inventory On Hand Date",
  type: "Field",
  item: 1808,
  table: "",
  longName: "HL7Inventory On Hand Date",
  length: 24
});

/**
 * IIM.12 - Inventory On Hand Quantity
 */
export const IIM_12 = datatypes.NM.register(hl7v2Metadata, {
  title: "IIM.12",
  version: "2.6",
  description: "Inventory On Hand Quantity",
  type: "Field",
  item: 1809,
  table: "",
  longName: "HL7Inventory On Hand Quantity",
  length: 12
});

/**
 * IIM.13 - Inventory On Hand Quantity Unit
 */
export const IIM_13 = datatypes.CWE.register(hl7v2Metadata, {
  title: "IIM.13",
  version: "2.6",
  description: "Inventory On Hand Quantity Unit",
  type: "Field",
  item: 1810,
  table: "",
  longName: "HL7Inventory On Hand Quantity Unit",
  length: 250
});

/**
 * IIM.14 - Procedure Code
 */
export const IIM_14 = datatypes.CNE.register(hl7v2Metadata, {
  title: "IIM.14",
  version: "2.6",
  description: "Procedure Code",
  type: "Field",
  item: 393,
  table: "HL70088",
  longName: "HL7Procedure Code",
  length: 705
});

/**
 * IIM.15 - Procedure Code Modifier
 */
export const IIM_15 = datatypes.CNE.register(hl7v2Metadata, {
  title: "IIM.15",
  version: "2.6",
  description: "Procedure Code Modifier",
  type: "Field",
  item: 1316,
  table: "HL70340",
  longName: "HL7Procedure Code Modifier",
  length: 705
});
