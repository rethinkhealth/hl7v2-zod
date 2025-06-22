import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.6 RPI_I04 Message
 * 
 * HL7 v2.6 RPI_I04 message definition
 * Contains segment definitions and constraints for the RPI_I04 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * RPI_I04.PROVIDER group schema
 * Defines the structure and validation rules for the RPI_I04.PROVIDER group
 */
export const rpiI04ProviderSchema = z.object({
  "PRD": segments.prdSchema,
  "CTD": z.array(segments.ctdSchema).optional()
}).register(hl7v2Metadata, {
  title: "RPI_I04.PROVIDER",
  version: "2.6",
  description: "HL7 v2.6 RPI_I04.PROVIDER group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RPI_I04.PROVIDER schema
 */
export type RPI_I04_PROVIDER = z.infer<typeof rpiI04ProviderSchema>;

/**
 * RPI_I04.INSURANCE group schema
 * Defines the structure and validation rules for the RPI_I04.INSURANCE group
 */
export const rpiI04InsuranceSchema = z.object({
  "IN1": segments.in1Schema,
  "IN2": segments.in2Schema.optional(),
  "IN3": segments.in3Schema.optional()
}).register(hl7v2Metadata, {
  title: "RPI_I04.INSURANCE",
  version: "2.6",
  description: "HL7 v2.6 RPI_I04.INSURANCE group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RPI_I04.INSURANCE schema
 */
export type RPI_I04_INSURANCE = z.infer<typeof rpiI04InsuranceSchema>;

/**
 * RPI_I04.GUARANTOR_INSURANCE group schema
 * Defines the structure and validation rules for the RPI_I04.GUARANTOR_INSURANCE group
 */
export const rpiI04GuarantorInsuranceSchema = z.object({
  "GT1": z.array(segments.gt1Schema).optional(),
  "INSURANCE": z.array(rpiI04InsuranceSchema)
}).register(hl7v2Metadata, {
  title: "RPI_I04.GUARANTOR_INSURANCE",
  version: "2.6",
  description: "HL7 v2.6 RPI_I04.GUARANTOR_INSURANCE group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RPI_I04.GUARANTOR_INSURANCE schema
 */
export type RPI_I04_GUARANTOR_INSURANCE = z.infer<typeof rpiI04GuarantorInsuranceSchema>;

/**
 * RPI_I04 message schema
 * Defines the structure and validation rules for the RPI_I04 message
 */
export const rpi_i04Schema = z.object({
  "MSH": segments.mshSchema,
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "MSA": segments.msaSchema,
  "PROVIDER": z.array(rpiI04ProviderSchema),
  "PID": segments.pidSchema,
  "NK1": z.array(segments.nk1Schema).optional(),
  "GUARANTOR_INSURANCE": rpiI04GuarantorInsuranceSchema.optional(),
  "NTE": z.array(segments.nteSchema).optional()
}).register(hl7v2Metadata, {
  title: "RPI_I04",
  version: "2.6",
  description: "HL7 v2.6 RPI_I04 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the RPI_I04 schema
 */
export type RPI_I04 = z.infer<typeof rpi_i04Schema>;

/**
 * Default export for convenience
 */
export default rpi_i04Schema;