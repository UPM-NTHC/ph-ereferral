# Example Condition — Severe Pre-eclampsia - PH eReferral Implementation Guide v0.1.0

## Example Condition: Example Condition — Severe Pre-eclampsia

Profile: [EReferral Condition](StructureDefinition-ereferral-condition.md)

**clinicalStatus**: Active

**verificationStatus**: Provisional

**category**: Encounter Diagnosis

**code**: Severe pre-eclampsia, 32 weeks AOG, G2P1

**subject**: [Ana Luisa Reyes (official) Female, DoB: 1988-03-12 ( http://philhealth.gov.ph/fhir/Identifier/philhealth-id#PhilHealthID#78-658064775-3)](Bundle-ExampleERefSubmissionBundle.md#urn-uuid-d7e33c3b-e90b-464e-a5eb-a92f60c71542)

**encounter**: [Encounter: status = finished; class = ambulatory (ActCode#AMB)](Bundle-ExampleERefSubmissionBundle.md#urn-uuid-a86d5b74-f8b5-42c2-b27a-5faff8d84cce)

**note**: 

> 

G2P1, 32 weeks AOG. EDD: Aug 20 2026. LMP: Nov 13 2025.




## Resource Content

```json
{
  "resourceType" : "Condition",
  "id" : "ExampleERefCondition",
  "meta" : {
    "profile" : ["https://fhir.doh.gov.ph/pheref/StructureDefinition/ereferral-condition"]
  },
  "clinicalStatus" : {
    "coding" : [{
      "system" : "http://terminology.hl7.org/CodeSystem/condition-clinical",
      "code" : "active"
    }]
  },
  "verificationStatus" : {
    "coding" : [{
      "system" : "http://terminology.hl7.org/CodeSystem/condition-ver-status",
      "code" : "provisional",
      "display" : "Provisional"
    }]
  },
  "category" : [{
    "coding" : [{
      "system" : "http://terminology.hl7.org/CodeSystem/condition-category",
      "code" : "encounter-diagnosis",
      "display" : "Encounter Diagnosis"
    }]
  }],
  "code" : {
    "coding" : [{
      "system" : "http://snomed.info/sct",
      "code" : "398254007",
      "display" : "Pre-eclampsia"
    }],
    "text" : "Severe pre-eclampsia, 32 weeks AOG, G2P1"
  },
  "subject" : {
    "reference" : "urn:uuid:d7e33c3b-e90b-464e-a5eb-a92f60c71542"
  },
  "encounter" : {
    "reference" : "urn:uuid:a86d5b74-f8b5-42c2-b27a-5faff8d84cce"
  },
  "note" : [{
    "text" : "G2P1, 32 weeks AOG. EDD: Aug 20 2026. LMP: Nov 13 2025."
  }]
}

```
