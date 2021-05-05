FROM python:3.8

RUN pip install --upgrade pip

WORKDIR /reseach

COPY requirements.txt /opt/requirements.txt
RUN pip install -r /opt/requirements.txt

COPY . /reseach/

CMD python scripts.py