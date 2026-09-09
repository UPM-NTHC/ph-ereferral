# Practitioner Role VS - PH eReferral Implementation Guide v0.1.0

## ValueSet: Practitioner Role VS 

 
Designation of referring individual 

 **References** 

* [PH eReferral PractitionerRole](StructureDefinition-ereferral-practitioner-role.md)

### Logical Definition (CLD)

 

### Expansion

-------

 [Description of the above table(s)](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "ValueSet",
  "id" : "vs-practitioner-role",
  "url" : "https://www.fhir.doh.gov.ph/pheref/ValueSet/practitioner-role",
  "version" : "0.1.0",
  "name" : "EReferralPractitionerRoleCode",
  "title" : "Practitioner Role VS",
  "status" : "active",
  "date" : "2026-09-09T03:53:23+00:00",
  "publisher" : "SILab CoP IG Accelerator (eReferral)",
  "contact" : [{
    "name" : "SILab CoP IG Accelerator (eReferral)",
    "telecom" : [{
      "system" : "url",
      "value" : "https://github.com/UP-Manila-SILab"
    }]
  }],
  "description" : "Designation of referring individual",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "PH",
      "display" : "Philippines"
    }]
  }],
  "compose" : {
    "include" : [{
      "system" : "http://snomed.info/sct",
      "concept" : [{
        "code" : "158965000",
        "display" : "Doctor"
      },
      {
        "code" : "265937000",
        "display" : "Nurse"
      },
      {
        "code" : "309453006",
        "display" : "Midwife"
      },
      {
        "code" : "46255001",
        "display" : "Pharmacist"
      },
      {
        "code" : "386629007",
        "display" : "Medical Technologist"
      },
      {
        "code" : "159282002",
        "display" : "Laboratory Aide"
      },
      {
        "code" : "106289002",
        "display" : "Dentist"
      },
      {
        "code" : "4162009",
        "display" : "Dental Aide"
      },
      {
        "code" : "28229004",
        "display" : "Optometrist"
      }]
    },
    {
      "system" : "https://fhir.doh.gov.ph/phcore/CodeSystem/PSOC",
      "concept" : [{
        "code" : "3253",
        "display" : "Barangay Health Worker"
      }]
    },
    {
      "system" : "https://fhir.doh.gov.ph/phcore/CodeSystem/PHCW",
      "concept" : [{
        "code" : "PCW",
        "display" : "Primary Care Worker"
      }]
    }]
  }
}

```
