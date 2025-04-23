export class Metadata {
  public id?: string;
  public serverCallStartTime?: string;
  public to?: string;
  public from?: string;
  public channels?: number;
  public encoding?: string;
  public sampleRate?: number;

  constructor({ id, serverCallStartTime, to, from, channels, encoding, sampleRate }: Metadata) {
    this.id = id;
    this.serverCallStartTime = serverCallStartTime;
    this.to = to;
    this.from = from;
    this.channels = channels;
    this.encoding = encoding;
    this.sampleRate = sampleRate;
  }
}