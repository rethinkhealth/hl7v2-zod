import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.6 PRC Fields
 *
 * HL7 v2.6 PRC field definitions
 * Each field consists of specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * PRC.1 - Primary Key Value-PRC
 */
export const PRC_1 = datatypes.CWE.register(hl7v2Metadata, {
  title: 'PRC.1',
  version: '2.6',
  description: 'Primary Key Value-PRC',
  type: 'Field',
  item: 982,
  table: 'HL70132',
  longName: 'HL7Primary Key Value-PRC',
  length: 250,
});

/**
 * PRC.2 - Facility ID-PRC
 */
export const PRC_2 = datatypes.CWE.register(hl7v2Metadata, {
  title: 'PRC.2',
  version: '2.6',
  description: 'Facility ID-PRC',
  type: 'Field',
  item: 995,
  table: 'HL70464',
  longName: 'HL7Facility ID-PRC',
  length: 250,
});

/**
 * PRC.3 - Department
 */
export const PRC_3 = datatypes.CWE.register(hl7v2Metadata, {
  title: 'PRC.3',
  version: '2.6',
  description: 'Department',
  type: 'Field',
  item: 676,
  table: 'HL70184',
  longName: 'HL7Department',
  length: 250,
});

/**
 * PRC.4 - Valid Patient Classes
 */
export const PRC_4 = datatypes.IS.register(hl7v2Metadata, {
  title: 'PRC.4',
  version: '2.6',
  description: 'Valid Patient Classes',
  type: 'Field',
  item: 967,
  table: 'HL70004',
  longName: 'HL7Valid Patient Classes',
  length: 1,
});

/**
 * PRC.5 - Price
 */
export const PRC_5 = datatypes.ST.register(hl7v2Metadata, {
  title: 'PRC.5',
  version: '2.6',
  description: 'Price',
  type: 'Field',
  item: 998,
  table: '',
  longName: 'HL7Price',
  length: 12,
});

/**
 * PRC.6 - Formula
 */
export const PRC_6 = datatypes.ST.register(hl7v2Metadata, {
  title: 'PRC.6',
  version: '2.6',
  description: 'Formula',
  type: 'Field',
  item: 999,
  table: '',
  longName: 'HL7Formula',
  length: 200,
});

/**
 * PRC.7 - Minimum Quantity
 */
export const PRC_7 = datatypes.NM.register(hl7v2Metadata, {
  title: 'PRC.7',
  version: '2.6',
  description: 'Minimum Quantity',
  type: 'Field',
  item: 1000,
  table: '',
  longName: 'HL7Minimum Quantity',
  length: 4,
});

/**
 * PRC.8 - Maximum Quantity
 */
export const PRC_8 = datatypes.NM.register(hl7v2Metadata, {
  title: 'PRC.8',
  version: '2.6',
  description: 'Maximum Quantity',
  type: 'Field',
  item: 1001,
  table: '',
  longName: 'HL7Maximum Quantity',
  length: 4,
});

/**
 * PRC.9 - Minimum Price
 */
export const PRC_9 = datatypes.ST.register(hl7v2Metadata, {
  title: 'PRC.9',
  version: '2.6',
  description: 'Minimum Price',
  type: 'Field',
  item: 1002,
  table: '',
  longName: 'HL7Minimum Price',
  length: 12,
});

/**
 * PRC.10 - Maximum Price
 */
export const PRC_10 = datatypes.ST.register(hl7v2Metadata, {
  title: 'PRC.10',
  version: '2.6',
  description: 'Maximum Price',
  type: 'Field',
  item: 1003,
  table: '',
  longName: 'HL7Maximum Price',
  length: 12,
});

/**
 * PRC.11 - Effective Start Date
 */
export const PRC_11 = datatypes.DTM.register(hl7v2Metadata, {
  title: 'PRC.11',
  version: '2.6',
  description: 'Effective Start Date',
  type: 'Field',
  item: 1004,
  table: '',
  longName: 'HL7Effective Start Date',
  length: 24,
});

/**
 * PRC.12 - Effective End Date
 */
export const PRC_12 = datatypes.DTM.register(hl7v2Metadata, {
  title: 'PRC.12',
  version: '2.6',
  description: 'Effective End Date',
  type: 'Field',
  item: 1005,
  table: '',
  longName: 'HL7Effective End Date',
  length: 24,
});

/**
 * PRC.13 - Price Override Flag
 */
export const PRC_13 = datatypes.IS.register(hl7v2Metadata, {
  title: 'PRC.13',
  version: '2.6',
  description: 'Price Override Flag',
  type: 'Field',
  item: 1006,
  table: 'HL70268',
  longName: 'HL7Price Override Flag',
  length: 1,
});

/**
 * PRC.14 - Billing Category
 */
export const PRC_14 = datatypes.CWE.register(hl7v2Metadata, {
  title: 'PRC.14',
  version: '2.6',
  description: 'Billing Category',
  type: 'Field',
  item: 1007,
  table: 'HL70293',
  longName: 'HL7Billing Category',
  length: 250,
});

/**
 * PRC.15 - Chargeable Flag
 */
export const PRC_15 = datatypes.ID.register(hl7v2Metadata, {
  title: 'PRC.15',
  version: '2.6',
  description: 'Chargeable Flag',
  type: 'Field',
  item: 1008,
  table: 'HL70136',
  longName: 'HL7Chargeable Flag',
  length: 1,
});

/**
 * PRC.16 - Active/Inactive Flag
 */
export const PRC_16 = datatypes.ID.register(hl7v2Metadata, {
  title: 'PRC.16',
  version: '2.6',
  description: 'Active/Inactive Flag',
  type: 'Field',
  item: 675,
  table: 'HL70183',
  longName: 'HL7Active/Inactive Flag',
  length: 1,
});

/**
 * PRC.17 - Cost
 */
export const PRC_17 = datatypes.ST.register(hl7v2Metadata, {
  title: 'PRC.17',
  version: '2.6',
  description: 'Cost',
  type: 'Field',
  item: 989,
  table: '',
  longName: 'HL7Cost',
  length: 12,
});

/**
 * PRC.18 - Charge on Indicator
 */
export const PRC_18 = datatypes.IS.register(hl7v2Metadata, {
  title: 'PRC.18',
  version: '2.6',
  description: 'Charge on Indicator',
  type: 'Field',
  item: 1009,
  table: 'HL70269',
  longName: 'HL7Charge on Indicator',
  length: 1,
});
