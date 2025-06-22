import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.6 PRD Fields
 *
 * HL7 v2.6 PRD field definitions
 * Each field consists of specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * PRD.1 - Provider Role
 */
export const PRD_1 = datatypes.CWE.register(hl7v2Metadata, {
  title: 'PRD.1',
  version: '2.6',
  description: 'Provider Role',
  type: 'Field',
  item: 1155,
  table: 'HL70286',
  longName: 'HL7Provider Role',
  length: 705,
});

/**
 * PRD.2 - Provider Name
 */
export const PRD_2 = datatypes.XPN.register(hl7v2Metadata, {
  title: 'PRD.2',
  version: '2.6',
  description: 'Provider Name',
  type: 'Field',
  item: 1156,
  table: '',
  longName: 'HL7Provider Name',
  length: 250,
});

/**
 * PRD.3 - Provider Address
 */
export const PRD_3 = datatypes.XAD.register(hl7v2Metadata, {
  title: 'PRD.3',
  version: '2.6',
  description: 'Provider Address',
  type: 'Field',
  item: 1157,
  table: '',
  longName: 'HL7Provider Address',
  length: 250,
});

/**
 * PRD.4 - Provider Location
 */
export const PRD_4 = datatypes.ST.register(hl7v2Metadata, {
  title: 'PRD.4',
  version: '2.6',
  description: 'Provider Location',
  type: 'Field',
  item: 1158,
  table: '',
  longName: 'HL7Provider Location',
  length: 60,
});

/**
 * PRD.5 - Provider Communication Information
 */
export const PRD_5 = datatypes.XTN.register(hl7v2Metadata, {
  title: 'PRD.5',
  version: '2.6',
  description: 'Provider Communication Information',
  type: 'Field',
  item: 1159,
  table: '',
  longName: 'HL7Provider Communication Information',
  length: 250,
});

/**
 * PRD.6 - Preferred Method of Contact
 */
export const PRD_6 = datatypes.CWE.register(hl7v2Metadata, {
  title: 'PRD.6',
  version: '2.6',
  description: 'Preferred Method of Contact',
  type: 'Field',
  item: 684,
  table: 'HL70185',
  longName: 'HL7Preferred Method of Contact',
  length: 705,
});

/**
 * PRD.7 - Provider Identifiers
 */
export const PRD_7 = datatypes.PLN.register(hl7v2Metadata, {
  title: 'PRD.7',
  version: '2.6',
  description: 'Provider Identifiers',
  type: 'Field',
  item: 1162,
  table: 'HL70338',
  longName: 'HL7Provider Identifiers',
  length: 100,
});

/**
 * PRD.8 - Effective Start Date of Provider Role
 */
export const PRD_8 = datatypes.DTM.register(hl7v2Metadata, {
  title: 'PRD.8',
  version: '2.6',
  description: 'Effective Start Date of Provider Role',
  type: 'Field',
  item: 1163,
  table: '',
  longName: 'HL7Effective Start Date of Provider Role',
  length: 24,
});

/**
 * PRD.9 - Effective End Date of Provider Role
 */
export const PRD_9 = datatypes.DTM.register(hl7v2Metadata, {
  title: 'PRD.9',
  version: '2.6',
  description: 'Effective End Date of Provider Role',
  type: 'Field',
  item: 1164,
  table: '',
  longName: 'HL7Effective End Date of Provider Role',
  length: 24,
});

/**
 * PRD.10 - Provider Organization Name and Identifier
 */
export const PRD_10 = datatypes.XON.register(hl7v2Metadata, {
  title: 'PRD.10',
  version: '2.6',
  description: 'Provider Organization Name and Identifier',
  type: 'Field',
  item: 2256,
  table: '',
  longName: 'HL7Provider Organization Name and Identifier',
  length: 250,
});

/**
 * PRD.11 - Provider Organization Address
 */
export const PRD_11 = datatypes.XAD.register(hl7v2Metadata, {
  title: 'PRD.11',
  version: '2.6',
  description: 'Provider Organization Address',
  type: 'Field',
  item: 2257,
  table: '',
  longName: 'HL7Provider Organization Address',
  length: 60,
});

/**
 * PRD.12 - Provider Organization Location Information
 */
export const PRD_12 = datatypes.ST.register(hl7v2Metadata, {
  title: 'PRD.12',
  version: '2.6',
  description: 'Provider Organization Location Information',
  type: 'Field',
  item: 2258,
  table: '',
  longName: 'HL7Provider Organization Location Information',
  length: 60,
});

/**
 * PRD.13 - Provider Organization Communication Information
 */
export const PRD_13 = datatypes.XTN.register(hl7v2Metadata, {
  title: 'PRD.13',
  version: '2.6',
  description: 'Provider Organization Communication Information',
  type: 'Field',
  item: 2259,
  table: '',
  longName: 'HL7Provider Organization Communication Information',
  length: 250,
});

/**
 * PRD.14 - Provider Organization Method of Contact
 */
export const PRD_14 = datatypes.CWE.register(hl7v2Metadata, {
  title: 'PRD.14',
  version: '2.6',
  description: 'Provider Organization Method of Contact',
  type: 'Field',
  item: 2260,
  table: 'HL70185',
  longName: 'HL7Provider Organization Method of Contact',
  length: 705,
});
