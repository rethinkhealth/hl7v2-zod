import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import { SimpleTypes } from "./simpletypes";

/**
 * HL7 v2.6 NR Composite Data Type
 *
 * HL7 v2.6 NR composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * NR.1 - Low Value
 */
export const NR_1 = SimpleTypes.NM.max(16).optional().register(hl7v2Metadata, {
  title: "NR.1",
  version: "2.6",
  description: "Low Value",
  type: "DataType",
  length: 16,
  optionality: "O"
});

/**
 * NR.2 - High Value
 */
export const NR_2 = SimpleTypes.NM.max(16).optional().register(hl7v2Metadata, {
  title: "NR.2",
  version: "2.6",
  description: "High Value",
  type: "DataType",
  length: 16,
  optionality: "O"
});

/**
 * NR - HL7 v2.6 NR composite data type
 *
 * Components:
 * - NR.1: Low Value (NM)
 * - NR.2: High Value (NM)
 */
export const NR = z
  .object({
    "1": NR_1,
    "2": NR_2
  })
  .register(hl7v2Metadata, {
    title: "NR",
    version: "2.6",
    description: "HL7 v2.6 NR composite data type"
  });

/**
 * Type definition for NR
 */
export type NR = z.infer<typeof NR>;
