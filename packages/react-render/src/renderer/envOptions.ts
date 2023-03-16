import { normalizeLink } from "./utils";

export const defaultOptions = {

  isError: false,

  fetcher: () => {},

  jumpTo: (to: string, action?: any) => {
    if (to === 'goBack') {
      return window.history.back();
    }
    to = normalizeLink(to);
    if (action && action.actionType === 'url') {
      action.blank === false ? (window.location.href = to) : window.open(to);
      return;
    }
    if (/^https?:\/\//.test(to)) {
      window.location.replace(to);
    } else {
      location.href = to;
    }
  },
}
