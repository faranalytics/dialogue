# Dialogue

A modular `VoIP` ➞ `STT` ➞ `AI Agent` ➞ `TTS` ➞ `VoIP` implementation.

## Introduction

Dialogue provides a framework and a set of interfaces for building VoIP Agent applications.

### Features

- Modular framework
- Event driven architecture
- Facilities for multithreaded deployments
- Talk over interruption of agent

## Installation

### Development Installation

These instructions describe how to clone the Dialogue repository and build the package.

#### Clone the repository.

```bash
git clone https://github.com/faranalytics/dialogue.git
```

#### Change directory into the Dialogue repository.

```bash
cd dialogue
```

#### Install the package dependencies.

```bash
npm install && npm update
```

#### Build the Dialogue package.

You can use the `clean:build` script in order to do a clean build.

```bash
npm run clean:build
```

Alternatively, you can use the `tsc:watch` script in order to watch and build the package. This will build the package each time you make a change to a file in `./src`. If you use the `tsc:watch` script, you will need to open a new terminal in order to build and run your application.

```bash
npm run tsc:watch
```

### Install your package

#### Change directory into your package directory and install the package.

```bash
npm install <path-to-the-dialogue-respository> --save
```

You should now be able to import Dialogue artifacts into your package.

## Usage

An [example](https://github.com/faranalytics/dialogue/tree/main/example) application is provided in the example subpackage. Interfaces are provided for each component of the VoIP application.

A Dialogue application is constructed by passing a `VoIP`, `STT`, `Agent`, and `TTS` implementation into a `Dialogue` implementation. The `Dialogue` connects the component interfaces that comprise the application.

Excerpted from `example/src/main.ts`.

```ts
controller.on("init", (voip: VoIP) => {
  const stt = new DeepgramSTT({
    apiKey: DEEPGRAM_API_KEY,
    openAIAPIKey: OPENAI_API_KEY,
  });
  const tts = new CartesiaTTS({ apiKey: CARTESIA_API_KEY });
  const agent = new OpenAIAgent({
    apiKey: OPENAI_API_KEY,
    system: OPENAI_SYSTEM_MESSAGE,
    greeting: OPENAI_GREETING_MESSAGE,
  });
  const dialogue = new Dialogue({ voip, stt, tts, agent });
  dialogue.start();
});
```

### Configuration

You can create a `.env` file in order to provide configuration settings for your application.

`.env`

```ini
TELNYX_API_KEY = "";
DEEPGRAM_API_KEY = "";
CARTESIA_API_KEY = "";
OPENAI_API_KEY = "";
OPENAI_SYSTEM_MESSAGE = "You are handling a phone call.  You have personal preferences and you are very opinionated.  Respond with one concise sentence."
OPENAI_GREETING_MESSAGE = "I'm ready."
KEY_FILE = ""
CERT_FILE = ""
PORT = 3443
HOST_NAME = "0.0.0.0"
STREAM_URL = "wss://example.com:3443/"
```

### Implementations

Dialogue provides example [implementations](https://github.com/faranalytics/dialogue/tree/main/src/implementations) for each of the artifacts that comprise a VoIP Agent application. You can use an implementation _as-is_, subclass it, or implement your own.

#### VoIP

A VoIP implementation is provided that uses the [Telnyx](https://telnyx.com/) API.

#### Speech to text (STT)

An STT implementation is provided that uses the [Deepgram](https://deepgram.com/) API.

#### Text to speech (TTS)

A TTS implementation is provided that uses the [Cartesia](https://cartesia.ai/) API.

#### AI agent

An Agent implementation is provided that uses the [OpenAI](https://platform.openai.com/docs/overview) API.
