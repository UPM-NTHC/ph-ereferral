# Example Referring Facility — Kalibo Health Center - PH eReferral Implementation Guide v0.1.0

## Example Organization: Example Referring Facility — Kalibo Health Center

Profile: [PH Core Organization](https://build.fhir.org/ig/UPM-NTHC/ph-core/StructureDefinition-ph-core-organization.html)

Kalibo Health Center (https://fhir.doh.gov.ph/phcore/Identifier/doh-nhfr-code#3056)

-------

| | |
| :--- | :--- |
| Other Id: | `https://fhir.doh.gov.ph/phcore/Identifier/hcpn-code`/Aklan HCPN |
| Contact Detail | * ph: (043) 756-2233(Work)
* Mabini Street 5600 PH (work)
 |



## Resource Content

```json
{
  "resourceType" : "Organization",
  "id" : "ExampleERefOrganizationKaliboHC",
  "meta" : {
    "profile" : ["https://fhir.doh.gov.ph/phcore/StructureDefinition/ph-core-organization"]
  },
  "identifier" : [{
    "system" : "https://fhir.doh.gov.ph/phcore/Identifier/doh-nhfr-code",
    "value" : "3056"
  },
  {
    "system" : "https://fhir.doh.gov.ph/phcore/Identifier/hcpn-code",
    "value" : "Aklan HCPN"
  }],
  "name" : "Kalibo Health Center",
  "telecom" : [{
    "system" : "phone",
    "value" : "(043) 756-2233",
    "use" : "work"
  }],
  "address" : [{
    "extension" : [{
      "url" : "https://fhir.doh.gov.ph/phcore/StructureDefinition/region",
      "valueCoding" : {
        "system" : "https://psa.gov.ph/classification/psgc",
        "code" : "0600000000",
        "display" : "Region VI (Western Visayas)"
      }
    },
    {
      "url" : "https://fhir.doh.gov.ph/phcore/StructureDefinition/province",
      "valueCoding" : {
        "system" : "https://psa.gov.ph/classification/psgc",
        "code" : "0600400000",
        "display" : "Aklan"
      }
    },
    {
      "url" : "https://fhir.doh.gov.ph/phcore/StructureDefinition/city-municipality",
      "valueCoding" : {
        "system" : "https://psa.gov.ph/classification/psgc",
        "code" : "0600407000",
        "display" : "Kalibo"
      }
    },
    {
      "url" : "https://fhir.doh.gov.ph/phcore/StructureDefinition/barangay",
      "valueCoding" : {
        "system" : "https://psa.gov.ph/classification/psgc",
        "code" : "0600407013",
        "display" : "Poblacion"
      }
    }],
    "use" : "work",
    "line" : ["Mabini Street"],
    "postalCode" : "5600",
    "country" : "PH"
  }]
}

```
