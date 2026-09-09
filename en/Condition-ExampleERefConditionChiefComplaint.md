# Example Condition — Chief Complaint - PH eReferral Implementation Guide v0.1.0

## Example Condition: Example Condition — Chief Complaint

Profile: [EReferral Condition](StructureDefinition-ereferral-condition.md)

**clinicalStatus**: Active

**category**: Problem List Item

**code**: Severe headache, dizziness, blurring of vision and epigastric pain for 2 days

**subject**: [Ana Luisa Reyes (official) Female, DoB: 1988-03-12 ( http://philhealth.gov.ph/fhir/Identifier/philhealth-id#PhilHealthID#78-658064775-3)](Bundle-ExampleERefSubmissionBundle.md#urn-uuid-d7e33c3b-e90b-464e-a5eb-a92f60c71542)

**encounter**: [Encounter: status = finished; class = ambulatory (ActCode#AMB)](Bundle-ExampleERefSubmissionBundle.md#urn-uuid-a86d5b74-f8b5-42c2-b27a-5faff8d84cce)

**note**: 

> 

Chief complaint: severe headache, dizziness, blurring of vision and epigastric pain for 2 days. G2P1, 32 weeks AOG.




## Resource Content

```json
{
  "resourceType" : "Condition",
  "id" : "ExampleERefConditionChiefComplaint",
  "meta" : {
    "profile" : ["https://fhir.doh.gov.ph/pheref/StructureDefinition/ereferral-condition"]
  },
  "clinicalStatus" : {
    "coding" : [{
      "system" : "http://terminology.hl7.org/CodeSystem/condition-clinical",
      "code" : "active"
    }]
  },
  "category" : [{
    "coding" : [{
      "system" : "http://terminology.hl7.org/CodeSystem/condition-category",
      "code" : "problem-list-item",
      "display" : "Problem List Item"
    }]
  }],
  "code" : {
    "coding" : [{
      "system" : "http://snomed.info/sct",
      "code" : "25064002",
      "display" : "Headache"
    }],
    "text" : "Severe headache, dizziness, blurring of vision and epigastric pain for 2 days"
  },
  "subject" : {
    "reference" : "urn:uuid:d7e33c3b-e90b-464e-a5eb-a92f60c71542"
  },
  "encounter" : {
    "reference" : "urn:uuid:a86d5b74-f8b5-42c2-b27a-5faff8d84cce"
  },
  "note" : [{
    "text" : "Chief complaint: severe headache, dizziness, blurring of vision and epigastric pain for 2 days. G2P1, 32 weeks AOG."
  }]
}

```
