def test_app_minimal(app_minimal):
    assert app_minimal.name == 'backend'

def test_app(app):
    assert app.name == 'backend'
