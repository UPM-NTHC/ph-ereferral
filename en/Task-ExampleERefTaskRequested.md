# Example eReferral Task — Requested - PH eReferral Implementation Guide v0.1.0

## Example Task: Example eReferral Task — Requested

Profile: [EReferral Task](StructureDefinition-ereferral-task.md)

**status**: Requested

**intent**: order

**code**: eReferral for severe pre-eclampsia management

**focus**: [ServiceRequest: requisition = urn:oid:1.2.840.113619.21.1.2#REF-2026-001234; status = active; intent = order; category = Hospital-based outpatient emergency care center; occurrence[x] = 2026-06-18 08:30:00+0800; authoredOn = 2026-06-18 08:30:00+0800; reasonCode = Procedure; note = Ana Reyes, 38-year-old G2P1, 32 weeks AOG. BP 180/110 mmHg with severe headache, dizziness, and blurring of vision. Proteinuria 3+. Referred for urgent management of severe pre-eclampsia.](Bundle-ExampleERefSubmissionBundle.md#urn-uuid-2da5e918-42d1-4d2c-b5dd-570b0b172759)

**for**: [Ana Luisa Reyes (official) Female, DoB: 1988-03-12 ( http://philhealth.gov.ph/fhir/Identifier/philhealth-id#PhilHealthID#78-658064775-3)](Bundle-ExampleERefSubmissionBundle.md#urn-uuid-d7e33c3b-e90b-464e-a5eb-a92f60c71542)

**authoredOn**: 2026-06-18 08:30:00+0800

**lastModified**: 2026-06-18 08:30:00+0800

**requester**: [PractitionerRole Medical practitioner](Bundle-ExampleERefSubmissionBundle.md#urn-uuid-06924c91-7363-40ab-932b-6f64d0a102b9)

**owner**: [PractitionerRole Medical practitioner](Bundle-ExampleERefSubmissionBundle.md#urn-uuid-6ce0a17b-7fb3-4075-a524-3afd390731de)

**note**: 

> 

New referral for Ana Reyes with severe pre-eclampsia. Awaiting DRSTMH response.




## Resource Content

```json
{
  "resourceType" : "Task",
  "id" : "ExampleERefTaskRequested",
  "meta" : {
    "profile" : ["https://fhir.doh.gov.ph/pheref/StructureDefinition/ereferral-task"]
  },
  "status" : "requested",
  "intent" : "order",
  "code" : {
    "coding" : [{
      "system" : "http://snomed.info/sct",
      "code" : "3457005",
      "display" : "Patient referral"
    }],
    "text" : "eReferral for severe pre-eclampsia management"
  },
  "focus" : {
    "reference" : "urn:uuid:2da5e918-42d1-4d2c-b5dd-570b0b172759"
  },
  "for" : {
    "reference" : "urn:uuid:d7e33c3b-e90b-464e-a5eb-a92f60c71542"
  },
  "authoredOn" : "2026-06-18T08:30:00+08:00",
  "lastModified" : "2026-06-18T08:30:00+08:00",
  "requester" : {
    "reference" : "urn:uuid:06924c91-7363-40ab-932b-6f64d0a102b9"
  },
  "owner" : {
    "reference" : "urn:uuid:6ce0a17b-7fb3-4075-a524-3afd390731de"
  },
  "note" : [{
    "text" : "New referral for Ana Reyes with severe pre-eclampsia. Awaiting DRSTMH response."
  }]
}

```
