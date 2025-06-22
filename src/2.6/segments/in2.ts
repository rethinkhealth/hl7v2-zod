import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/in2';

/**
 * HL7 v2.6 IN2 Segment
 * 
 * HL7 v2.6 IN2 segment definition
 * Contains field definitions and constraints for the IN2 segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * IN2 segment schema
 * Defines the structure and validation rules for the IN2 segment
 */
export const in2Schema = z.object({
  "1": z.array(fields.IN2_1).optional(),
  "2": fields.IN2_2.optional(),
  "3": z.array(fields.IN2_3).optional(),
  "4": fields.IN2_4.optional(),
  "5": z.array(fields.IN2_5).optional(),
  "6": fields.IN2_6.optional(),
  "7": z.array(fields.IN2_7).optional(),
  "8": fields.IN2_8.optional(),
  "9": z.array(fields.IN2_9).optional(),
  "10": fields.IN2_10.optional(),
  "11": fields.IN2_11.optional(),
  "12": fields.IN2_12.optional(),
  "13": fields.IN2_13.optional(),
  "14": fields.IN2_14.optional(),
  "15": fields.IN2_15.optional(),
  "16": fields.IN2_16.optional(),
  "17": fields.IN2_17.optional(),
  "18": fields.IN2_18.optional(),
  "19": fields.IN2_19.optional(),
  "20": fields.IN2_20.optional(),
  "21": fields.IN2_21.optional(),
  "22": z.array(fields.IN2_22).optional(),
  "23": fields.IN2_23.optional(),
  "24": z.array(fields.IN2_24).optional(),
  "25": z.array(fields.IN2_25).optional(),
  "26": z.array(fields.IN2_26).optional(),
  "27": fields.IN2_27.optional(),
  "28": z.array(fields.IN2_28).optional(),
  "29": z.array(fields.IN2_29).optional(),
  "30": fields.IN2_30.optional(),
  "31": fields.IN2_31.optional(),
  "32": z.array(fields.IN2_32).optional(),
  "33": z.array(fields.IN2_33).optional(),
  "34": fields.IN2_34.optional(),
  "35": fields.IN2_35.optional(),
  "36": fields.IN2_36.optional(),
  "37": fields.IN2_37.optional(),
  "38": fields.IN2_38.optional(),
  "39": fields.IN2_39.optional(),
  "40": z.array(fields.IN2_40).optional(),
  "41": fields.IN2_41.optional(),
  "42": z.array(fields.IN2_42).optional(),
  "43": z.array(fields.IN2_43).optional(),
  "44": fields.IN2_44.optional(),
  "45": fields.IN2_45.optional(),
  "46": fields.IN2_46.optional(),
  "47": fields.IN2_47.optional(),
  "48": fields.IN2_48.optional(),
  "49": z.array(fields.IN2_49).optional(),
  "50": z.array(fields.IN2_50).optional(),
  "51": fields.IN2_51.optional(),
  "52": z.array(fields.IN2_52).optional(),
  "53": z.array(fields.IN2_53).optional(),
  "54": z.array(fields.IN2_54).optional(),
  "55": fields.IN2_55.optional(),
  "56": z.array(fields.IN2_56).optional(),
  "57": fields.IN2_57.optional(),
  "58": z.array(fields.IN2_58).optional(),
  "59": fields.IN2_59.optional(),
  "60": fields.IN2_60.optional(),
  "61": fields.IN2_61.optional(),
  "62": fields.IN2_62.optional(),
  "63": z.array(fields.IN2_63).optional(),
  "64": z.array(fields.IN2_64).optional(),
  "65": fields.IN2_65.optional(),
  "66": fields.IN2_66.optional(),
  "67": fields.IN2_67.optional(),
  "68": fields.IN2_68.optional(),
  "69": z.array(fields.IN2_69).optional(),
  "70": z.array(fields.IN2_70).optional(),
  "71": z.array(fields.IN2_71).optional(),
  "72": fields.IN2_72.optional()
}).register(hl7v2Metadata, {
  title: "IN2",
  version: "2.6",
  description: "HL7 v2.6 IN2 segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the IN2 schema
 */
export type IN2 = z.infer<typeof in2Schema>;

/**
 * Default export for convenience
 */
export default in2Schema;