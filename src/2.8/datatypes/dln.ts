import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import { SimpleTypes } from "./simpletypes";
import { CWE } from "./cwe";

/**
 * HL7 v2.8 DLN Composite Data Type
 *
 * HL7 v2.8 DLN composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * DLN.1 - License Number
 */
export const DLN_1 = SimpleTypes.ST.register(hl7v2Metadata, {
  title: "DLN.1",
  version: "2.8",
  description: "License Number",
  type: "DataType",
  optionality: "R"
});

/**
 * DLN.2 - Issuing State, Province, Country
 */
export const DLN_2 = CWE.optional().register(hl7v2Metadata, {
  title: "DLN.2",
  version: "2.8",
  description: "Issuing State, Province, Country",
  type: "DataType",
  optionality: "O"
});

/**
 * DLN.3 - Expiration Date
 */
export const DLN_3 = SimpleTypes.DT.optional().register(hl7v2Metadata, {
  title: "DLN.3",
  version: "2.8",
  description: "Expiration Date",
  type: "DataType",
  optionality: "O"
});

/**
 * DLN - HL7 v2.8 DLN composite data type
 *
 * Components:
 * - DLN.1: License Number (ST)
 * - DLN.2: Issuing State, Province, Country (CWE)
 * - DLN.3: Expiration Date (DT)
 */
export const DLN = z
  .object({
    "1": DLN_1,
    "2": DLN_2,
    "3": DLN_3
  })
  .register(hl7v2Metadata, {
    title: "DLN",
    version: "2.8",
    description: "HL7 v2.8 DLN composite data type"
  });

/**
 * Type definition for DLN
 */
export type DLN = z.infer<typeof DLN>;
