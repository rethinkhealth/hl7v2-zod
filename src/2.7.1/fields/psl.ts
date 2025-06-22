import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.7 PSL Fields
 * 
 * HL7 v2.7 PSL field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * PSL.1 - Provider Product/Service Line Item Number
 */
export const PSL_1 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PSL.1",
  "version": "2.7",
  "description": "Provider Product/Service Line Item Number",
  "type": "Field",
  "item": 1955,
  "table": "",
  "longName": "HL7Provider Product/Service Line Item Number"
});

/**
 * PSL.2 - Payer Product/Service Line Item Number
 */
export const PSL_2 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PSL.2",
  "version": "2.7",
  "description": "Payer Product/Service Line Item Number",
  "type": "Field",
  "item": 1956,
  "table": "",
  "longName": "HL7Payer Product/Service Line Item Number"
});

/**
 * PSL.3 - Product/Service Line Item Sequence Number
 */
export const PSL_3 = datatypes.SI.register(hl7v2Metadata, {
  "title": "PSL.3",
  "version": "2.7",
  "description": "Product/Service Line Item Sequence Number",
  "type": "Field",
  "item": 1957,
  "table": "",
  "longName": "HL7Product/Service Line Item Sequence Number",
  "length": 4
});

/**
 * PSL.4 - Provider Tracking ID
 */
export const PSL_4 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PSL.4",
  "version": "2.7",
  "description": "Provider Tracking ID",
  "type": "Field",
  "item": 1958,
  "table": "",
  "longName": "HL7Provider Tracking ID"
});

/**
 * PSL.5 - Payer Tracking ID
 */
export const PSL_5 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PSL.5",
  "version": "2.7",
  "description": "Payer Tracking ID",
  "type": "Field",
  "item": 1959,
  "table": "",
  "longName": "HL7Payer Tracking ID"
});

/**
 * PSL.6 - Product/Service Line Item Status
 */
export const PSL_6 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "PSL.6",
  "version": "2.7",
  "description": "Product/Service Line Item Status",
  "type": "Field",
  "item": 1960,
  "table": "HL70559",
  "longName": "HL7Product/Service Line Item Status"
});

/**
 * PSL.7 - Product/Service Code
 */
export const PSL_7 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "PSL.7",
  "version": "2.7",
  "description": "Product/Service Code",
  "type": "Field",
  "item": 1961,
  "table": "HL70879",
  "longName": "HL7Product/Service Code"
});

/**
 * PSL.8 - Product/Service Code Modifier
 */
export const PSL_8 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "PSL.8",
  "version": "2.7",
  "description": "Product/Service Code Modifier",
  "type": "Field",
  "item": 1962,
  "table": "HL70880",
  "longName": "HL7Product/Service Code Modifier"
});

/**
 * PSL.9 - Product/Service Code Description
 */
export const PSL_9 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PSL.9",
  "version": "2.7",
  "description": "Product/Service Code Description",
  "type": "Field",
  "item": 1963,
  "table": "",
  "longName": "HL7Product/Service Code Description"
});

/**
 * PSL.10 - Product/Service Effective Date
 */
export const PSL_10 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "PSL.10",
  "version": "2.7",
  "description": "Product/Service Effective Date",
  "type": "Field",
  "item": 1964,
  "table": "",
  "longName": "HL7Product/Service Effective Date"
});

/**
 * PSL.11 - Product/Service Expiration Date
 */
export const PSL_11 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "PSL.11",
  "version": "2.7",
  "description": "Product/Service Expiration Date",
  "type": "Field",
  "item": 1965,
  "table": "",
  "longName": "HL7Product/Service Expiration Date"
});

/**
 * PSL.12 - Product/Service Quantity
 */
export const PSL_12 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PSL.12",
  "version": "2.7",
  "description": "Product/Service Quantity",
  "type": "Field",
  "item": 1966,
  "table": "HL70560",
  "longName": "HL7Product/Service Quantity"
});

