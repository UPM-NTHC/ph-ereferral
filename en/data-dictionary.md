# Data Dictionary - PH eReferral Implementation Guide v0.1.0

## Data Dictionary

# PH eReferral Data Dictionary

This page provides the authoritative data dictionary for the Philippine eReferral Implementation Guide. It maps all Technical Development Group (TDG) data elements to their corresponding FHIR resources, elements, and value sets.

## Data Dictionary

The table below shows the complete data dictionary mapping all TDG data elements to their corresponding FHIR resources and elements.

| | | | | | | | |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Create Referral | REF-1 | Name of Referring Practitioner | Printed name of professional | 01 Sending Practitioner (requestor) | Yes | Practitioner.name | ServiceRequest.requester├─ PractitionerRole.practitioner // Initiating├─ Practitioner.name |
| Create Referral | REF-2 | Practitioner Role | Practitioner Role | 01 Sending Practitioner (requestor) | Yes | PractitionerRole.code | ServiceRequest.requester├─ PractitionerRole // Initiating├─ PractitionerRole.code |
| Create Referral | REF-3 | Date & Time of Signature | When signed | 01 Sending Practitioner (requestor) | No | Provenance.recorded // Initiating | Provenance.target├─ ServiceRequest |
| Create Referral | REF-4 | Professional Signature | Signature of the professional | 01 Sending Practitioner (requestor) | No | Provenance.signature // Initiating | Provenance.target├─ ServiceRequest |
| Create Referral | REF-5 | Initiating Facility Name | Referring facility official name.Imp: For pregnancy it is Brrangay Name | 02 Sending Facility (requestor) | Yes | Organization.name | ServiceRequest.requester├─ PractitionerRole.organization // Initiating├─ Organization.name // Initiating |
| Create Referral | REF-6 | Initiating Facility NHFR Code | DOH National Health Facility Registry code | 02 Sending Facility (requestor) | Yes | Organization.identifier(NHFR).value | ServiceRequest.requester├─ PractitionerRole.organization // Initiating├─ Organization.identifier(NHFR) // Initiating |
| Create Referral | REF-7 | Initiating Facility Address | Facility address | 02 Sending Facility (requestor) | No | Organization.address | ServiceRequest.requester├─ PractitionerRole.organization // Initiating├─ Organization.address // Initiating |
| Create Referral | REF-8 | Initiating Facility Contact Number | Facility phone number | 02 Sending Facility (requestor) | No | Organization.telecom | ServiceRequest.requester├─ PractitionerRole.organization // Initiating├─ Organization.telecom // Initiating |
| Create Referral | REF-9 | Care Navigator | Name of receiving staff/navigator | 03 Recieving Practitioner | No | Practitioner.name | Task.owner├─ PractitionerRole.practitioner // Receiving├─ Practitioner.name // Receiving |
| Create Referral | REF-10 | Receiving Facility Name | Intended receiving facility | 04 Receiving Facility | Yes | Organization.name | ServiceRequest.performer├─ PractitionerRole.organization // Receiving├─ Organization.name // ReceivingTask.owner├─ PractitionerRole.organization // Receiving├─ Organization.name // Receiving |
| Create Referral | REF-11 | Receiving Facility NHFR Code | DOH facility code of receiver | 04 Receiving Facility | Yes | Organization.identifier(NHFR).value | ServiceRequest.performer├─ PractitionerRole.organization // Receiving├─ Organization.identifier(NHFR) // ReceivingTask.owner├─ PractitionerRole.organization // Receiving├─ Organization.identifier(NHFR) // Receiving |
| Create Referral | REF-12 | Health Care Provider Network (HCPN) Name | Name of the Health Care Provider Network for Referrals. Referrals can only be be within Network | 05 Referral Request | No | Organization.identifier(HCPN).value├─ Slice by .url (new - cannonical) | ServiceRequest.performer├─ PractitionerRole.organization // Receiving├─ Organization.identifier(HCPN) // ReceivingTask.owner├─ PractitionerRole.organization // Receiving├─ Organization.identifier(HCPN) // Receiving |
| Create Referral | REF-13 | Date of Referral | Date the referral was created | 05 Referral Request | Yes | ServiceRequest.authoredOn |   |
| Create Referral | REF-14 | Referral Category | Urgency and setting indicated by the referrer (emergency vs outpatient/routine). | 05 Referral Request | Yes | ServiceRequest.category =$referral-category#emergency$referral-category#outpatient |   |
| Create Referral | REF-16 | Reason for Referral (service type) | Classification of the requested service | 05 Referral Request | Yes | ServiceRequest.reasonCode.code =$sct#11429006 "Consultation"$sct#165197003 "Diagnostics"$sct#71388002 "Procedure"$sct#3457005 "Others" |   |
| Create Referral | REF-15 | Time Called | This is the date and time when the sending facility called the receiving facility regarding initial inquiry of the referral | 05 Referral Request | No | Task.authoredOn | Task.focus├─ ServiceRequest |
| Referral Triage | REF-17 | Action Point: Received | Receiving facility confirms receipt | 05 Referral Request | No | Task.status =$task-status#received "Action Point Received" | Task.focus├─ ServiceRequest |
| Referral Triage | REF-18 | Action Point: Referred (Forwarded) | Case redirected to another facility | 05 Referral Request | No | Task.status =$task-status#rejected "Action Point Forwarded" | Task.focus├─ ServiceRequest |
| Presenting Patient | REF-21 | Patient Full Name | Patient legal name | 06 Patient Demographics | Yes | Patient.name |   |
| Presenting Patient | REF-22 | Sex (Administrative Gender) | Administrative gender of patient | 06 Patient Demographics | Yes | Patient.gender |   |
| Presenting Patient | REF-23 | Birth Date | Patient date of birth | 06 Patient Demographics | Yes | Patient.birthDate |   |
| Presenting Patient | REF-24 | Age (computed) | Derived age at referral | 06 Patient Demographics | No | Patient.birthDate |   |
| Presenting Patient | REF-25 | Identity Number (PhilSys) | PhilSys National ID number | 06 Patient Demographics | No | Patient.identifier(PHCorePhilSysID) |   |
| Presenting Patient | REF-26 | PhilHealth ID | PhilHealth membership number | 06 Patient Demographics | No | Patient.identifier(PHCorePhilHealthID) |   |
| Presenting Patient | REF-27 | Patient Address | Current residence address | 06 Patient Demographics | Yes | Patient.address |   |
| Presenting Patient | REF-28 | Contact Number | Patient phone | 06 Patient Demographics | No | Patient.telecom |   |
| Presenting Patient | REF-29 | Accompanied By / Next of Kin | Companion/guardian details | 06 Patient Demographics | No | Patient.contact├─ Patient.contact.name├─ Patient.contact.telecom |   |
| Presenting Patient | REF-30 | Patient Disability Registration | PWD registration status/ID | 06 Patient Demographics | No | Patient.extension[pwdDisability] |   |
| Assess Patient Condition | REF-31 | Chief Complaint | Presenting complaint | 07 Clinical Information | No | Condition // Chief Complaint├─ Condition.code.text├─ Condition.category = problem-list-item | Condition.encounter // Initiating├─ Encounter // InitiatingCondition.subject├─ Patient |
| Attach Clinical Summary | REF-32 | Clinical History | Pertinent history | 07 Clinical Information | No | Condition (see above)├─ Condition.note | Condition.encounter // Initiating├─ Encounter // InitiatingCondition.subject├─ Patient |
| Attach Clinical Summary | REF-33 | Vital Signs – Blood Pressure | Blood Pressure | 07 Clinical Information | No | Observation├─ Observation.code = SNOMED CT 75367002 (Blood pressure)├─ Observation.value[x]├─ Observation.category = vital-signs├─ Observation.component[0] Systolic = SNOMED CT 271649006 (Systolic blood pressure)├─ Observation.component[1] Diastolic = SNOMED CT 271650006 (Diastolic blood pressure) | Observation.encounter // Initiating├─ Encounter // InitiatingObservation.subject├─ Patient |
| Attach Clinical Summary | REF-34 | Vital Signs – Heart Rate | Pulse rate | 07 Clinical Information | No | Observation├─ Observation.code = SNOMED CT 78564009 (Heart rate measured at systemic artery)├─ Observation.value[x]├─ Observation.category = vital-signs | Observation.encounter // Initiating├─ Encounter // InitiatingObservation.subject├─ Patient |
| Attach Clinical Summary | REF-35 | Vital Signs – Respiratory Rate | Resp rate | 07 Clinical Information | No | Observation├─ Observation.code = SNOMED CT 86290005 (Respiratory rate)├─ Observation.value[x]├─ Observation.category = vital-signs | Observation.encounter // Initiating├─ Encounter // InitiatingObservation.subject├─ Patient |
| Attach Clinical Summary | REF-36 | Vital Signs – Oxygen Saturation | SpO2 | 07 Clinical Information | No | Observation├─ Observation.code = SNOMED CT 103228002 (Hemoglobin saturation with oxygen)├─ Observation.value[x]├─ Observation.category = vital-signs | Observation.encounter // Initiating├─ Encounter // InitiatingObservation.subject├─ Patient |
| Attach Clinical Summary | REF-37 | Vital Signs – Temperature | Body temperature | 07 Clinical Information | No | Observation├─ Observation.code = SNOMED CT 386725007 (Body temperature)├─ Observation.value[x]├─ Observation.category = vital-signs | Observation.encounter // Initiating├─ Encounter // InitiatingObservation.subject├─ Patient |
| Attach Clinical Summary | REF-38 | Vital Signs – Weight | Weight (kg) | 07 Clinical Information | No | Observation├─ Observation.code = SNOMED CT 27113001 (Body weight)├─ Observation.value[x]├─ Observation.category = vital-signs | Observation.encounter // Initiating├─ Encounter // InitiatingObservation.subject├─ Patient |
| Attach Clinical Summary | REF-39 | Treatment Given | Stabilization procedures/meds | 07 Clinical Information | No | Procedure.note | Procedure.encounter // Initiating├─ Encounter // InitiatingProcedure.subject├─ Patient |
| Attach Clinical Summary | REF-40 | Laboratory Results (attachments) | Labs supporting the referral | 07 Clinical Information | No | DiagnositicReport.presentedForm(Attachment.data) | DiagnosticReport.encounter // Initiating├─ Encounter // InitiatingDiagnosticReport.subject├─ Patient |
| Assess Patient | REF-41 | Working Impression (clinical reason) | Provisional diagnosis/assessment motivating referral | 07 Clinical Information | Yes | Condition // Working Impression├─ Condition.code.text├─ Condition.category = encounter-diagnosis | Condition.encounter // Initiating├─ Encounter // InitiatingCondition.subject├─ PatientServiceRequest.reasonReference├─ Condition // Working Impression |

