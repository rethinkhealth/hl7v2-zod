
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.6 PYE Fields
 * 
 * HL7 v2.6 PYE field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * PYE.1 - Set ID - PYE
 */
export const PYE_1 = datatypes.SI.register(hl7v2Metadata, {
  "title": "PYE.1",
  "version": "2.6",
  "description": "Set ID - PYE",
  "type": "Field",
  "item": 1939,
  "table": "",
  "longName": "HL7Set ID - PYE",
  "length": 4
});

/**
 * PYE.2 - Payee Type
 */
export const PYE_2 = datatypes.IS.register(hl7v2Metadata, {
  "title": "PYE.2",
  "version": "2.6",
  "description": "Payee Type",
  "type": "Field",
  "item": 1940,
  "table": "HL70557",
  "longName": "HL7Payee Type",
  "length": 6
});

/**
 * PYE.3 - Payee Relationship to Invoice (Patient)
 */
export const PYE_3 = datatypes.IS.register(hl7v2Metadata, {
  "title": "PYE.3",
  "version": "2.6",
  "description": "Payee Relationship to Invoice (Patient)",
  "type": "Field",
  "item": 1941,
  "table": "HL70558",
  "longName": "HL7Payee Relationship to Invoice (Patient)",
  "length": 2
});

/**
 * PYE.4 - Payee Identification List
 */
export const PYE_4 = datatypes.XON.register(hl7v2Metadata, {
  "title": "PYE.4",
  "version": "2.6",
  "description": "Payee Identification List",
  "type": "Field",
  "item": 1942,
  "table": "",
  "longName": "HL7Payee Identification List",
  "length": 183
});

/**
 * PYE.5 - Payee Person Name
 */
export const PYE_5 = datatypes.XPN.register(hl7v2Metadata, {
  "title": "PYE.5",
  "version": "2.6",
  "description": "Payee Person Name",
  "type": "Field",
  "item": 1943,
  "table": "",
  "longName": "HL7Payee Person Name",
  "length": 466
});

/**
 * PYE.6 - Payee Address
 */
export const PYE_6 = datatypes.XAD.register(hl7v2Metadata, {
  "title": "PYE.6",
  "version": "2.6",
  "description": "Payee Address",
  "type": "Field",
  "item": 1944,
  "table": "",
  "longName": "HL7Payee Address",
  "length": 235
});

/**
 * PYE.7 - Payment Method
 */
export const PYE_7 = datatypes.IS.register(hl7v2Metadata, {
  "title": "PYE.7",
  "version": "2.6",
  "description": "Payment Method",
  "type": "Field",
  "item": 1945,
  "table": "HL70570",
  "longName": "HL7Payment Method",
  "length": 80
});
