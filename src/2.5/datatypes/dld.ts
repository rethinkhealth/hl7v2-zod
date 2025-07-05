import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import { SimpleTypes } from "./simpletypes";

/**
 * HL7 v2.5 DLD Composite Data Type
 *
 * HL7 v2.5 DLD composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * DLD.1 - Discharge Location
 */
export const DLD_1 = SimpleTypes.IS.max(20).register(hl7v2Metadata, {
  title: "DLD.1",
  version: "2.5",
  description: "Discharge Location",
  type: "DataType",
  length: 20,
  optionality: "R"
});

/**
 * DLD.2 - Effective Date
 */
export const DLD_2 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  title: "DLD.2",
  version: "2.5",
  description: "Effective Date",
  type: "DataType",
  length: 26,
  optionality: "O"
});

/**
 * DLD - HL7 v2.5 DLD composite data type
 *
 * Components:
 * - DLD.1: Discharge Location (IS)
 * - DLD.2: Effective Date (TS)
 */
export const DLD = z
  .object({
    "1": DLD_1,
    "2": DLD_2
  })
  .register(hl7v2Metadata, {
    title: "DLD",
    version: "2.5",
    description: "HL7 v2.5 DLD composite data type"
  });

/**
 * Type definition for DLD
 */
export type DLD = z.infer<typeof DLD>;
