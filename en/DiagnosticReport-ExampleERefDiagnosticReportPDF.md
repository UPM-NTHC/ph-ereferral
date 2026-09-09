# Example Laboratory Diagnostic Report with PDF Attachment - PH eReferral Implementation Guide v0.1.0

## Example DiagnosticReport: Example Laboratory Diagnostic Report with PDF Attachment

Profile: [EReferral DiagnosticReport](StructureDefinition-ereferral-diagnostic-report.md)

## Laboratory report 

| | |
| :--- | :--- |
| Subject | Ana Luisa Reyes (official) Female, DoB: 1988-03-12 ( http://philhealth.gov.ph/fhir/Identifier/philhealth-id#PhilHealthID#78-658064775-3) |
| Performer | [Organization Kalibo Health Center](Organization-ExampleERefOrganizationKaliboHC.md) |
| Presented Form | application/pdf @[https://example.org/fhir/reports/laboratory-report-2025-001.pdf ![](external.png)](https://example.org/fhir/reports/laboratory-report-2025-001.pdf) |

**Report Details**



## Resource Content

```json
{
  "resourceType" : "DiagnosticReport",
  "id" : "ExampleERefDiagnosticReportPDF",
  "meta" : {
    "profile" : ["https://fhir.doh.gov.ph/pheref/StructureDefinition/ereferral-diagnostic-report"]
  },
  "basedOn" : [{
    "reference" : "ServiceRequest/ExampleERefServiceRequest"
  }],
  "status" : "final",
  "code" : {
    "coding" : [{
      "system" : "http://loinc.org",
      "code" : "11502-2",
      "display" : "Laboratory report"
    }]
  },
  "subject" : {
    "reference" : "Patient/ExampleERefPatient"
  },
  "performer" : [{
    "reference" : "Organization/ExampleERefOrganizationKaliboHC"
  }],
  "presentedForm" : [{
    "contentType" : "application/pdf",
    "url" : "https://example.org/fhir/reports/laboratory-report-2025-001.pdf",
    "title" : "Laboratory Report 2025-001"
  }]
}

```
