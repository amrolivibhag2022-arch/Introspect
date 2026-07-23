# Engineering Action Register v1.0
Status: FROZEN
Review Status: Approved (Corrections Applied)
**Project:** Introspect - Ek Prerna
**Purpose:** Single source of truth for all engineering actions identified during the Independent Engineering Audit (Phases 1-8).
**Sorting:** By Severity (Critical -> High -> Medium -> Low), then Engineering Impact (High -> Medium -> Low).

---

## 🔴 Critical Severity Actions

### EAR-001: Synchronous Data Flow Architecture
*   **Source Phase(s):** Phase 1 (Architecture), Phase 8 (Backend Readiness)
*   **Category:** Architecture
*   **Severity:** 🔴 Critical
*   **Finding Summary:** Entire application expects data instantaneously. There is no concept of latency or asynchronous operations.
*   **Recommended Action:** Refactor `Data.js` and `Auth.js` to return Promises. Wrap `localStorage` calls in `Promise.resolve()` to simulate network latency. Update all dashboard controllers to use `async/await`.
*   **Engineering Impact:** High - Affects almost every UI and data file. Crucial for any future backend connection.
*   **Estimated Effort:** 🏗️ Large
*   **Target Release:** RC-2 Improvement
*   **Dependencies:** None
*   **Verification Required:** Ensure no dashboards freeze during simulated latency.
*   **Current Status:** Open

### EAR-002: Lack of API Layer Abstraction
*   **Source Phase(s):** Phase 1 (Architecture), Phase 8 (Backend Readiness)
*   **Category:** Backend Readiness
*   **Severity:** 🔴 Critical
*   **Finding Summary:** Direct interaction with `localStorage` bypassing standard networking patterns (like fetch/XHR).
*   **Recommended Action:** Introduce a dedicated `APIAdapter.js` to act as a mock HTTP layer. Structure method signatures to mimic real REST calls (`method`, `body`).
*   **Engineering Impact:** High - Prepares codebase for a 1-to-1 swap when the real backend is built.
*   **Estimated Effort:** 🏗️ Large
*   **Target Release:** RC-2 Improvement
*   **Dependencies:** EAR-001
*   **Verification Required:** Verify data modules route solely through `APIAdapter`.
*   **Current Status:** Open

### EAR-003: Insecure Credential Storage
*   **Source Phase(s):** Phase 3 (Security)
*   **Category:** Security
*   **Severity:** 🔴 Critical
*   **Finding Summary:** Passwords for default accounts are stored and checked in plaintext within `localStorage` and `Auth.js`.
*   **Recommended Action:** Implement basic client-side hashing (or obfuscation) for passwords at rest to mitigate immediate plaintext exposure.
*   **Engineering Impact:** Medium - Improves immediate local security posture for the MVP.
*   **Estimated Effort:** ⚡ Small
*   **Target Release:** RC-1 Improvement
*   **Dependencies:** None
*   **Verification Required:** Inspect `localStorage` to ensure no passwords appear in plaintext.
*   **Current Status:** Open

---

## 🟠 High Severity Actions

### EAR-004: Client-Side Authorization Vulnerability
*   **Source Phase(s):** Phase 3 (Security)
*   **Category:** Security
*   **Severity:** 🟠 High
*   **Finding Summary:** Routing redirects rely purely on checking the role string in `sessionStorage`, which can be manually edited by a user.
*   **Recommended Action:** Acknowledge as a Frontend MVP limitation for now, but design the backend authorization strategy (JWT/Cookies) to fully protect data endpoints.
*   **Engineering Impact:** High - Requires backend integration to fully resolve.
*   **Estimated Effort:** 🏗️ Large
*   **Target Release:** Future Backend
*   **Dependencies:** Server availability
*   **Verification Required:** Backend endpoints must reject unauthorized requests regardless of frontend state.
*   **Current Status:** Open

### EAR-005: Global Namespace Pollution
*   **Source Phase(s):** Phase 2 (Code Quality), Phase 4 (Maintainability)
*   **Category:** Maintainability
*   **Severity:** 🟠 High
*   **Finding Summary:** Modules (`Data`, `Auth`, `Session`) are attached directly to the global `window` object.
*   **Recommended Action:** Wrap modules in Immediately Invoked Function Expressions (IIFEs) or begin transitioning to standard ES6 module exports/imports.
*   **Engineering Impact:** Medium - Reduces risk of collision and silent overwrites.
*   **Estimated Effort:** 🔨 Medium
*   **Target Release:** RC-2 Improvement
*   **Dependencies:** None
*   **Verification Required:** Ensure `window.Data` etc. are no longer globally accessible outside their explicit imports/scopes.
*   **Current Status:** Open

