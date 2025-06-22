import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.9 ITM Fields
 * 
 * HL7 v2.9 ITM field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ITM.1 - Item Identifier
 */
export const ITM_1 = datatypes.ST.register(hl7v2Metadata, {
  "title": "ITM.1",
  "version": "2.9",
  "description": "Item Identifier",
  "type": "Field",
  "item": 2186,
  "table": "",
  "longName": "HL7Item Identifier"
});

/**
 * ITM.2 - Item Description
 */
export const ITM_2 = datatypes.ST.register(hl7v2Metadata, {
  "title": "ITM.2",
  "version": "2.9",
  "description": "Item Description",
  "type": "Field",
  "item": 2274,
  "table": "",
  "longName": "HL7Item Description"
});

/**
 * ITM.3 - Item Status
 */
export const ITM_3 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "ITM.3",
  "version": "2.9",
  "description": "Item Status",
  "type": "Field",
  "item": 2187,
  "table": "HL70776",
  "longName": "HL7Item Status"
});

/**
 * ITM.4 - Item Type
 */
export const ITM_4 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "ITM.4",
  "version": "2.9",
  "description": "Item Type",
  "type": "Field",
  "item": 2188,
  "table": "HL70778",
  "longName": "HL7Item Type"
});

/**
 * ITM.5 - Item Category
 */
export const ITM_5 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "ITM.5",
  "version": "2.9",
  "description": "Item Category",
  "type": "Field",
  "item": 2189,
  "table": "",
  "longName": "HL7Item Category"
});

/**
 * ITM.6 - Subject to Expiration Indicator
 */
export const ITM_6 = datatypes.CNE.register(hl7v2Metadata, {
  "title": "ITM.6",
  "version": "2.9",
  "description": "Subject to Expiration Indicator",
  "type": "Field",
  "item": 2190,
  "table": "HL70532",
  "longName": "HL7Subject to Expiration Indicator"
});

/**
 * ITM.7 - Manufacturer Identifier
 */
export const ITM_7 = datatypes.ST.register(hl7v2Metadata, {
  "title": "ITM.7",
  "version": "2.9",
  "description": "Manufacturer Identifier",
  "type": "Field",
  "item": 2191,
  "table": "",
  "longName": "HL7Manufacturer Identifier"
});

/**
 * ITM.8 - Manufacturer Name
 */
export const ITM_8 = datatypes.ST.register(hl7v2Metadata, {
  "title": "ITM.8",
  "version": "2.9",
  "description": "Manufacturer Name",
  "type": "Field",
  "item": 2275,
  "table": "",
  "longName": "HL7Manufacturer Name"
});

/**
 * ITM.9 - Manufacturer Catalog Number
 */
export const ITM_9 = datatypes.ST.register(hl7v2Metadata, {
  "title": "ITM.9",
  "version": "2.9",
  "description": "Manufacturer Catalog Number",
  "type": "Field",
  "item": 2192,
  "table": "",
  "longName": "HL7Manufacturer Catalog Number"
});

/**
 * ITM.10 - Manufacturer Labeler Identification Code
 */
export const ITM_10 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "ITM.10",
  "version": "2.9",
  "description": "Manufacturer Labeler Identification Code",
  "type": "Field",
  "item": 2193,
  "table": "",
  "longName": "HL7Manufacturer Labeler Identification Code"
});

/**
 * ITM.11 - Patient Chargeable Indicator
 */
export const ITM_11 = datatypes.CNE.register(hl7v2Metadata, {
  "title": "ITM.11",
  "version": "2.9",
  "description": "Patient Chargeable Indicator",
  "type": "Field",
  "item": 2070,
  "table": "HL70532",
  "longName": "HL7Patient Chargeable Indicator"
});

/**
 * ITM.12 - Transaction Code
 */
export const ITM_12 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "ITM.12",
  "version": "2.9",
  "description": "Transaction Code",
  "type": "Field",
  "item": 361,
  "table": "HL70132",
  "longName": "HL7Transaction Code"
});

/**
 * ITM.13 - Transaction Amount - Unit
 */
export const ITM_13 = datatypes.ST.register(hl7v2Metadata, {
  "title": "ITM.13",
  "version": "2.9",
  "description": "Transaction Amount - Unit",
  "type": "Field",
  "item": 366,
  "table": "",
  "longName": "HL7Transaction Amount - Unit"
});

