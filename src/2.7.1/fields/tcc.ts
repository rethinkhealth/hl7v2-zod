import hl7v2Metadata from "../registry";
import * as datatypes from "../datatypes";

/**
 * HL7 v2.7 TCC Fields
 *
 * HL7 v2.7 TCC field definitions
 * Each field consists of specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * TCC.1 - Universal Service Identifier
 */
export const TCC_1 = datatypes.CWE.register(hl7v2Metadata, {
  title: "TCC.1",
  version: "2.7",
  description: "Universal Service Identifier",
  type: "Field",
  item: 238,
  table: "",
  longName: "HL7Universal Service Identifier"
});

/**
 * TCC.2 - Equipment Test Application Identifier
 */
export const TCC_2 = datatypes.ST.register(hl7v2Metadata, {
  title: "TCC.2",
  version: "2.7",
  description: "Equipment Test Application Identifier",
  type: "Field",
  item: 1408,
  table: "",
  longName: "HL7Equipment Test Application Identifier"
});

/**
 * TCC.4 - Auto-Dilution Factor Default
 */
export const TCC_4 = datatypes.ST.register(hl7v2Metadata, {
  title: "TCC.4",
  version: "2.7",
  description: "Auto-Dilution Factor Default",
  type: "Field",
  item: 1410,
  table: "",
  longName: "HL7Auto-Dilution Factor Default"
});

/**
 * TCC.5 - Rerun Dilution Factor Default
 */
export const TCC_5 = datatypes.ST.register(hl7v2Metadata, {
  title: "TCC.5",
  version: "2.7",
  description: "Rerun Dilution Factor Default",
  type: "Field",
  item: 1411,
  table: "",
  longName: "HL7Rerun Dilution Factor Default"
});

/**
 * TCC.6 - Pre-Dilution Factor Default
 */
export const TCC_6 = datatypes.ST.register(hl7v2Metadata, {
  title: "TCC.6",
  version: "2.7",
  description: "Pre-Dilution Factor Default",
  type: "Field",
  item: 1412,
  table: "",
  longName: "HL7Pre-Dilution Factor Default"
});

/**
 * TCC.7 - Endogenous Content of Pre-Dilution Diluent
 */
export const TCC_7 = datatypes.ST.register(hl7v2Metadata, {
  title: "TCC.7",
  version: "2.7",
  description: "Endogenous Content of Pre-Dilution Diluent",
  type: "Field",
  item: 1413,
  table: "",
  longName: "HL7Endogenous Content of Pre-Dilution Diluent"
});

/**
 * TCC.8 - Inventory Limits Warning Level
 */
export const TCC_8 = datatypes.NM.register(hl7v2Metadata, {
  title: "TCC.8",
  version: "2.7",
  description: "Inventory Limits Warning Level",
  type: "Field",
  item: 1414,
  table: "",
  longName: "HL7Inventory Limits Warning Level"
});

/**
 * TCC.9 - Automatic Rerun Allowed
 */
export const TCC_9 = datatypes.ID.register(hl7v2Metadata, {
  title: "TCC.9",
  version: "2.7",
  description: "Automatic Rerun Allowed",
  type: "Field",
  item: 1415,
  table: "HL70136",
  longName: "HL7Automatic Rerun Allowed",
  length: 1
});

/**
 * TCC.10 - Automatic Repeat Allowed
 */
export const TCC_10 = datatypes.ID.register(hl7v2Metadata, {
  title: "TCC.10",
  version: "2.7",
  description: "Automatic Repeat Allowed",
  type: "Field",
  item: 1416,
  table: "HL70136",
  longName: "HL7Automatic Repeat Allowed",
  length: 1
});

/**
 * TCC.11 - Automatic Reflex Allowed
 */
export const TCC_11 = datatypes.ID.register(hl7v2Metadata, {
  title: "TCC.11",
  version: "2.7",
  description: "Automatic Reflex Allowed",
  type: "Field",
  item: 1417,
  table: "HL70136",
  longName: "HL7Automatic Reflex Allowed",
  length: 1
});

/**
 * TCC.12 - Equipment Dynamic Range
 */
export const TCC_12 = datatypes.ST.register(hl7v2Metadata, {
  title: "TCC.12",
  version: "2.7",
  description: "Equipment Dynamic Range",
  type: "Field",
  item: 1418,
  table: "",
  longName: "HL7Equipment Dynamic Range"
});

/**
 * TCC.13 - Units
 */
export const TCC_13 = datatypes.CWE.register(hl7v2Metadata, {
  title: "TCC.13",
  version: "2.7",
  description: "Units",
  type: "Field",
  item: 574,
  table: "HL79999",
  longName: "HL7Units"
});

/**
 * TCC.14 - Processing Type
 */
export const TCC_14 = datatypes.CWE.register(hl7v2Metadata, {
  title: "TCC.14",
  version: "2.7",
  description: "Processing Type",
  type: "Field",
  item: 1419,
  table: "HL70388",
  longName: "HL7Processing Type"
});
