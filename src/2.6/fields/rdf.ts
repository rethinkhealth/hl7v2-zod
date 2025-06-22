import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.6 RDF Fields
 *
 * HL7 v2.6 RDF field definitions
 * Each field consists of specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * RDF.1 - Number of Columns per Row
 */
export const RDF_1 = datatypes.NM.register(hl7v2Metadata, {
  title: 'RDF.1',
  version: '2.6',
  description: 'Number of Columns per Row',
  type: 'Field',
  item: 701,
  table: '',
  longName: 'HL7Number of Columns per Row',
  length: 3,
});

/**
 * RDF.2 - Column Description
 */
export const RDF_2 = datatypes.RCD.register(hl7v2Metadata, {
  title: 'RDF.2',
  version: '2.6',
  description: 'Column Description',
  type: 'Field',
  item: 702,
  table: 'HL70440',
  longName: 'HL7Column Description',
  length: 40,
});