/**
 * ITM.14 - Stocked Item Indicator
 */
export const ITM_14 = datatypes.CNE.register(hl7v2Metadata, {
  "title": "ITM.14",
  "version": "2.9",
  "description": "Stocked Item Indicator",
  "type": "Field",
  "item": 2197,
  "table": "HL70532",
  "longName": "HL7Stocked Item Indicator"
});

/**
 * ITM.15 - Supply Risk Codes
 */
export const ITM_15 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "ITM.15",
  "version": "2.9",
  "description": "Supply Risk Codes",
  "type": "Field",
  "item": 2266,
  "table": "HL70871",
  "longName": "HL7Supply Risk Codes"
});

/**
 * ITM.16 - Approving Regulatory Agency
 */
export const ITM_16 = datatypes.XON.register(hl7v2Metadata, {
  "title": "ITM.16",
  "version": "2.9",
  "description": "Approving Regulatory Agency",
  "type": "Field",
  "item": 2199,
  "table": "HL70790",
  "longName": "HL7Approving Regulatory Agency"
});

/**
 * ITM.17 - Latex Indicator
 */
export const ITM_17 = datatypes.CNE.register(hl7v2Metadata, {
  "title": "ITM.17",
  "version": "2.9",
  "description": "Latex Indicator",
  "type": "Field",
  "item": 2200,
  "table": "HL70532",
  "longName": "HL7Latex Indicator"
});

/**
 * ITM.18 - Ruling Act
 */
export const ITM_18 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "ITM.18",
  "version": "2.9",
  "description": "Ruling Act",
  "type": "Field",
  "item": 2201,
  "table": "HL70793",
  "longName": "HL7Ruling Act"
});

/**
 * ITM.19 - Item Natural Account Code
 */
export const ITM_19 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "ITM.19",
  "version": "2.9",
  "description": "Item Natural Account Code",
  "type": "Field",
  "item": 282,
  "table": "HL70320",
  "longName": "HL7Item Natural Account Code"
});

/**
 * ITM.20 - Approved To Buy Quantity
 */
export const ITM_20 = datatypes.NM.register(hl7v2Metadata, {
  "title": "ITM.20",
  "version": "2.9",
  "description": "Approved To Buy Quantity",
  "type": "Field",
  "item": 2203,
  "table": "",
  "longName": "HL7Approved To Buy Quantity"
});

/**
 * ITM.21 - Approved To Buy Price
 */
export const ITM_21 = datatypes.ST.register(hl7v2Metadata, {
  "title": "ITM.21",
  "version": "2.9",
  "description": "Approved To Buy Price",
  "type": "Field",
  "item": 2204,
  "table": "",
  "longName": "HL7Approved To Buy Price"
});

/**
 * ITM.22 - Taxable Item Indicator
 */
export const ITM_22 = datatypes.CNE.register(hl7v2Metadata, {
  "title": "ITM.22",
  "version": "2.9",
  "description": "Taxable Item Indicator",
  "type": "Field",
  "item": 2205,
  "table": "HL70532",
  "longName": "HL7Taxable Item Indicator"
});

/**
 * ITM.23 - Freight Charge Indicator
 */
export const ITM_23 = datatypes.CNE.register(hl7v2Metadata, {
  "title": "ITM.23",
  "version": "2.9",
  "description": "Freight Charge Indicator",
  "type": "Field",
  "item": 2206,
  "table": "HL70532",
  "longName": "HL7Freight Charge Indicator"
});

/**
 * ITM.24 - Item Set Indicator
 */
export const ITM_24 = datatypes.CNE.register(hl7v2Metadata, {
  "title": "ITM.24",
  "version": "2.9",
  "description": "Item Set Indicator",
  "type": "Field",
  "item": 2207,
  "table": "HL70532",
  "longName": "HL7Item Set Indicator"
});

/**
 * ITM.25 - Item Set Identifier
 */
export const ITM_25 = datatypes.ST.register(hl7v2Metadata, {
  "title": "ITM.25",
  "version": "2.9",
  "description": "Item Set Identifier",
  "type": "Field",
  "item": 2208,
  "table": "",
  "longName": "HL7Item Set Identifier"
});

/**
 * ITM.26 - Track Department Usage Indicator
 */
export const ITM_26 = datatypes.CNE.register(hl7v2Metadata, {
  "title": "ITM.26",
  "version": "2.9",
  "description": "Track Department Usage Indicator",
  "type": "Field",
  "item": 2209,
  "table": "HL70532",
  "longName": "HL7Track Department Usage Indicator"
});

