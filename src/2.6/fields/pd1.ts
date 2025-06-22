import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.6 PD1 Fields
 *
 * HL7 v2.6 PD1 field definitions
 * Each field consists of specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * PD1.1 - Living Dependency
 */
export const PD1_1 = datatypes.IS.register(hl7v2Metadata, {
  title: 'PD1.1',
  version: '2.6',
  description: 'Living Dependency',
  type: 'Field',
  item: 755,
  table: 'HL70223',
  longName: 'HL7Living Dependency',
  length: 2,
});

/**
 * PD1.2 - Living Arrangement
 */
export const PD1_2 = datatypes.IS.register(hl7v2Metadata, {
  title: 'PD1.2',
  version: '2.6',
  description: 'Living Arrangement',
  type: 'Field',
  item: 742,
  table: 'HL70220',
  longName: 'HL7Living Arrangement',
  length: 2,
});

/**
 * PD1.3 - Patient Primary Facility
 */
export const PD1_3 = datatypes.XON.register(hl7v2Metadata, {
  title: 'PD1.3',
  version: '2.6',
  description: 'Patient Primary Facility',
  type: 'Field',
  item: 756,
  table: 'HL70204',
  longName: 'HL7Patient Primary Facility',
  length: 250,
});

/**
 * PD1.4 - Patient Primary Care Provider Name & ID No.
 */
export const PD1_4 = datatypes.XCN.register(hl7v2Metadata, {
  title: 'PD1.4',
  version: '2.6',
  description: 'Patient Primary Care Provider Name & ID No.',
  type: 'Field',
  item: 757,
  table: '',
  longName: 'HL7Patient Primary Care Provider Name & ID No.',
});

/**
 * PD1.5 - Student Indicator
 */
export const PD1_5 = datatypes.IS.register(hl7v2Metadata, {
  title: 'PD1.5',
  version: '2.6',
  description: 'Student Indicator',
  type: 'Field',
  item: 745,
  table: 'HL70231',
  longName: 'HL7Student Indicator',
  length: 2,
});

/**
 * PD1.6 - Handicap
 */
export const PD1_6 = datatypes.IS.register(hl7v2Metadata, {
  title: 'PD1.6',
  version: '2.6',
  description: 'Handicap',
  type: 'Field',
  item: 753,
  table: 'HL70295',
  longName: 'HL7Handicap',
  length: 2,
});

/**
 * PD1.7 - Living Will Code
 */
export const PD1_7 = datatypes.IS.register(hl7v2Metadata, {
  title: 'PD1.7',
  version: '2.6',
  description: 'Living Will Code',
  type: 'Field',
  item: 759,
  table: 'HL70315',
  longName: 'HL7Living Will Code',
  length: 2,
});

/**
 * PD1.8 - Organ Donor Code
 */
export const PD1_8 = datatypes.IS.register(hl7v2Metadata, {
  title: 'PD1.8',
  version: '2.6',
  description: 'Organ Donor Code',
  type: 'Field',
  item: 760,
  table: 'HL70316',
  longName: 'HL7Organ Donor Code',
  length: 2,
});

/**
 * PD1.9 - Separate Bill
 */
export const PD1_9 = datatypes.ID.register(hl7v2Metadata, {
  title: 'PD1.9',
  version: '2.6',
  description: 'Separate Bill',
  type: 'Field',
  item: 761,
  table: 'HL70136',
  longName: 'HL7Separate Bill',
  length: 1,
});

/**
 * PD1.10 - Duplicate Patient
 */
export const PD1_10 = datatypes.ST.register(hl7v2Metadata, {
  title: 'PD1.10',
  version: '2.6',
  description: 'Duplicate Patient',
  type: 'Field',
  item: 762,
  table: '',
  longName: 'HL7Duplicate Patient',
  length: 250,
});

/**
 * PD1.11 - Publicity Code
 */
export const PD1_11 = datatypes.CWE.register(hl7v2Metadata, {
  title: 'PD1.11',
  version: '2.6',
  description: 'Publicity Code',
  type: 'Field',
  item: 743,
  table: 'HL70215',
  longName: 'HL7Publicity Code',
  length: 705,
});

