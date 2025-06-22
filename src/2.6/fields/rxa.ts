import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.6 RXA Fields
 * 
 * HL7 v2.6 RXA field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * RXA.1 - Give Sub-ID Counter
 */
export const RXA_1 = datatypes.NM.register(hl7v2Metadata, {
  "title": "RXA.1",
  "version": "2.6",
  "description": "Give Sub-ID Counter",
  "type": "Field",
  "item": 342,
  "table": "",
  "longName": "HL7Give Sub-ID Counter",
  "length": 4
});

/**
 * RXA.2 - Administration Sub-ID Counter
 */
export const RXA_2 = datatypes.NM.register(hl7v2Metadata, {
  "title": "RXA.2",
  "version": "2.6",
  "description": "Administration Sub-ID Counter",
  "type": "Field",
  "item": 344,
  "table": "",
  "longName": "HL7Administration Sub-ID Counter",
  "length": 4
});

/**
 * RXA.3 - Date/Time Start of Administration
 */
export const RXA_3 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "RXA.3",
  "version": "2.6",
  "description": "Date/Time Start of Administration",
  "type": "Field",
  "item": 345,
  "table": "",
  "longName": "HL7Date/Time Start of Administration",
  "length": 24
});

/**
 * RXA.4 - Date/Time End of Administration
 */
export const RXA_4 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "RXA.4",
  "version": "2.6",
  "description": "Date/Time End of Administration",
  "type": "Field",
  "item": 346,
  "table": "",
  "longName": "HL7Date/Time End of Administration",
  "length": 24
});

/**
 * RXA.5 - Administered Code
 */
export const RXA_5 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "RXA.5",
  "version": "2.6",
  "description": "Administered Code",
  "type": "Field",
  "item": 347,
  "table": "HL70292",
  "longName": "HL7Administered Code",
  "length": 250
});

/**
 * RXA.6 - Administered Amount
 */
export const RXA_6 = datatypes.NM.register(hl7v2Metadata, {
  "title": "RXA.6",
  "version": "2.6",
  "description": "Administered Amount",
  "type": "Field",
  "item": 348,
  "table": "",
  "longName": "HL7Administered Amount",
  "length": 20
});

/**
 * RXA.7 - Administered Units
 */
export const RXA_7 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "RXA.7",
  "version": "2.6",
  "description": "Administered Units",
  "type": "Field",
  "item": 349,
  "table": "HL79999",
  "longName": "HL7Administered Units",
  "length": 250
});

/**
 * RXA.8 - Administered Dosage Form
 */
export const RXA_8 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "RXA.8",
  "version": "2.6",
  "description": "Administered Dosage Form",
  "type": "Field",
  "item": 350,
  "table": "HL79999",
  "longName": "HL7Administered Dosage Form",
  "length": 250
});

/**
 * RXA.9 - Administration Notes
 */
export const RXA_9 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "RXA.9",
  "version": "2.6",
  "description": "Administration Notes",
  "type": "Field",
  "item": 351,
  "table": "HL79999",
  "longName": "HL7Administration Notes",
  "length": 250
});

/**
 * RXA.10 - Administering Provider
 */
export const RXA_10 = datatypes.XCN.register(hl7v2Metadata, {
  "title": "RXA.10",
  "version": "2.6",
  "description": "Administering Provider",
  "type": "Field",
  "item": 352,
  "table": "",
  "longName": "HL7Administering Provider",
  "length": 250
});

/**
 * RXA.11 - Administered-at Location
 */
export const RXA_11 = datatypes.LA2.register(hl7v2Metadata, {
  "title": "RXA.11",
  "version": "2.6",
  "description": "Administered-at Location",
  "type": "Field",
  "item": 353,
  "table": "",
  "longName": "HL7Administered-at Location"
});

/**
 * RXA.12 - Administered Per (Time Unit)
 */
export const RXA_12 = datatypes.ST.register(hl7v2Metadata, {
  "title": "RXA.12",
  "version": "2.6",
  "description": "Administered Per (Time Unit)",
  "type": "Field",
  "item": 354,
  "table": "",
  "longName": "HL7Administered Per (Time Unit)",
  "length": 20
});

/**
 * RXA.13 - Administered Strength
 */
export const RXA_13 = datatypes.NM.register(hl7v2Metadata, {
  "title": "RXA.13",
  "version": "2.6",
  "description": "Administered Strength",
  "type": "Field",
  "item": 1134,
  "table": "",
  "longName": "HL7Administered Strength",
  "length": 20
});

/**
 * RXA.14 - Administered Strength Units
 */
export const RXA_14 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "RXA.14",
  "version": "2.6",
  "description": "Administered Strength Units",
  "type": "Field",
  "item": 1135,
  "table": "HL79999",
  "longName": "HL7Administered Strength Units",
  "length": 250
});

