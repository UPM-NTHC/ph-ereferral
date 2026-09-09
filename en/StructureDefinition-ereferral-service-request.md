# EReferral ServiceRequest - PH eReferral Implementation Guide v0.1.0

## Resource Profile: EReferral ServiceRequest 

 
Profile for ServiceRequest resource in the Philippine eReferral context. This profile defines the core referral request structure for referring patients between healthcare facilities. 

### EReferral ServiceRequest Profile

The **EReferral ServiceRequest** profile defines the core structure for electronic referral requests in the Philippine healthcare context. It is based on the FHIR [ServiceRequest](http://hl7.org/fhir/R4/servicerequest.html) resource and establishes the minimum expectations for systems implementing patient referrals between healthcare facilities.

-------

#### Scope and Purpose

This profile supports the electronic exchange of referral information between:

* **Rural Health Units (RHUs)** and **tertiary hospitals**
* **Primary care facilities** and **specialist centers**
* **Any healthcare facilities** participating in the Philippine eReferral system

The profile maps to the **Technical Working Group on Digital Health (TDG) eReferral Data Elements** (rows REF-1 through REF-21), ensuring alignment with national health data standards.

-------

#### Key Concepts

##### Referral Requester (Initiating Facility)

The `requester` element uses a **PractitionerRole** reference to capture:

| | | |
| :--- | :--- | :--- |
| REF-1 | Name of Referring Practitioner | `requester`(via PractitionerRole -> Practitioner) |
| REF-2 | Practitioner Role | `requester.code`(PractitionerRole.code) |
| REF-5 | Initiating Facility Name | `requester`(via PractitionerRole's Organization) |
| REF-6 | Initiating Facility NHFR Code | `requester`(via PractitionerRole's Organization.identifier) |
| REF-7 | Initiating Facility Address | `requester`(via PractitionerRole's Organization.address) |
| REF-8 | Initiating Facility Contact Number | `requester`(via PractitionerRole's Organization.telecom) |

**Example:**

```
* requester = Reference(PractitionerRole/123)
  // PractitionerRole links to both Practitioner and Organization

```

##### Referral Performer (Receiving Facility)

The `performer` element identifies where the service should be performed:

| | | |
| :--- | :--- | :--- |
| REF-9 | Care Navigator | `performer`(via PractitionerRole on receiving side) |
| REF-10 | Receiving Facility Name | `performer`-> PractitionerRole.organization.display |
| REF-11 | Receiving Facility NHFR Code | `performer`-> PractitionerRole.organization.identifier |

**Example:**

```
* performer = Reference(Organization/456)
  // Direct reference to receiving hospital

```

##### Referral Category and Priority

The profile uses value sets to standardize categorization:

| | | | |
| :--- | :--- | :--- | :--- |
| `category` | [EReferralServiceCategory](ValueSet-ereferral-service-category.md) | Extensible | Type of service (imaging, laboratory, surgical, etc.) |
| `priority` | [EReferralPriority](ValueSet-ereferral-priority.md) | Required | Urgency level: routine, urgent, or stat |
| `intent` | Fixed value | N/A | Always`#order`for referrals |

**Example:**

```
* category = $sct#363679005 "Imaging"
* priority = #urgent
* intent = #order  // Fixed value

```

##### Reason for Referral

The profile supports both coded and free-text reasons:

| | | |
| :--- | :--- | :--- |
| REF-16 | Reason for Referral (service type) | `code` |
| REF-16 | Reason for Referral (clinical) | `reasonCode`,`reasonReference` |

The `reasonCode` element is bound to the [EReferralReason](ValueSet-ereferral-reason.md) value set (example binding), which includes common SNOMED CT clinical findings such as:

* Dyspnea
* Chest pain
* Suspected lung cancer
* Congestive heart failure
* Atrial fibrillation
* Essential hypertension
* Diabetes mellitus
* Anxiety disorder

**Example:**

```
* code = $sct#183519001 "Referral to cardiology service"
* reasonCode = $sct#29857009 "Chest pain"
  * text = "Chest pain on exertion, suspected unstable angina"
* reasonReference = Reference(Condition/789)

```

##### Supporting Clinical Information

The `supportingInfo` element allows attaching relevant clinical data:

| | | |
| :--- | :--- | :--- |
| REF-15 | Clinical Summary | `supportingInfo` |

Allowed resource types:

* **Condition** - Diagnoses and clinical problems
* **Observation** - Vital signs, lab results, imaging findings
* **Procedure** - Previous procedures relevant to referral
* **MedicationAdministration** - Current medications
* **Immunization** - Vaccination history
* **DiagnosticReport** - Laboratory, imaging, pathology, or other diagnostic reports, including complete report attachments

**Example:**

```
* supportingInfo[0] = Reference(Observation/BP-001)
* supportingInfo[+] = Reference(Observation/ECG-001)
* supportingInfo[+] = Reference(Condition/Diabetes-001)
* supportingInfo[+] = Reference(DiagnosticReport/LabReport-001)

```

-------

#### Must Support Elements

The following elements are marked as **Must Support** and must be implemented by conformant systems:

| | | |
| :--- | :--- | :--- |
| `requester` | 1..1 | Referring practitioner (via PractitionerRole) |
| `relevantHistory` | 0..* | Audit trail via Provenance |
| `performer` | 0..* | Receiving facility or practitioner |
| `replaces` | 0..* | Prior referral request replaced by an onward referral |
| `authoredOn` | 0..1 | When the referral was created |
| `category` | 0..* | Type of referral service |
| `priority` | 0..1 | Urgency level |
| `intent` | 0..1 | Always "order" for referrals |
| `occurrence[x]` | 0..1 | When the service is needed |
| `supportingInfo` | 0..* | Clinical information |
| `code` | 0..1 | Service type being requested |
| `reasonCode` | 0..* | Clinical reason for referral |
| `reasonReference` | 0..* | Conditions/Observations justifying referral |
| `subject` | 0..1 | Patient being referred |
| `status` | 0..1 | Referral status |
| `note` | 0..* | Additional instructions |
| `requisition` | 0..1 | Referral identifier |

-------

#### Invariants

The profile includes the following validation rule:

| | | | |
| :--- | :--- | :--- | :--- |
| `ereferral-requester-has-role` | Warning | `requester.resolve().ofType(PractitionerRole).exists() implies requester.resolve().ofType(PractitionerRole).organization.exists()` | If using PractitionerRole, facility information should be available |

-------

#### Referral Lifecycle

The `ServiceRequest.status` element tracks the request lifecycle. Receiving-facility response states such as received, accepted, rejected, and referred onward are tracked on [EReferral Task](StructureDefinition-ereferral-task.md), using standard `Task.status` plus `Task.businessStatus` for the eReferral response term.

| | |
| :--- | :--- |
| `draft` | Referral is being prepared |
| `active` | Referral has been sent and is awaiting response |
| `on-hold` | Referral temporarily suspended |
| `revoked` | Referral cancelled by requester |
| `completed` | Service has been rendered |
| `entered-in-error` | Referral created in error |
| `unknown` | Status cannot be determined |

-------

#### Usage Scenarios

##### Scenario 1: RHU to Tertiary Hospital Cardiology Referral

A patient at a Rural Health Unit presents with chest pain. The physician creates an urgent referral to a cardiology department.

```
Instance: CardiologyReferral
InstanceOf: ERefServiceRequest
* status = #active
* intent = #order
* priority = #urgent
* category = $sct#409063005 "Counselling"
* code = $sct#183519001 "Referral to cardiology service"
* subject = Reference(Patient/001)
* authoredOn = "2025-03-23T10:00:00+08:00"
* requester = Reference(PractitionerRole/DrSantos)
* performer = Reference(Organization/PhilHeartCenter)
* reasonCode = $sct#29857009 "Chest pain"
* occurrenceDateTime = "2025-03-24T08:00:00+08:00"

```

##### Scenario 2: Diagnostic Imaging Referral

A primary care physician refers a patient for X-ray imaging at a diagnostic center.

```
Instance: XrayReferral
InstanceOf: ERefServiceRequest
* status = #active
* intent = #order
* priority = #routine
* category = $sct#363679005 "Imaging"
* code = $sct#168537006 "Plain X-ray of chest"
* subject = Reference(Patient/002)
* authoredOn = "2025-03-23T14:30:00+08:00"
* requester = Reference(PractitionerRole/DrReyes)
* performer = Reference(Organization/DiagnosticCenter)
* reasonCode = $sct#267036007 "Dyspnea"
* note.text = "Please evaluate for pulmonary infiltrates. Patient has history of pneumonia."

```

-------

#### Integration with Other Resources

The EReferral ServiceRequest typically works with:

| | | |
| :--- | :--- | :--- |
| [Patient](http://hl7.org/fhir/R4/patient.html) | `subject` | Patient being referred |
| [PractitionerRole](http://hl7.org/fhir/R4/practitionerrole.html) | `requester` | Referring practitioner with organization context |
| [Organization](http://hl7.org/fhir/R4/organization.html) | `performer` | Receiving facility |
| [Condition](http://hl7.org/fhir/R4/condition.html) | `reasonReference`,`supportingInfo` | Clinical diagnoses |
| [Observation](http://hl7.org/fhir/R4/observation.html) | `supportingInfo` | Vital signs, lab results |
| [DiagnosticReport](StructureDefinition-ereferral-diagnostic-report.md) | `supportingInfo` | Diagnostic report summaries, structured results, and formatted report attachments |
| [Task](http://hl7.org/fhir/R4/task.html) | `Task.focus` | Workflow tracking and receiving-facility response |
| [Provenance](http://hl7.org/fhir/R4/provenance.html) | `relevantHistory` | Audit trail and signatures |
| [Encounter](http://hl7.org/fhir/R4/encounter.html) | Context | Often linked via Encounter context |

-------

#### Philippine-Specific Identifiers

Implementers should use the following identifier systems for Philippine healthcare contexts:

| | | |
| :--- | :--- | :--- |
| Philippine Health Insurance (PhilHealth) | `urn:oid:2.16.840.1.113883.2.9.4.3.2` | Patient PhilHealth ID |
| Professional Regulation Commission (PRC) | `urn:oid:2.16.840.1.113883.2.9.4.3.3` | Practitioner license |
| National Health Facility Registry (NHFR) | `urn:oid:2.16.840.1.113883.2.9.4.1.1` | Facility identifier |

-------

#### Value Sets

This profile uses the following value sets defined for eReferral:

| | |
| :--- | :--- |
| [EReferralServiceCategory](ValueSet-ereferral-service-category.md) | Categories of referral services |
| [EReferralPriority](ValueSet-ereferral-priority.md) | Priority levels for referrals |
| [EReferralReason](ValueSet-ereferral-reason.md) | Clinical reasons for referral |

-------

#### Additional Notes

* **Intent**: The `intent` element is fixed to `#order` because eReferrals are always orders for services to be performed.
* **Requisition ID**: Use the `requisition` element to group related referrals that were authorized simultaneously.
* **Time Called**: Use `occurrenceDateTime` or `occurrencePeriod` to specify when the service is needed.
* **Audit Trail**: The `relevantHistory` element references Provenance resources for tracking changes and signatures.

-------

#### See Also

* [EReferral ServiceRequest Profile](StructureDefinition-ereferral-service-request.md)
* [Example EReferral ServiceRequest](ServiceRequest-ExampleERefServiceRequest.md)
* [FHIR ServiceRequest Resource](http://hl7.org/fhir/R4/servicerequest.html)
* [DOH-PHIC JAO No. 2021-0002](https://drive.google.com/file/d/11NC-aCypDLvSx667zXz1NFII3MstveFI/view)

**Usages:**

* Refer to this Profile: [EReferral DiagnosticReport](StructureDefinition-ereferral-diagnostic-report.md), [ERefEncounter](StructureDefinition-ereferral-encounter.md), [EReferral Provenance](StructureDefinition-ereferral-provenance.md), [EReferral ServiceRequest](StructureDefinition-ereferral-service-request.md) and [EReferral Task](StructureDefinition-ereferral-task.md)
* Examples for this Profile: [ServiceRequest/ExampleERefServiceRequest](ServiceRequest-ExampleERefServiceRequest.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/fhir.ph.ereferral|current/StructureDefinition/StructureDefinition-ereferral-service-request.json)

### Formal Views of Profile Content

 [Description Differentials, Snapshots, and other representations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](../StructureDefinition-ereferral-service-request.csv), [Excel](../StructureDefinition-ereferral-service-request.xlsx), [Schematron](../StructureDefinition-ereferral-service-request.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "ereferral-service-request",
  "url" : "https://fhir.doh.gov.ph/pheref/StructureDefinition/ereferral-service-request",
  "version" : "0.1.0",
  "name" : "ERefServiceRequest",
  "title" : "EReferral ServiceRequest",
  "status" : "draft",
  "date" : "2026-09-09T03:53:23+00:00",
  "publisher" : "SILab CoP IG Accelerator (eReferral)",
  "contact" : [{
    "name" : "SILab CoP IG Accelerator (eReferral)",
    "telecom" : [{
      "system" : "url",
      "value" : "https://github.com/UP-Manila-SILab"
    }]
  }],
  "description" : "Profile for ServiceRequest resource in the Philippine eReferral context. This profile defines the core referral request structure for referring patients between healthcare facilities.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "PH",
      "display" : "Philippines"
    }]
  }],
  "fhirVersion" : "4.0.1",
  "mapping" : [{
    "identity" : "workflow",
    "uri" : "http://hl7.org/fhir/workflow",
    "name" : "Workflow Pattern"
  },
  {
    "identity" : "v2",
    "uri" : "http://hl7.org/v2",
    "name" : "HL7 v2 Mapping"
  },
  {
    "identity" : "rim",
    "uri" : "http://hl7.org/v3",
    "name" : "RIM Mapping"
  },
  {
    "identity" : "w5",
    "uri" : "http://hl7.org/fhir/fivews",
    "name" : "FiveWs Pattern Mapping"
  },
  {
    "identity" : "quick",
    "uri" : "http://siframework.org/cqf",
    "name" : "Quality Improvement and Clinical Knowledge (QUICK)"
  }],
  "kind" : "resource",
  "abstract" : false,
  "type" : "ServiceRequest",
  "baseDefinition" : "https://fhir.doh.gov.ph/phcore/StructureDefinition/ph-core-serviceRequest",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "ServiceRequest",
      "path" : "ServiceRequest",
      "constraint" : [{
        "key" : "ereferral-requester-has-role",
        "severity" : "warning",
        "human" : "The requester should reference a PractitionerRole when referring facility information is available",
        "expression" : "requester.resolve().ofType(PractitionerRole).exists() implies requester.resolve().ofType(PractitionerRole).organization.exists()",
        "source" : "https://fhir.doh.gov.ph/pheref/StructureDefinition/ereferral-service-request"
      }]
    },
    {
      "id" : "ServiceRequest.replaces",
      "path" : "ServiceRequest.replaces",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.doh.gov.ph/pheref/StructureDefinition/ereferral-service-request"]
      }]
    },
    {
      "id" : "ServiceRequest.intent",
      "extension" : [{
        "extension" : [{
          "url" : "code",
          "valueCode" : "SHALL:handle"
        },
        {
          "url" : "actor",
          "valueCanonical" : "https://fhir.doh.gov.ph/phcore/ActorDefinition/Server"
        }],
        "url" : "http://hl7.org/fhir/StructureDefinition/obligation"
      },
      {
        "extension" : [{
          "url" : "code",
          "valueCode" : "SHALL:handle"
        },
        {
          "url" : "actor",
          "valueCanonical" : "https://fhir.doh.gov.ph/phcore/ActorDefinition/Consumer"
        }],
        "url" : "http://hl7.org/fhir/StructureDefinition/obligation"
      },
      {
        "extension" : [{
          "url" : "code",
          "valueCode" : "MAY:able-to-populate"
        },
        {
          "url" : "actor",
          "valueCanonical" : "https://fhir.doh.gov.ph/phcore/ActorDefinition/Creator"
        }],
        "url" : "http://hl7.org/fhir/StructureDefinition/obligation"
      }],
      "path" : "ServiceRequest.intent",
      "short" : "Intent is always 'order' for referrals",
      "definition" : "eReferrals are always orders for services to be performed by the receiving facility.",
      "fixedCode" : "order",
      "mustSupport" : true
    },
    {
      "id" : "ServiceRequest.category",
      "extension" : [{
        "extension" : [{
          "url" : "code",
          "valueCode" : "SHALL:handle"
        },
        {
          "url" : "actor",
          "valueCanonical" : "https://fhir.doh.gov.ph/phcore/ActorDefinition/Server"
        }],
        "url" : "http://hl7.org/fhir/StructureDefinition/obligation"
      },
      {
        "extension" : [{
          "url" : "code",
          "valueCode" : "SHALL:handle"
        },
        {
          "url" : "actor",
          "valueCanonical" : "https://fhir.doh.gov.ph/phcore/ActorDefinition/Consumer"
        }],
        "url" : "http://hl7.org/fhir/StructureDefinition/obligation"
      },
      {
        "extension" : [{
          "url" : "code",
          "valueCode" : "MAY:able-to-populate"
        },
        {
          "url" : "actor",
          "valueCanonical" : "https://fhir.doh.gov.ph/phcore/ActorDefinition/Creator"
        }],
        "url" : "http://hl7.org/fhir/StructureDefinition/obligation"
      }],
      "path" : "ServiceRequest.category",
      "short" : "Referral Category - Urgency and setting",
      "definition" : "Referral Category - Urgency and setting (emergency vs outpatient/routine)",
      "binding" : {
        "strength" : "required",
        "valueSet" : "https://www.fhir.doh.gov.ph/pheref/ValueSet/referral-category"
      }
    },
    {
      "id" : "ServiceRequest.subject",
      "extension" : [{
        "extension" : [{
          "url" : "code",
          "valueCode" : "SHALL:handle"
        },
        {
          "url" : "actor",
          "valueCanonical" : "https://fhir.doh.gov.ph/phcore/ActorDefinition/Server"
        }],
        "url" : "http://hl7.org/fhir/StructureDefinition/obligation"
      },
      {
        "extension" : [{
          "url" : "code",
          "valueCode" : "SHALL:handle"
        },
        {
          "url" : "actor",
          "valueCanonical" : "https://fhir.doh.gov.ph/phcore/ActorDefinition/Consumer"
        }],
        "url" : "http://hl7.org/fhir/StructureDefinition/obligation"
      },
      {
        "extension" : [{
          "url" : "code",
          "valueCode" : "MAY:able-to-populate"
        },
        {
          "url" : "actor",
          "valueCanonical" : "https://fhir.doh.gov.ph/phcore/ActorDefinition/Creator"
        }],
        "url" : "http://hl7.org/fhir/StructureDefinition/obligation"
      }],
      "path" : "ServiceRequest.subject",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.doh.gov.ph/pheref/StructureDefinition/ereferral-patient"]
      }]
    },
    {
      "id" : "ServiceRequest.encounter",
      "extension" : [{
        "extension" : [{
          "url" : "code",
          "valueCode" : "SHALL:handle"
        },
        {
          "url" : "actor",
          "valueCanonical" : "https://fhir.doh.gov.ph/phcore/ActorDefinition/Server"
        }],
        "url" : "http://hl7.org/fhir/StructureDefinition/obligation"
      },
      {
        "extension" : [{
          "url" : "code",
          "valueCode" : "SHALL:handle"
        },
        {
          "url" : "actor",
          "valueCanonical" : "https://fhir.doh.gov.ph/phcore/ActorDefinition/Consumer"
        }],
        "url" : "http://hl7.org/fhir/StructureDefinition/obligation"
      },
      {
        "extension" : [{
          "url" : "code",
          "valueCode" : "MAY:able-to-populate"
        },
        {
          "url" : "actor",
          "valueCanonical" : "https://fhir.doh.gov.ph/phcore/ActorDefinition/Creator"
        }],
        "url" : "http://hl7.org/fhir/StructureDefinition/obligation"
      }],
      "path" : "ServiceRequest.encounter",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.doh.gov.ph/pheref/StructureDefinition/ereferral-encounter"]
      }]
    },
    {
      "id" : "ServiceRequest.occurrence[x]",
      "extension" : [{
        "extension" : [{
          "url" : "code",
          "valueCode" : "SHALL:handle"
        },
        {
          "url" : "actor",
          "valueCanonical" : "https://fhir.doh.gov.ph/phcore/ActorDefinition/Server"
        }],
        "url" : "http://hl7.org/fhir/StructureDefinition/obligation"
      },
      {
        "extension" : [{
          "url" : "code",
          "valueCode" : "SHALL:handle"
        },
        {
          "url" : "actor",
          "valueCanonical" : "https://fhir.doh.gov.ph/phcore/ActorDefinition/Consumer"
        }],
        "url" : "http://hl7.org/fhir/StructureDefinition/obligation"
      },
      {
        "extension" : [{
          "url" : "code",
          "valueCode" : "MAY:able-to-populate"
        },
        {
          "url" : "actor",
          "valueCanonical" : "https://fhir.doh.gov.ph/phcore/ActorDefinition/Creator"
        }],
        "url" : "http://hl7.org/fhir/StructureDefinition/obligation"
      }],
      "path" : "ServiceRequest.occurrence[x]",
      "short" : "When the service is needed",
      "definition" : "The date/time or period when the service should be performed."
    },
    {
      "id" : "ServiceRequest.authoredOn",
      "extension" : [{
        "extension" : [{
          "url" : "code",
          "valueCode" : "SHALL:handle"
        },
        {
          "url" : "actor",
          "valueCanonical" : "https://fhir.doh.gov.ph/phcore/ActorDefinition/Server"
        }],
        "url" : "http://hl7.org/fhir/StructureDefinition/obligation"
      },
      {
        "extension" : [{
          "url" : "code",
          "valueCode" : "SHALL:handle"
        },
        {
          "url" : "actor",
          "valueCanonical" : "https://fhir.doh.gov.ph/phcore/ActorDefinition/Consumer"
        }],
        "url" : "http://hl7.org/fhir/StructureDefinition/obligation"
      },
      {
        "extension" : [{
          "url" : "code",
          "valueCode" : "MAY:able-to-populate"
        },
        {
          "url" : "actor",
          "valueCanonical" : "https://fhir.doh.gov.ph/phcore/ActorDefinition/Creator"
        }],
        "url" : "http://hl7.org/fhir/StructureDefinition/obligation"
      }],
      "path" : "ServiceRequest.authoredOn",
      "short" : "When the referral was authored",
      "definition" : "The date and time when the referral request was created."
    },
    {
      "id" : "ServiceRequest.requester",
      "extension" : [{
        "extension" : [{
          "url" : "code",
          "valueCode" : "SHALL:handle"
        },
        {
          "url" : "actor",
          "valueCanonical" : "https://fhir.doh.gov.ph/phcore/ActorDefinition/Server"
        }],
        "url" : "http://hl7.org/fhir/StructureDefinition/obligation"
      },
      {
        "extension" : [{
          "url" : "code",
          "valueCode" : "SHALL:handle"
        },
        {
          "url" : "actor",
          "valueCanonical" : "https://fhir.doh.gov.ph/phcore/ActorDefinition/Consumer"
        }],
        "url" : "http://hl7.org/fhir/StructureDefinition/obligation"
      },
      {
        "extension" : [{
          "url" : "code",
          "valueCode" : "SHALL:able-to-populate"
        },
        {
          "url" : "actor",
          "valueCanonical" : "https://fhir.doh.gov.ph/phcore/ActorDefinition/Creator"
        }],
        "url" : "http://hl7.org/fhir/StructureDefinition/obligation"
      }],
      "path" : "ServiceRequest.requester",
      "min" : 1,
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.doh.gov.ph/pheref/StructureDefinition/ereferral-practitioner-role"]
      }]
    },
    {
      "id" : "ServiceRequest.performer",
      "extension" : [{
        "extension" : [{
          "url" : "code",
          "valueCode" : "SHALL:handle"
        },
        {
          "url" : "actor",
          "valueCanonical" : "https://fhir.doh.gov.ph/phcore/ActorDefinition/Server"
        }],
        "url" : "http://hl7.org/fhir/StructureDefinition/obligation"
      },
      {
        "extension" : [{
          "url" : "code",
          "valueCode" : "SHALL:handle"
        },
        {
          "url" : "actor",
          "valueCanonical" : "https://fhir.doh.gov.ph/phcore/ActorDefinition/Consumer"
        }],
        "url" : "http://hl7.org/fhir/StructureDefinition/obligation"
      },
      {
        "extension" : [{
          "url" : "code",
          "valueCode" : "MAY:able-to-populate"
        },
        {
          "url" : "actor",
          "valueCanonical" : "https://fhir.doh.gov.ph/phcore/ActorDefinition/Creator"
        }],
        "url" : "http://hl7.org/fhir/StructureDefinition/obligation"
      }],
      "path" : "ServiceRequest.performer",
      "short" : "Receiving facility or practitioner",
      "definition" : "The facility or practitioner expected to perform the service. For eReferral, this is typically the receiving healthcare facility.",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.doh.gov.ph/phcore/StructureDefinition/ph-core-organization",
        "https://fhir.doh.gov.ph/pheref/StructureDefinition/ereferral-practitioner-role"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "ServiceRequest.reasonCode",
      "extension" : [{
        "extension" : [{
          "url" : "code",
          "valueCode" : "SHALL:handle"
        },
        {
          "url" : "actor",
          "valueCanonical" : "https://fhir.doh.gov.ph/phcore/ActorDefinition/Server"
        },
        {
          "url" : "http://hl7.org/fhir/tools/StructureDefinition/snapshot-source",
          "valueCanonical" : "https://fhir.doh.gov.ph/phcore/StructureDefinition/ph-core-serviceRequest|0.2.0"
        },
        {
          "url" : "code",
          "valueCode" : "SHALL:handle"
        },
        {
          "url" : "actor",
          "valueCanonical" : "https://fhir.doh.gov.ph/phcore/ActorDefinition/Server"
        }],
        "url" : "http://hl7.org/fhir/StructureDefinition/obligation"
      },
      {
        "extension" : [{
          "url" : "code",
          "valueCode" : "SHALL:handle"
        },
        {
          "url" : "actor",
          "valueCanonical" : "https://fhir.doh.gov.ph/phcore/ActorDefinition/Consumer"
        },
        {
          "url" : "http://hl7.org/fhir/tools/StructureDefinition/snapshot-source",
          "valueCanonical" : "https://fhir.doh.gov.ph/phcore/StructureDefinition/ph-core-serviceRequest|0.2.0"
        },
        {
          "url" : "code",
          "valueCode" : "SHALL:handle"
        },
        {
          "url" : "actor",
          "valueCanonical" : "https://fhir.doh.gov.ph/phcore/ActorDefinition/Consumer"
        }],
        "url" : "http://hl7.org/fhir/StructureDefinition/obligation"
      },
      {
        "extension" : [{
          "url" : "code",
          "valueCode" : "MAY:able-to-populate"
        },
        {
          "url" : "actor",
          "valueCanonical" : "https://fhir.doh.gov.ph/phcore/ActorDefinition/Creator"
        },
        {
          "url" : "http://hl7.org/fhir/tools/StructureDefinition/snapshot-source",
          "valueCanonical" : "https://fhir.doh.gov.ph/phcore/StructureDefinition/ph-core-serviceRequest|0.2.0"
        },
        {
          "url" : "code",
          "valueCode" : "MAY:able-to-populate"
        },
        {
          "url" : "actor",
          "valueCanonical" : "https://fhir.doh.gov.ph/phcore/ActorDefinition/Creator"
        }],
        "url" : "http://hl7.org/fhir/StructureDefinition/obligation"
      }],
      "path" : "ServiceRequest.reasonCode",
      "short" : "Reason for referral",
      "definition" : "The clinical reason for the referral, describing why the service is being requested.",
      "binding" : {
        "strength" : "required",
        "valueSet" : "https://www.fhir.doh.gov.ph/pheref/ValueSet/reason-for-referral-service-type"
      }
    },
    {
      "id" : "ServiceRequest.reasonReference",
      "extension" : [{
        "extension" : [{
          "url" : "code",
          "valueCode" : "SHALL:handle"
        },
        {
          "url" : "actor",
          "valueCanonical" : "https://fhir.doh.gov.ph/phcore/ActorDefinition/Server"
        }],
        "url" : "http://hl7.org/fhir/StructureDefinition/obligation"
      },
      {
        "extension" : [{
          "url" : "code",
          "valueCode" : "SHALL:handle"
        },
        {
          "url" : "actor",
          "valueCanonical" : "https://fhir.doh.gov.ph/phcore/ActorDefinition/Consumer"
        }],
        "url" : "http://hl7.org/fhir/StructureDefinition/obligation"
      },
      {
        "extension" : [{
          "url" : "code",
          "valueCode" : "MAY:able-to-populate"
        },
        {
          "url" : "actor",
          "valueCanonical" : "https://fhir.doh.gov.ph/phcore/ActorDefinition/Creator"
        }],
        "url" : "http://hl7.org/fhir/StructureDefinition/obligation"
      }],
      "path" : "ServiceRequest.reasonReference",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.doh.gov.ph/pheref/StructureDefinition/ereferral-condition",
        "https://fhir.doh.gov.ph/pheref/StructureDefinition/ereferral-observation"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "ServiceRequest.supportingInfo",
      "path" : "ServiceRequest.supportingInfo",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.doh.gov.ph/pheref/StructureDefinition/ereferral-condition",
        "https://fhir.doh.gov.ph/pheref/StructureDefinition/ereferral-observation",
        "https://fhir.doh.gov.ph/pheref/StructureDefinition/ereferral-procedure",
        "https://fhir.doh.gov.ph/pheref/StructureDefinition/ereferral-medication-administration",
        "https://fhir.doh.gov.ph/pheref/StructureDefinition/ereferral-immunization",
        "https://fhir.doh.gov.ph/pheref/StructureDefinition/ereferral-diagnostic-report"]
      }]
    },
    {
      "id" : "ServiceRequest.note",
      "extension" : [{
        "extension" : [{
          "url" : "code",
          "valueCode" : "SHALL:handle"
        },
        {
          "url" : "actor",
          "valueCanonical" : "https://fhir.doh.gov.ph/phcore/ActorDefinition/Server"
        }],
        "url" : "http://hl7.org/fhir/StructureDefinition/obligation"
      },
      {
        "extension" : [{
          "url" : "code",
          "valueCode" : "SHALL:handle"
        },
        {
          "url" : "actor",
          "valueCanonical" : "https://fhir.doh.gov.ph/phcore/ActorDefinition/Consumer"
        }],
        "url" : "http://hl7.org/fhir/StructureDefinition/obligation"
      },
      {
        "extension" : [{
          "url" : "code",
          "valueCode" : "MAY:able-to-populate"
        },
        {
          "url" : "actor",
          "valueCanonical" : "https://fhir.doh.gov.ph/phcore/ActorDefinition/Creator"
        }],
        "url" : "http://hl7.org/fhir/StructureDefinition/obligation"
      }],
      "path" : "ServiceRequest.note",
      "mustSupport" : true
    },
    {
      "id" : "ServiceRequest.relevantHistory",
      "extension" : [{
        "extension" : [{
          "url" : "code",
          "valueCode" : "SHALL:handle"
        },
        {
          "url" : "actor",
          "valueCanonical" : "https://fhir.doh.gov.ph/phcore/ActorDefinition/Server"
        }],
        "url" : "http://hl7.org/fhir/StructureDefinition/obligation"
      },
      {
        "extension" : [{
          "url" : "code",
          "valueCode" : "SHALL:handle"
        },
        {
          "url" : "actor",
          "valueCanonical" : "https://fhir.doh.gov.ph/phcore/ActorDefinition/Consumer"
        }],
        "url" : "http://hl7.org/fhir/StructureDefinition/obligation"
      },
      {
        "extension" : [{
          "url" : "code",
          "valueCode" : "MAY:able-to-populate"
        },
        {
          "url" : "actor",
          "valueCanonical" : "https://fhir.doh.gov.ph/phcore/ActorDefinition/Creator"
        }],
        "url" : "http://hl7.org/fhir/StructureDefinition/obligation"
      }],
      "path" : "ServiceRequest.relevantHistory",
      "short" : "Referral audit trail",
      "definition" : "References to Provenance records that track changes and signatures for the referral.",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.doh.gov.ph/pheref/StructureDefinition/ereferral-provenance"]
      }],
      "mustSupport" : true
    }]
  }
}

```
