import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.5 MSA Fields
 * 
 * HL7 v2.5 MSA field definitions
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
  "version": "2.5",
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
  "version": "2.5",
  "description": "Message Control ID",
  "type": "Field",
  "item": 10,
  "table": "",
  "longName": "HL7Message Control ID",
  "length": 20
});

/**
 * MSA.3 - Text Message
 */
export const MSA_3 = datatypes.ST.register(hl7v2Metadata, {
  "title": "MSA.3",
  "version": "2.5",
  "description": "Text Message",
  "type": "Field",
  "item": 20,
  "table": "",
  "longName": "HL7Text Message",
  "length": 80
});

/**
 * MSA.4 - Expected Sequence Number
 */
export const MSA_4 = datatypes.NM.register(hl7v2Metadata, {
  "title": "MSA.4",
  "version": "2.5",
  "description": "Expected Sequence Number",
  "type": "Field",
  "item": 21,
  "table": "",
  "longName": "HL7Expected Sequence Number",
  "length": 15
});

/**
 * MSA.6 - Error Condition
 */
export const MSA_6 = datatypes.ST.register(hl7v2Metadata, {
  "title": "MSA.6",
  "version": "2.5",
  "description": "Error Condition",
  "type": "Field",
  "item": 23,
  "table": "HL70357",
  "longName": "HL7Error Condition",
  "length": 250
});