> **Note:** The source CSV can also be downloaded for offline use or integration with other tools. See the [Download](#download) section below.

-------

## Download

The source CSV (TDG FHIR Mapping.csv) is available in the [repository root](https://github.com/ph-ereferral-organization/ph-ereferral/blob/main/TDG%20FHIR%20Mapping.csv).

-------

## Data Dictionary Structure

The data dictionary covers all profiles defined in the PH eReferral IG and includes the following columns:

| | |
| :--- | :--- |
| **Workflow Task** | Referral workflow phase (e.g. Create Referral, Presenting Patient, Referral Triage) |
| **Element ID** | Technical Development Group identifier (e.g. REF-1, REF-9, REF-21) |
| **Data Element** | Human-readable name of the data element |
| **Description/Definition** | Clinical or business definition |
| **Clinical Information Group** | Category grouping for the element (e.g. Sending Practitioner, Receiving Facility) |
| **Is Required** | Whether the element is required, conditional, or optional (Yes/No) |
| **FHIR Element** | The FHIR resource element path carrying this data |
| **Linked By** | How the element is reached from the bundle root (reference chain) |

-------

## Profile Coverage

The data dictionary covers the following eReferral profiles:

| | | |
| :--- | :--- | :--- |
| [EReferral ServiceRequest](StructureDefinition-ereferral-service-request.md) | REF-1 to REF-21, REF-41 | ServiceRequest |
| [ERefPatient](StructureDefinition-ereferral-patient.md) | REF-21 to REF-30 | Patient |
| [EReferral Task](StructureDefinition-ereferral-task.md) | REF-9, REF-15, REF-17, REF-18 | Task |
| [EReferral Provenance](StructureDefinition-ereferral-provenance.md) | REF-3, REF-4 | Provenance |
| [ERefEncounter](StructureDefinition-ereferral-encounter.md) | (linking resource) | Encounter |
| [ERefObservation](StructureDefinition-ereferral-observation.md) | REF-33 to REF-38 | Observation |
| PHCorePractitioner (from fhir.ph.core) | REF-1, REF-9 | Practitioner |
| [ERefPractitionerRole](StructureDefinition-ereferral-practitioner-role.md) | REF-1, REF-2, REF-5 to REF-11 | PractitionerRole |
| PHCoreOrganization (from fhir.ph.core) | REF-5 to REF-8, REF-10 to REF-12 | Organization |
| [ERefProcedure](StructureDefinition-ereferral-procedure.md) | REF-39 | Procedure |

-------

## How to Use the Data Dictionary

### For Implementers

* Use the **Element ID** column to trace requirements back to the original TDG specification
* Check the **Is Required** column to identify which elements your system must implement
* Review the **FHIR Element** column to see exactly which FHIR element path carries each data element

### For IG Authors

* The CSV file at the repo root serves as the single source of truth for TDG-to-FHIR mappings
* Run `python input/generate_data_dictionary_table.py` to regenerate the table from the CSV
* Updates to the CSV should be reflected in the FSH profile definitions

### For Connectathon Testers

* Reference the data dictionary when validating that test fixtures include all required elements
* Use the **Linked By** column to verify that reference chains in the bundle resolve correctly

-------

## Maintenance

The data dictionary is maintained by the PH eReferral IG authoring team. Updates are driven by:

* TDG Technical Working Group on Digital Health decisions
* PH Core profile updates
* Connectathon feedback and implementation experience
* National health data standards revisions

For questions or corrections please open an issue in the [PH eReferral repository](https://github.com/ph-ereferral-organization/ph-ereferral/issues).

-------

## See Also

* [EReferral ServiceRequest Profile](StructureDefinition-ereferral-service-request.md)
* [ERefPatient Profile](StructureDefinition-ereferral-patient.md)
* [EReferral Task Profile](StructureDefinition-ereferral-task.md)
* [Sample Case: Ana Reyes eReferral](sample-case-ana-reyes.md)
* [v0.1 Scope and Release Notes](v01-scope.md)

