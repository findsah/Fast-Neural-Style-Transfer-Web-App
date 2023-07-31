# Backend: Set up the Flask API
FROM python:3.8 AS backend-builder

WORKDIR /app
COPY backend/requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY backend .

# Frontend: Build the React app
FROM node:14 AS frontend-builder

WORKDIR /app
COPY frontend/package.json frontend/package-lock.json ./
RUN npm install
COPY frontend ./
RUN npm run build

# Final image: Combine the frontend and backend
FROM python:3.8

WORKDIR /app

# Copy the built frontend from the frontend-builder stage
COPY --from=frontend-builder /app/build ./frontend/build

# Copy the installed Python packages from the backend-builder stage
COPY --from=backend-builder /usr/local/lib/python3.8/site-packages /usr/local/lib/python3.8/site-packages

# Copy the backend source code
COPY backend .

EXPOSE 8000

CMD ["python", "app.py"]
