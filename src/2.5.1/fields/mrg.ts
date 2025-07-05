
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.5 MRG Fields
 * 
 * HL7 v2.5 MRG field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * MRG.1 - Prior Patient Identifier List
 */
export const MRG_1 = datatypes.ST.register(hl7v2Metadata, {
  "title": "MRG.1",
  "version": "2.5",
  "description": "Prior Patient Identifier List",
  "type": "Field",
  "item": 211,
  "table": "",
  "longName": "HL7Prior Patient Identifier List",
  "length": 250
});

/**
 * MRG.2 - Prior Alternate Patient ID
 */
export const MRG_2 = datatypes.ST.register(hl7v2Metadata, {
  "title": "MRG.2",
  "version": "2.5",
  "description": "Prior Alternate Patient ID",
  "type": "Field",
  "item": 212,
  "table": "",
  "longName": "HL7Prior Alternate Patient ID",
  "length": 250
});

/**
 * MRG.3 - Prior Patient Account Number
 */
export const MRG_3 = datatypes.ST.register(hl7v2Metadata, {
  "title": "MRG.3",
  "version": "2.5",
  "description": "Prior Patient Account Number",
  "type": "Field",
  "item": 213,
  "table": "",
  "longName": "HL7Prior Patient Account Number",
  "length": 250
});

/**
 * MRG.4 - Prior Patient ID
 */
export const MRG_4 = datatypes.ST.register(hl7v2Metadata, {
  "title": "MRG.4",
  "version": "2.5",
  "description": "Prior Patient ID",
  "type": "Field",
  "item": 214,
  "table": "",
  "longName": "HL7Prior Patient ID",
  "length": 250
});

/**
 * MRG.5 - Prior Visit Number
 */
export const MRG_5 = datatypes.ST.register(hl7v2Metadata, {
  "title": "MRG.5",
  "version": "2.5",
  "description": "Prior Visit Number",
  "type": "Field",
  "item": 1279,
  "table": "",
  "longName": "HL7Prior Visit Number",
  "length": 250
});

/**
 * MRG.6 - Prior Alternate Visit ID
 */
export const MRG_6 = datatypes.ST.register(hl7v2Metadata, {
  "title": "MRG.6",
  "version": "2.5",
  "description": "Prior Alternate Visit ID",
  "type": "Field",
  "item": 1280,
  "table": "",
  "longName": "HL7Prior Alternate Visit ID",
  "length": 250
});

/**
 * MRG.7 - Prior Patient Name
 */
export const MRG_7 = datatypes.XPN.register(hl7v2Metadata, {
  "title": "MRG.7",
  "version": "2.5",
  "description": "Prior Patient Name",
  "type": "Field",
  "item": 1281,
  "table": "",
  "longName": "HL7Prior Patient Name",
  "length": 250
});
