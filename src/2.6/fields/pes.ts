import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.6 PES Fields
 *
 * HL7 v2.6 PES field definitions
 * Each field consists of specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * PES.1 - Sender Organization Name
 */
export const PES_1 = datatypes.XON.register(hl7v2Metadata, {
  title: 'PES.1',
  version: '2.6',
  description: 'Sender Organization Name',
  type: 'Field',
  item: 1059,
  table: '',
  longName: 'HL7Sender Organization Name',
  length: 567,
});

/**
 * PES.2 - Sender Individual Name
 */
export const PES_2 = datatypes.XCN.register(hl7v2Metadata, {
  title: 'PES.2',
  version: '2.6',
  description: 'Sender Individual Name',
  type: 'Field',
  item: 1060,
  table: '',
  longName: 'HL7Sender Individual Name',
  length: 3220,
});

/**
 * PES.3 - Sender Address
 */
export const PES_3 = datatypes.XAD.register(hl7v2Metadata, {
  title: 'PES.3',
  version: '2.6',
  description: 'Sender Address',
  type: 'Field',
  item: 1062,
  table: '',
  longName: 'HL7Sender Address',
  length: 2915,
});

/**
 * PES.4 - Sender Telephone
 */
export const PES_4 = datatypes.XTN.register(hl7v2Metadata, {
  title: 'PES.4',
  version: '2.6',
  description: 'Sender Telephone',
  type: 'Field',
  item: 1063,
  table: '',
  longName: 'HL7Sender Telephone',
  length: 2743,
});

/**
 * PES.5 - Sender Event Identifier
 */
export const PES_5 = datatypes.ST.register(hl7v2Metadata, {
  title: 'PES.5',
  version: '2.6',
  description: 'Sender Event Identifier',
  type: 'Field',
  item: 1064,
  table: '',
  longName: 'HL7Sender Event Identifier',
  length: 427,
});

/**
 * PES.6 - Sender Sequence Number
 */
export const PES_6 = datatypes.NM.register(hl7v2Metadata, {
  title: 'PES.6',
  version: '2.6',
  description: 'Sender Sequence Number',
  type: 'Field',
  item: 1065,
  table: '',
  longName: 'HL7Sender Sequence Number',
  length: 16,
});

/**
 * PES.7 - Sender Event Description
 */
export const PES_7 = datatypes.FT.register(hl7v2Metadata, {
  title: 'PES.7',
  version: '2.6',
  description: 'Sender Event Description',
  type: 'Field',
  item: 1066,
  table: '',
  longName: 'HL7Sender Event Description',
  length: 600,
});

/**
 * PES.8 - Sender Comment
 */
export const PES_8 = datatypes.FT.register(hl7v2Metadata, {
  title: 'PES.8',
  version: '2.6',
  description: 'Sender Comment',
  type: 'Field',
  item: 1067,
  table: '',
  longName: 'HL7Sender Comment',
  length: 600,
});

/**
 * PES.9 - Sender Aware Date/Time
 */
export const PES_9 = datatypes.DTM.register(hl7v2Metadata, {
  title: 'PES.9',
  version: '2.6',
  description: 'Sender Aware Date/Time',
  type: 'Field',
  item: 1068,
  table: '',
  longName: 'HL7Sender Aware Date/Time',
  length: 24,
});

/**
 * PES.10 - Event Report Date
 */
export const PES_10 = datatypes.DTM.register(hl7v2Metadata, {
  title: 'PES.10',
  version: '2.6',
  description: 'Event Report Date',
  type: 'Field',
  item: 1069,
  table: '',
  longName: 'HL7Event Report Date',
  length: 24,
});

/**
 * PES.11 - Event Report Timing/Type
 */
export const PES_11 = datatypes.ID.register(hl7v2Metadata, {
  title: 'PES.11',
  version: '2.6',
  description: 'Event Report Timing/Type',
  type: 'Field',
  item: 1070,
  table: 'HL70234',
  longName: 'HL7Event Report Timing/Type',
  length: 3,
});

/**
 * PES.12 - Event Report Source
 */
export const PES_12 = datatypes.ID.register(hl7v2Metadata, {
  title: 'PES.12',
  version: '2.6',
  description: 'Event Report Source',
  type: 'Field',
  item: 1071,
  table: 'HL70235',
  longName: 'HL7Event Report Source',
  length: 1,
});

/**
 * PES.13 - Event Reported To
 */
export const PES_13 = datatypes.ID.register(hl7v2Metadata, {
  title: 'PES.13',
  version: '2.6',
  description: 'Event Reported To',
  type: 'Field',
  item: 1072,
  table: 'HL70236',
  longName: 'HL7Event Reported To',
  length: 1,
});
