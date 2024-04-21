```mermaid
sequenceDiagram
    participant L as Login
    participant R as Register
    participant U as getUserByEmail
    participant C as createUser
    participant S as Storage (Local Storage)

    L->>U: Fetch user by email
    U-->>L: Return user details
    L->>S: Store user session
    S-->>L: Confirm session storage
    L->>L: Navigate to home

    R->>U: Check if email exists
    U-->>R: Email exists?
    R->>C: No, create user
    C-->>R: User created
    R->>S: Store user session
    S-->>R: Confirm session storage
    R->>R: Navigate to home
