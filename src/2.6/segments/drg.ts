import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/drg';

/**
 * HL7 v2.6 DRG Segment
 *
 * HL7 v2.6 DRG segment definition
 * Contains field definitions and constraints for the DRG segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * DRG segment schema
 * Defines the structure and validation rules for the DRG segment
 */
export const drgSchema = z
  .object({
    '1': fields.DRG_1.optional(),
    '2': fields.DRG_2.optional(),
    '3': fields.DRG_3.optional(),
    '4': fields.DRG_4.optional(),
    '5': fields.DRG_5.optional(),
    '6': fields.DRG_6.optional(),
    '7': fields.DRG_7.optional(),
    '8': fields.DRG_8.optional(),
    '9': fields.DRG_9.optional(),
    '10': fields.DRG_10.optional(),
    '11': fields.DRG_11.optional(),
    '12': fields.DRG_12.optional(),
    '13': fields.DRG_13.optional(),
    '14': fields.DRG_14.optional(),
    '15': fields.DRG_15.optional(),
    '16': fields.DRG_16.optional(),
    '17': fields.DRG_17.optional(),
    '18': fields.DRG_18.optional(),
    '19': fields.DRG_19.optional(),
    '20': fields.DRG_20.optional(),
    '21': fields.DRG_21.optional(),
    '22': fields.DRG_22.optional(),
    '23': fields.DRG_23.optional(),
    '24': fields.DRG_24.optional(),
    '25': fields.DRG_25.optional(),
    '26': fields.DRG_26.optional(),
    '27': fields.DRG_27.optional(),
    '28': fields.DRG_28.optional(),
    '29': fields.DRG_29.optional(),
    '30': fields.DRG_30.optional(),
    '31': fields.DRG_31.optional(),
    '32': fields.DRG_32.optional(),
    '33': fields.DRG_33.optional(),
  })
  .register(hl7v2Metadata, {
    title: 'DRG',
    version: '2.6',
    description: 'HL7 v2.6 DRG segment',
    type: 'Segment',
  });

/**
 * TypeScript type inferred from the DRG schema
 */
export type DRG = z.infer<typeof drgSchema>;

/**
 * Default export for convenience
 */
export default drgSchema;
