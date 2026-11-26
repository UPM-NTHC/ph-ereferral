# v0.1 Coverage Map

This page maps the v0.1 minimum referral workflow to the IG artifacts used by the connectathon readiness test.

## Workflow Coverage

<div class="ph-table" markdown="1">

| Workflow step | Primary artifact | Supporting artifacts | Coverage status |
|---------------|------------------|----------------------|-----------------|
| Create referral | [Example eReferral ServiceRequest](ServiceRequest-ExampleERefServiceRequest.html) | [EReferral ServiceRequest](StructureDefinition-ereferral-service-request.html), patient, practitioner role, organizations, condition, and observations | Covered for the minimum test path. |
| Send referral | [Example eReferral Task - Requested State](Task-ExampleERefTaskRequested.html) | [EReferral Task](StructureDefinition-ereferral-task.html) and [Example eReferral ServiceRequest](ServiceRequest-ExampleERefServiceRequest.html) | Covered for a requested referral workflow state. |
| Receive referral | [Example eReferral Task - Received State](Task-ExampleERefTaskReceived.html) | Receiving organization fixture and Task owner assignment | Covered through the received Task fixture. |
| Respond with receiving outcome | [Example eReferral Task - Rejected State](Task-ExampleERefTaskRejected.html) | [Example eReferral Task - Referred Onward](Task-ExampleERefTaskReferredOnward.html), issue [#47](https://github.com/UPM-NTHC/ph-ereferral/issues/47), and PR [#84](https://github.com/UPM-NTHC/ph-ereferral/pull/84) | Covered for declined and referred-onward responses. The response terms were documented in #47/#84, but this checkout has no accepted-state fixture. |
| Close referral | No completed-state fixture yet | [Example eReferral Encounter - Initiated Facility Visit](Encounter-ExampleERefSubmissionEncounter.html) and Task `output` | Closure is defined as `Task.status = completed` with `Task.output` populated; no completed fixture exists yet. |

</div>

## Profile Coverage

<div class="ph-table" markdown="1">

| Profile | v0.1 test role | Link |
|---------|----------------|------|
| EReferral ServiceRequest | Primary referral request | [StructureDefinition-ereferral-service-request.html](StructureDefinition-ereferral-service-request.html) |
| EReferral Task | Workflow state tracking | [StructureDefinition-ereferral-task.html](StructureDefinition-ereferral-task.html) |
| ERefEncounter | Receiving encounter context | [StructureDefinition-ereferral-encounter.html](StructureDefinition-ereferral-encounter.html) |
| ERefPatient | Patient profile coverage | [StructureDefinition-ereferral-patient.html](StructureDefinition-ereferral-patient.html) |
| PH eReferral PractitionerRole | Referring practitioner/facility role | [StructureDefinition-ereferral-practitioner-role.html](StructureDefinition-ereferral-practitioner-role.html) |
| EReferral Provenance | Audit and signature support | [StructureDefinition-ereferral-provenance.html](StructureDefinition-ereferral-provenance.html) |
| EReferral MedicationAdministration | Optional clinical summary support | [StructureDefinition-ereferral-medication-administration.html](StructureDefinition-ereferral-medication-administration.html) |
| ERefImmunization | Optional clinical summary support | [StructureDefinition-ereferral-immunization.html](StructureDefinition-ereferral-immunization.html) |
| EReferral DiagnosticReport | Optional diagnostic report and attachment support | [StructureDefinition-ereferral-diagnostic-report.html](StructureDefinition-ereferral-diagnostic-report.html) |

</div>

</div>

## Example Coverage

<div class="ph-table" markdown="1">

| Example group | Required for minimum path | Notes |
|---------------|---------------------------|-------|
| ServiceRequest referral fixture | Yes | Primary referral request. |
| Task requested, accepted, completed fixtures | Yes | Minimum workflow state progression. |
| Patient, practitioner, practitioner role, referring facility, receiving facility | Yes | Actor and organization context. |
| Condition and observations | Yes | Clinical reason and supporting information. |
| Encounter | Yes | Close step context. |
| Provenance | Optional | Audit trail and signature support. |
| MedicationAdministration and Immunization | Optional | Additional clinical summary examples. |

</div>

## Gaps and Deferred Coverage

- No automated create/send/receive/respond/close scenario script is present.
- No multi-server exchange harness is present.
- The response terms were documented in issue [#47](https://github.com/UPM-NTHC/ph-ereferral/issues/47) and PR [#84](https://github.com/UPM-NTHC/ph-ereferral/pull/84); this checkout has no accepted-state fixture.
- Non-response and SLA escalation are deferred.
- Back-referral is not part of the v0.1 minimum connectathon path.
