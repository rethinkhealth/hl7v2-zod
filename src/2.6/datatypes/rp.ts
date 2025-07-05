import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import { SimpleTypes } from "./simpletypes";

/**
 * HL7 v2.6 RP Composite Data Type
 *
 * HL7 v2.6 RP composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * RP.1 - Pointer
 */
export const RP_1 = SimpleTypes.ST.max(999).optional().register(hl7v2Metadata, {
  title: "RP.1",
  version: "2.6",
  description: "Pointer",
  type: "DataType",
  length: 999,
  optionality: "O"
});

/**
 * RP.2 - Application ID
 */
export const RP_2 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  title: "RP.2",
  version: "2.6",
  description: "Application ID",
  type: "DataType",
  length: 1027,
  optionality: "O"
});

/**
 * RP.3 - Type of Data
 */
export const RP_3 = SimpleTypes.ID.max(11).optional().register(hl7v2Metadata, {
  title: "RP.3",
  version: "2.6",
  description: "Type of Data",
  type: "DataType",
  length: 11,
  optionality: "O"
});

/**
 * RP.4 - Subtype
 */
export const RP_4 = SimpleTypes.ID.max(32).optional().register(hl7v2Metadata, {
  title: "RP.4",
  version: "2.6",
  description: "Subtype",
  type: "DataType",
  length: 32,
  optionality: "O"
});

/**
 * RP - HL7 v2.6 RP composite data type
 *
 * Components:
 * - RP.1: Pointer (ST)
 * - RP.2: Application ID (HD)
 * - RP.3: Type of Data (ID)
 * - RP.4: Subtype (ID)
 */
export const RP = z
  .object({
    "1": RP_1,
    "2": RP_2,
    "3": RP_3,
    "4": RP_4
  })
  .register(hl7v2Metadata, {
    title: "RP",
    version: "2.6",
    description: "HL7 v2.6 RP composite data type"
  });

/**
 * Type definition for RP
 */
export type RP = z.infer<typeof RP>;
