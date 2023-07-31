# Brainpool AI Technical Task: Fast Neural Style Transfer Web App

## Overview

In the last years, generative AIs have become capable of creating artistic works that some say surpass the capabilities of ordinary humans. An ancestor of such AIs was the [fast-neural-style-transfer](https://github.com/openvinotoolkit/open_model_zoo/tree/master/models/public/fast-neural-style-mosaic-onnx) model that takes an input image and transfers a specific style onto it.

The purpose of this task is to create a simple web application that allows users to upload an image file and receive back an image with the style transfered onto it. The model is available in the OpenVino Model Zoo and can be used with the OpenVino Model Server provided that it is converted
into the OpenVino IR format.

A Docker Compose file is provided that includes a single OpenVino Model Server (OVMS) service where the fast-neural-style-transfer model should be served from. [See here](https://docs.openvino.ai/latest/ovms_docs_serving_model.html) for documentation with regards to running OVMS in Docker. The model is provided for you also so development should focus on providing an engaging frontend user experience and responsive backend workflow.

## Required Features

Your frontend service must implement the following features:
- [ ] Image file uploading functionality and previewing.
- [ ] State responsivity during file uploading and style transference, e.g. a visual loading state.
- [ ] Styled image viewing and downloading.

Your API service must implement the following features:
- [ ] The API service must be able to communicate with the Model Server with the image input and receive an image output.
- [ ] The API service must expose a multipart/form-upload endpoint in order to accept an uploaded image.
- [ ] This RESTful endpoint must return the styled image as part of the API response.

Whether you choose to implement the following features is entirely up to you. They are considered "nice to haves":
- [ ] A logging system that logs the internal workings of the API service.
- [ ] Uploading the original file from the frontend to cloud storage and downloading the original file from cloud storage to the backend.
- [ ] Uploading the styled file from the backend to cloud storage and downloading the styled file from cloud storage to the frontend.

## Programming Language

### SPA
You are free to use any web framework that you wish to implement you SPA client. We use React internaly at Brainpool with a preference for TypeScript. However, you can use Vue or Svelte both with plain JavaScript if you so wish.

In addition, use of component libraries and CSS frameworks is not only allowed but also encouraged. We do not believe in reinveting the wheel so if some open-source code accomplishes your frontend requirement then feel free to use it.

### API
You are free to use any programming language you wish to implement your API service.

We recommend that you use Python for the API service as this is the language best suited to AI and MLops development. The key reason for this being that there are many Python libraries that are designed to make the development of AI and MLops services easier, such as TensorFlow, PyTorch, OpenVino, etc., and for the programmatic manipulation of images, e.g. cv2, PIL, etc.

For this specific task, nVidia's [Triton Inference Client](https://github.com/triton-inference-server/client) is the best choice as it is
designed to be used with OpenVino models and can be used to communicate with the Model Server over gRPC. Failing that, you could also use the [OpenVino Inference Client](https://github.com/openvinotoolkit/model_server/tree/releases/2022/3/client/python/ovmsclient) to communicate with the Model Server over gRPC or HTTP.

If you choose to use a different programming language, then you will need to find a suitable client library to communicate with the Model Server or you will need to implement your own client library.

Finally, the API framework that you use is entirely up to you. There are many to choose from in this modern era like: FastAPI, Flask, Litestar, Sanic, etc. Depending on your choice, be prepared to defend it in the face of our criticisms. This is especially true in the context of whether your API is coded using synchronous or asynchronous programming methods. Again, if you choose a different programming language then you will need to find a suitable API framework, e.g. Express for TS, or use standard packages, e.g. in Go or C#.

## Development Tools

You are free to use any development tools you wish, however, we recommend that you use the following:
- [Postman](https://www.postman.com/) or [Insomnia](https://insomnia.rest/) for communicating with the API directly over HTTP and testing its end-to-end functionality.
- [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/) for packaging the SPA client, API service, and Model Server into a single stack.
- [ChatGPT](https://chat.openai.com) and [GitHub Copilot](https://github.com/features/copilot/) for AI-enabled productivity boosts.
(Honestly, don't be afraid of using these tools since they will become key requirements of modern programming. Just know that it will be obvious if you have and be prepared to defend your use of them.)
