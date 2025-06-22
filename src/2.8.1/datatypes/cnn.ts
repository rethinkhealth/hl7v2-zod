import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import { SimpleTypes } from './simpletypes';
import { MixedTypes } from './mixedtypes';

/**
 * HL7 v2.8 CNN Composite Data Type
 * 
 * HL7 v2.8 CNN composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * CNN.1 - ID Number
 */
export const CNN_1 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "CNN.1",
  "version": "2.8",
  "description": "ID Number",
  "type": "DataType",
  "optionality": "O"
});

/**
 * CNN.2 - Family Name
 */
export const CNN_2 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "CNN.2",
  "version": "2.8",
  "description": "Family Name",
  "type": "DataType",
  "optionality": "O"
});

/**
 * CNN.3 - Given Name
 */
export const CNN_3 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "CNN.3",
  "version": "2.8",
  "description": "Given Name",
  "type": "DataType",
  "optionality": "O"
});

/**
 * CNN.4 - Second and Further Given Names or Initials Thereof
 */
export const CNN_4 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "CNN.4",
  "version": "2.8",
  "description": "Second and Further Given Names or Initials Thereof",
  "type": "DataType",
  "optionality": "O"
});

/**
 * CNN.5 - Suffix (e.g., JR or III)
 */
export const CNN_5 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "CNN.5",
  "version": "2.8",
  "description": "Suffix (e.g., JR or III)",
  "type": "DataType",
  "optionality": "O"
});

/**
 * CNN.6 - Prefix (e.g., DR)
 */
export const CNN_6 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "CNN.6",
  "version": "2.8",
  "description": "Prefix (e.g., DR)",
  "type": "DataType",
  "optionality": "O"
});

/**
 * CNN.7 - Degree (e.g., MD)
 */
export const CNN_7 = SimpleTypes.IS.optional().register(hl7v2Metadata, {
  "title": "CNN.7",
  "version": "2.8",
  "description": "Degree (e.g., MD)",
  "type": "DataType",
  "optionality": "O"
});

/**
 * CNN.8 - Source Table
 */
export const CNN_8 = SimpleTypes.IS.optional().register(hl7v2Metadata, {
  "title": "CNN.8",
  "version": "2.8",
  "description": "Source Table",
  "type": "DataType",
  "optionality": "O"
});

/**
 * CNN.9 - Assigning Authority   - Namespace ID
 */
export const CNN_9 = SimpleTypes.IS.optional().register(hl7v2Metadata, {
  "title": "CNN.9",
  "version": "2.8",
  "description": "Assigning Authority   - Namespace ID",
  "type": "DataType",
  "optionality": "O"
});

/**
 * CNN.10 - Assigning Authority  - Universal ID
 */
export const CNN_10 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "CNN.10",
  "version": "2.8",
  "description": "Assigning Authority  - Universal ID",
  "type": "DataType",
  "optionality": "O"
});

/**
 * CNN.11 - Assigning Authority  - Universal ID Type
 */
export const CNN_11 = SimpleTypes.ID.max(6).optional().register(hl7v2Metadata, {
  "title": "CNN.11",
  "version": "2.8",
  "description": "Assigning Authority  - Universal ID Type",
  "type": "DataType",
  "length": 6,
  "optionality": "O"
});

/**
 * CNN - HL7 v2.8 CNN composite data type
 * 
 * Components:
 * - CNN.1: ID Number (ST)
 * - CNN.2: Family Name (ST)
 * - CNN.3: Given Name (ST)
 * - CNN.4: Second and Further Given Names or Initials Thereof (ST)
 * - CNN.5: Suffix (e.g., JR or III) (ST)
 * - CNN.6: Prefix (e.g., DR) (ST)
 * - CNN.7: Degree (e.g., MD) (IS)
 * - CNN.8: Source Table (IS)
 * - CNN.9: Assigning Authority   - Namespace ID (IS)
 * - CNN.10: Assigning Authority  - Universal ID (ST)
 * - CNN.11: Assigning Authority  - Universal ID Type (ID)
 */
export const CNN = z.object({
  [`1`]: CNN_1,
  [`2`]: CNN_2,
  [`3`]: CNN_3,
  [`4`]: CNN_4,
  [`5`]: CNN_5,
  [`6`]: CNN_6,
  [`7`]: CNN_7,
  [`8`]: CNN_8,
  [`9`]: CNN_9,
  [`10`]: CNN_10,
  [`11`]: CNN_11
}).register(hl7v2Metadata, {
  title: 'CNN',
  version: '2.8',
  description: 'HL7 v2.8 CNN composite data type'
});

/**
 * Type definition for CNN
 */
export type CNN = z.infer<typeof CNN>;
