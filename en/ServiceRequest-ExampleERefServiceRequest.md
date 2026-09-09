# Example eReferral — Ana Reyes to DRSTMH - PH eReferral Implementation Guide v0.1.0

## Example ServiceRequest: Example eReferral — Ana Reyes to DRSTMH

Profile: [EReferral ServiceRequest](StructureDefinition-ereferral-service-request.md)

**requisition**: `urn:oid:1.2.840.113619.21.1.2`/REF-2026-001234

**status**: Active

**intent**: Order

**category**: Emergency

**subject**: [Ana Luisa Reyes (official) Female, DoB: 1988-03-12 ( http://philhealth.gov.ph/fhir/Identifier/philhealth-id#PhilHealthID#78-658064775-3)](Bundle-ExampleERefSubmissionBundle.md#urn-uuid-d7e33c3b-e90b-464e-a5eb-a92f60c71542)

**encounter**: [Encounter: status = finished; class = ambulatory (ActCode#AMB)](Bundle-ExampleERefSubmissionBundle.md#urn-uuid-a86d5b74-f8b5-42c2-b27a-5faff8d84cce)

**occurrence**: 2026-06-18 08:30:00+0800

**authoredOn**: 2026-06-18 08:30:00+0800

**requester**: [PractitionerRole Medical practitioner](Bundle-ExampleERefSubmissionBundle.md#urn-uuid-06924c91-7363-40ab-932b-6f64d0a102b9)

**performer**: [PractitionerRole Medical practitioner](Bundle-ExampleERefSubmissionBundle.md#urn-uuid-6ce0a17b-7fb3-4075-a524-3afd390731de)

**reasonCode**: Severe pre-eclampsia requiring IV antihypertensive, seizure prophylaxis, and maternal-fetal monitoring

**reasonReference**: [Condition Pre-eclampsia](Bundle-ExampleERefSubmissionBundle.md#urn-uuid-7166d722-982f-4d35-841d-c63d4d5ec772)

**note**: 

> 

Ana Reyes, 38-year-old G2P1, 32 weeks AOG. BP 180/110 mmHg with severe headache, dizziness, and blurring of vision. Proteinuria 3+. Referred for urgent management of severe pre-eclampsia.




## Resource Content

```json
{
  "resourceType" : "ServiceRequest",
  "id" : "ExampleERefServiceRequest",
  "meta" : {
    "profile" : ["https://fhir.doh.gov.ph/pheref/StructureDefinition/ereferral-service-request"]
  },
  "requisition" : {
    "system" : "urn:oid:1.2.840.113619.21.1.2",
    "value" : "REF-2026-001234"
  },
  "status" : "active",
  "intent" : "order",
  "category" : [{
    "coding" : [{
      "system" : "http://snomed.info/sct",
      "code" : "73770003",
      "display" : "Hospital-based outpatient emergency care center"
    }],
    "text" : "Emergency"
  }],
  "subject" : {
    "reference" : "urn:uuid:d7e33c3b-e90b-464e-a5eb-a92f60c71542"
  },
  "encounter" : {
    "reference" : "urn:uuid:a86d5b74-f8b5-42c2-b27a-5faff8d84cce"
  },
  "occurrenceDateTime" : "2026-06-18T08:30:00+08:00",
  "authoredOn" : "2026-06-18T08:30:00+08:00",
  "requester" : {
    "reference" : "urn:uuid:06924c91-7363-40ab-932b-6f64d0a102b9"
  },
  "performer" : [{
    "reference" : "urn:uuid:6ce0a17b-7fb3-4075-a524-3afd390731de"
  }],
  "reasonCode" : [{
    "coding" : [{
      "system" : "http://snomed.info/sct",
      "code" : "71388002",
      "display" : "Procedure"
    }],
    "text" : "Severe pre-eclampsia requiring IV antihypertensive, seizure prophylaxis, and maternal-fetal monitoring"
  }],
  "reasonReference" : [{
    "reference" : "urn:uuid:7166d722-982f-4d35-841d-c63d4d5ec772"
  }],
  "note" : [{
    "text" : "Ana Reyes, 38-year-old G2P1, 32 weeks AOG. BP 180/110 mmHg with severe headache, dizziness, and blurring of vision. Proteinuria 3+. Referred for urgent management of severe pre-eclampsia."
  }]
}

```
