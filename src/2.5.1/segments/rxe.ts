import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/rxe';

/**
 * HL7 v2.5 RXE Segment
 * 
 * HL7 v2.5 RXE segment definition
 * Contains field definitions and constraints for the RXE segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * RXE segment schema
 * Defines the structure and validation rules for the RXE segment
 */
export const rxeSchema = z.object({
  "1": fields.RXE_1.optional(),
  "2": fields.RXE_2,
  "3": fields.RXE_3,
  "4": fields.RXE_4.optional(),
  "5": fields.RXE_5,
  "6": fields.RXE_6.optional(),
  "7": z.array(fields.RXE_7).optional(),
  "8": fields.RXE_8.optional(),
  "9": fields.RXE_9.optional(),
  "10": fields.RXE_10.optional(),
  "11": fields.RXE_11.optional(),
  "12": fields.RXE_12.optional(),
  "13": z.array(fields.RXE_13).optional(),
  "14": z.array(fields.RXE_14).optional(),
  "15": fields.RXE_15.optional(),
  "16": fields.RXE_16.optional(),
  "17": fields.RXE_17.optional(),
  "18": fields.RXE_18.optional(),
  "19": fields.RXE_19.optional(),
  "20": fields.RXE_20.optional(),
  "21": z.array(fields.RXE_21).optional(),
  "22": fields.RXE_22.optional(),
  "23": fields.RXE_23.optional(),
  "24": fields.RXE_24.optional(),
  "25": fields.RXE_25.optional(),
  "26": fields.RXE_26.optional(),
  "27": z.array(fields.RXE_27).optional(),
  "28": fields.RXE_28.optional(),
  "29": fields.RXE_29.optional(),
  "30": fields.RXE_30.optional(),
  "31": z.array(fields.RXE_31).optional(),
  "32": fields.RXE_32.optional(),
  "33": fields.RXE_33.optional(),
  "34": fields.RXE_34.optional(),
  "35": fields.RXE_35.optional(),
  "36": fields.RXE_36.optional(),
  "37": z.array(fields.RXE_37).optional(),
  "38": fields.RXE_38.optional(),
  "39": fields.RXE_39.optional(),
  "40": fields.RXE_40.optional(),
  "41": fields.RXE_41.optional(),
  "42": fields.RXE_42.optional(),
  "43": fields.RXE_43.optional(),
  "44": fields.RXE_44.optional()
}).register(hl7v2Metadata, {
  title: "RXE",
  version: "2.5",
  description: "HL7 v2.5 RXE segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the RXE schema
 */
export type RXE = z.infer<typeof rxeSchema>;

/**
 * Default export for convenience
 */
export default rxeSchema;