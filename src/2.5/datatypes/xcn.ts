import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import { SimpleTypes } from "./simpletypes";
import { CWE } from "./cwe";

/**
 * HL7 v2.5 XCN Composite Data Type
 *
 * HL7 v2.5 XCN composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * XCN.1 - ID Number
 */
export const XCN_1 = SimpleTypes.ST.max(15).optional().register(hl7v2Metadata, {
  title: "XCN.1",
  version: "2.5",
  description: "ID Number",
  type: "DataType",
  length: 15,
  optionality: "O"
});

/**
 * XCN.2 - Family Name
 */
export const XCN_2 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  title: "XCN.2",
  version: "2.5",
  description: "Family Name",
  type: "DataType",
  length: 194,
  optionality: "O"
});

/**
 * XCN.3 - Given Name
 */
export const XCN_3 = SimpleTypes.ST.max(30).optional().register(hl7v2Metadata, {
  title: "XCN.3",
  version: "2.5",
  description: "Given Name",
  type: "DataType",
  length: 30,
  optionality: "O"
});

/**
 * XCN.4 - Second and Further Given Names or Initials Thereof
 */
export const XCN_4 = SimpleTypes.ST.max(30).optional().register(hl7v2Metadata, {
  title: "XCN.4",
  version: "2.5",
  description: "Second and Further Given Names or Initials Thereof",
  type: "DataType",
  length: 30,
  optionality: "O"
});

/**
 * XCN.5 - Suffix (e.g., JR or III)
 */
export const XCN_5 = SimpleTypes.ST.max(20).optional().register(hl7v2Metadata, {
  title: "XCN.5",
  version: "2.5",
  description: "Suffix (e.g., JR or III)",
  type: "DataType",
  length: 20,
  optionality: "O"
});

/**
 * XCN.6 - Prefix (e.g., DR)
 */
export const XCN_6 = SimpleTypes.ST.max(20).optional().register(hl7v2Metadata, {
  title: "XCN.6",
  version: "2.5",
  description: "Prefix (e.g., DR)",
  type: "DataType",
  length: 20,
  optionality: "O"
});

/**
 * XCN.7 - Degree (e.g., MD)
 */
export const XCN_7 = SimpleTypes.IS.max(5).optional().register(hl7v2Metadata, {
  title: "XCN.7",
  version: "2.5",
  description: "Degree (e.g., MD)",
  type: "DataType",
  length: 5,
  optionality: "O"
});

/**
 * XCN.8 - Source Table
 */
export const XCN_8 = SimpleTypes.IS.max(4).optional().register(hl7v2Metadata, {
  title: "XCN.8",
  version: "2.5",
  description: "Source Table",
  type: "DataType",
  length: 4,
  optionality: "O"
});

/**
 * XCN.9 - Assigning Authority
 */
export const XCN_9 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  title: "XCN.9",
  version: "2.5",
  description: "Assigning Authority",
  type: "DataType",
  length: 227,
  optionality: "O"
});

/**
 * XCN.10 - Name Type Code
 */
export const XCN_10 = SimpleTypes.ID.max(1).optional().register(hl7v2Metadata, {
  title: "XCN.10",
  version: "2.5",
  description: "Name Type Code",
  type: "DataType",
  length: 1,
  optionality: "O"
});

/**
 * XCN.11 - Identifier Check Digit
 */
export const XCN_11 = SimpleTypes.ST.max(1).optional().register(hl7v2Metadata, {
  title: "XCN.11",
  version: "2.5",
  description: "Identifier Check Digit",
  type: "DataType",
  length: 1,
  optionality: "O"
});

/**
 * XCN.12 - Check Digit Scheme
 */
export const XCN_12 = SimpleTypes.ID.max(3).optional().register(hl7v2Metadata, {
  title: "XCN.12",
  version: "2.5",
  description: "Check Digit Scheme",
  type: "DataType",
  length: 3,
  optionality: "O"
});

/**
 * XCN.13 - Identifier Type Code
 */
export const XCN_13 = SimpleTypes.ID.max(5).optional().register(hl7v2Metadata, {
  title: "XCN.13",
  version: "2.5",
  description: "Identifier Type Code",
  type: "DataType",
  length: 5,
  optionality: "O"
});

/**
 * XCN.14 - Assigning Facility
 */
export const XCN_14 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  title: "XCN.14",
  version: "2.5",
  description: "Assigning Facility",
  type: "DataType",
  length: 227,
  optionality: "O"
});

/**
 * XCN.15 - Name Representation Code
 */
