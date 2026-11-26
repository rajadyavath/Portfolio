# Resume Projects — Raja Diyavath

This file is the canonical project index for the four projects selected for the technical resume. It distinguishes implemented work from work that still needs its source code or evidence linked. Do not describe a planned or unverified component as completed.

## 1. Enterprise AI Data Intelligence Agent

**Target scope:** Enterprise-oriented data intelligence application.

**Planned stack:** LangChain, FastAPI, React, PostgreSQL and FAISS.

**Repository status:** A dedicated implementation repository was not found in the connected GitHub account during this review.

**Next implementation work:** Build the ingestion/API/retrieval workflow, connect PostgreSQL metadata and FAISS vector retrieval, add a React interface, tests, setup instructions and an architecture diagram. Until those components are committed and tested, present this as in progress rather than completed.

## 2. LLM Fine-Tuning & RAG-Based Domain-Specific Chatbot

**Repository:** [domain-specific-rag-chatbot](https://github.com/rajadyavath/domain-specific-rag-chatbot)

**Verified repository capabilities:** PDF extraction with PyMuPDF, recursive chunking with page/source metadata, sentence-transformer embeddings, FAISS dense retrieval, BM25 sparse retrieval, Reciprocal Rank Fusion, Hugging Face answer generation, FastAPI endpoints, QLoRA training utilities and automated tests.

**Important implementation status:** The repository includes a QLoRA training workflow, but its README states that no trained adapter or completed training result is bundled. The current local test suite reported 13 passing tests. An end-to-end query was tested; the NLI verifier rejected the generated answer and the pipeline abstained. Do not claim reliable end-to-end answer quality or completed fine-tuning until those are verified.

## 3. AI-Powered VR Assistant for Automotive Training

**Intended project:** Unity-based VR automotive training assistant for ZF Integrated Braking Control (IBC) and Electronic Parking Brake (EPB), with the IREX voice assistant.

**Known project technologies from the project notes:** Unity, Meta XR SDK, XR Interaction Toolkit, OpenXR, speech-to-text and text-to-speech.

**Repository status:** The existing [VR-PROJECT](https://github.com/rajadyavath/VR-PROJECT) repository is a large Unity project, but its inspected scene/script paths include generic cockpit, garden, oasis and terminal content. I could not verify that it contains the ZF automotive training scenes or IREX implementation. Do not link it as proof of the automotive assistant until the correct project assets are confirmed.

## 4. Microsoft Fabric Data Engineering Project

**Intended project:** Microsoft Fabric data engineering project.

**Known evidence:** The account owner has reported Microsoft Fabric data engineering experience and DP-700 certification.

**Repository status:** A dedicated Fabric project repository or Fabric implementation files were not found in the connected GitHub account during this review. The existing Unity repository named `My-project--01` is not evidence of a Fabric project.

**Next implementation work:** Add the actual Fabric artifacts or reproducible project assets (for example, notebooks, pipeline definitions, semantic model documentation, architecture and sample data where licensing permits). Do not substitute certification evidence for a project implementation.

---

## GitHub audit notes

- [Portfolio website](https://github.com/rajadyavath/Portfolio)
- [Domain-specific RAG chatbot](https://github.com/rajadyavath/domain-specific-rag-chatbot)
- [VR-PROJECT (private)](https://github.com/rajadyavath/VR-PROJECT)
- [Coffee Barista RAG Agent](https://github.com/rajadyavath/coffee-barista-rag-agent) — an additional project, not a substitute for the four resume projects.

This index is deliberately conservative: repository names and README claims are not treated as proof unless the corresponding implementation files or outputs can be inspected.
