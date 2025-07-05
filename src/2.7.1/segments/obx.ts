import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as fields from "../fields/obx";

/**
 * HL7 v2.7 OBX Segment
 *
 * HL7 v2.7 OBX segment definition
 * Contains field definitions and constraints for the OBX segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * OBX segment schema
 * Defines the structure and validation rules for the OBX segment
 */
export const obxSchema = z
  .object({
    "1": fields.OBX_1.optional(),
    "2": fields.OBX_2,
    "3": fields.OBX_3,
    "4": fields.OBX_4,
    "5": z.array(fields.OBX_5).optional(),
    "6": fields.OBX_6.optional(),
    "7": fields.OBX_7.optional(),
    "8": z.array(fields.OBX_8).optional(),
    "9": fields.OBX_9.optional(),
    "10": z.array(fields.OBX_10).optional(),
    "11": fields.OBX_11,
    "12": fields.OBX_12.optional(),
    "13": fields.OBX_13.optional(),
    "14": fields.OBX_14.optional(),
    "15": fields.OBX_15.optional(),
    "16": z.array(fields.OBX_16).optional(),
    "17": z.array(fields.OBX_17).optional(),
    "18": z.array(fields.OBX_18).optional(),
    "19": fields.OBX_19.optional(),
    "20": z.array(fields.OBX_20).optional(),
    "21": fields.OBX_21.optional(),
    "22": fields.OBX_22.optional(),
    "23": fields.OBX_23.optional(),
    "24": fields.OBX_24.optional(),
    "25": fields.OBX_25.optional(),
    "26": fields.OBX_26.optional()
  })
  .register(hl7v2Metadata, {
    title: "OBX",
    version: "2.7",
    description: "HL7 v2.7 OBX segment",
    type: "Segment"
  });

/**
 * TypeScript type inferred from the OBX schema
 */
export type OBX = z.infer<typeof obxSchema>;

/**
 * Default export for convenience
 */
export default obxSchema;
