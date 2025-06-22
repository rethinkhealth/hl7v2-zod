import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.8 PSG Fields
 * 
 * HL7 v2.8 PSG field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * PSG.1 - Provider Product/Service Group Number
 */
export const PSG_1 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PSG.1",
  "version": "2.8",
  "description": "Provider Product/Service Group Number",
  "type": "Field",
  "item": 1950,
  "table": "",
  "longName": "HL7Provider Product/Service Group Number"
});

/**
 * PSG.2 - Payer Product/Service Group Number
 */
export const PSG_2 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PSG.2",
  "version": "2.8",
  "description": "Payer Product/Service Group Number",
  "type": "Field",
  "item": 1951,
  "table": "",
  "longName": "HL7Payer Product/Service Group Number"
});

/**
 * PSG.3 - Product/Service Group Sequence Number
 */
export const PSG_3 = datatypes.SI.register(hl7v2Metadata, {
  "title": "PSG.3",
  "version": "2.8",
  "description": "Product/Service Group Sequence Number",
  "type": "Field",
  "item": 1952,
  "table": "",
  "longName": "HL7Product/Service Group Sequence Number",
  "length": 4
});

/**
 * PSG.4 - Adjudicate as Group
 */
export const PSG_4 = datatypes.ID.register(hl7v2Metadata, {
  "title": "PSG.4",
  "version": "2.8",
  "description": "Adjudicate as Group",
  "type": "Field",
  "item": 1953,
  "table": "HL70136",
  "longName": "HL7Adjudicate as Group",
  "length": 1
});

/**
 * PSG.5 - Product/Service Group Billed Amount
 */
export const PSG_5 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PSG.5",
  "version": "2.8",
  "description": "Product/Service Group Billed Amount",
  "type": "Field",
  "item": 1954,
  "table": "",
  "longName": "HL7Product/Service Group Billed Amount"
});

/**
 * PSG.6 - Product/Service Group Description
 */
export const PSG_6 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PSG.6",
  "version": "2.8",
  "description": "Product/Service Group Description",
  "type": "Field",
  "item": 2044,
  "table": "",
  "longName": "HL7Product/Service Group Description"
});
