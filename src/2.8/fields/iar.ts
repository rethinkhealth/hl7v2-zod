import hl7v2Metadata from "../registry";
import * as datatypes from "../datatypes";

/**
 * HL7 v2.8 IAR Fields
 *
 * HL7 v2.8 IAR field definitions
 * Each field consists of specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * IAR.1 - Allergy Reaction Code
 */
export const IAR_1 = datatypes.CWE.register(hl7v2Metadata, {
  title: "IAR.1",
  version: "2.8",
  description: "Allergy Reaction Code",
  type: "Field",
  item: 3296,
  table: "",
  longName: "HL7Allergy Reaction Code"
});

/**
 * IAR.2 - Allergy Severity Code
 */
export const IAR_2 = datatypes.CWE.register(hl7v2Metadata, {
  title: "IAR.2",
  version: "2.8",
  description: "Allergy Severity Code",
  type: "Field",
  item: 3297,
  table: "HL70128",
  longName: "HL7Allergy Severity Code"
});

/**
 * IAR.3 - Sensitivity to Causative Agent Code
 */
export const IAR_3 = datatypes.CWE.register(hl7v2Metadata, {
  title: "IAR.3",
  version: "2.8",
  description: "Sensitivity to Causative Agent Code",
  type: "Field",
  item: 3298,
  table: "HL70436",
  longName: "HL7Sensitivity to Causative Agent Code"
});

/**
 * IAR.4 - Management
 */
export const IAR_4 = datatypes.ST.register(hl7v2Metadata, {
  title: "IAR.4",
  version: "2.8",
  description: "Management",
  type: "Field",
  item: 3299,
  table: "",
  longName: "HL7Management"
});
