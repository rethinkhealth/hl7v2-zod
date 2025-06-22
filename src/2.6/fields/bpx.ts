import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.6 BPX Fields
 *
 * HL7 v2.6 BPX field definitions
 * Each field consists of specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * BPX.1 - Set ID - BPX
 */
export const BPX_1 = datatypes.SI.register(hl7v2Metadata, {
  title: 'BPX.1',
  version: '2.6',
  description: 'Set ID - BPX',
  type: 'Field',
  item: 1714,
  table: '',
  longName: 'HL7Set ID - BPX',
  length: 4,
});

/**
 * BPX.2 - BP Dispense Status
 */
export const BPX_2 = datatypes.CWE.register(hl7v2Metadata, {
  title: 'BPX.2',
  version: '2.6',
  description: 'BP Dispense Status',
  type: 'Field',
  item: 1715,
  table: 'HL70510',
  longName: 'HL7BP Dispense Status',
  length: 250,
});

/**
 * BPX.3 - BP Status
 */
export const BPX_3 = datatypes.ID.register(hl7v2Metadata, {
  title: 'BPX.3',
  version: '2.6',
  description: 'BP Status',
  type: 'Field',
  item: 1716,
  table: 'HL70511',
  longName: 'HL7BP Status',
  length: 1,
});

/**
 * BPX.4 - BP Date/Time of Status
 */
export const BPX_4 = datatypes.DTM.register(hl7v2Metadata, {
  title: 'BPX.4',
  version: '2.6',
  description: 'BP Date/Time of Status',
  type: 'Field',
  item: 1717,
  table: '',
  longName: 'HL7BP Date/Time of Status',
  length: 24,
});

/**
 * BPX.5 - BC Donation ID
 */
export const BPX_5 = datatypes.ST.register(hl7v2Metadata, {
  title: 'BPX.5',
  version: '2.6',
  description: 'BC Donation ID',
  type: 'Field',
  item: 1718,
  table: '',
  longName: 'HL7BC Donation ID',
  length: 22,
});

/**
 * BPX.6 - BC Component
 */
export const BPX_6 = datatypes.CNE.register(hl7v2Metadata, {
  title: 'BPX.6',
  version: '2.6',
  description: 'BC Component',
  type: 'Field',
  item: 1719,
  table: 'HL79999',
  longName: 'HL7BC Component',
  length: 250,
});

/**
 * BPX.7 - BC Donation Type / Intended Use
 */
export const BPX_7 = datatypes.CNE.register(hl7v2Metadata, {
  title: 'BPX.7',
  version: '2.6',
  description: 'BC Donation Type / Intended Use',
  type: 'Field',
  item: 1720,
  table: 'HL79999',
  longName: 'HL7BC Donation Type / Intended Use',
  length: 250,
});

/**
 * BPX.8 - CP Commercial Product
 */
export const BPX_8 = datatypes.CWE.register(hl7v2Metadata, {
  title: 'BPX.8',
  version: '2.6',
  description: 'CP Commercial Product',
  type: 'Field',
  item: 1721,
  table: 'HL70512',
  longName: 'HL7CP Commercial Product',
  length: 250,
});

/**
 * BPX.9 - CP Manufacturer
 */
export const BPX_9 = datatypes.XON.register(hl7v2Metadata, {
  title: 'BPX.9',
  version: '2.6',
  description: 'CP Manufacturer',
  type: 'Field',
  item: 1722,
  table: '',
  longName: 'HL7CP Manufacturer',
  length: 250,
});

/**
 * BPX.10 - CP Lot Number
 */
export const BPX_10 = datatypes.ST.register(hl7v2Metadata, {
  title: 'BPX.10',
  version: '2.6',
  description: 'CP Lot Number',
  type: 'Field',
  item: 1723,
  table: '',
  longName: 'HL7CP Lot Number',
  length: 22,
});

/**
 * BPX.11 - BP Blood Group
 */
