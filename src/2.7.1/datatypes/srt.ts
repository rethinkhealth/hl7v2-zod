import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import { SimpleTypes } from "./simpletypes";

/**
 * HL7 v2.7 SRT Composite Data Type
 *
 * HL7 v2.7 SRT composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * SRT.1 - Sort-by Field
 */
export const SRT_1 = SimpleTypes.ST.max(12).register(hl7v2Metadata, {
  title: "SRT.1",
  version: "2.7",
  description: "Sort-by Field",
  type: "DataType",
  length: 12,
  optionality: "R"
});

/**
 * SRT.2 - Sequencing
 */
export const SRT_2 = SimpleTypes.ID.max(2).optional().register(hl7v2Metadata, {
  title: "SRT.2",
  version: "2.7",
  description: "Sequencing",
  type: "DataType",
  length: 2,
  optionality: "O"
});

/**
 * SRT - HL7 v2.7 SRT composite data type
 *
 * Components:
 * - SRT.1: Sort-by Field (ST)
 * - SRT.2: Sequencing (ID)
 */
export const SRT = z
  .object({
    "1": SRT_1,
    "2": SRT_2
  })
  .register(hl7v2Metadata, {
    title: "SRT",
    version: "2.7",
    description: "HL7 v2.7 SRT composite data type"
  });

/**
 * Type definition for SRT
 */
export type SRT = z.infer<typeof SRT>;
