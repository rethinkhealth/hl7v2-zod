import hl7v2Metadata from "../registry";
import * as datatypes from "../datatypes";

/**
 * HL7 v2.7 RXR Fields
 *
 * HL7 v2.7 RXR field definitions
 * Each field consists of specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * RXR.1 - Route
 */
export const RXR_1 = datatypes.CWE.register(hl7v2Metadata, {
  title: "RXR.1",
  version: "2.7",
  description: "Route",
  type: "Field",
  item: 309,
  table: "HL70162",
  longName: "HL7Route"
});

/**
 * RXR.2 - Administration Site
 */
export const RXR_2 = datatypes.CWE.register(hl7v2Metadata, {
  title: "RXR.2",
  version: "2.7",
  description: "Administration Site",
  type: "Field",
  item: 310,
  table: "HL70550",
  longName: "HL7Administration Site"
});

/**
 * RXR.3 - Administration Device
 */
export const RXR_3 = datatypes.CWE.register(hl7v2Metadata, {
  title: "RXR.3",
  version: "2.7",
  description: "Administration Device",
  type: "Field",
  item: 311,
  table: "HL70164",
  longName: "HL7Administration Device"
});

/**
 * RXR.4 - Administration Method
 */
export const RXR_4 = datatypes.CWE.register(hl7v2Metadata, {
  title: "RXR.4",
  version: "2.7",
  description: "Administration Method",
  type: "Field",
  item: 312,
  table: "HL70165",
  longName: "HL7Administration Method"
});

/**
 * RXR.5 - Routing Instruction
 */
export const RXR_5 = datatypes.CWE.register(hl7v2Metadata, {
  title: "RXR.5",
  version: "2.7",
  description: "Routing Instruction",
  type: "Field",
  item: 1315,
  table: "HL79999",
  longName: "HL7Routing Instruction"
});

/**
 * RXR.6 - Administration Site Modifier
 */
export const RXR_6 = datatypes.CWE.register(hl7v2Metadata, {
  title: "RXR.6",
  version: "2.7",
  description: "Administration Site Modifier",
  type: "Field",
  item: 1670,
  table: "HL70495",
  longName: "HL7Administration Site Modifier"
});
