# Cloud SQL API - MySQL

This project demonstrates a Cloud SQL API built using MySQL on Google Cloud Platform.

## Prerequisites

Before running the application, ensure that you have the following:

- Google Cloud Platform account
- Project with billing enabled
- Enabled Cloud SQL API
- Created a Cloud SQL instance with MySQL
- Installed MySQL client (e.g., MySQL Workbench or MySQL command-line client)

## Setup

1. Clone the repository:

   git clone : github.com/mrivali/cloud-sql-api

2. Install dependencies by running the following command in the project directory
    npm install express body-parser

3.  Create a .env file in the project directory and provide the following environment variables:
     
    DB_HOST=<your-cloud-sql-instance-ip>
    DB_PORT=<your-cloud-sql-instance-port>
    DB_USER=<your-mysql-username>
    DB_PASSWORD=<your-mysql-password>
    DB_NAME=<your-mysql-database-name>

4. start the application by typing
    
    npm start

5. Contributing

Contributions are welcome! If you find any issues or want to add new features, please open an issue or submit a pull request.
License

This project is licensed under the MIT License.



