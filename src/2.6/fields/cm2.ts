import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.6 CM2 Fields
 *
 * HL7 v2.6 CM2 field definitions
 * Each field consists of specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * CM2.1 - Set ID- CM2
 */
export const CM2_1 = datatypes.SI.register(hl7v2Metadata, {
  title: 'CM2.1',
  version: '2.6',
  description: 'Set ID- CM2',
  type: 'Field',
  item: 1024,
  table: '',
  longName: 'HL7Set ID- CM2',
  length: 4,
});

/**
 * CM2.2 - Scheduled Time Point
 */
export const CM2_2 = datatypes.CWE.register(hl7v2Metadata, {
  title: 'CM2.2',
  version: '2.6',
  description: 'Scheduled Time Point',
  type: 'Field',
  item: 1025,
  table: '',
  longName: 'HL7Scheduled Time Point',
  length: 250,
});

/**
 * CM2.3 - Description of Time Point
 */
export const CM2_3 = datatypes.ST.register(hl7v2Metadata, {
  title: 'CM2.3',
  version: '2.6',
  description: 'Description of Time Point',
  type: 'Field',
  item: 1026,
  table: '',
  longName: 'HL7Description of Time Point',
  length: 300,
});

/**
 * CM2.4 - Events Scheduled This Time Point
 */
export const CM2_4 = datatypes.CWE.register(hl7v2Metadata, {
  title: 'CM2.4',
  version: '2.6',
  description: 'Events Scheduled This Time Point',
  type: 'Field',
  item: 1027,
  table: '',
  longName: 'HL7Events Scheduled This Time Point',
  length: 250,
});
