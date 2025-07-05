
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.6 RFI Fields
 * 
 * HL7 v2.6 RFI field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * RFI.1 - Request Date
 */
export const RFI_1 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "RFI.1",
  "version": "2.6",
  "description": "Request Date",
  "type": "Field",
  "item": 1910,
  "table": "",
  "longName": "HL7Request Date",
  "length": 24
});

/**
 * RFI.2 - Response Due Date
 */
export const RFI_2 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "RFI.2",
  "version": "2.6",
  "description": "Response Due Date",
  "type": "Field",
  "item": 1911,
  "table": "",
  "longName": "HL7Response Due Date",
  "length": 24
});

/**
 * RFI.3 - Patient Consent
 */
export const RFI_3 = datatypes.ID.register(hl7v2Metadata, {
  "title": "RFI.3",
  "version": "2.6",
  "description": "Patient Consent",
  "type": "Field",
  "item": 1912,
  "table": "HL70136",
  "longName": "HL7Patient Consent",
  "length": 1
});

/**
 * RFI.4 - Date Additional Information was submitted
 */
export const RFI_4 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "RFI.4",
  "version": "2.6",
  "description": "Date Additional Information was submitted",
  "type": "Field",
  "item": 1913,
  "table": "",
  "longName": "HL7Date Additional Information was submitted",
  "length": 24
});
