import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import { SimpleTypes } from "./simpletypes";

/**
 * HL7 v2.7 VH Composite Data Type
 *
 * HL7 v2.7 VH composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * VH.1 - Start Day Range
 */
export const VH_1 = SimpleTypes.ID.max(3).optional().register(hl7v2Metadata, {
  title: "VH.1",
  version: "2.7",
  description: "Start Day Range",
  type: "DataType",
  length: 3,
  optionality: "O"
});

/**
 * VH.2 - End Day Range
 */
export const VH_2 = SimpleTypes.ID.max(3).optional().register(hl7v2Metadata, {
  title: "VH.2",
  version: "2.7",
  description: "End Day Range",
  type: "DataType",
  length: 3,
  optionality: "O"
});

/**
 * VH.3 - Start Hour Range
 */
export const VH_3 = SimpleTypes.TM.optional().register(hl7v2Metadata, {
  title: "VH.3",
  version: "2.7",
  description: "Start Hour Range",
  type: "DataType",
  optionality: "O"
});

/**
 * VH.4 - End Hour Range
 */
export const VH_4 = SimpleTypes.TM.optional().register(hl7v2Metadata, {
  title: "VH.4",
  version: "2.7",
  description: "End Hour Range",
  type: "DataType",
  optionality: "O"
});

/**
 * VH - HL7 v2.7 VH composite data type
 *
 * Components:
 * - VH.1: Start Day Range (ID)
 * - VH.2: End Day Range (ID)
 * - VH.3: Start Hour Range (TM)
 * - VH.4: End Hour Range (TM)
 */
export const VH = z
  .object({
    "1": VH_1,
    "2": VH_2,
    "3": VH_3,
    "4": VH_4
  })
  .register(hl7v2Metadata, {
    title: "VH",
    version: "2.7",
    description: "HL7 v2.7 VH composite data type"
  });

/**
 * Type definition for VH
 */
export type VH = z.infer<typeof VH>;
