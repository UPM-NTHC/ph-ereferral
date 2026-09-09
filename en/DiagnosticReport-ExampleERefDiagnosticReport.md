# Example Diagnostic Report — Urinalysis - PH eReferral Implementation Guide v0.1.0

## Example DiagnosticReport: Example Diagnostic Report — Urinalysis

## Urinalysis complete panel - Urine 

| | |
| :--- | :--- |
| Subject | Ana Luisa Reyes (official) Female, DoB: 1988-03-12 ( http://philhealth.gov.ph/fhir/Identifier/philhealth-id#PhilHealthID#78-658064775-3) |
| Presented Form |  |

**Report Details**

Proteinuria 3+. Findings consistent with severe pre-eclampsia.



## Resource Content

```json
{
  "resourceType" : "DiagnosticReport",
  "id" : "ExampleERefDiagnosticReport",
  "status" : "final",
  "code" : {
    "coding" : [{
      "system" : "http://loinc.org",
      "code" : "24356-8",
      "display" : "Urinalysis complete panel - Urine"
    }]
  },
  "subject" : {
    "reference" : "urn:uuid:d7e33c3b-e90b-464e-a5eb-a92f60c71542"
  },
  "encounter" : {
    "reference" : "urn:uuid:a86d5b74-f8b5-42c2-b27a-5faff8d84cce"
  },
  "conclusion" : "Proteinuria 3+. Findings consistent with severe pre-eclampsia.",
  "presentedForm" : [{
    "title" : "Urinalysis Results — Kalibo Health Center"
  }]
}

```
