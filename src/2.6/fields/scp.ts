import hl7v2Metadata from "../registry";
import * as datatypes from "../datatypes";

/**
 * HL7 v2.6 SCP Fields
 *
 * HL7 v2.6 SCP field definitions
 * Each field consists of specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * SCP.1 - Number Of Decontamination/Sterilization Devices
 */
export const SCP_1 = datatypes.NM.register(hl7v2Metadata, {
  title: "SCP.1",
  version: "2.6",
  description: "Number Of Decontamination/Sterilization Devices",
  type: "Field",
  item: 2087,
  table: "",
  longName: "HL7Number Of Decontamination/Sterilization Devices",
  length: 2
});

/**
 * SCP.2 - Labor Calculation Type
 */
export const SCP_2 = datatypes.CWE.register(hl7v2Metadata, {
  title: "SCP.2",
  version: "2.6",
  description: "Labor Calculation Type",
  type: "Field",
  item: 2088,
  table: "HL70651",
  longName: "HL7Labor Calculation Type",
  length: 250
});

/**
 * SCP.3 - Date Format
 */
export const SCP_3 = datatypes.CWE.register(hl7v2Metadata, {
  title: "SCP.3",
  version: "2.6",
  description: "Date Format",
  type: "Field",
  item: 2089,
  table: "HL70653",
  longName: "HL7Date Format",
  length: 250
});

/**
 * SCP.4 - Device Number
 */
export const SCP_4 = datatypes.ST.register(hl7v2Metadata, {
  title: "SCP.4",
  version: "2.6",
  description: "Device Number",
  type: "Field",
  item: 2090,
  table: "",
  longName: "HL7Device Number",
  length: 8
});

/**
 * SCP.5 - Device Name
 */
export const SCP_5 = datatypes.ST.register(hl7v2Metadata, {
  title: "SCP.5",
  version: "2.6",
  description: "Device Name",
  type: "Field",
  item: 2279,
  table: "",
  longName: "HL7Device Name",
  length: 999
});

/**
 * SCP.6 - Device Model Name
 */
export const SCP_6 = datatypes.ST.register(hl7v2Metadata, {
  title: "SCP.6",
  version: "2.6",
  description: "Device Model Name",
  type: "Field",
  item: 2091,
  table: "",
  longName: "HL7Device Model Name",
  length: 2
});

/**
 * SCP.7 - Device Type
 */
export const SCP_7 = datatypes.CWE.register(hl7v2Metadata, {
  title: "SCP.7",
  version: "2.6",
  description: "Device Type",
  type: "Field",
  item: 2092,
  table: "HL70657",
  longName: "HL7Device Type",
  length: 250
});

/**
 * SCP.8 - Lot Control
 */
export const SCP_8 = datatypes.CWE.register(hl7v2Metadata, {
  title: "SCP.8",
  version: "2.6",
  description: "Lot Control",
  type: "Field",
  item: 2093,
  table: "HL70659",
  longName: "HL7Lot Control",
  length: 250
});
