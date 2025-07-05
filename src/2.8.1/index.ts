/**
 * HL7 v2.2.8 Root Index
 *
 * This file provides organized access to HL7 v2.2.8 schemas through subdirectories.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

// Data Types - Access via subdirectory
export * as datatypes from "./datatypes";

// Fields - Access via subdirectory
export * as fields from "./fields";

// Segments - Access via subdirectory
export * as segments from "./segments";

// Messages - Access via subdirectory
export * from "./messages";

// Registry (if metadata is enabled)
export { default as hl7v2Metadata } from "./registry";
