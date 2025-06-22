import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/in1';

/**
 * HL7 v2.8 IN1 Segment
 * 
 * HL7 v2.8 IN1 segment definition
 * Contains field definitions and constraints for the IN1 segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * IN1 segment schema
 * Defines the structure and validation rules for the IN1 segment
 */
export const in1Schema = z.object({
  "1": fields.IN1_1,
  "2": fields.IN1_2,
  "3": z.array(fields.IN1_3),
  "4": z.array(fields.IN1_4).optional(),
  "5": z.array(fields.IN1_5).optional(),
  "6": z.array(fields.IN1_6).optional(),
  "7": z.array(fields.IN1_7).optional(),
  "8": fields.IN1_8.optional(),
  "9": z.array(fields.IN1_9).optional(),
  "10": z.array(fields.IN1_10).optional(),
  "11": z.array(fields.IN1_11).optional(),
  "12": fields.IN1_12.optional(),
  "13": fields.IN1_13.optional(),
  "14": fields.IN1_14.optional(),
  "15": fields.IN1_15.optional(),
  "16": z.array(fields.IN1_16).optional(),
  "17": fields.IN1_17.optional(),
  "18": fields.IN1_18.optional(),
  "19": z.array(fields.IN1_19).optional(),
  "20": fields.IN1_20.optional(),
  "21": fields.IN1_21.optional(),
  "22": fields.IN1_22.optional(),
  "23": fields.IN1_23.optional(),
  "24": fields.IN1_24.optional(),
  "25": fields.IN1_25.optional(),
  "26": fields.IN1_26.optional(),
  "27": fields.IN1_27.optional(),
  "28": fields.IN1_28.optional(),
  "29": fields.IN1_29.optional(),
  "30": z.array(fields.IN1_30).optional(),
  "31": fields.IN1_31.optional(),
  "32": fields.IN1_32.optional(),
  "33": fields.IN1_33.optional(),
  "34": fields.IN1_34.optional(),
  "35": fields.IN1_35.optional(),
  "36": fields.IN1_36.optional(),
  "37": fields.IN1_37.optional(),
  "39": fields.IN1_39.optional(),
  "42": fields.IN1_42.optional(),
  "43": fields.IN1_43.optional(),
  "44": z.array(fields.IN1_44).optional(),
  "45": fields.IN1_45.optional(),
  "46": fields.IN1_46.optional(),
  "47": fields.IN1_47.optional(),
  "48": fields.IN1_48.optional(),
  "49": z.array(fields.IN1_49).optional(),
  "50": fields.IN1_50.optional(),
  "51": fields.IN1_51.optional(),
  "52": fields.IN1_52.optional(),
  "53": fields.IN1_53.optional(),
  "54": z.array(fields.IN1_54).optional(),
  "55": fields.IN1_55.optional()
}).register(hl7v2Metadata, {
  title: "IN1",
  version: "2.8",
  description: "HL7 v2.8 IN1 segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the IN1 schema
 */
export type IN1 = z.infer<typeof in1Schema>;

/**
 * Default export for convenience
 */
export default in1Schema;