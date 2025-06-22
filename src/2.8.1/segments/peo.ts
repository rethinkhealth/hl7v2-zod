import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/peo';

/**
 * HL7 v2.8 PEO Segment
 * 
 * HL7 v2.8 PEO segment definition
 * Contains field definitions and constraints for the PEO segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * PEO segment schema
 * Defines the structure and validation rules for the PEO segment
 */
export const peoSchema = z.object({
  "1": z.array(fields.PEO_1).optional(),
  "2": z.array(fields.PEO_2).optional(),
  "3": fields.PEO_3,
  "4": fields.PEO_4.optional(),
  "5": fields.PEO_5.optional(),
  "6": fields.PEO_6.optional(),
  "7": z.array(fields.PEO_7).optional(),
  "8": z.array(fields.PEO_8).optional(),
  "9": fields.PEO_9.optional(),
  "10": fields.PEO_10.optional(),
  "11": z.array(fields.PEO_11).optional(),
  "12": fields.PEO_12.optional(),
  "13": z.array(fields.PEO_13).optional(),
  "14": z.array(fields.PEO_14).optional(),
  "15": z.array(fields.PEO_15).optional(),
  "16": z.array(fields.PEO_16).optional(),
  "17": z.array(fields.PEO_17).optional(),
  "18": z.array(fields.PEO_18).optional(),
  "19": z.array(fields.PEO_19).optional(),
  "20": z.array(fields.PEO_20).optional(),
  "21": z.array(fields.PEO_21).optional(),
  "22": fields.PEO_22.optional(),
  "23": fields.PEO_23.optional(),
  "24": fields.PEO_24.optional(),
  "25": fields.PEO_25.optional()
}).register(hl7v2Metadata, {
  title: "PEO",
  version: "2.8",
  description: "HL7 v2.8 PEO segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the PEO schema
 */
export type PEO = z.infer<typeof peoSchema>;

/**
 * Default export for convenience
 */
export default peoSchema;