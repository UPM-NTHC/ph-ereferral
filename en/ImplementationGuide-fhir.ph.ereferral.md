# Resource PH eReferral Implementation Guide



## Resource Content

```json
{
  "resourceType" : "ImplementationGuide",
  "id" : "fhir.ph.ereferral",
  "language" : "en",
  "url" : "https://fhir.doh.gov.ph/pheref/ImplementationGuide/fhir.ph.ereferral",
  "version" : "0.1.0",
  "name" : "PHeReferralImplementationGuide",
  "title" : "PH eReferral Implementation Guide",
  "status" : "draft",
  "date" : "2026-09-09T03:53:23+00:00",
  "publisher" : "SILab CoP IG Accelerator (eReferral)",
  "contact" : [{
    "name" : "SILab CoP IG Accelerator (eReferral)",
    "telecom" : [{
      "system" : "url",
      "value" : "https://github.com/UP-Manila-SILab"
    }]
  }],
  "description" : "This implementation guide is provided to support the use of FHIR®© in an Philippines context, and defines the minimum set of constraints on the FHIR resources to create the PH eReferral profiles. This implementation guide forms the foundation to build future PH Realm FHIR implementation guides and its content will continue to grow to meet the needs of PH implementers.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "PH",
      "display" : "Philippines"
    }]
  }],
  "packageId" : "fhir.ph.ereferral",
  "license" : "CC-BY-1.0",
  "fhirVersion" : ["4.0.1"],
  "dependsOn" : [{
    "id" : "hl7tx",
    "extension" : [{
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/implementationguide-dependency-comment",
      "valueMarkdown" : "Automatically added as a dependency - all IGs depend on HL7 Terminology"
    }],
    "uri" : "http://terminology.hl7.org/ImplementationGuide/hl7.terminology",
    "packageId" : "hl7.terminology.r4",
    "version" : "7.3.0"
  },
  {
    "id" : "hl7ext",
    "extension" : [{
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/implementationguide-dependency-comment",
      "valueMarkdown" : "Automatically added as a dependency - all IGs depend on the HL7 Extension Pack"
    }],
    "uri" : "http://hl7.org/fhir/extensions/ImplementationGuide/hl7.fhir.uv.extensions",
    "packageId" : "hl7.fhir.uv.extensions.r4",
    "version" : "5.3.0"
  },
  {
    "id" : "fhir_ph_core",
    "uri" : "https://fhir.doh.gov.ph/phcore/ImplementationGuide/fhir.ph.core",
    "packageId" : "fhir.ph.core",
    "version" : "dev"
  }],
  "definition" : {
    "extension" : [{
      "extension" : [{
        "url" : "code",
        "valueString" : "copyrightyear"
      },
      {
        "url" : "value",
        "valueString" : "2025+"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "releaselabel"
      },
      {
        "url" : "value",
        "valueString" : "ci-build"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.doh.gov.ph/phcore/CodeSystem/PHCW"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.doh.gov.ph/phcore/CodeSystem/PSOC"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://www.fhir.doh.gov.ph/pheref/ValueSet/practitioner-role"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://www.fhir.doh.gov.ph/pheref/ValueSet/referral-category"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://www.fhir.doh.gov.ph/pheref/ValueSet/reason-for-referral-service-type"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "autoload-resources"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "path-liquid-template"
      },
      {
        "url" : "value",
        "valueString" : "template/liquid"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "path-liquid-template"
      },
      {
        "url" : "value",
        "valueString" : "input/liquid"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "path-qa"
      },
      {
        "url" : "value",
        "valueString" : "temp/qa"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "path-temp"
      },
      {
        "url" : "value",
        "valueString" : "temp/pages"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "path-output"
      },
      {
        "url" : "value",
        "valueString" : "output"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "path-suppressed-warnings"
      },
      {
        "url" : "value",
        "valueString" : "input/ignoreWarnings.txt"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "path-history"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.doh.gov.ph/pheref/history.html"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "template-html"
      },
      {
        "url" : "value",
        "valueString" : "template-page.html"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "template-md"
      },
      {
        "url" : "value",
        "valueString" : "template-page-md.html"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "apply-contact"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "apply-context"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "apply-copyright"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "apply-jurisdiction"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "apply-license"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "apply-publisher"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "apply-version"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "apply-wg"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "active-tables"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "fmm-definition"
      },
      {
        "url" : "value",
        "valueString" : "http://hl7.org/fhir/versions.html#maturity"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "propagate-status"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "excludelogbinaryformat"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "tabbed-snapshots"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "i18n-default-lang"
      },
      {
        "url" : "value",
        "valueString" : "en"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-internal-dependency",
      "valueCode" : "hl7.fhir.uv.tools.r4#1.1.2"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "copyrightyear"
      },
      {
        "url" : "value",
        "valueString" : "2025+"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "releaselabel"
      },
      {
        "url" : "value",
        "valueString" : "ci-build"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.doh.gov.ph/phcore/CodeSystem/PHCW"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.doh.gov.ph/phcore/CodeSystem/PSOC"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://www.fhir.doh.gov.ph/pheref/ValueSet/practitioner-role"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://www.fhir.doh.gov.ph/pheref/ValueSet/referral-category"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://www.fhir.doh.gov.ph/pheref/ValueSet/reason-for-referral-service-type"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "autoload-resources"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "path-liquid-template"
      },
      {
        "url" : "value",
        "valueString" : "template/liquid"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "path-liquid-template"
      },
      {
        "url" : "value",
        "valueString" : "input/liquid"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "path-qa"
      },
      {
        "url" : "value",
        "valueString" : "temp/qa"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "path-temp"
      },
      {
        "url" : "value",
        "valueString" : "temp/pages"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "path-output"
      },
      {
        "url" : "value",
        "valueString" : "output"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "path-suppressed-warnings"
      },
      {
        "url" : "value",
        "valueString" : "input/ignoreWarnings.txt"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "path-history"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.doh.gov.ph/pheref/history.html"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "template-html"
      },
      {
        "url" : "value",
        "valueString" : "template-page.html"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "template-md"
      },
      {
        "url" : "value",
        "valueString" : "template-page-md.html"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "apply-contact"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "apply-context"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "apply-copyright"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "apply-jurisdiction"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "apply-license"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "apply-publisher"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "apply-version"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "apply-wg"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "active-tables"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "fmm-definition"
      },
      {
        "url" : "value",
        "valueString" : "http://hl7.org/fhir/versions.html#maturity"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "propagate-status"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "excludelogbinaryformat"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "tabbed-snapshots"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "i18n-default-lang"
      },
      {
        "url" : "value",
        "valueString" : "en"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    }],
    "resource" : [{
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:resource"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "StructureDefinition-ereferral-encounter.html"
      }],
      "reference" : {
        "reference" : "StructureDefinition/ereferral-encounter"
      },
      "name" : "ERefEncounter",
      "description" : "Encounter profile for the Philippine eReferral system. Extends PHCoreEncounter to capture the clinical encounter context associated with a referral, including encounter status, classification, participants, and clinical information relevant to the referral workflow.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:resource"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "StructureDefinition-ereferral-condition.html"
      }],
      "reference" : {
        "reference" : "StructureDefinition/ereferral-condition"
      },
      "name" : "EReferral Condition",
      "description" : "Condition profile for diagnoses, problems, or clinical conditions relevant to a Philippine eReferral request.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:resource"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "StructureDefinition-ereferral-diagnostic-report.html"
      }],
      "reference" : {
        "reference" : "StructureDefinition/ereferral-diagnostic-report"
      },
      "name" : "EReferral DiagnosticReport",
      "description" : "Diagnostic report profile for laboratory, diagnostic imaging, pathology, and histopathology reports shared as supporting clinical information in a Philippine eReferral.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:resource"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "StructureDefinition-ereferral-medication-administration.html"
      }],
      "reference" : {
        "reference" : "StructureDefinition/ereferral-medication-administration"
      },
      "name" : "EReferral MedicationAdministration",
      "description" : "Profile for medications administered to patients in the Philippine eReferral context. Captures medications given as part of treatment (REF-39). Linked to the encounter via MedicationAdministration.context for clinical context.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:resource"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "StructureDefinition-ereferral-observation.html"
      }],
      "reference" : {
        "reference" : "StructureDefinition/ereferral-observation"
      },
      "name" : "EReferral Observation",
      "description" : "Profile for clinical observations in the Philippine eReferral context. \nSupports vital signs, laboratory results, and clinical measurements included in \nreferral clinical summaries. Linked to the encounter via Observation.encounter.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:resource"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "StructureDefinition-ereferral-procedure.html"
      }],
      "reference" : {
        "reference" : "StructureDefinition/ereferral-procedure"
      },
      "name" : "EReferral Procedure",
      "description" : "Procedure profile for procedures performed or documented as part of the clinical context of a Philippine eReferral.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:resource"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "StructureDefinition-ereferral-provenance.html"
      }],
      "reference" : {
        "reference" : "StructureDefinition/ereferral-provenance"
      },
      "name" : "EReferral Provenance",
      "description" : "Profile for tracking audit trail of eReferral actions including signatures and timestamps in the Philippine eReferral context.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ValueSet"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "ValueSet-ereferral-receiving-response.html"
      }],
      "reference" : {
        "reference" : "ValueSet/ereferral-receiving-response"
      },
      "name" : "eReferral Receiving Facility Response",
      "description" : "Response states used by a receiving facility after referral receipt in the PH eReferral workflow.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:resource"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "StructureDefinition-ereferral-related-person.html"
      }],
      "reference" : {
        "reference" : "StructureDefinition/ereferral-related-person"
      },
      "name" : "EReferral RelatedPerson",
      "description" : "RelatedPerson profile for the Philippine eReferral system. This profile represents optional patient contacts used in referral workflows, including next of kin, emergency contacts, accompanying persons, and guardians. It extends PHCoreRelatedPerson and maps to TDG element REF-29.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ValueSet"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "ValueSet-ereferral-relationship-type.html"
      }],
      "reference" : {
        "reference" : "ValueSet/ereferral-relationship-type"
      },
      "name" : "eReferral Relationship Type",
      "description" : "Relationship roles used for patient contacts, next of kin, emergency contacts, guardians, and accompanying persons in Philippine eReferral.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:resource"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "StructureDefinition-ereferral-service-request.html"
      }],
      "reference" : {
        "reference" : "StructureDefinition/ereferral-service-request"
      },
      "name" : "EReferral ServiceRequest",
      "description" : "Profile for ServiceRequest resource in the Philippine eReferral context. This profile defines the core referral request structure for referring patients between healthcare facilities.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:resource"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "StructureDefinition-ereferral-task.html"
      }],
      "reference" : {
        "reference" : "StructureDefinition/ereferral-task"
      },
      "name" : "EReferral Task",
      "description" : "Task profile for Philippine eReferral workflow management. Tracks referral state transitions from request through completion, supporting workflow coordination between sending and receiving facilities.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "CodeSystem"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "CodeSystem-ereferral-workflow.html"
      }],
      "reference" : {
        "reference" : "CodeSystem/ereferral-workflow"
      },
      "name" : "eReferral Workflow Code System",
      "description" : "Local workflow codes for Philippine eReferral receiving-facility responses and related referral coordination events.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:resource"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "StructureDefinition-ereferral-immunization.html"
      }],
      "reference" : {
        "reference" : "StructureDefinition/ereferral-immunization"
      },
      "name" : "ERefImmunization",
      "description" : "Immunization profile for the Philippine eReferral system. Extends PHCoreImmunization to define must-support elements for referral clinical context. Immunization records are linked to the encounter via Immunization.encounter to provide supporting clinical information about a patient's vaccination history.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Immunization"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Immunization-ExampleERefImmunizationRoutine.html"
      }],
      "reference" : {
        "reference" : "Immunization/ExampleERefImmunizationRoutine"
      },
      "name" : "ERefImmunization Example - Routine Immunization (MMR)",
      "description" : "Example immunization instance demonstrating routine vaccination (MMR - Measles-Mumps-Rubella) as supporting clinical information in an eReferral context via ServiceRequest.supportingInfo.",
      "exampleCanonical" : "https://fhir.doh.gov.ph/pheref/StructureDefinition/ereferral-immunization"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:resource"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "StructureDefinition-ereferral-patient.html"
      }],
      "reference" : {
        "reference" : "StructureDefinition/ereferral-patient"
      },
      "name" : "ERefPatient",
      "description" : "Patient profile for the Philippine eReferral system. Extends PHCorePatient with additional elements specific to referral workflows. This profile supports the patient demographic requirements defined in the eReferral TDG (Technical Development Group) mapping, elements REF-21 through REF-30.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "MedicationAdministration"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "MedicationAdministration-ExampleERefMedicationAdministrationAntibiotic.html"
      }],
      "reference" : {
        "reference" : "MedicationAdministration/ExampleERefMedicationAdministrationAntibiotic"
      },
      "name" : "Example Antibiotic Administration",
      "description" : "Example IV antibiotic administration for a patient with suspected infection. Demonstrates REF-39 Treatment Given data element.",
      "exampleCanonical" : "https://fhir.doh.gov.ph/pheref/StructureDefinition/ereferral-medication-administration"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Observation"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Observation-ExampleERefObservationBP.html"
      }],
      "reference" : {
        "reference" : "Observation/ExampleERefObservationBP"
      },
      "name" : "Example Blood Pressure — Ana Reyes",
      "description" : "Blood pressure taken at Kalibo Health Center: 180/110 mmHg.",
      "exampleCanonical" : "https://fhir.doh.gov.ph/pheref/StructureDefinition/ereferral-observation"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Observation"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Observation-ExampleERefObservationTemp.html"
      }],
      "reference" : {
        "reference" : "Observation/ExampleERefObservationTemp"
      },
      "name" : "Example Body Temperature — Ana Reyes",
      "description" : "Body temperature taken at Kalibo Health Center: 36.8 C.",
      "exampleCanonical" : "https://fhir.doh.gov.ph/pheref/StructureDefinition/ereferral-observation"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Observation"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Observation-ExampleERefObservationWeight.html"
      }],
      "reference" : {
        "reference" : "Observation/ExampleERefObservationWeight"
      },
      "name" : "Example Body Weight — Ana Reyes",
      "description" : "Body weight taken at Kalibo Health Center: 72 kg.",
      "exampleCanonical" : "https://fhir.doh.gov.ph/pheref/StructureDefinition/ereferral-observation"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Medication"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Medication-ExampleERefMedicationAntibiotic.html"
      }],
      "reference" : {
        "reference" : "Medication/ExampleERefMedicationAntibiotic"
      },
      "name" : "Example Cefuroxime Medication",
      "description" : "Example antibiotic medication resource for IV administration.",
      "exampleBoolean" : true
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "MedicationAdministration"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "MedicationAdministration-ExampleERefMedicationAdministrationChronic.html"
      }],
      "reference" : {
        "reference" : "MedicationAdministration/ExampleERefMedicationAdministrationChronic"
      },
      "name" : "Example Chronic Medication Administration",
      "description" : "Example chronic medication administration (antihypertensive) demonstrating routine medication given to patient.",
      "exampleCanonical" : "https://fhir.doh.gov.ph/pheref/StructureDefinition/ereferral-medication-administration"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Condition"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Condition-ExampleERefConditionChiefComplaint.html"
      }],
      "reference" : {
        "reference" : "Condition/ExampleERefConditionChiefComplaint"
      },
      "name" : "Example Condition — Chief Complaint",
      "description" : "Chief complaint recorded at Kalibo Health Center: severe headache, dizziness, blurring of vision, epigastric pain.",
      "exampleCanonical" : "https://fhir.doh.gov.ph/pheref/StructureDefinition/ereferral-condition"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Condition"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Condition-ExampleERefCondition.html"
      }],
      "reference" : {
        "reference" : "Condition/ExampleERefCondition"
      },
      "name" : "Example Condition — Severe Pre-eclampsia",
      "description" : "Working impression of severe pre-eclampsia in a 38-year-old G2P1 at 32 weeks AOG.",
      "exampleCanonical" : "https://fhir.doh.gov.ph/pheref/StructureDefinition/ereferral-condition"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "DiagnosticReport"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "DiagnosticReport-ExampleERefDiagnosticReport.html"
      }],
      "reference" : {
        "reference" : "DiagnosticReport/ExampleERefDiagnosticReport"
      },
      "name" : "Example Diagnostic Report — Urinalysis",
      "description" : "Urinalysis results showing proteinuria 3+, supporting the pre-eclampsia diagnosis.",
      "exampleBoolean" : true
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Encounter"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Encounter-ExampleERefSubmissionEncounter.html"
      }],
      "reference" : {
        "reference" : "Encounter/ExampleERefSubmissionEncounter"
      },
      "name" : "Example eReferral Encounter — Ana Reyes PCF Visit",
      "description" : "Ambulatory encounter at Kalibo Health Center where Ana Reyes was assessed and referred.",
      "exampleCanonical" : "https://fhir.doh.gov.ph/pheref/StructureDefinition/ereferral-encounter"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Patient"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Patient-ExampleERefPatient.html"
      }],
      "reference" : {
        "reference" : "Patient/ExampleERefPatient"
      },
      "name" : "Example eReferral Patient — Ana Reyes",
      "description" : "Ana Luisa Reyes, 38-year-old female, G2P1, 32 weeks AOG, from Barangay Mabuhay, Kalibo, Aklan. Referred for severe pre-eclampsia management.",
      "exampleCanonical" : "https://fhir.doh.gov.ph/pheref/StructureDefinition/ereferral-patient"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Task"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Task-ExampleERefTaskReceived.html"
      }],
      "reference" : {
        "reference" : "Task/ExampleERefTaskReceived"
      },
      "name" : "Example eReferral Task — Received",
      "description" : "Task in 'received' status: DRSTMH has acknowledged the referral.",
      "exampleCanonical" : "https://fhir.doh.gov.ph/pheref/StructureDefinition/ereferral-task"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Task"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Task-ExampleERefTaskReferredOnward.html"
      }],
      "reference" : {
        "reference" : "Task/ExampleERefTaskReferredOnward"
      },
      "name" : "Example eReferral Task — Referred Onward",
      "description" : "Task in 'rejected' status with 'referred-onward' business status: DRSTMH redirects the case.",
      "exampleCanonical" : "https://fhir.doh.gov.ph/pheref/StructureDefinition/ereferral-task"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Task"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Task-ExampleERefTaskRejected.html"
      }],
      "reference" : {
        "reference" : "Task/ExampleERefTaskRejected"
      },
      "name" : "Example eReferral Task — Rejected",
      "description" : "Task in 'rejected' status: DRSTMH cannot take the case and no onward facility is identified.",
      "exampleCanonical" : "https://fhir.doh.gov.ph/pheref/StructureDefinition/ereferral-task"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Task"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Task-ExampleERefTaskRequested.html"
      }],
      "reference" : {
        "reference" : "Task/ExampleERefTaskRequested"
      },
      "name" : "Example eReferral Task — Requested",
      "description" : "Task representing the referral for Ana Reyes in 'requested' status.",
      "exampleCanonical" : "https://fhir.doh.gov.ph/pheref/StructureDefinition/ereferral-task"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ServiceRequest"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "ServiceRequest-ExampleERefServiceRequest.html"
      }],
      "reference" : {
        "reference" : "ServiceRequest/ExampleERefServiceRequest"
      },
      "name" : "Example eReferral — Ana Reyes to DRSTMH",
      "description" : "Referral request from Kalibo Health Center to Dr. Rafael S. Tumbokon Memorial Hospital for severe pre-eclampsia management.",
      "exampleCanonical" : "https://fhir.doh.gov.ph/pheref/StructureDefinition/ereferral-service-request"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "RelatedPerson"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "RelatedPerson-ExampleERefRelatedPersonAccompanying.html"
      }],
      "reference" : {
        "reference" : "RelatedPerson/ExampleERefRelatedPersonAccompanying"
      },
      "name" : "Example ERefRelatedPerson - Accompanying Person",
      "description" : "Maria Reyes, mother of Ana Reyes, accompanying her during the referral.",
      "exampleCanonical" : "https://fhir.doh.gov.ph/pheref/StructureDefinition/ereferral-related-person"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "RelatedPerson"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "RelatedPerson-ExampleERefRelatedPersonNextOfKin.html"
      }],
      "reference" : {
        "reference" : "RelatedPerson/ExampleERefRelatedPersonNextOfKin"
      },
      "name" : "Example ERefRelatedPerson - Next of Kin",
      "description" : "Roberto Reyes, husband and next-of-kin for Ana Reyes.",
      "exampleCanonical" : "https://fhir.doh.gov.ph/pheref/StructureDefinition/ereferral-related-person"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Observation"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Observation-ExampleERefObservationHR.html"
      }],
      "reference" : {
        "reference" : "Observation/ExampleERefObservationHR"
      },
      "name" : "Example Heart Rate — Ana Reyes",
      "description" : "Heart rate taken at Kalibo Health Center: 112 bpm.",
      "exampleCanonical" : "https://fhir.doh.gov.ph/pheref/StructureDefinition/ereferral-observation"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "DiagnosticReport"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "DiagnosticReport-ExampleERefDiagnosticReportPDF.html"
      }],
      "reference" : {
        "reference" : "DiagnosticReport/ExampleERefDiagnosticReportPDF"
      },
      "name" : "Example Laboratory Diagnostic Report with PDF Attachment",
      "description" : "Example laboratory DiagnosticReport with complete report attachment through presentedForm, linked to an eReferral ServiceRequest and patient.",
      "exampleCanonical" : "https://fhir.doh.gov.ph/pheref/StructureDefinition/ereferral-diagnostic-report"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Observation"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Observation-ExampleERefObservationSpO2.html"
      }],
      "reference" : {
        "reference" : "Observation/ExampleERefObservationSpO2"
      },
      "name" : "Example Oxygen Saturation — Ana Reyes",
      "description" : "Oxygen saturation taken at Kalibo Health Center: 96%.",
      "exampleCanonical" : "https://fhir.doh.gov.ph/pheref/StructureDefinition/ereferral-observation"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "PractitionerRole"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "PractitionerRole-ExampleERefPractitionerRoleReceiving.html"
      }],
      "reference" : {
        "reference" : "PractitionerRole/ExampleERefPractitionerRoleReceiving"
      },
      "name" : "Example PractitionerRole — Dr. Carlos Lim at DRSTMH",
      "description" : "PractitionerRole linking Dr. Carlos Lim (care navigator) to Dr. Rafael S. Tumbokon Memorial Hospital for Task.owner and ServiceRequest.performer linkage.",
      "exampleCanonical" : "https://fhir.doh.gov.ph/pheref/StructureDefinition/ereferral-practitioner-role"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "PractitionerRole"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "PractitionerRole-ExampleERefPractitionerRoleSubmission.html"
      }],
      "reference" : {
        "reference" : "PractitionerRole/ExampleERefPractitionerRoleSubmission"
      },
      "name" : "Example PractitionerRole — Dr. Villanueva at Kalibo Health Center",
      "description" : "Links Dr. Maria Villanueva to Kalibo Health Center as a primary care physician.",
      "exampleCanonical" : "https://fhir.doh.gov.ph/pheref/StructureDefinition/ereferral-practitioner-role"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Procedure"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Procedure-ExampleERefProcedureTreatment.html"
      }],
      "reference" : {
        "reference" : "Procedure/ExampleERefProcedureTreatment"
      },
      "name" : "Example Procedure — Pre-referral Treatment",
      "description" : "Medications administered at Kalibo Health Center prior to referral (documented in note per REF-39).",
      "exampleCanonical" : "https://fhir.doh.gov.ph/pheref/StructureDefinition/ereferral-procedure"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Provenance"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Provenance-ExampleERefProvenanceSubmission.html"
      }],
      "reference" : {
        "reference" : "Provenance/ExampleERefProvenanceSubmission"
      },
      "name" : "Example Provenance — Referral Signature Attestation",
      "description" : "Provenance record with professional signature for Ana Reyes' referral.",
      "exampleCanonical" : "https://fhir.doh.gov.ph/pheref/StructureDefinition/ereferral-provenance"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Organization"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Organization-ExampleERefOrganizationDRSTMH.html"
      }],
      "reference" : {
        "reference" : "Organization/ExampleERefOrganizationDRSTMH"
      },
      "name" : "Example Receiving Facility — Dr. Rafael S. Tumbokon Memorial Hospital",
      "description" : "Dr. Rafael S. Tumbokon Memorial Hospital (DRSTMH), the receiving facility for Ana Reyes' referral.",
      "exampleBoolean" : true
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Practitioner"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Practitioner-ExampleERefPractitionerReceiving.html"
      }],
      "reference" : {
        "reference" : "Practitioner/ExampleERefPractitionerReceiving"
      },
      "name" : "Example Receiving Practitioner — Dr. Carlos Lim",
      "description" : "Dr. Carlos Lim, receiving physician and care navigator at Dr. Rafael S. Tumbokon Memorial Hospital.",
      "exampleBoolean" : true
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Organization"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Organization-ExampleERefOrganizationKaliboHC.html"
      }],
      "reference" : {
        "reference" : "Organization/ExampleERefOrganizationKaliboHC"
      },
      "name" : "Example Referring Facility — Kalibo Health Center",
      "description" : "Kalibo Health Center, the initiating/referring facility for Ana Reyes.",
      "exampleBoolean" : true
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Practitioner"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Practitioner-ExampleERefPractitionerSubmission.html"
      }],
      "reference" : {
        "reference" : "Practitioner/ExampleERefPractitionerSubmission"
      },
      "name" : "Example Referring Practitioner — Dr. Maria Villanueva",
      "description" : "Dr. Maria Villanueva, primary care physician at Kalibo Health Center.",
      "exampleBoolean" : true
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Observation"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Observation-ExampleERefObservationRR.html"
      }],
      "reference" : {
        "reference" : "Observation/ExampleERefObservationRR"
      },
      "name" : "Example Respiratory Rate — Ana Reyes",
      "description" : "Respiratory rate taken at Kalibo Health Center: 24/min.",
      "exampleCanonical" : "https://fhir.doh.gov.ph/pheref/StructureDefinition/ereferral-observation"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Bundle"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Bundle-ExampleERefSubmissionBundle.html"
      }],
      "reference" : {
        "reference" : "Bundle/ExampleERefSubmissionBundle"
      },
      "name" : "Example Submission Bundle — Initial Referral (KHC → DRSTMH)",
      "description" : "Transaction bundle for the initial referral submission from Kalibo Health Center to Dr. Rafael S. Tumbokon Memorial Hospital. Master data uses conditional PUT; clinical data uses POST.",
      "exampleBoolean" : true
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Medication"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Medication-ExampleERefMedicationTwinact.html"
      }],
      "reference" : {
        "reference" : "Medication/ExampleERefMedicationTwinact"
      },
      "name" : "Example Twinact Medication",
      "description" : "Example medication resource for Twinact (Telmisartan + Amlodipine) used in chronic medication administration example.",
      "exampleBoolean" : true
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:resource"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "StructureDefinition-ereferral-practitioner-role.html"
      }],
      "reference" : {
        "reference" : "StructureDefinition/ereferral-practitioner-role"
      },
      "name" : "PH eReferral PractitionerRole",
      "description" : "Profile on PractitionerRole for the Philippines eReferral specification, extending PHCorePractitionerRole. This profile captures the role of the referring practitioner and care navigator within the eReferral workflow, linking practitioners to healthcare facilities.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "CodeSystem"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "CodeSystem-PHCW.html"
      }],
      "reference" : {
        "reference" : "CodeSystem/PHCW"
      },
      "name" : "PHCW",
      "description" : "Philippines Healthcare Workers Code System",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ValueSet"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "ValueSet-vs-practitioner-role.html"
      }],
      "reference" : {
        "reference" : "ValueSet/vs-practitioner-role"
      },
      "name" : "Practitioner Role VS",
      "description" : "Designation of referring individual",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "CodeSystem"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "CodeSystem-PSOC.html"
      }],
      "reference" : {
        "reference" : "CodeSystem/PSOC"
      },
      "name" : "PSOC",
      "description" : "Philippine Standard Occupational Classification (fragment — healthcare-relevant codes)",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:extension"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "StructureDefinition-ereferral-pwd-disability.html"
      }],
      "reference" : {
        "reference" : "StructureDefinition/ereferral-pwd-disability"
      },
      "name" : "PWD Disability Registration",
      "description" : "Extension for Person With Disability (PWD) registration information in the Philippine eReferral system. Captures PWD ID number, disability type, and ID expiration date.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "CodeSystem"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "CodeSystem-pwd-disability-type-cs.html"
      }],
      "reference" : {
        "reference" : "CodeSystem/pwd-disability-type-cs"
      },
      "name" : "PWD Disability Type Code System",
      "description" : "Code system for types of disability as defined by the Philippine government for PWD registration.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ValueSet"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "ValueSet-pwd-disability-type-vs.html"
      }],
      "reference" : {
        "reference" : "ValueSet/pwd-disability-type-vs"
      },
      "name" : "PWD Disability Type Value Set",
      "description" : "Value set for types of disability as defined by the Philippine government for PWD registration.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ValueSet"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "ValueSet-vs-reason-for-referral-service-type.html"
      }],
      "reference" : {
        "reference" : "ValueSet/vs-reason-for-referral-service-type"
      },
      "name" : "Reason for Referral (Service Type) VS",
      "description" : "Reason for referral (Service type)",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ValueSet"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "ValueSet-vs-referral-category.html"
      }],
      "reference" : {
        "reference" : "ValueSet/vs-referral-category"
      },
      "name" : "Referral Category VS",
      "description" : "Referral category (Emergency or Outpatient)",
      "exampleBoolean" : false
    }],
    "page" : {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-page-name",
        "valueUrl" : "toc.html"
      }],
      "nameUrl" : "toc.html",
      "title" : "Table of Contents",
      "generation" : "html",
      "page" : [{
        "extension" : [{
          "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-page-name",
          "valueUrl" : "index.html"
        }],
        "nameUrl" : "index.html",
        "title" : "Home",
        "generation" : "markdown"
      },
      {
        "extension" : [{
          "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-page-name",
          "valueUrl" : "connectathon-readiness.html"
        }],
        "nameUrl" : "connectathon-readiness.html",
        "title" : "Connectathon Readiness",
        "generation" : "markdown"
      },
      {
        "extension" : [{
          "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-page-name",
          "valueUrl" : "coverage-map.html"
        }],
        "nameUrl" : "coverage-map.html",
        "title" : "Coverage Map",
        "generation" : "markdown"
      },
      {
        "extension" : [{
          "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-page-name",
          "valueUrl" : "data-dictionary.html"
        }],
        "nameUrl" : "data-dictionary.html",
        "title" : "Data Dictionary",
        "generation" : "markdown"
      },
      {
        "extension" : [{
          "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-page-name",
          "valueUrl" : "decision-log.html"
        }],
        "nameUrl" : "decision-log.html",
        "title" : "Decision Log",
        "generation" : "markdown"
      },
      {
        "extension" : [{
          "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-page-name",
          "valueUrl" : "logical-information-model.html"
        }],
        "nameUrl" : "logical-information-model.html",
        "title" : "Logical Information Model",
        "generation" : "markdown"
      },
      {
        "extension" : [{
          "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-page-name",
          "valueUrl" : "references.html"
        }],
        "nameUrl" : "references.html",
        "title" : "References",
        "generation" : "markdown"
      },
      {
        "extension" : [{
          "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-page-name",
          "valueUrl" : "referral-workflow.html"
        }],
        "nameUrl" : "referral-workflow.html",
        "title" : "Referral Workflow",
        "generation" : "markdown"
      },
      {
        "extension" : [{
          "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-page-name",
          "valueUrl" : "sample-case-ana-reyes.html"
        }],
        "nameUrl" : "sample-case-ana-reyes.html",
        "title" : "Sample Case Ana Reyes",
        "generation" : "markdown"
      },
      {
        "extension" : [{
          "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-page-name",
          "valueUrl" : "v01-scope.html"
        }],
        "nameUrl" : "v01-scope.html",
        "title" : "V 01 Scope",
        "generation" : "markdown"
      },
      {
        "extension" : [{
          "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-page-name",
          "valueUrl" : "who-smart-l1.html"
        }],
        "nameUrl" : "who-smart-l1.html",
        "title" : "Who Smart L 1",
        "generation" : "markdown"
      }]
    },
    "parameter" : [{
      "code" : "path-resource",
      "value" : "input/capabilities"
    },
    {
      "code" : "path-resource",
      "value" : "input/examples"
    },
    {
      "code" : "path-resource",
      "value" : "input/extensions"
    },
    {
      "code" : "path-resource",
      "value" : "input/models"
    },
    {
      "code" : "path-resource",
      "value" : "input/operations"
    },
    {
      "code" : "path-resource",
      "value" : "input/profiles"
    },
    {
      "code" : "path-resource",
      "value" : "input/resources"
    },
    {
      "code" : "path-resource",
      "value" : "input/vocabulary"
    },
    {
      "code" : "path-resource",
      "value" : "input/maps"
    },
    {
      "code" : "path-resource",
      "value" : "input/testing"
    },
    {
      "code" : "path-resource",
      "value" : "input/history"
    },
    {
      "code" : "path-resource",
      "value" : "fsh-generated/resources"
    },
    {
      "code" : "path-pages",
      "value" : "template/config"
    },
    {
      "code" : "path-pages",
      "value" : "input/assets"
    },
    {
      "code" : "path-pages",
      "value" : "input/images"
    },
    {
      "code" : "path-tx-cache",
      "value" : "input-cache/txcache"
    }]
  }
}

```
