import { EventEmitter } from "node:events";
import { UUID } from "node:crypto";
import { Metadata } from "../commons/metadata.js";

export interface VoIPEvents {
  "audio_in": [string];
  "audio_out": [UUID, string];
  "metadata": [Metadata];
  "abort_transcript": [UUID];
  "streaming": [];
  "dispose": [];
}

export interface VoIP {
  emitter: EventEmitter<VoIPEvents>;
  onAudioOut: (uuid: UUID, data: string) => void;
}