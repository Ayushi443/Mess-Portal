# Backend Setup and Testing Guide

This guide provides instructions for setting up the backend environment locally and testing the application.

## Prerequisites

- Python 3.6 or higher installed on your system.
- pip package manager installed.

## Setup

1. Clone the repository to your local machine:

2. Navigate to the backend directory:

    ```bash
    cd Mess-Portal/Backend
    ```

3. Create a virtual environment:

    ```bash
    python3 -m venv myenv
    ```

4. Activate the virtual environment:

    - On Windows:

        ```bash
        myenv\Scripts\activate
        ```

5. Install dependencies:

    ```bash
    pip install -r requirements.txt
    ```

6. Apply database migrations:

    ```bash
    python manage.py migrate
    ```

## Running the Server

To run the development server, execute the following command:

```bash
python manage.py runserver
```
```