export const BPX_11 = datatypes.CNE.register(hl7v2Metadata, {
  title: 'BPX.11',
  version: '2.6',
  description: 'BP Blood Group',
  type: 'Field',
  item: 1724,
  table: 'HL79999',
  longName: 'HL7BP Blood Group',
  length: 250,
});

/**
 * BPX.12 - BC Special Testing
 */
export const BPX_12 = datatypes.CNE.register(hl7v2Metadata, {
  title: 'BPX.12',
  version: '2.6',
  description: 'BC Special Testing',
  type: 'Field',
  item: 1725,
  table: 'HL79999',
  longName: 'HL7BC Special Testing',
  length: 250,
});

/**
 * BPX.13 - BP Expiration Date/Time
 */
export const BPX_13 = datatypes.DTM.register(hl7v2Metadata, {
  title: 'BPX.13',
  version: '2.6',
  description: 'BP Expiration Date/Time',
  type: 'Field',
  item: 1726,
  table: '',
  longName: 'HL7BP Expiration Date/Time',
  length: 24,
});

/**
 * BPX.14 - BP Quantity
 */
export const BPX_14 = datatypes.NM.register(hl7v2Metadata, {
  title: 'BPX.14',
  version: '2.6',
  description: 'BP Quantity',
  type: 'Field',
  item: 1727,
  table: '',
  longName: 'HL7BP Quantity',
  length: 5,
});

/**
 * BPX.15 - BP Amount
 */
export const BPX_15 = datatypes.NM.register(hl7v2Metadata, {
  title: 'BPX.15',
  version: '2.6',
  description: 'BP Amount',
  type: 'Field',
  item: 1728,
  table: '',
  longName: 'HL7BP Amount',
  length: 5,
});

/**
 * BPX.16 - BP Units
 */
export const BPX_16 = datatypes.CWE.register(hl7v2Metadata, {
  title: 'BPX.16',
  version: '2.6',
  description: 'BP Units',
  type: 'Field',
  item: 1729,
  table: 'HL79999',
  longName: 'HL7BP Units',
  length: 250,
});

/**
 * BPX.17 - BP Unique ID
 */
export const BPX_17 = datatypes.ST.register(hl7v2Metadata, {
  title: 'BPX.17',
  version: '2.6',
  description: 'BP Unique ID',
  type: 'Field',
  item: 1730,
  table: '',
  longName: 'HL7BP Unique ID',
  length: 22,
});

/**
 * BPX.18 - BP Actual Dispensed To Location
 */
export const BPX_18 = datatypes.ST.register(hl7v2Metadata, {
  title: 'BPX.18',
  version: '2.6',
  description: 'BP Actual Dispensed To Location',
  type: 'Field',
  item: 1731,
  table: '',
  longName: 'HL7BP Actual Dispensed To Location',
  length: 80,
});

/**
 * BPX.19 - BP Actual Dispensed To Address
 */
export const BPX_19 = datatypes.XAD.register(hl7v2Metadata, {
  title: 'BPX.19',
  version: '2.6',
  description: 'BP Actual Dispensed To Address',
  type: 'Field',
  item: 1732,
  table: '',
  longName: 'HL7BP Actual Dispensed To Address',
  length: 250,
});

/**
 * BPX.20 - BP Dispensed to Receiver
 */
export const BPX_20 = datatypes.XCN.register(hl7v2Metadata, {
  title: 'BPX.20',
  version: '2.6',
  description: 'BP Dispensed to Receiver',
  type: 'Field',
  item: 1733,
  table: '',
  longName: 'HL7BP Dispensed to Receiver',
  length: 250,
});

/**
 * BPX.21 - BP Dispensing Individual
 */
export const BPX_21 = datatypes.XCN.register(hl7v2Metadata, {
  title: 'BPX.21',
  version: '2.6',
  description: 'BP Dispensing Individual',
  type: 'Field',
  item: 1734,
  table: '',
  longName: 'HL7BP Dispensing Individual',
  length: 250,
});
