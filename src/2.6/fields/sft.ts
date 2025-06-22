import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.6 SFT Fields
 * 
 * HL7 v2.6 SFT field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * SFT.1 - Software Vendor Organization
 */
export const SFT_1 = datatypes.XON.register(hl7v2Metadata, {
  "title": "SFT.1",
  "version": "2.6",
  "description": "Software Vendor Organization",
  "type": "Field",
  "item": 1834,
  "table": "",
  "longName": "HL7Software Vendor Organization",
  "length": 567
});

/**
 * SFT.2 - Software Certified Version or Release Number
 */
export const SFT_2 = datatypes.ST.register(hl7v2Metadata, {
  "title": "SFT.2",
  "version": "2.6",
  "description": "Software Certified Version or Release Number",
  "type": "Field",
  "item": 1835,
  "table": "",
  "longName": "HL7Software Certified Version or Release Number",
  "length": 15
});

/**
 * SFT.3 - Software Product Name
 */
export const SFT_3 = datatypes.ST.register(hl7v2Metadata, {
  "title": "SFT.3",
  "version": "2.6",
  "description": "Software Product Name",
  "type": "Field",
  "item": 1836,
  "table": "",
  "longName": "HL7Software Product Name",
  "length": 20
});

/**
 * SFT.4 - Software Binary ID
 */
export const SFT_4 = datatypes.ST.register(hl7v2Metadata, {
  "title": "SFT.4",
  "version": "2.6",
  "description": "Software Binary ID",
  "type": "Field",
  "item": 1837,
  "table": "",
  "longName": "HL7Software Binary ID",
  "length": 20
});

/**
 * SFT.5 - Software Product Information
 */
export const SFT_5 = datatypes.TX.register(hl7v2Metadata, {
  "title": "SFT.5",
  "version": "2.6",
  "description": "Software Product Information",
  "type": "Field",
  "item": 1838,
  "table": "",
  "longName": "HL7Software Product Information",
  "length": 1024
});

/**
 * SFT.6 - Software Install Date
 */
export const SFT_6 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "SFT.6",
  "version": "2.6",
  "description": "Software Install Date",
  "type": "Field",
  "item": 1839,
  "table": "",
  "longName": "HL7Software Install Date",
  "length": 24
});
