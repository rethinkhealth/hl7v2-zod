import hl7v2Metadata from "../registry";
import * as datatypes from "../datatypes";

/**
 * HL7 v2.5 PDC Fields
 *
 * HL7 v2.5 PDC field definitions
 * Each field consists of specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * PDC.1 - Manufacturer/Distributor
 */
export const PDC_1 = datatypes.XON.register(hl7v2Metadata, {
  title: "PDC.1",
  version: "2.5",
  description: "Manufacturer/Distributor",
  type: "Field",
  item: 1247,
  table: "",
  longName: "HL7Manufacturer/Distributor",
  length: 250
});

/**
 * PDC.2 - Country
 */
export const PDC_2 = datatypes.ST.register(hl7v2Metadata, {
  title: "PDC.2",
  version: "2.5",
  description: "Country",
  type: "Field",
  item: 1248,
  table: "",
  longName: "HL7Country",
  length: 250
});

/**
 * PDC.3 - Brand Name
 */
export const PDC_3 = datatypes.ST.register(hl7v2Metadata, {
  title: "PDC.3",
  version: "2.5",
  description: "Brand Name",
  type: "Field",
  item: 1249,
  table: "",
  longName: "HL7Brand Name",
  length: 60
});

/**
 * PDC.4 - Device Family Name
 */
export const PDC_4 = datatypes.ST.register(hl7v2Metadata, {
  title: "PDC.4",
  version: "2.5",
  description: "Device Family Name",
  type: "Field",
  item: 1250,
  table: "",
  longName: "HL7Device Family Name",
  length: 60
});

/**
 * PDC.5 - Generic Name
 */
export const PDC_5 = datatypes.ST.register(hl7v2Metadata, {
  title: "PDC.5",
  version: "2.5",
  description: "Generic Name",
  type: "Field",
  item: 1251,
  table: "",
  longName: "HL7Generic Name",
  length: 250
});

/**
 * PDC.6 - Model Identifier
 */
export const PDC_6 = datatypes.ST.register(hl7v2Metadata, {
  title: "PDC.6",
  version: "2.5",
  description: "Model Identifier",
  type: "Field",
  item: 1252,
  table: "",
  longName: "HL7Model Identifier",
  length: 60
});

/**
 * PDC.7 - Catalogue Identifier
 */
export const PDC_7 = datatypes.ST.register(hl7v2Metadata, {
  title: "PDC.7",
  version: "2.5",
  description: "Catalogue Identifier",
  type: "Field",
  item: 1253,
  table: "",
  longName: "HL7Catalogue Identifier",
  length: 60
});

/**
 * PDC.8 - Other Identifier
 */
export const PDC_8 = datatypes.ST.register(hl7v2Metadata, {
  title: "PDC.8",
  version: "2.5",
  description: "Other Identifier",
  type: "Field",
  item: 1254,
  table: "",
  longName: "HL7Other Identifier",
  length: 60
});

/**
 * PDC.9 - Product Code
 */
export const PDC_9 = datatypes.ST.register(hl7v2Metadata, {
  title: "PDC.9",
  version: "2.5",
  description: "Product Code",
  type: "Field",
  item: 1255,
  table: "",
  longName: "HL7Product Code",
  length: 250
});

/**
 * PDC.10 - Marketing Basis
 */
export const PDC_10 = datatypes.ID.register(hl7v2Metadata, {
  title: "PDC.10",
  version: "2.5",
  description: "Marketing Basis",
  type: "Field",
  item: 1256,
  table: "HL70330",
  longName: "HL7Marketing Basis",
  length: 4
});

/**
 * PDC.11 - Marketing Approval ID
 */
export const PDC_11 = datatypes.ST.register(hl7v2Metadata, {
  title: "PDC.11",
  version: "2.5",
  description: "Marketing Approval ID",
  type: "Field",
  item: 1257,
  table: "",
  longName: "HL7Marketing Approval ID",
  length: 60
});

/**
 * PDC.12 - Labeled Shelf Life
 */
export const PDC_12 = datatypes.ST.register(hl7v2Metadata, {
  title: "PDC.12",
  version: "2.5",
  description: "Labeled Shelf Life",
  type: "Field",
  item: 1258,
  table: "",
  longName: "HL7Labeled Shelf Life",
  length: 12
});

/**
 * PDC.13 - Expected Shelf Life
 */
export const PDC_13 = datatypes.ST.register(hl7v2Metadata, {
  title: "PDC.13",
  version: "2.5",
  description: "Expected Shelf Life",
  type: "Field",
  item: 1259,
  table: "",
  longName: "HL7Expected Shelf Life",
  length: 12
});

/**
 * PDC.14 - Date First Marketed
 */
export const PDC_14 = datatypes.ST.register(hl7v2Metadata, {
  title: "PDC.14",
  version: "2.5",
  description: "Date First Marketed",
  type: "Field",
  item: 1260,
  table: "",
  longName: "HL7Date First Marketed",
  length: 26
});

/**
 * PDC.15 - Date Last Marketed
 */
export const PDC_15 = datatypes.ST.register(hl7v2Metadata, {
  title: "PDC.15",
  version: "2.5",
  description: "Date Last Marketed",
  type: "Field",
  item: 1261,
  table: "",
  longName: "HL7Date Last Marketed",
  length: 26
});
