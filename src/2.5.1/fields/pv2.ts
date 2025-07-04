import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.5 PV2 Fields
 * 
 * HL7 v2.5 PV2 field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * PV2.1 - Prior Pending Location
 */
export const PV2_1 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PV2.1",
  "version": "2.5",
  "description": "Prior Pending Location",
  "type": "Field",
  "item": 181,
  "table": "",
  "longName": "HL7Prior Pending Location",
  "length": 80
});

/**
 * PV2.2 - Accommodation Code
 */
export const PV2_2 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PV2.2",
  "version": "2.5",
  "description": "Accommodation Code",
  "type": "Field",
  "item": 182,
  "table": "HL70129",
  "longName": "HL7Accommodation Code",
  "length": 250
});

/**
 * PV2.3 - Admit Reason
 */
export const PV2_3 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PV2.3",
  "version": "2.5",
  "description": "Admit Reason",
  "type": "Field",
  "item": 183,
  "table": "",
  "longName": "HL7Admit Reason",
  "length": 250
});

/**
 * PV2.4 - Transfer Reason
 */
export const PV2_4 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PV2.4",
  "version": "2.5",
  "description": "Transfer Reason",
  "type": "Field",
  "item": 184,
  "table": "",
  "longName": "HL7Transfer Reason",
  "length": 250
});

/**
 * PV2.5 - Patient Valuables
 */
export const PV2_5 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PV2.5",
  "version": "2.5",
  "description": "Patient Valuables",
  "type": "Field",
  "item": 185,
  "table": "",
  "longName": "HL7Patient Valuables",
  "length": 25
});

/**
 * PV2.6 - Patient Valuables Location
 */
export const PV2_6 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PV2.6",
  "version": "2.5",
  "description": "Patient Valuables Location",
  "type": "Field",
  "item": 186,
  "table": "",
  "longName": "HL7Patient Valuables Location",
  "length": 25
});

/**
 * PV2.7 - Visit User Code
 */
export const PV2_7 = datatypes.IS.register(hl7v2Metadata, {
  "title": "PV2.7",
  "version": "2.5",
  "description": "Visit User Code",
  "type": "Field",
  "item": 187,
  "table": "HL70130",
  "longName": "HL7Visit User Code",
  "length": 2
});

/**
 * PV2.8 - Expected Admit Date/Time
 */
export const PV2_8 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PV2.8",
  "version": "2.5",
  "description": "Expected Admit Date/Time",
  "type": "Field",
  "item": 188,
  "table": "",
  "longName": "HL7Expected Admit Date/Time",
  "length": 26
});

/**
 * PV2.9 - Expected Discharge Date/Time
 */
export const PV2_9 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PV2.9",
  "version": "2.5",
  "description": "Expected Discharge Date/Time",
  "type": "Field",
  "item": 189,
  "table": "",
  "longName": "HL7Expected Discharge Date/Time",
  "length": 26
});

/**
 * PV2.10 - Estimated Length of Inpatient Stay
 */
export const PV2_10 = datatypes.NM.register(hl7v2Metadata, {
  "title": "PV2.10",
  "version": "2.5",
  "description": "Estimated Length of Inpatient Stay",
  "type": "Field",
  "item": 711,
  "table": "",
  "longName": "HL7Estimated Length of Inpatient Stay",
  "length": 3
});

/**
 * PV2.11 - Actual Length of Inpatient Stay
 */
export const PV2_11 = datatypes.NM.register(hl7v2Metadata, {
  "title": "PV2.11",
  "version": "2.5",
  "description": "Actual Length of Inpatient Stay",
  "type": "Field",
  "item": 712,
  "table": "",
  "longName": "HL7Actual Length of Inpatient Stay",
  "length": 3
});

/**
 * PV2.12 - Visit Description
 */
export const PV2_12 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PV2.12",
  "version": "2.5",
  "description": "Visit Description",
  "type": "Field",
  "item": 713,
  "table": "",
  "longName": "HL7Visit Description",
  "length": 50
});

/**
 * PV2.13 - Referral Source Code
 */
export const PV2_13 = datatypes.XCN.register(hl7v2Metadata, {
  "title": "PV2.13",
  "version": "2.5",
  "description": "Referral Source Code",
  "type": "Field",
  "item": 714,
  "table": "",
  "longName": "HL7Referral Source Code",
  "length": 250
});

