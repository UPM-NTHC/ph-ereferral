# Example Procedure — Pre-referral Treatment - PH eReferral Implementation Guide v0.1.0

## Example Procedure: Example Procedure — Pre-referral Treatment

Profile: [EReferral Procedure](StructureDefinition-ereferral-procedure.md)

**status**: Completed

**code**: Drug therapy

**subject**: [Ana Luisa Reyes (official) Female, DoB: 1988-03-12 ( http://philhealth.gov.ph/fhir/Identifier/philhealth-id#PhilHealthID#78-658064775-3)](Bundle-ExampleERefSubmissionBundle.md#urn-uuid-d7e33c3b-e90b-464e-a5eb-a92f60c71542)

**encounter**: [Encounter: status = finished; class = ambulatory (ActCode#AMB)](Bundle-ExampleERefSubmissionBundle.md#urn-uuid-a86d5b74-f8b5-42c2-b27a-5faff8d84cce)

**performed**: 2026-06-18 08:15:00+0800

**note**: 

> 

Pre-referral treatment given: Methyldopa 250mg BID, Folic Acid 5mg OD, FeSO4 300mg OD, CaCO3 500mg TID.




## Resource Content

```json
{
  "resourceType" : "Procedure",
  "id" : "ExampleERefProcedureTreatment",
  "meta" : {
    "profile" : ["https://fhir.doh.gov.ph/pheref/StructureDefinition/ereferral-procedure"]
  },
  "status" : "completed",
  "code" : {
    "coding" : [{
      "system" : "http://snomed.info/sct",
      "code" : "416608005",
      "display" : "Drug therapy"
    }]
  },
  "subject" : {
    "reference" : "urn:uuid:d7e33c3b-e90b-464e-a5eb-a92f60c71542"
  },
  "encounter" : {
    "reference" : "urn:uuid:a86d5b74-f8b5-42c2-b27a-5faff8d84cce"
  },
  "performedDateTime" : "2026-06-18T08:15:00+08:00",
  "note" : [{
    "text" : "Pre-referral treatment given: Methyldopa 250mg BID, Folic Acid 5mg OD, FeSO4 300mg OD, CaCO3 500mg TID."
  }]
}

```
