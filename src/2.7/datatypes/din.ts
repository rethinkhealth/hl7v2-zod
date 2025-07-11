import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import { SimpleTypes } from "./simpletypes";
import { CWE } from "./cwe";

/**
 * HL7 v2.7 DIN Composite Data Type
 *
 * HL7 v2.7 DIN composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * DIN.1 - Date
 */
export const DIN_1 = SimpleTypes.DTM.register(hl7v2Metadata, {
  title: "DIN.1",
  version: "2.7",
  description: "Date",
  type: "DataType",
  optionality: "R"
});

/**
 * DIN.2 - Institution Name
 */
export const DIN_2 = CWE.register(hl7v2Metadata, {
  title: "DIN.2",
  version: "2.7",
  description: "Institution Name",
  type: "DataType",
  optionality: "R"
});

/**
 * DIN - HL7 v2.7 DIN composite data type
 *
 * Components:
 * - DIN.1: Date (DTM)
 * - DIN.2: Institution Name (CWE)
 */
export const DIN = z
  .object({
    "1": DIN_1,
    "2": DIN_2
  })
  .register(hl7v2Metadata, {
    title: "DIN",
    version: "2.7",
    description: "HL7 v2.7 DIN composite data type"
  });

/**
 * Type definition for DIN
 */
export type DIN = z.infer<typeof DIN>;
