import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/bui';

/**
 * HL7 v2.8 BUI Segment
 * 
 * HL7 v2.8 BUI segment definition
 * Contains field definitions and constraints for the BUI segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * BUI segment schema
 * Defines the structure and validation rules for the BUI segment
 */
export const buiSchema = z.object({
  "1": fields.BUI_1.optional(),
  "2": fields.BUI_2,
  "3": fields.BUI_3,
  "4": fields.BUI_4,
  "5": fields.BUI_5,
  "6": fields.BUI_6,
  "7": fields.BUI_7,
  "8": fields.BUI_8,
  "9": fields.BUI_9,
  "10": fields.BUI_10,
  "11": fields.BUI_11,
  "12": fields.BUI_12
}).register(hl7v2Metadata, {
  title: "BUI",
  version: "2.8",
  description: "HL7 v2.8 BUI segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the BUI schema
 */
export type BUI = z.infer<typeof buiSchema>;

/**
 * Default export for convenience
 */
export default buiSchema;