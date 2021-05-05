from os import system as run


def notebook():
    run("jupyter notebook --allow-root")

if __name__ == "__main__":
    notebook()