# Connectathon Readiness - PH eReferral Implementation Guide v0.1.0

## Connectathon Readiness

### v0.1 Connectathon Quick-Start, Test Pack, and Release Readiness

This page gives implementers and reviewers a minimum, repeatable path for testing the draft PH eReferral IG v0.1 content from a clean checkout. It separates the testable minimum path from background reference material so connectathon participants can tell the difference between an IG defect, a fixture defect, and a missing instruction.

#### v0.1 Quick-Start

| | |
| :--- | :--- |
| Purpose | Validate the minimum PH eReferral workflow using the IG profiles and examples. |
| Intended users | IG authors, implementers, vendors, validators, and connectathon testers. |
| FHIR version | FHIR R4, version`4.0.1`. |
| IG version | `0.1.0`, release label`ci-build`. |
| Required dependency | PH Core package`fhir.ph.core`as configured in`sushi-config.yaml`. |
| Current continuous build | [PH eReferral continuous build](https://build.fhir.org/ig/UPM-NTHC/ph-ereferral/). Treat this as a CI build, not a versioned IG publication. |
| Source release tag | [Release `0.1.0`](https://github.com/UPM-NTHC/ph-ereferral/releases/tag/0.1.0). Issue[#73](https://github.com/UPM-NTHC/ph-ereferral/issues/73)tracks versioned IG deployment paths. |

Minimum implementer setup:

1. Git client for cloning the repository.
1. Node.js and SUSHI for compiling FSH.
1. Java runtime compatible with the IG Publisher used by this repository.
1. Ruby/Jekyll where required by the local or CI publisher template.
1. Network access for first-time package and publisher downloads unless the needed packages are already cached.

#### Build and Validate the IG

Clone the repository:

```
git clone https://github.com/UPM-NTHC/ph-ereferral.git
cd ph-ereferral

```

Compile FSH only:

```
sushi .

```

Expected SUSHI result:

* `fsh-generated/resources/ImplementationGuide-fhir.ph.ereferral.json` is generated.
* The summary reports `0 Errors`.
* If `fhir.ph.core#dev` is not cached locally, SUSHI may fall back to the locally available PH Core package. Record that package state in test evidence.

Run the full IG build on Windows:

```
_genonce.bat

```

Run the full IG build on macOS or Linux:

```
./_genonce.sh

```

Run the Publisher directly in offline terminology mode:

```
java -jar input-cache/publisher.jar -ig . -tx n/a

```

Expected Publisher result:

* `output/index.html` and `output/qa.html` are produced.
* The command exits successfully.
* `output/qa.html` is reviewed for errors, warnings, broken links, and terminology limitations before claiming release readiness.

Known build limitations:

* Issue [#73](https://github.com/UPM-NTHC/ph-ereferral/issues/73) tracks versioned IG deployment paths. The source repository has a `0.1.0` release tag, but a versioned publication URL is not yet available; cite commit hashes or branch build URLs for CI builds.
* Offline terminology mode can report terminology expansion limitations that must be distinguished from profile or example defects.
* If the local build uses a cached PH Core package instead of `fhir.ph.core#dev`, record the actual package used in the evidence table.

#### Minimum By-Hand Test

Use this as the connectathon smoke test from a clean checkout with the listed fixtures. The expected result is a traceable referral request that moves from creation, to receiving-facility response, to closure.

| | | | |
| :--- | :--- | :--- | :--- |
| 1 | Create referral | [Example eReferral ServiceRequest](ServiceRequest-ExampleERefServiceRequest.md) | A referral request exists with`status = active`,`intent = order`, a patient subject, a requester, a receiving facility, and a clinical reason. |
| 2 | Send referral | [Example eReferral Task - Requested State](Task-ExampleERefTaskRequested.md) | A workflow Task exists with`status = requested`, focused on the ServiceRequest. The requester is populated and the receiving owner is not yet assigned. |
| 3 | Receive referral | [Example eReferral Task - Received State](Task-ExampleERefTaskReceived.md) | The receiving facility has acknowledged the referral Task and`owner`is populated. |
| 4 | Respond with receiving-facility outcome | [Example eReferral Task - Rejected State](Task-ExampleERefTaskRejected.md)and[Example eReferral Task - Referred Onward](Task-ExampleERefTaskReferredOnward.md) | The receiving facility closes the Task with a response:`status = rejected`with`statusReason`for a declined referral, or`status = rejected`plus`businessStatus = referred-onward`when the case is redirected. The positive`accepted`response was defined in issue[#47](https://github.com/UPM-NTHC/ph-ereferral/issues/47)and PR[#84](https://github.com/UPM-NTHC/ph-ereferral/pull/84), but no accepted-state fixture is present in this checkout. |
| 5 | Close referral | No completed-state fixture exists yet | The Task is closed with`status = completed`and completion output present in`Task.output`; a receiving-side Encounter fixture is not yet available. |

Pass criteria for the by-hand test:

* Required examples render in the IG.
* The ServiceRequest references the patient, requester, receiving facility, and clinical reason needed for the scenario.
* The Task examples preserve a coherent state progression from requested to received to closed.
* Closure requires the receiving facility to record `Task.status = completed` and completion output in `Task.output`. No completed-state Task fixture or receiving-side Encounter fixture is available yet.

Fail criteria:

* A required fixture is missing from the rendered IG.
* A required reference cannot be followed.
* The state progression cannot be explained using the current v0.1 artifacts.
* QA reports a broken link for a required profile, example, or page used in this test.

#### Test Data Pack

Required fixtures for the minimum test:

| | | |
| :--- | :--- | :--- |
| Referral request | [Example eReferral ServiceRequest](ServiceRequest-ExampleERefServiceRequest.md) | Primary referral order under test. |
| Patient | [Example eReferral Patient](Patient-ExampleERefPatient.md) | Referral subject. |
| Referring practitioner | [Example Referring Practitioner](Practitioner-ExampleERefPractitionerSubmission.md) | Clinician creating the referral. |
| Referring practitioner role | [Example Referring Practitioner Role](PractitionerRole-ExampleERefPractitionerRoleSubmission.md) | Links practitioner to referring facility. |
| Referring facility | [Example Referring Facility](Organization-ExampleERefOrganizationKaliboHC.md) | Initiating facility. |
| Receiving facility | [Example Receiving Hospital](Organization-ExampleERefOrganizationDRSTMH.md) | Intended receiving facility. |
| Clinical condition | [Example Condition - Severe Pre-eclampsia](Condition-ExampleERefCondition.md) | Referral reason evidence. |
| Blood pressure observation | [Example Blood Pressure Observation](Observation-ExampleERefObservationBP.md) | Supporting clinical information. |
| Requested Task | [Example eReferral Task - Requested State](Task-ExampleERefTaskRequested.md) | Sent referral workflow state. |
| Received Task | [Example eReferral Task - Received State](Task-ExampleERefTaskReceived.md) | Receiving-facility acknowledgement state. |
| Encounter context | [Example eReferral Encounter - Initiated Facility Visit](Encounter-ExampleERefSubmissionEncounter.md) | Encounter context for the referral episode (initiating facility visit). |

Optional fixtures:

| | | |
| :--- | :--- | :--- |
| Provenance signature | [Example eReferral Provenance with Signature](Provenance-ExampleERefProvenanceSubmission.md) | Demonstrates signature attestation. |
| Medication administration | [Example Chronic Medication Administration](MedicationAdministration-ExampleERefMedicationAdministrationChronic.md) | Clinical summary support. |
| Antibiotic administration | [Example Antibiotic Administration](MedicationAdministration-ExampleERefMedicationAdministrationAntibiotic.md) | Treatment-given support. |
| Immunization | [ERefImmunization Example - Routine Immunization](Immunization-ExampleERefImmunizationRoutine.md) | Immunization support. |

#### Automated or Semi-Automated Testing

Available checks:

* `sushi .` checks FSH syntax, generates JSON resources, and catches duplicate instance names.
* `_genonce.bat` or `./_genonce.sh` runs the project build path.
* `java -jar input-cache/publisher.jar -ig . -tx n/a` runs an offline Publisher build that can be used when terminology server access is slow or unavailable.
* GitHub Actions runs repository validation on pull requests according to `.github/workflows/validate-docs.yml`.

Not yet available:

* There is no executable connectathon workflow test script that automatically performs create/send/receive/respond/close assertions.
* There is no multi-server exchange test harness in this repository.

For v0.1, passing the automated build does not replace the by-hand test. It only proves that the IG artifacts can be generated and validated by the available build tooling.

#### Test Evidence Summary

Record one row per connectathon run, release candidate, or reviewer verification.

| | |
| :--- | :--- |
| What was tested | Minimum create, send, receive, respond, and close referral path using the fixtures listed above. |
| Who tested it | Tester name, organization, and role. |
| Date tested | Calendar date in`YYYY-MM-DD`format. |
| Build or commit tested | Release tag, branch build URL, or commit SHA. |
| Build result | SUSHI result, Publisher result, and QA summary. |
| By-hand test result | Pass, fail, or pass with limitations. |
| Known unresolved issues | Links to unresolved issues that affect interpretation of the result. |

Current v0.1 readiness status:

* The minimum test path is documented.
* The fixture set is identified.
* Formal connectathon execution evidence has not yet been recorded in this repository.

#### Known Limitations for v0.1

* Receiving-facility response terms were documented in issue [#47](https://github.com/UPM-NTHC/ph-ereferral/issues/47) and PR [#84](https://github.com/UPM-NTHC/ph-ereferral/pull/84). The current fixture set covers requested, received, rejected, and referred-onward Task states; accepted-state and completed-state Task fixtures are not available in this checkout.
* Non-response and SLA handling are deferred until timing and escalation rules are formally defined.
* Facility and network identification examples use facility identifiers for testing, but operational registry lookup, HCPN membership, and routing rules are not fully specified in this v0.1 test pack.
* Attachment exchange, consent, authentication, authorization, transport security, and data-protection controls are outside the current by-hand test.
* Back-referral is part of the broader policy basis, but it is not included in the minimum v0.1 connectathon path.
* Multi-server testing has not yet been completed.
* Versioned IG deployment paths are pending issue [#73](https://github.com/UPM-NTHC/ph-ereferral/issues/73); source release tag `0.1.0` is available.

#### Release Readiness Documentation

Use these linked pages when preparing or reviewing a v0.1 release candidate:

* [v0.1 Scope and Release Notes](v01-scope.md)
* [v0.1 Coverage Map](coverage-map.md)
* [v0.1 Decision Log and ADR Status](decision-log.md)

Release-readiness checklist for v0.1:

* SUSHI completes with `0 Errors`.
* The IG Publisher completes and `output/qa.html` is reviewed.
* Required fixtures in the test data pack render and links are valid.
* The by-hand test is executed and evidence is recorded.
* Known limitations are accepted or converted into release blockers.
* TDG technical review confirms the workflow and terminology interpretation.
* Product owner review confirms the v0.1 release scope.

