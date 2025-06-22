import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/itm';

/**
 * HL7 v2.9 ITM Segment
 * 
 * HL7 v2.9 ITM segment definition
 * Contains field definitions and constraints for the ITM segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ITM segment schema
 * Defines the structure and validation rules for the ITM segment
 */
export const itmSchema = z.object({
  "1": fields.ITM_1,
  "2": fields.ITM_2.optional(),
  "3": fields.ITM_3.optional(),
  "4": fields.ITM_4.optional(),
  "5": fields.ITM_5.optional(),
  "6": fields.ITM_6.optional(),
  "7": fields.ITM_7.optional(),
  "8": fields.ITM_8.optional(),
  "9": fields.ITM_9.optional(),
  "10": fields.ITM_10.optional(),
  "11": fields.ITM_11.optional(),
  "12": fields.ITM_12.optional(),
  "13": fields.ITM_13.optional(),
  "14": fields.ITM_14.optional(),
  "15": fields.ITM_15.optional(),
  "16": z.array(fields.ITM_16).optional(),
  "17": fields.ITM_17.optional(),
  "18": z.array(fields.ITM_18).optional(),
  "19": fields.ITM_19.optional(),
  "20": fields.ITM_20.optional(),
  "21": fields.ITM_21.optional(),
  "22": fields.ITM_22.optional(),
  "23": fields.ITM_23.optional(),
  "24": fields.ITM_24.optional(),
  "25": fields.ITM_25.optional(),
  "26": fields.ITM_26.optional(),
  "27": fields.ITM_27.optional(),
  "28": z.array(fields.ITM_28).optional(),
  "29": fields.ITM_29.optional(),
  "30": fields.ITM_30.optional(),
  "31": fields.ITM_31.optional(),
  "32": fields.ITM_32.optional(),
  "33": fields.ITM_33.optional(),
  "34": fields.ITM_34.optional(),
  "35": fields.ITM_35.optional(),
  "36": fields.ITM_36.optional(),
  "37": fields.ITM_37.optional(),
  "38": fields.ITM_38.optional()
}).register(hl7v2Metadata, {
  title: "ITM",
  version: "2.9",
  description: "HL7 v2.9 ITM segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the ITM schema
 */
export type ITM = z.infer<typeof itmSchema>;

/**
 * Default export for convenience
 */
export default itmSchema;