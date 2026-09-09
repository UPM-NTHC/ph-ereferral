# EReferral Observation - PH eReferral Implementation Guide v0.1.0

## Resource Profile: EReferral Observation 

 
Profile for clinical observations in the Philippine eReferral context. Supports vital signs, laboratory results, and clinical measurements included in referral clinical summaries. Linked to the encounter via Observation.encounter. 

**Usages:**

* Refer to this Profile: [EReferral DiagnosticReport](StructureDefinition-ereferral-diagnostic-report.md), [ERefEncounter](StructureDefinition-ereferral-encounter.md), [EReferral Procedure](StructureDefinition-ereferral-procedure.md) and [EReferral ServiceRequest](StructureDefinition-ereferral-service-request.md)
* Examples for this Profile: [Observation/ExampleERefObservationBP](Observation-ExampleERefObservationBP.md), [Observation/ExampleERefObservationHR](Observation-ExampleERefObservationHR.md), [Observation/ExampleERefObservationRR](Observation-ExampleERefObservationRR.md), [Observation/ExampleERefObservationSpO2](Observation-ExampleERefObservationSpO2.md)... Show 2 more, [Observation/ExampleERefObservationTemp](Observation-ExampleERefObservationTemp.md) and [Observation/ExampleERefObservationWeight](Observation-ExampleERefObservationWeight.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/fhir.ph.ereferral|current/StructureDefinition/StructureDefinition-ereferral-observation.json)

### Formal Views of Profile Content

 [Description Differentials, Snapshots, and other representations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](../StructureDefinition-ereferral-observation.csv), [Excel](../StructureDefinition-ereferral-observation.xlsx), [Schematron](../StructureDefinition-ereferral-observation.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "ereferral-observation",
  "url" : "https://fhir.doh.gov.ph/pheref/StructureDefinition/ereferral-observation",
  "version" : "0.1.0",
  "name" : "ERefObservation",
  "title" : "EReferral Observation",
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
  "description" : "Profile for clinical observations in the Philippine eReferral context. \nSupports vital signs, laboratory results, and clinical measurements included in \nreferral clinical summaries. Linked to the encounter via Observation.encounter.",
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
    "identity" : "sct-concept",
    "uri" : "http://snomed.info/conceptdomain",
    "name" : "SNOMED CT Concept Domain Binding"
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
    "identity" : "sct-attr",
    "uri" : "http://snomed.org/attributebinding",
    "name" : "SNOMED CT Attribute Binding"
  }],
  "kind" : "resource",
  "abstract" : false,
  "type" : "Observation",
  "baseDefinition" : "https://fhir.doh.gov.ph/phcore/StructureDefinition/ph-core-observation",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "Observation",
      "path" : "Observation"
    },
    {
      "id" : "Observation.category",
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
          "valueCanonical" : "https://fhir.doh.gov.ph/phcore/StructureDefinition/ph-core-observation|0.2.0"
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
          "valueCanonical" : "https://fhir.doh.gov.ph/phcore/StructureDefinition/ph-core-observation|0.2.0"
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
          "valueCanonical" : "https://fhir.doh.gov.ph/phcore/StructureDefinition/ph-core-observation|0.2.0"
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
      "path" : "Observation.category"
    },
    {
      "id" : "Observation.subject",
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
      "path" : "Observation.subject",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.doh.gov.ph/pheref/StructureDefinition/ereferral-patient"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Observation.encounter",
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
      "path" : "Observation.encounter",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.doh.gov.ph/pheref/StructureDefinition/ereferral-encounter"]
      }],
      "mustSupport" : true
    }]
  }
}

```
