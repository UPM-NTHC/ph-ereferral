# Home - PH eReferral Implementation Guide v0.1.0

## Home

# Philippine eReferral Implementation Guide (PH eReferral IG)

> **Project Status: In Development** This Implementation Guide is under active development and is not yet available for public or production use. Content, data models, and implementation details are subject to change.

## Introduction

The Philippine eReferral Implementation Guide (PH eReferral IG) is a **use case Implementation Guide** that provides a standardized approach for electronic referral workflows within Health Care Provider Networks (HCPNs) in the Philippines. It defines the minimum FHIR-based requirements to support seamless referral of patients between healthcare providers using HL7® FHIR®© standards.

This IG aligns with the **[Universal Health Care Act (Republic Act 11223)](https://elibrary.judiciary.gov.ph/thebookshelf/showdocs/2/86448)** and **[DOH Administrative Order 2020-0019](https://drive.google.com/file/d/1Uri9Iov3YPw3rc3AidV6dXjv8y_W7ydr/view)**, which mandates interoperable health information systems for integrated care across HCPNs. It enables FHIR-based referral messaging, patient navigation, and back-referral workflows consistent with the AO's Annex D requirements.

This FHIR IG is provided for testing purposes and is not yet suitable for production systems.

For the narrative and policy foundation of this implementation guide, see [WHO SMART Guidelines L1 Basis for the PH eReferral IG](who-smart-l1.md).

For the minimum v0.1 testing path, build instructions, fixture pack, and release-readiness checklist, see [v0.1 Connectathon Quick-Start, Test Pack, and Release Readiness](connectathon-readiness.md).

## What is a Use Case IG?

A use case Implementation Guide builds upon foundational and core standards to address a specific clinical or administrative workflow. Unlike base or core IGs that establish broad interoperability foundations, a use case IG:

* **Targets a specific workflow** — in this case, the patient referral process between healthcare facilities
* **Profiles core resources for the use case** — constrains and extends PH Core profiles to meet referral-specific requirements
* **Defines actors and interactions** — identifies systems, users, and the exchanges between them
* **Specifies business rules** — documents the rules governing referral lifecycle, status transitions, and required data elements

PH eReferral demonstrates how FHIR resources can be applied to solve a real-world interoperability challenge in the Philippine healthcare system.

The corresponding L1 narrative basis page explains how this implementation guide is grounded in national policy, HCPN service-delivery design, primary care coordination, and future traceability to WHO SMART L2 and L3 work.

## Purpose and Scope

The PH eReferral IG aims to:

1. Enable standardized electronic referral workflows between healthcare facilities within HCPNs
1. Support patient care continuity through interoperable FHIR-based data exchange
1. Implement[UHC Act (RA 11223)](https://elibrary.judiciary.gov.ph/thebookshelf/showdocs/2/86448)and[DOH AO 2020-0019](https://drive.google.com/file/d/1Uri9Iov3YPw3rc3AidV6dXjv8y_W7ydr/view)requirements for referral systems
1. Provide clear, testable specifications for HCPN referral system implementers

This guide focuses on referral-specific FHIR resources (e.g., ServiceRequest, Task, Communication) and their relationships with core clinical and administrative resources (Patient, Practitioner, Organization, Encounter).

It does not define general clinical workflows outside the referral context.

## Usage of this Guide

* **Healthcare Facilities**: Implement eReferral profiles to enable standardized patient referrals
* **Health Information Systems**: Use as a baseline for developing interoperable referral capabilities
* **Developers and Vendors**: Build and validate FHIR-conformant referral systems

## Relationship with Other IGs

PH eReferral fits into the Philippine FHIR IG architecture as a **use case layer** implementation guide that builds upon foundational profiles:

| | | |
| :--- | :--- | :--- |
| Core | [PH Core IG](https://github.com/UP-Manila-SILab/ph-core) | **Base profiles**– Foundational rules, common extensions, and national identifiers (Patient, Practitioner, Organization, Encounter, etc.) |
| **Use Case** | **PH eReferral IG** | **Referral-specific workflows and interactions**– HCPN referral messaging built on PH Core |
| Program | Program-specific IGs | Tailored implementations for specific health programs or facilities |

PH Core provides the **parent/base profiles** used by this IG. PH eReferral:

* Uses PH Core as its foundation – inheriting constraints from PH Core profiles (Patient, Practitioner, Organization, Encounter, etc.)
* Defines referral-specific profiles (ServiceRequest, Task, etc.) for interoperability
* Specifies the referral workflow actors and their interactions
* Documents the complete referral lifecycle from creation to fulfillment
* Provides RESTful API guidance for referral operations

This layered approach enables reuse of common PH Core definitions while addressing the specific needs of HCPN referral workflows mandated by the [UHC Act](https://elibrary.judiciary.gov.ph/thebookshelf/showdocs/2/86448).

## Contributors

The following individuals contributed to the development of the Philippine eReferral Implementation Guide:

* John Lemuel Dalisay
* Dethalee Gabrielle Velasquez
* Dr. Alvin Marcelo
* Dr. Jaime Kristoffer Punzalan
* Dr. Paolo Miguel Baquiano
* Dr. Reina Juno Sumatra
* Umer Nisar
* John Carter
* Jörn Guy Süß
* Felipe Canlas
* Noel del Castillo
* Lester Batay-an
* Dir. Arturo Ongkeko
* Dr. Thomas Niccolo Reyes
* Dr. Sofia Lemuelle Capistrano
* Jan Michael Herber
* Gerard Paolo Villanueva
* Errol Buenaventura
* Lawrence Macalalad
* Jaylord Ambal

## Dependencies

This publication includes IP covered under the following statements.

* These codes are excerpted from ASTM Standard, E1762-95(2013) - Standard Guide for Electronic Authentication of Health Care Information, Copyright by ASTM International, 100 Barr Harbor Drive, West Conshohocken, PA 19428. Copies of this standard are available through the ASTM Web Site at www.astm.org.

* [Signature Type Codes](http://hl7.org/fhir/R4/codesystem-signature-type.html): [Bundle/ExampleERefSubmissionBundle](Bundle-ExampleERefSubmissionBundle.md) and [Provenance/ExampleERefProvenanceSubmission](Provenance-ExampleERefProvenanceSubmission.md)


* This material contains content from [LOINC](http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the [license](http://loinc.org/license). LOINC® is a registered United States trademark of Regenstrief Institute, Inc.

* LOINC: [Bundle/ExampleERefSubmissionBundle](Bundle-ExampleERefSubmissionBundle.md), [DiagnosticReport/ExampleERefDiagnosticReport](DiagnosticReport-ExampleERefDiagnosticReport.md)... Show 7 more, [DiagnosticReport/ExampleERefDiagnosticReportPDF](DiagnosticReport-ExampleERefDiagnosticReportPDF.md), [Observation/ExampleERefObservationBP](Observation-ExampleERefObservationBP.md), [Observation/ExampleERefObservationHR](Observation-ExampleERefObservationHR.md), [Observation/ExampleERefObservationRR](Observation-ExampleERefObservationRR.md), [Observation/ExampleERefObservationSpO2](Observation-ExampleERefObservationSpO2.md), [Observation/ExampleERefObservationTemp](Observation-ExampleERefObservationTemp.md) and [Observation/ExampleERefObservationWeight](Observation-ExampleERefObservationWeight.md)


* This material contains content that is copyright of SNOMED International. Implementers of these specifications must have the appropriate SNOMED CT Affiliate license - for more information contact [https://www.snomed.org/get-snomed](https://www.snomed.org/get-snomed) or [info@snomed.org](mailto:info@snomed.org).

* [SNOMED Clinical Terms&reg; (SNOMED CT&reg;)](http://hl7.org/fhir/R4/codesystem-snomedct.html): [Bundle/ExampleERefSubmissionBundle](Bundle-ExampleERefSubmissionBundle.md), [Condition/ExampleERefCondition](Condition-ExampleERefCondition.md)... Show 22 more, [Condition/ExampleERefConditionChiefComplaint](Condition-ExampleERefConditionChiefComplaint.md), [ERefPractitionerRole](StructureDefinition-ereferral-practitioner-role.md), [ERefServiceRequest](StructureDefinition-ereferral-service-request.md), [EReferralPractitionerRoleCode](ValueSet-vs-practitioner-role.md), [EReferralReason](ValueSet-vs-reason-for-referral-service-type.md), [EReferralServiceCategory](ValueSet-vs-referral-category.md), [Immunization/ExampleERefImmunizationRoutine](Immunization-ExampleERefImmunizationRoutine.md), [Medication/ExampleERefMedicationAntibiotic](Medication-ExampleERefMedicationAntibiotic.md), [Medication/ExampleERefMedicationTwinact](Medication-ExampleERefMedicationTwinact.md), [MedicationAdministration/ExampleERefMedicationAdministrationAntibiotic](MedicationAdministration-ExampleERefMedicationAdministrationAntibiotic.md), [MedicationAdministration/ExampleERefMedicationAdministrationChronic](MedicationAdministration-ExampleERefMedicationAdministrationChronic.md), [Observation/ExampleERefObservationBP](Observation-ExampleERefObservationBP.md), [Observation/ExampleERefObservationHR](Observation-ExampleERefObservationHR.md), [Observation/ExampleERefObservationRR](Observation-ExampleERefObservationRR.md), [Observation/ExampleERefObservationSpO2](Observation-ExampleERefObservationSpO2.md), [Observation/ExampleERefObservationTemp](Observation-ExampleERefObservationTemp.md), [Observation/ExampleERefObservationWeight](Observation-ExampleERefObservationWeight.md), [PractitionerRole/ExampleERefPractitionerRoleReceiving](PractitionerRole-ExampleERefPractitionerRoleReceiving.md), [PractitionerRole/ExampleERefPractitionerRoleSubmission](PractitionerRole-ExampleERefPractitionerRoleSubmission.md), [Procedure/ExampleERefProcedureTreatment](Procedure-ExampleERefProcedureTreatment.md), [ServiceRequest/ExampleERefServiceRequest](ServiceRequest-ExampleERefServiceRequest.md) and [Task/ExampleERefTaskRequested](Task-ExampleERefTaskRequested.md)


* This material derives from the HL7 Terminology (THO). THO is copyright ©1989+ Health Level Seven International and is made available under the CC0 designation. For more licensing information see: [https://terminology.hl7.org/license.html](https://terminology.hl7.org/license.html)

* [Condition Category Codes](http://terminology.hl7.org/7.3.0/CodeSystem-condition-category.html): [Bundle/ExampleERefSubmissionBundle](Bundle-ExampleERefSubmissionBundle.md), [Condition/ExampleERefCondition](Condition-ExampleERefCondition.md) and [Condition/ExampleERefConditionChiefComplaint](Condition-ExampleERefConditionChiefComplaint.md)
* [Condition Clinical Status Codes](http://terminology.hl7.org/7.3.0/CodeSystem-condition-clinical.html): [Bundle/ExampleERefSubmissionBundle](Bundle-ExampleERefSubmissionBundle.md), [Condition/ExampleERefCondition](Condition-ExampleERefCondition.md) and [Condition/ExampleERefConditionChiefComplaint](Condition-ExampleERefConditionChiefComplaint.md)
* [ConditionVerificationStatus](http://terminology.hl7.org/7.3.0/CodeSystem-condition-ver-status.html): [Bundle/ExampleERefSubmissionBundle](Bundle-ExampleERefSubmissionBundle.md) and [Condition/ExampleERefCondition](Condition-ExampleERefCondition.md)
* [Immunization Funding Source](http://terminology.hl7.org/7.3.0/CodeSystem-immunization-funding-source.html): [Immunization/ExampleERefImmunizationRoutine](Immunization-ExampleERefImmunizationRoutine.md)
* [Observation Category Codes](http://terminology.hl7.org/7.3.0/CodeSystem-observation-category.html): [Bundle/ExampleERefSubmissionBundle](Bundle-ExampleERefSubmissionBundle.md), [Observation/ExampleERefObservationBP](Observation-ExampleERefObservationBP.md)... Show 5 more, [Observation/ExampleERefObservationHR](Observation-ExampleERefObservationHR.md), [Observation/ExampleERefObservationRR](Observation-ExampleERefObservationRR.md), [Observation/ExampleERefObservationSpO2](Observation-ExampleERefObservationSpO2.md), [Observation/ExampleERefObservationTemp](Observation-ExampleERefObservationTemp.md) and [Observation/ExampleERefObservationWeight](Observation-ExampleERefObservationWeight.md)
* [Provenance participant type](http://terminology.hl7.org/7.3.0/CodeSystem-provenance-participant-type.html): [Bundle/ExampleERefSubmissionBundle](Bundle-ExampleERefSubmissionBundle.md), [ERefProvenance](StructureDefinition-ereferral-provenance.md) and [Provenance/ExampleERefProvenanceSubmission](Provenance-ExampleERefProvenanceSubmission.md)
* [providerRole](http://terminology.hl7.org/7.3.0/CodeSystem-v2-0443.html): [Immunization/ExampleERefImmunizationRoutine](Immunization-ExampleERefImmunizationRoutine.md)
* [ActCode](http://terminology.hl7.org/7.3.0/CodeSystem-v3-ActCode.html): [Bundle/ExampleERefSubmissionBundle](Bundle-ExampleERefSubmissionBundle.md) and [Encounter/ExampleERefSubmissionEncounter](Encounter-ExampleERefSubmissionEncounter.md)
* [DataOperation](http://terminology.hl7.org/7.3.0/CodeSystem-v3-DataOperation.html): [Bundle/ExampleERefSubmissionBundle](Bundle-ExampleERefSubmissionBundle.md) and [Provenance/ExampleERefProvenanceSubmission](Provenance-ExampleERefProvenanceSubmission.md)
* [RoleCode](http://terminology.hl7.org/7.3.0/CodeSystem-v3-RoleCode.html): [Bundle/ExampleERefSubmissionBundle](Bundle-ExampleERefSubmissionBundle.md), [EReferralRelationshipType](ValueSet-ereferral-relationship-type.md), [Patient/ExampleERefPatient](Patient-ExampleERefPatient.md), [RelatedPerson/ExampleERefRelatedPersonAccompanying](RelatedPerson-ExampleERefRelatedPersonAccompanying.md) and [RelatedPerson/ExampleERefRelatedPersonNextOfKin](RelatedPerson-ExampleERefRelatedPersonNextOfKin.md)


This is an R4 IG. None of the features it uses are changed in R4B, so it can be used as is with R4B systems. Packages for both [R4 (fhir.ph.ereferral.r4)](../package.r4.tgz) and [R4B (fhir.ph.ereferral.r4b)](../package.r4b.tgz) are available.




| | | |
| :--- | :--- | :--- |
| [Draft PH Core](https://build.fhir.org/ig/UPM-NTHC/ph-core/) | [current](https://simplifier.net/packages/fhir.ph.core/current) |  |
| [FHIR Extensions Pack](http://hl7.org/fhir/extensions/5.3.0) | [5.3.0](https://simplifier.net/packages/hl7.fhir.uv.extensions.r4/5.3.0) | Automatically added as a dependency - all IGs depend on the HL7 Extension Pack |
| [FHIR R4 package : Core](http://hl7.org/fhir/R4) | [4.0.1](https://simplifier.net/packages/hl7.fhir.r4.core/4.0.1) | Imported by HL7 Terminology (THO) (and potentially others) |
| [HL7 Terminology (THO)](http://terminology.hl7.org/7.3.0) | [7.3.0](https://simplifier.net/packages/hl7.terminology.r4/7.3.0) | Automatically added as a dependency - all IGs depend on HL7 Terminology |

*There are no Global profiles defined*

