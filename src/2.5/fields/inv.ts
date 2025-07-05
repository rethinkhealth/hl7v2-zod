import hl7v2Metadata from "../registry";
import * as datatypes from "../datatypes";

/**
 * HL7 v2.5 INV Fields
 *
 * HL7 v2.5 INV field definitions
 * Each field consists of specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * INV.1 - Substance Identifier
 */
export const INV_1 = datatypes.ST.register(hl7v2Metadata, {
  title: "INV.1",
  version: "2.5",
  description: "Substance Identifier",
  type: "Field",
  item: 1372,
  table: "HL70451",
  longName: "HL7Substance Identifier",
  length: 250
});

/**
 * INV.2 - Substance Status
 */
export const INV_2 = datatypes.ST.register(hl7v2Metadata, {
  title: "INV.2",
  version: "2.5",
  description: "Substance Status",
  type: "Field",
  item: 1373,
  table: "HL70383",
  longName: "HL7Substance Status",
  length: 250
});

/**
 * INV.3 - Substance Type
 */
export const INV_3 = datatypes.ST.register(hl7v2Metadata, {
  title: "INV.3",
  version: "2.5",
  description: "Substance Type",
  type: "Field",
  item: 1374,
  table: "HL70384",
  longName: "HL7Substance Type",
  length: 250
});

/**
 * INV.4 - Inventory Container Identifier
 */
export const INV_4 = datatypes.ST.register(hl7v2Metadata, {
  title: "INV.4",
  version: "2.5",
  description: "Inventory Container Identifier",
  type: "Field",
  item: 1532,
  table: "",
  longName: "HL7Inventory Container Identifier",
  length: 250
});

/**
 * INV.5 - Container Carrier Identifier
 */
export const INV_5 = datatypes.ST.register(hl7v2Metadata, {
  title: "INV.5",
  version: "2.5",
  description: "Container Carrier Identifier",
  type: "Field",
  item: 1376,
  table: "",
  longName: "HL7Container Carrier Identifier",
  length: 250
});

/**
 * INV.6 - Position on Carrier
 */
export const INV_6 = datatypes.ST.register(hl7v2Metadata, {
  title: "INV.6",
  version: "2.5",
  description: "Position on Carrier",
  type: "Field",
  item: 1377,
  table: "",
  longName: "HL7Position on Carrier",
  length: 250
});

/**
 * INV.7 - Initial Quantity
 */
export const INV_7 = datatypes.NM.register(hl7v2Metadata, {
  title: "INV.7",
  version: "2.5",
  description: "Initial Quantity",
  type: "Field",
  item: 1378,
  table: "",
  longName: "HL7Initial Quantity",
  length: 20
});

/**
 * INV.8 - Current Quantity
 */
export const INV_8 = datatypes.NM.register(hl7v2Metadata, {
  title: "INV.8",
  version: "2.5",
  description: "Current Quantity",
  type: "Field",
  item: 1379,
  table: "",
  longName: "HL7Current Quantity",
  length: 20
});

/**
 * INV.9 - Available Quantity
 */
export const INV_9 = datatypes.NM.register(hl7v2Metadata, {
  title: "INV.9",
  version: "2.5",
  description: "Available Quantity",
  type: "Field",
  item: 1380,
  table: "",
  longName: "HL7Available Quantity",
  length: 20
});

/**
 * INV.10 - Consumption Quantity
 */
export const INV_10 = datatypes.NM.register(hl7v2Metadata, {
  title: "INV.10",
  version: "2.5",
  description: "Consumption Quantity",
  type: "Field",
  item: 1381,
  table: "",
  longName: "HL7Consumption Quantity",
  length: 20
});

/**
 * INV.11 - Quantity Units
 */
export const INV_11 = datatypes.ST.register(hl7v2Metadata, {
  title: "INV.11",
  version: "2.5",
  description: "Quantity Units",
  type: "Field",
  item: 1382,
  table: "",
  longName: "HL7Quantity Units",
  length: 250
});

/**
 * INV.12 - Expiration Date/Time
 */
export const INV_12 = datatypes.ST.register(hl7v2Metadata, {
  title: "INV.12",
  version: "2.5",
  description: "Expiration Date/Time",
  type: "Field",
  item: 1383,
  table: "",
  longName: "HL7Expiration Date/Time",
  length: 26
});

/**
 * INV.13 - First Used Date/Time
 */
export const INV_13 = datatypes.ST.register(hl7v2Metadata, {
  title: "INV.13",
  version: "2.5",
  description: "First Used Date/Time",
  type: "Field",
  item: 1384,
  table: "",
  longName: "HL7First Used Date/Time",
  length: 26
});

/**
 * INV.14 - On Board Stability Duration
 */
export const INV_14 = datatypes.ST.register(hl7v2Metadata, {
  title: "INV.14",
  version: "2.5",
  description: "On Board Stability Duration",
  type: "Field",
  item: 1385,
  table: "",
  longName: "HL7On Board Stability Duration",
  length: 200
});

/**
 * INV.15 - Test/Fluid Identifier(s)
 */
export const INV_15 = datatypes.ST.register(hl7v2Metadata, {
  title: "INV.15",
  version: "2.5",
  description: "Test/Fluid Identifier(s)",
  type: "Field",
  item: 1386,
  table: "",
  longName: "HL7Test/Fluid Identifier(s)",
  length: 250
});

/**
 * INV.16 - Manufacturer Lot Number
 */
export const INV_16 = datatypes.ST.register(hl7v2Metadata, {
  title: "INV.16",
  version: "2.5",
  description: "Manufacturer Lot Number",
  type: "Field",
  item: 1387,
  table: "",
  longName: "HL7Manufacturer Lot Number",
  length: 200
});

/**
 * INV.17 - Manufacturer Identifier
 */
export const INV_17 = datatypes.ST.register(hl7v2Metadata, {
  title: "INV.17",
  version: "2.5",
  description: "Manufacturer Identifier",
  type: "Field",
  item: 286,
  table: "HL70385",
  longName: "HL7Manufacturer Identifier",
  length: 250
});

/**
 * INV.18 - Supplier Identifier
 */
export const INV_18 = datatypes.ST.register(hl7v2Metadata, {
  title: "INV.18",
  version: "2.5",
  description: "Supplier Identifier",
  type: "Field",
  item: 1389,
  table: "HL70386",
  longName: "HL7Supplier Identifier",
  length: 250
});

/**
 * INV.19 - On Board Stability Time
 */
export const INV_19 = datatypes.ST.register(hl7v2Metadata, {
  title: "INV.19",
  version: "2.5",
  description: "On Board Stability Time",
  type: "Field",
  item: 1626,
  table: "",
  longName: "HL7On Board Stability Time",
  length: 20
});

/**
 * INV.20 - Target Value
 */
export const INV_20 = datatypes.ST.register(hl7v2Metadata, {
  title: "INV.20",
  version: "2.5",
  description: "Target Value",
  type: "Field",
  item: 1896,
  table: "",
  longName: "HL7Target Value",
  length: 20
});
