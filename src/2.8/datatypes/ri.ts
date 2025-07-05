import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import { SimpleTypes } from "./simpletypes";
import { CWE } from "./cwe";

/**
 * HL7 v2.8 RI Composite Data Type
 *
 * HL7 v2.8 RI composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * RI.1 - Repeat Pattern
 */
export const RI_1 = CWE.optional().register(hl7v2Metadata, {
  title: "RI.1",
  version: "2.8",
  description: "Repeat Pattern",
  type: "DataType",
  optionality: "O"
});

/**
 * RI.2 - Explicit Time Interval
 */
export const RI_2 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  title: "RI.2",
  version: "2.8",
  description: "Explicit Time Interval",
  type: "DataType",
  optionality: "O"
});

/**
 * RI - HL7 v2.8 RI composite data type
 *
 * Components:
 * - RI.1: Repeat Pattern (CWE)
 * - RI.2: Explicit Time Interval (ST)
 */
export const RI = z
  .object({
    "1": RI_1,
    "2": RI_2
  })
  .register(hl7v2Metadata, {
    title: "RI",
    version: "2.8",
    description: "HL7 v2.8 RI composite data type"
  });

/**
 * Type definition for RI
 */
export type RI = z.infer<typeof RI>;
