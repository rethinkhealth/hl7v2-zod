import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.6 STF Fields
 *
 * HL7 v2.6 STF field definitions
 * Each field consists of specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * STF.1 - Primary Key Value - STF
 */
export const STF_1 = datatypes.CWE.register(hl7v2Metadata, {
  title: 'STF.1',
  version: '2.6',
  description: 'Primary Key Value - STF',
  type: 'Field',
  item: 671,
  table: 'HL79999',
  longName: 'HL7Primary Key Value - STF',
  length: 250,
});

/**
 * STF.2 - Staff Identifier List
 */
export const STF_2 = datatypes.ST.register(hl7v2Metadata, {
  title: 'STF.2',
  version: '2.6',
  description: 'Staff Identifier List',
  type: 'Field',
  item: 672,
  table: 'HL70061',
  longName: 'HL7Staff Identifier List',
  length: 250,
});

/**
 * STF.3 - Staff Name
 */
export const STF_3 = datatypes.XPN.register(hl7v2Metadata, {
  title: 'STF.3',
  version: '2.6',
  description: 'Staff Name',
  type: 'Field',
  item: 673,
  table: '',
  longName: 'HL7Staff Name',
  length: 250,
});

/**
 * STF.4 - Staff Type
 */
export const STF_4 = datatypes.IS.register(hl7v2Metadata, {
  title: 'STF.4',
  version: '2.6',
  description: 'Staff Type',
  type: 'Field',
  item: 674,
  table: 'HL70182',
  longName: 'HL7Staff Type',
  length: 2,
});

/**
 * STF.5 - Administrative Sex
 */
export const STF_5 = datatypes.IS.register(hl7v2Metadata, {
  title: 'STF.5',
  version: '2.6',
  description: 'Administrative Sex',
  type: 'Field',
  item: 111,
  table: 'HL70001',
  longName: 'HL7Administrative Sex',
  length: 1,
});

/**
 * STF.6 - Date/Time of Birth
 */
export const STF_6 = datatypes.DTM.register(hl7v2Metadata, {
  title: 'STF.6',
  version: '2.6',
  description: 'Date/Time of Birth',
  type: 'Field',
  item: 110,
  table: '',
  longName: 'HL7Date/Time of Birth',
  length: 24,
});

/**
 * STF.7 - Active/Inactive Flag
 */
export const STF_7 = datatypes.ID.register(hl7v2Metadata, {
  title: 'STF.7',
  version: '2.6',
  description: 'Active/Inactive Flag',
  type: 'Field',
  item: 675,
  table: 'HL70183',
  longName: 'HL7Active/Inactive Flag',
  length: 1,
});

/**
 * STF.8 - Department
 */
export const STF_8 = datatypes.CWE.register(hl7v2Metadata, {
  title: 'STF.8',
  version: '2.6',
  description: 'Department',
  type: 'Field',
  item: 676,
  table: 'HL70184',
  longName: 'HL7Department',
  length: 250,
});

/**
 * STF.9 - Hospital Service - STF
 */
export const STF_9 = datatypes.CWE.register(hl7v2Metadata, {
  title: 'STF.9',
  version: '2.6',
  description: 'Hospital Service - STF',
  type: 'Field',
  item: 677,
  table: 'HL70069',
  longName: 'HL7Hospital Service - STF',
  length: 250,
});

/**
 * STF.10 - Phone
 */
export const STF_10 = datatypes.XTN.register(hl7v2Metadata, {
  title: 'STF.10',
  version: '2.6',
  description: 'Phone',
  type: 'Field',
  item: 678,
  table: '',
  longName: 'HL7Phone',
  length: 250,
});

/**
 * STF.11 - Office/Home Address/Birthplace
 */
export const STF_11 = datatypes.XAD.register(hl7v2Metadata, {
  title: 'STF.11',
  version: '2.6',
  description: 'Office/Home Address/Birthplace',
  type: 'Field',
  item: 679,
  table: '',
  longName: 'HL7Office/Home Address/Birthplace',
  length: 250,
});

/**
 * STF.12 - Institution Activation Date
 */
export const STF_12 = datatypes.DIN.register(hl7v2Metadata, {
  title: 'STF.12',
  version: '2.6',
  description: 'Institution Activation Date',
  type: 'Field',
  item: 680,
  table: 'HL70537',
  longName: 'HL7Institution Activation Date',
  length: 276,
});

/**
 * STF.13 - Institution Inactivation Date
 */
export const STF_13 = datatypes.DIN.register(hl7v2Metadata, {
  title: 'STF.13',
  version: '2.6',
  description: 'Institution Inactivation Date',
  type: 'Field',
  item: 681,
  table: 'HL70537',
  longName: 'HL7Institution Inactivation Date',
  length: 276,
});

