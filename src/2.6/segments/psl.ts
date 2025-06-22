import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/psl';

/**
 * HL7 v2.6 PSL Segment
 *
 * HL7 v2.6 PSL segment definition
 * Contains field definitions and constraints for the PSL segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * PSL segment schema
 * Defines the structure and validation rules for the PSL segment
 */
export const pslSchema = z
  .object({
    '1': fields.PSL_1,
    '2': fields.PSL_2.optional(),
    '3': fields.PSL_3,
    '4': fields.PSL_4.optional(),
    '5': fields.PSL_5.optional(),
    '6': fields.PSL_6,
    '7': fields.PSL_7,
    '8': z.array(fields.PSL_8).optional(),
    '9': fields.PSL_9.optional(),
    '10': fields.PSL_10.optional(),
    '11': fields.PSL_11.optional(),
    '12': fields.PSL_12.optional(),
    '13': fields.PSL_13.optional(),
    '14': fields.PSL_14.optional(),
    '15': fields.PSL_15.optional(),
    '16': fields.PSL_16.optional(),
    '17': z.array(fields.PSL_17).optional(),
    '18': z.array(fields.PSL_18).optional(),
    '19': z.array(fields.PSL_19).optional(),
    '20': z.array(fields.PSL_20).optional(),
    '21': fields.PSL_21,
    '22': fields.PSL_22.optional(),
    '23': fields.PSL_23.optional(),
    '24': fields.PSL_24.optional(),
    '25': fields.PSL_25.optional(),
    '26': fields.PSL_26.optional(),
    '27': fields.PSL_27.optional(),
    '28': fields.PSL_28.optional(),
    '29': fields.PSL_29.optional(),
    '30': fields.PSL_30.optional(),
    '31': fields.PSL_31.optional(),
    '32': fields.PSL_32.optional(),
    '33': fields.PSL_33.optional(),
    '34': fields.PSL_34.optional(),
    '35': fields.PSL_35.optional(),
    '36': fields.PSL_36.optional(),
    '37': fields.PSL_37.optional(),
    '38': fields.PSL_38.optional(),
    '39': fields.PSL_39.optional(),
    '40': fields.PSL_40.optional(),
    '41': fields.PSL_41.optional(),
    '42': fields.PSL_42.optional(),
    '43': fields.PSL_43.optional(),
    '44': fields.PSL_44.optional(),
    '45': fields.PSL_45.optional(),
    '46': fields.PSL_46.optional(),
    '47': fields.PSL_47.optional(),
    '48': fields.PSL_48.optional(),
  })
  .register(hl7v2Metadata, {
    title: 'PSL',
    version: '2.6',
    description: 'HL7 v2.6 PSL segment',
    type: 'Segment',
  });

/**
 * TypeScript type inferred from the PSL schema
 */
export type PSL = z.infer<typeof pslSchema>;

/**
 * Default export for convenience
 */
export default pslSchema;