/**
 * RXA.15 - Substance Lot Number
 */
export const RXA_15 = datatypes.ST.register(hl7v2Metadata, {
  "title": "RXA.15",
  "version": "2.6",
  "description": "Substance Lot Number",
  "type": "Field",
  "item": 1129,
  "table": "",
  "longName": "HL7Substance Lot Number",
  "length": 20
});

/**
 * RXA.16 - Substance Expiration Date
 */
export const RXA_16 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "RXA.16",
  "version": "2.6",
  "description": "Substance Expiration Date",
  "type": "Field",
  "item": 1130,
  "table": "",
  "longName": "HL7Substance Expiration Date",
  "length": 24
});

/**
 * RXA.17 - Substance Manufacturer Name
 */
export const RXA_17 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "RXA.17",
  "version": "2.6",
  "description": "Substance Manufacturer Name",
  "type": "Field",
  "item": 1131,
  "table": "HL70227",
  "longName": "HL7Substance Manufacturer Name",
  "length": 250
});

/**
 * RXA.18 - Substance/Treatment Refusal Reason
 */
export const RXA_18 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "RXA.18",
  "version": "2.6",
  "description": "Substance/Treatment Refusal Reason",
  "type": "Field",
  "item": 1136,
  "table": "HL79999",
  "longName": "HL7Substance/Treatment Refusal Reason",
  "length": 250
});

/**
 * RXA.19 - Indication
 */
export const RXA_19 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "RXA.19",
  "version": "2.6",
  "description": "Indication",
  "type": "Field",
  "item": 1123,
  "table": "HL79999",
  "longName": "HL7Indication",
  "length": 250
});

/**
 * RXA.20 - Completion Status
 */
export const RXA_20 = datatypes.ID.register(hl7v2Metadata, {
  "title": "RXA.20",
  "version": "2.6",
  "description": "Completion Status",
  "type": "Field",
  "item": 1223,
  "table": "HL70322",
  "longName": "HL7Completion Status",
  "length": 2
});

/**
 * RXA.21 - Action Code - RXA
 */
export const RXA_21 = datatypes.ID.register(hl7v2Metadata, {
  "title": "RXA.21",
  "version": "2.6",
  "description": "Action Code - RXA",
  "type": "Field",
  "item": 1224,
  "table": "HL70206",
  "longName": "HL7Action Code - RXA",
  "length": 2
});

/**
 * RXA.22 - System Entry Date/Time
 */
export const RXA_22 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "RXA.22",
  "version": "2.6",
  "description": "System Entry Date/Time",
  "type": "Field",
  "item": 1225,
  "table": "",
  "longName": "HL7System Entry Date/Time",
  "length": 24
});

/**
 * RXA.23 - Administered Drug Strength Volume
 */
export const RXA_23 = datatypes.NM.register(hl7v2Metadata, {
  "title": "RXA.23",
  "version": "2.6",
  "description": "Administered Drug Strength Volume",
  "type": "Field",
  "item": 1696,
  "table": "",
  "longName": "HL7Administered Drug Strength Volume",
  "length": 5
});

/**
 * RXA.24 - Administered Drug Strength Volume Units
 */
export const RXA_24 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "RXA.24",
  "version": "2.6",
  "description": "Administered Drug Strength Volume Units",
  "type": "Field",
  "item": 1697,
  "table": "HL79999",
  "longName": "HL7Administered Drug Strength Volume Units",
  "length": 250
});

/**
 * RXA.25 - Administered Barcode Identifier
 */
export const RXA_25 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "RXA.25",
  "version": "2.6",
  "description": "Administered Barcode Identifier",
  "type": "Field",
  "item": 1698,
  "table": "HL79999",
  "longName": "HL7Administered Barcode Identifier",
  "length": 60
});

/**
 * RXA.26 - Pharmacy Order Type
 */
export const RXA_26 = datatypes.ID.register(hl7v2Metadata, {
  "title": "RXA.26",
  "version": "2.6",
  "description": "Pharmacy Order Type",
  "type": "Field",
  "item": 1699,
  "table": "HL70480",
  "longName": "HL7Pharmacy Order Type",
  "length": 1
});

/**
 * RXA.27 - Administer-at
 */
export const RXA_27 = datatypes.ST.register(hl7v2Metadata, {
  "title": "RXA.27",
  "version": "2.6",
  "description": "Administer-at",
  "type": "Field",
  "item": 2264,
  "table": "",
  "longName": "HL7Administer-at",
  "length": 180
});

/**
 * RXA.28 - Administered-at Address
 */
export const RXA_28 = datatypes.XAD.register(hl7v2Metadata, {
  "title": "RXA.28",
  "version": "2.6",
  "description": "Administered-at Address",
  "type": "Field",
  "item": 2265,
  "table": "",
  "longName": "HL7Administered-at Address",
  "length": 106
});
