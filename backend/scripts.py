from os import system as run


def start():
    run('gunicorn -w 2 --reload --access-logfile - "backend:create_app()"')

def test():
    run('pytest -vv')