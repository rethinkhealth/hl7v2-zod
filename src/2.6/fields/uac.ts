import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.6 UAC Fields
 *
 * HL7 v2.6 UAC field definitions
 * Each field consists of specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * UAC.1 - User Authentication Credential Type Code
 */
export const UAC_1 = datatypes.CWE.register(hl7v2Metadata, {
  title: 'UAC.1',
  version: '2.6',
  description: 'User Authentication Credential Type Code',
  type: 'Field',
  item: 2267,
  table: 'HL70615',
  longName: 'HL7User Authentication Credential Type Code',
  length: 705,
});

/**
 * UAC.2 - User Authentication Credential
 */
export const UAC_2 = datatypes.ST.register(hl7v2Metadata, {
  title: 'UAC.2',
  version: '2.6',
  description: 'User Authentication Credential',
  type: 'Field',
  item: 2268,
  table: '',
  longName: 'HL7User Authentication Credential',
  length: 65536,
});
