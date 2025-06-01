# AIVOX GPT Backend (Phase 13)

A simple FastAPI backend to generate GPT responses securely.

## Run Locally

```bash
pip install -r requirements.txt
uvicorn main:app --reload
```

Make sure to set your `OPENAI_API_KEY` as an environment variable.

## Endpoint

`POST /generate`  
Body: `{ "prompt": "your prompt text" }`  
Returns: `{ "result": "GPT response" }`
