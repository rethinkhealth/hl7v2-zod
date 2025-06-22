import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.6 IVT Fields
 *
 * HL7 v2.6 IVT field definitions
 * Each field consists of specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * IVT.1 - Set Id - IVT
 */
export const IVT_1 = datatypes.SI.register(hl7v2Metadata, {
  title: 'IVT.1',
  version: '2.6',
  description: 'Set Id - IVT',
  type: 'Field',
  item: 2062,
  table: '',
  longName: 'HL7Set Id - IVT',
  length: 4,
});

/**
 * IVT.2 - Inventory Location Identifier
 */
export const IVT_2 = datatypes.ST.register(hl7v2Metadata, {
  title: 'IVT.2',
  version: '2.6',
  description: 'Inventory Location Identifier',
  type: 'Field',
  item: 2063,
  table: '',
  longName: 'HL7Inventory Location Identifier',
  length: 250,
});

/**
 * IVT.3 - Inventory Location Name
 */
export const IVT_3 = datatypes.ST.register(hl7v2Metadata, {
  title: 'IVT.3',
  version: '2.6',
  description: 'Inventory Location Name',
  type: 'Field',
  item: 2277,
  table: '',
  longName: 'HL7Inventory Location Name',
  length: 999,
});

/**
 * IVT.4 - Source Location Identifier
 */
export const IVT_4 = datatypes.ST.register(hl7v2Metadata, {
  title: 'IVT.4',
  version: '2.6',
  description: 'Source Location Identifier',
  type: 'Field',
  item: 2064,
  table: '',
  longName: 'HL7Source Location Identifier',
  length: 250,
});

/**
 * IVT.5 - Source Location Name
 */
export const IVT_5 = datatypes.ST.register(hl7v2Metadata, {
  title: 'IVT.5',
  version: '2.6',
  description: 'Source Location Name',
  type: 'Field',
  item: 2278,
  table: '',
  longName: 'HL7Source Location Name',
  length: 999,
});

/**
 * IVT.6 - Item Status
 */
export const IVT_6 = datatypes.CWE.register(hl7v2Metadata, {
  title: 'IVT.6',
  version: '2.6',
  description: 'Item Status',
  type: 'Field',
  item: 2065,
  table: 'HL70625',
  longName: 'HL7Item Status',
  length: 250,
});

/**
 * IVT.7 - Bin Location Identifier
 */
export const IVT_7 = datatypes.ST.register(hl7v2Metadata, {
  title: 'IVT.7',
  version: '2.6',
  description: 'Bin Location Identifier',
  type: 'Field',
  item: 2066,
  table: '',
  longName: 'HL7Bin Location Identifier',
  length: 250,
});

/**
 * IVT.8 - Order Packaging
 */
export const IVT_8 = datatypes.CWE.register(hl7v2Metadata, {
  title: 'IVT.8',
  version: '2.6',
  description: 'Order Packaging',
  type: 'Field',
  item: 2067,
  table: '',
  longName: 'HL7Order Packaging',
  length: 250,
});

/**
 * IVT.9 - Issue Packaging
 */
export const IVT_9 = datatypes.CWE.register(hl7v2Metadata, {
  title: 'IVT.9',
  version: '2.6',
  description: 'Issue Packaging',
  type: 'Field',
  item: 2068,
  table: '',
  longName: 'HL7Issue Packaging',
  length: 250,
});

/**
 * IVT.10 - Default Inventory Asset Account
 */
export const IVT_10 = datatypes.ST.register(hl7v2Metadata, {
  title: 'IVT.10',
  version: '2.6',
  description: 'Default Inventory Asset Account',
  type: 'Field',
  item: 2069,
  table: '',
  longName: 'HL7Default Inventory Asset Account',
  length: 16,
});

/**
 * IVT.11 - Patient Chargeable Indicator
 */
export const IVT_11 = datatypes.CNE.register(hl7v2Metadata, {
  title: 'IVT.11',
  version: '2.6',
  description: 'Patient Chargeable Indicator',
  type: 'Field',
  item: 2070,
  table: 'HL70532',
  longName: 'HL7Patient Chargeable Indicator',
  length: 4,
});

/**
 * IVT.12 - Transaction Code
 */
export const IVT_12 = datatypes.CWE.register(hl7v2Metadata, {
  title: 'IVT.12',
  version: '2.6',
  description: 'Transaction Code',
  type: 'Field',
  item: 361,
  table: 'HL70132',
  longName: 'HL7Transaction Code',
  length: 250,
});

/**
 * IVT.13 - Transaction amount - unit
 */
export const IVT_13 = datatypes.ST.register(hl7v2Metadata, {
  title: 'IVT.13',
  version: '2.6',
  description: 'Transaction amount - unit',
  type: 'Field',
  item: 366,
  table: '',
  longName: 'HL7Transaction amount - unit',
  length: 12,
});

/**
 * IVT.14 - Item Importance Code
 */