/**
 * PSL.13 - Product/Service Unit Cost
 */
export const PSL_13 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PSL.13",
  "version": "2.7",
  "description": "Product/Service Unit Cost",
  "type": "Field",
  "item": 1967,
  "table": "",
  "longName": "HL7Product/Service Unit Cost"
});

/**
 * PSL.14 - Number of Items per Unit
 */
export const PSL_14 = datatypes.NM.register(hl7v2Metadata, {
  "title": "PSL.14",
  "version": "2.7",
  "description": "Number of Items per Unit",
  "type": "Field",
  "item": 1968,
  "table": "",
  "longName": "HL7Number of Items per Unit"
});

/**
 * PSL.15 - Product/Service Gross Amount
 */
export const PSL_15 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PSL.15",
  "version": "2.7",
  "description": "Product/Service Gross Amount",
  "type": "Field",
  "item": 1969,
  "table": "",
  "longName": "HL7Product/Service Gross Amount"
});

/**
 * PSL.16 - Product/Service Billed Amount
 */
export const PSL_16 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PSL.16",
  "version": "2.7",
  "description": "Product/Service Billed Amount",
  "type": "Field",
  "item": 1970,
  "table": "",
  "longName": "HL7Product/Service Billed Amount"
});

/**
 * PSL.17 - Product/Service Clarification Code Type
 */
export const PSL_17 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "PSL.17",
  "version": "2.7",
  "description": "Product/Service Clarification Code Type",
  "type": "Field",
  "item": 1971,
  "table": "HL70561",
  "longName": "HL7Product/Service Clarification Code Type"
});

/**
 * PSL.18 - Product/Service Clarification Code Value
 */
export const PSL_18 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PSL.18",
  "version": "2.7",
  "description": "Product/Service Clarification Code Value",
  "type": "Field",
  "item": 1972,
  "table": "",
  "longName": "HL7Product/Service Clarification Code Value"
});

/**
 * PSL.19 - Health Document Reference Identifier
 */
export const PSL_19 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PSL.19",
  "version": "2.7",
  "description": "Health Document Reference Identifier",
  "type": "Field",
  "item": 1973,
  "table": "",
  "longName": "HL7Health Document Reference Identifier"
});

/**
 * PSL.20 - Processing Consideration Code
 */
export const PSL_20 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "PSL.20",
  "version": "2.7",
  "description": "Processing Consideration Code",
  "type": "Field",
  "item": 1974,
  "table": "HL70562",
  "longName": "HL7Processing Consideration Code"
});

/**
 * PSL.21 - Restricted Disclosure Indicator
 */
export const PSL_21 = datatypes.ID.register(hl7v2Metadata, {
  "title": "PSL.21",
  "version": "2.7",
  "description": "Restricted Disclosure Indicator",
  "type": "Field",
  "item": 1975,
  "table": "HL70532",
  "longName": "HL7Restricted Disclosure Indicator",
  "length": 4
});

/**
 * PSL.22 - Related Product/Service Code Indicator
 */
export const PSL_22 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "PSL.22",
  "version": "2.7",
  "description": "Related Product/Service Code Indicator",
  "type": "Field",
  "item": 1976,
  "table": "HL70879",
  "longName": "HL7Related Product/Service Code Indicator"
});

/**
 * PSL.23 - Product/Service Amount for Physician
 */
export const PSL_23 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PSL.23",
  "version": "2.7",
  "description": "Product/Service Amount for Physician",
  "type": "Field",
  "item": 1977,
  "table": "",
  "longName": "HL7Product/Service Amount for Physician"
});

/**
 * PSL.24 - Product/Service Cost Factor
 */
export const PSL_24 = datatypes.NM.register(hl7v2Metadata, {
  "title": "PSL.24",
  "version": "2.7",
  "description": "Product/Service Cost Factor",
  "type": "Field",
  "item": 1978,
  "table": "",
  "longName": "HL7Product/Service Cost Factor"
});