/**
 * PD1.12 - Protection Indicator
 */
export const PD1_12 = datatypes.ID.register(hl7v2Metadata, {
  title: 'PD1.12',
  version: '2.6',
  description: 'Protection Indicator',
  type: 'Field',
  item: 744,
  table: 'HL70136',
  longName: 'HL7Protection Indicator',
});

/**
 * PD1.13 - Protection Indicator Effective Date
 */
export const PD1_13 = datatypes.DT.register(hl7v2Metadata, {
  title: 'PD1.13',
  version: '2.6',
  description: 'Protection Indicator Effective Date',
  type: 'Field',
  item: 1566,
  table: '',
  longName: 'HL7Protection Indicator Effective Date',
});

/**
 * PD1.14 - Place of Worship
 */
export const PD1_14 = datatypes.XON.register(hl7v2Metadata, {
  title: 'PD1.14',
  version: '2.6',
  description: 'Place of Worship',
  type: 'Field',
  item: 1567,
  table: '',
  longName: 'HL7Place of Worship',
  length: 250,
});

/**
 * PD1.15 - Advance Directive Code
 */
export const PD1_15 = datatypes.CWE.register(hl7v2Metadata, {
  title: 'PD1.15',
  version: '2.6',
  description: 'Advance Directive Code',
  type: 'Field',
  item: 1548,
  table: 'HL70435',
  longName: 'HL7Advance Directive Code',
  length: 705,
});

/**
 * PD1.16 - Immunization Registry Status
 */
export const PD1_16 = datatypes.IS.register(hl7v2Metadata, {
  title: 'PD1.16',
  version: '2.6',
  description: 'Immunization Registry Status',
  type: 'Field',
  item: 1569,
  table: 'HL70441',
  longName: 'HL7Immunization Registry Status',
  length: 1,
});

/**
 * PD1.17 - Immunization Registry Status Effective Date
 */
export const PD1_17 = datatypes.DT.register(hl7v2Metadata, {
  title: 'PD1.17',
  version: '2.6',
  description: 'Immunization Registry Status Effective Date',
  type: 'Field',
  item: 1570,
  table: '',
  longName: 'HL7Immunization Registry Status Effective Date',
  length: 8,
});

/**
 * PD1.18 - Publicity Code Effective Date
 */
export const PD1_18 = datatypes.DT.register(hl7v2Metadata, {
  title: 'PD1.18',
  version: '2.6',
  description: 'Publicity Code Effective Date',
  type: 'Field',
  item: 1571,
  table: '',
  longName: 'HL7Publicity Code Effective Date',
  length: 8,
});

/**
 * PD1.19 - Military Branch
 */
export const PD1_19 = datatypes.IS.register(hl7v2Metadata, {
  title: 'PD1.19',
  version: '2.6',
  description: 'Military Branch',
  type: 'Field',
  item: 1572,
  table: 'HL70140',
  longName: 'HL7Military Branch',
  length: 5,
});

/**
 * PD1.20 - Military Rank/Grade
 */
export const PD1_20 = datatypes.IS.register(hl7v2Metadata, {
  title: 'PD1.20',
  version: '2.6',
  description: 'Military Rank/Grade',
  type: 'Field',
  item: 486,
  table: 'HL70141',
  longName: 'HL7Military Rank/Grade',
  length: 2,
});

/**
 * PD1.21 - Military Status
 */
export const PD1_21 = datatypes.IS.register(hl7v2Metadata, {
  title: 'PD1.21',
  version: '2.6',
  description: 'Military Status',
  type: 'Field',
  item: 1573,
  table: 'HL70142',
  longName: 'HL7Military Status',
  length: 3,
});

/**
 * PD1.22 - Advance Directive Last Verified Date
 */
export const PD1_22 = datatypes.DT.register(hl7v2Metadata, {
  title: 'PD1.22',
  version: '2.6',
  description: 'Advance Directive Last Verified Date',
  type: 'Field',
  item: 2141,
  table: '',
  longName: 'HL7Advance Directive Last Verified Date',
  length: 8,
});
