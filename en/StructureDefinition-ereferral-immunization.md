# ERefImmunization - PH eReferral Implementation Guide v0.1.0

## Resource Profile: ERefImmunization 

 
Immunization profile for the Philippine eReferral system. Extends PHCoreImmunization to define must-support elements for referral clinical context. Immunization records are linked to the encounter via Immunization.encounter to provide supporting clinical information about a patient's vaccination history. 

**Usages:**

* Refer to this Profile: [EReferral ServiceRequest](StructureDefinition-ereferral-service-request.md)
* Examples for this Profile: [Immunization/ExampleERefImmunizationRoutine](Immunization-ExampleERefImmunizationRoutine.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/fhir.ph.ereferral|current/StructureDefinition/StructureDefinition-ereferral-immunization.json)

### Formal Views of Profile Content

 [Description Differentials, Snapshots, and other representations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](../StructureDefinition-ereferral-immunization.csv), [Excel](../StructureDefinition-ereferral-immunization.xlsx), [Schematron](../StructureDefinition-ereferral-immunization.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "ereferral-immunization",
  "url" : "https://fhir.doh.gov.ph/pheref/StructureDefinition/ereferral-immunization",
  "version" : "0.1.0",
  "name" : "ERefImmunization",
  "title" : "ERefImmunization",
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
  "description" : "Immunization profile for the Philippine eReferral system. Extends PHCoreImmunization to define must-support elements for referral clinical context. Immunization records are linked to the encounter via Immunization.encounter to provide supporting clinical information about a patient's vaccination history.",
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
    "identity" : "cda",
    "uri" : "http://hl7.org/v3/cda",
    "name" : "CDA (R2)"
  }],
  "kind" : "resource",
  "abstract" : false,
  "type" : "Immunization",
  "baseDefinition" : "https://fhir.doh.gov.ph/phcore/StructureDefinition/ph-core-immunization",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "Immunization",
      "path" : "Immunization"
    },
    {
      "id" : "Immunization.status",
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
          "valueCanonical" : "https://fhir.doh.gov.ph/phcore/StructureDefinition/ph-core-immunization|0.2.0"
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
          "valueCanonical" : "https://fhir.doh.gov.ph/phcore/StructureDefinition/ph-core-immunization|0.2.0"
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
          "valueCode" : "SHALL:able-to-populate"
        },
        {
          "url" : "actor",
          "valueCanonical" : "https://fhir.doh.gov.ph/phcore/ActorDefinition/Creator"
        },
        {
          "url" : "http://hl7.org/fhir/tools/StructureDefinition/snapshot-source",
          "valueCanonical" : "https://fhir.doh.gov.ph/phcore/StructureDefinition/ph-core-immunization|0.2.0"
        },
        {
          "url" : "code",
          "valueCode" : "SHALL:able-to-populate"
        },
        {
          "url" : "actor",
          "valueCanonical" : "https://fhir.doh.gov.ph/phcore/ActorDefinition/Creator"
        }],
        "url" : "http://hl7.org/fhir/StructureDefinition/obligation"
      }],
      "path" : "Immunization.status"
    },
    {
      "id" : "Immunization.patient",
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
          "valueCanonical" : "https://fhir.doh.gov.ph/phcore/StructureDefinition/ph-core-immunization|0.2.0"
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
          "valueCanonical" : "https://fhir.doh.gov.ph/phcore/StructureDefinition/ph-core-immunization|0.2.0"
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
          "valueCode" : "SHALL:able-to-populate"
        },
        {
          "url" : "actor",
          "valueCanonical" : "https://fhir.doh.gov.ph/phcore/ActorDefinition/Creator"
        },
        {
          "url" : "http://hl7.org/fhir/tools/StructureDefinition/snapshot-source",
          "valueCanonical" : "https://fhir.doh.gov.ph/phcore/StructureDefinition/ph-core-immunization|0.2.0"
        },
        {
          "url" : "code",
          "valueCode" : "SHALL:able-to-populate"
        },
        {
          "url" : "actor",
          "valueCanonical" : "https://fhir.doh.gov.ph/phcore/ActorDefinition/Creator"
        }],
        "url" : "http://hl7.org/fhir/StructureDefinition/obligation"
      }],
      "path" : "Immunization.patient",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.doh.gov.ph/pheref/StructureDefinition/ereferral-patient"]
      }]
    },
    {
      "id" : "Immunization.occurrence[x]",
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
          "valueCanonical" : "https://fhir.doh.gov.ph/phcore/StructureDefinition/ph-core-immunization|0.2.0"
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
          "valueCanonical" : "https://fhir.doh.gov.ph/phcore/StructureDefinition/ph-core-immunization|0.2.0"
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
          "valueCode" : "SHALL:able-to-populate"
        },
        {
          "url" : "actor",
          "valueCanonical" : "https://fhir.doh.gov.ph/phcore/ActorDefinition/Creator"
        },
        {
          "url" : "http://hl7.org/fhir/tools/StructureDefinition/snapshot-source",
          "valueCanonical" : "https://fhir.doh.gov.ph/phcore/StructureDefinition/ph-core-immunization|0.2.0"
        },
        {
          "url" : "code",
          "valueCode" : "SHALL:able-to-populate"
        },
        {
          "url" : "actor",
          "valueCanonical" : "https://fhir.doh.gov.ph/phcore/ActorDefinition/Creator"
        }],
        "url" : "http://hl7.org/fhir/StructureDefinition/obligation"
      }],
      "path" : "Immunization.occurrence[x]"
    }]
  }
}

```
