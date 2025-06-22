import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.8 IVC Fields
 * 
 * HL7 v2.8 IVC field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * IVC.1 - Provider Invoice Number
 */
export const IVC_1 = datatypes.ST.register(hl7v2Metadata, {
  "title": "IVC.1",
  "version": "2.8",
  "description": "Provider Invoice Number",
  "type": "Field",
  "item": 1914,
  "table": "",
  "longName": "HL7Provider Invoice Number"
});

/**
 * IVC.2 - Payer Invoice Number
 */
export const IVC_2 = datatypes.ST.register(hl7v2Metadata, {
  "title": "IVC.2",
  "version": "2.8",
  "description": "Payer Invoice Number",
  "type": "Field",
  "item": 1915,
  "table": "",
  "longName": "HL7Payer Invoice Number"
});

/**
 * IVC.3 - Contract/Agreement Number
 */
export const IVC_3 = datatypes.ST.register(hl7v2Metadata, {
  "title": "IVC.3",
  "version": "2.8",
  "description": "Contract/Agreement Number",
  "type": "Field",
  "item": 1916,
  "table": "",
  "longName": "HL7Contract/Agreement Number"
});

/**
 * IVC.4 - Invoice Control
 */
export const IVC_4 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "IVC.4",
  "version": "2.8",
  "description": "Invoice Control",
  "type": "Field",
  "item": 1917,
  "table": "HL70553",
  "longName": "HL7Invoice Control"
});

/**
 * IVC.5 - Invoice Reason
 */
export const IVC_5 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "IVC.5",
  "version": "2.8",
  "description": "Invoice Reason",
  "type": "Field",
  "item": 1918,
  "table": "HL70554",
  "longName": "HL7Invoice Reason"
});

/**
 * IVC.6 - Invoice Type
 */
export const IVC_6 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "IVC.6",
  "version": "2.8",
  "description": "Invoice Type",
  "type": "Field",
  "item": 1919,
  "table": "HL70555",
  "longName": "HL7Invoice Type"
});

/**
 * IVC.7 - Invoice Date/Time
 */
export const IVC_7 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "IVC.7",
  "version": "2.8",
  "description": "Invoice Date/Time",
  "type": "Field",
  "item": 1920,
  "table": "",
  "longName": "HL7Invoice Date/Time"
});

/**
 * IVC.8 - Invoice Amount
 */
export const IVC_8 = datatypes.ST.register(hl7v2Metadata, {
  "title": "IVC.8",
  "version": "2.8",
  "description": "Invoice Amount",
  "type": "Field",
  "item": 1921,
  "table": "",
  "longName": "HL7Invoice Amount"
});

/**
 * IVC.9 - Payment Terms
 */
export const IVC_9 = datatypes.ST.register(hl7v2Metadata, {
  "title": "IVC.9",
  "version": "2.8",
  "description": "Payment Terms",
  "type": "Field",
  "item": 1922,
  "table": "",
  "longName": "HL7Payment Terms"
});

/**
 * IVC.10 - Provider Organization
 */
export const IVC_10 = datatypes.XON.register(hl7v2Metadata, {
  "title": "IVC.10",
  "version": "2.8",
  "description": "Provider Organization",
  "type": "Field",
  "item": 1923,
  "table": "",
  "longName": "HL7Provider Organization"
});

/**
 * IVC.11 - Payer Organization
 */
export const IVC_11 = datatypes.XON.register(hl7v2Metadata, {
  "title": "IVC.11",
  "version": "2.8",
  "description": "Payer Organization",
  "type": "Field",
  "item": 1924,
  "table": "",
  "longName": "HL7Payer Organization"
});

/**
 * IVC.12 - Attention
 */
export const IVC_12 = datatypes.XCN.register(hl7v2Metadata, {
  "title": "IVC.12",
  "version": "2.8",
  "description": "Attention",
  "type": "Field",
  "item": 1925,
  "table": "",
  "longName": "HL7Attention"
});

/**
 * IVC.13 - Last Invoice Indicator
 */
export const IVC_13 = datatypes.ID.register(hl7v2Metadata, {
  "title": "IVC.13",
  "version": "2.8",
  "description": "Last Invoice Indicator",
  "type": "Field",
  "item": 1926,
  "table": "HL70136",
  "longName": "HL7Last Invoice Indicator",
  "length": 1
});

/**
 * IVC.14 - Invoice Booking Period
 */
export const IVC_14 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "IVC.14",
  "version": "2.8",
  "description": "Invoice Booking Period",
  "type": "Field",
  "item": 1927,
  "table": "",
  "longName": "HL7Invoice Booking Period"
});

/**
 * IVC.15 - Origin
 */
export const IVC_15 = datatypes.ST.register(hl7v2Metadata, {
  "title": "IVC.15",
  "version": "2.8",
  "description": "Origin",
  "type": "Field",
  "item": 1928,
  "table": "",
  "longName": "HL7Origin"
});

/**
 * IVC.16 - Invoice Fixed Amount
 */
