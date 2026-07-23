# Product Decision Register (PDR)

**Project:** Introspect – Ek Prerna  
**Version:** v1.0  
**Status:** ACTIVE  
**Purpose:** Record all approved product decisions to ensure consistency throughout product design and implementation.

---

# Product Philosophy

Mission First.  
Product Second.  
Engineering Third.  
Technology Fourth.

The purpose of this register is to document product decisions that have been reviewed, approved, and frozen. These decisions act as the official reference during future design, development, testing, and product reviews.

---

# Product Decisions

| ID | Decision | Status | Reason |
|----|----------|--------|--------|
| PDR-001 | Minimum Typing, Maximum Structured Data | ✅ Frozen | Reduce user effort and improve data quality. |
| PDR-002 | Reflection is Optional | ✅ Frozen | Encourage reporting without forcing users to write text. |
| PDR-003 | Structured data is the primary source for Reports and AI Insights | ✅ Frozen | Reports and AI should rely mainly on objective data. |
| PDR-004 | Multiple Nivedan entries are allowed when required | ✅ Frozen | Supports real-life reporting flexibility. |
| PDR-005 | Past Nivedan entries can be viewed and edited | ✅ Frozen | Users may miss reporting on the same day; accuracy is preferred over strict deadlines. |
| PDR-006 | Weekly Sankalp can be created on any day | ✅ Frozen | Real users may plan their week whenever appropriate. |
| PDR-007 | Weekly Sankalp cannot be edited; it must be cancelled and recreated | ✅ Frozen | Preserve planning history and measure commitment consistency. |
| PDR-008 | Sankalp cancellation history must be preserved | ✅ Frozen | Enables future analysis of planning behaviour and self-commitment. |
| PDR-009 | Software automatically compares Planned vs Actual at the end of the week | ✅ Frozen | Progress should be based on planned commitment versus actual activity. |
| PDR-010 | The product is designed to motivate, not judge or punish users | ✅ Frozen | Positive encouragement aligns with the mission philosophy. |
| PDR-011 | क्षेत्रधर can submit Nivedan on behalf of eligible स्वाध्यायी कृतीशील | ✅ Frozen | Supports members who cannot use digital devices independently. |
| PDR-012 | ग्राम जिम्मेदार receives an overall village-level progress view | ✅ Frozen | Leadership should understand the overall health of the village for guidance and motivation. |

---

# Product Review Status

| Module | Status |
|----------|--------|
| Workflow Analysis | ✅ Completed |
| Nivedan Product Design | ✅ Completed |
| Nivedan Product Review (AG) | ✅ Completed |
| Independent Product Validation | ✅ Completed |
| Weekly Sankalp Design | 🟨 In Progress |
| Progress Design | ⏳ Pending |
| Reports Design | ⏳ Pending |
| Leadership Workflow Design | ⏳ Pending |

---

# Change Log

| Version | Description |
|----------|-------------|
| v1.0 | Initial Product Decision Register created. |

---

**Document Owner:** Product Architecture Team  
**Review Authority:** Product Design Sprint

| ID      | Decision                                                                  | Status   | Reason                                                                                   |
| ------- | ------------------------------------------------------------------------- | -------- | ---------------------------------------------------------------------------------------- |
| PDR-013 | Progress must be viewable for Current Week, Monthly, Yearly and Lifetime. | ✅ Frozen | Enables continuous self-improvement while keeping the same workflow for future versions. |


| ID      | Decision                                                                                   | Status   |
| ------- | ------------------------------------------------------------------------------------------ | -------- |
| PDR-014 | Leadership dashboards prioritize actionable follow-up over raw statistics.                 | ✅ Frozen |
| PDR-015 | Pending Nivedan is the highest-priority item on the क्षेत्रधर dashboard.                   | ✅ Frozen |
| PDR-016 | Member lists default to pending members first, with filters for different activity states. | ✅ Frozen |


| ID      | Decision                                                                                    | Status   | Reason                                                         |
| ------- | ------------------------------------------------------------------------------------------- | -------- | -------------------------------------------------------------- |
| PDR-017 | ग्राम जिम्मेदार dashboard presents village health before detailed statistics.               | ✅ Frozen | Leadership should first understand the overall situation.      |
| PDR-018 | Leadership insights must encourage guidance and support, not competition or punishment.     | ✅ Frozen | Aligns with the mission and organizational philosophy.         |
| PDR-019 | Members requiring follow-up are identified for motivation, never for public ranking.        | ✅ Frozen | Software should strengthen relationships, not create pressure. |
| PDR-020 | Area-wise (क्षेत्रधर-wise) summaries are the primary navigation method for ग्राम जिम्मेदार. | ✅ Frozen | Mirrors the real organizational structure.                     |


