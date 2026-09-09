# PH eReferral PractitionerRole - PH eReferral Implementation Guide v0.1.0

## Resource Profile: PH eReferral PractitionerRole 

 
Profile on PractitionerRole for the Philippines eReferral specification, extending PHCorePractitionerRole. This profile captures the role of the referring practitioner and care navigator within the eReferral workflow, linking practitioners to healthcare facilities. 

**Usages:**

* Refer to this Profile: [EReferral Provenance](StructureDefinition-ereferral-provenance.md), [EReferral ServiceRequest](StructureDefinition-ereferral-service-request.md) and [EReferral Task](StructureDefinition-ereferral-task.md)
* Examples for this Profile: [PractitionerRole/ExampleERefPractitionerRoleReceiving](PractitionerRole-ExampleERefPractitionerRoleReceiving.md) and [PractitionerRole/ExampleERefPractitionerRoleSubmission](PractitionerRole-ExampleERefPractitionerRoleSubmission.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/fhir.ph.ereferral|current/StructureDefinition/StructureDefinition-ereferral-practitioner-role.json)

### Formal Views of Profile Content

 [Description Differentials, Snapshots, and other representations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](../StructureDefinition-ereferral-practitioner-role.csv), [Excel](../StructureDefinition-ereferral-practitioner-role.xlsx), [Schematron](../StructureDefinition-ereferral-practitioner-role.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "ereferral-practitioner-role",
  "url" : "https://fhir.doh.gov.ph/pheref/StructureDefinition/ereferral-practitioner-role",
  "version" : "0.1.0",
  "name" : "ERefPractitionerRole",
  "title" : "PH eReferral PractitionerRole",
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
  "description" : "Profile on PractitionerRole for the Philippines eReferral specification, extending PHCorePractitionerRole. This profile captures the role of the referring practitioner and care navigator within the eReferral workflow, linking practitioners to healthcare facilities.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "PH",
      "display" : "Philippines"
    }]
  }],
  "fhirVersion" : "4.0.1",
  "mapping" : [{
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
    "identity" : "servd",
    "uri" : "http://www.omg.org/spec/ServD/1.0/",
    "name" : "ServD"
  },
  {
    "identity" : "w5",
    "uri" : "http://hl7.org/fhir/fivews",
    "name" : "FiveWs Pattern Mapping"
  }],
  "kind" : "resource",
  "abstract" : false,
  "type" : "PractitionerRole",
  "baseDefinition" : "https://fhir.doh.gov.ph/phcore/StructureDefinition/ph-core-practitionerrole",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "PractitionerRole",
      "path" : "PractitionerRole"
    },
    {
      "id" : "PractitionerRole.practitioner",
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
      "path" : "PractitionerRole.practitioner"
    },
    {
      "id" : "PractitionerRole.organization",
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
      "path" : "PractitionerRole.organization"
    },
    {
      "id" : "PractitionerRole.code",
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
          "valueCanonical" : "https://fhir.doh.gov.ph/phcore/StructureDefinition/ph-core-practitionerrole|0.2.0"
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
          "valueCanonical" : "https://fhir.doh.gov.ph/phcore/StructureDefinition/ph-core-practitionerrole|0.2.0"
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
          "valueCanonical" : "https://fhir.doh.gov.ph/phcore/StructureDefinition/ph-core-practitionerrole|0.2.0"
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
      "path" : "PractitionerRole.code",
      "binding" : {
        "strength" : "required",
        "valueSet" : "https://www.fhir.doh.gov.ph/pheref/ValueSet/practitioner-role"
      }
    }]
  }
}

```
