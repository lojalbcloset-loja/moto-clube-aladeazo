import os
from dotenv import load_dotenv
from pymongo import MongoClient

load_dotenv()

mongo_url = os.getenv("MONGO_URL", "mongodb://localhost:27017")
client = MongoClient(mongo_url, serverSelectionTimeoutMS=5000)

try:
    client.admin.command('ping')
    print("SUCCESS: MongoDB conectado com sucesso")
except Exception as e:
    print("FAILED: Falha ao conectar ao MongoDB:", e)
finally:
    client.close()
