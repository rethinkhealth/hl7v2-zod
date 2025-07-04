import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/csr';

/**
 * HL7 v2.5 CSR Segment
 * 
 * HL7 v2.5 CSR segment definition
 * Contains field definitions and constraints for the CSR segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * CSR segment schema
 * Defines the structure and validation rules for the CSR segment
 */
export const csrSchema = z.object({
  "1": fields.CSR_1,
  "2": fields.CSR_2.optional(),
  "3": fields.CSR_3.optional(),
  "4": fields.CSR_4,
  "5": fields.CSR_5.optional(),
  "6": fields.CSR_6,
  "7": z.array(fields.CSR_7).optional(),
  "8": z.array(fields.CSR_8),
  "9": fields.CSR_9.optional(),
  "10": fields.CSR_10.optional(),
  "11": z.array(fields.CSR_11).optional(),
  "12": z.array(fields.CSR_12).optional(),
  "13": z.array(fields.CSR_13).optional(),
  "14": fields.CSR_14.optional(),
  "15": fields.CSR_15.optional(),
  "16": fields.CSR_16.optional()
}).register(hl7v2Metadata, {
  title: "CSR",
  version: "2.5",
  description: "HL7 v2.5 CSR segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the CSR schema
 */
export type CSR = z.infer<typeof csrSchema>;

/**
 * Default export for convenience
 */
export default csrSchema;