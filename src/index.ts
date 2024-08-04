import connectionScript from './connection';
import { InitProps, Props, TrackableEventData } from './types';
import { TrackableEventNameEnum } from './enums';

class SnapchatPixel {
  constructor({ pixelID, debug = true, pageViewOnInit = true }: Props) {
    connectionScript();
    this.pixelID = pixelID;
    this.debug = debug;
    this.pageViewOnInit = pageViewOnInit;
  }

  private pixelID: string;
  private debug: boolean;
  private consolePrefix = '[react-use-snapchat-pixel]';
  private initialized = false;
  private pageViewOnInit: boolean;
  private clientDedupId: string | undefined = undefined;

  init(props: InitProps) {
    if (this.initialized && this.debug) {
      console.error(
        this.consolePrefix,
        new Date().toLocaleTimeString(),
        '\nError',
        'Snapchat Pixel was already initialized'
      );

      return;
    }

    window.snaptr('init', this.pixelID, props);

    if (this.debug) {
      console.log(
        this.consolePrefix,
        new Date().toLocaleTimeString(),
        'Snapchat Pixel initialized'
      );
    }

    if (this.pageViewOnInit) {
      this.trackEvent(TrackableEventNameEnum.PAGE_VIEW);
    }
    this.initialized = true;
  }

  getClientDeduplicationId() {
    return this.clientDedupId;
  }

  trackEvent(
    eventName: TrackableEventNameEnum | keyof typeof TrackableEventNameEnum,
    data?: TrackableEventData[TrackableEventNameEnum]
  ) {
    if (!this.initialized && this.debug) {
      console.error(
        this.consolePrefix,
        new Date().toLocaleTimeString(),
        '\nError',
        '\nYou tried to track event before initialization'
      );
      return;
    }

    if (data?.client_dedup_id) {
      this.clientDedupId = data.client_dedup_id;
    }

    window.snaptr('track', eventName, data);

    if (this.debug) {
      console.log(
        this.consolePrefix,
        new Date().toLocaleTimeString(),
        '\nEvent tracked.',
        '\nEvent name: ',
        eventName,
        '\nEvent data: ',
        data
      );
    }
  }
}

export { SnapchatPixel, TrackableEventNameEnum };
