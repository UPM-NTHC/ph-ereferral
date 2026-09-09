# eReferral Workflow Code System - PH eReferral Implementation Guide v0.1.0

## CodeSystem: eReferral Workflow Code System 

 
Local workflow codes for Philippine eReferral receiving-facility responses and related referral coordination events. 

This Code system is referenced in the definition of the following value sets:

* [eReferral Receiving Facility Response](ValueSet-ereferral-receiving-response.md)

-------

 [Description of the above table(s)](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "ereferral-workflow",
  "url" : "https://fhir.doh.gov.ph/pheref/CodeSystem/ereferral-workflow",
  "version" : "0.1.0",
  "name" : "EReferralWorkflowCS",
  "title" : "eReferral Workflow Code System",
  "status" : "draft",
  "experimental" : false,
  "date" : "2026-09-09T03:53:23+00:00",
  "publisher" : "SILab CoP IG Accelerator (eReferral)",
  "contact" : [{
    "name" : "SILab CoP IG Accelerator (eReferral)",
    "telecom" : [{
      "system" : "url",
      "value" : "https://github.com/UP-Manila-SILab"
    }]
  }],
  "description" : "Local workflow codes for Philippine eReferral receiving-facility responses and related referral coordination events.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "PH",
      "display" : "Philippines"
    }]
  }],
  "caseSensitive" : true,
  "content" : "complete",
  "count" : 7,
  "concept" : [{
    "code" : "received",
    "display" : "Received",
    "definition" : "The receiving facility has acknowledged receipt of the referral and is reviewing whether it can take the case."
  },
  {
    "code" : "accepted",
    "display" : "Accepted",
    "definition" : "The receiving facility can take the case and has given a positive transfer or service response."
  },
  {
    "code" : "rejected",
    "display" : "Rejected",
    "definition" : "The receiving facility cannot take the case and no onward receiving facility is identified in the same response."
  },
  {
    "code" : "referred-onward",
    "display" : "Referred onward",
    "definition" : "The receiving facility cannot take the case and directs the patient or referral to another specified facility."
  },
  {
    "code" : "capacity-full",
    "display" : "Capacity full",
    "definition" : "The receiving facility reports that capacity is full."
  },
  {
    "code" : "onward-referral-request",
    "display" : "Onward referral request",
    "definition" : "A ServiceRequest created or identified as the next referral request after the initial receiving facility refers the case onward."
  },
  {
    "code" : "consultation-summary",
    "display" : "Consultation summary",
    "definition" : "A summary of the referral service outcome."
  }]
}

```
