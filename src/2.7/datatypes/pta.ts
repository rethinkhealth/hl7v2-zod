import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import { CWE } from "./cwe";
import { MOP } from "./mop";

/**
 * HL7 v2.7 PTA Composite Data Type
 *
 * HL7 v2.7 PTA composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * PTA.1 - Policy Type
 */
export const PTA_1 = CWE.register(hl7v2Metadata, {
  title: "PTA.1",
  version: "2.7",
  description: "Policy Type",
  type: "DataType",
  optionality: "R"
});

/**
 * PTA.2 - Amount Class
 */
export const PTA_2 = CWE.optional().register(hl7v2Metadata, {
  title: "PTA.2",
  version: "2.7",
  description: "Amount Class",
  type: "DataType",
  optionality: "O"
});

/**
 * PTA.4 - Money or Percentage
 */
export const PTA_4 = MOP.register(hl7v2Metadata, {
  title: "PTA.4",
  version: "2.7",
  description: "Money or Percentage",
  type: "DataType",
  optionality: "R"
});

/**
 * PTA - HL7 v2.7 PTA composite data type
 *
 * Components:
 * - PTA.1: Policy Type (CWE)
 * - PTA.2: Amount Class (CWE)
 * - PTA.4: Money or Percentage (MOP)
 */
export const PTA = z
  .object({
    "1": PTA_1,
    "2": PTA_2,
    "3": PTA_4
  })
  .register(hl7v2Metadata, {
    title: "PTA",
    version: "2.7",
    description: "HL7 v2.7 PTA composite data type"
  });

/**
 * Type definition for PTA
 */
export type PTA = z.infer<typeof PTA>;
