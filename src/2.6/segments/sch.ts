import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/sch';

/**
 * HL7 v2.6 SCH Segment
 * 
 * HL7 v2.6 SCH segment definition
 * Contains field definitions and constraints for the SCH segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * SCH segment schema
 * Defines the structure and validation rules for the SCH segment
 */
export const schSchema = z.object({
  "1": fields.SCH_1.optional(),
  "2": fields.SCH_2.optional(),
  "3": fields.SCH_3.optional(),
  "4": fields.SCH_4.optional(),
  "5": fields.SCH_5.optional(),
  "6": fields.SCH_6,
  "7": fields.SCH_7.optional(),
  "8": fields.SCH_8.optional(),
  "9": fields.SCH_9.optional(),
  "10": fields.SCH_10.optional(),
  "11": z.array(fields.SCH_11).optional(),
  "12": z.array(fields.SCH_12).optional(),
  "13": fields.SCH_13.optional(),
  "14": z.array(fields.SCH_14).optional(),
  "15": fields.SCH_15.optional(),
  "16": z.array(fields.SCH_16),
  "17": fields.SCH_17.optional(),
  "18": z.array(fields.SCH_18).optional(),
  "19": fields.SCH_19.optional(),
  "20": z.array(fields.SCH_20),
  "21": z.array(fields.SCH_21).optional(),
  "22": fields.SCH_22.optional(),
  "23": fields.SCH_23.optional(),
  "24": fields.SCH_24.optional(),
  "25": fields.SCH_25.optional(),
  "26": z.array(fields.SCH_26).optional(),
  "27": z.array(fields.SCH_27).optional()
}).register(hl7v2Metadata, {
  title: "SCH",
  version: "2.6",
  description: "HL7 v2.6 SCH segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the SCH schema
 */
export type SCH = z.infer<typeof schSchema>;

/**
 * Default export for convenience
 */
export default schSchema;