/**
 * PV2.14 - Previous Service Date
 */
export const PV2_14 = datatypes.DT.register(hl7v2Metadata, {
  "title": "PV2.14",
  "version": "2.5",
  "description": "Previous Service Date",
  "type": "Field",
  "item": 715,
  "table": "",
  "longName": "HL7Previous Service Date",
  "length": 8
});

/**
 * PV2.15 - Employment Illness Related Indicator
 */
export const PV2_15 = datatypes.ID.register(hl7v2Metadata, {
  "title": "PV2.15",
  "version": "2.5",
  "description": "Employment Illness Related Indicator",
  "type": "Field",
  "item": 716,
  "table": "HL70136",
  "longName": "HL7Employment Illness Related Indicator",
  "length": 1
});

/**
 * PV2.16 - Purge Status Code
 */
export const PV2_16 = datatypes.IS.register(hl7v2Metadata, {
  "title": "PV2.16",
  "version": "2.5",
  "description": "Purge Status Code",
  "type": "Field",
  "item": 717,
  "table": "HL70213",
  "longName": "HL7Purge Status Code",
  "length": 1
});

/**
 * PV2.17 - Purge Status Date
 */
export const PV2_17 = datatypes.DT.register(hl7v2Metadata, {
  "title": "PV2.17",
  "version": "2.5",
  "description": "Purge Status Date",
  "type": "Field",
  "item": 718,
  "table": "",
  "longName": "HL7Purge Status Date",
  "length": 8
});

/**
 * PV2.18 - Special Program Code
 */
export const PV2_18 = datatypes.IS.register(hl7v2Metadata, {
  "title": "PV2.18",
  "version": "2.5",
  "description": "Special Program Code",
  "type": "Field",
  "item": 719,
  "table": "HL70214",
  "longName": "HL7Special Program Code",
  "length": 2
});

/**
 * PV2.19 - Retention Indicator
 */
export const PV2_19 = datatypes.ID.register(hl7v2Metadata, {
  "title": "PV2.19",
  "version": "2.5",
  "description": "Retention Indicator",
  "type": "Field",
  "item": 720,
  "table": "HL70136",
  "longName": "HL7Retention Indicator",
  "length": 1
});

/**
 * PV2.20 - Expected Number of Insurance Plans
 */
export const PV2_20 = datatypes.NM.register(hl7v2Metadata, {
  "title": "PV2.20",
  "version": "2.5",
  "description": "Expected Number of Insurance Plans",
  "type": "Field",
  "item": 721,
  "table": "",
  "longName": "HL7Expected Number of Insurance Plans",
  "length": 1
});

/**
 * PV2.21 - Visit Publicity Code
 */
export const PV2_21 = datatypes.IS.register(hl7v2Metadata, {
  "title": "PV2.21",
  "version": "2.5",
  "description": "Visit Publicity Code",
  "type": "Field",
  "item": 722,
  "table": "HL70215",
  "longName": "HL7Visit Publicity Code",
  "length": 1
});

/**
 * PV2.22 - Visit Protection Indicator
 */
export const PV2_22 = datatypes.ID.register(hl7v2Metadata, {
  "title": "PV2.22",
  "version": "2.5",
  "description": "Visit Protection Indicator",
  "type": "Field",
  "item": 723,
  "table": "HL70136",
  "longName": "HL7Visit Protection Indicator",
  "length": 1
});

/**
 * PV2.23 - Clinic Organization Name
 */
export const PV2_23 = datatypes.XON.register(hl7v2Metadata, {
  "title": "PV2.23",
  "version": "2.5",
  "description": "Clinic Organization Name",
  "type": "Field",
  "item": 724,
  "table": "",
  "longName": "HL7Clinic Organization Name",
  "length": 250
});

/**
 * PV2.24 - Patient Status Code
 */
export const PV2_24 = datatypes.IS.register(hl7v2Metadata, {
  "title": "PV2.24",
  "version": "2.5",
  "description": "Patient Status Code",
  "type": "Field",
  "item": 725,
  "table": "HL70216",
  "longName": "HL7Patient Status Code",
  "length": 2
});

/**
 * PV2.25 - Visit Priority Code
 */
