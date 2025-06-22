import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.8 MSA Fields
 * 
 * HL7 v2.8 MSA field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * MSA.1 - Acknowledgment Code
 */
export const MSA_1 = datatypes.ID.register(hl7v2Metadata, {
  "title": "MSA.1",
  "version": "2.8",
  "description": "Acknowledgment Code",
  "type": "Field",
  "item": 18,
  "table": "HL70008",
  "longName": "HL7Acknowledgment Code",
  "length": 2
});

/**
 * MSA.2 - Message Control ID
 */
export const MSA_2 = datatypes.ST.register(hl7v2Metadata, {
  "title": "MSA.2",
  "version": "2.8",
  "description": "Message Control ID",
  "type": "Field",
  "item": 10,
  "table": "",
  "longName": "HL7Message Control ID",
  "length": 199
});

/**
 * MSA.4 - Expected Sequence Number
 */
export const MSA_4 = datatypes.NM.register(hl7v2Metadata, {
  "title": "MSA.4",
  "version": "2.8",
  "description": "Expected Sequence Number",
  "type": "Field",
  "item": 21,
  "table": "",
  "longName": "HL7Expected Sequence Number"
});

/**
 * MSA.7 - Message Waiting Number
 */
export const MSA_7 = datatypes.NM.register(hl7v2Metadata, {
  "title": "MSA.7",
  "version": "2.8",
  "description": "Message Waiting Number",
  "type": "Field",
  "item": 1827,
  "table": "",
  "longName": "HL7Message Waiting Number"
});

/**
 * MSA.8 - Message Waiting Priority
 */
export const MSA_8 = datatypes.ID.register(hl7v2Metadata, {
  "title": "MSA.8",
  "version": "2.8",
  "description": "Message Waiting Priority",
  "type": "Field",
  "item": 1828,
  "table": "HL70520",
  "longName": "HL7Message Waiting Priority",
  "length": 1
});
