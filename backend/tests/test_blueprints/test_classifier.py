def test_classifier_predict(client):
    r = client.post(
        '/classifier/predict',
        json={ "feedback": "somethingIneedtosendonpost" },
        headers={ "Content-Type": "application/json" }
    )

    assert r.status_code == 200
    assert r.json.get('result') in ['pos', 'neg']

def test_classifier_predict_400(client):
    r = client.post(
        '/classifier/predict',
        json={},
        headers={ "Content-Type": "application/json" }
    )

    assert r.status_code == 400
