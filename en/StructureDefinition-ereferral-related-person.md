# EReferral RelatedPerson - PH eReferral Implementation Guide v0.1.0

## Resource Profile: EReferral RelatedPerson 

 
RelatedPerson profile for the Philippine eReferral system. This profile represents optional patient contacts used in referral workflows, including next of kin, emergency contacts, accompanying persons, and guardians. It extends PHCoreRelatedPerson and maps to TDG element REF-29. 

### EReferral RelatedPerson Profile

The **EReferral RelatedPerson** profile represents an optional patient contact exchanged as a separate resource in the Philippine eReferral workflow.

Use this profile when next-of-kin, emergency contact, guardian, or accompanying-person details need to be represented independently from `Patient.contact`. The profile maps to TDG element **REF-29: Accompanied By / Next of Kin**.

#### Scope

This profile supports:

* next of kin and emergency contacts
* guardians for pediatric or dependent patients
* accompanying persons during referral
* persons to contact regarding referral coordination

#### PH Core Alignment

This profile extends **PHCoreRelatedPerson**. PH Core already provides the Philippine localization for RelatedPerson, including PH Core address support. EReferral adds referral-specific must-support expectations and an extensible binding for common relationship roles.

#### Optionality

The RelatedPerson resource is optional in an eReferral exchange. Systems may use `Patient.contact` for simple contact details. When a separate RelatedPerson resource is exchanged, `patient` remains required because FHIR R4 requires every RelatedPerson to identify the patient it is related to.

#### Must Support Elements

| | | |
| :--- | :--- | :--- |
| `patient` | 1..1 | Patient associated with this contact |
| `relationship` | 0..* | Relationship to the patient |
| `name` | 0..* | Name of the related person |
| `telecom` | 0..* | Contact details |
| `address` | 0..* | Address |
| `gender` | 0..1 | Administrative gender |
| `birthDate` | 0..1 | Date of birth |
| `period` | 0..1 | Relationship validity period |

#### Examples

* [Example ERefRelatedPerson - Next of Kin](RelatedPerson-ExampleERefRelatedPersonNextOfKin.md)
* [Example ERefRelatedPerson - Accompanying Person](RelatedPerson-ExampleERefRelatedPersonAccompanying.md)

**Usages:**

* Examples for this Profile: [RelatedPerson/ExampleERefRelatedPersonAccompanying](RelatedPerson-ExampleERefRelatedPersonAccompanying.md) and [RelatedPerson/ExampleERefRelatedPersonNextOfKin](RelatedPerson-ExampleERefRelatedPersonNextOfKin.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/fhir.ph.ereferral|current/StructureDefinition/StructureDefinition-ereferral-related-person.json)

### Formal Views of Profile Content

 [Description Differentials, Snapshots, and other representations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](../StructureDefinition-ereferral-related-person.csv), [Excel](../StructureDefinition-ereferral-related-person.xlsx), [Schematron](../StructureDefinition-ereferral-related-person.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "ereferral-related-person",
  "url" : "https://fhir.doh.gov.ph/pheref/StructureDefinition/ereferral-related-person",
  "version" : "0.1.0",
  "name" : "ERefRelatedPerson",
  "title" : "EReferral RelatedPerson",
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
  "description" : "RelatedPerson profile for the Philippine eReferral system. This profile represents optional patient contacts used in referral workflows, including next of kin, emergency contacts, accompanying persons, and guardians. It extends PHCoreRelatedPerson and maps to TDG element REF-29.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "PH",
      "display" : "Philippines"
    }]
  }],
  "fhirVersion" : "4.0.1",
  "mapping" : [{
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
    "identity" : "v2",
    "uri" : "http://hl7.org/v2",
    "name" : "HL7 v2 Mapping"
  }],
  "kind" : "resource",
  "abstract" : false,
  "type" : "RelatedPerson",
  "baseDefinition" : "https://fhir.doh.gov.ph/phcore/StructureDefinition/ph-core-relatedperson",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "RelatedPerson",
      "path" : "RelatedPerson"
    },
    {
      "id" : "RelatedPerson.patient",
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
      "path" : "RelatedPerson.patient",
      "short" : "Patient associated with this contact",
      "definition" : "The patient this related person is associated with. RelatedPerson.patient remains required by the inherited FHIR structure, while use of a separate RelatedPerson resource in an eReferral is optional.",
      "mustSupport" : true
    },
    {
      "id" : "RelatedPerson.relationship",
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
          "valueCanonical" : "https://fhir.doh.gov.ph/phcore/StructureDefinition/ph-core-relatedperson|0.2.0"
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
          "valueCanonical" : "https://fhir.doh.gov.ph/phcore/StructureDefinition/ph-core-relatedperson|0.2.0"
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
          "valueCanonical" : "https://fhir.doh.gov.ph/phcore/StructureDefinition/ph-core-relatedperson|0.2.0"
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
      "path" : "RelatedPerson.relationship"
    },
    {
      "id" : "RelatedPerson.name",
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
          "valueCanonical" : "https://fhir.doh.gov.ph/phcore/StructureDefinition/ph-core-relatedperson|0.2.0"
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
          "valueCanonical" : "https://fhir.doh.gov.ph/phcore/StructureDefinition/ph-core-relatedperson|0.2.0"
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
          "valueCanonical" : "https://fhir.doh.gov.ph/phcore/StructureDefinition/ph-core-relatedperson|0.2.0"
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
      "path" : "RelatedPerson.name"
    },
    {
      "id" : "RelatedPerson.telecom",
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
          "valueCanonical" : "https://fhir.doh.gov.ph/phcore/StructureDefinition/ph-core-relatedperson|0.2.0"
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
          "valueCanonical" : "https://fhir.doh.gov.ph/phcore/StructureDefinition/ph-core-relatedperson|0.2.0"
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
          "valueCanonical" : "https://fhir.doh.gov.ph/phcore/StructureDefinition/ph-core-relatedperson|0.2.0"
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
      "path" : "RelatedPerson.telecom"
    }]
  }
}

```
