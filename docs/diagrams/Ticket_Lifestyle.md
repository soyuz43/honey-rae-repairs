```mermaid
sequenceDiagram
    participant TL as TicketList
    participant T as Ticket
    participant GA as getAllTickets
    participant AS as assignTicket
    participant UC as updateClosedTicket
    participant DB as Database

    TL->>GA: Request all tickets
    GA->>DB: Fetch tickets from DB
    DB-->>GA: Return tickets
    GA-->>TL: Display tickets

    T->>AS: Assign ticket to employee
    AS->>DB: Store assignment in DB
    DB-->>AS: Confirm assignment
    AS-->>T: Update ticket view

    T->>UC: Close ticket (update)
    UC->>DB: Update ticket status
    DB-->>UC: Confirm update
    UC-->>T: Update ticket view
