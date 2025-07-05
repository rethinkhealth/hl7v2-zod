import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import { SimpleTypes } from "./simpletypes";

/**
 * HL7 v2.5 XTN Composite Data Type
 *
 * HL7 v2.5 XTN composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * XTN.1 - Telephone Number
 */
export const XTN_1 = SimpleTypes.ST.max(199).optional().register(hl7v2Metadata, {
  title: "XTN.1",
  version: "2.5",
  description: "Telephone Number",
  type: "DataType",
  length: 199,
  optionality: "O"
});

/**
 * XTN.2 - Telecommunication Use Code
 */
export const XTN_2 = SimpleTypes.ID.max(3).optional().register(hl7v2Metadata, {
  title: "XTN.2",
  version: "2.5",
  description: "Telecommunication Use Code",
  type: "DataType",
  length: 3,
  optionality: "O"
});

/**
 * XTN.3 - Telecommunication Equipment Type
 */
export const XTN_3 = SimpleTypes.ID.max(8).optional().register(hl7v2Metadata, {
  title: "XTN.3",
  version: "2.5",
  description: "Telecommunication Equipment Type",
  type: "DataType",
  length: 8,
  optionality: "O"
});

/**
 * XTN.4 - Email Address
 */
export const XTN_4 = SimpleTypes.ST.max(199).optional().register(hl7v2Metadata, {
  title: "XTN.4",
  version: "2.5",
  description: "Email Address",
  type: "DataType",
  length: 199,
  optionality: "O"
});

/**
 * XTN.5 - Country Code
 */
export const XTN_5 = SimpleTypes.NM.max(3).optional().register(hl7v2Metadata, {
  title: "XTN.5",
  version: "2.5",
  description: "Country Code",
  type: "DataType",
  length: 3,
  optionality: "O"
});

/**
 * XTN.6 - Area/City Code
 */
export const XTN_6 = SimpleTypes.NM.max(5).optional().register(hl7v2Metadata, {
  title: "XTN.6",
  version: "2.5",
  description: "Area/City Code",
  type: "DataType",
  length: 5,
  optionality: "O"
});

/**
 * XTN.7 - Local Number
 */
export const XTN_7 = SimpleTypes.NM.max(9).optional().register(hl7v2Metadata, {
  title: "XTN.7",
  version: "2.5",
  description: "Local Number",
  type: "DataType",
  length: 9,
  optionality: "O"
});

/**
 * XTN.8 - Extension
 */
export const XTN_8 = SimpleTypes.NM.max(5).optional().register(hl7v2Metadata, {
  title: "XTN.8",
  version: "2.5",
  description: "Extension",
  type: "DataType",
  length: 5,
  optionality: "O"
});

/**
 * XTN.9 - Any Text
 */
export const XTN_9 = SimpleTypes.ST.max(199).optional().register(hl7v2Metadata, {
  title: "XTN.9",
  version: "2.5",
  description: "Any Text",
  type: "DataType",
  length: 199,
  optionality: "O"
});

/**
 * XTN.10 - Extension Prefix
 */
export const XTN_10 = SimpleTypes.ST.max(4).optional().register(hl7v2Metadata, {
  title: "XTN.10",
  version: "2.5",
  description: "Extension Prefix",
  type: "DataType",
  length: 4,
  optionality: "O"
});

/**
 * XTN.11 - Speed Dial Code
 */
export const XTN_11 = SimpleTypes.ST.max(6).optional().register(hl7v2Metadata, {
  title: "XTN.11",
  version: "2.5",
  description: "Speed Dial Code",
  type: "DataType",
  length: 6,
  optionality: "O"
});

/**
 * XTN.12 - Unformatted Telephone number
 */
export const XTN_12 = SimpleTypes.ST.max(199).optional().register(hl7v2Metadata, {
  title: "XTN.12",
  version: "2.5",
  description: "Unformatted Telephone number",
  type: "DataType",
  length: 199,
  optionality: "O"
});

/**
 * XTN - HL7 v2.5 XTN composite data type
 *
 * Components:
 * - XTN.1: Telephone Number (ST)
 * - XTN.2: Telecommunication Use Code (ID)
 * - XTN.3: Telecommunication Equipment Type (ID)
 * - XTN.4: Email Address (ST)
 * - XTN.5: Country Code (NM)
 * - XTN.6: Area/City Code (NM)
 * - XTN.7: Local Number (NM)
 * - XTN.8: Extension (NM)
 * - XTN.9: Any Text (ST)
 * - XTN.10: Extension Prefix (ST)
 * - XTN.11: Speed Dial Code (ST)
 * - XTN.12: Unformatted Telephone number (ST)
 */
export const XTN = z
  .object({
    "1": XTN_1,
    "2": XTN_2,
    "3": XTN_3,
    "4": XTN_4,
    "5": XTN_5,
    "6": XTN_6,
    "7": XTN_7,
    "8": XTN_8,
    "9": XTN_9,
    "10": XTN_10,
    "11": XTN_11,
    "12": XTN_12
  })
  .register(hl7v2Metadata, {
    title: "XTN",
    version: "2.5",
    description: "HL7 v2.5 XTN composite data type"
  });

/**
 * Type definition for XTN
 */
export type XTN = z.infer<typeof XTN>;
