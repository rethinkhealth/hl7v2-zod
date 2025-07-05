import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as fields from "../fields/rxd";

/**
 * HL7 v2.8 RXD Segment
 *
 * HL7 v2.8 RXD segment definition
 * Contains field definitions and constraints for the RXD segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * RXD segment schema
 * Defines the structure and validation rules for the RXD segment
 */
export const rxdSchema = z
  .object({
    "1": fields.RXD_1,
    "2": fields.RXD_2,
    "3": fields.RXD_3,
    "4": fields.RXD_4,
    "5": fields.RXD_5.optional(),
    "6": fields.RXD_6.optional(),
    "7": fields.RXD_7,
    "8": fields.RXD_8.optional(),
    "9": z.array(fields.RXD_9).optional(),
    "10": z.array(fields.RXD_10).optional(),
    "11": fields.RXD_11.optional(),
    "12": fields.RXD_12.optional(),
    "14": fields.RXD_14.optional(),
    "15": z.array(fields.RXD_15).optional(),
    "16": fields.RXD_16.optional(),
    "17": fields.RXD_17.optional(),
    "18": z.array(fields.RXD_18).optional(),
    "19": z.array(fields.RXD_19).optional(),
    "20": z.array(fields.RXD_20).optional(),
    "21": z.array(fields.RXD_21).optional(),
    "22": fields.RXD_22.optional(),
    "23": fields.RXD_23.optional(),
    "24": fields.RXD_24.optional(),
    "25": z.array(fields.RXD_25).optional(),
    "26": fields.RXD_26.optional(),
    "27": fields.RXD_27.optional(),
    "28": fields.RXD_28.optional(),
    "29": fields.RXD_29.optional(),
    "30": fields.RXD_30.optional(),
    "31": fields.RXD_31.optional(),
    "32": fields.RXD_32.optional(),
    "33": fields.RXD_33.optional(),
    "34": z.array(fields.RXD_34).optional(),
    "35": z.array(fields.RXD_35).optional()
  })
  .register(hl7v2Metadata, {
    title: "RXD",
    version: "2.8",
    description: "HL7 v2.8 RXD segment",
    type: "Segment"
  });

/**
 * TypeScript type inferred from the RXD schema
 */
export type RXD = z.infer<typeof rxdSchema>;

/**
 * Default export for convenience
 */
export default rxdSchema;
