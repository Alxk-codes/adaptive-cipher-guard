# Adaptive Cipher Guard

**Adaptive Moving Target Encryption for Secure Cloud File Storage (Quantum Aware)**

---

## Overview

Adaptive Cipher Guard is a demonstration platform that explores adaptive cryptographic defense within a cloud storage environment.

The system functions as a simplified cloud file locker where uploaded files are encrypted before storage. Unlike traditional systems that rely on static encryption, this platform monitors behavioral activity and dynamically adjusts encryption strength when suspicious patterns are detected.

The objective is to demonstrate how Moving Target Defense principles improve resilience by preventing attackers from relying on a stable cryptographic environment.

This project is developed as a final practical implementation focused on applied cybersecurity concepts.

---

## Core Idea

Traditional storage systems use static encryption. Once attackers understand the encryption configuration, repeated attacks target the same structure.

This system introduces adaptive encryption:

* Files start with **AES 128** encryption
* User behavior and access patterns are monitored
* A machine learning model evaluates threat levels
* Encryption parameters automatically change when risk increases
* Files are re encrypted and keys rotated during attacks

Whenever the system adapts, attacker progress is invalidated.

---

## Features

* User authentication system
* Secure file upload and download
* Automatic AES encryption before storage
* Behavioral activity logging
* Machine learning based threat detection
* Adaptive encryption upgrade
* Automatic key rotation
* Attack simulation module
* Security event logging dashboard

---

## Threat Model

The project simulates adversarial behavior rather than relying on real external attackers.

### Simulated Threat Scenarios

* Repeated wrong key attempts (brute force simulation)
* Abnormal access frequency (replay behavior)
* Accelerated attack attempts representing quantum aware threats

### Threat Levels

* **Normal**
* **Suspicious**
* **Attack**

System response escalates automatically based on detected behavior.

---

## Technology Stack

### Backend

* Python
* Flask

### Security

* PyCryptodome (AES Encryption)

### Machine Learning

* Scikit learn

### Database

* SQLite

### Frontend

* HTML
* CSS
* JavaScript

### Visualization

* Matplotlib

---

## System Workflow

1. User logs into the system
2. File is uploaded
3. File is encrypted using AES 128
4. Behavioral logs are recorded
5. ML model evaluates activity patterns
6. Threat level is determined
7. Encryption adapts if required
8. Files are re encrypted and keys rotated
9. Security events are logged for analysis

---

## Installation

Clone the repository:

```bash
git clone https://github.com/Alxk-codes/adaptive-cipher-guard.git
cd adaptive-cipher-guard
```

Create a virtual environment:

```bash
python -m venv venv
```

Activate the environment:

**Windows**

```bash
venv\Scripts\activate
```

**Linux / macOS**

```bash
source venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

---

## Running the Application

```bash
python app.py
```

Open your browser:

```
http://127.0.0.1:5000
```

---

## Academic Objectives

* Demonstrate adaptive encryption concepts
* Implement behavior based threat detection
* Simulate quantum aware attack conditions
* Compare static and adaptive cryptographic models
* Provide observable security response during attacks

---

## Limitations

* Designed for educational demonstration
* Uses simulated attack scenarios
* Not intended for production deployment
* Quantum threats are behaviorally modeled

---

## Author

Alok Dubey

Adaptive Security and Cloud Cryptography

