import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.5 SUR_P09 Message
 * 
 * HL7 v2.5 SUR_P09 message definition
 * Contains segment definitions and constraints for the SUR_P09 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * SUR_P09.PRODUCT group schema
 * Defines the structure and validation rules for the SUR_P09.PRODUCT group
 */
export const surP09ProductSchema = z.object({
  "PSH": segments.pshSchema,
  "PDC": segments.pdcSchema
}).register(hl7v2Metadata, {
  title: "SUR_P09.PRODUCT",
  version: "2.5",
  description: "HL7 v2.5 SUR_P09.PRODUCT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the SUR_P09.PRODUCT schema
 */
export type SUR_P09_PRODUCT = z.infer<typeof surP09ProductSchema>;

/**
 * SUR_P09.FACILITY_DETAIL group schema
 * Defines the structure and validation rules for the SUR_P09.FACILITY_DETAIL group
 */
export const surP09FacilityDetailSchema = z.object({
  "FAC": segments.facSchema,
  "PDC": segments.pdcSchema,
  "NTE": segments.nteSchema
}).register(hl7v2Metadata, {
  title: "SUR_P09.FACILITY_DETAIL",
  version: "2.5",
  description: "HL7 v2.5 SUR_P09.FACILITY_DETAIL group",
  type: "Group"
});

/**
 * TypeScript type inferred from the SUR_P09.FACILITY_DETAIL schema
 */
export type SUR_P09_FACILITY_DETAIL = z.infer<typeof surP09FacilityDetailSchema>;

/**
 * SUR_P09.FACILITY group schema
 * Defines the structure and validation rules for the SUR_P09.FACILITY group
 */
export const surP09FacilitySchema = z.object({
  "FAC": segments.facSchema,
  "PRODUCT": z.array(surP09ProductSchema),
  "PSH": segments.pshSchema,
  "FACILITY_DETAIL": z.array(surP09FacilityDetailSchema),
  "ED": segments.edSchema
}).register(hl7v2Metadata, {
  title: "SUR_P09.FACILITY",
  version: "2.5",
  description: "HL7 v2.5 SUR_P09.FACILITY group",
  type: "Group"
});

/**
 * TypeScript type inferred from the SUR_P09.FACILITY schema
 */
export type SUR_P09_FACILITY = z.infer<typeof surP09FacilitySchema>;

/**
 * SUR_P09 message schema
 * Defines the structure and validation rules for the SUR_P09 message
 */
export const sur_p09Schema = z.object({
  "MSH": segments.mshSchema,
  "FACILITY": z.array(surP09FacilitySchema)
}).register(hl7v2Metadata, {
  title: "SUR_P09",
  version: "2.5",
  description: "HL7 v2.5 SUR_P09 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the SUR_P09 schema
 */
export type SUR_P09 = z.infer<typeof sur_p09Schema>;

/**
 * Default export for convenience
 */
export default sur_p09Schema;