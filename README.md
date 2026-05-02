# Indian Election Assistant

An interactive web application designed to educate users about the Indian electoral process.

## Features
- **Interactive Timeline**: A step-by-step visual guide to the election process, from the announcement of dates and the Model Code of Conduct to the counting of votes.
- **Flashcards**: 3D animated flip-cards to help users master electoral terminology like ECI, EVM, VVPAT, and NOTA.
- **Knowledge Quiz**: A dynamic, interactive quiz that tests users' knowledge with immediate feedback, score tracking, and detailed explanations.
- **AI Assistant Chat**: A chat interface that answers questions about voter registration, age requirements, and the complete election process.

## Technologies Used
- React 18
- Vite
- Vanilla CSS (Glassmorphism, CSS Variables, Animations)
- React Router DOM
- Lucide React (Icons)
- Docker & NGINX (for production deployment)
- Google Cloud Run (Deployment)

## Getting Started Locally

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Deployment
This application includes a `Dockerfile` and `nginx.conf` and is configured to be deployed seamlessly on Google Cloud Run.
