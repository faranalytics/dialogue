import { EventEmitter } from "node:events";
import { UUID } from "node:crypto";
import { Metadata } from "../commons/metadata.js";

export interface AgentEvents {
  "request_abort_audio": [UUID];
  "abort_transcript": [UUID];
  "transcript": [UUID, string];
}

export interface Agent {
  emitter: EventEmitter<AgentEvents>;
  onTranscript: (transcript: string) => void;
  onMetadata: (metadata: Metadata) => void;
  onTranscriptDispatched: (uuid: UUID) => void;
  onStreaming: () => void;
  onDispose: () => void;
}