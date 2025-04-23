import { UUID } from "node:crypto";
import { EventEmitter } from "node:events";

export interface TTSEvents {
  "audio_out": [UUID, string];
  "transcript_dispatched": [UUID];
  "dispose": [];
}

export interface TTS {
  emitter: EventEmitter<TTSEvents>;
  onAbortAudio: () => void;
  onAbortTranscript: (uuid: UUID) => void;
  onTranscript: (uuid: UUID, transcript: string) => void;
  onDispose: () => void;
}