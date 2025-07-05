import { z } from "zod/v4";
import hl7v2Metadata from "../registry";

/**
 * HL7 v2.5 Simple Data Types
 *
 * These are the basic data types used in HL7 v2.5 messages.
 * All simple types are essentially string-based with specific semantic meanings.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * DT - HL7 Date format (YYYY[MM[DD]])
 */
export const DT = z.string().max(8).register(hl7v2Metadata, {
  title: "DT",
  version: "2.5",
  description: "HL7 Date format (YYYY[MM[DD]])",
  length: 8
});

/**
 * DTM - HL7 Date/Time format (YYYY[MM[DD[HH[MM[SS[.S[S[S[S]]]]]]]][+/-ZZZZ])
 */
export const DTM = z.string().max(24).register(hl7v2Metadata, {
  title: "DTM",
  version: "2.5",
  description: "HL7 Date/Time format (YYYY[MM[DD[HH[MM[SS[.S[S[S[S]]]]]]]][+/-ZZZZ])",
  length: 24
});

/**
 * GTS - General Timing Specification
 */
export const GTS = z.string().register(hl7v2Metadata, {
  title: "GTS",
  version: "2.5",
  description: "General Timing Specification",
  length: undefined
});

/**
 * ID - Coded Value for HL7 Defined Tables
 */
export const ID = z.string().register(hl7v2Metadata, {
  title: "ID",
  version: "2.5",
  description: "Coded Value for HL7 Defined Tables",
  length: undefined
});

/**
 * IS - Coded Value for User-Defined Tables
 */
export const IS = z.string().register(hl7v2Metadata, {
  title: "IS",
  version: "2.5",
  description: "Coded Value for User-Defined Tables",
  length: undefined
});

/**
 * NM - Numeric value as string
 */
export const NM = z.string().register(hl7v2Metadata, {
  title: "NM",
  version: "2.5",
  description: "Numeric value as string",
  length: undefined
});

/**
 * SI - Sequence ID
 */
export const SI = z.string().register(hl7v2Metadata, {
  title: "SI",
  version: "2.5",
  description: "Sequence ID",
  length: undefined
});

/**
 * ST - String Data
 */
export const ST = z.string().register(hl7v2Metadata, {
  title: "ST",
  version: "2.5",
  description: "String Data",
  length: undefined
});

/**
 * TM - HL7 Time format (HH[MM[SS[.S[S[S[S]]]]]][+/-ZZZZ])
 */
export const TM = z.string().max(16).register(hl7v2Metadata, {
  title: "TM",
  version: "2.5",
  description: "HL7 Time format (HH[MM[SS[.S[S[S[S]]]]]][+/-ZZZZ])",
  length: 16
});

/**
 * VARIES - Variable data type (can be any type)
 */
export const VARIES = z.any().register(hl7v2Metadata, {
  title: "VARIES",
  version: "2.5",
  description: "Variable data type (can be any type)",
  length: undefined
});

/**
 * Export all simple types as a single object for convenience
 */
export const SimpleTypes = {
  DT,
  DTM,
  GTS,
  ID,
  IS,
  NM,
  SI,
  ST,
  TM,
  VARIES
} as const;

/**
 * Type definitions for the simple types
 */
export type DT = z.infer<typeof DT>;
export type DTM = z.infer<typeof DTM>;
export type GTS = z.infer<typeof GTS>;
export type ID = z.infer<typeof ID>;
export type IS = z.infer<typeof IS>;
export type NM = z.infer<typeof NM>;
export type SI = z.infer<typeof SI>;
export type ST = z.infer<typeof ST>;
export type TM = z.infer<typeof TM>;
export type VARIES = z.infer<typeof VARIES>;