export const IVT_14 = datatypes.CWE.register(hl7v2Metadata, {
  title: 'IVT.14',
  version: '2.6',
  description: 'Item Importance Code',
  type: 'Field',
  item: 2073,
  table: 'HL70634',
  longName: 'HL7Item Importance Code',
  length: 250,
});

/**
 * IVT.15 - Stocked Item Indicator
 */
export const IVT_15 = datatypes.CNE.register(hl7v2Metadata, {
  title: 'IVT.15',
  version: '2.6',
  description: 'Stocked Item Indicator',
  type: 'Field',
  item: 2074,
  table: 'HL70532',
  longName: 'HL7Stocked Item Indicator',
  length: 4,
});

/**
 * IVT.16 - Consignment Item Indicator
 */
export const IVT_16 = datatypes.CNE.register(hl7v2Metadata, {
  title: 'IVT.16',
  version: '2.6',
  description: 'Consignment Item Indicator',
  type: 'Field',
  item: 2075,
  table: 'HL70532',
  longName: 'HL7Consignment Item Indicator',
  length: 4,
});

/**
 * IVT.17 - Reusable Item Indicator
 */
export const IVT_17 = datatypes.CNE.register(hl7v2Metadata, {
  title: 'IVT.17',
  version: '2.6',
  description: 'Reusable Item Indicator',
  type: 'Field',
  item: 2076,
  table: 'HL70532',
  longName: 'HL7Reusable Item Indicator',
  length: 4,
});

/**
 * IVT.18 - Reusable Cost
 */
export const IVT_18 = datatypes.ST.register(hl7v2Metadata, {
  title: 'IVT.18',
  version: '2.6',
  description: 'Reusable Cost',
  type: 'Field',
  item: 2077,
  table: '',
  longName: 'HL7Reusable Cost',
  length: 12,
});

/**
 * IVT.19 - Substitute Item Identifier
 */
export const IVT_19 = datatypes.ST.register(hl7v2Metadata, {
  title: 'IVT.19',
  version: '2.6',
  description: 'Substitute Item Identifier',
  type: 'Field',
  item: 2078,
  table: '',
  longName: 'HL7Substitute Item Identifier',
  length: 250,
});

/**
 * IVT.20 - Latex-Free Substitute Item Identifier
 */
export const IVT_20 = datatypes.ST.register(hl7v2Metadata, {
  title: 'IVT.20',
  version: '2.6',
  description: 'Latex-Free Substitute Item Identifier',
  type: 'Field',
  item: 2079,
  table: '',
  longName: 'HL7Latex-Free Substitute Item Identifier',
  length: 250,
});

/**
 * IVT.21 - Recommended Reorder Theory
 */
export const IVT_21 = datatypes.CWE.register(hl7v2Metadata, {
  title: 'IVT.21',
  version: '2.6',
  description: 'Recommended Reorder Theory',
  type: 'Field',
  item: 2080,
  table: 'HL70642',
  longName: 'HL7Recommended Reorder Theory',
  length: 250,
});

/**
 * IVT.22 - Recommended Safety Stock Days
 */
export const IVT_22 = datatypes.NM.register(hl7v2Metadata, {
  title: 'IVT.22',
  version: '2.6',
  description: 'Recommended Safety Stock Days',
  type: 'Field',
  item: 2081,
  table: '',
  longName: 'HL7Recommended Safety Stock Days',
  length: 4,
});

/**
 * IVT.23 - Recommended Maximum Days Inventory
 */
export const IVT_23 = datatypes.NM.register(hl7v2Metadata, {
  title: 'IVT.23',
  version: '2.6',
  description: 'Recommended Maximum Days Inventory',
  type: 'Field',
  item: 2082,
  table: '',
  longName: 'HL7Recommended Maximum Days Inventory',
  length: 4,
});

/**
 * IVT.24 - Recommended Order Point
 */
export const IVT_24 = datatypes.NM.register(hl7v2Metadata, {
  title: 'IVT.24',
  version: '2.6',
  description: 'Recommended Order Point',
  type: 'Field',
  item: 2083,
  table: '',
  longName: 'HL7Recommended Order Point',
  length: 8,
});

/**
 * IVT.25 - Recommended Order Amount
 */
export const IVT_25 = datatypes.NM.register(hl7v2Metadata, {
  title: 'IVT.25',
  version: '2.6',
  description: 'Recommended Order Amount',
  type: 'Field',
  item: 2084,
  table: '',
  longName: 'HL7Recommended Order Amount',
  length: 8,
});

/**
 * IVT.26 - Operating Room Par Level Indicator
 */
export const IVT_26 = datatypes.CNE.register(hl7v2Metadata, {
  title: 'IVT.26',
  version: '2.6',
  description: 'Operating Room Par Level Indicator',
  type: 'Field',
  item: 2085,
  table: 'HL70532',
  longName: 'HL7Operating Room Par Level Indicator',
  length: 4,
});
