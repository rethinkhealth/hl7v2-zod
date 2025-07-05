import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as fields from "../fields/rxo";

/**
 * HL7 v2.6 RXO Segment
 *
 * HL7 v2.6 RXO segment definition
 * Contains field definitions and constraints for the RXO segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * RXO segment schema
 * Defines the structure and validation rules for the RXO segment
 */
export const rxoSchema = z
  .object({
    "1": fields.RXO_1.optional(),
    "2": fields.RXO_2.optional(),
    "3": fields.RXO_3.optional(),
    "4": fields.RXO_4.optional(),
    "5": fields.RXO_5.optional(),
    "6": z.array(fields.RXO_6).optional(),
    "7": z.array(fields.RXO_7).optional(),
    "8": fields.RXO_8.optional(),
    "9": fields.RXO_9.optional(),
    "10": fields.RXO_10.optional(),
    "11": fields.RXO_11.optional(),
    "12": fields.RXO_12.optional(),
    "13": fields.RXO_13.optional(),
    "14": z.array(fields.RXO_14).optional(),
    "15": z.array(fields.RXO_15).optional(),
    "16": fields.RXO_16.optional(),
    "17": fields.RXO_17.optional(),
    "18": fields.RXO_18.optional(),
    "19": fields.RXO_19.optional(),
    "20": z.array(fields.RXO_20).optional(),
    "21": fields.RXO_21.optional(),
    "22": fields.RXO_22.optional(),
    "23": fields.RXO_23.optional(),
    "24": z.array(fields.RXO_24).optional(),
    "25": fields.RXO_25.optional(),
    "26": fields.RXO_26.optional(),
    "27": fields.RXO_27.optional(),
    "28": fields.RXO_28.optional(),
    "29": fields.RXO_29.optional(),
    "30": fields.RXO_30.optional(),
    "31": fields.RXO_31.optional(),
    "32": fields.RXO_32.optional(),
    "33": fields.RXO_33.optional(),
    "34": fields.RXO_34.optional(),
    "35": fields.RXO_35.optional()
  })
  .register(hl7v2Metadata, {
    title: "RXO",
    version: "2.6",
    description: "HL7 v2.6 RXO segment",
    type: "Segment"
  });

/**
 * TypeScript type inferred from the RXO schema
 */
export type RXO = z.infer<typeof rxoSchema>;

/**
 * Default export for convenience
 */
export default rxoSchema;
