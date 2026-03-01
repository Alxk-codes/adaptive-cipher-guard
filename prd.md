# Product Requirements Document

# Adaptive Moving Target Encryption for Secure Cloud File Storage (Quantum Aware)

---

## 1. Product Overview

Adaptive Moving Target Encryption for Secure Cloud File Storage is a security focused cloud locker designed to demonstrate dynamic cryptographic defense against evolving threats. The system behaves like a simplified cloud storage platform where users upload and download files, but unlike traditional systems, encryption is not fixed.

The core idea is simple. Static encryption creates predictable targets. Once attackers understand one encryption setup, they repeatedly attack the same structure. This project removes predictability by continuously adapting encryption parameters based on observed behavior.

The system monitors access patterns, failed decryption attempts, request frequency, and simulated quantum attack indicators. A machine learning model evaluates these signals and assigns a threat level. Based on that threat level, the encryption engine automatically upgrades algorithms, rotates keys, and re encrypts stored files.

The project demonstrates how adaptive cryptography improves security resilience and aligns with emerging research directions in quantum aware cybersecurity.

---

## 2. Problem Statement

Most cloud storage platforms rely on fixed encryption configurations. Even strong encryption becomes vulnerable when attackers can repeatedly test strategies against an unchanged system.

Major limitations of static encryption include:

- Predictable cryptographic behavior over time  
- No automatic response to suspicious activity  
- Manual key rotation dependent on administrators  
- Poor adaptability against accelerated attack models such as quantum assisted search techniques  

With quantum computing research advancing, algorithms inspired by Grover search theoretically reduce brute force complexity. Systems that remain static become increasingly exposed.

This project addresses the gap by introducing a self adapting encryption framework capable of responding automatically to perceived threats.

---

## 3. Project Vision

The vision is to build a demonstrable intelligent security system where encryption behaves as a moving target. Instead of defending a fixed cryptographic wall, the system continuously changes its defensive posture.

The project aims to show that adaptive encryption increases uncertainty for attackers and raises the cost of successful compromise.

---

## 4. Objectives

The system is designed to achieve the following objectives:

- Design an adaptive encryption framework capable of modifying cryptographic strength dynamically  
- Implement machine learning driven threat detection using behavioral logs  
- Simulate quantum aware attack conditions within a classical computing environment  
- Automatically rotate keys and re encrypt files without user intervention  
- Compare static encryption performance with adaptive encryption behavior  
- Demonstrate measurable improvement in resistance against simulated attacks  

---

## 5. System Scope

This project represents a controlled academic implementation rather than a production cloud platform.

### Included Capabilities

- User authentication and session management  
- Secure file upload and download  
- Automated encryption and decryption workflows  
- Threat monitoring using behavioral analytics  
- Adaptive cryptographic control logic  
- Attack simulation modules for demonstration  
- Security evaluation metrics and visual analysis  

### Excluded Capabilities

- Distributed cloud infrastructure  
- Real quantum hardware integration  
- Enterprise scale deployment  
- Multi tenant enterprise authorization models  

---

## 6. System Users

Primary users include students, academic evaluators, and cybersecurity learners. The system is optimized for demonstration clarity rather than commercial deployment.

---

## 7. Functional Requirements

### 7.1 User Module

Users must authenticate through login. After authentication, users can upload files. Uploaded files are never stored in plaintext form.

Users can download files by providing valid credentials and correct decryption keys. The interface displays file security status so users can observe how encryption evolves over time.

The system also exposes security feedback such as current threat level and encryption mode for demonstration purposes.

---

### 7.2 File Storage Module

Uploaded files are stored in encrypted form inside local storage simulating a cloud environment.

Each file maintains metadata including:

- Encryption mode used  
- Encryption key identifier  
- Encryption timestamp  
- Threat level history  
- Re encryption count  

Plain files are deleted immediately after encryption completes.

---

### 7.3 Encryption Engine

The encryption engine performs all cryptographic operations.

Initial state uses AES 128 for performance efficiency under normal conditions.

When threat level increases, encryption strength upgrades automatically to AES 256. Under severe threat conditions, layered encryption and automatic key rotation are applied.

Key generation uses cryptographically secure random functions. Keys are never hard coded and are stored separately from encrypted files using protected storage logic.

Re encryption occurs transparently when encryption mode changes. Users do not manually re upload files.

---

### 7.4 Behavioral Logging System

Every interaction generates structured logs including:

