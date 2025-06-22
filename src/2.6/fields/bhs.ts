import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.6 BHS Fields
 *
 * HL7 v2.6 BHS field definitions
 * Each field consists of specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * BHS.1 - Batch Field Separator
 */
export const BHS_1 = datatypes.ST.register(hl7v2Metadata, {
  title: 'BHS.1',
  version: '2.6',
  description: 'Batch Field Separator',
  type: 'Field',
  item: 81,
  table: '',
  longName: 'HL7Batch Field Separator',
  length: 1,
});

/**
 * BHS.2 - Batch Encoding Characters
 */
export const BHS_2 = datatypes.ST.register(hl7v2Metadata, {
  title: 'BHS.2',
  version: '2.6',
  description: 'Batch Encoding Characters',
  type: 'Field',
  item: 82,
  table: '',
  longName: 'HL7Batch Encoding Characters',
  length: 4,
});

/**
 * BHS.3 - Batch Sending Application
 */
export const BHS_3 = datatypes.ST.register(hl7v2Metadata, {
  title: 'BHS.3',
  version: '2.6',
  description: 'Batch Sending Application',
  type: 'Field',
  item: 83,
  table: '',
  longName: 'HL7Batch Sending Application',
  length: 227,
});

/**
 * BHS.4 - Batch Sending Facility
 */
export const BHS_4 = datatypes.ST.register(hl7v2Metadata, {
  title: 'BHS.4',
  version: '2.6',
  description: 'Batch Sending Facility',
  type: 'Field',
  item: 84,
  table: '',
  longName: 'HL7Batch Sending Facility',
  length: 227,
});

/**
 * BHS.5 - Batch Receiving Application
 */
export const BHS_5 = datatypes.ST.register(hl7v2Metadata, {
  title: 'BHS.5',
  version: '2.6',
  description: 'Batch Receiving Application',
  type: 'Field',
  item: 85,
  table: '',
  longName: 'HL7Batch Receiving Application',
  length: 227,
});

/**
 * BHS.6 - Batch Receiving Facility
 */
export const BHS_6 = datatypes.ST.register(hl7v2Metadata, {
  title: 'BHS.6',
  version: '2.6',
  description: 'Batch Receiving Facility',
  type: 'Field',
  item: 86,
  table: '',
  longName: 'HL7Batch Receiving Facility',
  length: 227,
});

/**
 * BHS.7 - Batch Creation Date/Time
 */
export const BHS_7 = datatypes.DTM.register(hl7v2Metadata, {
  title: 'BHS.7',
  version: '2.6',
  description: 'Batch Creation Date/Time',
  type: 'Field',
  item: 87,
  table: '',
  longName: 'HL7Batch Creation Date/Time',
  length: 24,
});

/**
 * BHS.8 - Batch Security
 */
export const BHS_8 = datatypes.ST.register(hl7v2Metadata, {
  title: 'BHS.8',
  version: '2.6',
  description: 'Batch Security',
  type: 'Field',
  item: 88,
  table: '',
  longName: 'HL7Batch Security',
  length: 40,
});

/**
 * BHS.9 - Batch Name/ID/Type
 */
export const BHS_9 = datatypes.ST.register(hl7v2Metadata, {
  title: 'BHS.9',
  version: '2.6',
  description: 'Batch Name/ID/Type',
  type: 'Field',
  item: 89,
  table: '',
  longName: 'HL7Batch Name/ID/Type',
  length: 20,
});

/**
 * BHS.10 - Batch Comment
 */
export const BHS_10 = datatypes.ST.register(hl7v2Metadata, {
  title: 'BHS.10',
  version: '2.6',
  description: 'Batch Comment',
  type: 'Field',
  item: 90,
  table: '',
  longName: 'HL7Batch Comment',
  length: 80,
});

/**
 * BHS.11 - Batch Control ID
 */
export const BHS_11 = datatypes.ST.register(hl7v2Metadata, {
  title: 'BHS.11',
  version: '2.6',
  description: 'Batch Control ID',
  type: 'Field',
  item: 91,
  table: '',
  longName: 'HL7Batch Control ID',
  length: 20,
});

/**
 * BHS.12 - Reference Batch Control ID
 */
export const BHS_12 = datatypes.ST.register(hl7v2Metadata, {
  title: 'BHS.12',
  version: '2.6',
  description: 'Reference Batch Control ID',
  type: 'Field',
  item: 92,
  table: '',
  longName: 'HL7Reference Batch Control ID',
  length: 20,
});

/**
 * BHS.13 - Batch Sending Network Address
 */
export const BHS_13 = datatypes.ST.register(hl7v2Metadata, {
  title: 'BHS.13',
  version: '2.6',
  description: 'Batch Sending Network Address',
  type: 'Field',
  item: 2271,
  table: '',
  longName: 'HL7Batch Sending Network Address',
  length: 227,
});

/**
 * BHS.14 - Batch Receiving Network Address
 */
export const BHS_14 = datatypes.ST.register(hl7v2Metadata, {
  title: 'BHS.14',
  version: '2.6',
  description: 'Batch Receiving Network Address',
  type: 'Field',
  item: 2272,
  table: '',
  longName: 'HL7Batch Receiving Network Address',
  length: 227,
});
