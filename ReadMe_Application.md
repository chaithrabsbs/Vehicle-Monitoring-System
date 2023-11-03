
# Vehicle Monitoring System

Vehicle Monitoring System is a web-based application that allows you to monitor and manage the status of connected vehicles owned by different customers. The system includes a .NET Core API for retrieving vehicle data and an Angular front-end for user-friendly monitoring.

## Architecture Overview

Vehicle Monitoring System is designed using a modern and scalable architecture to ensure reliability, maintainability, and flexibility. This document provides an overview of the system's architecture and the rationale behind its design.

### High-Level Architecture

Vehicle Monitoring System follows a three-tier architecture:

1. **Presentation Tier**: The front-end layer that interacts with users. In this system, we use a modern Angular web application, which provides an intuitive and user-friendly interface for managing vehicles and tracking their status in real-time.

2. **Application Tier**: The heart of the system, where business logic and application services reside. This tier is implemented using ASP.NET Core Web API. It handles requests from the front-end, processes data, and interacts with the data tier.

3. **Data Tier**: The backend storage where data is stored. The system uses a SQL Server database to store vehicle information, statuses, and other related data.

### Key Components

- **Angular Frontend**: The Angular-based front-end offers a responsive and dynamic user interface that allows users to manage and track vehicles effortlessly.

- **ASP.NET Core Web API**: The Web API layer serves as the application's core, responsible for handling HTTP requests, applying business logic, and returning appropriate responses. It communicates with the database and provides endpoints for user interactions.

- **SQL Server Database**: The database is used to store and manage all data related to vehicles, including their status and Customer Details.

## Why This Architecture?

The chosen architecture offers several benefits for our Vehicle Monitoring System:

1. **Scalability**: The three-tier architecture allows for easy scalability. You can scale the application tier and data tier independently to accommodate increasing loads.

2. **Separation of Concerns**: The separation of layers ensures that business logic, data access, and presentation are kept separate, making the system more maintainable and testable.

3. **Modern Frontend**: The Angular-based front-end provides a modern and responsive user interface, ensuring a great user experience.

4. **Security**: With ASP.NET Core, we can implement robust security features, including authentication and authorization. This architecture supports integration with JWT (JSON Web Tokens) for secure user authentication and data protection.

5. **Reliability**: Using a SQL Server database ensures data integrity and reliability for storing critical vehicle information.

6. **Maintainability**: The modular architecture makes it easier to maintain, extend, and enhance the system in the future.

7. **Flexibility**: By adopting widely used technologies like .NET Core and Angular, we ensure that the system can benefit from a large and active developer community.

## Getting Started

## Features

- List all vehicles along with their status.
- Filter vehicles by customer.
- Filter vehicles by status.
- Real-time data simulation.
- Secure API access using JWT authentication.
- Angular-based web interface for monitoring.

## Technologies

- .NET Core for API development.
- Angular for the user interface.
- Entity Framework Core for database operations.
- SQL Server for data storage.
- JWT token-based authentication for API security.
- xUnit for unit testing.

## Installation

1. Clone the repository:

```bash
For FrontEnd Application
git clone https://github.com/chaithrabsbs/Vehicle-Monitoring-System

Navigate to the project folder:
cd Vehicle-Monitoring-System

Install the necessary dependencies:
dotnet restore
cd VehicleMonitoringSystem.ClientApp
npm install

For BackEnd Application
git clone https://github.com/chaithrabsbs/Vehicle-Monitoring-System-Backend-

Navigate to the project folder:
cd Vehicle-Monitoring-System

Configuration
Database Configuration:

Configure your SQL Server connection string in appsettings.json or set the environment variable.
JWT Authentication:

Configure JWT settings in appsettings.json, including your secret key, issuer, and audience.

Usage

Run the API:
Navigate to the project folder:
dotnet run --project Vehicle-Monitoring-System

Start the Angular UI:
ng serve

Access the Angular UI in your web browser: http://localhost:4200

API Endpoints
/api/vehicles: List all vehicles.
/api/vehicles/customer/{customerId}: Filter vehicles by customer.
/api/vehicles/status/{status}: Filter vehicles by status.

Angular UI
The Angular-based web interface provides a user-friendly way to monitor and display connected vehicles.

Unit Testing
The project includes unit tests developed with xunit .net framework to ensure the reliability of the API and its components. You can run the tests using the following command:
dotnet test

API Security
The API is secured using token-based authentication. To access the API, you need a valid JWT token. You can obtain a token by authenticating with the Token API in IdController class.

Data Simulator
A data simulator component is available to VehicleStatusSimulator. This is useful for testing and monitoring the system without real vehicles.

Logging
The system uses logging to track important events and errors. Log files are stored in the logs directory.
