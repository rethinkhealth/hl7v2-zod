import { z } from "zod/v4";
import hl7v2Metadata from "../registry";

/**
 * HL7 v2.6 Mixed Data Types
 *
 * These are mixed data types used in HL7 v2.6 messages.
 * Mixed types can contain both text content and escape sequences.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * escapeType - HL7 escapeType mixed data type (can contain escape sequences)
 */
export const escapeType = z.string().register(hl7v2Metadata, {
  title: "escapeType",
  version: "2.6",
  description: "HL7 escapeType mixed data type (can contain escape sequences)",
  type: "mixed"
});

/**
 * FT - Formatted Text Data (can contain escape sequences)
 */
export const FT = z.string().register(hl7v2Metadata, {
  title: "FT",
  version: "2.6",
  description: "Formatted Text Data (can contain escape sequences)",
  type: "mixed"
});

/**
 * TX - Text Data (can contain escape sequences)
 */
export const TX = z.string().register(hl7v2Metadata, {
  title: "TX",
  version: "2.6",
  description: "Text Data (can contain escape sequences)",
  type: "mixed"
});

/**
 * Export all mixed types as a single object for convenience
 */
export const MixedTypes = {
  escapeType,
  FT,
  TX
} as const;

/**
 * Type definitions for the mixed types
 */
export type escapeType = z.infer<typeof escapeType>;
export type FT = z.infer<typeof FT>;
export type TX = z.infer<typeof TX>;