/**
 * STF.14 - Backup Person ID
 */
export const STF_14 = datatypes.CWE.register(hl7v2Metadata, {
  title: 'STF.14',
  version: '2.6',
  description: 'Backup Person ID',
  type: 'Field',
  item: 682,
  table: '',
  longName: 'HL7Backup Person ID',
  length: 250,
});

/**
 * STF.15 - E-Mail Address
 */
export const STF_15 = datatypes.ST.register(hl7v2Metadata, {
  title: 'STF.15',
  version: '2.6',
  description: 'E-Mail Address',
  type: 'Field',
  item: 683,
  table: '',
  longName: 'HL7E-Mail Address',
  length: 40,
});

/**
 * STF.16 - Preferred Method of Contact
 */
export const STF_16 = datatypes.CWE.register(hl7v2Metadata, {
  title: 'STF.16',
  version: '2.6',
  description: 'Preferred Method of Contact',
  type: 'Field',
  item: 684,
  table: 'HL70185',
  longName: 'HL7Preferred Method of Contact',
  length: 705,
});

/**
 * STF.17 - Marital Status
 */
export const STF_17 = datatypes.CWE.register(hl7v2Metadata, {
  title: 'STF.17',
  version: '2.6',
  description: 'Marital Status',
  type: 'Field',
  item: 119,
  table: 'HL70002',
  longName: 'HL7Marital Status',
  length: 705,
});

/**
 * STF.18 - Job Title
 */
export const STF_18 = datatypes.ST.register(hl7v2Metadata, {
  title: 'STF.18',
  version: '2.6',
  description: 'Job Title',
  type: 'Field',
  item: 785,
  table: '',
  longName: 'HL7Job Title',
  length: 20,
});

/**
 * STF.19 - Job Code/Class
 */
export const STF_19 = datatypes.JCC.register(hl7v2Metadata, {
  title: 'STF.19',
  version: '2.6',
  description: 'Job Code/Class',
  type: 'Field',
  item: 786,
  table: '',
  longName: 'HL7Job Code/Class',
  length: 20,
});

/**
 * STF.20 - Employment Status Code
 */
export const STF_20 = datatypes.CWE.register(hl7v2Metadata, {
  title: 'STF.20',
  version: '2.6',
  description: 'Employment Status Code',
  type: 'Field',
  item: 1276,
  table: 'HL70066',
  longName: 'HL7Employment Status Code',
  length: 250,
});

/**
 * STF.21 - Additional Insured on Auto
 */
export const STF_21 = datatypes.ID.register(hl7v2Metadata, {
  title: 'STF.21',
  version: '2.6',
  description: 'Additional Insured on Auto',
  type: 'Field',
  item: 1275,
  table: 'HL70136',
  longName: 'HL7Additional Insured on Auto',
  length: 1,
});

/**
 * STF.22 - Driver's License Number - Staff
 */
export const STF_22 = datatypes.DLN.register(hl7v2Metadata, {
  title: 'STF.22',
  version: '2.6',
  description: "Driver's License Number - Staff",
  type: 'Field',
  item: 1302,
  table: '',
  longName: "HL7Driver's License Number - Staff",
  length: 25,
});

/**
 * STF.23 - Copy Auto Ins
 */
export const STF_23 = datatypes.ID.register(hl7v2Metadata, {
  title: 'STF.23',
  version: '2.6',
  description: 'Copy Auto Ins',
  type: 'Field',
  item: 1229,
  table: 'HL70136',
  longName: 'HL7Copy Auto Ins',
  length: 1,
});

/**
 * STF.24 - Auto Ins Expires
 */
export const STF_24 = datatypes.DT.register(hl7v2Metadata, {
  title: 'STF.24',
  version: '2.6',
  description: 'Auto Ins Expires',
  type: 'Field',
  item: 1232,
  table: '',
  longName: 'HL7Auto Ins Expires',
  length: 8,
});

/**
 * STF.25 - Date Last DMV Review
 */
export const STF_25 = datatypes.DT.register(hl7v2Metadata, {
  title: 'STF.25',
  version: '2.6',
  description: 'Date Last DMV Review',
  type: 'Field',
  item: 1298,
  table: '',
  longName: 'HL7Date Last DMV Review',
  length: 8,
});

/**
 * STF.26 - Date Next DMV Review
 */
export const STF_26 = datatypes.DT.register(hl7v2Metadata, {
  title: 'STF.26',
  version: '2.6',
  description: 'Date Next DMV Review',
  type: 'Field',
  item: 1234,
  table: '',
  longName: 'HL7Date Next DMV Review',
  length: 8,
});

