from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

OVMS_API_URL = "http://model-server:9001/v1/models/fast_neural_style:predict"

@app.route("/api/style-transfer", methods=["POST"])
def style_transfer():
    image = request.files.get("image")
    if not image:
        return jsonify({"error": "No image uploaded"}), 400

    # Save the image to a temporary file
    image_path = "/tmp/uploaded_image.jpg"
    image.save(image_path)

    # Perform style transfer using OpenVino Model Server
    with open(image_path, "rb") as f:
        image_data = f.read()

    response = requests.post(OVMS_API_URL, data=image_data, headers={"Content-Type": "application/octet-stream"})
    if not response.ok:
        return jsonify({"error": "Style transfer failed"}), 500

    styled_image_data = response.content

    # Save the styled image to a temporary file
    styled_image_path = "/tmp/styled_image.jpg"
    with open(styled_image_path, "wb") as f:
        f.write(styled_image_data)

    return jsonify({"styled_image": styled_image_path}), 200


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000)