export const PV2_25 = datatypes.IS.register(hl7v2Metadata, {
  "title": "PV2.25",
  "version": "2.5",
  "description": "Visit Priority Code",
  "type": "Field",
  "item": 726,
  "table": "HL70217",
  "longName": "HL7Visit Priority Code",
  "length": 1
});

/**
 * PV2.26 - Previous Treatment Date
 */
export const PV2_26 = datatypes.DT.register(hl7v2Metadata, {
  "title": "PV2.26",
  "version": "2.5",
  "description": "Previous Treatment Date",
  "type": "Field",
  "item": 727,
  "table": "",
  "longName": "HL7Previous Treatment Date",
  "length": 8
});

/**
 * PV2.27 - Expected Discharge Disposition
 */
export const PV2_27 = datatypes.IS.register(hl7v2Metadata, {
  "title": "PV2.27",
  "version": "2.5",
  "description": "Expected Discharge Disposition",
  "type": "Field",
  "item": 728,
  "table": "HL70112",
  "longName": "HL7Expected Discharge Disposition",
  "length": 2
});

/**
 * PV2.28 - Signature on File Date
 */
export const PV2_28 = datatypes.DT.register(hl7v2Metadata, {
  "title": "PV2.28",
  "version": "2.5",
  "description": "Signature on File Date",
  "type": "Field",
  "item": 729,
  "table": "",
  "longName": "HL7Signature on File Date",
  "length": 8
});

/**
 * PV2.29 - First Similar Illness Date
 */
export const PV2_29 = datatypes.DT.register(hl7v2Metadata, {
  "title": "PV2.29",
  "version": "2.5",
  "description": "First Similar Illness Date",
  "type": "Field",
  "item": 730,
  "table": "",
  "longName": "HL7First Similar Illness Date",
  "length": 8
});

/**
 * PV2.30 - Patient Charge Adjustment Code
 */
export const PV2_30 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PV2.30",
  "version": "2.5",
  "description": "Patient Charge Adjustment Code",
  "type": "Field",
  "item": 731,
  "table": "HL70218",
  "longName": "HL7Patient Charge Adjustment Code",
  "length": 250
});

/**
 * PV2.31 - Recurring Service Code
 */
export const PV2_31 = datatypes.IS.register(hl7v2Metadata, {
  "title": "PV2.31",
  "version": "2.5",
  "description": "Recurring Service Code",
  "type": "Field",
  "item": 732,
  "table": "HL70219",
  "longName": "HL7Recurring Service Code",
  "length": 2
});

/**
 * PV2.32 - Billing Media Code
 */
export const PV2_32 = datatypes.ID.register(hl7v2Metadata, {
  "title": "PV2.32",
  "version": "2.5",
  "description": "Billing Media Code",
  "type": "Field",
  "item": 733,
  "table": "HL70136",
  "longName": "HL7Billing Media Code",
  "length": 1
});

/**
 * PV2.33 - Expected Surgery Date and Time
 */
export const PV2_33 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PV2.33",
  "version": "2.5",
  "description": "Expected Surgery Date and Time",
  "type": "Field",
  "item": 734,
  "table": "",
  "longName": "HL7Expected Surgery Date and Time",
  "length": 26
});

/**
 * PV2.34 - Military Partnership Code
 */
export const PV2_34 = datatypes.ID.register(hl7v2Metadata, {
  "title": "PV2.34",
  "version": "2.5",
  "description": "Military Partnership Code",
  "type": "Field",
  "item": 735,
  "table": "HL70136",
  "longName": "HL7Military Partnership Code",
  "length": 1
});

/**
 * PV2.35 - Military Non-Availability Code
 */
export const PV2_35 = datatypes.ID.register(hl7v2Metadata, {
  "title": "PV2.35",
  "version": "2.5",
  "description": "Military Non-Availability Code",
  "type": "Field",
  "item": 736,
  "table": "HL70136",
  "longName": "HL7Military Non-Availability Code",
  "length": 1
});

/**
 * PV2.36 - Newborn Baby Indicator
 */
export const PV2_36 = datatypes.ID.register(hl7v2Metadata, {
  "title": "PV2.36",
  "version": "2.5",
  "description": "Newborn Baby Indicator",
  "type": "Field",
  "item": 737,
  "table": "HL70136",
  "longName": "HL7Newborn Baby Indicator",
  "length": 1
});

/**
 * PV2.37 - Baby Detained Indicator
 */
