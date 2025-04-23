import { parentPort } from "node:worker_threads";
import { EventEmitter } from "node:events";
import { UUID } from "node:crypto";
import { Agent } from "port_agent";
import { ControllerEvents } from "../interfaces/controller.js";
import { VoIPProxy } from "./voip_proxy.js";

export class ControllerProxy extends EventEmitter<ControllerEvents> {

  protected agent?: Agent;

  constructor() {
    super();
    if (parentPort) {
      this.agent = new Agent(parentPort);
      this.agent.register("init", this.init);
    }
  }

  protected init = (uuid: UUID): void => {
    if (this.agent) {
      const voipProxy = new VoIPProxy({ uuid, agent: this.agent });
      this.emit("init", voipProxy);
    }
  };
}