/**
 * PSL.25 - Cost Center
 */
export const PSL_25 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PSL.25",
  "version": "2.7",
  "description": "Cost Center",
  "type": "Field",
  "item": 1933,
  "table": "",
  "longName": "HL7Cost Center"
});

/**
 * PSL.26 - Billing Period
 */
export const PSL_26 = datatypes.DR.register(hl7v2Metadata, {
  "title": "PSL.26",
  "version": "2.7",
  "description": "Billing Period",
  "type": "Field",
  "item": 1980,
  "table": "",
  "longName": "HL7Billing Period"
});

/**
 * PSL.27 - Days without Billing
 */
export const PSL_27 = datatypes.NM.register(hl7v2Metadata, {
  "title": "PSL.27",
  "version": "2.7",
  "description": "Days without Billing",
  "type": "Field",
  "item": 1981,
  "table": "",
  "longName": "HL7Days without Billing"
});

/**
 * PSL.28 - Session-No
 */
export const PSL_28 = datatypes.NM.register(hl7v2Metadata, {
  "title": "PSL.28",
  "version": "2.7",
  "description": "Session-No",
  "type": "Field",
  "item": 1982,
  "table": "",
  "longName": "HL7Session-No",
  "length": 4
});

/**
 * PSL.29 - Executing Physician ID
 */
export const PSL_29 = datatypes.XCN.register(hl7v2Metadata, {
  "title": "PSL.29",
  "version": "2.7",
  "description": "Executing Physician ID",
  "type": "Field",
  "item": 1983,
  "table": "",
  "longName": "HL7Executing Physician ID"
});

/**
 * PSL.30 - Responsible Physician ID
 */
export const PSL_30 = datatypes.XCN.register(hl7v2Metadata, {
  "title": "PSL.30",
  "version": "2.7",
  "description": "Responsible Physician ID",
  "type": "Field",
  "item": 1984,
  "table": "",
  "longName": "HL7Responsible Physician ID"
});

/**
 * PSL.31 - Role Executing Physician
 */
export const PSL_31 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "PSL.31",
  "version": "2.7",
  "description": "Role Executing Physician",
  "type": "Field",
  "item": 1985,
  "table": "HL70881",
  "longName": "HL7Role Executing Physician"
});

/**
 * PSL.32 - Medical Role Executing Physician
 */
export const PSL_32 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "PSL.32",
  "version": "2.7",
  "description": "Medical Role Executing Physician",
  "type": "Field",
  "item": 1986,
  "table": "HL70882",
  "longName": "HL7Medical Role Executing Physician"
});

/**
 * PSL.33 - Side of body
 */
export const PSL_33 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "PSL.33",
  "version": "2.7",
  "description": "Side of body",
  "type": "Field",
  "item": 1987,
  "table": "HL70894",
  "longName": "HL7Side of body"
});

/**
 * PSL.34 - Number of TP's PP
 */
export const PSL_34 = datatypes.NM.register(hl7v2Metadata, {
  "title": "PSL.34",
  "version": "2.7",
  "description": "Number of TP's PP",
  "type": "Field",
  "item": 1988,
  "table": "",
  "longName": "HL7Number of TP's PP"
});

/**
 * PSL.35 - TP-Value PP
 */
export const PSL_35 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PSL.35",
  "version": "2.7",
  "description": "TP-Value PP",
  "type": "Field",
  "item": 1989,
  "table": "",
  "longName": "HL7TP-Value PP"
});

/**
 * PSL.36 - Internal Scaling Factor PP
 */
export const PSL_36 = datatypes.NM.register(hl7v2Metadata, {
  "title": "PSL.36",
  "version": "2.7",
  "description": "Internal Scaling Factor PP",
  "type": "Field",
  "item": 1990,
  "table": "",
  "longName": "HL7Internal Scaling Factor PP"
});

/**
 * PSL.37 - External Scaling Factor PP
 */