export const PV2_37 = datatypes.ID.register(hl7v2Metadata, {
  "title": "PV2.37",
  "version": "2.5",
  "description": "Baby Detained Indicator",
  "type": "Field",
  "item": 738,
  "table": "HL70136",
  "longName": "HL7Baby Detained Indicator",
  "length": 1
});

/**
 * PV2.38 - Mode of Arrival Code
 */
export const PV2_38 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PV2.38",
  "version": "2.5",
  "description": "Mode of Arrival Code",
  "type": "Field",
  "item": 1543,
  "table": "HL70430",
  "longName": "HL7Mode of Arrival Code",
  "length": 250
});

/**
 * PV2.39 - Recreational Drug Use Code
 */
export const PV2_39 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PV2.39",
  "version": "2.5",
  "description": "Recreational Drug Use Code",
  "type": "Field",
  "item": 1544,
  "table": "HL70431",
  "longName": "HL7Recreational Drug Use Code",
  "length": 250
});

/**
 * PV2.40 - Admission Level of Care Code
 */
export const PV2_40 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PV2.40",
  "version": "2.5",
  "description": "Admission Level of Care Code",
  "type": "Field",
  "item": 1545,
  "table": "HL70432",
  "longName": "HL7Admission Level of Care Code",
  "length": 250
});

/**
 * PV2.41 - Precaution Code
 */
export const PV2_41 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PV2.41",
  "version": "2.5",
  "description": "Precaution Code",
  "type": "Field",
  "item": 1546,
  "table": "HL70433",
  "longName": "HL7Precaution Code",
  "length": 250
});

/**
 * PV2.42 - Patient Condition Code
 */
export const PV2_42 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PV2.42",
  "version": "2.5",
  "description": "Patient Condition Code",
  "type": "Field",
  "item": 1547,
  "table": "HL70434",
  "longName": "HL7Patient Condition Code",
  "length": 250
});

/**
 * PV2.43 - Living Will Code
 */
export const PV2_43 = datatypes.IS.register(hl7v2Metadata, {
  "title": "PV2.43",
  "version": "2.5",
  "description": "Living Will Code",
  "type": "Field",
  "item": 759,
  "table": "HL70315",
  "longName": "HL7Living Will Code",
  "length": 2
});

/**
 * PV2.44 - Organ Donor Code
 */
export const PV2_44 = datatypes.IS.register(hl7v2Metadata, {
  "title": "PV2.44",
  "version": "2.5",
  "description": "Organ Donor Code",
  "type": "Field",
  "item": 760,
  "table": "HL70316",
  "longName": "HL7Organ Donor Code",
  "length": 2
});

/**
 * PV2.45 - Advance Directive Code
 */
export const PV2_45 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PV2.45",
  "version": "2.5",
  "description": "Advance Directive Code",
  "type": "Field",
  "item": 1548,
  "table": "HL70435",
  "longName": "HL7Advance Directive Code",
  "length": 250
});

/**
 * PV2.46 - Patient Status Effective Date
 */
export const PV2_46 = datatypes.DT.register(hl7v2Metadata, {
  "title": "PV2.46",
  "version": "2.5",
  "description": "Patient Status Effective Date",
  "type": "Field",
  "item": 1549,
  "table": "",
  "longName": "HL7Patient Status Effective Date",
  "length": 8
});

/**
 * PV2.47 - Expected LOA Return Date/Time
 */
export const PV2_47 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PV2.47",
  "version": "2.5",
  "description": "Expected LOA Return Date/Time",
  "type": "Field",
  "item": 1550,
  "table": "",
  "longName": "HL7Expected LOA Return Date/Time",
  "length": 26
});

/**
 * PV2.48 - Expected Pre-admission Testing Date/Time
 */
export const PV2_48 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PV2.48",
  "version": "2.5",
  "description": "Expected Pre-admission Testing Date/Time",
  "type": "Field",
  "item": 1841,
  "table": "",
  "longName": "HL7Expected Pre-admission Testing Date/Time",
  "length": 26
});

/**
 * PV2.49 - Notify Clergy Code
 */
export const PV2_49 = datatypes.IS.register(hl7v2Metadata, {
  "title": "PV2.49",
  "version": "2.5",
  "description": "Notify Clergy Code",
  "type": "Field",
  "item": 1842,
  "table": "HL70534",
  "longName": "HL7Notify Clergy Code",
  "length": 20
});
