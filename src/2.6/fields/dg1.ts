import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.6 DG1 Fields
 *
 * HL7 v2.6 DG1 field definitions
 * Each field consists of specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * DG1.1 - Set ID - DG1
 */
export const DG1_1 = datatypes.SI.register(hl7v2Metadata, {
  title: 'DG1.1',
  version: '2.6',
  description: 'Set ID - DG1',
  type: 'Field',
  item: 375,
  table: '',
  longName: 'HL7Set ID - DG1',
  length: 4,
});

/**
 * DG1.3 - Diagnosis Code - DG1
 */
export const DG1_3 = datatypes.CWE.register(hl7v2Metadata, {
  title: 'DG1.3',
  version: '2.6',
  description: 'Diagnosis Code - DG1',
  type: 'Field',
  item: 377,
  table: 'HL70051',
  longName: 'HL7Diagnosis Code - DG1',
  length: 250,
});

/**
 * DG1.5 - Diagnosis Date/Time
 */
export const DG1_5 = datatypes.DTM.register(hl7v2Metadata, {
  title: 'DG1.5',
  version: '2.6',
  description: 'Diagnosis Date/Time',
  type: 'Field',
  item: 379,
  table: '',
  longName: 'HL7Diagnosis Date/Time',
  length: 24,
});

/**
 * DG1.6 - Diagnosis Type
 */
export const DG1_6 = datatypes.IS.register(hl7v2Metadata, {
  title: 'DG1.6',
  version: '2.6',
  description: 'Diagnosis Type',
  type: 'Field',
  item: 380,
  table: 'HL70052',
  longName: 'HL7Diagnosis Type',
  length: 2,
});

/**
 * DG1.15 - Diagnosis Priority
 */
export const DG1_15 = datatypes.ID.register(hl7v2Metadata, {
  title: 'DG1.15',
  version: '2.6',
  description: 'Diagnosis Priority',
  type: 'Field',
  item: 389,
  table: 'HL70359',
  longName: 'HL7Diagnosis Priority',
  length: 2,
});

/**
 * DG1.16 - Diagnosing Clinician
 */
export const DG1_16 = datatypes.XCN.register(hl7v2Metadata, {
  title: 'DG1.16',
  version: '2.6',
  description: 'Diagnosing Clinician',
  type: 'Field',
  item: 390,
  table: '',
  longName: 'HL7Diagnosing Clinician',
  length: 250,
});

/**
 * DG1.17 - Diagnosis Classification
 */
export const DG1_17 = datatypes.IS.register(hl7v2Metadata, {
  title: 'DG1.17',
  version: '2.6',
  description: 'Diagnosis Classification',
  type: 'Field',
  item: 766,
  table: 'HL70228',
  longName: 'HL7Diagnosis Classification',
  length: 3,
});

/**
 * DG1.18 - Confidential Indicator
 */
export const DG1_18 = datatypes.ID.register(hl7v2Metadata, {
  title: 'DG1.18',
  version: '2.6',
  description: 'Confidential Indicator',
  type: 'Field',
  item: 767,
  table: 'HL70136',
  longName: 'HL7Confidential Indicator',
  length: 1,
});

/**
 * DG1.19 - Attestation Date/Time
 */
export const DG1_19 = datatypes.DTM.register(hl7v2Metadata, {
  title: 'DG1.19',
  version: '2.6',
  description: 'Attestation Date/Time',
  type: 'Field',
  item: 768,
  table: '',
  longName: 'HL7Attestation Date/Time',
  length: 24,
});

/**
 * DG1.20 - Diagnosis Identifier
 */
export const DG1_20 = datatypes.ST.register(hl7v2Metadata, {
  title: 'DG1.20',
  version: '2.6',
  description: 'Diagnosis Identifier',
  type: 'Field',
  item: 1850,
  table: '',
  longName: 'HL7Diagnosis Identifier',
  length: 427,
});

/**
 * DG1.21 - Diagnosis Action Code
 */
export const DG1_21 = datatypes.ID.register(hl7v2Metadata, {
  title: 'DG1.21',
  version: '2.6',
  description: 'Diagnosis Action Code',
  type: 'Field',
  item: 1894,
  table: 'HL70206',
  longName: 'HL7Diagnosis Action Code',
  length: 1,
});

/**
 * DG1.22 - Parent Diagnosis
 */
export const DG1_22 = datatypes.ST.register(hl7v2Metadata, {
  title: 'DG1.22',
  version: '2.6',
  description: 'Parent Diagnosis',
  type: 'Field',
  item: 2152,
  table: '',
  longName: 'HL7Parent Diagnosis',
  length: 427,
});

/**
 * DG1.23 - DRG CCL Value Code
 */
export const DG1_23 = datatypes.CWE.register(hl7v2Metadata, {
  title: 'DG1.23',
  version: '2.6',
  description: 'DRG CCL Value Code',
  type: 'Field',
  item: 2153,
  table: 'HL70728',
  longName: 'HL7DRG CCL Value Code',
  length: 705,
});

/**
 * DG1.24 - DRG Grouping Usage
 */
export const DG1_24 = datatypes.ID.register(hl7v2Metadata, {
  title: 'DG1.24',
  version: '2.6',
  description: 'DRG Grouping Usage',
  type: 'Field',
  item: 2154,
  table: 'HL70136',
  longName: 'HL7DRG Grouping Usage',
  length: 20,
});

/**
 * DG1.25 - DRG Diagnosis Determination Status
 */
export const DG1_25 = datatypes.IS.register(hl7v2Metadata, {
  title: 'DG1.25',
  version: '2.6',
  description: 'DRG Diagnosis Determination Status',
  type: 'Field',
  item: 2155,
  table: 'HL70731',
  longName: 'HL7DRG Diagnosis Determination Status',
  length: 20,
});

/**
 * DG1.26 - Present On Admission (POA) Indicator
 */
export const DG1_26 = datatypes.IS.register(hl7v2Metadata, {
  title: 'DG1.26',
  version: '2.6',
  description: 'Present On Admission (POA) Indicator',
  type: 'Field',
  item: 2288,
  table: 'HL70895',
  longName: 'HL7Present On Admission (POA) Indicator',
  length: 1,
});
