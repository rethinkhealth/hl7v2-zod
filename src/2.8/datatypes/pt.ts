import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import { SimpleTypes } from "./simpletypes";

/**
 * HL7 v2.8 PT Composite Data Type
 *
 * HL7 v2.8 PT composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * PT.1 - Processing ID
 */
export const PT_1 = SimpleTypes.ID.max(1).register(hl7v2Metadata, {
  title: "PT.1",
  version: "2.8",
  description: "Processing ID",
  type: "DataType",
  length: 1,
  optionality: "R"
});

/**
 * PT.2 - Processing Mode
 */
export const PT_2 = SimpleTypes.ID.max(1).optional().register(hl7v2Metadata, {
  title: "PT.2",
  version: "2.8",
  description: "Processing Mode",
  type: "DataType",
  length: 1,
  optionality: "O"
});

/**
 * PT - HL7 v2.8 PT composite data type
 *
 * Components:
 * - PT.1: Processing ID (ID)
 * - PT.2: Processing Mode (ID)
 */
export const PT = z
  .object({
    "1": PT_1,
    "2": PT_2
  })
  .register(hl7v2Metadata, {
    title: "PT",
    version: "2.8",
    description: "HL7 v2.8 PT composite data type"
  });

/**
 * Type definition for PT
 */
export type PT = z.infer<typeof PT>;
