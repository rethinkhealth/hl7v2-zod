import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.8 RPI_I01 Message
 * 
 * HL7 v2.8 RPI_I01 message definition
 * Contains segment definitions and constraints for the RPI_I01 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * RPI_I01.PROVIDER group schema
 * Defines the structure and validation rules for the RPI_I01.PROVIDER group
 */
export const rpiI01ProviderSchema = z.object({
  "PRD": segments.prdSchema,
  "CTD": z.array(segments.ctdSchema).optional()
}).register(hl7v2Metadata, {
  title: "RPI_I01.PROVIDER",
  version: "2.8",
  description: "HL7 v2.8 RPI_I01.PROVIDER group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RPI_I01.PROVIDER schema
 */
export type RPI_I01_PROVIDER = z.infer<typeof rpiI01ProviderSchema>;

/**
 * RPI_I01.INSURANCE group schema
 * Defines the structure and validation rules for the RPI_I01.INSURANCE group
 */
export const rpiI01InsuranceSchema = z.object({
  "IN1": segments.in1Schema,
  "IN2": segments.in2Schema.optional(),
  "IN3": segments.in3Schema.optional()
}).register(hl7v2Metadata, {
  title: "RPI_I01.INSURANCE",
  version: "2.8",
  description: "HL7 v2.8 RPI_I01.INSURANCE group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RPI_I01.INSURANCE schema
 */
export type RPI_I01_INSURANCE = z.infer<typeof rpiI01InsuranceSchema>;

/**
 * RPI_I01.GUARANTOR_INSURANCE group schema
 * Defines the structure and validation rules for the RPI_I01.GUARANTOR_INSURANCE group
 */
export const rpiI01GuarantorInsuranceSchema = z.object({
  "GT1": z.array(segments.gt1Schema).optional(),
  "INSURANCE": z.array(rpiI01InsuranceSchema)
}).register(hl7v2Metadata, {
  title: "RPI_I01.GUARANTOR_INSURANCE",
  version: "2.8",
  description: "HL7 v2.8 RPI_I01.GUARANTOR_INSURANCE group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RPI_I01.GUARANTOR_INSURANCE schema
 */
export type RPI_I01_GUARANTOR_INSURANCE = z.infer<typeof rpiI01GuarantorInsuranceSchema>;

/**
 * RPI_I01 message schema
 * Defines the structure and validation rules for the RPI_I01 message
 */
export const rpi_i01Schema = z.object({
  "MSH": segments.mshSchema,
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "MSA": segments.msaSchema,
  "PROVIDER": z.array(rpiI01ProviderSchema),
  "PID": segments.pidSchema,
  "NK1": z.array(segments.nk1Schema).optional(),
  "GUARANTOR_INSURANCE": rpiI01GuarantorInsuranceSchema.optional(),
  "NTE": z.array(segments.nteSchema).optional()
}).register(hl7v2Metadata, {
  title: "RPI_I01",
  version: "2.8",
  description: "HL7 v2.8 RPI_I01 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the RPI_I01 schema
 */
export type RPI_I01 = z.infer<typeof rpi_i01Schema>;

/**
 * Default export for convenience
 */
export default rpi_i01Schema;