from flask import Blueprint, jsonify, request, abort

from .service import make_prediction


bp = Blueprint("classifier", __name__, url_prefix='/classifier')

@bp.route('/predict', methods=["POST"])
def predict():
    feedback = request.json.get('feedback')

    if feedback:
        try:
            result = make_prediction(feedback)
        except Exception as e:
            abort(500, f"Internal Error: Failed to make prediction: {e}")

        return jsonify({ "result": result }), 200
    else:
        abort(400, f"Error: Bad request, feedback body parameter is necessary"), 

def init_app(app):
    app.register_blueprint(bp)