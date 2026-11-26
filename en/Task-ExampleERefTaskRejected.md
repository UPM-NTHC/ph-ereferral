# Example eReferral Task — Rejected - PH eReferral Implementation Guide v0.1.0

## Example Task: Example eReferral Task — Rejected

Profile: [EReferral Task](StructureDefinition-ereferral-task.md)

**status**: Rejected

**statusReason**: Receiving facility cannot take the case.

**businessStatus**: Rejected

**intent**: order

**focus**: [ServiceRequest: requisition = urn:oid:1.2.840.113619.21.1.2#REF-2026-001234; status = active; intent = order; category = Emergency; occurrence[x] = 2026-06-18 08:30:00+0800; authoredOn = 2026-06-18 08:30:00+0800; reasonCode = Severe pre-eclampsia requiring IV antihypertensive, seizure prophylaxis, and maternal-fetal monitoring; note = Ana Reyes, 38-year-old G2P1, 32 weeks AOG. BP 180/110 mmHg with severe headache, dizziness, and blurring of vision. Proteinuria 3+. Referred for urgent management of severe pre-eclampsia.](ServiceRequest-ExampleERefServiceRequest.md)

**for**: [Ana Luisa Reyes (official) Female, DoB: 1988-03-12 ( http://philhealth.gov.ph/fhir/Identifier/philhealth-id#PhilHealthID#78-658064775-3)](Patient-ExampleERefPatient.md)

**authoredOn**: 2026-06-18 08:30:00+0800

**lastModified**: 2026-06-18 10:05:00+0800

**requester**: [Maria Villanueva (official) (https://prc.gov.ph/#5466863): Medical practitioner at Kalibo Health Center (https://fhir.doh.gov.ph/phcore/Identifier/doh-nhfr-code#3056) (https://prc.gov.ph/#5466863)](PractitionerRole-ExampleERefPractitionerRoleSubmission.md)

**owner**: [Carlos Lim (official) (https://prc.gov.ph/#7890123): Medical practitioner at Dr. Rafael S. Tumbokon Memorial Hospital (https://fhir.doh.gov.ph/phcore/Identifier/doh-nhfr-code#513) (https://prc.gov.ph/#7890123)](PractitionerRole-ExampleERefPractitionerRoleReceiving.md)



## Resource Content

```json
{
  "resourceType" : "Task",
  "id" : "ExampleERefTaskRejected",
  "meta" : {
    "profile" : ["https://fhir.doh.gov.ph/pheref/StructureDefinition/ereferral-task"]
  },
  "status" : "rejected",
  "statusReason" : {
    "text" : "Receiving facility cannot take the case."
  },
  "businessStatus" : {
    "coding" : [{
      "system" : "https://fhir.doh.gov.ph/pheref/CodeSystem/ereferral-workflow",
      "code" : "rejected",
      "display" : "Rejected"
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
  "lastModified" : "2026-06-18T10:05:00+08:00",
  "requester" : {
    "reference" : "PractitionerRole/ExampleERefPractitionerRoleSubmission"
  },
  "owner" : {
    "reference" : "PractitionerRole/ExampleERefPractitionerRoleReceiving"
  }
}

```
