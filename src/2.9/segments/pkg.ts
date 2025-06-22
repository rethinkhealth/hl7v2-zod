import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/pkg';

/**
 * HL7 v2.9 PKG Segment
 * 
 * HL7 v2.9 PKG segment definition
 * Contains field definitions and constraints for the PKG segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * PKG segment schema
 * Defines the structure and validation rules for the PKG segment
 */
export const pkgSchema = z.object({
  "1": fields.PKG_1,
  "2": fields.PKG_2.optional(),
  "3": fields.PKG_3.optional(),
  "4": fields.PKG_4.optional(),
  "5": fields.PKG_5.optional(),
  "6": fields.PKG_6.optional(),
  "7": fields.PKG_7.optional(),
  "8": fields.PKG_8.optional(),
  "9": fields.PKG_9.optional(),
  "10": fields.PKG_10.optional(),
  "11": fields.PKG_11.optional()
}).register(hl7v2Metadata, {
  title: "PKG",
  version: "2.9",
  description: "HL7 v2.9 PKG segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the PKG schema
 */
export type PKG = z.infer<typeof pkgSchema>;

/**
 * Default export for convenience
 */
export default pkgSchema;