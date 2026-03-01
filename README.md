Adaptive Cipher Guard

Adaptive Moving Target Encryption for Secure Cloud File Storage (Quantum Aware)

Overview

Adaptive Cipher Guard is a demonstration platform that explores adaptive cryptographic defense in a cloud storage environment.

The system behaves like a simplified cloud file locker where uploaded files are encrypted before storage. Instead of using fixed encryption, the platform monitors behavioral activity and dynamically adjusts encryption strength when suspicious patterns are detected.

The objective of the project is to demonstrate how Moving Target Defense principles can improve security by preventing attackers from relying on a stable cryptographic environment.

This project is developed as a final practical implementation focused on applied cybersecurity concepts.

Core Idea

Traditional storage systems use static encryption. Once attackers understand the encryption setup, repeated attacks target the same structure.

This system introduces adaptive encryption:

Files start with AES 128 encryption.

User behavior and access patterns are monitored.

A machine learning model evaluates threat levels.

Encryption parameters automatically change when risk increases.

Files are re encrypted and keys rotated during attacks.

The attacker’s progress is invalidated whenever the system adapts.

Features

User authentication system

Secure file upload and download

Automatic AES encryption before storage

Behavioral activity logging

Machine learning based threat detection

Adaptive encryption upgrade

Automatic key rotation

Attack simulation module

Security event logging dashboard

Threat Model

The project simulates adversarial behavior rather than using real external attackers.

Threat scenarios include:

Repeated wrong key attempts (brute force simulation)

Abnormal access frequency (replay behavior)

Accelerated attack attempts representing quantum aware threats

Threat levels:

Normal
Suspicious
Attack

System response escalates automatically based on detected behavior.

Technology Stack

Backend
Python
Flask

Security
PyCryptodome (AES Encryption)

Machine Learning
Scikit learn

Database
SQLite

Frontend
HTML
CSS
JavaScript

Visualization
Matplotlib

System Workflow

User logs into the system.

File is uploaded.

File is encrypted using AES 128.

Behavioral logs are recorded.

ML model evaluates activity patterns.

Threat level is determined.

Encryption adapts if required.

Files are re encrypted and keys rotated.

Security events are logged for analysis.
