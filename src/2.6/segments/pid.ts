import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/pid';

/**
 * HL7 v2.6 PID Segment
 *
 * HL7 v2.6 PID segment definition
 * Contains field definitions and constraints for the PID segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * PID segment schema
 * Defines the structure and validation rules for the PID segment
 */
export const pidSchema = z
  .object({
    '1': fields.PID_1.optional(),
    '2': fields.PID_2.optional(),
    '3': z.array(fields.PID_3),
    '4': z.array(fields.PID_4).optional(),
    '5': z.array(fields.PID_5),
    '6': z.array(fields.PID_6).optional(),
    '7': fields.PID_7.optional(),
    '8': fields.PID_8.optional(),
    '9': z.array(fields.PID_9).optional(),
    '10': z.array(fields.PID_10).optional(),
    '11': z.array(fields.PID_11).optional(),
    '12': fields.PID_12.optional(),
    '13': z.array(fields.PID_13).optional(),
    '14': z.array(fields.PID_14).optional(),
    '15': fields.PID_15.optional(),
    '16': fields.PID_16.optional(),
    '17': fields.PID_17.optional(),
    '18': fields.PID_18.optional(),
    '19': fields.PID_19.optional(),
    '20': fields.PID_20.optional(),
    '21': z.array(fields.PID_21).optional(),
    '22': z.array(fields.PID_22).optional(),
    '23': fields.PID_23.optional(),
    '24': fields.PID_24.optional(),
    '25': fields.PID_25.optional(),
    '26': z.array(fields.PID_26).optional(),
    '27': fields.PID_27.optional(),
    '28': fields.PID_28.optional(),
    '29': fields.PID_29.optional(),
    '30': fields.PID_30.optional(),
    '31': fields.PID_31.optional(),
    '32': z.array(fields.PID_32).optional(),
    '33': fields.PID_33.optional(),
    '34': fields.PID_34.optional(),
    '35': fields.PID_35.optional(),
    '36': fields.PID_36.optional(),
    '37': fields.PID_37.optional(),
    '38': z.array(fields.PID_38).optional(),
    '39': z.array(fields.PID_39).optional(),
  })
  .register(hl7v2Metadata, {
    title: 'PID',
    version: '2.6',
    description: 'HL7 v2.6 PID segment',
    type: 'Segment',
  });

/**
 * TypeScript type inferred from the PID schema
 */
export type PID = z.infer<typeof pidSchema>;

/**
 * Default export for convenience
 */
export default pidSchema;
