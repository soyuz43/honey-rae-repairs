```mermaid
sequenceDiagram
    participant EL as EmployeeList
    participant CL as CustomerList
    participant GE as getAllEmployees
    participant GU as getNonStaffUsers
    participant DB as Database

    EL->>GE: Request all employees
    GE->>DB: Fetch employee data
    DB-->>GE: Return employees
    GE-->>EL: Display employees

    CL->>GU: Request all customers
    GU->>DB: Fetch customer data
    DB-->>GU: Return customers
    GU-->>CL: Display customers
