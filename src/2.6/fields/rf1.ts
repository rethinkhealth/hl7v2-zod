import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.6 RF1 Fields
 *
 * HL7 v2.6 RF1 field definitions
 * Each field consists of specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * RF1.1 - Referral Status
 */
export const RF1_1 = datatypes.CWE.register(hl7v2Metadata, {
  title: 'RF1.1',
  version: '2.6',
  description: 'Referral Status',
  type: 'Field',
  item: 1137,
  table: 'HL70283',
  longName: 'HL7Referral Status',
  length: 705,
});

/**
 * RF1.2 - Referral Priority
 */
export const RF1_2 = datatypes.CWE.register(hl7v2Metadata, {
  title: 'RF1.2',
  version: '2.6',
  description: 'Referral Priority',
  type: 'Field',
  item: 1138,
  table: 'HL70280',
  longName: 'HL7Referral Priority',
  length: 705,
});

/**
 * RF1.3 - Referral Type
 */
export const RF1_3 = datatypes.CWE.register(hl7v2Metadata, {
  title: 'RF1.3',
  version: '2.6',
  description: 'Referral Type',
  type: 'Field',
  item: 1139,
  table: 'HL70281',
  longName: 'HL7Referral Type',
  length: 705,
});

/**
 * RF1.4 - Referral Disposition
 */
export const RF1_4 = datatypes.CWE.register(hl7v2Metadata, {
  title: 'RF1.4',
  version: '2.6',
  description: 'Referral Disposition',
  type: 'Field',
  item: 1140,
  table: 'HL70282',
  longName: 'HL7Referral Disposition',
  length: 705,
});

/**
 * RF1.5 - Referral Category
 */
export const RF1_5 = datatypes.CWE.register(hl7v2Metadata, {
  title: 'RF1.5',
  version: '2.6',
  description: 'Referral Category',
  type: 'Field',
  item: 1141,
  table: 'HL70284',
  longName: 'HL7Referral Category',
  length: 705,
});

/**
 * RF1.6 - Originating Referral Identifier
 */
export const RF1_6 = datatypes.ST.register(hl7v2Metadata, {
  title: 'RF1.6',
  version: '2.6',
  description: 'Originating Referral Identifier',
  type: 'Field',
  item: 1142,
  table: '',
  longName: 'HL7Originating Referral Identifier',
  length: 30,
});

/**
 * RF1.7 - Effective Date
 */
export const RF1_7 = datatypes.DTM.register(hl7v2Metadata, {
  title: 'RF1.7',
  version: '2.6',
  description: 'Effective Date',
  type: 'Field',
  item: 1143,
  table: '',
  longName: 'HL7Effective Date',
  length: 24,
});

/**
 * RF1.8 - Expiration Date
 */
export const RF1_8 = datatypes.DTM.register(hl7v2Metadata, {
  title: 'RF1.8',
  version: '2.6',
  description: 'Expiration Date',
  type: 'Field',
  item: 1144,
  table: '',
  longName: 'HL7Expiration Date',
  length: 24,
});

/**
 * RF1.9 - Process Date
 */
export const RF1_9 = datatypes.DTM.register(hl7v2Metadata, {
  title: 'RF1.9',
  version: '2.6',
  description: 'Process Date',
  type: 'Field',
  item: 1145,
  table: '',
  longName: 'HL7Process Date',
  length: 24,
});

/**
 * RF1.10 - Referral Reason
 */
export const RF1_10 = datatypes.CWE.register(hl7v2Metadata, {
  title: 'RF1.10',
  version: '2.6',
  description: 'Referral Reason',
  type: 'Field',
  item: 1228,
  table: 'HL70336',
  longName: 'HL7Referral Reason',
  length: 705,
});

/**
 * RF1.11 - External Referral Identifier
 */
export const RF1_11 = datatypes.ST.register(hl7v2Metadata, {
  title: 'RF1.11',
  version: '2.6',
  description: 'External Referral Identifier',
  type: 'Field',
  item: 1300,
  table: '',
  longName: 'HL7External Referral Identifier',
  length: 30,
});

/**
 * RF1.12 - Referral Documentation Completion Status
 */
export const RF1_12 = datatypes.CWE.register(hl7v2Metadata, {
  title: 'RF1.12',
  version: '2.6',
  description: 'Referral Documentation Completion Status',
  type: 'Field',
  item: 2262,
  table: 'HL70865',
  longName: 'HL7Referral Documentation Completion Status',
  length: 705,
});