/**
 * STF.27 - Race
 */
export const STF_27 = datatypes.CWE.register(hl7v2Metadata, {
  title: 'STF.27',
  version: '2.6',
  description: 'Race',
  type: 'Field',
  item: 113,
  table: 'HL70005',
  longName: 'HL7Race',
  length: 705,
});

/**
 * STF.28 - Ethnic Group
 */
export const STF_28 = datatypes.CWE.register(hl7v2Metadata, {
  title: 'STF.28',
  version: '2.6',
  description: 'Ethnic Group',
  type: 'Field',
  item: 125,
  table: 'HL70189',
  longName: 'HL7Ethnic Group',
  length: 705,
});

/**
 * STF.29 - Re-activation Approval Indicator
 */
export const STF_29 = datatypes.ID.register(hl7v2Metadata, {
  title: 'STF.29',
  version: '2.6',
  description: 'Re-activation Approval Indicator',
  type: 'Field',
  item: 1596,
  table: 'HL70136',
  longName: 'HL7Re-activation Approval Indicator',
  length: 1,
});

/**
 * STF.30 - Citizenship
 */
export const STF_30 = datatypes.CWE.register(hl7v2Metadata, {
  title: 'STF.30',
  version: '2.6',
  description: 'Citizenship',
  type: 'Field',
  item: 129,
  table: 'HL70171',
  longName: 'HL7Citizenship',
  length: 705,
});

/**
 * STF.31 - Date/Time of Death
 */
export const STF_31 = datatypes.DTM.register(hl7v2Metadata, {
  title: 'STF.31',
  version: '2.6',
  description: 'Date/Time of Death',
  type: 'Field',
  item: 1886,
  table: '',
  longName: 'HL7Date/Time of Death',
  length: 8,
});

/**
 * STF.32 - Death Indicator
 */
export const STF_32 = datatypes.ID.register(hl7v2Metadata, {
  title: 'STF.32',
  version: '2.6',
  description: 'Death Indicator',
  type: 'Field',
  item: 1887,
  table: 'HL70136',
  longName: 'HL7Death Indicator',
  length: 1,
});

/**
 * STF.33 - Institution Relationship Type Code
 */
export const STF_33 = datatypes.CWE.register(hl7v2Metadata, {
  title: 'STF.33',
  version: '2.6',
  description: 'Institution Relationship Type Code',
  type: 'Field',
  item: 1888,
  table: 'HL70538',
  longName: 'HL7Institution Relationship Type Code',
  length: 250,
});

/**
 * STF.34 - Institution Relationship Period
 */
export const STF_34 = datatypes.DR.register(hl7v2Metadata, {
  title: 'STF.34',
  version: '2.6',
  description: 'Institution Relationship Period',
  type: 'Field',
  item: 1889,
  table: '',
  longName: 'HL7Institution Relationship Period',
  length: 52,
});

/**
 * STF.35 - Expected Return Date
 */
export const STF_35 = datatypes.DT.register(hl7v2Metadata, {
  title: 'STF.35',
  version: '2.6',
  description: 'Expected Return Date',
  type: 'Field',
  item: 1890,
  table: '',
  longName: 'HL7Expected Return Date',
  length: 8,
});

/**
 * STF.36 - Cost Center Code
 */
export const STF_36 = datatypes.CWE.register(hl7v2Metadata, {
  title: 'STF.36',
  version: '2.6',
  description: 'Cost Center Code',
  type: 'Field',
  item: 1891,
  table: 'HL70539',
  longName: 'HL7Cost Center Code',
  length: 250,
});

/**
 * STF.37 - Generic Classification Indicator
 */
export const STF_37 = datatypes.ID.register(hl7v2Metadata, {
  title: 'STF.37',
  version: '2.6',
  description: 'Generic Classification Indicator',
  type: 'Field',
  item: 1892,
  table: 'HL70136',
  longName: 'HL7Generic Classification Indicator',
  length: 1,
});

/**
 * STF.38 - Inactive Reason Code
 */
export const STF_38 = datatypes.CWE.register(hl7v2Metadata, {
  title: 'STF.38',
  version: '2.6',
  description: 'Inactive Reason Code',
  type: 'Field',
  item: 1893,
  table: 'HL70540',
  longName: 'HL7Inactive Reason Code',
  length: 250,
});

/**
 * STF.39 - Generic resource type or category
 */
export const STF_39 = datatypes.CWE.register(hl7v2Metadata, {
  title: 'STF.39',
  version: '2.6',
  description: 'Generic resource type or category',
  type: 'Field',
  item: 2184,
  table: 'HL70771',
  longName: 'HL7Generic resource type or category',
  length: 1,
});
