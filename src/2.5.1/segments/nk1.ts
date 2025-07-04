import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/nk1';

/**
 * HL7 v2.5 NK1 Segment
 * 
 * HL7 v2.5 NK1 segment definition
 * Contains field definitions and constraints for the NK1 segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * NK1 segment schema
 * Defines the structure and validation rules for the NK1 segment
 */
export const nk1Schema = z.object({
  "1": fields.NK1_1,
  "2": z.array(fields.NK1_2).optional(),
  "3": fields.NK1_3.optional(),
  "4": z.array(fields.NK1_4).optional(),
  "5": z.array(fields.NK1_5).optional(),
  "6": z.array(fields.NK1_6).optional(),
  "7": fields.NK1_7.optional(),
  "8": fields.NK1_8.optional(),
  "9": fields.NK1_9.optional(),
  "10": fields.NK1_10.optional(),
  "11": fields.NK1_11.optional(),
  "12": fields.NK1_12.optional(),
  "13": z.array(fields.NK1_13).optional(),
  "14": fields.NK1_14.optional(),
  "15": fields.NK1_15.optional(),
  "16": fields.NK1_16.optional(),
  "17": z.array(fields.NK1_17).optional(),
  "18": z.array(fields.NK1_18).optional(),
  "19": z.array(fields.NK1_19).optional(),
  "20": fields.NK1_20.optional(),
  "21": fields.NK1_21.optional(),
  "22": fields.NK1_22.optional(),
  "23": fields.NK1_23.optional(),
  "24": fields.NK1_24.optional(),
  "25": fields.NK1_25.optional(),
  "26": z.array(fields.NK1_26).optional(),
  "27": fields.NK1_27.optional(),
  "28": z.array(fields.NK1_28).optional(),
  "29": z.array(fields.NK1_29).optional(),
  "30": z.array(fields.NK1_30).optional(),
  "31": z.array(fields.NK1_31).optional(),
  "32": z.array(fields.NK1_32).optional(),
  "33": z.array(fields.NK1_33).optional(),
  "34": fields.NK1_34.optional(),
  "35": z.array(fields.NK1_35).optional(),
  "36": fields.NK1_36.optional(),
  "37": fields.NK1_37.optional(),
  "38": fields.NK1_38.optional(),
  "39": fields.NK1_39.optional()
}).register(hl7v2Metadata, {
  title: "NK1",
  version: "2.5",
  description: "HL7 v2.5 NK1 segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the NK1 schema
 */
export type NK1 = z.infer<typeof nk1Schema>;

/**
 * Default export for convenience
 */
export default nk1Schema;