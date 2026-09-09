# Example PractitionerRole — Dr. Carlos Lim at DRSTMH - PH eReferral Implementation Guide v0.1.0

## Example PractitionerRole: Example PractitionerRole — Dr. Carlos Lim at DRSTMH

Profile: [PH eReferral PractitionerRole](StructureDefinition-ereferral-practitioner-role.md)

**identifier**: `https://prc.gov.ph/`/7890123

**practitioner**: [Practitioner Carlos Lim (official)](Bundle-ExampleERefSubmissionBundle.md#urn-uuid-4f8b2c1d-9a3e-4b7c-8d1f-2e6a5b3c0d9e)

**organization**: [Organization Dr. Rafael S. Tumbokon Memorial Hospital](Bundle-ExampleERefSubmissionBundle.md#urn-uuid-8c97c63e-4dbf-45d5-894e-f671e385a126)

**code**: Medical practitioner



## Resource Content

```json
{
  "resourceType" : "PractitionerRole",
  "id" : "ExampleERefPractitionerRoleReceiving",
  "meta" : {
    "profile" : ["https://fhir.doh.gov.ph/pheref/StructureDefinition/ereferral-practitioner-role"]
  },
  "identifier" : [{
    "system" : "https://prc.gov.ph/",
    "value" : "7890123"
  }],
  "practitioner" : {
    "reference" : "urn:uuid:4f8b2c1d-9a3e-4b7c-8d1f-2e6a5b3c0d9e"
  },
  "organization" : {
    "reference" : "urn:uuid:8c97c63e-4dbf-45d5-894e-f671e385a126"
  },
  "code" : [{
    "coding" : [{
      "system" : "http://snomed.info/sct",
      "code" : "158965000",
      "display" : "Medical practitioner"
    }]
  }]
}

```
