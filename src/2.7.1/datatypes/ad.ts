import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import { SimpleTypes } from './simpletypes';
import { MixedTypes } from './mixedtypes';

/**
 * HL7 v2.7 AD Composite Data Type
 * 
 * HL7 v2.7 AD composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * AD.1 - Street Address
 */
export const AD_1 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "AD.1",
  "version": "2.7",
  "description": "Street Address",
  "type": "DataType",
  "optionality": "O"
});

/**
 * AD.2 - Other Designation
 */
export const AD_2 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "AD.2",
  "version": "2.7",
  "description": "Other Designation",
  "type": "DataType",
  "optionality": "O"
});

/**
 * AD.3 - City
 */
export const AD_3 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "AD.3",
  "version": "2.7",
  "description": "City",
  "type": "DataType",
  "optionality": "O"
});

/**
 * AD.4 - State or Province
 */
export const AD_4 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "AD.4",
  "version": "2.7",
  "description": "State or Province",
  "type": "DataType",
  "optionality": "O"
});

/**
 * AD.5 - Zip or Postal Code
 */
export const AD_5 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "AD.5",
  "version": "2.7",
  "description": "Zip or Postal Code",
  "type": "DataType",
  "optionality": "O"
});

/**
 * AD.6 - Country
 */
export const AD_6 = SimpleTypes.ID.max(3).optional().register(hl7v2Metadata, {
  "title": "AD.6",
  "version": "2.7",
  "description": "Country",
  "type": "DataType",
  "length": 3,
  "optionality": "O"
});

/**
 * AD.7 - Address Type
 */
export const AD_7 = SimpleTypes.ID.max(3).optional().register(hl7v2Metadata, {
  "title": "AD.7",
  "version": "2.7",
  "description": "Address Type",
  "type": "DataType",
  "length": 3,
  "optionality": "O"
});

/**
 * AD.8 - Other Geographic Designation
 */
export const AD_8 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "AD.8",
  "version": "2.7",
  "description": "Other Geographic Designation",
  "type": "DataType",
  "optionality": "O"
});

/**
 * AD - HL7 v2.7 AD composite data type
 * 
 * Components:
 * - AD.1: Street Address (ST)
 * - AD.2: Other Designation (ST)
 * - AD.3: City (ST)
 * - AD.4: State or Province (ST)
 * - AD.5: Zip or Postal Code (ST)
 * - AD.6: Country (ID)
 * - AD.7: Address Type (ID)
 * - AD.8: Other Geographic Designation (ST)
 */
export const AD = z.object({
  [`1`]: AD_1,
  [`2`]: AD_2,
  [`3`]: AD_3,
  [`4`]: AD_4,
  [`5`]: AD_5,
  [`6`]: AD_6,
  [`7`]: AD_7,
  [`8`]: AD_8
}).register(hl7v2Metadata, {
  title: 'AD',
  version: '2.7',
  description: 'HL7 v2.7 AD composite data type'
});

/**
 * Type definition for AD
 */
export type AD = z.infer<typeof AD>;