export const XCN_15 = SimpleTypes.ID.max(1).optional().register(hl7v2Metadata, {
  title: "XCN.15",
  version: "2.5",
  description: "Name Representation Code",
  type: "DataType",
  length: 1,
  optionality: "O"
});

/**
 * XCN.16 - Name Context
 */
export const XCN_16 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  title: "XCN.16",
  version: "2.5",
  description: "Name Context",
  type: "DataType",
  length: 483,
  optionality: "O"
});

/**
 * XCN.17 - Name Validity Range
 */
export const XCN_17 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  title: "XCN.17",
  version: "2.5",
  description: "Name Validity Range",
  type: "DataType",
  length: 53,
  optionality: "O"
});

/**
 * XCN.18 - Name Assembly Order
 */
export const XCN_18 = SimpleTypes.ID.max(1).optional().register(hl7v2Metadata, {
  title: "XCN.18",
  version: "2.5",
  description: "Name Assembly Order",
  type: "DataType",
  length: 1,
  optionality: "O"
});

/**
 * XCN.19 - Effective Date
 */
export const XCN_19 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  title: "XCN.19",
  version: "2.5",
  description: "Effective Date",
  type: "DataType",
  length: 26,
  optionality: "O"
});

/**
 * XCN.20 - Expiration Date
 */
export const XCN_20 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  title: "XCN.20",
  version: "2.5",
  description: "Expiration Date",
  type: "DataType",
  length: 26,
  optionality: "O"
});

/**
 * XCN.21 - Professional Suffix
 */
export const XCN_21 = SimpleTypes.ST.max(199).optional().register(hl7v2Metadata, {
  title: "XCN.21",
  version: "2.5",
  description: "Professional Suffix",
  type: "DataType",
  length: 199,
  optionality: "O"
});

/**
 * XCN.22 - Assigning Jurisdiction
 */
export const XCN_22 = CWE.optional().register(hl7v2Metadata, {
  title: "XCN.22",
  version: "2.5",
  description: "Assigning Jurisdiction",
  type: "DataType",
  length: 705,
  optionality: "O"
});

/**
 * XCN.23 - Assigning Agency or Department
 */
export const XCN_23 = CWE.optional().register(hl7v2Metadata, {
  title: "XCN.23",
  version: "2.5",
  description: "Assigning Agency or Department",
  type: "DataType",
  length: 705,
  optionality: "O"
});

/**
 * XCN - HL7 v2.5 XCN composite data type
 *
 * Components:
 * - XCN.1: ID Number (ST)
 * - XCN.2: Family Name (FN)
 * - XCN.3: Given Name (ST)
 * - XCN.4: Second and Further Given Names or Initials Thereof (ST)
 * - XCN.5: Suffix (e.g., JR or III) (ST)
 * - XCN.6: Prefix (e.g., DR) (ST)
 * - XCN.7: Degree (e.g., MD) (IS)
 * - XCN.8: Source Table (IS)
 * - XCN.9: Assigning Authority (HD)
 * - XCN.10: Name Type Code (ID)
 * - XCN.11: Identifier Check Digit (ST)
 * - XCN.12: Check Digit Scheme (ID)
 * - XCN.13: Identifier Type Code (ID)
 * - XCN.14: Assigning Facility (HD)
 * - XCN.15: Name Representation Code (ID)
 * - XCN.16: Name Context (CE)
 * - XCN.17: Name Validity Range (DR)
 * - XCN.18: Name Assembly Order (ID)
 * - XCN.19: Effective Date (TS)
 * - XCN.20: Expiration Date (TS)
 * - XCN.21: Professional Suffix (ST)
 * - XCN.22: Assigning Jurisdiction (CWE)
 * - XCN.23: Assigning Agency or Department (CWE)
 */
export const XCN = z
  .object({
    "1": XCN_1,
    "2": XCN_2,
    "3": XCN_3,
    "4": XCN_4,
    "5": XCN_5,
    "6": XCN_6,
    "7": XCN_7,
    "8": XCN_8,
    "9": XCN_9,
    "10": XCN_10,
    "11": XCN_11,
    "12": XCN_12,
    "13": XCN_13,
    "14": XCN_14,
    "15": XCN_15,
    "16": XCN_16,
    "17": XCN_17,
    "18": XCN_18,
    "19": XCN_19,
    "20": XCN_20,
    "21": XCN_21,
    "22": XCN_22,
    "23": XCN_23
  })
  .register(hl7v2Metadata, {
    title: "XCN",
    version: "2.5",
    description: "HL7 v2.5 XCN composite data type"
  });

/**
 * Type definition for XCN
 */
export type XCN = z.infer<typeof XCN>;
