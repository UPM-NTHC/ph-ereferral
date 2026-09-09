# Example eReferral Task — Received - PH eReferral Implementation Guide v0.1.0

## Example Task: Example eReferral Task — Received

Profile: [EReferral Task](StructureDefinition-ereferral-task.md)

**status**: Received

**businessStatus**: Received

**intent**: order

**focus**: [ServiceRequest: requisition = urn:oid:1.2.840.113619.21.1.2#REF-2026-001234; status = active; intent = order; category = Hospital-based outpatient emergency care center; occurrence[x] = 2026-06-18 08:30:00+0800; authoredOn = 2026-06-18 08:30:00+0800; reasonCode = Procedure; note = Ana Reyes, 38-year-old G2P1, 32 weeks AOG. BP 180/110 mmHg with severe headache, dizziness, and blurring of vision. Proteinuria 3+. Referred for urgent management of severe pre-eclampsia.](ServiceRequest-ExampleERefServiceRequest.md)

**for**: [Ana Luisa Reyes (official) Female, DoB: 1988-03-12 ( http://philhealth.gov.ph/fhir/Identifier/philhealth-id#PhilHealthID#78-658064775-3)](Patient-ExampleERefPatient.md)

**authoredOn**: 2026-06-18 08:30:00+0800

**lastModified**: 2026-06-18 09:45:00+0800

**requester**: [PractitionerRole Medical practitioner](PractitionerRole-ExampleERefPractitionerRoleSubmission.md)

**owner**: [PractitionerRole Medical practitioner](PractitionerRole-ExampleERefPractitionerRoleReceiving.md)



## Resource Content

```json
{
  "resourceType" : "Task",
  "id" : "ExampleERefTaskReceived",
  "meta" : {
    "profile" : ["https://fhir.doh.gov.ph/pheref/StructureDefinition/ereferral-task"]
  },
  "status" : "received",
  "businessStatus" : {
    "coding" : [{
      "system" : "https://fhir.doh.gov.ph/pheref/CodeSystem/ereferral-workflow",
      "code" : "received",
      "display" : "Received"
    }]
  },
  "intent" : "order",
  "focus" : {
    "reference" : "ServiceRequest/ExampleERefServiceRequest"
  },
  "for" : {
    "reference" : "Patient/ExampleERefPatient"
  },
  "authoredOn" : "2026-06-18T08:30:00+08:00",
  "lastModified" : "2026-06-18T09:45:00+08:00",
  "requester" : {
    "reference" : "PractitionerRole/ExampleERefPractitionerRoleSubmission"
  },
  "owner" : {
    "reference" : "PractitionerRole/ExampleERefPractitionerRoleReceiving"
  }
}

```