| ID      | Decision                                                                                           | Status   |
| ------- | -------------------------------------------------------------------------------------------------- | -------- |
| PDR-021 | Every real person has one permanent System ID, regardless of whether they log in directly.         | ✅ Frozen |
| PDR-022 | Login credentials are independent of the member's permanent identity.                              | ✅ Frozen |
| PDR-023 | क्षेत्रधर creates and manages accounts for eligible स्वाध्यायी कृतीशील under their responsibility. | ✅ Frozen |
| PDR-024 | Assisted members retain complete personal profiles even if they never log in themselves.           | ✅ Frozen |


| ID      | Decision                                                                                 | Status   |
| ------- | ---------------------------------------------------------------------------------------- | -------- |
| PDR-025 | Every person has an independent profile, even if they belong to a family.                | ✅ Frozen |
| PDR-026 | Family relationships can optionally link individual member profiles.                     | ✅ Frozen |
| PDR-027 | Family is a logical grouping and never replaces an individual's identity.                | ✅ Frozen |
| PDR-028 | Leadership dashboards may use family-level summaries to support guidance and motivation. | ✅ Frozen |


| ID      | Decision                                                                                                                   | Status   | Reason |
| ------- | -------------------------------------------------------------------------------------------------------------------------- | -------- | ------ |
| PDR-029 | Bhaavferi supports two participation modes: Single and Dampati.                                                            | ✅ Frozen |        |
| PDR-030 | Dampati Bhaavferi automatically creates a linked Bhaavferi record for the spouse when both profiles are linked and active. | ✅ Frozen |        |
| PDR-031 | Automatically created activities must retain their source as "Linked Activity" for traceability and future edits.          | ✅ Frozen |        |
| PDR-032 | Personal activities (Reflection, Reading, Prayer) remain individual unless explicitly designed as shared activities.       | ✅ Frozen |        |


| ID      | Decision                                                                                                                    | Status   |
| ------- | --------------------------------------------------------------------------------------------------------------------------- | -------- |
| PDR-033 | Every activity defines its own allowed participation modes (Single, Dampati, Full Family, etc.).                            | ✅ Frozen |
| PDR-034 | Linked activity creation is handled by a common Participation Engine instead of activity-specific logic.                    | ✅ Frozen |
| PDR-035 | Participation mode determines which linked profiles receive automatic entries.                                              | ✅ Frozen |
| PDR-036 | Activities may enforce eligibility rules (e.g., Ekadashi applicable only to eligible members) through the product workflow. | ✅ Frozen |


| ID      | Decision                                                                                                                                                         | Status   | Reason                                                      |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ----------------------------------------------------------- |
| PDR-037 | क्षेत्रधर (or higher authority) is responsible for creating new member profiles.                                                                                 | ✅ Frozen | Matches the real organizational workflow.                   |
| PDR-038 | Every member has one permanent identity; roles may change over time while preserving complete role history.                                                      | ✅ Frozen | Maintains continuity and historical accuracy.               |
| PDR-039 | Transfers change reporting hierarchy without changing the member's identity or historical records.                                                               | ✅ Frozen | Preserves long-term activity and progress.                  |
| PDR-040 | Family relationships are dynamic and may be created or updated later; related participation options become available only after the relationship is established. | ✅ Frozen | Reflects real-life changes such as marriage.                |
| PDR-041 | Members inactive for two years are automatically archived, never deleted.                                                                                        | ✅ Frozen | Retains historical records while keeping active data clean. |


| ID      | Decision                                                                                                                           | Status   | Reason |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------- | -------- | ------ |
| PDR-042 | The system shall support two administrative levels: Super Admin and Admin.                                                         | ✅ Frozen |        |
| PDR-043 | Super Admin is the system owner with unrestricted permissions and is intended only for system governance and emergency operations. | ✅ Frozen |        |
| PDR-044 | Admin permissions are configurable and may differ between administrators.                                                          | ✅ Frozen |        |
| PDR-045 | Sensitive administrative actions must be recorded in an immutable audit log.                                                       | ✅ Frozen |        |
| PDR-046 | Member deletion follows an Archive → Recycle Bin → Permanent Delete workflow; permanent deletion is restricted to Super Admin.     | ✅ Frozen |        |


