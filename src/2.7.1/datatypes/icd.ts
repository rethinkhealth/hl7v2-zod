import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import { SimpleTypes } from "./simpletypes";
import { CWE } from "./cwe";

/**
 * HL7 v2.7 ICD Composite Data Type
 *
 * HL7 v2.7 ICD composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ICD.1 - Certification Patient Type
 */
export const ICD_1 = CWE.optional().register(hl7v2Metadata, {
  title: "ICD.1",
  version: "2.7",
  description: "Certification Patient Type",
  type: "DataType",
  optionality: "O"
});

/**
 * ICD.2 - Certification Required
 */
export const ICD_2 = SimpleTypes.ID.max(1).register(hl7v2Metadata, {
  title: "ICD.2",
  version: "2.7",
  description: "Certification Required",
  type: "DataType",
  length: 1,
  optionality: "R"
});

/**
 * ICD.3 - Date/Time Certification Required
 */
export const ICD_3 = SimpleTypes.DTM.optional().register(hl7v2Metadata, {
  title: "ICD.3",
  version: "2.7",
  description: "Date/Time Certification Required",
  type: "DataType",
  optionality: "O"
});

/**
 * ICD - HL7 v2.7 ICD composite data type
 *
 * Components:
 * - ICD.1: Certification Patient Type (CWE)
 * - ICD.2: Certification Required (ID)
 * - ICD.3: Date/Time Certification Required (DTM)
 */
export const ICD = z
  .object({
    "1": ICD_1,
    "2": ICD_2,
    "3": ICD_3
  })
  .register(hl7v2Metadata, {
    title: "ICD",
    version: "2.7",
    description: "HL7 v2.7 ICD composite data type"
  });

/**
 * Type definition for ICD
 */
export type ICD = z.infer<typeof ICD>;
