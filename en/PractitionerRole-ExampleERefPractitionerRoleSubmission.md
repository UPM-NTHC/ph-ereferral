# Example PractitionerRole — Dr. Villanueva at Kalibo Health Center - PH eReferral Implementation Guide v0.1.0

## Example PractitionerRole: Example PractitionerRole — Dr. Villanueva at Kalibo Health Center

Profile: [PH eReferral PractitionerRole](StructureDefinition-ereferral-practitioner-role.md)

Maria Villanueva (official) (https://prc.gov.ph/#5466863): Medical practitioner at Kalibo Health Center (https://fhir.doh.gov.ph/phcore/Identifier/doh-nhfr-code#3056) (https://prc.gov.ph/#5466863)

-------

| | |
| :--- | :--- |
| Practitioner: | [Maria Villanueva (official) (https://prc.gov.ph/#5466863)](Bundle-ExampleERefSubmissionBundle.md#urn-uuid-309021d0-7abe-4b54-b2e9-23a056851d0e) |
| Organization: | [Kalibo Health Center (https://fhir.doh.gov.ph/phcore/Identifier/doh-nhfr-code#3056)](Bundle-ExampleERefSubmissionBundle.md#urn-uuid-a038f451-6557-4b01-b05c-aa4ff967545b) |
| Role: | Medical practitioner |



## Resource Content

```json
{
  "resourceType" : "PractitionerRole",
  "id" : "ExampleERefPractitionerRoleSubmission",
  "meta" : {
    "profile" : ["https://fhir.doh.gov.ph/pheref/StructureDefinition/ereferral-practitioner-role"]
  },
  "identifier" : [{
    "system" : "https://prc.gov.ph/",
    "value" : "5466863"
  }],
  "practitioner" : {
    "reference" : "urn:uuid:309021d0-7abe-4b54-b2e9-23a056851d0e"
  },
  "organization" : {
    "reference" : "urn:uuid:a038f451-6557-4b01-b05c-aa4ff967545b"
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