### EAR-006: Manual DOM Manipulation Overhead
*   **Source Phase(s):** Phase 4 (Maintainability), Phase 6 (UI Consistency)
*   **Category:** Maintainability
*   **Severity:** 🟠 High
*   **Finding Summary:** Dashboards heavily rely on repetitive imperative DOM updates (`getElementById`, `.innerHTML`).
*   **Recommended Action:** Accept the manual DOM manipulation as a necessary Frontend MVP limitation to respect the frozen architecture constraint. Do not refactor completed dashboard modules or introduce new UI helpers.
*   **Engineering Impact:** Medium - Cleans up UI controllers significantly.
*   **Estimated Effort:** 🔨 Medium
*   **Target Release:** Future Enhancement
*   **Dependencies:** None
*   **Verification Required:** Review dashboard JS for reduced line counts and abstraction usage.
*   **Current Status:** Open

### EAR-007: Lack of Token Management
*   **Source Phase(s):** Phase 3 (Security), Phase 8 (Backend Readiness)
*   **Category:** Security
*   **Severity:** 🟠 High
*   **Finding Summary:** The session currently only tracks username and role. It lacks a placeholder for an authentication token.
*   **Recommended Action:** Update `Session.js` to store and retrieve an opaque mock token to prepare the headers for future mock API requests.
*   **Engineering Impact:** Low - Easy implementation, high value for backend readiness.
*   **Estimated Effort:** ⚡ Small
*   **Target Release:** RC-2 Improvement
*   **Dependencies:** EAR-002
*   **Verification Required:** Token must be stored in `sessionStorage` upon login.
*   **Current Status:** Open

---

## 🟡 Medium Severity Actions

### EAR-008: Absence of Central State Management
*   **Source Phase(s):** Phase 1 (Architecture), Phase 4 (Maintainability)
*   **Category:** Architecture
*   **Severity:** 🟡 Medium
*   **Finding Summary:** Disconnected UI components independently query `localStorage`, leading to fragmented states and potential desyncs.
*   **Recommended Action:** Accept the current fragmented state model as frozen for the MVP. Do not redesign the architecture to introduce centralized state management or a pub/sub Event Emitter.
*   **Engineering Impact:** Medium - Makes data flow predictable.
*   **Estimated Effort:** 🔨 Medium
*   **Target Release:** Future Enhancement
*   **Dependencies:** None
*   **Verification Required:** Verify UI updates automatically when underlying data mutates.
*   **Current Status:** Open

### EAR-009: In-Memory Database Filtering
*   **Source Phase(s):** Phase 5 (Scalability), Phase 8 (Backend Readiness)
*   **Category:** Scalability
*   **Severity:** 🟡 Medium
*   **Finding Summary:** Operations retrieve the entire dataset into memory and filter it via JS arrays (e.g., getting reflections).
*   **Recommended Action:** This is acceptable for the MVP, but querying logic must be shifted to the backend database (SQL/NoSQL) in the future to handle large datasets.
*   **Engineering Impact:** Medium - Requires rewriting data fetching queries.
*   **Estimated Effort:** 🏗️ Large
*   **Target Release:** Future Backend
*   **Dependencies:** Server and Database availability
*   **Verification Required:** Verify query optimization on the backend.
*   **Current Status:** Open

### EAR-010: Lack of Global Error Handling
*   **Source Phase(s):** Phase 2 (Code Quality)
*   **Category:** Code Quality
*   **Severity:** 🟡 Medium
*   **Finding Summary:** `JSON.parse` operations lack `try/catch` wrappers. Corrupted `localStorage` will silently break the application.
*   **Recommended Action:** Add global `try/catch` blocks around all storage access and provide fallback default UI states.
*   **Engineering Impact:** Low - Improves stability drastically.
*   **Estimated Effort:** ⚡ Small
*   **Target Release:** RC-1 Improvement
*   **Dependencies:** None
*   **Verification Required:** Corrupt `localStorage` manually and verify app does not crash.
*   **Current Status:** Open

---

## 🟢 Low Severity Actions

### EAR-011: Local-Only Analytics Limitation
*   **Source Phase(s):** Phase 5 (Scalability)
*   **Category:** Scalability
*   **Severity:** 🟢 Low
*   **Finding Summary:** Admin/Manager reports only reflect the data stored on the current device's local storage.
*   **Recommended Action:** Defer fix until the backend is integrated, at which point global aggregate queries can be run.
*   **Engineering Impact:** Medium - Requires backend analytics endpoints.
*   **Estimated Effort:** 🏗️ Large
*   **Target Release:** Future Backend
*   **Dependencies:** Server and Database availability
*   **Verification Required:** Admin dashboard displays multi-user aggregate data.
*   **Current Status:** Open

### EAR-012: Duplicate Magic Strings
*   **Source Phase(s):** Phase 2 (Code Quality), Phase 4 (Maintainability)
*   **Category:** Code Quality
*   **Severity:** 🟢 Low
*   **Finding Summary:** String keys (like `"introspect_logged_in"`) are hardcoded across multiple files.
*   **Recommended Action:** Centralize all configuration and storage keys into a single `Constants` object.
*   **Engineering Impact:** Low - Simple refactor to improve code hygiene.
*   **Estimated Effort:** ⚡ Small
*   **Target Release:** RC-1 Improvement
*   **Dependencies:** None
*   **Verification Required:** Codebase search for bare string keys yields zero results.
*   **Current Status:** Open

---
*Document Purpose: Engineering Planning Only. Mission First. Engineering Second.*
