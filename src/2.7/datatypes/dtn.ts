import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import { SimpleTypes } from "./simpletypes";
import { CWE } from "./cwe";

/**
 * HL7 v2.7 DTN Composite Data Type
 *
 * HL7 v2.7 DTN composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * DTN.1 - Day Type
 */
export const DTN_1 = CWE.register(hl7v2Metadata, {
  title: "DTN.1",
  version: "2.7",
  description: "Day Type",
  type: "DataType",
  optionality: "R"
});

/**
 * DTN.2 - Number of Days
 */
export const DTN_2 = SimpleTypes.NM.register(hl7v2Metadata, {
  title: "DTN.2",
  version: "2.7",
  description: "Number of Days",
  type: "DataType",
  optionality: "R"
});

/**
 * DTN - HL7 v2.7 DTN composite data type
 *
 * Components:
 * - DTN.1: Day Type (CWE)
 * - DTN.2: Number of Days (NM)
 */
export const DTN = z
  .object({
    "1": DTN_1,
    "2": DTN_2
  })
  .register(hl7v2Metadata, {
    title: "DTN",
    version: "2.7",
    description: "HL7 v2.7 DTN composite data type"
  });

/**
 * Type definition for DTN
 */
export type DTN = z.infer<typeof DTN>;
