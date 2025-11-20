from django.shortcuts import render
from .models import ChatMessage
from google.cloud import dialogflow
from google.oauth2 import service_account

DIALOGFLOW_PROJECT_ID = "chatbot-yw9b"
SESSION_ID = "123456"
LANGUAGE_CODE = "en"

# Load credentials directly
credentials = service_account.Credentials.from_service_account_file(
    r"E:\github\SchoolChatbot\SchoolChatbot\dialogflow_key.json"
)

def chatbot_view(request):
    response_text = ""
    if request.method == "POST":
        user_message = request.POST.get("message")

        # Dialogflow session with credentials
        session_client = dialogflow.SessionsClient(credentials=credentials)
        session = session_client.session_path(DIALOGFLOW_PROJECT_ID, SESSION_ID)

        text_input = dialogflow.TextInput(text=user_message, language_code=LANGUAGE_CODE)
        query_input = dialogflow.QueryInput(text=text_input)

        response = session_client.detect_intent(request={"session": session, "query_input": query_input})
        response_text = response.query_result.fulfillment_text

        # Save chat to database
        ChatMessage.objects.create(user_message=user_message, bot_response=response_text)

    chat_history = ChatMessage.objects.order_by('-created_at')[:20][::-1]
    return render(request, "chatbot/chatbot.html", {"chat_history": chat_history})