export const PSL_37 = datatypes.NM.register(hl7v2Metadata, {
  "title": "PSL.37",
  "version": "2.7",
  "description": "External Scaling Factor PP",
  "type": "Field",
  "item": 1991,
  "table": "",
  "longName": "HL7External Scaling Factor PP"
});

/**
 * PSL.38 - Amount PP
 */
export const PSL_38 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PSL.38",
  "version": "2.7",
  "description": "Amount PP",
  "type": "Field",
  "item": 1992,
  "table": "",
  "longName": "HL7Amount PP"
});

/**
 * PSL.39 - Number of TP's Technical Part
 */
export const PSL_39 = datatypes.NM.register(hl7v2Metadata, {
  "title": "PSL.39",
  "version": "2.7",
  "description": "Number of TP's Technical Part",
  "type": "Field",
  "item": 1993,
  "table": "",
  "longName": "HL7Number of TP's Technical Part"
});

/**
 * PSL.40 - TP-Value Technical Part
 */
export const PSL_40 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PSL.40",
  "version": "2.7",
  "description": "TP-Value Technical Part",
  "type": "Field",
  "item": 1994,
  "table": "",
  "longName": "HL7TP-Value Technical Part"
});

/**
 * PSL.41 - Internal Scaling Factor Technical Part
 */
export const PSL_41 = datatypes.NM.register(hl7v2Metadata, {
  "title": "PSL.41",
  "version": "2.7",
  "description": "Internal Scaling Factor Technical Part",
  "type": "Field",
  "item": 1995,
  "table": "",
  "longName": "HL7Internal Scaling Factor Technical Part"
});

/**
 * PSL.42 - External Scaling Factor Technical Part
 */
export const PSL_42 = datatypes.NM.register(hl7v2Metadata, {
  "title": "PSL.42",
  "version": "2.7",
  "description": "External Scaling Factor Technical Part",
  "type": "Field",
  "item": 1996,
  "table": "",
  "longName": "HL7External Scaling Factor Technical Part"
});

/**
 * PSL.43 - Amount Technical Part
 */
export const PSL_43 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PSL.43",
  "version": "2.7",
  "description": "Amount Technical Part",
  "type": "Field",
  "item": 1997,
  "table": "",
  "longName": "HL7Amount Technical Part"
});

/**
 * PSL.44 - Total Amount Professional Part + Technical Part
 */
export const PSL_44 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PSL.44",
  "version": "2.7",
  "description": "Total Amount Professional Part + Technical Part",
  "type": "Field",
  "item": 1998,
  "table": "",
  "longName": "HL7Total Amount Professional Part + Technical Part"
});

/**
 * PSL.45 - VAT-Rate
 */
export const PSL_45 = datatypes.NM.register(hl7v2Metadata, {
  "title": "PSL.45",
  "version": "2.7",
  "description": "VAT-Rate",
  "type": "Field",
  "item": 1999,
  "table": "",
  "longName": "HL7VAT-Rate"
});

/**
 * PSL.46 - Main-Service
 */
export const PSL_46 = datatypes.ID.register(hl7v2Metadata, {
  "title": "PSL.46",
  "version": "2.7",
  "description": "Main-Service",
  "type": "Field",
  "item": 2000,
  "table": "",
  "longName": "HL7Main-Service",
  "length": 20
});

/**
 * PSL.47 - Validation
 */
export const PSL_47 = datatypes.ID.register(hl7v2Metadata, {
  "title": "PSL.47",
  "version": "2.7",
  "description": "Validation",
  "type": "Field",
  "item": 2001,
  "table": "HL70136",
  "longName": "HL7Validation",
  "length": 1
});

/**
 * PSL.48 - Comment
 */
export const PSL_48 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PSL.48",
  "version": "2.7",
  "description": "Comment",
  "type": "Field",
  "item": 2002,
  "table": "",
  "longName": "HL7Comment"
});
