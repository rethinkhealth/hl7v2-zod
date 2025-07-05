import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.7 OSM_R26 Message
 *
 * HL7 v2.7 OSM_R26 message definition
 * Contains segment definitions and constraints for the OSM_R26 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * OSM_R26.SHIPPING_OBSERVATION group schema
 * Defines the structure and validation rules for the OSM_R26.SHIPPING_OBSERVATION group
 */
export const osmR26ShippingObservationSchema = z
  .object({
    OBX: segments.obxSchema,
    PRT: z.array(segments.prtSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "OSM_R26.SHIPPING_OBSERVATION",
    version: "2.7",
    description: "HL7 v2.7 OSM_R26.SHIPPING_OBSERVATION group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OSM_R26.SHIPPING_OBSERVATION schema
 */
export type OSM_R26_SHIPPING_OBSERVATION = z.infer<typeof osmR26ShippingObservationSchema>;

/**
 * OSM_R26.SPECIMEN_OBSERVATION group schema
 * Defines the structure and validation rules for the OSM_R26.SPECIMEN_OBSERVATION group
 */
export const osmR26SpecimenObservationSchema = z
  .object({
    OBX: segments.obxSchema,
    PRT: z.array(segments.prtSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "OSM_R26.SPECIMEN_OBSERVATION",
    version: "2.7",
    description: "HL7 v2.7 OSM_R26.SPECIMEN_OBSERVATION group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OSM_R26.SPECIMEN_OBSERVATION schema
 */
export type OSM_R26_SPECIMEN_OBSERVATION = z.infer<typeof osmR26SpecimenObservationSchema>;

/**
 * OSM_R26.CONTAINER_OBSERVATION group schema
 * Defines the structure and validation rules for the OSM_R26.CONTAINER_OBSERVATION group
 */
export const osmR26ContainerObservationSchema = z
  .object({
    OBX: segments.obxSchema,
    PRT: z.array(segments.prtSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "OSM_R26.CONTAINER_OBSERVATION",
    version: "2.7",
    description: "HL7 v2.7 OSM_R26.CONTAINER_OBSERVATION group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OSM_R26.CONTAINER_OBSERVATION schema
 */
export type OSM_R26_CONTAINER_OBSERVATION = z.infer<typeof osmR26ContainerObservationSchema>;

/**
 * OSM_R26.PATIENT_OBSERVATION group schema
 * Defines the structure and validation rules for the OSM_R26.PATIENT_OBSERVATION group
 */
export const osmR26PatientObservationSchema = z
  .object({
    OBX: segments.obxSchema,
    PRT: z.array(segments.prtSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "OSM_R26.PATIENT_OBSERVATION",
    version: "2.7",
    description: "HL7 v2.7 OSM_R26.PATIENT_OBSERVATION group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OSM_R26.PATIENT_OBSERVATION schema
 */
export type OSM_R26_PATIENT_OBSERVATION = z.infer<typeof osmR26PatientObservationSchema>;

/**
 * OSM_R26.PATIENT_VISIT_OBSERVATION group schema
 * Defines the structure and validation rules for the OSM_R26.PATIENT_VISIT_OBSERVATION group
 */
export const osmR26PatientVisitObservationSchema = z
  .object({
    OBX: segments.obxSchema,
    PRT: z.array(segments.prtSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "OSM_R26.PATIENT_VISIT_OBSERVATION",
    version: "2.7",
    description: "HL7 v2.7 OSM_R26.PATIENT_VISIT_OBSERVATION group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OSM_R26.PATIENT_VISIT_OBSERVATION schema
 */
export type OSM_R26_PATIENT_VISIT_OBSERVATION = z.infer<typeof osmR26PatientVisitObservationSchema>;

/**
 * OSM_R26.PATIENT_INFORMATION group schema
 * Defines the structure and validation rules for the OSM_R26.PATIENT_INFORMATION group
 */
export const osmR26PatientInformationSchema = z
  .object({
    PID: segments.pidSchema,
    PRT: z.array(segments.prtSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "OSM_R26.PATIENT_INFORMATION",
    version: "2.7",
    description: "HL7 v2.7 OSM_R26.PATIENT_INFORMATION group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OSM_R26.PATIENT_INFORMATION schema
 */
export type OSM_R26_PATIENT_INFORMATION = z.infer<typeof osmR26PatientInformationSchema>;

/**
 * OSM_R26.CONTAINER group schema
 * Defines the structure and validation rules for the OSM_R26.CONTAINER group
 */
export const osmR26ContainerSchema = z
  .object({
    SAC: segments.sacSchema,
    CONTAINER_OBSERVATION: z.array(osmR26ContainerObservationSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "OSM_R26.CONTAINER",
    version: "2.7",
    description: "HL7 v2.7 OSM_R26.CONTAINER group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OSM_R26.CONTAINER schema
 */
export type OSM_R26_CONTAINER = z.infer<typeof osmR26ContainerSchema>;

/**
 * OSM_R26.SUBJECT_PERSON_ANIMAL_IDENTIFICATION group schema
 * Defines the structure and validation rules for the OSM_R26.SUBJECT_PERSON_ANIMAL_IDENTIFICATION group
 */
export const osmR26SubjectPersonAnimalIdentificationSchema = z
  .object({
    PID: segments.pidSchema,
    PRT: z.array(segments.prtSchema).optional(),
    PATIENT_OBSERVATION: z.array(osmR26PatientObservationSchema).optional(),
    NK1: z.array(segments.nk1Schema).optional()
  })
  .register(hl7v2Metadata, {
    title: "OSM_R26.SUBJECT_PERSON_ANIMAL_IDENTIFICATION",
    version: "2.7",
    description: "HL7 v2.7 OSM_R26.SUBJECT_PERSON_ANIMAL_IDENTIFICATION group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OSM_R26.SUBJECT_PERSON_ANIMAL_IDENTIFICATION schema
 */
export type OSM_R26_SUBJECT_PERSON_ANIMAL_IDENTIFICATION = z.infer<
  typeof osmR26SubjectPersonAnimalIdentificationSchema
>;

/**
 * OSM_R26.SUBJECT_POPULATION_LOCATION_IDENTIFICATION group schema
 * Defines the structure and validation rules for the OSM_R26.SUBJECT_POPULATION_LOCATION_IDENTIFICATION group
 */
export const osmR26SubjectPopulationLocationIdentificationSchema = z
  .object({
    PV1: segments.pv1Schema,
    PRT: z.array(segments.prtSchema).optional(),
    PATIENT_VISIT_OBSERVATION: z.array(osmR26PatientVisitObservationSchema).optional(),
    PATIENT_INFORMATION: osmR26PatientInformationSchema.optional(),
    NK1: z.array(segments.nk1Schema).optional()
  })
  .register(hl7v2Metadata, {
    title: "OSM_R26.SUBJECT_POPULATION_LOCATION_IDENTIFICATION",
    version: "2.7",
    description: "HL7 v2.7 OSM_R26.SUBJECT_POPULATION_LOCATION_IDENTIFICATION group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OSM_R26.SUBJECT_POPULATION_LOCATION_IDENTIFICATION schema
 */
export type OSM_R26_SUBJECT_POPULATION_LOCATION_IDENTIFICATION = z.infer<
  typeof osmR26SubjectPopulationLocationIdentificationSchema
>;

/**
 * OSM_R26.SPECIMEN group schema
 * Defines the structure and validation rules for the OSM_R26.SPECIMEN group
 */
export const osmR26SpecimenSchema = z
  .object({
    SPM: segments.spmSchema,
    PRT: z.array(segments.prtSchema).optional(),
    SPECIMEN_OBSERVATION: z.array(osmR26SpecimenObservationSchema).optional(),
    CONTAINER: z.array(osmR26ContainerSchema).optional(),
    SUBJECT_PERSON_ANIMAL_IDENTIFICATION: osmR26SubjectPersonAnimalIdentificationSchema.optional(),
    SUBJECT_POPULATION_LOCATION_IDENTIFICATION:
      osmR26SubjectPopulationLocationIdentificationSchema.optional()
  })
  .register(hl7v2Metadata, {
    title: "OSM_R26.SPECIMEN",
    version: "2.7",
    description: "HL7 v2.7 OSM_R26.SPECIMEN group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OSM_R26.SPECIMEN schema
 */
export type OSM_R26_SPECIMEN = z.infer<typeof osmR26SpecimenSchema>;

/**
 * OSM_R26.PACKAGE group schema
 * Defines the structure and validation rules for the OSM_R26.PACKAGE group
 */
export const osmR26PackageSchema = z
  .object({
    PAC: segments.pacSchema,
    PRT: z.array(segments.prtSchema).optional(),
    SPECIMEN: z.array(osmR26SpecimenSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "OSM_R26.PACKAGE",
    version: "2.7",
    description: "HL7 v2.7 OSM_R26.PACKAGE group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OSM_R26.PACKAGE schema
 */
export type OSM_R26_PACKAGE = z.infer<typeof osmR26PackageSchema>;

/**
 * OSM_R26.SHIPMENT group schema
 * Defines the structure and validation rules for the OSM_R26.SHIPMENT group
 */
export const osmR26ShipmentSchema = z
  .object({
    SHP: segments.shpSchema,
    PRT: z.array(segments.prtSchema),
    SHIPPING_OBSERVATION: z.array(osmR26ShippingObservationSchema).optional(),
    PACKAGE: z.array(osmR26PackageSchema)
  })
  .register(hl7v2Metadata, {
    title: "OSM_R26.SHIPMENT",
    version: "2.7",
    description: "HL7 v2.7 OSM_R26.SHIPMENT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OSM_R26.SHIPMENT schema
 */
export type OSM_R26_SHIPMENT = z.infer<typeof osmR26ShipmentSchema>;

/**
 * OSM_R26 message schema
 * Defines the structure and validation rules for the OSM_R26 message
 */
export const osm_r26Schema = z
  .object({
    MSH: segments.mshSchema,
    SFT: z.array(segments.sftSchema).optional(),
    UAC: segments.uacSchema.optional(),
    SHIPMENT: z.array(osmR26ShipmentSchema)
  })
  .register(hl7v2Metadata, {
    title: "OSM_R26",
    version: "2.7",
    description: "HL7 v2.7 OSM_R26 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the OSM_R26 schema
 */
export type OSM_R26 = z.infer<typeof osm_r26Schema>;

/**
 * Default export for convenience
 */
export default osm_r26Schema;