/**
 * ITM.27 - Procedure Code
 */
export const ITM_27 = datatypes.CNE.register(hl7v2Metadata, {
  "title": "ITM.27",
  "version": "2.9",
  "description": "Procedure Code",
  "type": "Field",
  "item": 393,
  "table": "HL70088",
  "longName": "HL7Procedure Code"
});

/**
 * ITM.28 - Procedure Code Modifier
 */
export const ITM_28 = datatypes.CNE.register(hl7v2Metadata, {
  "title": "ITM.28",
  "version": "2.9",
  "description": "Procedure Code Modifier",
  "type": "Field",
  "item": 1316,
  "table": "HL70340",
  "longName": "HL7Procedure Code Modifier"
});

/**
 * ITM.29 - Special Handling Code
 */
export const ITM_29 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "ITM.29",
  "version": "2.9",
  "description": "Special Handling Code",
  "type": "Field",
  "item": 1370,
  "table": "HL70376",
  "longName": "HL7Special Handling Code"
});

/**
 * ITM.30 - Hazardous Indicator
 */
export const ITM_30 = datatypes.CNE.register(hl7v2Metadata, {
  "title": "ITM.30",
  "version": "2.9",
  "description": "Hazardous Indicator",
  "type": "Field",
  "item": 3388,
  "table": "HL70532",
  "longName": "HL7Hazardous Indicator"
});

/**
 * ITM.31 - Sterile Indicator
 */
export const ITM_31 = datatypes.CNE.register(hl7v2Metadata, {
  "title": "ITM.31",
  "version": "2.9",
  "description": "Sterile Indicator",
  "type": "Field",
  "item": 3304,
  "table": "HL70532",
  "longName": "HL7Sterile Indicator"
});

/**
 * ITM.32 - Material Data Safety Sheet Number
 */
export const ITM_32 = datatypes.ST.register(hl7v2Metadata, {
  "title": "ITM.32",
  "version": "2.9",
  "description": "Material Data Safety Sheet Number",
  "type": "Field",
  "item": 3305,
  "table": "",
  "longName": "HL7Material Data Safety Sheet Number"
});

/**
 * ITM.33 - United Nations Standard Products and Services Code (UNSPSC)
 */
export const ITM_33 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "ITM.33",
  "version": "2.9",
  "description": "United Nations Standard Products and Services Code (UNSPSC)",
  "type": "Field",
  "item": 3306,
  "table": "HL70396",
  "longName": "HL7United Nations Standard Products and Services Code (UNSPSC)"
});

/**
 * ITM.34 - Contract Date
 */
export const ITM_34 = datatypes.DR.register(hl7v2Metadata, {
  "title": "ITM.34",
  "version": "2.9",
  "description": "Contract Date",
  "type": "Field",
  "item": 2415,
  "table": "",
  "longName": "HL7Contract Date"
});

/**
 * ITM.35 - Manufacturer Contact Name
 */
export const ITM_35 = datatypes.XPN.register(hl7v2Metadata, {
  "title": "ITM.35",
  "version": "2.9",
  "description": "Manufacturer Contact Name",
  "type": "Field",
  "item": 2416,
  "table": "",
  "longName": "HL7Manufacturer Contact Name"
});

/**
 * ITM.36 - Manufacturer Contact Information
 */
export const ITM_36 = datatypes.XTN.register(hl7v2Metadata, {
  "title": "ITM.36",
  "version": "2.9",
  "description": "Manufacturer Contact Information",
  "type": "Field",
  "item": 2417,
  "table": "",
  "longName": "HL7Manufacturer Contact Information"
});

/**
 * ITM.37 - Class of Trade
 */
export const ITM_37 = datatypes.ST.register(hl7v2Metadata, {
  "title": "ITM.37",
  "version": "2.9",
  "description": "Class of Trade",
  "type": "Field",
  "item": 2418,
  "table": "",
  "longName": "HL7Class of Trade"
});

/**
 * ITM.38 - Field Level Event Code
 */
export const ITM_38 = datatypes.ID.register(hl7v2Metadata, {
  "title": "ITM.38",
  "version": "2.9",
  "description": "Field Level Event Code",
  "type": "Field",
  "item": 2419,
  "table": "HL70180",
  "longName": "HL7Field Level Event Code"
});
