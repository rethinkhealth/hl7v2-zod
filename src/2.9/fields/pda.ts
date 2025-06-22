import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.9 PDA Fields
 * 
 * HL7 v2.9 PDA field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * PDA.1 - Death Cause Code
 */
export const PDA_1 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "PDA.1",
  "version": "2.9",
  "description": "Death Cause Code",
  "type": "Field",
  "item": 1574,
  "table": "",
  "longName": "HL7Death Cause Code"
});

/**
 * PDA.2 - Death Location
 */
export const PDA_2 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PDA.2",
  "version": "2.9",
  "description": "Death Location",
  "type": "Field",
  "item": 1575,
  "table": "",
  "longName": "HL7Death Location"
});

/**
 * PDA.3 - Death Certified Indicator
 */
export const PDA_3 = datatypes.ID.register(hl7v2Metadata, {
  "title": "PDA.3",
  "version": "2.9",
  "description": "Death Certified Indicator",
  "type": "Field",
  "item": 1576,
  "table": "HL70136",
  "longName": "HL7Death Certified Indicator",
  "length": 1
});

/**
 * PDA.4 - Death Certificate Signed Date/Time
 */
export const PDA_4 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "PDA.4",
  "version": "2.9",
  "description": "Death Certificate Signed Date/Time",
  "type": "Field",
  "item": 1577,
  "table": "",
  "longName": "HL7Death Certificate Signed Date/Time"
});

/**
 * PDA.5 - Death Certified By
 */
export const PDA_5 = datatypes.XCN.register(hl7v2Metadata, {
  "title": "PDA.5",
  "version": "2.9",
  "description": "Death Certified By",
  "type": "Field",
  "item": 1578,
  "table": "",
  "longName": "HL7Death Certified By"
});

/**
 * PDA.6 - Autopsy Indicator
 */
export const PDA_6 = datatypes.ID.register(hl7v2Metadata, {
  "title": "PDA.6",
  "version": "2.9",
  "description": "Autopsy Indicator",
  "type": "Field",
  "item": 1579,
  "table": "HL70136",
  "longName": "HL7Autopsy Indicator",
  "length": 1
});

/**
 * PDA.7 - Autopsy Start and End Date/Time
 */
export const PDA_7 = datatypes.DR.register(hl7v2Metadata, {
  "title": "PDA.7",
  "version": "2.9",
  "description": "Autopsy Start and End Date/Time",
  "type": "Field",
  "item": 1580,
  "table": "",
  "longName": "HL7Autopsy Start and End Date/Time"
});

/**
 * PDA.8 - Autopsy Performed By
 */
export const PDA_8 = datatypes.XCN.register(hl7v2Metadata, {
  "title": "PDA.8",
  "version": "2.9",
  "description": "Autopsy Performed By",
  "type": "Field",
  "item": 1581,
  "table": "",
  "longName": "HL7Autopsy Performed By"
});

/**
 * PDA.9 - Coroner Indicator
 */
export const PDA_9 = datatypes.ID.register(hl7v2Metadata, {
  "title": "PDA.9",
  "version": "2.9",
  "description": "Coroner Indicator",
  "type": "Field",
  "item": 1582,
  "table": "HL70136",
  "longName": "HL7Coroner Indicator",
  "length": 1
});
