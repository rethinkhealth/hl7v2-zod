import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import { SimpleTypes } from "./simpletypes";
import { CWE } from "./cwe";

/**
 * HL7 v2.5 CX Composite Data Type
 *
 * HL7 v2.5 CX composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * CX.1 - ID Number
 */
export const CX_1 = SimpleTypes.ST.max(15).register(hl7v2Metadata, {
  title: "CX.1",
  version: "2.5",
  description: "ID Number",
  type: "DataType",
  length: 15,
  optionality: "R"
});

/**
 * CX.2 - Check Digit
 */
export const CX_2 = SimpleTypes.ST.max(1).optional().register(hl7v2Metadata, {
  title: "CX.2",
  version: "2.5",
  description: "Check Digit",
  type: "DataType",
  length: 1,
  optionality: "O"
});

/**
 * CX.3 - Check Digit Scheme
 */
export const CX_3 = SimpleTypes.ID.max(3).optional().register(hl7v2Metadata, {
  title: "CX.3",
  version: "2.5",
  description: "Check Digit Scheme",
  type: "DataType",
  length: 3,
  optionality: "O"
});

/**
 * CX.4 - Assigning Authority
 */
export const CX_4 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  title: "CX.4",
  version: "2.5",
  description: "Assigning Authority",
  type: "DataType",
  length: 227,
  optionality: "O"
});

/**
 * CX.5 - Identifier Type Code
 */
export const CX_5 = SimpleTypes.ID.max(5).optional().register(hl7v2Metadata, {
  title: "CX.5",
  version: "2.5",
  description: "Identifier Type Code",
  type: "DataType",
  length: 5,
  optionality: "O"
});

/**
 * CX.6 - Assigning Facility
 */
export const CX_6 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  title: "CX.6",
  version: "2.5",
  description: "Assigning Facility",
  type: "DataType",
  length: 227,
  optionality: "O"
});

/**
 * CX.7 - Effective Date
 */
export const CX_7 = SimpleTypes.DT.max(8).optional().register(hl7v2Metadata, {
  title: "CX.7",
  version: "2.5",
  description: "Effective Date",
  type: "DataType",
  length: 8,
  optionality: "O"
});

/**
 * CX.8 - Expiration Date
 */
export const CX_8 = SimpleTypes.DT.max(8).optional().register(hl7v2Metadata, {
  title: "CX.8",
  version: "2.5",
  description: "Expiration Date",
  type: "DataType",
  length: 8,
  optionality: "O"
});

/**
 * CX.9 - Assigning Jurisdiction
 */
export const CX_9 = CWE.optional().register(hl7v2Metadata, {
  title: "CX.9",
  version: "2.5",
  description: "Assigning Jurisdiction",
  type: "DataType",
  length: 705,
  optionality: "O"
});

/**
 * CX.10 - Assigning Agency or Department
 */
export const CX_10 = CWE.optional().register(hl7v2Metadata, {
  title: "CX.10",
  version: "2.5",
  description: "Assigning Agency or Department",
  type: "DataType",
  length: 705,
  optionality: "O"
});

/**
 * CX - HL7 v2.5 CX composite data type
 *
 * Components:
 * - CX.1: ID Number (ST)
 * - CX.2: Check Digit (ST)
 * - CX.3: Check Digit Scheme (ID)
 * - CX.4: Assigning Authority (HD)
 * - CX.5: Identifier Type Code (ID)
 * - CX.6: Assigning Facility (HD)
 * - CX.7: Effective Date (DT)
 * - CX.8: Expiration Date (DT)
 * - CX.9: Assigning Jurisdiction (CWE)
 * - CX.10: Assigning Agency or Department (CWE)
 */
export const CX = z
  .object({
    "1": CX_1,
    "2": CX_2,
    "3": CX_3,
    "4": CX_4,
    "5": CX_5,
    "6": CX_6,
    "7": CX_7,
    "8": CX_8,
    "9": CX_9,
    "10": CX_10
  })
  .register(hl7v2Metadata, {
    title: "CX",
    version: "2.5",
    description: "HL7 v2.5 CX composite data type"
  });

/**
 * Type definition for CX
 */
export type CX = z.infer<typeof CX>;
