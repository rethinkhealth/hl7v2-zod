import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/msh';

/**
 * HL7 v2.9 MSH Segment
 * 
 * HL7 v2.9 MSH segment definition
 * Contains field definitions and constraints for the MSH segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * MSH segment schema
 * Defines the structure and validation rules for the MSH segment
 */
export const mshSchema = z.object({
  "1": fields.MSH_1,
  "2": fields.MSH_2,
  "3": fields.MSH_3.optional(),
  "4": fields.MSH_4.optional(),
  "5": fields.MSH_5.optional(),
  "6": z.array(fields.MSH_6).optional(),
  "7": fields.MSH_7,
  "8": fields.MSH_8.optional(),
  "9": fields.MSH_9,
  "10": fields.MSH_10,
  "11": fields.MSH_11,
  "12": fields.MSH_12,
  "13": fields.MSH_13.optional(),
  "14": fields.MSH_14.optional(),
  "15": fields.MSH_15.optional(),
  "16": fields.MSH_16.optional(),
  "17": fields.MSH_17.optional(),
  "18": z.array(fields.MSH_18).optional(),
  "19": fields.MSH_19.optional(),
  "20": fields.MSH_20.optional(),
  "21": z.array(fields.MSH_21).optional(),
  "22": fields.MSH_22.optional(),
  "23": fields.MSH_23.optional(),
  "24": fields.MSH_24.optional(),
  "25": fields.MSH_25.optional(),
  "26": fields.MSH_26.optional(),
  "27": z.array(fields.MSH_27).optional(),
  "28": z.array(fields.MSH_28).optional()
}).register(hl7v2Metadata, {
  title: "MSH",
  version: "2.9",
  description: "HL7 v2.9 MSH segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the MSH schema
 */
export type MSH = z.infer<typeof mshSchema>;

/**
 * Default export for convenience
 */
export default mshSchema;