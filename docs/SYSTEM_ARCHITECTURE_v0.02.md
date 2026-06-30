# Introspect - Ek Prerna

# System Architecture v0.02


## 1. Project Overview

Introspect is a Self Reflection & Progress System designed to help users analyze their personal growth journey.

The platform focuses on:

- Self reflection
- Progress tracking
- Personal development
- Activity monitoring
- Future AI based insights


Current Version:

v0.02


Development Type:

Frontend Prototype


Technology Stack:

HTML5
CSS3
JavaScript
LocalStorage Based Authentication


---

# 2. Current Application Flow


User Flow:


Landing Page

        |
        |
        v

Login Page

        |
        |
        v

Role Selection

        |
        |
        v

Authentication Session

        |
        |
        v

Role Based Dashboard



Available Roles:


1. Admin

2. Manager

3. User



---

# 3. Project Architecture


Current Structure:


Introspect_v0.01



Introspect_v0.01

│
├── index.html
│
├── css
│ └── style.css
│
├── js
│ │
│ ├── script.js
│ ├── routing.js
│ ├── dashboard.js
│ │
│ └── modules
│ └── session.js
│
├── pages
│ │
│ ├── login.html
│ ├── admin_dashboard.html
│ ├── manager_dashboard.html
│ ├── user_dashboard.html
│ └── dashboard_template.html
│
├── Documentation
│
└── README.md



---

# 4. Authentication Architecture


Authentication is currently implemented using LocalStorage.


Login Process:


User enters:

- Username
- Password
- Role


After successful login:


Session Module stores:



introspect_logged_in

introspect_role

introspect_username



Session file:



js/modules/session.js



Responsibilities:


- Save user session
- Check login status
- Retrieve username
- Retrieve role
- Logout user


---

# 5. Role Based Routing


Routing system:


File:


js/routing.js



Available routes:


Admin:


pages/admin_dashboard.html



Manager:


pages/manager_dashboard.html



User:


pages/user_dashboard.html




Protection:


Each dashboard verifies:


- User login status
- Required role


Unauthorized access redirects to login page.


---

# 6. Dashboard Architecture


Current dashboards:


## Admin Dashboard


Purpose:

System administration and monitoring


Features:

- User management
- Reports
- Activity monitoring



## Manager Dashboard


Purpose:

Team progress monitoring


Features:

- Team Progress
- Member Activity
- Performance Reports



## User Dashboard


Purpose:

Personal growth tracking


Features:

- Self Reflection
- Personal Progress
- Reports



---

# 7. Frontend Design System


Theme:

Dark Ocean Serenity


Main Colors:


Background:

#061425


Secondary:

#0A1E36


Primary Accent:

#38BDF8


Secondary Accent:

#3B82F6



Design Principles:


- Minimal interface
- Responsive layout
- Glass effect cards
- Mobile friendly design



---

# 8. Responsive Design


Supported:


Desktop

Tablet

Mobile


Mobile features:


- Responsive dashboard cards
- Mobile menu toggle
- Adaptive layout



---

# 9. JavaScript Module Responsibilities


## script.js


Responsible for:

- Login handling
- Role selection
- Redirect triggering



## routing.js


Responsible for:

- Page routing
- Role protection



## dashboard.js


Responsible for:

- Dashboard initialization
- User information display
- Logout handling



## session.js


Responsible for:

- Authentication storage
- Session management



---

# 10. Current Completed Milestones


## v0.01

Completed:


- Initial project setup
- Landing page
- Basic theme


## v0.02

Completed:


- Login system
- Role selection
- Session management
- Role based routing
- Admin dashboard
- Manager dashboard
- User dashboard
- Mobile responsive dashboard


---

# 11. Future Development Roadmap


## Phase 3

Self Reflection Module


Planned:


- Reflection journal
- Daily questions
- Mood tracking
- Personal notes



## Phase 4

Progress Tracking


Planned:


- Growth charts
- Activity history
- Goal tracking



## Phase 5

Reports Module


Planned:


- Progress reports
- Analytics
- Insights



## Phase 6

AI Insight Layer


Future:


- AI based reflection analysis
- Personal suggestions
- Growth recommendations



---

# 12. Development Rules


Before major changes:


1. Create backup

2. Test functionality

3. Update documentation

4. Commit stable version in Git



Coding principles:


- Clean structure
- Modular JavaScript
- Responsive first approach
- Avoid unnecessary rewrites



---

# 13. Current Stable Git Version


Commit:



52d1d8a

Complete authentication and role based dashboard module v0.02



Status:

Stable Development Checkpoint


---

# End of System Architecture v0.02