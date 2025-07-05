import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import { SimpleTypes } from "./simpletypes";
import { CNE } from "./cne";

/**
 * HL7 v2.5 OCD Composite Data Type
 *
 * HL7 v2.5 OCD composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * OCD.1 - Occurrence Code
 */
export const OCD_1 = CNE.register(hl7v2Metadata, {
  title: "OCD.1",
  version: "2.5",
  description: "Occurrence Code",
  type: "DataType",
  length: 705,
  optionality: "R"
});

/**
 * OCD.2 - Occurrence Date
 */
export const OCD_2 = SimpleTypes.DT.max(8).register(hl7v2Metadata, {
  title: "OCD.2",
  version: "2.5",
  description: "Occurrence Date",
  type: "DataType",
  length: 8,
  optionality: "R"
});

/**
 * OCD - HL7 v2.5 OCD composite data type
 *
 * Components:
 * - OCD.1: Occurrence Code (CNE)
 * - OCD.2: Occurrence Date (DT)
 */
export const OCD = z
  .object({
    "1": OCD_1,
    "2": OCD_2
  })
  .register(hl7v2Metadata, {
    title: "OCD",
    version: "2.5",
    description: "HL7 v2.5 OCD composite data type"
  });

/**
 * Type definition for OCD
 */
export type OCD = z.infer<typeof OCD>;
