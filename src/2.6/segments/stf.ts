import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/stf';

/**
 * HL7 v2.6 STF Segment
 *
 * HL7 v2.6 STF segment definition
 * Contains field definitions and constraints for the STF segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * STF segment schema
 * Defines the structure and validation rules for the STF segment
 */
export const stfSchema = z
  .object({
    '1': fields.STF_1.optional(),
    '2': z.array(fields.STF_2).optional(),
    '3': z.array(fields.STF_3).optional(),
    '4': z.array(fields.STF_4).optional(),
    '5': fields.STF_5.optional(),
    '6': fields.STF_6.optional(),
    '7': fields.STF_7.optional(),
    '8': z.array(fields.STF_8).optional(),
    '9': z.array(fields.STF_9).optional(),
    '10': z.array(fields.STF_10).optional(),
    '11': z.array(fields.STF_11).optional(),
    '12': z.array(fields.STF_12).optional(),
    '13': z.array(fields.STF_13).optional(),
    '14': z.array(fields.STF_14).optional(),
    '15': z.array(fields.STF_15).optional(),
    '16': fields.STF_16.optional(),
    '17': fields.STF_17.optional(),
    '18': fields.STF_18.optional(),
    '19': fields.STF_19.optional(),
    '20': fields.STF_20.optional(),
    '21': fields.STF_21.optional(),
    '22': fields.STF_22.optional(),
    '23': fields.STF_23.optional(),
    '24': fields.STF_24.optional(),
    '25': fields.STF_25.optional(),
    '26': fields.STF_26.optional(),
    '27': fields.STF_27.optional(),
    '28': fields.STF_28.optional(),
    '29': fields.STF_29.optional(),
    '30': z.array(fields.STF_30).optional(),
    '31': fields.STF_31.optional(),
    '32': fields.STF_32.optional(),
    '33': fields.STF_33.optional(),
    '34': fields.STF_34.optional(),
    '35': fields.STF_35.optional(),
    '36': z.array(fields.STF_36).optional(),
    '37': fields.STF_37.optional(),
    '38': fields.STF_38.optional(),
    '39': z.array(fields.STF_39).optional(),
  })
  .register(hl7v2Metadata, {
    title: 'STF',
    version: '2.6',
    description: 'HL7 v2.6 STF segment',
    type: 'Segment',
  });

/**
 * TypeScript type inferred from the STF schema
 */
export type STF = z.infer<typeof stfSchema>;

/**
 * Default export for convenience
 */
export default stfSchema;
