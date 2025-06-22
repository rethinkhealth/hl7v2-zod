import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/pv2';

/**
 * HL7 v2.6 PV2 Segment
 *
 * HL7 v2.6 PV2 segment definition
 * Contains field definitions and constraints for the PV2 segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * PV2 segment schema
 * Defines the structure and validation rules for the PV2 segment
 */
export const pv2Schema = z
  .object({
    '1': fields.PV2_1.optional(),
    '2': fields.PV2_2.optional(),
    '3': fields.PV2_3.optional(),
    '4': fields.PV2_4.optional(),
    '5': z.array(fields.PV2_5).optional(),
    '6': fields.PV2_6.optional(),
    '7': z.array(fields.PV2_7).optional(),
    '8': fields.PV2_8.optional(),
    '9': fields.PV2_9.optional(),
    '10': fields.PV2_10.optional(),
    '11': fields.PV2_11.optional(),
    '12': fields.PV2_12.optional(),
    '13': z.array(fields.PV2_13).optional(),
    '14': fields.PV2_14.optional(),
    '15': fields.PV2_15.optional(),
    '16': fields.PV2_16.optional(),
    '17': fields.PV2_17.optional(),
    '18': fields.PV2_18.optional(),
    '19': fields.PV2_19.optional(),
    '20': fields.PV2_20.optional(),
    '21': fields.PV2_21.optional(),
    '22': fields.PV2_22.optional(),
    '23': z.array(fields.PV2_23).optional(),
    '24': fields.PV2_24.optional(),
    '25': fields.PV2_25.optional(),
    '26': fields.PV2_26.optional(),
    '27': fields.PV2_27.optional(),
    '28': fields.PV2_28.optional(),
    '29': fields.PV2_29.optional(),
    '30': fields.PV2_30.optional(),
    '31': fields.PV2_31.optional(),
    '32': fields.PV2_32.optional(),
    '33': fields.PV2_33.optional(),
    '34': fields.PV2_34.optional(),
    '35': fields.PV2_35.optional(),
    '36': fields.PV2_36.optional(),
    '37': fields.PV2_37.optional(),
    '38': fields.PV2_38.optional(),
    '39': z.array(fields.PV2_39).optional(),
    '40': fields.PV2_40.optional(),
    '41': z.array(fields.PV2_41).optional(),
    '42': fields.PV2_42.optional(),
    '43': fields.PV2_43.optional(),
    '44': fields.PV2_44.optional(),
    '45': z.array(fields.PV2_45).optional(),
    '46': fields.PV2_46.optional(),
    '47': fields.PV2_47.optional(),
    '48': fields.PV2_48.optional(),
    '49': z.array(fields.PV2_49).optional(),
    '50': fields.PV2_50.optional(),
  })
  .register(hl7v2Metadata, {
    title: 'PV2',
    version: '2.6',
    description: 'HL7 v2.6 PV2 segment',
    type: 'Segment',
  });

/**
 * TypeScript type inferred from the PV2 schema
 */
export type PV2 = z.infer<typeof pv2Schema>;

/**
 * Default export for convenience
 */
export default pv2Schema;
