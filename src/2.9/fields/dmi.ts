import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.9 DMI Fields
 * 
 * HL7 v2.9 DMI field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * DMI.1 - Diagnostic Related Group
 */
export const DMI_1 = datatypes.CNE.register(hl7v2Metadata, {
  "title": "DMI.1",
  "version": "2.9",
  "description": "Diagnostic Related Group",
  "type": "Field",
  "item": 382,
  "table": "HL70055",
  "longName": "HL7Diagnostic Related Group"
});

/**
 * DMI.2 - Major Diagnostic Category
 */
export const DMI_2 = datatypes.CNE.register(hl7v2Metadata, {
  "title": "DMI.2",
  "version": "2.9",
  "description": "Major Diagnostic Category",
  "type": "Field",
  "item": 381,
  "table": "HL70118",
  "longName": "HL7Major Diagnostic Category"
});

/**
 * DMI.3 - Lower and Upper Trim Points
 */
export const DMI_3 = datatypes.ST.register(hl7v2Metadata, {
  "title": "DMI.3",
  "version": "2.9",
  "description": "Lower and Upper Trim Points",
  "type": "Field",
  "item": 2231,
  "table": "",
  "longName": "HL7Lower and Upper Trim Points"
});

/**
 * DMI.4 - Average Length of Stay
 */
export const DMI_4 = datatypes.NM.register(hl7v2Metadata, {
  "title": "DMI.4",
  "version": "2.9",
  "description": "Average Length of Stay",
  "type": "Field",
  "item": 2232,
  "table": "",
  "longName": "HL7Average Length of Stay"
});

/**
 * DMI.5 - Relative Weight
 */
export const DMI_5 = datatypes.NM.register(hl7v2Metadata, {
  "title": "DMI.5",
  "version": "2.9",
  "description": "Relative Weight",
  "type": "Field",
  "item": 2233,
  "table": "",
  "longName": "HL7Relative Weight"
});
