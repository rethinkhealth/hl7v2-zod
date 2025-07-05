import hl7v2Metadata from "../registry";
import * as datatypes from "../datatypes";

/**
 * HL7 v2.8 LCC Fields
 *
 * HL7 v2.8 LCC field definitions
 * Each field consists of specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * LCC.1 - Primary Key Value - LCC
 */
export const LCC_1 = datatypes.ST.register(hl7v2Metadata, {
  title: "LCC.1",
  version: "2.8",
  description: "Primary Key Value - LCC",
  type: "Field",
  item: 979,
  table: "",
  longName: "HL7Primary Key Value - LCC"
});

/**
 * LCC.2 - Location Department
 */
export const LCC_2 = datatypes.CWE.register(hl7v2Metadata, {
  title: "LCC.2",
  version: "2.8",
  description: "Location Department",
  type: "Field",
  item: 964,
  table: "HL70264",
  longName: "HL7Location Department"
});

/**
 * LCC.3 - Accommodation Type
 */
export const LCC_3 = datatypes.CWE.register(hl7v2Metadata, {
  title: "LCC.3",
  version: "2.8",
  description: "Accommodation Type",
  type: "Field",
  item: 980,
  table: "HL70129",
  longName: "HL7Accommodation Type"
});

/**
 * LCC.4 - Charge Code
 */
export const LCC_4 = datatypes.CWE.register(hl7v2Metadata, {
  title: "LCC.4",
  version: "2.8",
  description: "Charge Code",
  type: "Field",
  item: 981,
  table: "HL70132",
  longName: "HL7Charge Code"
});
