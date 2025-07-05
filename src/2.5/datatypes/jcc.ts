import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import { SimpleTypes } from "./simpletypes";
import { MixedTypes } from "./mixedtypes";

/**
 * HL7 v2.5 JCC Composite Data Type
 *
 * HL7 v2.5 JCC composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * JCC.1 - Job Code
 */
export const JCC_1 = SimpleTypes.IS.max(20).optional().register(hl7v2Metadata, {
  title: "JCC.1",
  version: "2.5",
  description: "Job Code",
  type: "DataType",
  length: 20,
  optionality: "O"
});

/**
 * JCC.2 - Job Class
 */
export const JCC_2 = SimpleTypes.IS.max(20).optional().register(hl7v2Metadata, {
  title: "JCC.2",
  version: "2.5",
  description: "Job Class",
  type: "DataType",
  length: 20,
  optionality: "O"
});

/**
 * JCC.3 - Job Description Text
 */
export const JCC_3 = MixedTypes.TX.optional().register(hl7v2Metadata, {
  title: "JCC.3",
  version: "2.5",
  description: "Job Description Text",
  type: "DataType",
  length: 250,
  optionality: "O"
});

/**
 * JCC - HL7 v2.5 JCC composite data type
 *
 * Components:
 * - JCC.1: Job Code (IS)
 * - JCC.2: Job Class (IS)
 * - JCC.3: Job Description Text (TX)
 */
export const JCC = z
  .object({
    "1": JCC_1,
    "2": JCC_2,
    "3": JCC_3
  })
  .register(hl7v2Metadata, {
    title: "JCC",
    version: "2.5",
    description: "HL7 v2.5 JCC composite data type"
  });

/**
 * Type definition for JCC
 */
export type JCC = z.infer<typeof JCC>;
