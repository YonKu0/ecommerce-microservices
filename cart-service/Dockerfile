# Use a slim Python base
FROM python:3.12-slim

# Set working dir
WORKDIR /app

# Install runtime deps
COPY requirements.txt ./
RUN pip install --upgrade pip \
    && pip install -r requirements.txt

# Copy app code
COPY . .

# Expose Flask’s default port
EXPOSE 5000

# Run the Flask app
ENV FLASK_APP=app.py
CMD ["flask", "run", "--host=0.0.0.0", "--port=5000"]
