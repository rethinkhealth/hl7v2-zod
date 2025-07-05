import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import { SimpleTypes } from "./simpletypes";
import { CWE } from "./cwe";

/**
 * HL7 v2.8 VID Composite Data Type
 *
 * HL7 v2.8 VID composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * VID.1 - Version ID
 */
export const VID_1 = SimpleTypes.ID.max(5).register(hl7v2Metadata, {
  title: "VID.1",
  version: "2.8",
  description: "Version ID",
  type: "DataType",
  length: 5,
  optionality: "R"
});

/**
 * VID.2 - Internationalization Code
 */
export const VID_2 = CWE.optional().register(hl7v2Metadata, {
  title: "VID.2",
  version: "2.8",
  description: "Internationalization Code",
  type: "DataType",
  optionality: "O"
});

/**
 * VID.3 - International Version ID
 */
export const VID_3 = CWE.optional().register(hl7v2Metadata, {
  title: "VID.3",
  version: "2.8",
  description: "International Version ID",
  type: "DataType",
  optionality: "O"
});

/**
 * VID - HL7 v2.8 VID composite data type
 *
 * Components:
 * - VID.1: Version ID (ID)
 * - VID.2: Internationalization Code (CWE)
 * - VID.3: International Version ID (CWE)
 */
export const VID = z
  .object({
    "1": VID_1,
    "2": VID_2,
    "3": VID_3
  })
  .register(hl7v2Metadata, {
    title: "VID",
    version: "2.8",
    description: "HL7 v2.8 VID composite data type"
  });

/**
 * Type definition for VID
 */
export type VID = z.infer<typeof VID>;
