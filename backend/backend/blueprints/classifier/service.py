import pickle

from joblib import load


def make_prediction(feedback: str) -> str:
    model = load("backend/models/sklearn-logistc-regressor-model.joblib")
    vectorizer = pickle.load(open("backend/models/vectorizer.pickle", "rb"))

    return "pos" if model.predict(vectorizer.transform([feedback])) else "neg"