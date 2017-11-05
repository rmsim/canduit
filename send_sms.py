from flask import Flask, request, redirect
from twilio import twiml
from twilio.twiml.messaging_response import MessagingResponse
import csv

account_sid = "AC6b14568494cf15e6845734bdb7f2c348"
auth_token = "cde5f95322783c1543b470e21d2609cf"

app = Flask(__name__)

answers = {}
userStates = {}

questions = ["Is there a medical emergency?", "What is the address of your current location?", "What supplies do you need? (Food, Clothing, Medical, etc)"]

@app.route("/", methods=['GET', 'POST'])
def q1():

    resp = MessagingResponse()

    text_value = request.values["Body"]

    key = request.values["From"]
 
    if key not in userStates:
        userStates[key] = 0
        state = userStates[key]
        answers[key] = []
        print(state)
    else:
        state = userStates[key]
        answers[key].append(text_value)
        print(state)

    if state < 3:
        resp.message(questions[state])
        userStates[key] += 1
        state = userStates[key]
    else:
        resp.message("Your response has been recorded.")
        with open('canduit_responses.csv', 'w') as f:
            w = csv.DictWriter(f, answers.keys())
            w.writeheader()
            w.writerow(answers)
        return(str(resp))

    return (str(resp))

if __name__ == "__main__":
    app.run(debug=True)
