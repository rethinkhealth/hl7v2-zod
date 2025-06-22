import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/pv1';

/**
 * HL7 v2.9 PV1 Segment
 * 
 * HL7 v2.9 PV1 segment definition
 * Contains field definitions and constraints for the PV1 segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * PV1 segment schema
 * Defines the structure and validation rules for the PV1 segment
 */
export const pv1Schema = z.object({
  "1": fields.PV1_1.optional(),
  "2": fields.PV1_2,
  "3": fields.PV1_3.optional(),
  "4": fields.PV1_4.optional(),
  "5": fields.PV1_5.optional(),
  "6": fields.PV1_6.optional(),
  "7": z.array(fields.PV1_7).optional(),
  "8": z.array(fields.PV1_8).optional(),
  "9": z.array(fields.PV1_9).optional(),
  "10": fields.PV1_10.optional(),
  "11": fields.PV1_11.optional(),
  "12": fields.PV1_12.optional(),
  "13": fields.PV1_13.optional(),
  "14": fields.PV1_14.optional(),
  "15": z.array(fields.PV1_15).optional(),
  "16": fields.PV1_16.optional(),
  "17": z.array(fields.PV1_17).optional(),
  "18": fields.PV1_18.optional(),
  "19": fields.PV1_19.optional(),
  "20": z.array(fields.PV1_20).optional(),
  "21": fields.PV1_21.optional(),
  "22": fields.PV1_22.optional(),
  "23": fields.PV1_23.optional(),
  "24": z.array(fields.PV1_24).optional(),
  "25": z.array(fields.PV1_25).optional(),
  "26": z.array(fields.PV1_26).optional(),
  "27": z.array(fields.PV1_27).optional(),
  "28": fields.PV1_28.optional(),
  "29": fields.PV1_29.optional(),
  "30": fields.PV1_30.optional(),
  "31": fields.PV1_31.optional(),
  "32": fields.PV1_32.optional(),
  "33": fields.PV1_33.optional(),
  "34": fields.PV1_34.optional(),
  "35": fields.PV1_35.optional(),
  "36": fields.PV1_36.optional(),
  "37": fields.PV1_37.optional(),
  "38": fields.PV1_38.optional(),
  "39": fields.PV1_39.optional(),
  "41": fields.PV1_41.optional(),
  "42": fields.PV1_42.optional(),
  "43": fields.PV1_43.optional(),
  "44": fields.PV1_44.optional(),
  "45": fields.PV1_45.optional(),
  "46": fields.PV1_46.optional(),
  "47": fields.PV1_47.optional(),
  "48": fields.PV1_48.optional(),
  "49": fields.PV1_49.optional(),
  "50": z.array(fields.PV1_50).optional(),
  "51": fields.PV1_51.optional(),
  "53": fields.PV1_53.optional(),
  "54": fields.PV1_54.optional()
}).register(hl7v2Metadata, {
  title: "PV1",
  version: "2.9",
  description: "HL7 v2.9 PV1 segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the PV1 schema
 */
export type PV1 = z.infer<typeof pv1Schema>;

/**
 * Default export for convenience
 */
export default pv1Schema;