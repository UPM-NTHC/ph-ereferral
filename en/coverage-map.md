# Coverage Map - PH eReferral Implementation Guide v0.1.0

## Coverage Map

### v0.1 Coverage Map

This page maps the v0.1 minimum referral workflow to the IG artifacts used by the connectathon readiness test.

#### Workflow Coverage

| | | | |
| :--- | :--- | :--- | :--- |
| Create referral | [Example eReferral ServiceRequest](ServiceRequest-ExampleERefServiceRequest.md) | [EReferral ServiceRequest](StructureDefinition-ereferral-service-request.md), patient, practitioner role, organizations, condition, and observations | Covered for the minimum test path. |
| Send referral | [Example eReferral Task - Requested State](Task-ExampleERefTaskRequested.md) | [EReferral Task](StructureDefinition-ereferral-task.md)and[Example eReferral ServiceRequest](ServiceRequest-ExampleERefServiceRequest.md) | Covered for a requested referral workflow state. |
| Receive referral | [Example eReferral Task - Received State](Task-ExampleERefTaskReceived.md) | Receiving organization fixture and Task owner assignment | Covered through the received Task fixture. |
| Respond with receiving outcome | [Example eReferral Task - Rejected State](Task-ExampleERefTaskRejected.md) | [Example eReferral Task - Referred Onward](Task-ExampleERefTaskReferredOnward.md), issue[#47](https://github.com/UPM-NTHC/ph-ereferral/issues/47), and PR[#84](https://github.com/UPM-NTHC/ph-ereferral/pull/84) | Covered for declined and referred-onward responses. The response terms were documented in #47/#84, but this checkout has no accepted-state fixture. |
| Close referral | No completed-state fixture yet | [Example eReferral Encounter - Initiated Facility Visit](Encounter-ExampleERefSubmissionEncounter.md)and Task`output` | Closure is defined as`Task.status = completed`with`Task.output`populated; no completed fixture exists yet. |

#### Profile Coverage

| | | |
| :--- | :--- | :--- |
| EReferral ServiceRequest | Primary referral request | [StructureDefinition-ereferral-service-request.html](StructureDefinition-ereferral-service-request.md) |
| EReferral Task | Workflow state tracking | [StructureDefinition-ereferral-task.html](StructureDefinition-ereferral-task.md) |
| ERefEncounter | Receiving encounter context | [StructureDefinition-ereferral-encounter.html](StructureDefinition-ereferral-encounter.md) |
| ERefPatient | Patient profile coverage | [StructureDefinition-ereferral-patient.html](StructureDefinition-ereferral-patient.md) |
| PH eReferral PractitionerRole | Referring practitioner/facility role | [StructureDefinition-ereferral-practitioner-role.html](StructureDefinition-ereferral-practitioner-role.md) |
| EReferral Provenance | Audit and signature support | [StructureDefinition-ereferral-provenance.html](StructureDefinition-ereferral-provenance.md) |
| EReferral MedicationAdministration | Optional clinical summary support | [StructureDefinition-ereferral-medication-administration.html](StructureDefinition-ereferral-medication-administration.md) |
| ERefImmunization | Optional clinical summary support | [StructureDefinition-ereferral-immunization.html](StructureDefinition-ereferral-immunization.md) |
| EReferral DiagnosticReport | Optional diagnostic report and attachment support | [StructureDefinition-ereferral-diagnostic-report.html](StructureDefinition-ereferral-diagnostic-report.md) |

</div>

#### Example Coverage

| | | |
| :--- | :--- | :--- |
| ServiceRequest referral fixture | Yes | Primary referral request. |
| Task requested, accepted, completed fixtures | Yes | Minimum workflow state progression. |
| Patient, practitioner, practitioner role, referring facility, receiving facility | Yes | Actor and organization context. |
| Condition and observations | Yes | Clinical reason and supporting information. |
| Encounter | Yes | Close step context. |
| Provenance | Optional | Audit trail and signature support. |
| MedicationAdministration and Immunization | Optional | Additional clinical summary examples. |

#### Gaps and Deferred Coverage

* No automated create/send/receive/respond/close scenario script is present.
* No multi-server exchange harness is present.
* The response terms were documented in issue [#47](https://github.com/UPM-NTHC/ph-ereferral/issues/47) and PR [#84](https://github.com/UPM-NTHC/ph-ereferral/pull/84); this checkout has no accepted-state fixture.
* Non-response and SLA escalation are deferred.
* Back-referral is not part of the v0.1 minimum connectathon path.

