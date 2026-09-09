# EReferral DiagnosticReport - PH eReferral Implementation Guide v0.1.0

## Resource Profile: EReferral DiagnosticReport ( Experimental ) 

 
Diagnostic report profile for laboratory, diagnostic imaging, pathology, and histopathology reports shared as supporting clinical information in a Philippine eReferral. 

### EReferral DiagnosticReport

The **EReferral DiagnosticReport** profile represents diagnostic reports shared as supporting clinical information in a Philippine eReferral. Reports are linked from `ServiceRequest.supportingInfo`.

The minimum requirement is `DiagnosticReport.presentedForm` with an `Attachment` carrying the complete report content. `presentedForm.contentType` is required when `presentedForm` is populated.

Complete attachments can be added through `presentedForm`.

#### Report Attachments

Complete report attachments use `presentedForm`. Supported MIME types are:

| | |
| :--- | :--- |
| PDF or PDF/A | `application/pdf` |
| PNG | `image/png` |
| JPG or JPEG | `image/jpeg` |
| GIF | `image/gif` |

Attachments should not exceed **5 MB (5,242,880 bytes)**. The profile applies this as a warning when `Attachment.size` is populated. Implementers should prefer `Attachment.url` for externally retrievable report content or use a small payload when inline `Attachment.data` is necessary; large base64 examples are intentionally excluded.

The supported MIME types remain narrative guidance for v0.1. `Attachment.contentType` keeps its standard FHIR R4 required binding to the MIME Types value set; PeReF does not add a custom MIME CodeSystem or ValueSet.

This is a simple eReferral attachment approach aligned with [FHIR R4 DiagnosticReport](https://hl7.org/fhir/R4/diagnosticreport.html) and informed by [NHS e-Referral file attachment guidance](https://digital.nhs.uk/services/e-referral-service/api/updates-and-releases/roadmap/file-attachments), adapted for PeReF referral supporting information.

**Usages:**

* Refer to this Profile: [EReferral ServiceRequest](StructureDefinition-ereferral-service-request.md)
* Examples for this Profile: [DiagnosticReport/ExampleERefDiagnosticReportPDF](DiagnosticReport-ExampleERefDiagnosticReportPDF.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/fhir.ph.ereferral|current/StructureDefinition/StructureDefinition-ereferral-diagnostic-report.json)

### Formal Views of Profile Content

 [Description Differentials, Snapshots, and other representations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](../StructureDefinition-ereferral-diagnostic-report.csv), [Excel](../StructureDefinition-ereferral-diagnostic-report.xlsx), [Schematron](../StructureDefinition-ereferral-diagnostic-report.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "ereferral-diagnostic-report",
  "url" : "https://fhir.doh.gov.ph/pheref/StructureDefinition/ereferral-diagnostic-report",
  "version" : "0.1.0",
  "name" : "ERefDiagnosticReport",
  "title" : "EReferral DiagnosticReport",
  "status" : "draft",
  "experimental" : true,
  "date" : "2026-09-09T03:53:23+00:00",
  "publisher" : "SILab CoP IG Accelerator (eReferral)",
  "contact" : [{
    "name" : "SILab CoP IG Accelerator (eReferral)",
    "telecom" : [{
      "system" : "url",
      "value" : "https://github.com/UP-Manila-SILab"
    }]
  }],
  "description" : "Diagnostic report profile for laboratory, diagnostic imaging, pathology, and histopathology reports shared as supporting clinical information in a Philippine eReferral.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "PH",
      "display" : "Philippines"
    }]
  }],
  "purpose" : "To support referral handover of diagnostic reports that summarize or group diagnostic findings, link to structured atomic Observation results when available, and carry a complete formatted report attachment when needed.",
  "fhirVersion" : "4.0.1",
  "mapping" : [{
    "identity" : "workflow",
    "uri" : "http://hl7.org/fhir/workflow",
    "name" : "Workflow Pattern"
  },
  {
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
    "identity" : "w5",
    "uri" : "http://hl7.org/fhir/fivews",
    "name" : "FiveWs Pattern Mapping"
  }],
  "kind" : "resource",
  "abstract" : false,
  "type" : "DiagnosticReport",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/DiagnosticReport",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "DiagnosticReport",
      "path" : "DiagnosticReport",
      "constraint" : [{
        "key" : "eref-diagnosticreport-attachment-size",
        "severity" : "warning",
        "human" : "Presented report attachments should not exceed 5 MB when Attachment.size is populated.",
        "expression" : "presentedForm.all(size.empty() or size <= 5242880)",
        "source" : "https://fhir.doh.gov.ph/pheref/StructureDefinition/ereferral-diagnostic-report"
      }]
    },
    {
      "id" : "DiagnosticReport.basedOn",
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
      "path" : "DiagnosticReport.basedOn",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.doh.gov.ph/pheref/StructureDefinition/ereferral-service-request"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "DiagnosticReport.subject",
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
      "path" : "DiagnosticReport.subject",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.doh.gov.ph/pheref/StructureDefinition/ereferral-patient"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "DiagnosticReport.performer",
      "path" : "DiagnosticReport.performer",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.doh.gov.ph/phcore/StructureDefinition/ph-core-practitioner",
        "https://fhir.doh.gov.ph/phcore/StructureDefinition/ph-core-organization"]
      }]
    },
    {
      "id" : "DiagnosticReport.result",
      "path" : "DiagnosticReport.result",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.doh.gov.ph/pheref/StructureDefinition/ereferral-observation"]
      }]
    },
    {
      "id" : "DiagnosticReport.presentedForm",
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
      "path" : "DiagnosticReport.presentedForm",
      "short" : "Complete formatted diagnostic report",
      "definition" : "The complete report as an attachment. Supported formats are PDF or PDF/A (application/pdf), PNG (image/png), JPG/JPEG (image/jpeg), and GIF (image/gif). Attachments should not exceed 5 MB (5,242,880 bytes).",
      "mustSupport" : true
    },
    {
      "id" : "DiagnosticReport.presentedForm.contentType",
      "path" : "DiagnosticReport.presentedForm.contentType",
      "min" : 1
    }]
  }
}

```