- Successful login attempts  
- Failed key submissions  
- Download frequency  
- Session timing patterns  
- Simulated attacker activity  

Logs serve as input to the machine learning model.

---

### 7.5 Machine Learning Threat Analyzer

The ML module analyzes behavior patterns to determine risk levels.

Input features include:

- Number of failed key attempts within a time window  
- Access frequency anomalies  
- Rapid repeated download requests  
- Session irregularities  
- Simulated quantum acceleration indicators  

The model outputs one of three classifications:

- Normal behavior  
- Suspicious activity  
- Active attack  

A supervised model such as Random Forest or Logistic Regression is used due to interpretability and feasibility within project constraints.

Accuracy is periodically evaluated using labeled simulated attack data.

---

### 7.6 Adaptive Crypto Controller

This component acts as the decision engine.

After receiving the threat level from the ML analyzer, it performs adaptive actions:

- Normal conditions → encryption remains lightweight  
- Suspicious conditions → encryption strength increases  
- Active attack → keys rotated, encryption upgraded, files re encrypted automatically  

All adaptation events are logged.

---

### 7.7 Quantum Threat Simulation

Since real quantum computation is unavailable, quantum threats are modeled behaviorally.

The system simulates quantum advantage by representing faster key guessing attempts and reduced effective key search difficulty.

When attack speeds exceed predefined classical thresholds, the ML system interprets this as a quantum aware threat scenario.

---

## 8. Non Functional Requirements

- Low response time during normal operations  
- No file corruption during repeated re encryption cycles  
- Real time threat detection during demonstrations  
- Stability under continuous attack simulation  
- Tamper resistant security logs within project scope  

---

## 9. System Architecture Description

The system follows a layered architecture.

The user interacts with a web interface built using Flask. Requests are handled by backend controllers responsible for authentication and file management.

Files pass through the encryption engine before storage. Behavioral logs are sent to the ML threat analyzer.

The analyzer evaluates risk and informs the adaptive crypto controller. The controller modifies encryption configuration and triggers re encryption when required.

This creates a continuous monitoring and defense feedback loop.

---

## 10. Technology Stack

- Backend: Python  
- Web Framework: Flask  
- Cryptography: PyCryptodome  
- Machine Learning: Scikit learn  
- Storage: Local filesystem (cloud simulation)  
- Visualization: Matplotlib  

The stack is lightweight to ensure reproducibility and demonstration clarity.

---

## 11. Attack Demonstration Scenarios

### Brute Force Attack Simulation

A script repeatedly attempts incorrect decryption keys.

In a static system, repeated attempts increase success probability. In the adaptive system, repeated failures increase threat level, triggering encryption upgrades and key rotation. The attack loses progress because the cryptographic environment changes during execution.

---

### Replay or Repeated Access Attack

Abnormal repeated download behavior triggers detection. The system escalates encryption strength and rotates keys, preventing predictable exploitation.

---

## 12. Security Evaluation Strategy

Security improvements are measured through:

- Attack success rate comparison  
- Increase in estimated cracking time  
- ML classification accuracy  
- Frequency of encryption transitions during attacks  

Graphs generated from logs provide empirical evidence.

---

## 13. Demo Workflow

1. User logs into the system  
2. File is uploaded and encrypted  
3. Normal download succeeds  
4. Attack script generates repeated incorrect attempts  
5. Threat level increases  
6. Encryption mode upgrades  
7. Files are re encrypted and keys rotated  
8. Attack fails  
9. Evaluation graphs demonstrate adaptive response  

---

## 14. Expected Outcomes

The system demonstrates that adaptive encryption reduces predictability and increases resistance against persistent attacks.

Expected observations:

- Increased cracking difficulty  
- Reduced attack success probability  
- Visible real time adaptive response  

---

## 15. Future Enhancements

- Distributed storage integration  
- Post quantum cryptographic algorithms  
- Online adaptive learning models  
- Blockchain backed key audit trails  
- Multi user threat intelligence sharing  

---

## 16. Risks and Mitigation

- ML misclassification → mitigated through threshold tuning and labeled data  
- Performance overhead from re encryption → controlled via cooldown logic  
- Key management complexity → structured metadata and secure storage  

---

## 17. Conclusion

Adaptive Moving Target Encryption introduces a practical demonstration of dynamic cybersecurity defense. By combining behavioral analytics with automated cryptographic adaptation, the system transforms encryption from a static shield into an evolving defense mechanism.

The project provides strong academic contribution, demonstrable value, and alignment with future quantum aware security research.
