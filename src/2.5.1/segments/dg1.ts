import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/dg1';

/**
 * HL7 v2.5 DG1 Segment
 * 
 * HL7 v2.5 DG1 segment definition
 * Contains field definitions and constraints for the DG1 segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * DG1 segment schema
 * Defines the structure and validation rules for the DG1 segment
 */
export const dg1Schema = z.object({
  "1": fields.DG1_1,
  "2": fields.DG1_2.optional(),
  "3": fields.DG1_3.optional(),
  "4": fields.DG1_4.optional(),
  "5": fields.DG1_5.optional(),
  "6": fields.DG1_6,
  "7": fields.DG1_7.optional(),
  "8": fields.DG1_8.optional(),
  "9": fields.DG1_9.optional(),
  "10": fields.DG1_10.optional(),
  "11": fields.DG1_11.optional(),
  "12": fields.DG1_12.optional(),
  "13": fields.DG1_13.optional(),
  "14": fields.DG1_14.optional(),
  "15": fields.DG1_15.optional(),
  "16": z.array(fields.DG1_16).optional(),
  "17": fields.DG1_17.optional(),
  "18": fields.DG1_18.optional(),
  "19": fields.DG1_19.optional(),
  "20": fields.DG1_20.optional(),
  "21": fields.DG1_21.optional()
}).register(hl7v2Metadata, {
  title: "DG1",
  version: "2.5",
  description: "HL7 v2.5 DG1 segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the DG1 schema
 */
export type DG1 = z.infer<typeof dg1Schema>;

/**
 * Default export for convenience
 */
export default dg1Schema;