export const IVC_16 = datatypes.ST.register(hl7v2Metadata, {
  "title": "IVC.16",
  "version": "2.8",
  "description": "Invoice Fixed Amount",
  "type": "Field",
  "item": 1929,
  "table": "",
  "longName": "HL7Invoice Fixed Amount"
});

/**
 * IVC.17 - Special Costs
 */
export const IVC_17 = datatypes.ST.register(hl7v2Metadata, {
  "title": "IVC.17",
  "version": "2.8",
  "description": "Special Costs",
  "type": "Field",
  "item": 1930,
  "table": "",
  "longName": "HL7Special Costs"
});

/**
 * IVC.18 - Amount for Doctors Treatment
 */
export const IVC_18 = datatypes.ST.register(hl7v2Metadata, {
  "title": "IVC.18",
  "version": "2.8",
  "description": "Amount for Doctors Treatment",
  "type": "Field",
  "item": 1931,
  "table": "",
  "longName": "HL7Amount for Doctors Treatment"
});

/**
 * IVC.19 - Responsible Physician
 */
export const IVC_19 = datatypes.XCN.register(hl7v2Metadata, {
  "title": "IVC.19",
  "version": "2.8",
  "description": "Responsible Physician",
  "type": "Field",
  "item": 1932,
  "table": "",
  "longName": "HL7Responsible Physician"
});

/**
 * IVC.20 - Cost Center
 */
export const IVC_20 = datatypes.ST.register(hl7v2Metadata, {
  "title": "IVC.20",
  "version": "2.8",
  "description": "Cost Center",
  "type": "Field",
  "item": 1933,
  "table": "",
  "longName": "HL7Cost Center"
});

/**
 * IVC.21 - Invoice Prepaid Amount
 */
export const IVC_21 = datatypes.ST.register(hl7v2Metadata, {
  "title": "IVC.21",
  "version": "2.8",
  "description": "Invoice Prepaid Amount",
  "type": "Field",
  "item": 1934,
  "table": "",
  "longName": "HL7Invoice Prepaid Amount"
});

/**
 * IVC.22 - Total Invoice Amount without Prepaid Amount
 */
export const IVC_22 = datatypes.ST.register(hl7v2Metadata, {
  "title": "IVC.22",
  "version": "2.8",
  "description": "Total Invoice Amount without Prepaid Amount",
  "type": "Field",
  "item": 1935,
  "table": "",
  "longName": "HL7Total Invoice Amount without Prepaid Amount"
});

/**
 * IVC.23 - Total-Amount of VAT
 */
export const IVC_23 = datatypes.ST.register(hl7v2Metadata, {
  "title": "IVC.23",
  "version": "2.8",
  "description": "Total-Amount of VAT",
  "type": "Field",
  "item": 1936,
  "table": "",
  "longName": "HL7Total-Amount of VAT"
});

/**
 * IVC.24 - VAT-Rates applied
 */
export const IVC_24 = datatypes.NM.register(hl7v2Metadata, {
  "title": "IVC.24",
  "version": "2.8",
  "description": "VAT-Rates applied",
  "type": "Field",
  "item": 1937,
  "table": "",
  "longName": "HL7VAT-Rates applied",
  "length": 5
});

/**
 * IVC.25 - Benefit Group
 */
export const IVC_25 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "IVC.25",
  "version": "2.8",
  "description": "Benefit Group",
  "type": "Field",
  "item": 1938,
  "table": "HL70556",
  "longName": "HL7Benefit Group"
});

/**
 * IVC.26 - Provider Tax ID
 */
export const IVC_26 = datatypes.ST.register(hl7v2Metadata, {
  "title": "IVC.26",
  "version": "2.8",
  "description": "Provider Tax ID",
  "type": "Field",
  "item": 2038,
  "table": "",
  "longName": "HL7Provider Tax ID"
});

/**
 * IVC.27 - Payer Tax ID
 */
export const IVC_27 = datatypes.ST.register(hl7v2Metadata, {
  "title": "IVC.27",
  "version": "2.8",
  "description": "Payer Tax ID",
  "type": "Field",
  "item": 2039,
  "table": "",
  "longName": "HL7Payer Tax ID"
});

/**
 * IVC.28 - Provider Tax Status
 */
export const IVC_28 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "IVC.28",
  "version": "2.8",
  "description": "Provider Tax Status",
  "type": "Field",
  "item": 2040,
  "table": "HL70572",
  "longName": "HL7Provider Tax Status"
});

/**
 * IVC.29 - Payer Tax Status
 */
export const IVC_29 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "IVC.29",
  "version": "2.8",
  "description": "Payer Tax Status",
  "type": "Field",
  "item": 2041,
  "table": "HL70572",
  "longName": "HL7Payer Tax Status"
});

/**
 * IVC.30 - Sales Tax ID
 */
export const IVC_30 = datatypes.ST.register(hl7v2Metadata, {
  "title": "IVC.30",
  "version": "2.8",
  "description": "Sales Tax ID",
  "type": "Field",
  "item": 2042,
  "table": "",
  "longName": "HL7Sales Tax ID"
});
