import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.5 CM0 Fields
 * 
 * HL7 v2.5 CM0 field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * CM0.1 - Set ID - CM0
 */
export const CM0_1 = datatypes.SI.register(hl7v2Metadata, {
  "title": "CM0.1",
  "version": "2.5",
  "description": "Set ID - CM0",
  "type": "Field",
  "item": 1010,
  "table": "",
  "longName": "HL7Set ID - CM0",
  "length": 4
});

/**
 * CM0.2 - Sponsor Study ID
 */
export const CM0_2 = datatypes.ST.register(hl7v2Metadata, {
  "title": "CM0.2",
  "version": "2.5",
  "description": "Sponsor Study ID",
  "type": "Field",
  "item": 1011,
  "table": "",
  "longName": "HL7Sponsor Study ID",
  "length": 60
});

/**
 * CM0.3 - Alternate Study ID
 */
export const CM0_3 = datatypes.ST.register(hl7v2Metadata, {
  "title": "CM0.3",
  "version": "2.5",
  "description": "Alternate Study ID",
  "type": "Field",
  "item": 1036,
  "table": "",
  "longName": "HL7Alternate Study ID",
  "length": 60
});

/**
 * CM0.4 - Title of Study
 */
export const CM0_4 = datatypes.ST.register(hl7v2Metadata, {
  "title": "CM0.4",
  "version": "2.5",
  "description": "Title of Study",
  "type": "Field",
  "item": 1013,
  "table": "",
  "longName": "HL7Title of Study",
  "length": 300
});

/**
 * CM0.5 - Chairman of Study
 */
export const CM0_5 = datatypes.XCN.register(hl7v2Metadata, {
  "title": "CM0.5",
  "version": "2.5",
  "description": "Chairman of Study",
  "type": "Field",
  "item": 1014,
  "table": "",
  "longName": "HL7Chairman of Study",
  "length": 250
});

/**
 * CM0.6 - Last IRB Approval Date
 */
export const CM0_6 = datatypes.DT.register(hl7v2Metadata, {
  "title": "CM0.6",
  "version": "2.5",
  "description": "Last IRB Approval Date",
  "type": "Field",
  "item": 1015,
  "table": "",
  "longName": "HL7Last IRB Approval Date",
  "length": 8
});

/**
 * CM0.7 - Total Accrual to Date
 */
export const CM0_7 = datatypes.NM.register(hl7v2Metadata, {
  "title": "CM0.7",
  "version": "2.5",
  "description": "Total Accrual to Date",
  "type": "Field",
  "item": 1016,
  "table": "",
  "longName": "HL7Total Accrual to Date",
  "length": 8
});

/**
 * CM0.8 - Last Accrual Date
 */
export const CM0_8 = datatypes.DT.register(hl7v2Metadata, {
  "title": "CM0.8",
  "version": "2.5",
  "description": "Last Accrual Date",
  "type": "Field",
  "item": 1017,
  "table": "",
  "longName": "HL7Last Accrual Date",
  "length": 8
});

/**
 * CM0.9 - Contact for Study
 */
export const CM0_9 = datatypes.XCN.register(hl7v2Metadata, {
  "title": "CM0.9",
  "version": "2.5",
  "description": "Contact for Study",
  "type": "Field",
  "item": 1018,
  "table": "",
  "longName": "HL7Contact for Study",
  "length": 250
});

/**
 * CM0.10 - Contact's Telephone Number
 */
export const CM0_10 = datatypes.XTN.register(hl7v2Metadata, {
  "title": "CM0.10",
  "version": "2.5",
  "description": "Contact's Telephone Number",
  "type": "Field",
  "item": 1019,
  "table": "",
  "longName": "HL7Contact's Telephone Number",
  "length": 250
});

/**
 * CM0.11 - Contact's Address
 */
export const CM0_11 = datatypes.XAD.register(hl7v2Metadata, {
  "title": "CM0.11",
  "version": "2.5",
  "description": "Contact's Address",
  "type": "Field",
  "item": 1020,
  "table": "",
  "longName": "HL7Contact's Address",
  "length": 250
});
