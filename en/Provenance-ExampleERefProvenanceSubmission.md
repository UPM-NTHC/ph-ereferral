# Example Provenance — Referral Signature Attestation - PH eReferral Implementation Guide v0.1.0

## Example Provenance: Example Provenance — Referral Signature Attestation

Profile: [EReferral Provenance](StructureDefinition-ereferral-provenance.md)

Provenance for [ServiceRequest: requisition = urn:oid:1.2.840.113619.21.1.2#REF-2026-001234; status = active; intent = order; category = Hospital-based outpatient emergency care center; occurrence[x] = 2026-06-18 08:30:00+0800; authoredOn = 2026-06-18 08:30:00+0800; reasonCode = Procedure; note = Ana Reyes, 38-year-old G2P1, 32 weeks AOG. BP 180/110 mmHg with severe headache, dizziness, and blurring of vision. Proteinuria 3+. Referred for urgent management of severe pre-eclampsia.](Bundle-ExampleERefSubmissionBundle.md#urn-uuid-2da5e918-42d1-4d2c-b5dd-570b0b172759)

Summary

| | |
| :--- | :--- |
| Recorded | 2026-06-18 08:30:00+0800 |
| Activity | create |

**Agents**

* **Type**: Author
  * **who**: [PractitionerRole Medical practitioner](Bundle-ExampleERefSubmissionBundle.md#urn-uuid-06924c91-7363-40ab-932b-6f64d0a102b9)
  * **On Behalf Of**: [Organization Kalibo Health Center](Bundle-ExampleERefSubmissionBundle.md#urn-uuid-a038f451-6557-4b01-b05c-aa4ff967545b)



## Resource Content

```json
{
  "resourceType" : "Provenance",
  "id" : "ExampleERefProvenanceSubmission",
  "meta" : {
    "profile" : ["https://fhir.doh.gov.ph/pheref/StructureDefinition/ereferral-provenance"]
  },
  "target" : [{
    "reference" : "urn:uuid:2da5e918-42d1-4d2c-b5dd-570b0b172759"
  }],
  "recorded" : "2026-06-18T08:30:00+08:00",
  "activity" : {
    "coding" : [{
      "system" : "http://terminology.hl7.org/CodeSystem/v3-DataOperation",
      "code" : "CREATE",
      "display" : "create"
    }]
  },
  "agent" : [{
    "type" : {
      "coding" : [{
        "system" : "http://terminology.hl7.org/CodeSystem/provenance-participant-type",
        "code" : "author",
        "display" : "Author"
      }]
    },
    "who" : {
      "reference" : "urn:uuid:06924c91-7363-40ab-932b-6f64d0a102b9"
    },
    "onBehalfOf" : {
      "reference" : "urn:uuid:a038f451-6557-4b01-b05c-aa4ff967545b"
    }
  }],
  "signature" : [{
    "type" : [{
      "system" : "urn:iso-astm:E1762-95:2013",
      "code" : "1.2.840.10065.1.12.1.5",
      "display" : "Verification Signature"
    }],
    "when" : "2026-06-18T08:30:00+08:00",
    "who" : {
      "reference" : "urn:uuid:06924c91-7363-40ab-932b-6f64d0a102b9"
    },
    "data" : "dGVzdHNpZ25hdHVyZWJhc2U2NA=="
  }]
}

```
