import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.7 PSS Fields
 * 
 * HL7 v2.7 PSS field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * PSS.1 - Provider Product/Service Section Number
 */
export const PSS_1 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PSS.1",
  "version": "2.7",
  "description": "Provider Product/Service Section Number",
  "type": "Field",
  "item": 1946,
  "table": "",
  "longName": "HL7Provider Product/Service Section Number"
});

/**
 * PSS.2 - Payer Product/Service Section Number
 */
export const PSS_2 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PSS.2",
  "version": "2.7",
  "description": "Payer Product/Service Section Number",
  "type": "Field",
  "item": 1947,
  "table": "",
  "longName": "HL7Payer Product/Service Section Number"
});

/**
 * PSS.3 - Product/Service Section Sequence Number
 */
export const PSS_3 = datatypes.SI.register(hl7v2Metadata, {
  "title": "PSS.3",
  "version": "2.7",
  "description": "Product/Service Section Sequence Number",
  "type": "Field",
  "item": 1948,
  "table": "",
  "longName": "HL7Product/Service Section Sequence Number",
  "length": 4
});

/**
 * PSS.4 - Billed Amount
 */
export const PSS_4 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PSS.4",
  "version": "2.7",
  "description": "Billed Amount",
  "type": "Field",
  "item": 1949,
  "table": "",
  "longName": "HL7Billed Amount"
});

/**
 * PSS.5 - Section Description or Heading
 */
export const PSS_5 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PSS.5",
  "version": "2.7",
  "description": "Section Description or Heading",
  "type": "Field",
  "item": 2043,
  "table": "",
  "longName": "HL7Section Description or Heading"
});
